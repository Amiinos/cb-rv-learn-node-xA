let http = require('http')

let fs = require('fs')


let server = http.createServer() 

server.on('request', (request, response) => {

	fs.readFile('index.html', (err,data) => {
	     
	     if (err)  {
     
           //fs.readFile('404.html')
	     	response.writeHead(404)
	     	
	     	response.end('<h1> ERREUR 404 <h1>')
	     } else {

	     	response.writeHead(200, {

	   			'Content-type' : 'text/html; charset=utf-8'
	     	});
	 		response.end(data);

	  	}
	     	

	 })

})


server.listen(8080, () => {
	console.log('serveur is running')
})