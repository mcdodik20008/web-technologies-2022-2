const result1 = spinWords("Привет от Legacy")
console.log(result1) // тевирП от ycageL

const result2 = spinWords("This is a test")
console.log(result2) // This is a test


function spinWords(str) {
    var words = str.split(' ')
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > 4) {
            words[i] = words[i].split('').reverse().join('')
        }
    }
    return words.join(' ')
}