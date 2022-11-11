const dbClient = require('../../../database')

const createBook = async (req, res, next) => {
  const { body } = req

  try {
    const results = await dbClient('books')
      .insert(body)
      .returning('*')

    return res.json(results)
  } catch (error) {
    return next(error)
  }
}

module.exports = createBook
