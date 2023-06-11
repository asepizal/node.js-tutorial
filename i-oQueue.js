// case 1

// const fs = require('node:fs')

// fs.readFile(__filename, () => {
//     console.log('I/O queue')
// })

// process.nextTick(() => console.log('process 1'))
// Promise.resolve().then(() => console.log('promise 1'))

/**
 * I/O queue dijalankan setelah microtask selesai
*/

// case 2

// const fs = require('node:fs')

// setTimeout(() => console.log('setTimeout 1'), 0)
// fs.readFile(__filename, () => {
//     console.log('I/O queue')
// })

/**
 * ketika menjalankan setTimeout dengan delay 0ms dan I/O queue makan urutannya tidak pasti
 * jika delay dari setTimeout 0 maka akan dianggap 1ms, jika proses I/O queue memakan waktu 0.05ms maka I/O queue dijalankan lebih dulu
 * [lihat video youtube eps.45] 
 */

// case 3

const fs = require('node:fs')

setTimeout(() => console.log('setTimeout 1'), 0)
setImmediate(() => console.log('setImmediate 1'))
fs.readFile(__filename, () => {
    console.log('I/O queue')
})
process.nextTick(() => console.log('next tick 1'))

/**
 * I/O di polling terlebih dahulu dan hanya ditambahkan ke I/O queue jika acara sudah selesai
 */