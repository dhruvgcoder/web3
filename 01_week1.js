const crypto = require("crypto")
let nonce = 0

while(true){
    nonce++
    const prefix = "harkirat => Raman | Rs 100\n Ram => Ankit | Rs 10"

    const input = prefix + nonce.toString()
    const hash = crypto.createHash('SHA-256').update(input).digest('hex')
    
    if(hash.startsWith("00000")){
       console.log(`Prefix : ${prefix}\n Nonce :${nonce}, \nHash :${hash}`)
       break
    }
}