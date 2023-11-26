import { Router } from 'express'

import { getVillages, getVillage, addVillage } from '../../models/villages'
import { addClan } from '../../models/clans'

const router = Router()

router.get('/', async (req, res) => {
  const villages = await getVillages()
  res.send(villages)
})

router.get('/:id', async (req, res) => {
  const village = await getVillage(req.params.id)
  if (village) {
    res.send(village)
  } else {
    res.status(404).send({ msg: 'Village not found' })
  }
})

router.post('/', async (req, res) => {
  const villageName = req.body.name
  if (villageName) {
    const village = await addVillage(villageName)
    res.send(village)
  } else {
    res.status(400).send({ msg: 'Village name is required' })
  }
})

router.post('/:id', async (req, res) => {
  const villageId = req.params.id
  const village = await getVillages(villageId)
  if (village) {
    const clanName = req.body.name
    if (clanName) {
      const clan = await addDepartment(clanName, villageId)
      res.send(clan)
    } else {
      res.status(400).send({ msg: 'Clan name is required' })
    }
  } else {
    res.status(400).send({ msg: 'Village does not exist' })
  }
})

export default router
