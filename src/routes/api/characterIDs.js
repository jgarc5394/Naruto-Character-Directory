import { Router } from 'express'

import {
  getCharacterID,
  getCharacterIDs,
  addCharacterID,
  updateCharacterID,
  deleteCharacterID,
} from '../../models/characterIDs'

const router = Router()

router.get('/', async (req, res) => {
  const size = Number(req.query.size) || 10
  const page = Number(req.query.page) || 1
  const skip = size * (page - 1)
  const take = size
  const { count, characterIDs } = await getCharacterIDs(skip, take)
  res.set({
    'X-Total-Count': count,
    'X-Total-Pages': Math.ceil(count / size),
  })
  res.send(characterIDs)
})

router.get('/:id', async (req, res) => {
  const characterID = await getCharacterID(req.params.id)
  if (characterID) {
    res.send(characterID)
  } else {
    res.status(404).send({ msg: 'CharacterID not found' })
  }
})

router.post('/', async (req, res) => {
  const characterID = await addCharacterID(req.body)
  res.send(characterID)
})

router.put('/:id', async (req, res) => {
  const characterID = await updateCharacterID(req.params.id, req.body)
  if (characterID) {
    res.send(characterID)
  } else {
    res.status(404).send({ msg: 'CharacterID not found' })
  }
})

router.delete('/:id', async (req, res) => {
  const characterID = await deleteCharacterID(req.params.id)
  if (characterID) {
    res.send(characterID)
  } else {
    res.status(404).send({ msg: 'CharacterID not found' })
  }
})

export default router
