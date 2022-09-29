const express = require ('express');
const path = require('path');

const app = express();

app.get('/', function(req, res){
    res.send('Agora esta funcionando a rota')
});
app.get('/outrarota', function(req, res){
    res.sendFile(path.join(__dirname,  '/index.html'));
});


app.listen(3000, function (){
    console.log('Servidor rodando no endereço http://localhost:3000')
});