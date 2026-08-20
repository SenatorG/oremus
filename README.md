# Totus Tuus

33 days of preparation, then the Act of Consecration to Jesus through Mary, according to St. Louis de Montfort.

Choose a Marian feast. Begin 33 days before it. Consecrate on the feast itself. Sign in to keep the prayers, notes, and signed Act on your account.

## Attribution

This app was **built with [Grok](https://grok.com) by xAI** in August 2026.

The 33-day method and Act of Consecration follow St. Louis-Marie Grignion de Montfort’s *True Devotion to the Blessed Virgin*. Traditional prayers (Ave Maria, Veni Creator, Litany of the Holy Spirit, and the rest) are in the public domain.

If you fork or publish this work, please keep a line of credit to Grok / xAI, and to de Montfort for the method. See `NOTICE` and `LICENSE`.

## Stack

TanStack Start, React 19, Tailwind v4, Better Auth (Google and X), Postgres.

## Run it yourself

```bash
npm install
npm run dev
```

Then open the URL the command prints. You can browse every feast and the 33-day path with no account.

Sign-in and saved journeys need a Postgres database (`DATABASE_URL`) and the auth broker credentials the hosted app already has. A checkout on your laptop without those still shows the calendar; beginning a preparation requires an account.

```bash
npm run build
npm run typecheck
```

## Put it in git

From the unpacked source:

```bash
git init
git add .
git commit -m "Initial commit: Totus Tuus, built with Grok by xAI"
```

Suggested remote: a GitHub repository named `totus-tuus`. Then `git remote add origin <your-repo-url>` and `git push -u origin main`.

## Share it with friends

1. **Send the live app URL** (the hosted Totus Tuus they can open in a browser). They sign in with Google or X; each person keeps their own 33 days.
2. **Add to Home Screen.** On a phone, open the live app and use the browser’s *Add to Home Screen*. It sits on the home screen like a small prayer book.
3. **This repository.** Clone, run as above, or deploy to Vercel (or any Node 22 host that can serve the `npm run build` output). Point `DATABASE_URL` at a Postgres database so accounts persist.

One journey per signed-in person. Guests can read the calendar; they cannot overwrite anyone else’s preparation.
