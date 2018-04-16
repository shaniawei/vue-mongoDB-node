var express=require('express')
var bodyParser=require('body-parser')

var fs=require('fs')

var app=new express()

var router = express.Router()

var PORT=process.env.PORT||3002

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.post('/save',(req,res)=>{
	console.log(req.body)
	res.end('保存成功')
})

app.get('/test.html',(req,res)=>{
	var cnt=fs.readFileSync('./test.html')
	res.end(cnt)
})

app.listen(PORT,(err)=>{
	console.log(`server is running in 127.0.0.1:${PORT}`)
})

app.get('/person',(req,res)=>{
	var query=req.query||{}
	var cb=query.cb||query.callback
	// res.type('text/javascript')
	var jsonp=`!function(){
		${cb}({
			name:'wmy',
			age:15
		})
	}()`
	res.end(jsonp)
})