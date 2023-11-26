import { Router } from 'express'

import { getJutsu, getJutsus } from '../../models/jutsus'

const router = Router()

router.get('/', async (req, res) => {
  const jutsus = await getJutsus()
  res.send(jutsus)
})

router.get('/:id', async (req, res) => {
  const jutsu = await getJutsu(req.params.id)
  if (jutsu) {
    res.send(jutsu)
  } else {
    res.status(404).send({ msg: 'Jutsu not found' })
  }
})

export default router
