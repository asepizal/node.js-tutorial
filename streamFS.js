const fs = require('node:fs')
const zlib = require('node:zlib')

const gzip = zlib.createGzip()

const readableStream = fs.createReadStream('./file.txt', {
    encoding: 'utf8',
    highWaterMark: 2, //default 64 Kib
    start: 2,
    // end: 6
})
// buka dokumentasi nodejs untuk options pada createReadStream

const writableStream =  fs.createWriteStream('./file2.txt')

// readableStream.on('data', (chunk) => {
//     console.log(chunk)
//     writableStream.write(chunk)
// })


// use pipe
// syarat menggunakan pipe adalah jenis streamnya harus duplex atau transformation dan readable
readableStream.pipe(writableStream)

// menggunakan chaining pada pipe
readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gzip'))