const Item = require('../item');
const express = require('express');
const router = express.Router();



router.get('/', function (req, res, next) {
    try {
        return res.json({ items: Item.all() })

    } catch(err) {
        return next(err)
    }
    
})

router.post('/', function(req, res) {
    try {
        const newItem = new Item(req.body.name, req.body.price);
        return res.json({item: newItem})
    } catch(err) {
        return next(err)
    }
})

// router.get('/:name', (req, res, next) => {
//     try {
//         let foundItem = Item.find(req.params.name)
//         return res.json({item:foundItem})
//     } catch(err) {
//         return next(err)
//     }
// })

module.exports = router;