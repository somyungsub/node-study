
// Express 기본 모듈 불러오기
var express = require('express')
    , http = require('http')
    , path = require('path');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser')
    , static = require('serve-static');

// express 객체 생성
var app = express();

// 기본 속성 설정
app.set('port', process.env.PORT || 3000);

// body-parser를 사용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended: false}));

// body-parser를 사용해 applcation/json 파싱
app.use(bodyParser.json());

app.use(static(path.join(__dirname, 'public')));

// 미들웨어 파라미터 확인
app.use(function (req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함.')

    /*
        Post 방식 요청
     */
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8' });
    res.write('<h1>Express 서버에서 응답한 결과!</h1>');
    res.write('<div><p>paramId : '+paramId+'</p></div>');
    res.write('<div><p>paramPassword : '+paramPassword+'</p></div>');
    res.end();
});


// Express 서버 시작
http.createServer(app).listen(app.get('port'), function () {
    console.log('익스프레스 서버를 시작했습니다 : ' + app.get('port'));
});
