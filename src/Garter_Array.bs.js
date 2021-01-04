// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Belt_Map = require("bs-platform/lib/js/belt_Map.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Belt_MapInt = require("bs-platform/lib/js/belt_MapInt.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function isEmpty(xs) {
  return xs.length === 0;
}

function lastUnsafe(ar) {
  return ar[ar.length - 1 | 0];
}

function last(ar) {
  if (ar.length === 0) {
    return ;
  } else {
    return Caml_option.some(lastUnsafe(ar));
  }
}

function updateUnsafe(ar, i, f) {
  var v = ar[i];
  ar[i] = Curry._1(f, v);
  
}

function groupBy(xs, keyFn, id) {
  var empty = Belt_Map.make(id);
  return Belt_Map.map(Belt_Array.reduceU(xs, empty, (function (res, x) {
                    return Belt_Map.updateU(res, Curry._1(keyFn, x), (function (v) {
                                  if (v !== undefined) {
                                    return {
                                            hd: x,
                                            tl: v
                                          };
                                  } else {
                                    return {
                                            hd: x,
                                            tl: /* [] */0
                                          };
                                  }
                                }));
                  })), Belt_List.toArray);
}

function groupBy$1(xs, keyFn) {
  return Belt_MapInt.map(Belt_Array.reduceU(xs, undefined, (function (res, x) {
                    return Belt_MapInt.updateU(res, Curry._1(keyFn, x), (function (v) {
                                  if (v !== undefined) {
                                    return {
                                            hd: x,
                                            tl: v
                                          };
                                  } else {
                                    return {
                                            hd: x,
                                            tl: /* [] */0
                                          };
                                  }
                                }));
                  })), Belt_List.toArray);
}

var Int = {
  groupBy: groupBy$1
};

function frequencies(ar, id) {
  return Belt_Map.map(groupBy(ar, (function (x) {
                    return x;
                  }), id), (function (prim) {
                return prim.length;
              }));
}

function scan(xs, init, f) {
  var state = new Array(xs.length);
  var cur = {
    contents: init
  };
  Belt_Array.forEachWithIndex(xs, (function (idx, x) {
          cur.contents = Curry._2(f, cur.contents, x);
          state[idx] = cur.contents;
          
        }));
  return state;
}

function max(xs) {
  var res = xs[0];
  return Belt_Array.reduce(xs, res, Caml_obj.caml_max);
}

function maxIndex(xs) {
  var init_0 = xs[0];
  var init = [
    init_0,
    0
  ];
  return Belt_Array.reduceWithIndex(xs, init, (function (acc, v, idx) {
                  var curMax = acc[0];
                  if (Caml_obj.caml_compare(v, curMax) > 0) {
                    return [
                            v,
                            idx
                          ];
                  } else {
                    return [
                            curMax,
                            acc[1]
                          ];
                  }
                }))[1];
}

function reduce1(xs, f) {
  var r = xs[0];
  for(var i = 1 ,i_finish = xs.length; i < i_finish; ++i){
    r = Curry._2(f, r, xs[i]);
  }
  return r;
}

function windows(xs, n, stepOpt, param) {
  var step = stepOpt !== undefined ? stepOpt : n;
  var len = xs.length;
  var iter = function (i) {
    if (i > (len - n | 0)) {
      return /* [] */0;
    } else {
      return {
              hd: Belt_Array.slice(xs, i, n),
              tl: iter(i + step | 0)
            };
    }
  };
  return Belt_List.toArray(iter(0));
}

var get = Belt_Array.get;

var getExn = Belt_Array.getExn;

var set = Belt_Array.set;

var setExn = Belt_Array.setExn;

var shuffleInPlace = Belt_Array.shuffleInPlace;

var shuffle = Belt_Array.shuffle;

var reverseInPlace = Belt_Array.reverseInPlace;

var reverse = Belt_Array.reverse;

var make = Belt_Array.make;

var range = Belt_Array.range;

var rangeBy = Belt_Array.rangeBy;

var makeByU = Belt_Array.makeByU;

var makeBy = Belt_Array.makeBy;

var makeByAndShuffleU = Belt_Array.makeByAndShuffleU;

var makeByAndShuffle = Belt_Array.makeByAndShuffle;

var zip = Belt_Array.zip;

var zipByU = Belt_Array.zipByU;

var zipBy = Belt_Array.zipBy;

var unzip = Belt_Array.unzip;

var concat = Belt_Array.concat;

var concatMany = Belt_Array.concatMany;

var slice = Belt_Array.slice;

var sliceToEnd = Belt_Array.sliceToEnd;

var fill = Belt_Array.fill;

var blit = Belt_Array.blit;

var blitUnsafe = Belt_Array.blitUnsafe;

var forEachU = Belt_Array.forEachU;

var forEach = Belt_Array.forEach;

var mapU = Belt_Array.mapU;

var map = Belt_Array.map;

var getByU = Belt_Array.getByU;

var getBy = Belt_Array.getBy;

var getIndexByU = Belt_Array.getIndexByU;

var getIndexBy = Belt_Array.getIndexBy;

var keepU = Belt_Array.keepU;

var keep = Belt_Array.keep;

var keepWithIndexU = Belt_Array.keepWithIndexU;

var keepWithIndex = Belt_Array.keepWithIndex;

var keepMapU = Belt_Array.keepMapU;

var keepMap = Belt_Array.keepMap;

var forEachWithIndexU = Belt_Array.forEachWithIndexU;

var forEachWithIndex = Belt_Array.forEachWithIndex;

var mapWithIndexU = Belt_Array.mapWithIndexU;

var mapWithIndex = Belt_Array.mapWithIndex;

var partitionU = Belt_Array.partitionU;

var partition = Belt_Array.partition;

var reduceU = Belt_Array.reduceU;

var reduce = Belt_Array.reduce;

var reduceReverseU = Belt_Array.reduceReverseU;

var reduceReverse = Belt_Array.reduceReverse;

var reduceReverse2U = Belt_Array.reduceReverse2U;

var reduceReverse2 = Belt_Array.reduceReverse2;

var reduceWithIndexU = Belt_Array.reduceWithIndexU;

var reduceWithIndex = Belt_Array.reduceWithIndex;

var joinWithU = Belt_Array.joinWithU;

var joinWith = Belt_Array.joinWith;

var someU = Belt_Array.someU;

var some = Belt_Array.some;

var everyU = Belt_Array.everyU;

var every = Belt_Array.every;

var every2U = Belt_Array.every2U;

var every2 = Belt_Array.every2;

var some2U = Belt_Array.some2U;

var some2 = Belt_Array.some2;

var cmpU = Belt_Array.cmpU;

var cmp = Belt_Array.cmp;

var eqU = Belt_Array.eqU;

var eq = Belt_Array.eq;

exports.get = get;
exports.getExn = getExn;
exports.set = set;
exports.setExn = setExn;
exports.shuffleInPlace = shuffleInPlace;
exports.shuffle = shuffle;
exports.reverseInPlace = reverseInPlace;
exports.reverse = reverse;
exports.make = make;
exports.range = range;
exports.rangeBy = rangeBy;
exports.makeByU = makeByU;
exports.makeBy = makeBy;
exports.makeByAndShuffleU = makeByAndShuffleU;
exports.makeByAndShuffle = makeByAndShuffle;
exports.zip = zip;
exports.zipByU = zipByU;
exports.zipBy = zipBy;
exports.unzip = unzip;
exports.concat = concat;
exports.concatMany = concatMany;
exports.slice = slice;
exports.sliceToEnd = sliceToEnd;
exports.fill = fill;
exports.blit = blit;
exports.blitUnsafe = blitUnsafe;
exports.forEachU = forEachU;
exports.forEach = forEach;
exports.mapU = mapU;
exports.map = map;
exports.getByU = getByU;
exports.getBy = getBy;
exports.getIndexByU = getIndexByU;
exports.getIndexBy = getIndexBy;
exports.keepU = keepU;
exports.keep = keep;
exports.keepWithIndexU = keepWithIndexU;
exports.keepWithIndex = keepWithIndex;
exports.keepMapU = keepMapU;
exports.keepMap = keepMap;
exports.forEachWithIndexU = forEachWithIndexU;
exports.forEachWithIndex = forEachWithIndex;
exports.mapWithIndexU = mapWithIndexU;
exports.mapWithIndex = mapWithIndex;
exports.partitionU = partitionU;
exports.partition = partition;
exports.reduceU = reduceU;
exports.reduce = reduce;
exports.reduceReverseU = reduceReverseU;
exports.reduceReverse = reduceReverse;
exports.reduceReverse2U = reduceReverse2U;
exports.reduceReverse2 = reduceReverse2;
exports.reduceWithIndexU = reduceWithIndexU;
exports.reduceWithIndex = reduceWithIndex;
exports.joinWithU = joinWithU;
exports.joinWith = joinWith;
exports.someU = someU;
exports.some = some;
exports.everyU = everyU;
exports.every = every;
exports.every2U = every2U;
exports.every2 = every2;
exports.some2U = some2U;
exports.some2 = some2;
exports.cmpU = cmpU;
exports.cmp = cmp;
exports.eqU = eqU;
exports.eq = eq;
exports.isEmpty = isEmpty;
exports.lastUnsafe = lastUnsafe;
exports.last = last;
exports.updateUnsafe = updateUnsafe;
exports.groupBy = groupBy;
exports.Int = Int;
exports.frequencies = frequencies;
exports.scan = scan;
exports.max = max;
exports.maxIndex = maxIndex;
exports.reduce1 = reduce1;
exports.windows = windows;
/* No side effect */
