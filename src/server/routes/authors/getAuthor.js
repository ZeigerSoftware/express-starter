const dbClient = require('../../../database')

const getAuthor = async (req, res, next) => {
  const { authorId } = req.params

  try {
    const results = await dbClient('authors')
      .where({ id: authorId })

    return res.json(results)
  } catch (error) {
    return next(error)
  }
}

module.exports = getAuthor
