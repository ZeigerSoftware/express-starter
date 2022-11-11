const dbClient = require('../../../database')

const createAuthor = async (req, res, next) => {
  const { body } = req

  try {
    const results = await dbClient('authors')
      .insert(body)
      .returning('*')

    return res.json(results)
  } catch (error) {
    return next(error)
  }
}

module.exports = createAuthor
