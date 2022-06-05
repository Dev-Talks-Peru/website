import { z } from "zod";

export const { DISCORD_INVITE_LINK, TWITCH_CLIENT_ID, TWITCH_ACCESS_TOKEN } = z
  .object({
    DISCORD_INVITE_LINK: z.string().min(1),
    TWITCH_CLIENT_ID: z.string().min(1),
    TWITCH_ACCESS_TOKEN: z.string().min(1),
  })
  .parse(process.env);
