module Array = Garter_Array;

module Id = Garter_Id;

module Int = Garter_Int;

module List = Garter_List;

module Obj = Garter_Obj;

module Queue = Garter_Queue;

module Set = Garter_Set;

module String = Garter_String;

type vec('a) = Garter_Vector.t('a);

module Vector = {
  include Garter_Vector;

  // stratify applications here
  let isEmpty = v => v->length == 0;
  let max: vec('a) => 'a = v => v->toArray->Array.max;

  let groupBy = (xs, ~keyFn, ~id) => {
    let empty = Belt.Map.make(~id);

    reduce(xs, empty, (res, x) => {
      Belt.Map.updateU(res, keyFn(x), (. v) =>
        switch (v) {
        | Some(l) => Some([x, ...l])
        | None => Some([x])
        }
      )
    })
    ->Belt.Map.map(Belt.List.toArray);
  };

  let frequencies = (ar, ~id) => {
    groupBy(ar, ~keyFn=x => x, ~id)->Belt.Map.map(Belt.Array.length);
  };
};
