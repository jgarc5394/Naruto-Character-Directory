import db from '../utils/db'

export const getClans = async () => db.clan.findMany()

export const getClan = async (id) =>
  db.clan.findUnique({ where: { clanId: id } })

export const addClan = async (name, villageId) =>
  db.clan.create({ data: { name, villageId } })
