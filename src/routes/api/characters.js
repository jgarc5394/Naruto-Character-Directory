import { Router } from 'express'

import {
  getCharacters,
  getCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} from '../../models/characters'

const router = Router()

router.get('/', (req, res) => {
  const characters = getCharacters()
  res.send(characters)
})

router.get('/:id', (req, res) => {
  const character = getCharacter(req.params.id)
  if (character) {
    res.send(character)
  } else {
    res.status(404).send({ msg: 'Character not found' })
  }
})

router.post('/', (req, res) => {
  const newCharacter = createCharacter(req.body)
  if (newCharacter) {
    res.status(201).send(newCharacter)
  } else {
    res.status(400).send({ msg: 'Bad request' })
  }
})

router.put('/:id', (req, res) => {
  const updatedCharacter = updateCharacter(req.params.id, req.body)
  if (updatedCharacter) {
    res.send(updatedCharacter)
  } else {
    res.status(404).send({ msg: 'Character not found' })
  }
})

router.delete('/:id', (req, res) => {
  const deleted = deleteCharacter(req.params.id)
  if (deleted) {
    res.send({ msg: `Character ${req.params.id} Deleted` })
  } else {
    res.status(404).send({ msg: 'Character not found' })
  }
})

export default router
