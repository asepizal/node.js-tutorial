const value1 = 50
const add = (a,b) => {
    return a+b
}
// # export 1 data
// # cara 1
// exports.value1 = value1
// # cara 2
// module.exports = add

// # export 2 data
// # cara 1
// exports.value1 = value1
// exports.add = add
// # cara 2
// module.exports= {
//     data1: add,
//     data2: value1
// }
// # cara 3
// # Best Practice
module.exports = {
    value1,
    add
}

/**
 * # untuk melihat object yang di export gunakan console.log(module)
 * # data yang diexport menggunakan exports.[key] akan disimpan kedalam object dengan key tersebut baik 1 data atau lebih
 * # sedangkan jika menggunakan module.exports untuk mengeksport 1 data maka hanya akan di export nilainya saja, jika 2 makan akan dibuatkan object
 * # jika ada 2/lebih module.exports dalam 1 file maka module.export terakhir yang dipakai
 */

