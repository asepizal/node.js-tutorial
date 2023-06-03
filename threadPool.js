const crypto = require('node:crypto')

// case 1
// const start = Date.now()

// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512')
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512')
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512')
// console.log('time hash: ', Date.now() - start) 

// pengamatan dari case 1 fungsi akan terblok oleh proses crypto diatas karena kode berjalan pada main thread, dan ini tidak baik

// case 2
const MAX_CALLS= 2
const start = Date.now()
for (let i=0; i <MAX_CALLS; i++){
    crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () =>{
        console.log('time hash: ', Date.now() - start) 
    })
}
console.log('other function')
// pengamatan dari case 2 
// method seperti fs.readfile atau crypto.pbkdf2 berjalan secara synchron di thread masing masing yang tersedia di thread pool tetapi tidak memblock main thread 