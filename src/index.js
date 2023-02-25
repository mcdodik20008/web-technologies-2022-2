function changePriceCalories(pizza){
    document.querySelector("#pizzaPrice").innerText = pizza.calculatePrice();
    document.querySelector("#pizzaCalories").innerText = pizza.calculateCalories();
}

class Pizza {
    constructor(name, price, calories, size = false,  toppings = []) {
        this.name = name;
        this.price = price;
        this.calories = calories;
        this.size = size;
        this.toppings = toppings;
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    removeTopping(topping) {
        this.toppings = this.toppings.filter(item => item !== topping);
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
        for (const i in this.toppings) {
            price += this.toppings[i].getPrice(this.size)
        }
        return price + this.getSizePrice() + this.price;
    }

    calculateCalories() {
        let calories = 0;
        console.log(this.toppings)
        for (const i in this.toppings) {
            calories += this.toppings[i].getCalories(this.size)
        }
        return calories + this.getSizeCalories() + this.calories
    }

    getSizePrice() {
        return this.size ? 200 : 100;
    }

    getSizeCalories() {
        return this.size ? 200 : 100;
    }

    render() {
        let block = document.createElement("div")
        let image = document.createElement("div")
        image.className = "ghost-image";
        block.appendChild(image);
        return block
    }
}

class Topping {
    constructor(id, name, small, big) {
        this.id = id;
        this.name = name;
        this.small = small;
        this.big = big;
    }

    render(parent) {
        let block = document.createElement("input")
        let label = document.createElement("label")
        block.type = "checkbox"
        block.id = this.id
        label.textContent = this.name
        label.setAttribute("for", this.id)
        parent.appendChild(block)
        parent.appendChild(label)
    }

    getPrice(isBig){
        return isBig ? this.big[0] : this.small[0]
    }

    getCalories(isBig){
        return isBig ? this.big[1] : this.small[1]
    }
}

class PizzaBlock{
    render(item, radio) {
        let name = document.createElement("label")
        radio.name = "pizza";
        radio.type = "radio";
        name.textContent = item.name;
        let block = item.render();
        block.appendChild(radio);
        block.appendChild(name)
        return block
    }
}

class PizzaList {
    constructor(id, className, tagName, pizzas) {
        this.id = id
        this.className = className
        this._tagName = tagName;
        this.pizzas = pizzas;
        this.selectedPizza = pizzas[0];
        this._element = null;
    }

    render() {
        this._element = document.createElement(this._tagName)
        if (this.id) {
            this._element.id = this.id
        }
        if (this.className) {
            this._element.className = this.className
        }

        this.pizzas.forEach((item) => {
            let radio = document.createElement("input")
            let block = new PizzaBlock().render(item, radio);
            radio.addEventListener("click", (e) => {
                this.selectedPizza = pizzas.find(x => x.name === block.childNodes.item(2).textContent)
                this.selectedPizza.size = false;
                this.selectedPizza.toppings = [];
                document.querySelector("form").reset()
                changePriceCalories(this.selectedPizza)
            })
            this._element.appendChild(block)
        })
        return this._element
    }
}

peper = new Pizza("Пеперони", 500, 800)
mar = new Pizza("Маргарита", 300, 900)
bav = new Pizza("Баварская", 700, 1000)

pizzas = [peper, mar, bav];
pizaList = new PizzaList(null, "pizzas", "div", pizzas)

document.querySelector("#pizzaSize").addEventListener("change", x => {
    pizaList.selectedPizza.size = x.target.value === "large"
    changePriceCalories(pizaList.selectedPizza);
})

document.body.insertBefore(pizaList.render(), document.body.childNodes[0])
let topList = [
    new Topping("chees", "Сырный бортик", [50, 0], [100, 50]),
    new Topping("macar", "Сливочная моцарелла", [150, 50], [300, 50]),
    new Topping("chedder", "Чеддер и пармезан", [150, 50], [300, 50])
]
topList.forEach(x => x.render(document.body.querySelector("#nachinka")))

document.body.querySelectorAll("input[type= checkbox]").forEach(x =>{
    x.addEventListener("change",y => {
        if (y.target.checked){
            pizaList.selectedPizza.addTopping(topList.find(x => x.id ===y.target.id))
        } else {
            pizaList.selectedPizza.removeTopping(topList.find(x => x.id ===y.target.id))
        }
        changePriceCalories(pizaList.selectedPizza)
    })
})
document.querySelector("input[type= radio]").setAttribute("checked", "")
changePriceCalories(pizaList.selectedPizza)