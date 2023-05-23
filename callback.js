function greet(name){
    console.log(`hello ${name}`)
}

function higherorderfunction(callback){
    const name = 'asep'
    callback(name)
}

higherorderfunction(greet)

// callback adalah function yang di teruskan sebagai argumen ke function lain
// higher order function adalah fungsi yang mengambil satu atau lebih fungsi sebagai argumen, atau mengembalikan fungsi sebagai hasilnya.