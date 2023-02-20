class Pizza {
    constructor(name, price, calories, size = false) {
        this.name = name;
        this.price = price;
        this.calories = calories;
        this.size = size;
        this.topping = [];
    }

    addTopping(topping) {
        this.topping.add(topping);
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
            price += this.topping[i].price
        }
        return price + this.getSizePrice() + this.price;
    }

    calculateCalories() {
        let calories = 0;
        for (const i in this.topping) {
            calories += this.topping[i].calories
        }
        return calories + this.getSizeCalories() + this.calories
    }

    private getSizePrice() {
        return this.size ? 200 : 100;
    }

    private getSizeCalories() {
        return this.size ? 200 : 100;
    }
}

class Topping {
    constructor(name, price, callories) {
        this.name = name;
        this.price = price;
        this.callories = callories;
    }
}

