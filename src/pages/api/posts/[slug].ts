import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { slug } = req.query;

  const postBySlug = await prisma.post.findFirst({
    where: {
      slug: slug as string,
    },
  });

  return res.status(200).json(postBySlug);
}
