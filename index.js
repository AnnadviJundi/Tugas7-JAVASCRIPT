const amerika = {
    nama_siswa : "Jhon",
    asal : "US",
    bahasa : "Inggris"
}

const afrika = {
    nama_siswa : "Ali",
    asal : "Sudan",
    bahasa : "Arab"
}

const asia = {
    nama_siswa : "Supardi",
    asal : "Indonesia",
    bahasa : "Indonesia"
}

const australia = {
    nama_siswa : "Adelaide",
    asal : "Australia",
    bahasa : "Inggris"
}

const eropa = {
    nama_siswa : "Lucas",
    asal : "Jerman",
    bahasa : "Deutsch"
}

const dunia = [amerika,afrika,asia,australia,eropa]

for(bumi of dunia) {
    console.log(bumi.asal)
}

for(let bumi in amerika) {
    console.log(bumi + '='+ amerika[bumi])
}

for(let bumi in afrika) {
    console.log(bumi + '='+ afrika[bumi])
}

for(let bumi in asia) {
    console.log(bumi + '='+ asia[bumi])
}

for(let bumi in australia) {
    console.log(bumi + '='+ australia[bumi])
}

for(let bumi in eropa) {
    console.log(bumi + '='+ eropa[bumi])
}