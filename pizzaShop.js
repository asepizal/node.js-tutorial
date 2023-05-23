const EventEmitter = require('node:events')

class PizzaShop extends EventEmitter{
    constructor(){
        super()
        this.number = 0
    }

    order(size, topping){
        this.number++
        this.emit('order', size, topping)
    }

    displayOrder(){
        console.log(`order number: ${this.number}`)
    }
}

module.exports = PizzaShop