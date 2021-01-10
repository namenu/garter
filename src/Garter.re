module Array = Garter_Array;

module Id = Garter_Id;

module Int = Garter_Int;

module List = Garter_List;

module Obj = Garter_Obj;

module Queue = Garter_Queue;

module Set = Garter_Set;

module String = Garter_String;

module Vector = {
  include Garter_Vector;

  let doWithArray = (vec, f) => vec->toArray->f->fromArray;

  let max = v => doWithArray(v, Array.max);
};

type vec('a) = Vector.t('a);
