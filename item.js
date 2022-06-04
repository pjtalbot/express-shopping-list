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

    static find(name) {
        let item = items.find(i => i.name === name);

        return item

    }

    static update(name, data) {
        let item = Item.find(name);

        item.name = data.name;
        item.price = data.price

        return item;

    }

    static remove(name) {
        let item = Item.find(name);

        let index = items.findIndex(ITEM => ITEM.name === name)
        if (index === -1) {
            throw {message: 'Nope', status: 404}
        }

        items.splice(index, 1)




    }

    

}

module.exports = Item