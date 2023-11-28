import db from '../utils/db'

export const getCharacters = async (skip, take) => {
  const count = await db.character.count()
  const characters = await db.character.findMany({
    skip,
    take,
  })
  return { count, characters }
}

export const getCharacter = async (id) =>
  db.character.findUnique({ where: { characterId: id } })

export const addCharacter = async (characterData) =>
  db.character.create({ data: { ...characterData } })

export const updateCharacter = async (id, characterData) => {
  const character = await getCharacter(id)
  if (character) {
    return db.character.update({
      where: { characterId: id },
      data: { ...character, ...characterData, updatedAt: new Date() },
    })
  }
  return null
}

export const deleteCharacter = async (id) =>
  db.character.delete({ where: { characterId: id } })