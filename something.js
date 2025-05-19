const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	  returnPromisFUnction('./tests/').then((data) => {
		      res.end(data);
		    }).catch((err) => {
			          res.writeHead(500, { 'Content-Type': 'application/json' });
			          res.end('Error reading the fil8888e');
			      })
	  
});
const port = 3000;
server.listen(port, () => {
	  console.log(`Server listening on port ${port}`);
});


returnPromisFUnction = filePath => {
	  return new Promise((resolve, reject) => {
		      fs.readFile(filePath, 'utf-8', (err, data) => {
			            if(err) {
					            reject(err)
					          }
			            resolve(data);
			          })
		    })
}



