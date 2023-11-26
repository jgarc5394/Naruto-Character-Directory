import { Router } from 'express'

import { getImage, getImages } from '../../models/images'

const router = Router()

router.get('/', async (req, res) => {
  const images = await getImages()
  res.send(images)
})

router.get('/:id', async (req, res) => {
  const image = await getImage(req.params.id)
  if (image) {
    res.send(image)
  } else {
    res.status(404).send({ msg: 'Image not found' })
  }
})

export default router
