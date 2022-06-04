const Item = require('../item');
const express = require('express');
const router = express.Router();
const items = require('../fakeDb')



router.get('/', function (req, res, next) {
    try {

        return res.json({ items })

    } catch(err) {
        return next(err)
    }
    
})

router.post('/', function(req, res, next) {
    try {
        const newItem = new Item(req.body.name, req.body.price);
        return res.json({item: newItem})
    } catch(err) {
        return next(err)
    }
})

router.get('/:name', (req, res, next) => {
    try {
        let retrievedItem = Item.find(req.params.name)
        return res.json({item:retrievedItem})
    } catch(err) {
        return next(err)
    }
})

router.patch('/:name', (req, res, next) => {
    try {
        let updatedItem = Item.update(req.params.name, req.body);
        return res.json({ item:updatedItem})

        
    } catch(err) {
        return next(err)
    }
})

router.delete('/:name', (req, res, next) => {
    try {
        Item.remove(req.params.name)
        return res.json({message:'Deleted'});
        
    } catch(err) {
        return next(err)
    }
})

module.exports = router;