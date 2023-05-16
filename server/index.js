const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

const {User} = require("./models/User")

//Application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application/json 분석해서 가져옴 
app.use(bodyParser. json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://wisedew2:linda6365@boilerplate.ritpchk.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

//mongodb+srv://wisedew2:linda6365@boilerplate.ritpchk.mongodb.net/?retryWrites=true&w=majority
//ㅗㅓㅗ

  

app.get('/', (req, res) => {
  res.send('Hello World!')
}) 

app.post('/register', (req, res) => {
  //회원가입 할 때 필요한 정보들을 클라이언트 에서 가져오면
  //그것들을 데이터 베이스에 넣어준다. 

  
  const user = new User(req.body)

  user.save((err, doc) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success:true
    })
  }) //몽고db 세이브 함수
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
 
