// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.bs.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Garter_Vector = require("../src/Garter_Vector.bs.js");

Jest.describe("Vector", (function (param) {
        Jest.test("empty", (function (param) {
                return Jest.Expect.toBe(0, Jest.Expect.expect(Garter_Vector.length(Garter_Vector.make(undefined))));
              }));
        Jest.testAll("fromArray", Belt_List.fromArray(Belt_Array.range(1, 32)), (function (n) {
                var v = Garter_Vector.fromArray(Belt_Array.range(1, n));
                return Jest.Expect.toBe(n, Jest.Expect.expect(Garter_Vector.length(v)));
              }));
        return Jest.testAll("fromArray (large)", Belt_List.fromArray(Belt_Array.rangeBy(100, 10000, 100)), (function (n) {
                      var v = Garter_Vector.fromArray(Belt_Array.range(1, n));
                      return Jest.Expect.toBe(n, Jest.Expect.expect(Garter_Vector.length(v)));
                    }));
      }));

/*  Not a pure module */