var Phant = require('phant-client').Phant;
var phant = new Phant();

var streamd = {
title: "example_feed",
description: undefined,
fields: "text,number",
outputUrl: "https://data.sparkfun.com/output/EJEaxjqyyMCn8Grjd5QW",
inputUrl: "https://data.sparkfun.com/input/EJEaxjqyyMCn8Grjd5QW",
manageUrl: "https://data.sparkfun.com/streams/EJEaxjqyyMCn8Grjd5QW",
publicKey: "EJEaxjqyyMCn8Grjd5QW",
privateKey: "dqM6vpdrr5sb61NADy9z",
deleteKey: "g32py4dqqxS3jJ7YEv4z"
}

phant.connect(streamd, function(error, streamd){
   var rand = Math.random()*100;
   var txt = "From a node.js example";
   setInterval(function(){
   phant.add(streamd,{number: rand, text: text},function(error){
      if(error){
         console.log(error);
      }
      else{
         console.log("Data Posted!");
      }
   });
},10000);
});
