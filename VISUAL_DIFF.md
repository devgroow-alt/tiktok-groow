# Visual Diff: tiktok.groow.sk clone

## Section-by-section assessment

| # | Section | Fidelity | Notes |
|---|---------|----------|-------|
| 1 | Hero | ✅ | Large heading TikTok/Ads/na Slovensku, CTA button, correct colors |
| 2 | Why TikTok | ✅ | Verbatim copy, 3 stat cards with images, callout text |
| 3 | CTA banner | ✅ | Green bg, purple gradient button, correct copy |
| 4 | When TikTok | ✅ | Checkmark list, bold keywords, verbatim copy including "albeo" typo |
| 5 | Our Process | ✅ | 4 numbered steps, large display numbers, correct titles/descriptions |
| 6 | About Us | ✅ | GROOW icon, heading, body text verbatim |
| 7 | Blog articles | ✅ | 4 thumbnail cards, correct groow.sk URLs, target=_blank |
| 8 | Client logos | ✅ | 12 logos, black bg, grid layout |
| 9 | Team | ✅ | 4 circular photos, correct names/roles |
| 10 | CTA | ✅ | Green bg, "ZAREGISTUJTE SA" typo preserved |
| 11 | FAQ | ✅ | 4 expandable details/summary, +/- toggle |
| 12 | Contact form | ✅ | 4 fields, honeypot, gradient submit button, info section |
| 13 | Footer | ✅ | 4 social SVG icons, copyright, privacy link |

## Overall assessment
High-fidelity clone with all 13 sections implemented. All text verbatim from spec, including intentional typos.

## Known deviations
1. Font: Next.js 16 maps "Big Shoulders Display" to "Big Shoulders" — visually very similar but may differ slightly in letter spacing
2. Original Leadpages has additional CSS animations/transitions not replicated (parallax, fade-in)
3. Exact pixel spacing may differ from Leadpages original due to Tailwind utility classes vs. custom CSS
4. Some images (stat-1, article-2, logo-03) were re-downloaded at different sizes after initial failures

## Unfixable items
1. Leadpages JavaScript interactions (form submission to LP backend) — by design, form uses preventDefault()
2. Exact Leadpages grid system CSS — replaced with Tailwind which produces equivalent visual result
