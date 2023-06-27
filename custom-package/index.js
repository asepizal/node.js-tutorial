const upperCase = require('upper-case').upperCase

function greet(name){
    console.log(`hai ${upperCase(name)},how are you today`)
}

module.exports = greet