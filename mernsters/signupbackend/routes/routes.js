const express = requires('express')
const router = express.Router()

router.post('/signup', (request, response) => {
    response.send('send')
})

module.exports = router