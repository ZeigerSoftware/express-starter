const dbClient = require('../../../database')

const deleteAuthor = async (req, res, next) => {
  const { authorId } = req.params

  try {
    const results = await dbClient('authors')
      .delete()
      .where({ id: authorId })
      .returning('*')

    return res.json(results)
  } catch (error) {
    return next(error)
  }
}

module.exports = deleteAuthor
