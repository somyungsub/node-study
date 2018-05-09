var http = require("http");

// 웹서버 객체 생성
var server = http.createServer();

// 웹서버 포트번호 3000번으로 대기
var host = "172.20.10.3";   // 본인 PC IP
var port = 3000;

// server.listen(port, function () {
//     console.log("웹 서버 시작 - 포트번호 : " + port);
// });

server.listen(port, host, '50000',function () {
    console.log("웹 서버 시작 : %s:%d", host, port);
    console.log(server.request);
    console.log(server.connection);
});



