// const http = require('http');
// const fs = require('fs');
// const {e, fileName} = require('minimist')(process.argv.slice(2));

// function getFileContent(fileName, ext, res){
//     fs.readFile("./main.html", "utf-8", (err, data) => {
//       let wdata = data;
//       let statusCode = 200;
//       if(err){
//         wdata = "File not found";
//         statusCode = 200
        
      
//       }
//       res.writeHead(statusCode, {
//         "Content-Type":"text/html;charset=utf-8"
//       });

    
//         res.write(data);
//         res.end();
      
//     });
// }

// http.createServer((req, res) =>{
//   res.writeHead(200, {
//     "Content-Type":"text/html;charset=utf-8"
//   });
//   ///sa browseri hamar e format cuyc talis,, verevi utf-8@ backendi hamar, mez hamar
//   //header mek angam e petq uxarkel,, dra hamar errorneri obrabotka aneluc sxal e stacvum

//   if(e && fileName){
//     getFileContent(fileName, e, res);
    
//   } else{
//     res.write("Hello, World");
//     res.end()
//   }
// }).listen(3000)


// const http = require('http');
// const server = http.createServer().listen(8080);

// server.on('request',(req,res) =>{
//    res.writeHead(200,{
//       "Content-Type":"text/html;charset=utf-8"
//    });
//    res.write('Hello');
//    res.end();
// });

// server.on('listening',() =>{
//    console.log('Listening on port 8080');
// });

// const http = require('http');
// const serverPort = 3000;
// const server = http.createServer().listen(serverPort);

// server.on('request', (req,res)=>{
//    res.writeHead(200);
//    res.write('barev dzez kareli e canotanal???');
//    res.end();
// });

// server.on('request', (req,res)=>{
//   console.log(`Request url: ${req.url}`);
//   console.log(`Request method: ${req.method}`);
// });


// server.on('listening',()=>{
//    console.log(`Server listen ${serverPort} port`);
// });


// const {EventEmitter} = require ('events');

// const testObj = new EventEmitter();

// testObj.on('hello', () =>{
//    console.log('LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL');
// });


// testObj.on('world', () =>{
//    console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTT');
// });

// testObj.emit('hello');
// testObj.emit('world')



// const {EventEmitter} = require ('events');

// const testObj = new EventEmitter();

// testObj.on('hello', ({x,y}) =>{
//    console.log(x,y);
// });


// testObj.on('world', (a,b) =>{
//    console.log(a,b);
// });

// testObj.emit('hello',{
//    x:25,
//    y:15
// });
// testObj.emit('world',55,35)

// const {EventEmitter} = require ('events');

// const logger = new EventEmitter();

// const users =[];
// const msgs = [];

// logger.on('message',(msg)=>{
//    console.log(`New message: ${msg}`);
//    msgs.push(msg);
// });

// logger.on('login',(name)=>{
//    console.log(`New user: ${name}`);
//    users.push(name);
// });

// logger.on('getUsers',()=>{
//    console.log(`Logged users:\n`);
//    users.forEach((el) =>{
//       console.log(el, '\n')
//    });
// });

// logger.on('getMessages',()=>{
//    console.log(`Logged messages:\n`);
//    msgs.forEach((el) =>{
//       console.log(el, '\n')
//    });
// });

// logger.emit('login','Lilit');
// logger.emit('message','Barev');


// logger.emit('login','Mane');
// logger.emit('message','Privet');

// logger.emit('login','Ani');
// logger.emit('message','Voxjuyn');

// logger.emit('getUsers');
// logger.emit('getMessages');


// const fs = require('fs');

// fs.readdir('../myapp1',(err,files) =>{
//    console.log(files);
// });

// fs.stat('../myapp1/package.json',(err,obj)=>{
//    console.log(obj.isFile());
//    console.log(obj.isDirectory());
// })


const fs = require('fs');

fs.readdir('../node',(err,files) =>{
      console.log(files);
   });
fs.readdir('../node/node_modules/minimist',(err,files)=>{
   console.log(files)
})
fs.readdir('../node/node_modules',(err,files)=>{
   console.log(files)
})

   // fs.readdir('../po/scss',(err,files)=>{
   //    console.log(files);
   // })

   fs.stat('../node/node_modules',(err,obj)=>{
      console.log(obj.isFile());
      console.log(obj.isDirectory())
   })