// Express 기본 모듈 불러오기
var express = require('express')
    , http = require('http');

// express 객체 생성
var app = express();

// 미들웨어 1
app.use(function (req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함.');
    req.user = 'mike';  // 객체의 프로퍼티를 생성하고 다음 미들웨어로 데이터를 전달
    next();
});




// 미들웨어 2
app.use('/', function (req, res, next) {
    console.log('두 번째 미들웨어에서 요청을 처리함.');
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end('<h1>Express서버에서' + req.user + '응답한 결과!</h1>');
});

// 포트번호 설정
var port = process.env.PORT || 3000;

// Express 서버 시작
http.createServer(app).listen(port, function () {
    console.log('익스프레스 서버를 시작했습니다 : ' + port);
});
