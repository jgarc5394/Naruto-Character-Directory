import db from '../utils/db'

export const getImages = async () => db.image.findMany()

export const getImage = async (id) =>
  db.image.findUnique({ where: { imageId: id } })

export const addImage = async (name) => db.image.create({ data: { name } })