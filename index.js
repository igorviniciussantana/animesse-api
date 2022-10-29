const express =  require('express')
const app = express()

var cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.listen(3000, function(){
console.log("Server rodando")


})