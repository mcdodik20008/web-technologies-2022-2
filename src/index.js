class Pizza {
    constructor(name, price, calories, size = false) {
        this.name = name;
        this.price = price;
        this.calories = calories;
        this.size = size;
        this.topping = [];
    }

    addTopping(topping) {
        this.topping.push(topping);
    }

    removeTopping(topping) {
        this.topping.delete(topping);
    }

    getToppings() {
        return this.topping;
    }

    getSize() {
        return this.size ? "Большая" : "Маленькая";
    }

    getStuffing() {
        return this.name;
    }

    calculatePrice() {
        let price = 0;
        for (const i in this.topping) {
            price += this.topping[i].getPrice(this.size)
        }
        return price + this.getSizePrice() + this.price;
    }

    calculateCalories() {
        let calories = 0;
        for (const i in this.topping) {
            calories += this.topping[i].getCalories(this.size)
        }
        return calories + this.getSizeCalories() + this.calories
    }

    getSizePrice() {
        return this.size ? 200 : 100;
    }

    getSizeCalories() {
        return this.size ? 200 : 100;
    }
}

class Topping {
    constructor(name, priceS, priceB, caloriesS, caloriesB) {
        this.name = name;
        this.priceS = priceS;
        this.priceB = priceB;
        this.caloriesS = caloriesS;
        this.caloriesB = caloriesB;
    }

    getPrice(size){
        return size ? this.priceB : this.priceS
    }

    getCalories(size){
        return size ? this.caloriesB : this.caloriesS
    }
}



let mar = new Pizza("Маргарита", 500, 300, true);
let pep = new Pizza("Пепперони", 800, 400);
let bav = new Pizza("Баварская", 700, 450);
let sliv = new Topping("Сливочная моцарелла", 50, 50, 2, 2);
let cBorder = new Topping("сырный борт", 150, 300, 50, 50);
let chedAndParm = new Topping("чедер и пармезан", 150, 300, 50, 50);

mar.addTopping(sliv);
mar.addTopping(cBorder);
console.log(mar.calculatePrice() + "    " + mar.calculateCalories());
