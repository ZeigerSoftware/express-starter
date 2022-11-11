const dbClient = require('../../../database')

const getBooks = async (req, res, next) => {
  try {
    const results = await dbClient('books')
      .where({})

    return res.json(results)
  } catch (error) {
    return next(error)
  }
}

module.exports = getBooks
