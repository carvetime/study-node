

// 1、开启本地server
// var http = require('http')

//     http.createServer(function (request,response){
//     response.writeHead(200,{'Content-Type': 'text/plain'})
//     response.end('files path:' + __filename + '\n' + 'dirname:' + __dirname + '\n')
// }).listen(8881)

// process.on('exit',function(code){
//     console.log('program exit')
// })

// console.log('server running at http://127.0.0.1:8881/')




// 2、输出到终端
// process.stdout.write("Hello World!" + "\n");

// // 通过参数读取
// process.argv.forEach(function(val, index, array) {
//    console.log(index + ': ' + val);
// });

// // 获取执行路径
// console.log(process.execPath);


// // 平台信息
// console.log(process.platform);

// 输出当前目录
// console.log('当前目录: ' + process.cwd());

// // 输出当前版本
// console.log('当前版本: ' + process.version);

// // 输出内存使用情况
// console.log(process.memoryUsage());


