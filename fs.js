const fs = require('node:fs')

console.log('first')
const content = fs.readFileSync('./read.txt', 'utf8')
console.log(content)
console.log('second')
fs.readFile('./read.txt', 'utf8', (error, data) => {
    if(error){
        console.log(err)
    } else {
        console.log(data)
    }
}) //asynchronous
console.log('third')

fs.writeFileSync('./write.txt', 'hello asep')
// jika tidak ada file belum ada , maka akan membuat file baru dengan nama yang sudah kita tentukan
// jika ada file nya makan akan menimpa data yang ada di dalam file tersebut
fs.writeFile('./write.txt', 'hello rizal' , (error) => {
    if(error){
        console.log(error)
    } else {
        console.log('file written')
    }
})
//kode dibawah tidak akan menimpa data didalam file
fs.writeFile('./write.txt', 'ridwanulloh' , {flag: 'a'} ,(error) => {
    if(error){
        console.log(error)
    } else {
        console.log('file written')
    }
})