# MediScope Web

Landing page pro MediScope — evidence-based physiotherapy platforma.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (MediScope brand colors)
- **TypeScript**
- **Vercel** (hosting)

## Lokální vývoj

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deployment na Vercel

1. Nahraj projekt na GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TVOJE_USERNAME/mediscope-web.git
git push -u origin main
```

2. Na [vercel.com](https://vercel.com) → **Add New Project** → vyber repozitář → **Deploy**

3. (Volitelně) přidej doménu `mediscope.cz` v Settings → Domains

Každý `git push` = automatický redeploy za ~30 sekund.

## Struktura

```
mediscope-web/
├── app/
│   ├── layout.tsx      ← metadata, fonty
│   ├── page.tsx        ← hlavní stránka
│   └── globals.css     ← base styles, Google Fonts
├── components/
│   ├── Navbar.tsx      ← sticky navigace
│   ├── Hero.tsx        ← hero sekce
│   ├── About.tsx       ← o nás / tým
│   ├── WhatWeDo.tsx    ← co děláme
│   ├── Tools.tsx       ← klinické nástroje (placeholder)
│   └── Footer.tsx      ← footer + kontakt
└── public/             ← statické soubory (logo atd.)
```

## Brand

| Token | Hodnota |
|-------|---------|
| Navy | `#0A1628` |
| Teal | `#00B5CC` |
| White | `#FFFFFF` |
| Gray light | `#E8ECEF` |
| Red | `#E53935` |
| Font heading | Syne Bold |
| Font body | DM Sans |

## Co přidat dál

- [ ] Funkční dotazníky (VISA-A, painDETECT, NDI, KOOS...)
- [ ] Podcast embed sekce
- [ ] Blog / Journal Club archiv
- [ ] Vlastní logo v `public/logo.svg`
