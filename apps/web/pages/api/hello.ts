import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const aaa = 1
  if (aaa == 1) {
    return false
  }

  res.status(200).json({ name: 'John Doe' })
}
