# Clear Vision Site Services — Launch Checklist

Everything here is $0 except the domain (~$12/yr). Total time: about 45 minutes.

**What's in this folder**

| File | What it is |
|---|---|
| `index.html` | Homepage |
| `window-washing.html` | Service page |
| `pressure-washing.html` | Service page |
| `solar-panel-cleaning.html` | Service page |
| `ice-dam-removal.html` | Service page |
| `heat-tape-installation.html` | Service page |
| `roof-treatments.html` | Service page |
| `permanent-led-lighting.html` | Service page |
| `thank-you.html` | Form confirmation (set to `noindex`) |
| `assets/site.css` | **All styling for all nine pages** |
| `assets/` | Logo, header mark, favicon |
| `sitemap.xml`, `robots.txt` | Search engine files |

Every page shares `assets/site.css`. Change a color or a font there once and all nine pages update — don't edit styles page by page.

---

## 1. Fill in the placeholders (5 min)

Anything highlighted yellow on the page is a placeholder. It appears on **all nine pages**, so use find-and-replace across the whole folder — most editors (VS Code, Notepad++, Sublime) can replace across a folder in one action.

| Find | Replace with |
|---|---|
| `(406) 000-0000` | the real phone number |
| `+14060000000` | same number, digits only, e.g. `+14065551234` |
| `hello@clearvisionsiteservices.com` | the real email |
| `+1-406-000-0000` | same number, in the JSON-LD blocks |
| `https://clearvisionsiteservices.com` | the real domain, if it differs (also in `sitemap.xml` and `robots.txt`) |

Then remove the highlighter: delete this one line from the bottom of `assets/site.css` and it disappears everywhere at once.

```css
.tbd{background:rgba(255,206,0,.22);border-bottom:2px dotted #C79A00;padding:0 3px;border-radius:3px}
```

**Also confirm before launch:** every service description, method step, FAQ answer and the service-area town list. I wrote those from how these trades generally work in this climate — they need to match what Clear Vision actually does. In particular:

- Only leave "Fully insured" and "certificate of insurance available" up if both are true today.
- The heat tape page says you install **self-regulating** cable and coordinate the electrical with a licensed electrician. If that's not the plan, that page needs changing — it's a specific promise.
- The solar page says you don't walk on panels, pressure wash them, or apply coatings. Same deal.

---

## 2. Wire up the form (10 min)

1. Go to **formspree.io** → sign up free.
2. Create a new form. Name it "Clear Vision Quotes."
3. Copy the endpoint — looks like `https://formspree.io/f/abcdwxyz`.
4. Find `action="https://formspree.io/f/xbgjnzyq"` and replace it. **It appears on all eight public pages** — find-and-replace across the folder.
5. In Formspree settings, set the notification email.

Each service page's form includes a hidden `page` field, so your inbox tells you which page the lead came from. That's your free attribution — after a month you'll know whether ice dam or window washing is actually pulling.

**Free tier: 50 submissions/month.** If it fills up, paid is $10/mo, or switch to Google Apps Script → Sheets (unlimited, free, ~20 min of setup — ask and I'll write it).

Every form has a hidden honeypot field (`_gotcha`) that catches most bots.

---

## 3. Put it online (15 min)

1. Buy the domain — Cloudflare Registrar sells at cost, about $10–12/yr. Namecheap and Porkbun are fine too.
2. **Cloudflare Pages** → Create a project → **Upload assets**.
3. Drag the whole `clear-vision-site` folder in. Deploy.
4. Custom domains → add your domain. Cloudflare handles DNS and SSL automatically.

Free forever, unlimited bandwidth, fast — and speed counts toward local rankings.

---

## 4. The SEO work that actually moves the needle

The website is maybe 20% of local ranking. In order:

1. **Google Business Profile** — free, and the highest-leverage item on this list by a wide margin. Primary category "Window Cleaning Service," secondaries for Pressure Washing Service, Gutter Cleaning Service and Roofing Contractor. Set the service-area radius and link the website. Most "near me" clicks go to the map pack, not the blue links.
2. **Add each service as a GBP "Service"** with the same names as the seven pages, and link each one to its page. This is the connection most competitors never make.
3. **Post photos weekly.** Before/afters from real jobs.
4. **Ask every customer for a review** by text, the day the job is done. Ten real reviews beats any amount of on-page work.
5. **Google Search Console** — add the domain, submit `sitemap.xml`.
6. **Bing Places** — same info, 10 minutes.

I deliberately left review counts, star ratings, and "homes served" figures off every page. Once real reviews exist we can add them with `AggregateRating` schema so stars show in search results — but posting numbers before they're real is exactly what the FTC's endorsement guidelines cover, and it's not worth the exposure on a new LLC.

**What's already built in:** every service page carries `Service`, `BreadcrumbList` and `FAQPage` structured data, and the homepage carries `HomeAndConstructionBusiness` and `FAQPage`. The FAQ markup is what can win you the expandable Q&A boxes in search results.

---

## 5. Meta ads — what to point them at

**Send each ad to its service page, not the homepage.** That's the main reason these pages exist. Someone who clicks an ice dam ad and lands on a page about ice dams converts far better than one who lands on a general homepage and has to hunt.

Install the Meta pixel before `</body>` on every page, and fire the conversion on `thank-you.html` — that page is `noindex`, so it works cleanly as a conversion trigger without competing in search.

Seasonal angles, matched to the pages:

| Month | Ad angle | Landing page |
|---|---|---|
| Sept–Oct | Heat tape before the freeze | `heat-tape-installation.html` |
| Sept–Oct | Permanent lighting, no ladder in December | `permanent-led-lighting.html` |
| Oct–Nov | Gutters before winter | `roof-treatments.html` |
| Dec–Mar | Ice dam emergency | `ice-dam-removal.html` |
| Apr–Jun | Spring window wash | `window-washing.html` |
| Jun–Aug | House and deck wash | `pressure-washing.html` |
| Sept | Post-smoke solar clean | `solar-panel-cleaning.html` |

**The heat tape / ice dam pairing is the most valuable thing on the site.** Ice dam ads run in January when people are desperate and price-insensitive, and the ice dam page cross-links to heat tape as the prevention. Then in September you retarget everyone who read the ice dam page with a heat tape ad. That's a full seasonal loop out of two pages.

---

## What's next

1. A **before/after photo gallery** — the single biggest missing trust element, and it can't be built until there are real job photos.
2. **Reviews on the page** once you have them, with schema.
3. **Town pages** (`window-washing-belgrade.html` and so on) if you want to compete in Belgrade and Livingston specifically. Worth doing only after the main pages rank — thin duplicated town pages hurt more than they help.
