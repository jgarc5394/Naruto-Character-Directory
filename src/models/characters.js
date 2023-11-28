import { v4 as uuid } from 'uuid'

const characters = []

export const getCharacters = () => characters

export const getCharacter = (id) => {
  return characters.find((character) => character.id === id)
}

export const createCharacter = (character) => {
  const id = uuid()
  characters.push({ id, ...character })
  return getCharacter(id)
}

export const updateCharacter = (id, character) => {
  const databaseCharacter = getCharacter(id)
  if (databaseCharacter) {
    const characterIndex = characters.findIndex((c) => c.id === id)
    characters[characterIndex] = { id, ...character }
  }
  return getCharacter(id)
}

export const deleteCharacter = (id) => {
  const characterIndex = characters.findIndex((c) => c.id === id)
  if (characterIndex !== -1) {
    characters.splice(characterIndex, 1)
    return true
  }
  return false
}
