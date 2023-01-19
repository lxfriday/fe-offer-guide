var tasks = [];
var _loop_1 = function (w) {
    tasks.push(new Promise(function (resolve, reject) {
        var num = Math.floor(Math.random() * 100) * 10;
        setTimeout(function () {
            resolve((w + 1) * 100);
        }, (w + 1) * 100);
        // setTimeout(() => {
        //   resolve(num)
        // }, num)
    }));
};
for (var w = 0; w < 20; w++) {
    _loop_1(w);
}
function paraRequests(reqs, limit) {
    return new Promise(function (resolve, reject) {
        var ret = [], len = reqs.length;
        var i = 0, cnt = 0;
        for (var k = 0; k < limit; k++) {
            run();
        }
        function run() {
            if (i >= len)
                return;
            var idx = i++;
            reqs[idx].then(function (d) {
                ret[idx] = d;
                cnt++;
                console.log('d', d);
                if (cnt === len)
                    resolve(ret);
                run();
            });
        }
    });
}
console.time('log');
paraRequests(tasks.reverse(), 10).then(function (data) {
    console.log('data', data);
    console.timeEnd('log');
});
