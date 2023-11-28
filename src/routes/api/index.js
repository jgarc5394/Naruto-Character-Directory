import { Router } from 'express'
import basicAuth from 'express-basic-auth'

import characters from './characters'
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

export default router
