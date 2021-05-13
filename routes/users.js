var express = require('express');
var router = express.Router();
var path = require('path');
var mime = require('mime');
var fs = require('fs');

/* GET users listing. */
router.get('/download', function(req, res, next) {

	var file = __dirname + '/../app-release.apk';
	console.log(file);

	var filename = path.basename(file);
	var mimetype = mime.getType(file);

	console.log(mimetype);

	res.setHeader('Content-disposition', 'attachment; filename=' + filename);
	res.setHeader('Content-type', mimetype);

	var filestream = fs.createReadStream(file);
	filestream.pipe(res);
	//res.send({result:"success"});
});

/* GET users listing. */
router.get('/qrcode', function(req, res, next) {

	var filename = 'download_qrcode.png';
    fs.readFile(filename,              //파일 읽기
		function (err, data)
		{
			//http의 헤더정보를 클라이언트쪽으로 출력
			//image/png : jpg 이미지 파일을 전송한다
			//write 로 보낼 내용을 입력
			res.writeHead(200, { "Context-Type": "image/png" });//보낼 헤더를 만듬
			res.write(data);   //본문을 만들고
			res.end();  //클라이언트에게 응답을 전송한다

		}
	);
});

module.exports = router;
