import { z } from "zod";

export const { DISCORD_INVITE_LINK } = z
  .object({
    DISCORD_INVITE_LINK: z.string().min(1),
  })
  .parse(process.env);
