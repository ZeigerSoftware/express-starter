const router = require('express').Router()

router.get('/', require('./getAuthors'))
router.get('/:authorId', require('./getAuthor'))
router.post('/', require('./createAuthor'))
router.put('/:authorId', require('./updateAuthor'))
router.delete('/:authorId', require('./deleteAuthor'))

module.exports = router
