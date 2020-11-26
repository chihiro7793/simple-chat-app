
export const multisplice = function (array) {
    var args = Array.apply(null, arguments).slice(1);
    args.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < args.length; i++) {
        var index = args[i] - i;
        array.splice(index, 1);
    }
}

export const createdTime = () => {
    var d = new Date();
    return (d.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }))
}
