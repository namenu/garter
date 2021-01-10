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
  let max: vec('a) => 'a = v => v->toArray->Array.max;
};
