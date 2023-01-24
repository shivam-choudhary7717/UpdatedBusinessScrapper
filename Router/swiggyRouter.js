const express = require('express');
const router = express.Router();

router.post("/swiggy", async (req, res) => {
    try {
        res.send(req.body);
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;