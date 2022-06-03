import { redirect, type LoaderFunction } from "@remix-run/node";
import { DISCORD_INVITE_LINK } from "~/env.server";

export let loader: LoaderFunction = async () => {
  return redirect(DISCORD_INVITE_LINK);
};
