# Newsletter Engine workflow screenshots

This folder holds the six screenshots shown in the "See the workflow" gallery
on the site. Until a file is added, the gallery shows a "screenshot coming"
placeholder in its place — the page stays functional either way.

## Expected files

Drop files in here with these exact names (PNG, roughly 1600x1000px or any
consistent 16:10 ratio works best with the gallery's framing):

| File | Step | What it should show |
|---|---|---|
| `newsletter-engine-01-schedule-and-label.png` | 1 — schedule and collect | The Thursday 8:35am IST routine trigger, and the Gmail "GTM Newsletters" label view |
| `newsletter-engine-02-signal-map.png` | 2 — find the signal | The signal map: recurring themes, the underrated idea, the disagreement, the three candidate angles and the chosen one |
| `newsletter-engine-03-stress-test-and-review-notes.png` | 3 — stress-test and review notes | The angle being argued against, plus the review notes (unverified numbers, weakest paragraph, alternative titles, assumptions) |
| `newsletter-engine-04-article-draft.png` | 4 — the article draft | The drafted article, with credited ideas and sourced numbers visible |
| `newsletter-engine-05-four-images.png` | 5 — four images | The four generated images: cover, stat card, framework diagram, quote card |
| `newsletter-engine-06-delivery.png` | 6 — delivery | The draft pull request, the private review page, and the email notification |

## Redaction checklist — do this before committing any image

Do not commit a screenshot until every item below is true for that image:

- [ ] No other person's name or email address is visible
- [ ] No newsletter sender name, subject line, or body text beyond a single
      headline/theme is visible (credit the idea, not the source's inbox)
- [ ] Your own email address (`contact@markoholics.com` or any other) is not
      visible anywhere in the screenshot
- [ ] The GitHub repo name and branch name are not visible in any URL,
      terminal prompt, window title, or tab
- [ ] The private review page URL is not visible
- [ ] No API tokens, keys, account IDs, or auth headers are visible in any
      terminal, browser devtools, or config panel shown
- [ ] If the screenshot shows a browser address bar or terminal prompt with
      a path, confirm it doesn't leak anything above

If you're not sure about a frame, blur or crop it out rather than guess.
Claude will not fabricate or pre-fill these images — they need to come from
you, confirmed redacted, before going in.
