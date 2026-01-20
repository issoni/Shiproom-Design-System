# Shiproom Design System - Accessibility Checklist

**WCAG 2.1 Level AA Compliance**

This checklist ensures all Shiproom components meet accessibility standards. Use this for every new component, feature, or design iteration.

---

## 1. Color & Contrast

### Text Contrast (WCAG 1.4.3)

- [ ] **Normal text** (< 18px): Minimum 4.5:1 contrast ratio
  - Dark mode: `#E5E5E5` on `#0D0D0D` = 14.5:1 ✅
  - Light mode: `#1A1A1A` on `#FAFAFA` = 14.8:1 ✅

- [ ] **Large text** (≥ 18px or ≥ 14px bold): Minimum 3:1 contrast ratio
  - All headings meet this requirement ✅

- [ ] **UI components**: Minimum 3:1 contrast with adjacent colors
  - Buttons: Primary gradient on dark background = Pass ✅
  - Tags: Language tag text on gradient = 4.8:1 ✅
  - Activity badges: Orange text on dark bg = 5.2:1 ✅

**Testing Tools:**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools: Inspect > Accessibility panel

**Common Issues to Avoid:**
- ❌ Gray text (`#666666`) on dark background = 2.8:1 (FAIL)
- ❌ Light purple on white background = 1.9:1 (FAIL)
- ✅ Use `text-neutral-400` on dark, `text-neutral-600` on light

---

## 2. Keyboard Navigation

### Focus Management (WCAG 2.1.1, 2.4.7)

- [ ] **All interactive elements are keyboard accessible**
  - Buttons: ✅ Native `<button>` element
  - Links: ✅ Native `<a>` element
  - Inputs: ✅ Native form controls
  - Custom components: ⚠️ Must have `tabIndex={0}` if not native

- [ ] **Visible focus indicators on all interactive elements**
  ```css
  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
  ```
  - Ring width: 2px minimum ✅
  - Ring color: High contrast (`#6366F1`) ✅
  - Ring offset: 2px for separation ✅

- [ ] **Logical tab order** (follows visual flow)
  - Header → Sidebar → Main Content → Chat
  - No `tabIndex` values > 0 (breaks natural flow)

- [ ] **Skip links** for keyboard users
  ```html
  <a href="#main-content" className="sr-only focus:not-sr-only">
    Skip to main content
  </a>
  ```

**Keyboard Shortcuts:**
- `Tab` / `Shift+Tab`: Navigate between elements
- `Enter` / `Space`: Activate buttons
- `Escape`: Close modals/dropdowns
- Arrow keys: Navigate within components (filters, menus)

**Testing:**
1. Unplug mouse
2. Navigate entire app with keyboard only
3. Ensure all actions are possible
4. Check focus is always visible

---

## 3. Screen Reader Support

### Semantic HTML (WCAG 1.3.1, 4.1.2)

- [ ] **Use semantic HTML elements**
  - `<header>` for site header ✅
  - `<nav>` for navigation ✅
  - `<main>` for main content ✅
  - `<aside>` for sidebars ✅
  - `<button>` for buttons (not `<div onClick>`) ✅
  - `<a>` for links ✅

- [ ] **Proper heading hierarchy** (no skipped levels)
  ```html
  <h1>Shiproom</h1>
    <h2>Trending Streams</h2>
      <h3>Stream Title</h3>
  ```
  - Never skip from `<h1>` to `<h3>` ❌

### ARIA Labels (WCAG 4.1.2)

- [ ] **Icon-only buttons have labels**
  ```jsx
  <button aria-label="Toggle theme">
    <MoonIcon />
  </button>
  ```

- [ ] **Images have alt text**
  ```jsx
  <img src="avatar.jpg" alt="sarah_codes profile picture" />
  ```
  - Decorative images: `alt=""` (empty string)
  - Informative images: Descriptive alt text

- [ ] **Live regions for dynamic content**
  ```jsx
  <div aria-live="polite" aria-atomic="true">
    {viewerCount} viewers watching
  </div>
  ```
  - Use `aria-live="polite"` for non-urgent updates
  - Use `aria-live="assertive"` for urgent announcements

- [ ] **Form inputs have associated labels**
  ```jsx
  <label htmlFor="search">Search streams</label>
  <input id="search" type="text" />
  ```

### Screen Reader Testing

**macOS**: VoiceOver (`Cmd + F5`)
**Windows**: NVDA (free) or JAWS
**Mobile**: TalkBack (Android) or VoiceOver (iOS)

**Test checklist:**
1. Can you navigate the entire app?
2. Are all interactive elements announced?
3. Is the page structure clear (headings, landmarks)?
4. Are form errors announced?
5. Do images have meaningful descriptions?

---

## 4. Touch Targets (Mobile)

### Minimum Size (WCAG 2.5.5)

- [ ] **All touch targets are minimum 44x44px**
  - Buttons: ✅ Base size is 40px, with padding = 44px+
  - Tags: ⚠️ Visual size is smaller, but clickable area must be 44px
  - Close icons: ✅ 44x44px minimum

**How to ensure:**
```jsx
// Visual size can be smaller, but padding creates larger hit area
<button className="p-3"> {/* Creates 44px+ touch target */}
  <XIcon className="w-4 h-4" /> {/* Visual icon is 16px */}
</button>
```

- [ ] **Sufficient spacing between targets** (8px minimum)
  ```jsx
  <div className="flex gap-2"> {/* 8px gap */}
    <Button>Follow</Button>
    <Button>Share</Button>
  </div>
  ```

---

## 5. Motion & Animation

### Respecting User Preferences (WCAG 2.3.3)

- [ ] **Respect `prefers-reduced-motion`**
  ```css
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

- [ ] **No auto-playing animations longer than 5 seconds**
  - Live badge pulse: ✅ Infinite but subtle, can be paused
  - Shimmer loading: ✅ Short duration, stops when loaded

- [ ] **Provide pause/stop controls for moving content**
  - Auto-scrolling: Must have pause button
  - Carousels: Must have manual controls

**Implementation:**
```jsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<div className={prefersReducedMotion ? '' : 'animate-pulse'}>
  LIVE
</div>
```

---

## 6. Forms & Inputs

### Form Accessibility (WCAG 3.3.1, 3.3.2)

- [ ] **All inputs have visible labels**
  ```jsx
  <label className="block text-sm font-semibold mb-2">
    Email Address
  </label>
  <input type="email" id="email" />
  ```

- [ ] **Required fields are indicated**
  ```jsx
  <label>
    Username <span className="text-red-500">*</span>
  </label>
  <input required aria-required="true" />
  ```

- [ ] **Error messages are clear and associated with fields**
  ```jsx
  <input 
    aria-invalid="true" 
    aria-describedby="email-error" 
  />
  <span id="email-error" className="text-red-500">
    Please enter a valid email
  </span>
  ```

- [ ] **Input purpose is programmatically identified**
  ```jsx
  <input 
    type="email" 
    autoComplete="email" 
    name="email" 
  />
  ```

---

## 7. Language & Readability

### Language Declaration (WCAG 3.1.1)

- [ ] **Page language is declared**
  ```html
  <html lang="en">
  ```

- [ ] **Language changes are marked**
  ```html
  <p>The French phrase <span lang="fr">Bonjour</span> means hello.</p>
  ```

### Readability (WCAG 3.1.5)

- [ ] **Text is readable and understandable**
  - Use sentence case, not ALL CAPS (except badges)
  - Avoid jargon in UI copy
  - Keep line length under 80 characters for body text

- [ ] **Abbreviations are defined**
  ```html
  <abbr title="WebSocket">WS</abbr>
  ```

---

## 8. Responsive & Zoom

### Reflow (WCAG 1.4.10)

- [ ] **Content reflows at 400% zoom without horizontal scrolling**
  - Mobile viewport: 320px width
  - Test at 400% zoom in browser

- [ ] **Text can be resized up to 200% without loss of functionality**
  - Test: Browser zoom to 200%
  - Ensure all text is readable
  - No overlapping content

### Orientation (WCAG 1.3.4)

- [ ] **Content works in both portrait and landscape**
  - No orientation locks (unless essential, e.g., games)

---

## 9. Error Prevention & Recovery

### Error Identification (WCAG 3.3.1)

- [ ] **Errors are clearly identified**
  ```jsx
  {error && (
    <div role="alert" className="text-red-500">
      <ErrorIcon /> {error.message}
    </div>
  )}
  ```

- [ ] **Suggestions are provided for fixing errors**
  ```jsx
  Email format is incorrect. Example: user@example.com
  ```

### Confirmation (WCAG 3.3.4)

- [ ] **Destructive actions require confirmation**
  ```jsx
  <Modal>
    <h2>Delete stream?</h2>
    <p>This action cannot be undone.</p>
    <Button variant="error">Delete</Button>
    <Button variant="secondary">Cancel</Button>
  </Modal>
  ```

---

## 10. Component-Specific Checklist

### Button
- [x] Semantic `<button>` element
- [x] Visible focus state
- [x] Disabled state is visually distinct
- [x] Minimum 44x44px touch target
- [x] Clear, concise label

### Tag
- [x] Text contrast meets 4.5:1 minimum
- [x] Not interactive (no focus state needed)
- [x] Meaningful labels (not just color-coded)

### StreamCard
- [x] Entire card is clickable
- [x] Focus state on card
- [x] Keyboard accessible (Enter to open)
- [x] Alt text for thumbnail
- [x] ARIA label describes card purpose

### Badge (Live, Trending)
- [x] High contrast (red on dark = 7.2:1)
- [x] Not solely reliant on color (includes "LIVE" text)
- [x] Animation respects prefers-reduced-motion

### Chat
- [x] Messages added to live region
- [x] Input has label
- [x] Send button has text or aria-label
- [x] Auto-scroll can be paused
- [x] Focus management when new messages arrive

---

## Testing Tools

### Automated Testing
- **axe DevTools** (Browser extension): Catches 57% of issues
- **Lighthouse** (Chrome): Accessibility audit
- **WAVE** (WebAIM): Visual feedback tool
- **Pa11y** (CLI): Automated testing in CI/CD

### Manual Testing
- **Keyboard navigation**: Can you use the entire app?
- **Screen reader**: NVDA (Windows), VoiceOver (Mac/iOS), TalkBack (Android)
- **Zoom**: Test at 200% and 400%
- **Color blindness simulator**: Chromatic vision simulator

### Real User Testing
- **Recruit users with disabilities**: Best way to find real issues
- **Ask about assistive tech**: What tools do they use?
- **Observe, don't lead**: Let them navigate naturally

---

## Compliance Checklist Summary

Before shipping any feature:

- [ ] Run automated tests (axe, Lighthouse)
- [ ] Test with keyboard only
- [ ] Test with screen reader
- [ ] Check color contrast (all text, UI elements)
- [ ] Verify focus states are visible
- [ ] Test at 200% zoom
- [ ] Test on mobile (touch targets, responsiveness)
- [ ] Review with accessibility guidelines
- [ ] Document any known issues in backlog

---

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [Inclusive Components](https://inclusive-components.design/)

---

## When in Doubt

**Ask yourself:**
1. Can someone using only a keyboard access this?
2. Can someone using a screen reader understand this?
3. Can someone with low vision see this?
4. Can someone with motor impairments click this?

If the answer to any is "no" or "maybe," it needs improvement.

**Remember**: Accessibility is not a checklist—it's a mindset. Build for everyone, not just the average user.
