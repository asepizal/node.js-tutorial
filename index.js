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
const {Buffer} = require('node:buffer')

const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(10,1);
const buf3 = Buffer.allocUnsafe(10);
const buf4 = Buffer.from([1, 2, 3]);
const buf5 = Buffer.from([257, 257.5, -255, '1']);
const buf6 = Buffer.from('tést');
const buf7 = Buffer.from('tést', 'latin1');
const buf8 = Buffer.from('hello') //utf-8 is default
const buf9 = Buffer.from('hello', 'utf8')
const buf10 = Buffer.from('hello', 'utf16le')
const buf11 = Buffer.from('م','latin1')//saat akan di dekode akan error
const buf11 = Buffer.from('م','utf8')


console.log('(buf1)',buf1)
console.log('(buf2)',buf2)
console.log('(buf3)',buf3)
console.log('(buf4)',buf4)
console.log('(buf5)',buf5)
console.log('(buf6)',buf6)
console.log('(buf7)',buf7)
console.log('(buf8)',buf8)
console.log('(buf9)',buf9)
console.log('(buf10)',buf10)
console.log('(buf11)',buf11)
console.log('(buf11)',buf11.toString())
