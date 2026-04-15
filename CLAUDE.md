@AGENTS.md

# Portfolio Bartka — CLAUDE.md

## 1. Opis projektu

Osobista strona portfolio Bartosza Fornala — frontend developera z Bydgoszczy.
Strona zaprojektowana w stylu magazynu prasowego (editorial design), prezentuje projekty,
umiejętności i formularz kontaktowy. Służy jako wizytówka zawodowa i plac ćwiczeń
z nowoczesnym stackiem webowym.

Repozytorium: https://github.com/fornalbartosz3/moje-portfolio
Deployment: Vercel (projekt `moje-portfolio`, org `team_fxzbUKIgrHEyK1k3ySJmAXqd`)

---

## 2. Stack — technologie z wersjami

| Technologia | Wersja | Rola |
|---|---|---|
| Next.js | 16.2.3 | Framework (App Router) |
| React | 19.2.4 | UI |
| TypeScript | ^5 | Typowanie |
| Tailwind CSS | ^4 | Utility-first CSS |
| Framer Motion | ^12.38.0 | Animacje |
| Resend | ^6.10.0 | Wysyłanie emaili (formularz kontaktowy) |
| next-themes | ^0.4.6 | Obsługa motywów |
| Radix UI | ^1.4.3 | Komponenty dostępności |
| shadcn | ^4.2.0 | Biblioteka komponentów UI |
| clsx + tailwind-merge | ^2 / ^3 | Łączenie klas CSS |
| Jest | ^30.3.0 | Testy jednostkowe |
| Testing Library | ^16 | Testy komponentów React |
| ts-jest | ^29.4.9 | Transpilacja TS w Jest |
| ESLint | ^9 | Linting |
| Node.js | 24 LTS | Runtime (Vercel default) |

---

## 3. Struktura projektu

```
moje-portfolio/
├── app/                        # Next.js App Router
│   ├── page.tsx                # Strona główna (składa sekcje)
│   ├── layout.tsx              # Root layout (Navbar, ThemeProvider)
│   ├── globals.css             # Globalne style, CSS variables
│   ├── favicon.ico
│   ├── projekty/page.tsx       # Podstrona /projekty
│   └── api/contact/route.ts   # API Route — formularz kontaktowy
│
├── components/                 # Komponenty React
│   ├── HeroSection.tsx         # Sekcja hero — imię, CTA, statystyki
│   ├── AboutSection.tsx        # Sekcja "O mnie"
│   ├── SkillsSection.tsx       # Technologie w siatce kolumn
│   ├── ProjectsSection.tsx     # Projekty z filtrowaniem po tagach
│   ├── ContactSection.tsx      # Formularz kontaktowy
│   ├── Navbar.tsx              # Nawigacja (desktop linki + mobile hamburger)
│   ├── Footer.tsx              # Stopka
│   ├── TickerBar.tsx           # Pasek przewijający technologie
│   ├── SkipLink.tsx            # Dostępność — skip to main content
│   ├── ThemeProvider.tsx       # next-themes provider
│   └── ui/                     # Komponenty bazowe (shadcn)
│       ├── button.tsx
│       ├── badge.tsx
│       └── card.tsx
│
├── lib/                        # Logika, dane, porty
│   ├── data/projects.ts        # Dane projektów (tablica Project[])
│   ├── types.ts                # Typy TypeScript (Project, itp.)
│   ├── utils.ts                # Narzędzia pomocnicze (cn, itp.)
│   ├── contact.test.ts         # Testy dla logiki email
│   ├── ports/
│   │   └── email.port.ts       # Interfejs EmailPort (Hexagonal)
│   └── adapters/
│       ├── resend.adapter.ts   # Implementacja produkcyjna (Resend)
│       └── fake-email.adapter.ts # Implementacja testowa (loguje)
│
├── __tests__/                  # Testy komponentów
│   ├── HeroSection.test.tsx
│   └── ProjectsSection.test.tsx
│
├── __mocks__/
│   └── framer-motion.tsx       # Mock framer-motion dla Jest
│
├── public/                     # Statyczne zasoby
├── jest.config.ts              # Konfiguracja Jest (next/jest)
├── jest.setup.ts               # Setup Testing Library
├── next.config.ts              # Konfiguracja Next.js
├── tsconfig.json               # TypeScript (alias @/* → ./*)
└── components.json             # Konfiguracja shadcn
```

---

## 4. Konwencje kodowania

### Pliki i komponenty
- Komponenty React: `PascalCase.tsx` (np. `HeroSection.tsx`)
- Pliki logiki/narzędzi: `kebab-case.ts` (np. `email.port.ts`, `resend.adapter.ts`)
- Testy komponentów: `__tests__/NazwaKomponentu.test.tsx`
- Testy logiki: obok pliku lub w `lib/` (np. `lib/contact.test.ts`)

### Styl kodu
- Tailwind CSS do klas pomocniczych (breakpointy, display, visibility)
- Inline `style={}` do wartości designowych (kolory, fonty, spacing z design systemu)
- Nie mieszać inline `display` z klasami Tailwind `hidden/flex` — inline zawsze wygrywa
- `clsx` + `tailwind-merge` przez helper `cn()` z `lib/utils.ts`

### Commity
Format: `typ: opis po polsku lub angielsku`

| Typ | Kiedy |
|---|---|
| `feat:` | Nowa funkcjonalność |
| `fix:` | Naprawa błędu |
| `refactor:` | Zmiana kodu bez zmiany zachowania |
| `style:` | Zmiany CSS/UI bez logiki |
| `test:` | Dodanie lub zmiana testów |
| `chore:` | Konfiguracja, zależności |

---

## 5. Architektura

### Hexagonal Architecture — email

Formularz kontaktowy używa wzorca portów i adapterów:

```
app/api/contact/route.ts
    └── EmailPort (interfejs)
            ├── ResendEmailAdapter   — produkcja (Resend API)
            └── FakeEmailAdapter    — testy (loguje, zapisuje w pamięci)
```

- **Port** (`lib/ports/email.port.ts`): definiuje kontrakt `sendContactEmail(payload)`
- **Adapter produkcyjny** (`lib/adapters/resend.adapter.ts`): wysyła przez Resend
- **Adapter testowy** (`lib/adapters/fake-email.adapter.ts`): przechowuje wysłane wiadomości w `sentEmails[]`
- **Route** (`app/api/contact/route.ts`): zna tylko `EmailPort`, dobiera adapter przez fabrykę

Dodanie nowego providera emaili = nowy plik w `lib/adapters/`, bez zmiany route.

### Komponenty
- Sekcje strony: `components/NazwaSection.tsx`
- Komponenty bazowe shadcn: `components/ui/`
- Dane statyczne: `lib/data/` (nie w komponentach)

---

## 6. Testy

### Uruchamianie

```bash
npm test                  # Jeden przebieg
npm run test:watch        # Tryb watch (interaktywny)
npx jest lib/contact.test.ts   # Konkretny plik
```

### Konfiguracja
- `jest.config.ts` — używa `next/jest` z `testEnvironment: "jsdom"`
- `jest.setup.ts` — importuje `@testing-library/jest-dom`
- `__mocks__/framer-motion.tsx` — mock Framer Motion (nie działa w Node.js)
- Testy ignorują `node_modules/` i `.claude/`

### Co testujemy
- `lib/contact.test.ts` — `FakeEmailAdapter`: kontrakt EmailPort, akumulacja wiadomości
- `__tests__/HeroSection.test.tsx` — renderowanie sekcji hero
- `__tests__/ProjectsSection.test.tsx` — renderowanie projektów, filtrowanie

---

## 7. Deployment

### Vercel
Projekt wdrożony automatycznie przy push na `main`.

```bash
# Preview deploy
vercel

# Production deploy
vercel --prod
```

### Zmienne środowiskowe

| Zmienna | Wymagana | Opis |
|---|---|---|
| `RESEND_API_KEY` | TAK | Klucz API Resend do wysyłania emaili |
| `CONTACT_EMAIL` | NIE | Email docelowy formularza (fallback: `twoj@email.com`) |

Lokalnie: plik `.env.local` (w `.gitignore`).
Na Vercel: ustawić w Dashboard → Settings → Environment Variables.

---

## 8. MCP — Vercel MCP

Vercel MCP Server skonfigurowany w `.claude/settings.local.json`.
Umożliwia Claude bezpośrednie operacje na projekcie Vercel:

- `list_deployments` — lista wdrożeń
- `get_deployment` — szczegóły konkretnego wdrożenia
- `get_runtime_logs` — logi produkcyjne
- `get_deployment_build_logs` — logi budowania
- `get_project` — informacje o projekcie

Projekt: `prj_AxOCklvLXC4ANxPFlqvoBZ29kKiD`

---

## 9. Czego się nauczyłem

Tematy przerobione podczas budowy tego portfolio:

- **Next.js App Router** — routing, layout, Server Components vs Client Components
- **API Routes** — `app/api/contact/route.ts`, `NextRequest`/`NextResponse`
- **Hexagonal Architecture** — porty, adaptery, separacja logiki od infrastruktury
- **Tailwind CSS v4** — utility classes, breakpointy (`sm`, `md`, `lg`), konflikty z inline styles
- **Responsywność** — hamburger menu, media queries, `clamp()` dla typografii
- **Framer Motion** — animacje wejścia (`initial`/`animate`), `whileInView`, `whileHover`
- **Resend** — wysyłanie emaili z Next.js, lazy initialization, obsługa błędów
- **Jest + Testing Library** — testy jednostkowe, mocki, `FakeEmailAdapter` jako test double
- **Git workflow** — branche, rename, delete, push, stash, merge przez PR
- **Vercel MCP** — Claude jako agent operacyjny na projekcie Vercel
- **Dostępność (a11y)** — `aria-label`, `aria-expanded`, `SkipLink`, semantyczny HTML

---

## 10. Następne kroki

Planowane rozszerzenia portfolio:

- [ ] Sekcja **Experience** — historia zatrudnienia / nauki w timeline
- [ ] **Dark mode** — przełącznik motywu (next-themes już zainstalowane)
- [ ] **Strona projektu** — szczegółowy widok każdego projektu (`/projekty/[slug]`)
- [ ] **Blog** — MDX, artykuły techniczne
- [ ] **Animacje** — bardziej rozbudowane przejścia między sekcjami
- [ ] **i18n** — wersja angielska strony
- [ ] **E2E testy** — Playwright, testowanie formularza i nawigacji
- [ ] **CV do pobrania** — PDF generowany lub statyczny w `/public`
- [ ] **Analytics** — `@vercel/analytics` dla ruchu
- [ ] **Error monitoring** — Sentry lub Vercel drains
