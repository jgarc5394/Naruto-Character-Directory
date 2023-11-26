import { Router } from 'express'
import basicAuth from 'express-basic-auth'

import persons from './characters'
import companies from './companies'
import departments from './departments'
import employees from './employees'

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
router.use('/companies', companies)
router.use('/departments', departments)
router.use('/employees', employees)

export default router
