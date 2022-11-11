const dbClient = require('../../../database')

const getAuthors = async (req, res, next) => {
  try {
    const results = await dbClient('authors')
      .where({})

    return res.json(results)
  } catch (error) {
    return next(error)
  }
}

module.exports = getAuthors
