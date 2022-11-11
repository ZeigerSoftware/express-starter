const dbClient = require('../../../database')

const getBook = async (req, res, next) => {
  const { bookId } = req.params

  try {
    const results = await dbClient('books')
      .where({ id: bookId })

    return res.json(results)
  } catch (error) {
    return next(error)
  }
}

module.exports = getBook
