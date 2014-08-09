var merge = require('../')
var x = { foo : { 'bar' : 3 }, ar : [ { thing : 'b' } ], simplear: [1, 2, 3] }
var y = { foo : { 'baz' : 4 }, quux : 5, ar : [ { thing : 'a' } ], simplear: [4, 5] }
var merged = merge(x, y)
console.dir(merged)
