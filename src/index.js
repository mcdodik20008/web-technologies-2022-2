@import("pizza.js")

class Block {
    constructor(id, className, tagName) {
        this.id = id
        this.className = className
        this._tagName = tagName;

        this._element = null
    }

    render() {
        this._element = document.createElement(this._tagName)

        if (this.id) {
            this._element.id = this.id
        }

        if (this.className) {
            this._element.className = this.className
        }

        return this._element
    }
}

class Menu extends Block {
    constructor(id, className, items) {
        super(id, className, 'ul');

        this.items = items
    }

    render() {
        super.render();
        this.items.forEach((item) => {
            this._element.appendChild(item.render())
        })
        return this._element
    }
}

class MenuItem extends Block {
    constructor(id, name, price, calories, changers) {
        super(id, "div-block", "div");
        this.name = name;
        this.price = price;
        this.calories = calories;
        this.changers = changers;
        this.slash = new SpanBlock(null, "/")
        this.colon = new SpanBlock(null, ": ")
    }

    render() {
        super.render()
        this._element.appendChild(this.name.render())
        this._element.appendChild(this.colon.render())
        this._element.appendChild(this.price.render())
        this._element.appendChild(this.slash.render())
        this._element.appendChild(this.calories.render())
        this.changers.forEach((changer) => {
            this._element.appendChild(changer.render())
        })
        return this._element
    }
}

class SpanBlock extends Block {
    constructor(id, name) {
        super(id, null, 'span');

        this.name = name
    }

    render() {
        super.render();
        this._element.textContent = this.name;
        return this._element;
    }
}

class Changer extends Block {
    constructor(id, name, data) {
        super(id, "label-new-line", "Label");
        this.name = name;
        this.checBox = document.createElement('input')
        this.checBox.type = "checkbox"
        this.data = data
        this.basicPrice = 0
        this.basicCalories = 0
    }

    render() {
        super.render();
        this._element.appendChild(this.checBox)
        this._element.appendChild(new SpanBlock(null, this.name).render())
        return this._element
    }
}
class SizeChanger extends Changer{
    constructor(id, name, data) {
        super(id, name, data);
        this.addCheckEventListener()
    }

    addCheckEventListener(){
        let flag = true;
        this.checBox.addEventListener('click', e => {
            let price = document.getElementById(this.data.priceId)
            let calories = document.getElementById(this.data.caloriesId)
            if(flag){
                console.log("Увеличил")
                price.textContent = parseInt(price.textContent) + parseInt(this.data.bPrice) - parseInt(this.data.sPrice) + "";
                calories.textContent =  parseInt(calories.textContent) + parseInt(this.data.bCalories) - parseInt(this.data.sCalories) + "";
            } else {
                price.textContent = parseInt(price.textContent) + parseInt(this.data.sPrice) - parseInt(this.data.bPrice) + "";
                calories.textContent =  parseInt(calories.textContent) + parseInt(this.data.sCalories) - parseInt(this.data.bCalories) + "";
            }
            flag = !flag
        });
    }
}

class DopChanger extends Changer {
    constructor(id, name, data) {
        super(id, name, data);
        this.addCheckEventListener()
    }

    addCheckEventListener(){
        let flag = true;
        this.checBox.addEventListener('click', e => {
            let peperBig = document.getElementById("peperBig").firstChild.value
            let price = document.getElementById(this.data.priceId)
            let calories = document.getElementById(this.data.caloriesId)
            if(flag){
                console.log(peperBig)
                price.textContent = parseInt(price.textContent)
                calories.textContent =  parseInt(calories.textContent) + parseInt(this.data.bCalories) - parseInt(this.data.sCalories) + "";
            } else {
                console.log(peperBig)
                price.textContent = parseInt(price.textContent) + parseInt(this.data.sPrice) - parseInt(this.data.bPrice) + "";
                calories.textContent =  parseInt(calories.textContent) + parseInt(this.data.sCalories) - parseInt(this.data.bCalories) + "";
            }
            flag = !flag
        });
    }
}

class Data {
    constructor(priceId, caloriesId, sPrice, sCalories, bPrice, bCalories) {
        this.priceId = priceId
        this.caloriesId = caloriesId
        this.sCalories = sCalories;
        this.bPrice = bPrice;
        this.bCalories = bCalories;
        this.sPrice = sPrice;
    }
}
cheeseData = new Data("pricePeper", "caloriesPeper", "50", "0", "100", "0");

namePeper = new SpanBlock(null, "Пеперони");
pricePeper = new SpanBlock("pricePeper", "900");
caloriesPeper = new SpanBlock("caloriesPeper", "500");
peperData = new Data("pricePeper", "caloriesPeper", "100", "100", "200", "200");
peperBig = new SizeChanger("peperBig", "Большая или маленькая пицца", peperData)
peperCheese = new DopChanger(null, "Дополнительная Моцарелла", cheeseData)

peperItem = new MenuItem("peperItem", namePeper, pricePeper, caloriesPeper, [peperBig, peperCheese]);

menu = new Menu("menu", "class-menu", [peperItem])

document.body.appendChild(peperItem.render())
