# Refuge — Faith-Based Somatic Healing Course

A landing page and thank-you page for the Refuge course by [Known & Loved Coaching](https://www.knownlovedcoaching.com).

## Pages

| File | URL | Purpose |
|------|-----|---------|
| `index.html` | `refuge.knownlovedcoaching.com` | Main landing page |
| `thank-you.html` | `refuge.knownlovedcoaching.com/thank-you` | Post-purchase confirmation page |

## Tech Stack

- Plain HTML, CSS, and JavaScript — no framework, no build step
- Hosted on [Vercel](https://vercel.com)
- Domain managed via GoDaddy (subdomain of knownlovedcoaching.com)
- Payments via [Stripe](https://stripe.com)
- Community hosted on [Skool](https://www.skool.com/known-and-loved-coaching-4236/about)

## Tracking

- Google Ads tag (`AW-18147106927`) is loaded on both pages
- Conversion event fires on the thank-you page when a purchase is confirmed
- Conversion tag also fires on Stripe button clicks from the landing page

## Deployment

This repo is connected to Vercel. Any push to the `main` branch triggers an automatic redeployment — changes are live within 60 seconds.

## DNS Setup

The subdomain `refuge.knownlovedcoaching.com` points to Vercel via a CNAME record in GoDaddy:

| Type | Name | Value |
|------|------|-------|
| CNAME | refuge | cname.vercel-dns.com |

## Contact

Kate — Known & Loved Coaching
- Website: [knownlovedcoaching.com](https://www.knownlovedcoaching.com)
- Email: kate@knownlovedcoaching.com
- Phone: 941-412-7030
