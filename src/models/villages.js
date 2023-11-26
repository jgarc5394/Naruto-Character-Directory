import db from '../utils/db'

export const getVillages = async () => db.village.findMany()

export const getVillage = async (id) =>
  db.village.findUnique({
    where: { villageId: id },
    include: { clans: true, },
  })

export const addVillage = async (name) => db.village.create({ data: { name } })
