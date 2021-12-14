// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  })
  const { address } = req.query
  const path =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8080'
      : 'https://sweeper.floor.report'

  const url = `${path}/v2/info`
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
