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
    console.log('첫 번째 미들웨어에서 요청을 처리함.')

    /*
        Get방식 요청
     */
    var userAgent = req.header('User-Agent');
    var paramName = req.query.name; // url 파라미터 키값 - name
    var paramAge = req.query.age;   // url 파라미터 키값 - age

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8' });
    res.write('<h1>Express 서버에서 응답한 결과!</h1>');
    res.write('<div><p>User-Agent : '+userAgent+'</p></div>');
    res.write('<div><p>Param name : '+paramName+'</p></div>');
    res.write('<div><p>Param Age : '+paramAge+'</p></div>');
    res.end();
});

// 포트번호 설정
var port = process.env.PORT || 3000;

// Express 서버 시작
http.createServer(app).listen(port, function () {
    console.log('익스프레스 서버를 시작했습니다 : ' + port);
});
