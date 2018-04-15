var express = require('express')
var bodyParser = require('body-parser')

var app = new express()

var PORT = process.env.PORT || 3002

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.get('/person', (req, res) => {
    // res.json({
    //     name: 'wmy',
    //     age: 15
    // })
    res.end('hahahah')
})

app.post('/save', (req, res) => {
    console.log(req.body)
    res.end('保存成功')
})

app.listen(PORT, (err) => {
    console.log(`server is running in 127.0.0.1:${PORT}`)
})