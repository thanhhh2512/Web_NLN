const router = require('express').Router();

// get data
router.get('/post', (req, res) => {
    return res.status(200).json({
        message: 'successfull'
    })
});

// post to server
router.post('/post', (req, res) => {
    const {name, pass} = req.body;
    console.log(req.body);
    if (!name) {
        return res.status(400).json({
            message: 'lỗi'
        })
    }


    return res.status(200).json({
        message: 'successfull'
    })
});

// update data 
// router.put();

// update data
// router.patch();

// update data
// router.delete();

module.exports = router;