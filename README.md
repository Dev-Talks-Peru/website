# DevTalks.pe

[![Netlify Status](https://api.netlify.com/api/v1/badges/5fe8c453-6293-476d-b595-199fd94106c4/deploy-status)](https://app.netlify.com/sites/devtalkspe/deploys)

## Development

Create the `.env` file in the root of the project with the following variables set to whatever:

- `DISCORD_INVITE_LINK`
- `TWITCH_ACCESS_TOKEN`
- `TWITCH_CLIENT_ID`
- `TWITTER_ACCESS_TOKEN`

The Netlify CLI starts your app in development mode, rebuilding assets on file changes.

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
npm run build
# preview deployment
netlify deploy

# production deployment
netlify deploy --prod
```
