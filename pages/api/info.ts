// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  })
  const { address } = req.query

  const url = `https://sweeper.floor.report/info`
  const response = await fetch(url, {
    headers,
    method: 'POST',
    redirect: 'follow',
    body: JSON.stringify({ address, skipBQ: false }),
  })
  const collections = await response.json()

  res.status(200).json(collections)
}

export default handler
