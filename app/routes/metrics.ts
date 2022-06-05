import { json, type LoaderFunction } from "@remix-run/node";
import { TWITCH_CLIENT_ID, TWITCH_ACCESS_TOKEN } from "~/env.server";

// Twitch API
const headers = new Headers();
headers.append("Authorization", `Bearer ${TWITCH_ACCESS_TOKEN}`);
headers.append("Client-Id", TWITCH_CLIENT_ID);
const twitchDataPromise = fetch(
  "https://api.twitch.tv/helix/users/follows?to_id=780300495&first=1",
  { headers }
).then((res) => res.json());

export type MetricsLoaderData = {
  metrics: {
    discord: number;
    twitter: number;
    twitch: number;
  };
};

export let loader: LoaderFunction = async () => {
  const [twitchData] = await Promise.all([twitchDataPromise]);
  return json<MetricsLoaderData>({
    metrics: { discord: 257, twitter: 379, twitch: twitchData?.total || 36 },
  });
};
