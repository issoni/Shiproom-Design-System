# Shiproom Design System - Usage Guidelines

## Table of Contents
1. [Getting Started](#getting-started)
2. [Component Usage Rules](#component-usage-rules)
3. [Typography Guidelines](#typography-guidelines)
4. [Color Usage](#color-usage)
5. [Spacing & Layout](#spacing--layout)
6. [Common Patterns](#common-patterns)
7. [Do's and Don'ts](#dos-and-donts)

---

## Getting Started

### Installation

```bash
npm install @shiproom/design-system
# or
yarn add @shiproom/design-system
```

### Basic Setup

```javascript
import '@shiproom/design-system/dist/styles.css';
import { Button, Tag, StreamCard } from '@shiproom/design-system';

function App() {
  return (
    <Button variant="primary">Start Streaming</Button>
  );
}
```

---

## Component Usage Rules

### When to Use Each Component

| Component | Use Case | Don't Use For |
|-----------|----------|---------------|
| **Button Primary** | Main CTAs (Start Streaming, Follow, Save) | Navigation links, minor actions |
| **Button Secondary** | Alternative actions (Cancel, Skip) | Primary actions |
| **Button Ghost** | Tertiary actions, icon-only buttons | Important actions |
| **Tag Primary** | Programming language ONLY | Frameworks, skill levels |
| **Tag Secondary** | Frameworks, runtimes, skill levels | Programming languages |
| **Tag Activity** | Current developer activity | Static metadata |
| **Badge Live** | Active streaming status | Offline content |
| **Badge Trending** | Popular/hot content | Regular content |
| **StreamCard Standard** | Discovery/browse grid | Featured hero content |
| **StreamCard Compact** | Sidebar, related streams | Main discovery feed |

---

## Typography Guidelines

### Font Families

**Inter (Sans-serif)**: Use for ALL UI elements
- Navigation
- Buttons
- Body text
- Headers
- Labels

**Roboto Mono (Monospace)**: Use ONLY for technical data
- GitHub repo URLs
- File paths
- Code snippets
- Technical metadata

### Typography Scale

```javascript
// Headings
<h1 className="text-4xl font-bold">     // 40px, Bold
<h2 className="text-3xl font-bold">     // 32px, Bold
<h3 className="text-2xl font-semibold"> // 24px, Semibold
<h4 className="text-xl font-semibold">  // 20px, Semibold

// Body
<p className="text-lg">   // 18px - Large body
<p className="text-base"> // 16px - Default body
<p className="text-sm">   // 14px - Small body
<p className="text-xs">   // 12px - Captions, labels
```

### Line Height Rules

- **Headings**: Use `120%` (tight) for visual impact
- **Body text**: Use `150%` (comfortable) for readability
- **Code/mono**: Use `175%` (spacious) for clarity

---

## Color Usage

### The Three-Tier System

**Never use brand tokens directly in components.**

❌ Wrong:
```javascript
<div style={{ color: '#6366F1' }}>
```

✅ Correct:
```javascript
<div className="text-brand-indigo-500">
```

### Color Hierarchy

**1. Language Tags** (Primary - Gradient)
```javascript
<Tag type="primary">JavaScript</Tag>
// Always use gradient background
// Always appear first in tag groups
```

**2. Framework/Runtime Tags** (Secondary - Neutral)
```javascript
<Tag type="secondary">React</Tag>
<Tag type="secondary">Node.js</Tag>
// Neutral background with border
// Support language tag, never standalone
```

**3. Activity Tags** (Semantic Color)
```javascript
<Tag type="activity" activity="bug-fixing">Bug Fixing</Tag>
// Orange = Bug Fixing
// Green = Building Feature
// Blue = Code Review
// Purple = Refactoring
// Cyan = Learning
```

### Activity Color Rules

| Activity | Color | When to Use |
|----------|-------|-------------|
| Bug Fixing | Orange (#F97316) | Debugging, fixing issues |
| Building Feature | Green (#10B981) | New development, adding features |
| Code Review | Blue (#3B82F6) | PR reviews, code feedback |
| Refactoring | Purple (#7E22CE) | Code cleanup, restructuring |
| Learning | Cyan (#06B6D4) | Tutorials, educational content |

---

## Spacing & Layout

### The 4px Grid

All spacing must be divisible by 4:

```javascript
// Correct spacing values
gap-2  // 8px
gap-3  // 12px
gap-4  // 16px
gap-6  // 24px

// Incorrect (avoid these)
gap-[10px]  // Not on grid
gap-[15px]  // Not on grid
```

### Component Spacing Patterns

**Button Internal Padding**
```javascript
// Small: py-2 px-4    (8px, 16px)
// Base:  py-2.5 px-5  (10px, 20px)
// Large: py-3 px-6    (12px, 24px)
```

**Card Padding**
```javascript
// Standard: p-5  (20px)
// Large: p-6     (24px)
// Compact: p-4   (16px)
```

**Tag Group Spacing**
```javascript
<div className="flex flex-wrap gap-2">
  <Tag>JavaScript</Tag>
  <Tag>React</Tag>
  <Tag>Node.js</Tag>
</div>
// Always use gap-2 (8px) between tags
```

---

## Common Patterns

### Pattern 1: Technical Metadata Display

**Always follow this order:**

1. Language (Primary tag)
2. Framework (Secondary tag)
3. Runtime (Secondary tag)
4. Skill level (Secondary tag)
5. Activity (Activity tag)

```javascript
<div className="flex flex-wrap gap-2">
  <Tag type="primary">JavaScript</Tag>
  <Tag type="secondary">React</Tag>
  <Tag type="secondary">Node.js</Tag>
  <Tag type="secondary">Intermediate</Tag>
  <Tag type="activity" activity="building-feature">Building Feature</Tag>
</div>
```

### Pattern 2: GitHub Integration Display

**If activity = "Bug Fixing"**, show issue prominently:
```javascript
<div className="flex items-center space-x-4 font-mono text-sm">
  <GitBranch className="w-4 h-4" />
  <span>github.com/user/repo</span>
  <span className="text-orange-500 font-bold">Issue #4521</span>
</div>
```

**If activity = "Building Feature"**, emphasize repo:
```javascript
<div className="flex items-center space-x-2 font-mono text-sm">
  <GitBranch className="w-4 h-4 text-indigo-600" />
  <span className="text-gray-400">github.com/user/repo</span>
</div>
```

### Pattern 3: Loading States

Use skeleton screens while data loads:

```javascript
<div className="animate-shimmer bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 bg-[length:200%_100%] h-40 rounded-xl" />
```

### Pattern 4: Empty States

```javascript
<div className="text-center py-12">
  <SearchIcon className="w-16 h-16 mx-auto text-gray-600 mb-4" />
  <h3 className="text-xl font-semibold mb-2">No streams found</h3>
  <p className="text-gray-400 mb-4">Try different filters</p>
  <Button variant="secondary">Clear Filters</Button>
</div>
```

---

## Do's and Don'ts

### Buttons

✅ **Do:**
- Use Primary for main CTAs (Start Streaming, Follow)
- Use Secondary for cancel/alternative actions
- Keep button text concise (2-3 words max)
- Use sentence case ("Start streaming" not "START STREAMING")

❌ **Don't:**
- Use multiple Primary buttons in same view
- Make buttons full-width unless on mobile
- Use all caps text
- Put icons in Secondary/Ghost buttons without text

### Tags

✅ **Do:**
- Always put Language tag first
- Use Primary ONLY for languages
- Group related tags together
- Keep tag text short (1-2 words)

❌ **Don't:**
- Use Primary tag for frameworks
- Mix Activity tags with metadata tags
- Use more than 5 tags per stream card
- Create custom tag colors

### StreamCard

✅ **Do:**
- Show GitHub repo for all cards
- Use Standard variant for main discovery
- Show current file in hover state
- Truncate title to 2 lines max

❌ **Don't:**
- Hide metadata to save space
- Remove the "Peek" hover interaction
- Use Compact variant as default
- Show offline streams in "Live" section

### Typography

✅ **Do:**
- Use Inter for all UI text
- Use Roboto Mono for GitHub URLs and file paths
- Maintain consistent line heights
- Use font weights purposefully (Regular for body, Semibold for labels, Bold for headings)

❌ **Don't:**
- Mix fonts within same component
- Use Italic (we don't use it in this system)
- Use font weights outside the scale (400, 500, 600, 700 only)
- Use all caps except for badges (LIVE, HOT)

### Spacing

✅ **Do:**
- Use 4px grid system (gap-2, gap-4, gap-6)
- Be consistent with component internal spacing
- Use Auto Layout in Figma for maintainability

❌ **Don't:**
- Use arbitrary spacing values (gap-[13px])
- Mix spacing scales in same component
- Forget to account for borders in spacing calculations

### Colors

✅ **Do:**
- Use semantic colors (activity colors) appropriately
- Maintain 4.5:1 contrast ratio minimum
- Test in both dark and light modes
- Use gradients sparingly (logo, primary buttons, language tags)

❌ **Don't:**
- Create new colors outside the token system
- Use light colors on light backgrounds
- Use more than 2 gradient colors in one element
- Override activity colors

---

## Advanced Patterns

### Responsive Breakpoints

```javascript
// Mobile: < 768px
<div className="flex flex-col gap-4 md:flex-row md:gap-6">

// Tablet: 768px - 1024px
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

// Desktop: > 1024px
<div className="max-w-7xl mx-auto px-6">
```

### Dark/Light Mode

```javascript
// Always use Tailwind's dark: prefix
<div className="bg-white dark:bg-neutral-900">
<p className="text-gray-900 dark:text-gray-100">

// Theme is controlled at root level
<html className="dark"> // or remove for light mode
```

### Accessibility

- All interactive elements must have focus states
- Use `focus:ring-2 focus:ring-indigo-500` on all clickable components
- Maintain semantic HTML (`<button>`, `<nav>`, `<main>`)
- Provide alt text for all images
- Ensure 44x44px minimum touch targets on mobile

---

## Questions?

If you encounter a use case not covered in these guidelines:
1. Check if similar pattern exists in Figma
2. Consult the design tokens JSON
3. Ask in #design-system Slack channel
4. Don't create one-off solutions—extend the system

**Remember**: Consistency > Customization. When in doubt, use existing patterns.
