 const fs = require('fs');
 const arg = require('minimist')(process.argv.slice(2));
const http = require('http');


// function getFileContent(fileName){
//   fs.readFile(`./${fileName}`,'utf-8',(err, data) => {
//     if(err){
//       console.log(`${fileName}.txt not found`);
//     }else{
//       console.log(data);
//     }
// });
// }


// switch(arg.f || arg.file || arg.c || arg.css){
//     case arg.f:getFileContent(`${arg.f}.txt`)
//     break;
//     case arg.file: getFileContent(`${arg.file}.txt`)
//     break;
//     case arg.c:getFileContent(`${arg.c}.css`)
//     break;
//     case arg.css: getFileContent(`${arg.css}.css`)
//     break;
// }



http.createServer((req, res) =>{
  res.writeHead(200,{
      'Content-Type': 'text/html'
  });

  function getFileContent(fileName){
    fs.readFile(`./${fileName}`,'utf-8',(err, data) => {
      if(err){
        console.log(`${fileName} not found`);
      }else{
        console.log(data);
      }
  });
  }
  
  
  switch(arg.e || arg.file){
      case 'hello': getFileContent(`${arg.fileName}.txt`)
      break;
      case 'main':getFileContent(`${arg.fileName}.html`)
      break;
      
      
  }
  res.end();

}).listen(8080)

