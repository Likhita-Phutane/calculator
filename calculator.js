//jshint esversion:6

const express=require("express");
const bodyparser=require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res)
{
  // console.log(request);
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res)
{

  var num1=Number(req.body.num1);
var num2=Number(req.body.num2);
var result=num1+num2;
  res.send("result is"+result);
});
app.get("/bmicalculator",function(req,res)
{
  // console.log(request);
  res.sendFile(__dirname + "/bmicalculator.html");



});


app.post("/bmicalculator",function(req,res)
{

  var num1=parseFloat(req.body.weight);
var num2=parseFloat(req.body.height);
var result=num1/num2;
  res.send("your bmi is"+result);
});

app.listen(3000,function()
{
console.log("server started on 3000");
});
