const fs=require('fs');
const {Command}=require('commander');
const program=new Command();

program
.name('counter')
.description('CLI to do file based tasks')
.version('0.8.0');

program.Command('count')
 .description('count the number of lines in a file')
 .argument('<file>','file to count')
 .action((file)=>{
    fs.readFile(file,'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            const lines=data.split(' ').length;
            console.log('There are ${lines} lines in ${file}');
        }
    });
});
program.parse();