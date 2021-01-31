include Belt.Set;

module V = Re_Vector;

let fromVector: (V.t('a), ~id: Belt.Set.id('a, 'b)) => Belt.Set.t('a, 'b) =
  (v, ~id) => v->V.toArray->Belt.Set.fromArray(~id);

let toVector: Belt.Set.t('a, 'b) => V.t('a) =
  s => s->Belt.Set.toArray->V.fromArray;
