import { redirect, type LoaderFunction } from "@remix-run/node";
import { TWITTER_PROFILE_LINK } from "~/env.server";

export let loader: LoaderFunction = async () => {
  return redirect(TWITTER_PROFILE_LINK);
};
