import db from '../utils/db'

export const getJutsus = async () => db.jutsu.findMany()

export const getJutsu = async (id) =>
  db.jutsu.findUnique({ where: { jutsuId: id } })

export const addJutsu = async (name) => db.jutsu.create({ data: { name } })