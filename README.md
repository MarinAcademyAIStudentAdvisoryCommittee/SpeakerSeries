# Marin Academy – AI Student Advisory Committee

Website for the Marin Academy AI Student Advisory Committee and the Spring 2026 AI Speaker Series.

**Live site:** [https://marinacademyaistudentadvisorycommittee.github.io/SpeakerSeries/](https://marinacademyaistudentadvisorycommittee.github.io/SpeakerSeries/)

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | Home page — hero, schedule overview, mission, alumni |
| `speakers.html` | Full speaker bios and Spring 2026 schedule |
| `about.html` | Committee mission, what we do, get involved |

## Assets

```
css/style.css     — All styles (CSS custom properties, responsive)
js/main.js        — Mobile nav toggle, scroll effects
images/           — Speaker photos and posters
```

## Spring 2026 Speaker Series

| Date | Speaker | Topic |
|------|---------|-------|
| Feb 19 | Michael Brand (UC Berkeley) | AI & Environmental Impact |
| Mar 9  | Bella Raja '20 (Oxford/Stanford) | Conflict Minerals & AI Hardware |
| Mar 26 | Lauren Chambers (UC Berkeley) | Social Justice, Tech & Government |
| Apr 23 | Michael Lu '21 (NVIDIA) | Alumni Perspective on AI Careers |
| Apr 30 | Matt Flannery (Branch.co) | Impact Investing & Microlending AI |
| May 15 | Ava Iannuccillo '20 (UCSF) | Human-Centered AI in Education |

## Deploying to GitHub Pages

1. Push to the `main` branch
2. Go to **Settings → Pages** in the GitHub repo
3. Set source to **Deploy from a branch → main → / (root)**
4. Your site will be live at `https://definitelynotdevan.github.io/marin-academy-ai-student-advisory-committee`

## Updating Content

- **Add a speaker:** Edit `speakers.html` — copy an existing `<article class="speaker-card">` block and update the content
- **Update the schedule table:** Edit the `<tbody>` in `index.html`
- **Add photos:** Drop images in `images/` and reference them with `<img src="images/filename.jpg">`
- **Change colors:** All colors are CSS custom properties in `css/style.css` under `:root`

---

*Made by the AI Student Advisory Committee · Marin Academy*
