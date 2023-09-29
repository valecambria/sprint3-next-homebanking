// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import api from '../api/transferencias.json'

export default function handler(req, res) {
  res.status(200).json(api)
}
