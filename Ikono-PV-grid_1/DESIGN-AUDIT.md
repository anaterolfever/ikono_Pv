# Full Design Review: IKONO Madrid PV

**Page:** [https://anaterolfever.github.io/ikono_Pv/](https://anaterolfever.github.io/ikono_Pv/)  
**Audit date:** February 25, 2026  
**Framework:** Product design audit (aligned with AI Product Design Toolkit principles: UX, accessibility, visual design, content, technical, conversion)

---

## 1. Executive Summary

The IKONO Madrid product page is a single-page experience listing with gallery, description, ticket selector, reviews, location, and related experiences. The structure and content match Fever’s event-page pattern. This audit evaluates design, UX, accessibility, content, technical implementation, and conversion, with prioritized recommendations.

| Area | Verdict | Notes |
|------|---------|--------|
| Visual design | Good | Clear hierarchy, consistent spacing, Fever branding |
| UX & information architecture | Good | Logical flow; ticket widget placement works |
| Accessibility | Needs work | Focus, semantics, contrast, keyboard, images |
| Content & copy | Good | Clear value prop; minor consistency issues |
| Technical | Needs work | Missing assets, SEO, performance |
| Responsive | Good | Breakpoints present; mobile ticket order considered |
| Conversion | Good | Clear CTAs; pricing not visible in selector |

---

## 2. Visual Design

### Strengths
- **Typography:** Inter + Montserrat used consistently. Section titles use Montserrat (600) for clear hierarchy; body uses Inter. CSS variables in `.pd-description` support future theming.
- **Color:** Primary `#e91e63` (Fever pink) used for CTAs, links, and location; neutral grays (`#1a1a1a`, `#333`, `#666`) for text. Star rating `#f5a623` is consistent.
- **Spacing:** Predictable vertical rhythm (sections 32–48px, borders between blocks). Grid gap 48px between main content and sidebar.
- **Components:** Cards (reviews, location, experience cards) share border `#e8e8e8`, radius 12px, and light shadows. Ticket widget has clear separation and sticky behavior.

### Issues
- **Rating duplication:** Rating (★ 4.2 (492)) appears three times near the title (top row, under title, in widget). Consider a single canonical placement to reduce noise.
- **Inline style:** One instance in HTML: `style="margin-top: 1rem;"` on a list in Descripción. Should be moved to CSS for consistency.
- **Footer:** Four columns on desktop; on small viewports it becomes 2 then 1 column. Layout is fine but could use a bit more breathing room on very small screens.

### Recommendation
- Remove or consolidate duplicate rating blocks; keep one next to H1 and one in the sticky widget.
- Replace inline `style` with a utility class (e.g. `.pd-section__list--spaced`) in `styles.css`.

---

## 3. UX & Information Architecture

### Strengths
- **Flow:** Gallery → Title + rating → Description (intro, qué disfrutar, salas, descripción, información) → Reviews → Contact → Location. Order supports “see → understand → trust → act.”
- **Ticket widget:** Sticky on desktop, moved to top on smaller viewports (`order: -1`) so users see it without scrolling. “Selecciona fecha y sesión” + ticket types + “Tickets” CTA is clear.
- **Scannability:** Section titles (H2), bullet lists with icons/emojis, and info blocks with SVG icons make the page easy to scan.
- **Trust:** Rating, review count, and review cards support credibility. “Ver todas las opiniones” links out to full reviews.

### Issues
- **Ticket selector is non-functional:** “Seleccionar” and “Tickets” do not open a date/session picker or checkout. For a PV/prototype this may be intentional, but it should be documented or wired to a clear “coming soon” or mock flow.
- **No visible pricing:** Ticket types don’t show price. For conversion, “Desde X €” or price per type is expected on Fever-style pages.
- **Gallery:** No swipe or keyboard (e.g. arrow keys) support; only buttons and dots. Auto-advance every 5s is good; consider pausing on hover/focus for accessibility.
- **Similar/featured experiences:** Horizontal scroll is good; no “show more” or pagination. Acceptable for PV; for production, consider loading more or linking to a listing page.

### Recommendation
- Add placeholder pricing (e.g. “Desde 15,00 €”) to each ticket type and ensure the main CTA leads to a clear next step (even if mock).
- Document in README or specs that ticket selection is UI-only until backend is connected.
- Add keyboard support to gallery (Arrow Left/Right) and optional pause on hover/focus.

---

## 4. Accessibility (A11y)

### Critical / High
- **Focus visibility:** No custom `:focus-visible` styles. Default focus may be low contrast (especially on dark header). Add visible focus rings (e.g. 2px outline in brand color) for all interactive elements.
- **Gallery controls:** Arrow buttons use `onclick` and Unicode `&#8249;` / `&#8250;`. They have no `aria-label` (e.g. “Anterior” / “Siguiente”). Dots have no `aria-label` or `role="tablist"` / `aria-selected`. Screen reader users won’t get clear context or state.
- **Images:** Many `<img>` rely on generic `alt` (e.g. “IKONO Madrid”). Gallery images should have distinct, descriptive alt text (e.g. “Sala de bolas en IKONO Madrid”). Experience cards and space images need descriptive alt text; some are okay, but consistency should be checked.
- **Headings:** Two `<h2>` inside “Algunas de las salas” (experience grid) — each card uses `<h2 class="experience-grid__title">`. Only one H1 is correct, but multiple H2s in a grid can confuse outline. Consider `<h3>` for card titles so the outline is H1 → H2 “Algunas de las salas” → H3 per sala.
- **Links:** Several `href="#"` (header logo, nav, footer, categories). For PV they’re acceptable but should be replaced with real URLs or `role="button"` + `tabindex="0"` and keyboard handler if they’re not navigational.
- **Contrast:** Body text `#333` on `#fff` and `#444` on `#fafafa` (review cards) should meet WCAG AA. Star “half” state uses `opacity: 0.5` on `#f5a623`; verify contrast. Gray text (e.g. `#888`, `#777`) on white should be checked (aim for 4.5:1 for normal text).

### Medium
- **Language:** `<html lang="es">` is set; good for screen readers.
- **Form/buttons:** “Seleccionar” and “Tickets” are `<button>`; good. Add `aria-label` where the purpose isn’t clear from context (e.g. “Seleccionar entrada general”).
- **Map iframe:** Has `title` missing; add `title="Mapa: IKONO Madrid, Calle de Sánchez Bustillo 7"` (or via iframe `title` attribute if supported) for context.

### Recommendation
- Implement focus styles site-wide; ensure no `outline: none` without a visible replacement.
- Add `aria-label` to gallery prev/next and `role="tablist"`, `role="tab"`, `aria-selected` to dots; optional `aria-live` for current slide.
- Use unique, descriptive `alt` for all content images; use `<h3>` for experience grid card titles.
- Run axe or WAVE and fix reported issues; re-check contrast for all gray text and star states.

---

## 5. Content & Copy

### Strengths
- **Value proposition:** “Te diremos lo que NO es IKONO” and “Capturas el momento para inmortalizarlo” are clear and on-brand.
- **Practical info:** “Qué vas a disfrutar” and “Información” (fecha, duración, lugar, edad, accesibilidad, FAQs) answer user questions. Accessibility note (no carros/sillas de ruedas) is explicit.
- **Social proof:** Rating 4.2 (492) and review snippets are used well. Google review callout (4.6/5, 10.7k) is present; clarify if this is external vs in-app rating to avoid confusion.
- **CTAs:** “Tickets,” “Ver todas las opiniones,” “Contáctanos aquí,” “Tarjeta regalo” are clear.

### Issues
- **Rating inconsistency:** Page shows 4.2 (492) and also “4.6/5 … 10.7 mil Reseñas en Google.” Two different metrics (in-app vs Google) can confuse; add a short label (e.g. “Valoración en Fever” vs “En Google”).
- **Placeholder map:** Embed URL looks simplified (`1d3037.6!2d-3.6985!3d40.4128`, `1s0xd422f4b4b4b4b%3A0x0`). Verify it points to the real venue and loads correctly.
- **Missing assets in repo:** `assets/images/gallery/` (gallery-1–5), `space-*.png`, `similar-*`, `featured-*`, `metro-l1.png` are referenced but not present in the project. The live site may serve them from elsewhere; document or add placeholders so the repo is self-contained.

### Recommendation
- Add one line of copy to distinguish “Valoración en Fever” and “En Google.”
- Replace or document the map embed with the correct venue URL.
- Add a note in README or an `assets/images/README.md` listing required images and recommended dimensions.

---

## 6. Technical & Performance

### Strengths
- **Markup:** Semantic use of `<header>`, `<main>`, `<aside>`, `<section>`, `<footer>`, `<figure>`/`<figcaption>`.
- **CSS:** Reset, variables in `.pd-description`, no unused heavy frameworks. Layout uses Grid and Flexbox.
- **JS:** Gallery logic is minimal and clear; no heavy dependencies.

### Issues
- **Missing assets:** As above; broken images will hurt LCP and perceived quality. At minimum, add placeholder images or document expected files.
- **SEO:** `<title>` is good (“Entradas IKONO Madrid | Fever”). Missing: `<meta name="description">`, Open Graph tags (`og:title`, `og:description`, `og:image`), and optional `og:url`. Structured data (e.g. Event or LocalBusiness) would help search and rich results.
- **Performance:** No `loading="lazy"` on below-the-fold images (e.g. experience cards, space images). Gallery images load eagerly; consider lazy-loading non-initial slides.
- **Gallery auto-advance:** `setInterval` runs even when the tab is in background. Consider `Page Visibility API` to pause when tab is hidden.
- **Fonts:** Two font families (Inter, Montserrat) from Google Fonts; preconnect is present. Acceptable; consider self-hosting or font-display if optimizing further.

### Recommendation
- Add `meta description`, OG tags, and optional JSON-LD for the experience/venue.
- Add `loading="lazy"` to images below the fold; optionally lazy-load gallery images after the first.
- Pause gallery timer when `document.visibilityState === 'hidden'`.
- Ensure all referenced images exist in the repo or are documented with expected paths and sizes.

---

## 7. Responsive Design

### Strengths
- **Breakpoints:** 1024px, 768px, 480px used for layout and typography. Content grid becomes single column at 1024px; ticket widget moves to top; thumbs hidden.
- **Gallery:** Height reduces from 520px to 280px at 768px; avoids oversized hero on mobile.
- **Touch:** Horizontal scroll for experience cards uses `-webkit-overflow-scrolling: touch` and `scroll-snap-type: x mandatory`.
- **Tap targets:** Buttons and links are generally large enough; ticket rows and cards are full-width tap areas on small screens.

### Issues
- **Header:** No hamburger or collapsed nav at 768px; “Descubre | es | Madrid” may wrap or squeeze. Test on 320–400px width.
- **Sticky widget:** On mobile, widget is static; “Tickets” can be far below the fold after long content. Consider a sticky bottom bar with “Ver entradas” on mobile (optional for PV).
- **Table:** No wide tables; lists and grids adapt. No issues found.

### Recommendation
- Test header at 360px and 390px; add a simple mobile nav (e.g. hamburger) if links wrap or overlap.
- Consider a fixed or sticky “Ver entradas” bar on mobile for higher conversion.

---

## 8. Conversion & Business

### Strengths
- **Primary CTA:** “Tickets” is prominent (full-width, brand color) and repeated in the sticky widget.
- **Trust:** Rating, reviews, and practical info support the decision. “Tarjeta regalo” and “Bono Cultural” are present.
- **Discovery:** “Experiencias similares” and “Descubre nuestras experiencias destacadas” support cross-sell; category tags support browsing.

### Issues
- **No prices in selector:** Users cannot compare ticket types by price before clicking. Adding “Desde X €” per type (or at least for “Entrada General”) is recommended.
- **CTA outcome:** “Tickets” and “Seleccionar” don’t lead to a date picker or checkout. For a PV, consider a single “Comprar entradas” that links to Fever’s real IKONO page so the flow is testable end-to-end.

### Recommendation
- Show at least one price (e.g. “Desde 15,00 €”) in the ticket widget and, if possible, per ticket type.
- Link main CTA to the real Fever event page (or a clear mock) so the path to purchase is obvious.

---

## 9. Prioritized Recommendations

### P0 – Critical (do first)
1. **Accessibility – focus and gallery:** Add `:focus-visible` styles and ARIA for gallery (buttons + dots). Add keyboard support (arrow keys) for gallery.
2. **Assets:** Add missing images to the repo or document required paths/sizes so the page renders and deploys correctly.
3. **Ticket CTA:** Make “Tickets” (and optionally “Seleccionar”) link to the real Fever event page or a defined mock so the conversion path is clear.

### P1 – High
4. **Accessibility – semantics and images:** Use `<h3>` for experience grid titles; add descriptive `alt` for all content images; add `title` to map iframe.
5. **Content clarity:** Differentiate “Valoración en Fever” vs “En Google” where both ratings appear.
6. **SEO:** Add meta description and Open Graph tags (and optional JSON-LD).
7. **Remove inline style:** Move `style="margin-top: 1rem;"` to CSS.

### P2 – Medium
8. **Rating duplication:** Reduce to one rating block next to H1 and one in the widget.
9. **Pricing in widget:** Show “Desde X €” for at least the main ticket type.
10. **Performance:** Add `loading="lazy"` to below-the-fold images; pause gallery when tab is hidden.
11. **Map:** Verify and fix Google Maps embed URL for the real venue.

### P3 – Nice to have
12. **Mobile:** Add sticky “Ver entradas” bar or ensure first CTA is visible without long scroll.
13. **Gallery:** Pause auto-advance on hover/focus.
14. **Header:** Improve mobile nav (e.g. hamburger) if needed after testing at 320–400px.

---

## 10. Checklist Summary

| Criteria | Status |
|----------|--------|
| Clear value proposition | ✅ |
| Scannable sections & hierarchy | ✅ |
| Primary CTA visible and actionable | ⚠️ Link/behavior |
| Trust (reviews, rating, info) | ✅ |
| Accessibility (focus, ARIA, semantics, alt) | ❌ |
| Responsive layout | ✅ |
| No critical broken assets | ❌ (missing in repo) |
| SEO basics (title, description, OG) | ⚠️ Partial |
| Performance (lazy load, gallery pause) | ⚠️ |
| Price visibility in selector | ❌ |

---

*This audit was conducted against the IKONO PV codebase and the live page. The [Fever AI Product Design Toolkit](https://github.com/Feverup/AI-Product-Design-Toolkit) was referenced conceptually; the toolkit repository was not publicly accessible at the time of review.*
