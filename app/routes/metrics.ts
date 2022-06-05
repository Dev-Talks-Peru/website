import { json, type LoaderFunction } from "@remix-run/node";
import {
  TWITCH_CLIENT_ID,
  TWITCH_ACCESS_TOKEN,
  TWITTER_ACCESS_TOKEN,
} from "~/env.server";

// Twitch API
const twitchHeaders = new Headers();
twitchHeaders.append("Authorization", `Bearer ${TWITCH_ACCESS_TOKEN}`);
twitchHeaders.append("Client-Id", TWITCH_CLIENT_ID);
const twitchDataPromise = fetch(
  "https://api.twitch.tv/helix/users/follows?to_id=780300495&first=1",
  { headers: twitchHeaders }
).then((res) => res.json());

// Twitter API
const twitterHeaders = new Headers();
twitterHeaders.append("Authorization", `Bearer ${TWITTER_ACCESS_TOKEN}`);
const twitterDataPromise = fetch(
  "https://api.twitter.com/2/users/1095066019469713408?user.fields=public_metrics",
  { headers: twitterHeaders }
).then((res) => res.json());

export type MetricsLoaderData = {
  metrics: {
    discord: number;
    twitter: number;
    twitch: number;
  };
};

export let loader: LoaderFunction = async () => {
  const [twitterData, twitchData] = await Promise.all([
    twitterDataPromise,
    twitchDataPromise,
  ]);
  return json<MetricsLoaderData>({
    metrics: {
      discord: 257,
      twitter: twitterData?.data?.public_metrics?.followers_count || 379,
      twitch: twitchData?.total || 36,
    },
  });
};
