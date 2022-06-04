const express = require('express');
const ExpressError = require('./expressError');
const app = express();
const itemsRoutes = require('./routes/items')
const morgan = require('morgan')

app.use(express.json());
app.use('/items', itemsRoutes);
app.use(morgan('dev')) 

// 404 handler
app.use(function (req, res, next) {
    return new ExpressError('Not Found', 404)
})


// general error handler
app.use(function (req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err.message
    })
})



app.listen(4000, function() {
    console.log("Server is listening on port 4000");
  });

