const fs = require('fs');
// const http = require('http');

// const server = http.createServer((req, res) => {
// 	// http req and res are streams
//   // req is an http.IncomingMessage, which is a Readable Stream
//   // res is an http.ServerResponse, which is a Writable Stream

//   let body = '';
//   req.setEncoding('utf8');

//   req.on('data', (chunk) => {
//   	body += chunk;
//   });

//   req.on('end', () => {
//   	try {
//   		const data = JSON.parse(body);

//   		// write back something
//   		res.write(typeof data);
//   		res.write(data);
//   		res.end();
//   	} catch (err) {
//   		res.statusCode = 400;
//   		return res.end(`error: ${err.message}`);
//   	}
//   });
// });

// server.listen(1337, () => {
// 	console.log('server is listening on port 1337');
// });


// const file = fs.createWriteStream('example.txt');
// file.write('hello, ');
// file.end('world!', () => {
// 	console.log('stream write finish');
// });

const fileReader = fs.createReadStream('example.txt');
fileReader.on('data', (chunk) => {
	console.log(`Received ${chunk.length} bytes of data.`)
});
fileReader.on('end', () => {
	console.log('There will be no more data.');
});


































