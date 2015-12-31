var Phant = require('phant-client').Phant;
var phant = new Phant();

var iri = 'https://data.sparkfun.com/streams/dZ4EVmE8yGCRGx5XRX1W'

phant.connect(iri, function(error, streamd){
   setInterval(function(){
      phant.latest(streamd,function(err,data){
         if(err){
            console.log(err);
         }
         else{
            console.log("===DATA===");
            console.log(data);
         }
      });
   },10000)
});
