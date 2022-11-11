const dbClient = require('../../../database')

const updateAuthor = async (req, res, next) => {
  const { body } = req
  const { authorId } = req.params

  try {
    const results = await dbClient('authors')
      .update(body)
      .where({ id: authorId })
      .returning('*')

    return res.json(results)
  } catch (error) {
    return next(error)
  }
}

module.exports = updateAuthor
