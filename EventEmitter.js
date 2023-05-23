/**
 * eps. 21
 */
const EventEmitter = require('node:events')

const emitter = new EventEmitter()

emitter.on('order-pizza', (size, topping) => {
    console.log(`order pizza (${size}) with topping ${topping}`)
})

emitter.on('order-pizza', (size) => {
    if(size === 'large') {
        console.log('serving complementary drink')
    }
})
console.log('sedang di panggang')//kode ini langsung dijalankan , tidak terblok oleh fungsi diatasnya

emitter.emit('order-pizza', 'large', 'mushroom')