#!/usr/bin/env node
 //这里需要声明文件运行环境
const program = require('commander');
program
     .version(`kug ${require('../package').version}`)
     .usage('<command>')
// program
//     .option('-d,--default', 'create a project')

program
    .command('init')
    .description('初始化一个google扩展程序')
    .action(function (name, cmd) {
        require('../lib/index.js').run(name, cmd);
    });
program.parse(process.argv);