#!/usr/bin/env node
 //这里需要声明文件运行环境
const program = require('commander');
program
    .version(`kug ${require('../package').version}`)
    .usage('<command> [options]')

program
    .command('new <app-name>')
    .description('新建一个项目')
    .option('-d,--default', 'create a project')
    .option('-c, --clone', 'Use git clone when fetching remote preset')
    .action(function (name, cmd) {
        require('../lib/index.js').run(name, cmd);
    });
    program
    .command('add <plugin-name>')
    .description('添加一个插件')
    .option('-d,--default', 'create a project')
    .option('-c, --clone', 'Use git clone when fetching remote preset')
    .action(function (name, cmd) {
        console.log("添加插件完成"+argument[0]);
        
    });
program.on('--help', () => {
    console.log()
    console.log(`  Run xxx for detailed usage of given command.`)
    console.log()
})

program.parse(process.argv);