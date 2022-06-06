import { z } from "zod";
import {
  TWITCH_ACCESS_TOKEN,
  TWITCH_CLIENT_ID,
  TWITTER_ACCESS_TOKEN,
} from "~/env.server";

export type Metrics = {
  discord: number;
  twitter: number;
  twitch: number;
};

export async function getMetrics(): Promise<Metrics> {
  let [twitter, twitch, discord] = await Promise.all([
    getTwitterMetrics(),
    getTwitchMetrics(),
    getDiscordMetrics(),
  ]);

  return {
    discord: discord.approximate_member_count,
    twitter: twitter.data.public_metrics.followers_count,
    twitch: twitch.total,
  };
}

async function getTwitchMetrics() {
  let response = await fetch(
    "https://api.twitch.tv/helix/users/follows?to_id=780300495&first=1",
    {
      headers: {
        Authorization: `Bearer ${TWITCH_ACCESS_TOKEN}`,
        "Client-Id": TWITCH_CLIENT_ID,
      },
    }
  );

  let data = await response.json();

  return z.object({ total: z.number().default(36) }).parse(data);
}

async function getTwitterMetrics() {
  let response = await fetch(
    "https://api.twitter.com/2/users/1095066019469713408?user.fields=public_metrics",
    { headers: { Authorization: `Bearer ${TWITTER_ACCESS_TOKEN}` } }
  );

  let data = await response.json();

  return z
    .object({
      data: z.object({
        public_metrics: z.object({
          followers_count: z.number().default(383),
        }),
      }),
    })
    .parse(data);
}

async function getDiscordMetrics() {
  let response = await fetch(
    "https://discord.com/api/v9/invites/hnVG2wqtFz?with_counts=true"
  );
  let data = await response.json();
  return z
    .object({ approximate_member_count: z.number().default(260) })
    .parse(data);
}
