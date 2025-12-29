const binaryRepresentation = new TextEncoder().encode("h")

console.log(binaryRepresentation)

// Uint8Array has limit upto 255 , it will round off last 8 digits of a byte
const arr = new Uint8Array(["1918"])

console.log(arr)