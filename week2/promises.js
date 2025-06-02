function setTimeoutPromisified(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
function callback(){
    console.log("3 seconds have passed");
}
setTimeoutPromisified(3000).then(callback);

//reading a file
const fs=require("fs");
function readthefile(callback){
    fs.readFile("a.txt","utf-8",function(err,data){
        callback(data)
    })
}

function readfile(filename){
    return new Promise(readthefile)
}
const p=readfile();

function callback(contents){
    console.log(contents)
}
p.then(callback);