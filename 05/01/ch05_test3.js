var http = require("http");

// 웹서버 객체 생성
var server = http.createServer();

// 웹서버 포트번호 3000번으로 대기
var port = 3000;
server.listen(port, function () {
    console.log("웹 서버 시작 : %d", port);
});


/*
    클라이언트 연결 이벤트 처리
    socket : 연결정보(클라이언트)
 */
server.on('connection', function (socket) {
    var addr = socket.address();    // 소캣 address 객체
    console.log(addr);
    console.log("클라이언트가 접속 했습니다. %s, %d", addr.address, addr.port);
});

/*
    클라이언트 요청 이벤트 처리
    req : request   (요청)
    res : response  (응답)
 */
server.on('request', function (req, res) {
    console.log("클라이언트 요청이 들어왔습니다");
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head><title>응답페이지</title></head>');
    res.write('<body>');
    res.write('<h1>노드제이에스로 부터 응답페이지 생성</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end('abc', 'utf-8', function () {
        console.log('응답이 완료 되었습니다!');
    });
});

// 서버 종료 이벤트 처리
server.on('close', function () {
    console.log('서버가 종료 되었습니다');
});



