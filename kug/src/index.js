/*eslint-disable*/
exports.run = function (name, other) {
    const child_process = require('child_process');
    console.log("创建中...");
    let subProcess = child_process.exec("git clone https://github.com/hanpanapn/skyfly-cli.git", function (err, stdout) {
        if (err) console.log(err);
        console.log("创建完毕");
        subProcess.kill()
    });


};