const express = require("express")
const app = express()
const port = 3000;
const {Restaurant, Menu, Item} = require("./models/index")
const {sequelize} = require("./db")

//TODO: 
app.get("/restaurants", async (req, res) => {
    const allRest = await Restaurant.findAll({
        include: Menu, 
        include: [{
            model: Menu,
            include: [{
                model: Item
            }]
        }]
    })
    res.status(202).json(allRest)
})

app.listen(port, () => {
    sequelize.sync()
    console.log("App listening on port " + port)
})