import db from '../utils/db'

export const getCharacterIDs = async (skip, take) => {
  const count = await db.characterID.count()
  const characterIDs = await db.characterIDs.findMany({
    skip,
    take,
  })
  return { count, characterIDs }
}

export const getCharacterID = async (id) =>
  db.characterID.findUnique({ where: { characterID: id } })

export const addCharacterID = async (characterIDData) =>
  db.characterID.create({ data: { ...characterIDData } })

export const updateCharacterID = async (id, characterIDData) => {
  const characterID = await getCharacterID(id)
  if (characterID) {
    return db.characterID.update({
      where: { characterID: id },
      data: { ...characterID, ...characterIDData, updatedAt: new Date() },
    })
  }
  return null
}

export const deleteCharacterID = async (id) =>
  db.characterID.delete({ where: { characterID: id } })
