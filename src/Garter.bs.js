// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Garter_Array = require("./Garter_Array.bs.js");
var Garter_Vector = require("@namenu/garter-vector/src/Garter_Vector.bs.js");

function doWithArray(vec, f) {
  return Garter_Vector.fromArray(Curry._1(f, Garter_Vector.toArray(vec)));
}

function max(v) {
  return Garter_Vector.fromArray(Garter_Array.max(Garter_Vector.toArray(v)));
}

var Vector = {
  make: Garter_Vector.make,
  length: Garter_Vector.length,
  push: Garter_Vector.push,
  pop: Garter_Vector.pop,
  peek: Garter_Vector.peek,
  get: Garter_Vector.get,
  getExn: Garter_Vector.getExn,
  set: Garter_Vector.set,
  setExn: Garter_Vector.setExn,
  map: Garter_Vector.map,
  keep: Garter_Vector.keep,
  reduce: Garter_Vector.reduce,
  fromArray: Garter_Vector.fromArray,
  toArray: Garter_Vector.toArray,
  debug: Garter_Vector.debug,
  doWithArray: doWithArray,
  max: max
};

var $$Array;

var Id;

var Int;

var List;

var Obj;

var Queue;

var $$Set;

var $$String;

exports.$$Array = $$Array;
exports.Id = Id;
exports.Int = Int;
exports.List = List;
exports.Obj = Obj;
exports.Queue = Queue;
exports.$$Set = $$Set;
exports.$$String = $$String;
exports.Vector = Vector;
/* No side effect */
