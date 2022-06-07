import { redirect, type LoaderFunction } from "@remix-run/node";
import { TWITCH_PROFILE_LINK } from "~/env.server";

export let loader: LoaderFunction = async () => {
  return redirect(TWITCH_PROFILE_LINK);
};
