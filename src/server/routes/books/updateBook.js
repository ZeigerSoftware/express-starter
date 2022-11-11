const dbClient = require('../../../database')

const updateBook = async (req, res, next) => {
  const { body } = req
  const { bookId } = req.params

  try {
    const results = await dbClient('books')
      .update(body)
      .where({ id: bookId })
      .returning('*')

    return res.json(results)
  } catch (error) {
    return next(error)
  }
}

module.exports = updateBook
