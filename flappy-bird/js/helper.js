var log = console.log.bind(console)
var e = sel => document.querySelector(sel)
// var log = function(s) {
//     e('#text-log').value += '\n' + s
// }

var imageFromPath = function (path) {
    var img = new Image()
    img.src = path
    return img
}


var rectIntersects = function (a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.h) {
        if (b.x > o.x && b.x < o.x + o.w) {
            return true
        }
    }
    return false
}

const randomBetween = function(start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}
