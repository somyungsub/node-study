var http = require("http");
var fs = require("fs"); // 파일스트림


/*
    웹서버 객체 생성
 */

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
    var filename = 'house.png';
    fs.readFile(filename, function (err, data) {
        res.writeHead(200, {"Content-Type": "image/png"});  // text/plain, text/html, text/css, text/xml, ...... 정의하여 데이터에 맞게 활용가능~!
        res.write(data);
        res.end();
    });
});

// 서버 종료 이벤트 처리
server.on('close', function () {
    console.log('서버가 종료 되었습니다');
});



