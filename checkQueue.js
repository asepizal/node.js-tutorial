// case 1

// const fs = require('node:fs')

// setTimeout(() => console.log('setTimeout 1'), 0)
// setImmediate(() => console.log('setImmediate 1'))
// fs.readFile(__filename, () => {
//     console.log('I/O queue')
//     process.nextTick(() => console.log('next tick in I/O'))
//     setImmediate(() => console.log('setImmediate in I/O'))
// })
// process.nextTick(() => console.log('next tick 1'))

/**
 * microtask dijalankan sebelum timer, i/O dan check queue
 */

// case 2

// setImmediate(() => console.log('setImmidiate1'))
// setImmediate(() => {
//     console.log('setImmidiate2')
//     process.nextTick(() =>console.log('microtask in checkqueue'))
//     setTimeout(() => console.log('settimeout in setImmidiate'))
// })
// setImmediate(() => console.log('setImmidiate3'))

/**
 * jika ada microtask saat menjalankan microtask maka akan menjalankan microtask terlebih dahulu
 */

// case 3

setTimeout(() => console.log('setTimeout1'),0)
setImmediate(() => console.log('setImmidiate'))