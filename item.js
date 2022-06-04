// make class of Items

const items = require("./fakeDb")

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        items.push(this)
    }

    static all() {
        return items

    }

    

}

module.exports = Item