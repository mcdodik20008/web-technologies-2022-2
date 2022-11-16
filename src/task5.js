function getPrefix(strings) {
    if (strings.length === 0)
        return ""

    strings = strings.sort((a, b) => a.length > b.length ? 1 : a.length === b.length ? 0 : -1)
    const str = strings[0];
    const n = str.length;
    let len = str.length;
    for (let i = 0; len > 1; i++) {
        for (let j = 0; j + len < n + 1; j++) {
            let subStr = str.substring(j, j + len);
            if (strings.every(x => x.includes(subStr))) {
                return subStr;
            }
        }
        len--;
    }
    return "";
}
console.log(getPrefix(["цветок", "поток", "хлопок"]))
console.log(getPrefix(["собака","гоночная машина","машина"]))