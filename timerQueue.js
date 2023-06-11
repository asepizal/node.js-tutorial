// case 1

// setTimeout(() => {console.log('setTimeout 1')},0)
// setTimeout(() => {
//     console.log('setTimeout 2')
//     process.nextTick(() => console.log('next tick inside setTimeout'))
//     Promise.resolve().then(() => console.log('resolve in setTimeout'))
// },0)
// setTimeout(() => {console.log('setTimeout 3')},0)

// process.nextTick(() => console.log('next Tick 1'))
// process.nextTick(() => {
//     console.log('next Tick 2')
//     process.nextTick(() => console.log('next Tick inside nexttick'))
// })
// console.log('next Tick 3')
// Promise.resolve().then(() => console.log('promise resolve 1'))
// Promise.resolve().then(() => {
//     console.log('promise resolve 2')
//     process.nextTick(() => console.log('next tick inside promise queue'))
// })
// Promise.resolve().then(() => console.log('promise resolve 3'))

/**
 * TimerQueue di proses setelah microtask selesai
 * jika ada callback microtask , maka akan dieksekusi dulu sebelum ke callback timerQueue setelahnya 
 */

// case 2

setTimeout(() => console.log('setTimeout 1'),1000)
setTimeout(() => console.log('setTimeout 2'),0)
setTimeout(() => console.log('setTimeout 3'),500)

/**
 * dieksekusi sesuai FIFO order
 * nilai delay terkecil akan diantrikan terlebih dahulu
 */
