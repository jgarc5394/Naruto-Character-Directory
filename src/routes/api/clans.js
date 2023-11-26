import { Router } from 'express'

import { getClan, getClans } from '../../models/clans'

const router = Router()

router.get('/', async (req, res) => {
  const clans = await getClans()
  res.send(clans)
})

router.get('/:id', async (req, res) => {
  const clan = await getClan(req.params.id)
  if (clan) {
    res.send(clan)
  } else {
    res.status(404).send({ msg: 'Clan not found' })
  }
})

export default router
