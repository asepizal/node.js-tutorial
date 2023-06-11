// case 1
// console.log('console.log 1')
// process.nextTick(() => console.log('next Tick 1'))
// console.log('console.log 2')

/**
 * kode synchonous di jalankan lebih dulu dibanding asynchronous
*/

// case 2
// Promise.resolve().then(() => console.log('promise resolve 1'))
// process.nextTick(() => console.log('next Tick 1'))


/**
 * nextTick dijalankan lebih dulu daripada promise
*/

// case 3
process.nextTick(() => console.log('next Tick 1'))
process.nextTick(() => {
    console.log('next Tick 2')
    process.nextTick(() => console.log('next Tick inside nexttick'))
})
console.log('next Tick 3')
Promise.resolve().then(() => console.log('promise resolve 1'))
Promise.resolve().then(() => {
    console.log('promise resolve 2')
    process.nextTick(() => console.log('next tick inside promise queue'))
})
Promise.resolve().then(() => console.log('promise resolve 3'))

/**
 * jika ada callback baru di nexttick , sedangkan proses nexttick masih berjalan , maka callback di next queue akan dijalankan terlebih dahulu sebelum pindah ke promise queue
 * begitupun jika ada callback baru di next tick tapi proses masih di promise,maka akan dijalankan dulu semua callback yang ada di promise queue
 * 
 */

