let redis = require('redis');
let client = redis.createClient();

client.on('connect', function(){
    console.log('CONECTADO');

    client.set('nome', 'Paulo Henrique Sales Sampaio');
    
    //KEY - CHAVE:VALOR...
    client.hmset('codigos_http', 'sucesso', 200, 'erro', 417, 'naolocalizado', 404)

    client.hgetall('codigos_http', function(erro, object) {
        console.log(object);
    });

    //LISTS - PERMITE DUPLICADO
    client.rpush(['frameworks', 'angular', 'react', 'vue', 'angular'], function(erro, reply){
        console.log(reply);
    });

    client.lrange('frameworks', 0, -1, function(erro, reply){
        console.log(reply);
    });

    //SETS - NÃO PERMITE DUPLICADO
    client.sadd(['tags', 'angular', 'angular', 'vue', 'react', 'vue'], function(erro, replay){
        console.log(replay);
    });

    //REMOVE NO MOMENTO DA EXECUÇÃO
    client.del('tags', function(erro, replay){
        console.log(replay);
    });

    client.smembers('tags', function(erro, replay){
        console.log(replay);
    });

    //REMOVE A CHAVE DEPOIS DE 15 SEGUNDOS
    client.expire('nome', 15);

});