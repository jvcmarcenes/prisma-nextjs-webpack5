import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../prisma"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const comments = await prisma.comment.findMany()

  res.status(200).json({ comments })
}