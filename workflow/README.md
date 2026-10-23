# Workflow screenshots

Screenshots for the "See the workflow" gallery in the Newsletter Engine section of `index.html`.

Nothing in this folder has been committed yet. Do not commit an image until it has been redacted and you have confirmed it.

## Files expected

Export each screenshot as a PNG at 1600 x 1000 px (16:10), under about 400 KB.

| File | Shows |
|---|---|
| `newsletter-engine-01-schedule-and-label.png` | The Thursday routine and the GTM Newsletters label |
| `newsletter-engine-02-signal-map.png` | The signal map |
| `newsletter-engine-03-stress-test-and-review-notes.png` | The stress test and the review notes |
| `newsletter-engine-04-article-draft.png` | The article draft |
| `newsletter-engine-05-four-images.png` | Cover, stat card, framework diagram and quote card |
| `newsletter-engine-06-delivery.png` | The draft pull request, the private review page and the email |

If a file is missing, the page shows a framed "screenshot coming" placeholder and the build stays green.

## Redaction checklist

Tick every item for every image before it is committed.

- [ ] Other people's names and email addresses are removed or blurred.
- [ ] Newsletter sender names are removed or blurred.
- [ ] Newsletter body text is removed or blurred, apart from a headline.
- [ ] My own email address is removed or blurred.
- [ ] The repository name and branch name are removed or blurred.
- [ ] Private review page URLs are removed or blurred.
- [ ] Tokens, keys and account IDs are removed or blurred.
- [ ] Browser tabs, bookmarks and notification banners are cropped out.
- [ ] I have zoomed in at 100% and checked the blur cannot be read or reversed.

## Notes

- Blur by painting over with a solid box, not a light Gaussian blur. Light blur can sometimes be reversed.
- The alt text for each image is in `index.html`. Update it if a screenshot ends up showing something different from the description.
- The images are PNG for now. Converting to WebP would reduce the size further, but the page expects the `.png` file names above.
