var mongoose = require('mongoose');
// var dbURI='mongodb://localhost/mekanbul';
var dbURI="mongodb+srv://kerem:1234@mekanbul.zdvxg5f.mongodb.net/mekanbul?retryWrites=true&w=majority"

mongoose.connect(dbURI);
function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    });

}
process.on("SIGINT",function(){
    kapat("Uygulama kapatıldı", function(){
        process.exit(0);
    });
});
mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresindeki veritabanına bağlandı!\n");
});
mongoose.connection.on("disconnected",function(){
    console.log(dbURI+" Bağlantı koptu");
});
mongoose.connection.on("error",function(){
    console.log(dbURI+" Bağlantı hatası");
});

require("./mekansema");