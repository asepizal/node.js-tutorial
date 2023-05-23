const path = require('node:path')

console.log(__filename)
console.log(__dirname)

/**
 * basename
 * mengembalikan bagian terakhir dari path
 * basename peka huruf besar-kecil
*/
console.log('(basename)',path.basename(__filename))
console.log('(basename)',path.basename(__dirname))
console.log('(basename)',path.basename(__filename, '.js')) //parameter kedua opsional
console.log('(basename)',path.basename('/data asep rizal/programming/js/codevolution/node.js tutorial/builtin-modules.js'))

/**
 * delimiter
 * Menyediakan pembatas jalur
 * akan memisahkan saat ada tanda ;
 */
console.log('(delimiter)',process.env.PATH.split(path.delimiter))

/**
 * dirname
 * mengembalikan nama direktori dari path
 */
console.log('(dirname)', path.dirname(__filename))
console.log('(dirname)', path.dirname(__dirname))

/**
 * extname
 * mengembalikan ekstensi path, dari kemunculan terakhir .(titik) hingga akhir string di bagian terakhir path. 
 * Jika tidak ada . di bagian terakhir dari path, atau jika tidak ada . tapi tidak ada karakter sebelumnya , maka string kosong dikembalikan.
 */

console.log('(extname)',path.extname(__filename))
console.log('(extname)',path.extname('index.html'))
console.log('(extname)',path.extname('index.coffee.md'))
console.log('(extname)',path.extname('index.'))
console.log('(extname)',path.extname('index'))
console.log('(extname)',path.extname('.index'))
console.log('(extname)',path.extname('.index.md'))

/**
 * format
 * mengembalikan string jalur dari objek.
 * - pathObject.root diabaikan jika pathObject.dir disediakan
 * - pathObject.ext dan pathObject.name diabaikan jika pathObject.base ada
 */

console.log('(format)',path.format({
    root: '/',
    dir: '\\node',
    base: 'index.js',
    name: 'file',
    ext: '.txt',
}))

/**
 * isAbsolute
 * menentukan apakah path merupakan jalur absolut.
 * Jika yang diberikan path adalah string dengan panjang nol, false akan dikembalikan.
 */
path.isAbsolute('//server');    // true
path.isAbsolute('\\\\server');  // true
path.isAbsolute('C:/foo/..');   // true
path.isAbsolute('C:\\foo\\..'); // true
path.isAbsolute('bar\\baz');    // false
path.isAbsolute('bar/baz');     // false
path.isAbsolute('.');           // false

/**
 * join
 * menggabungkan semua path segmen yang diberikan menggunakan pemisah khusus platform sebagai pembatas, lalu menormalkan jalur yang dihasilkan.
 * Segmen dengan panjang nol path diabaikan. Jika string jalur yang digabungkan adalah string dengan panjang nol, maka '.' akan dikembalikan, mewakili direktori kerja saat ini.
 */

console.log('(join)', path.join(__dirname, 'index', 'tutorial/youtube', '..'))
console.log('(join)', path.join(__dirname, ''))
console.log('(join)', path.join('', ''))

/**
 * parse
 * mengembalikan objek yang propertinya mewakili elemen signifikan dari path
 */
console.log('(parse)', path.parse(__filename))

/**
 * relative
 * mengembalikan jalur relatif dari from ke to berdasarkan direktori kerja saat ini. Jika from dan to masing-masing menyelesaikan ke jalur yang sama (setelah memanggil path.resolve()masing-masing), string dengan panjang nol dikembalikan.
 * Jika string dengan panjang nol dilewatkan sebagai from atau to, direktori kerja saat ini akan digunakan sebagai pengganti string dengan panjang nol.
 */
console.log('(relative)', path.relative('folder1', 'folder2', 'index.js'))
console.log('(relative)', path.relative('/folder1', '/folder2', 'index.js'))
console.log('(relative)', path.relative('/folder1', '//folder2', 'index.js'))
console.log('(relative)', path.relative('/folder1', '//folder2', '../index.js'))
console.log('(relative)', path.relative(__dirname, 'index.js'))
console.log('(relative)', path.relative(__dirname, ''))
console.log('(relative)', path.relative('', ''))


/**
 * resolve
 * menyelesaikan urutan jalur atau segmen jalur menjadi jalur absolut.
 * Urutan jalur yang diberikan diproses dari kanan ke kiri, dengan masing-masing pathprepended berikutnya sampai jalur absolut dibangun. 
 * Jika, setelah memproses semua pathsegmen yang diberikan, jalur absolut belum dibuat, direktori kerja saat ini akan digunakan.
 * Jalur yang dihasilkan dinormalisasi dan garis miring yang tertinggal dihapus kecuali jalur diselesaikan ke direktori root.
 * Segmen dengan panjang nol pathdiabaikan.
 */

console.log('(resolve)', path.resolve('folder1', 'folder2', 'index.js'))
// direktori saat ini akan digunakan
console.log('(resolve)', path.resolve('/folder1', 'folder2', 'index.js'))
console.log('(resolve)', path.resolve('/folder1', '/folder2', 'index.js'))
console.log('(resolve)', path.resolve('/folder1', '//folder2', 'index.js'))
console.log('(resolve)', path.resolve('/folder1', '//folder2', '../index.js'))
console.log('(resolve)', path.resolve(__dirname, 'index.js'))
console.log('(resolve)', path.resolve(__dirname, ''))
console.log('(resolve)', path.resolve('', ''))

/**
 * sep
 * Menyediakan pemisah segmen jalur khusus platform:
 * di windows tanda \ yang digunakan
 */
console.log('(sep)', 'foo\\bar\\baz'.split(path.sep))