import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/cleanup`, {
      method: "POST",
      headers: { "X-Auth": process.env.CRON_SECRET || "" },
    });
    const data: { success: boolean } = await response.json();

    if (data.success) {
      return res.status(200).json(data);
    }
    res.status(400).end({ error: "error while running cron" });
  } catch (err: any) {
    res.status(500).end({ error: err.message });
  }
}
