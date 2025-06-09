// const fs=require('fs');
// const {Command}=require('commander');
// const program=new Command();

// program
// .name('counter')
// .description('CLI to do file based tasks')
// .version('0.8.0');

// program.Command('count')
//  .description('count the number of lines in a file')
//  .argument('<file>','file to count')
//  .action((file)=>{
//     fs.readFile(file,'utf-8',(err,data)=>{
//         if(err){
//             console.log(err);
//         }else{
//             const lines=data.split(' ').length;
//             console.log('There are ${lines} lines in ${file}');
//         }
//     });
// });
// program.parse();





// const express=require('express')
// const app=express()

// //route "/"
// app.get('/',function(req,res){
//     res.send('hello world')
// });
// app.listen(3000);





const express=require("express");
const app=express();

app.get('/sum',function(req,res){
const a=parseInt(req.query.a)
const b=parseInt(req.query.b)
res.json({
    sum: a+b
})
})

app.get('/subtract',function(req,res){
const a=parseInt(req.query.a)
const b=parseInt(req.query.b)
res.json({
    subtract: a-b
})
})

app.get('/multiply',function(req,res){
 const a=parseInt(req.query.a)
const b=parseInt(req.query.b)
res.json({
    multiplication: a*b
})
})

app.get('/divide',function(req,res){
const a=parseInt(req.query.a)
const b=parseInt(req.query.b)
res.json({
    div: a/b
})    
})

app.listen(3000);
module.exports=app;