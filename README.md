# Bridging the A-I-R — btair.eu

Web platformy evropského projektu **Bridging the A-I-R** (Creative Europe, 2026–2030). Postaveno na **Eleventy** (static site generator) s **Decap CMS** pro editaci obsahu bez kódu.

## Jak to funguje

- **Zdrojové texty** jsou v `src/content/` (Markdown) a `src/_data/` (JSON)
- **Eleventy** je vezme a vyrobí z nich hotové HTML do `_site/`
- **GitHub Actions** při každém pushi do `main` automaticky zbuilduje a nasadí na GitHub Pages
- **Decap CMS** (dostupné na `/admin/`) umožňuje editovat obsah přes webové rozhraní bez znalosti kódu

## Struktura

```
btair-eu/
├── src/
│   ├── index.njk              # Hlavní šablona webu
│   ├── style.css              # CSS (zachováno z původního projektu)
│   ├── assets/                # Loga, fonty, pozadí
│   ├── _data/
│   │   ├── site.json          # Globální data (URL, kontakty)
│   │   └── sections.json      # Texty jednotlivých sekcí
│   ├── _layouts/base.njk      # Základní HTML obálka
│   ├── _includes/             # Dílčí šablony
│   └── content/
│       ├── signpost/          # 5 rozcestníkových karet
│       ├── partners/          # 6 partnerů
│       ├── pilots/            # Pilotní rezidence
│       ├── events/            # Události (Events & News)
│       ├── research/          # Výzkumné dokumenty
│       └── reports/           # Artist/Host/Mentor reports
├── admin/
│   ├── index.html             # Decap CMS entry point
│   └── config.yml             # Co může CMS editovat
├── .github/workflows/
│   └── deploy.yml             # GitHub Actions (automatický build)
├── .eleventy.js               # Eleventy config
└── package.json
```

## Lokální vývoj (pro programátora)

```bash
npm install          # Jednorázově — nainstaluje Eleventy
npm start            # Dev server s hot reload na http://localhost:8080
npm run build        # Jednorázový build do _site/
```

## Editace obsahu (pro netechnický tým)

1. Jděte na `https://btair.eu/admin/`
2. Přihlaste se (Netlify Identity)
3. Vyberte sekci, co chcete upravit (např. **📅 Events & News**)
4. Klikněte na existující položku nebo **+ New** pro novou
5. Vyplňte formulář
6. Klikněte **Publish**
7. Za ~1 minutu je změna živě na `btair.eu`

## Nasazení (jednorázově)

### 1. GitHub repository
Nahrajte celou složku do GitHubu (`main` branch).

### 2. GitHub Pages
Settings → Pages → Source: **GitHub Actions**

### 3. Netlify Identity (pro autentizaci do CMS)
1. Založte Netlify účet na https://netlify.com
2. Propojte stejný GitHub repository (jako "Mirror")
3. Netlify → Site settings → Identity → **Enable Identity**
4. Registration preferences: **Invite only**
5. External providers: zapněte GitHub (volitelně)
6. Services → Git Gateway → **Enable Git Gateway**
7. Invite users: pošlete pozvánky pro Ondřej, Magdalenu, Janka

### 4. Custom doména btair.eu
1. GitHub → Settings → Pages → Custom domain: `btair.eu`
2. V Forpsi admin panelu: nastavit A záznamy na GitHub Pages IP:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
3. CNAME: `www` → `<user>.github.io`
4. Počkat 1-24h na propagaci DNS

## Audit a status (29. 10. 2026)

Web byl vybudován z Excelu `Texty_web.xlsx` (sloupec O — ADRIS verze textů) + odpovídající poznámky. Klíčové rozhodnutí:
- Annual Report smazán (doporučení Janka)
- Pilotní rezidence Y1 opraveny na CZ + ES podle Annexu 1
- Strategic Document označen jako interní, neveřejný
- Platformy .sk a .hu označeny jako "In preparation"
- Časová osa počítá automaticky z data (aktuálně Month 9 of 48)
- 4 historické události vymazány, přidána ukázková "Open Call Launch" podle ADRIS doporučení
