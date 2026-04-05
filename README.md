# PRESEMBLE — Pre-Order Website

Raw to roughcut. Skip the search tax.

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

## Deployment to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel will auto-deploy on every push to your Git repo.

## Configuration

Update `.env.local` with your actual Stripe keys:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
```

## Pages

- `/` — Homepage (manifesto + use cases)
- `/documentary` — Documentary/Investigative workflow
- `/corporate` — Corporate Event Videography workflow
- `/wedding` — Wedding & Events workflow
- `/reserve` — $79 Early Access (Stripe checkout)
- `/enterprise` — Enterprise Consultation (contact form)
- `/success` — Payment confirmation

## TODO

- [ ] Wire up enterprise contact form to send emails (use SendGrid, Mailgun, etc.)
- [ ] Add actual Stripe keys to production
- [ ] Update presemble.ai domain to point to Vercel deployment
- [ ] Add more demo videos for documentary and corporate pages
