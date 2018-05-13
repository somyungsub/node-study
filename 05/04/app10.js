
// Express 기본 모듈 불러오기
var express = require('express')
    , http = require('http')
    , path = require('path');

// express 객체 생성
var app = express();

// 라우터 객체참조
var router = express.Router();

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser')
    , static = require('serve-static');

// 기본 속성 설정
app.set('port', process.env.PORT || 3000);

// body-parser를 사용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended: false}));

// body-parser를 사용해 applcation/json 파싱
app.use(bodyParser.json());

// public 폴더 패스 검토
app.use(static(path.join(__dirname, 'public')));


// 라우팅함수 등록
router.route('/process/login').post(function (req, res) {
    console.log('/process/login 처리함.');
    /*
        Post 방식 요청
     */
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8' });
    res.write('<h1>Express 서버에서 응답한 결과!</h1>');
    res.write('<div><p>paramId : '+paramId+'</p></div>');
    res.write('<div><p>paramPassword : '+paramPassword+'</p></div>');
    res.write('<br><br><a href="/login2.html">로그인페이지로 이동하기</a>')
    res.end();
});
router.route('/process/users/:id').get(function (req, res) {
    console.log('/process/users/:id  처리함');

    // URL 파라미터 확인
    var paramId = req.params.id;

    console.log('/process/users 와 토큰 %s를 이용해 처리함', paramId);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8' });
    res.write('<h1>Express 서버에서 응답한 결과!</h1>');
    res.write('<div><p>paramId : '+paramId+'</p></div>');
    res.end();
});

// 라우터객체를 app객체에 등록
app.use('/', router);


// 오류 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');
// 모든 router 처리 끝난 후 404 오류페이지 처리
var errorHandler = expressErrorHandler({
    static:{
        '404': './public/404.html'
    }
});
app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function () {
    console.log('익스프레스 서버를 시작했습니다 : ' + app.get('port'));
});
