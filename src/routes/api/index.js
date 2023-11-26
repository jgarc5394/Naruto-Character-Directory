import { Router } from 'express'
import basicAuth from 'express-basic-auth'

import characters from './characters'
import villages from './villages'
import clans from './clans'
import characterIDs from './characterIDs'

const router = Router()

router.use(
  basicAuth({
    users: { [process.env.ADMIN_USER]: process.env.ADMIN_PASSWORD },
  }),
)

router.get('/', (req, res) => {
  res.send({ msg: 'Inside API Endpoints' })
})

router.use('/characters', characters)
router.use('/villages', villages)
router.use('/clans', clans)
router.use('/characterIDs', characterIDs)

export default router
