const crypto = require('node:crypto')

// case 1
// const start = Date.now()

// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512')
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512')
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512')
// console.log('time hash: ', Date.now() - start) 

// pengamatan dari case 1 fungsi akan terblok oleh proses crypto diatas karena kode berjalan pada main thread, dan ini tidak baik

// case 2
// const MAX_CALLS= 2
// const start = Date.now()
// for (let i=0; i <MAX_CALLS; i++){
//     crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () =>{
//         console.log('time hash: ', Date.now() - start) 
//     })
// }
// console.log('other function')
// pengamatan dari case 2 
// method seperti fs.readfile atau crypto.pbkdf2 berjalan secara synchron di thread masing masing yang tersedia di thread pool tetapi tidak memblock main thread 

// case 3
// const MAX_CALLS= 5

// const start = Date.now()
// for (let i=0; i <MAX_CALLS; i++){
//     crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () =>{
//         console.log('time hash: ', Date.now() - start) 
//     })
// }
// console.log('other function')
// pengamatan case 3
// threadpool mempunyai 4 thread , jika menjalankan lebih dari 4 tugas maka waktu yang diperlukan untuk menjalankan tugas ke 5 akan memkan waktu 2x lipat

// case 4
// const OS = require('os')
// process.env.UV_THREADPOOL_SIZE = OS.cpus().length

// const MAX_CALLS= 8
// const start = Date.now()
// for (let i=0; i <MAX_CALLS; i++){
//     crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () =>{
//         console.log('time hash: ', Date.now() - start) 
//     })
// }
// console.log('other function')

// besar threadpool bisa kita tambah sesuai dengan jumlah core CPU kita dan bisa meningkatkan performa
// jika lebih besar dari jumlah core kita maka CPU akan membagi ke rata ke setiap core 
// [lihat file asynchronous methods vs core.jpg]


// case 6
const https = require('node:https')

const MAX_CALLS = 12
const start = Date.now()
for (let i = 0; i< MAX_CALLS ; i++){
    https.request('https:google.com/', (res) => {
        res.on('data', () =>{})
        res.on('end', ()=>{
            console.log(`request: ${i+ 1}`, Date.now()-start)
        })
    })
    .end()
}
// ternyata method https.request tidak menggunakan threadpool
// method https.request tidak terpengaruh oleh jumlah core CPU
// method httpd.request adalah operasi network input output (network I/O)
// libuv mendelegasikan tugas ke sistem operasi kernel dan memungkinkan menarik kernel untuk melihat apakah tugas sudah selesai atau belum

