function createCounter() {
    count = 1;

    return function () {
        return count++;
    }
}

const counter1 = createCounter()
console.log(counter1()) // 1
console.log(counter1())  // 2

const counter2 = createCounter()
console.log(counter2())
console.log(counter2()) // 2
