const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://wsawebmaster:desenvolvimento123@cluster0.ga6fi.mongodb.net/?retryWrites=true&w=majority", {}, (error)=>{
    if(error){
        console.log('Falha ao autenticar com mongodb');
        console.log(error);
        return;
    }

    console.log('Conexão com mongodb estável');
})

mongoose.Promise = global.Promise;

module.exports = mongoose;