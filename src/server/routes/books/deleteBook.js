const dbClient = require('../../../database')

const deleteBook = async (req, res, next) => {
  const { bookId } = req.params

  try {
    const results = await dbClient('books')
      .delete()
      .where({ id: bookId })
      .returning('*')

    return res.json(results)
  } catch (error) {
    return next(error)
  }
}

module.exports = deleteBook
