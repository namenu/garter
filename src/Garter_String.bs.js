// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Garter_Vector = require("@namenu/garter-vector/src/Garter_Vector.bs.js");

function toArray(s) {
  return Array.from(s);
}

function toVector(s) {
  return Garter_Vector.fromArray(Array.from(s));
}

function charCode(s) {
  return s.charCodeAt(0) | 0;
}

exports.toArray = toArray;
exports.toVector = toVector;
exports.charCode = charCode;
/* No side effect */
