const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("index", {title: 'Homepage'})
})

router.get("/classes", (req, res) => {
    res.send("All classes")
})

module.exports = router;