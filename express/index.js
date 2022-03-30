const express = require('express');
// O express retorna uma função para a variável,
// essa função cria o express

const app = express();
// Essa função express() vem do módulo express, essa função cria uma
// instacia (copia do framework) para a variável

app.get('/', (req, res)=>{
    // .get cria uma rota do tipo GET
    res.send('You are Welcome');
    // .send serve para enviar alguma mensagem
});

app.get('/sobre', (req, res)=>{
    res.send('About page');
});

app.get('/blog', (req, res)=>{
    res.send('Blog page');
});

app.listen(3000, function(){
    console.log('Server Running...')
});
// Porta que o servidor irá rodar
// A função listen tem que estar na ultima linha do código, ou seja,
// toda a sua aplicação deve ser criada acima dela.