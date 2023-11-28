import { Router } from 'express'

import {
  getCharacter,
  getCharacters,
  addCharacter,
  updateCharacter,
  deleteCharacter,
} from '../../models/characters'

const router = Router()

router.get('/', async (req, res) => {
  const size = Number(req.query.size) || 10
  const page = Number(req.query.page) || 1
  const skip = size * (page - 1)
  const take = size
  const { count, characters } = await getCharacters(skip, take)
  res.set({
    'X-Total-Count': count,
    'X-Total-Pages': Math.ceil(count / size),
  })
  res.send(characters)
})

router.get('/:id', async (req, res) => {
  const character = await getCharacter(req.params.id)
  if (character) {
    res.send(character)
  } else {
    res.status(404).send({ msg: 'Character not found' })
  }
})

router.post('/', async (req, res) => {
  const character = await addCharacter(req.body)
  res.send(character)
})

router.put('/:id', async (req, res) => {
  const character = await updateCharacter(req.params.id, req.body)
  if (character) {
    res.send(character)
  } else {
    res.status(404).send({ msg: 'Character not found' })
  }
})

router.delete('/:id', async (req, res) => {
  const character = await deleteCharacter(req.params.id)
  if (character) {
    res.send(character)
  } else {
    res.status(404).send({ msg: 'Character not found' })
  }
})

export default router
