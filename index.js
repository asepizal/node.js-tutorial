/**
 * eps.6
 * # jalankan file index.js menggunakan terminal dengan cara : $ node index.js atau $ node index
 */
// console.log('hello world from index')

/**
 * eps.9
 * # import module yang ada di file add
 * # semua kode yang ada di file add akan dijalankan 
 */
// require('./add')

// console.log('hello world')

/**
 * eps.10
 */
// const add = require('./add') 

// const sum = add(1,4)
// const sum2 = add(1,5)

// console.log(`sum 1: ${sum}, sum 2: ${sum2}`)

/**
 * eps.11
 * # jika kita menggunakan module.exports untuk mengeksport 1 data , kita bisa langsung menyimpannya kedalam sebuah variabel
 * # jika kita menggunakan exports.key , kita harus destructuring langsung walaupun hanya 1 data yang diexport
 * # jika 2 data / lebih yang di export nya , maka kita bisa melakukan destructuring object
 */
// const add = require('./moduleExports') // menggunakan module.export 
// const {add} = require('./moduleExports') // menggunakan export.[key]
// const {value1, add: addFn} = require('./moduleExports') // jika 1 data yang diexport
// console.log(value1, addFn)

/**
 * eps.12
 */
// require('./batman')
// require('./superman')

/**
 * eps.13
 */
// const superHero = require('./super-hero')

// console.log(superHero.getName())
// superHero.setName('superman')
// console.log(superHero.getName())

// const newSuperHero = require('./super-hero')
// console.log(newSuperHero.getName()) //di dalam methode require ada konsep caching, lihat debug mode

/**
 * eps.17
 */
// const data = require('./data.json')

// console.log(data)
// console.log(data.name)
// console.log(data.sosmed.ig)


/**
 * eps. 22
 */
// const PizzaShop = require('./pizzaShop');
// const DrinkMachine = require('./drink-machine')

// const pizzaShop = new PizzaShop()
// const drinkMachine = new DrinkMachine() 

// pizzaShop.on('order', (size, topping) => {
//     console.log(`your order is pizza size ${size} with ${topping}`)
//     drinkMachine.serveDrink(size)
// })

// pizzaShop.order('large', 'beef')
// pizzaShop.displayOrder()


/**
 * eps.23
 */
// const {Buffer} = require('node:buffer')

// const buf1 = Buffer.alloc(10);
// const buf2 = Buffer.alloc(10,1);
// const buf3 = Buffer.allocUnsafe(10);
// const buf4 = Buffer.from([1, 2, 3]);
// const buf5 = Buffer.from([257, 257.5, -255, '1']);
// const buf6 = Buffer.from('tést');
// const buf7 = Buffer.from('tést', 'latin1');
// const buf8 = Buffer.from('hello') //utf-8 is default
// const buf9 = Buffer.from('hello', 'utf8')
// const buf10 = Buffer.from('hello', 'utf16le')
// const buf11 = Buffer.from('م','latin1')//saat akan di dekode akan error
// const buf12 = Buffer.from('م','utf8')

// const buf13 = Buffer.from('1ag123', 'hex');
// // Prints <Buffer 1a>, data truncated when first non-hexadecimal value
// // ('g') encountered.

// const buf14 = Buffer.from('1a7', 'hex');
// // Prints <Buffer 1a>, data truncated when data ends in single digit ('7').

// const buf15 = Buffer.from('1634', 'hex');
// // Prints <Buffer 16 34>, all data represented.


// console.log('(buf1)',buf1)
// console.log('(buf2)',buf2)
// console.log('(buf3)',buf3)
// console.log('(buf4)',buf4)
// console.log('(buf5)',buf5)
// console.log('(buf6)',buf6)
// console.log('(buf7)',buf7)
// console.log('(buf8)',buf8)
// console.log('(buf9)',buf9)
// console.log('(buf10)',buf10)
// console.log('(buf11)',buf11.toString())
// console.log('(buf12)',buf12.toString())
// console.log('(buf13)',buf13)
// console.log('(buf14)',buf14)
// console.log('(buf15)',buf15)
// console.log('(buf13)',buf13.toString())
// console.log('(buf14)',buf14.toString())
// console.log('(buf15)',buf15.toString())


/**
 * eps.31
 */
// const http = require('node:http')

// const server =  http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     })
//     res.end('hello world')
// })

// server.listen(3000, () => {
//     console.log('server running in port 3000')
// })


/**
 * eps.32
 */
// const http = require('node:http')

// const server =  http.createServer((req, res) => {
//     const superhero = {
//         hero1: "superman",
//         hero2: "batman",
//     }

//     res.writeHead(200, {
//         'Content-Type': 'application/json'
//     })
//     res.end(JSON.stringify(superhero))
// })

// server.listen(3000, () => {
//     console.log('server running in port 3000')
// })

/**
 * eps.33
 */
// const http = require('node:http')
// const fs = require('node:fs')

// const server =  http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     })

//     fs.createReadStream(__dirname + '/index.html').pipe(res)

//     // const html = fs.readFileSync('./index.html', 'utf-8')
//     // res.end(html)
// })

/**
 * eps.34
 */
// const http = require('node:http')
// const fs = require('node:fs')

// const server =  http.createServer((req, res) => {
//     const name = 'asep'
    
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     })

//     let html = fs.readFileSync('./index.html', 'utf-8')
//     html = html.replace('{{name}}', name)
//     res.end(html)
// })

// server.listen(3000, () => {
//     console.log('server running in port 3000')
// })

/**
 * eps.35
 */
const http = require('node:http')
const fs = require('node:fs')

const server =  http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {
            'Content-Type' : 'text/plain'
        })
        res.end('home page')
    } else if(req.url === '/about'){
        res.writeHead(200, {
            'Content-Type' : 'text/plain'
        })
        res.end('about page')
    } else if(req.url === '/api'){
        res.writeHead(200, {
            'Content-Type' : 'application/json'
        })
        res.end(JSON.stringify({
            'name': 'asep',
            'age': 28
        }))
    } else {
        res.writeHead(404)
        res.end('page not found')
    }
})

server.listen(3000, () => {
    console.log('server running in port 3000')
})