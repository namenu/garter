include Belt.Array;

let isEmpty = xs => length(xs) === 0;

let lastUnsafe = ar => getUnsafe(ar, length(ar) - 1);

let last = ar => isEmpty(ar) ? None : Some(lastUnsafe(ar));

let updateUnsafe = (ar, i, f) => {
  let v = getUnsafe(ar, i);
  setUnsafe(ar, i, f(v));
};

/**
 * ~keyFn으로 그루핑된 Belt.Map을 반환합니다.
 * ~id에는 Belt.Id.Comparable 모듈이 전달되어야 합니다.
 * 일반적인 타입에 대한 Comparable 모듈은 Garter.Id를 참고하세요.
 *
 * 예)
 * ```
 * groupBy(
 *   [|1, 2, 3, 4, 5, 6, 7, 8, 9, 10|],
 *   ~keyFn=x => x mod 3,
 *   ~id=Garter.Id.IntComparable,
 * )
 * ```
 */
let groupBy = (xs, ~keyFn, ~id) => {
  Js.log(keyFn);
  let empty = Belt.Map.make(~id);

  reduceU(xs, empty, (. res, x) => {
    Belt.Map.updateU(res, keyFn(x), (. v) =>
      switch (v) {
      | Some(l) => Some(l->concat([|x|]))
      | None => Some([|x|])
      }
    )
  });
};

[|1, 2, 3, 1, 2, 3|]
->groupBy(~keyFn=x => x mod 3, ~id=(module Garter_Id.IntComparable))
->Belt.Map.toArray
->Js.log;

/**
 * 배열에 들어있는 값들의 빈도를 구하여 Map으로 반환합니다.
 */
let frequencies = (ar, ~id) => {
  groupBy(ar, ~keyFn=Garter_Fn.identity, ~id)->Belt.Map.map(length);
};

/** 먼저 등장하는 순서를 유지하면서 중복 원소를 제거합니다. */
let distinct = (ar, ~id) => {
  ar
  ->reduce((Belt.Set.make(~id), []), ((seen, res), v) =>
      if (seen->Belt.Set.has(v)) {
        (seen, res);
      } else {
        (seen->Belt.Set.add(v), res->Belt.List.add(v));
      }
    )
  ->snd
  ->Belt.List.reverse
  ->Belt.List.toArray;
};

/** reduce와 비슷하나 중간 결과를 모두 포함한 array를 반환해줌 */
let scan = (xs, init, f) => {
  let state = makeUninitializedUnsafe(length(xs));
  let cur = ref(init);
  forEachWithIndex(
    xs,
    (idx, x) => {
      cur := f(cur^, x);
      setUnsafe(state, idx, cur^);
    },
  );
  state;
};

let reduce1 = (xs, f) => {
  let r = ref(xs->Belt.Array.getUnsafe(0));
  for (i in 1 to length(xs) - 1) {
    r := f(r^, xs->Belt.Array.getUnsafe(i));
  };
  r^;
};

let max = xs => reduce1(xs, max);

/** Returns (max_value, index). Array may not be empty. */
let maxIndex = xs => {
  let init = (getUnsafe(xs, 0), 0);
  reduceWithIndex(
    xs,
    init,
    (acc, v, idx) => {
      let (curMax, curIdx) = acc;
      compare(v, curMax) > 0 ? (v, idx) : (curMax, curIdx);
    },
  )
  ->snd;
};

let min = xs => reduce1(xs, min);

let windows = (xs, ~n: int, ~step=n, ()) => {
  let len = size(xs);
  let rec iter = i =>
    if (i > len - n) {
      [];
    } else {
      [xs->slice(~offset=i, ~len=n), ...iter(i + step)];
    };
  iter(0)->Belt.List.toArray;
};

let toVector = Re_Vector.fromArray;
