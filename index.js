const http = require('http');
const url = require('url');
const fs = require('fs');

const sendData = (fileName,res) =>{
   fs.readFile(`${fileName}.html`,'utf-8',(err,data) =>{
      try{
         if(err){
            throw err
         }
      }catch (err){
         console.log(err.name),
         console.log(err.message)
      }

      res.end(data)
   });
};

http.createServer((req,res) =>{
   res.writeHead(200);

   const {query:{page}} = url.parse(req.url,true);

   switch(page){
      case 'home':sendData('index',res);break;
      case 'contact':sendData('contact',res);break;
      case 'news':sendData('news',res);break;
      default:sendData('404',res);break;
   }
}).listen(3001);


 