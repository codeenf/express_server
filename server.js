const express = require('express');
const app = express();

app.get("/", function(req , res){
    res.send("<h1>hello my server is sending you greetings</h1>")
})

app.get("/contact", function(req , res){
    res.send("contact me : sahil@blah.com")
})
app.get("/about", function(req , res){
    res.send("Hello i am sahil Tyagi. currenly i am a student at gautam buddha university<br> and i am learning web development ")
})

app.listen(3000, function(){
    console.log("srever started on port 3000");
})
