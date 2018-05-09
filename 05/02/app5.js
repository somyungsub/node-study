/*
    JSON 데이터 전송해보기
 */

// Express 기본 모듈 불러오기
var express = require('express')
    , http = require('http');

// express 객체 생성
var app = express();

// 미들웨어 1
app.use(function (req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함.');
    res.redirect('http://google.co.kr');    // 페이지 강제이동`
});

// 포트번호 설정
var port = process.env.PORT || 3000;

// Express 서버 시작
http.createServer(app).listen(port, function () {
    console.log('익스프레스 서버를 시작했습니다 : ' + port);
});
