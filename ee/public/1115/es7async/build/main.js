function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by plter on 2016/11/15.
 */

(function () {
    let run = (() => {
        var _ref = _asyncToGenerator(function* () {
            let data = yield load("data.txt");
            console.log(data);
        });

        return function run() {
            return _ref.apply(this, arguments);
        };
    })();

    function load(url) {
        return new Promise(function (ok, rej) {
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                ok(xhr.responseText);
            };
            xhr.onerror = function (e) {
                rej(e);
            };

            xhr.open("GET", url);
            xhr.send();
        });
    }

    run();
})();

