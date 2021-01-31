include Re_Vector;

// stratify applications here
let isEmpty = v => v->length == 0;
let max = v => v->toArray->Garter_Array.max;

let groupBy = (xs, ~keyFn=Garter_Fn.identity, ~id) => {
  let empty = Belt.Map.make(~id);

  reduce(xs, empty, (res, x) => {
    Belt.Map.updateU(res, keyFn(x), (. v) =>
      switch (v) {
      | Some(l) => Some(l->push(x))
      | None => Some(fromArray([|x|]))
      }
    )
  });
};

let frequencies = (ar, ~id) => {
  groupBy(ar, ~id);
};

