const router = require('express').Router()

router.get('/', require('./getBooks'))
router.get('/:bookId', require('./getBook'))
router.post('/', require('./createBook'))
router.put('/:bookId', require('./updateBook'))
router.delete('/:bookId', require('./deleteBook'))

module.exports = router
