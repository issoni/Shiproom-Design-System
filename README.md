# Shiproom Design System

A comprehensive design system built for developer streaming and technical discovery.

---

## 📦 What's Included

### 1. React Storybook Configuration
**Files:** `.storybook/main.js`, `.storybook/preview.js`, component story files

A complete Storybook setup with:
- Configuration for React + Webpack 5
- Accessibility addon (@storybook/addon-a11y)
- Dark/Light mode backgrounds
- Auto-generated documentation
- Story files for Button, Tag, Badge, and StreamCard components
- Interactive controls for all component variants

**Quick Start:**
```bash
npm install
npm run storybook
```

---

### 2. Tailwind Custom Configuration
**Files:** `tailwind.config.js`, `postcss.config.js`

Complete Tailwind theme extension including:
- **Brand Colors**: Indigo, Purple, Pink gradients
- **Neutral Scale**: 11 shades of gray (50-950)
- **Semantic Colors**: Success, Error, Warning, Info
- **Activity Colors**: Bug Fixing, Building Feature, Code Review, etc.
- **Typography**: Inter (UI) + Roboto Mono (Code)
- **Spacing**: 4px-based grid system
- **Border Radius**: 6px - 24px + full (pill shape)
- **Shadows**: Standard elevation + brand glow effects
- **Animations**: Pulse, shimmer for loading states
- **Custom Gradients**: Brand gradient, dark/light backgrounds

**Features:**
- Dark mode support via `class` strategy
- Backdrop blur utilities
- Custom keyframe animations
- Responsive breakpoints

---

### 3. Design Tokens JSON Export
**File:** `src/tokens/design-tokens.json`

Three-tier token architecture:

**Tier 1: Brand Tokens** (Raw Values)
- Color scales (Indigo, Purple, Pink, Gray)
- Spacing scale (0px - 80px)
- Border radius values
- Typography scales (font sizes, weights, line heights)

**Tier 2: Alias Tokens** (Semantic Meaning)
- Color aliases (primary, semantic, activity)
- Spacing aliases (none, micro, tiny, small, base, medium, large)
- Radius aliases (sm, base, lg, xl, 2xl)

**Tier 3: Mapped Tokens** (Component-Specific)
- Dark/Light mode mappings
- Background, text, border colors
- Component-specific tokens (button, tag, card, streamCard)

**Usage:**
- Import into Style Dictionary
- Use with design token tools
- Reference in Figma variables
- Engineering handoff documentation

---

### 4. React Component Library
**Files:** Component `.jsx` files with PropTypes and JSDoc

Production-ready React components:

**Button Component**
- Variants: Primary, Secondary, Ghost
- Sizes: Small, Base, Large
- States: Default, Hover, Active, Disabled
- Fully accessible with focus states

**Tag Component**
- Types: Primary (Language), Secondary (Framework), Activity
- Activity variants: Bug Fixing, Building Feature, Code Review, Refactoring, Learning
- Semantic color coding

**Badge Component**
- Types: Live, Trending, Viewer Count
- Animated states (pulse for Live badge)
- Icon integration

**StreamCard Component**
- Variants: Standard (horizontal), Compact (vertical)
- "Peek" hover interaction showing file details
- GitHub integration display
- Responsive design
- Full metadata support

**Features:**
- TypeScript-ready (PropTypes included)
- JSDoc comments for IntelliSense
- Accessibility built-in (ARIA labels, focus states)
- Usage examples in component comments
- Styled with Tailwind utility classes

---

### 5. Usage Guidelines
**File:** `docs/usage-guidelines.md`

Comprehensive documentation covering:

**Getting Started**
- Installation instructions
- Basic setup and imports

**Component Usage Rules**
- When to use each component
- What NOT to use components for
- Component comparison table

**Typography Guidelines**
- Font family rules (Inter for UI, Roboto Mono for code)
- Typography scale with examples
- Line height rules for different contexts

**Color Usage**
- Three-tier system explained
- Color hierarchy (Language → Framework → Activity)
- Activity color meanings and use cases
- Correct vs incorrect usage examples

**Spacing & Layout**
- 4px grid system
- Component spacing patterns
- Responsive breakpoint guidelines

**Common Patterns**
- Technical metadata display order
- GitHub integration patterns
- Loading states
- Empty states

**Do's and Don'ts**
- Detailed guidance for each component
- Common mistakes to avoid
- Best practices

---

### 6. Accessibility Checklist
**File:** `docs/accessibility-checklist.md`

WCAG 2.1 Level AA compliance guide:

**Color & Contrast**
- Text contrast ratios (4.5:1 minimum)
- UI component contrast (3:1 minimum)
- Testing tools and methods

**Keyboard Navigation**
- Focus management rules
- Keyboard shortcuts
- Tab order guidelines
- Skip links implementation

**Screen Reader Support**
- Semantic HTML requirements
- ARIA label guidelines
- Live regions for dynamic content
- Testing with VoiceOver, NVDA, JAWS

**Touch Targets (Mobile)**
- Minimum 44x44px touch targets
- Spacing between interactive elements

**Motion & Animation**
- Respecting `prefers-reduced-motion`
- Auto-playing content guidelines
- Pause/stop controls

**Forms & Inputs**
- Label requirements
- Error message patterns
- Required field indicators

**Component-Specific Checklists**
- Accessibility requirements for each component
- Testing procedures
- Known issues and workarounds

**Testing Tools**
- Automated: axe DevTools, Lighthouse, WAVE
- Manual: Screen readers, keyboard testing
- Real user testing recommendations

---

## 📚 Documentation Links
- **Case Study** → [[ishikasoni.com/shiproom.html](https://www.ishikasoni.com/shiproom.html#)]
- **Live Storybook** → [Deploy Storybook to GitHub Pages]View Storybook: Coming soon!

---

## 🎯 Key Features

### Design System Highlights
✅ **Three-Tier Token Architecture** - Brand → Alias → Mapped  
✅ **Dark Mode First** - Optimized for developer preferences  
✅ **WCAG 2.1 AA Compliant** - Accessible to all users  
✅ **Component-Driven** - Atomic design methodology  
✅ **Developer-Focused** - Built for technical discovery  
✅ **Fully Documented** - Usage guidelines and accessibility checklists  

### Technical Stack
- **React** - Component library
- **Tailwind CSS** - Utility-first styling
- **Storybook** - Component documentation
- **PropTypes** - Runtime type checking
- **Lucide React** - Icon library

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/shiproom-design-system.git

# Install dependencies
cd shiproom-design-system
npm install

# Run Storybook
npm run storybook

# Build library
npm run build
```

### Using in Your Project

```bash
npm install @shiproom/design-system
```

```javascript
import '@shiproom/design-system/dist/styles.css';
import { Button, Tag, StreamCard } from '@shiproom/design-system';

function App() {
  return (
    <div>
      <Button variant="primary">Start Streaming</Button>
      <Tag type="primary">JavaScript</Tag>
    </div>
  );
}
```

---

## 📖 Usage Examples

### Button
```jsx
// Primary CTA
<Button variant="primary" size="base">
  Start Streaming
</Button>

// Secondary action
<Button variant="secondary" size="base">
  Cancel
</Button>

// Small button
<Button variant="primary" size="small">
  Follow
</Button>
```

### Tag
```jsx
// Language tag (always primary)
<Tag type="primary">JavaScript</Tag>

// Framework tag (secondary)
<Tag type="secondary">React</Tag>

// Activity tag
<Tag type="activity" activity="bug-fixing">
  Bug Fixing
</Tag>
```

### StreamCard
```jsx
const streamData = {
  id: 1,
  title: "Building a WebSocket Chat App",
  streamer: "sarah_codes",
  avatar: "SC",
  viewers: 234,
  language: "JavaScript",
  framework: "React",
  runtime: "Node.js",
  level: "Intermediate",
  activity: "building-feature",
  isLive: true,
  currentFile: "server/websocket.js",
  linesOfCode: 847,
  lastCommit: "12 min ago",
  githubRepo: "github.com/sarah/chat-app",
};

<StreamCard 
  stream={streamData} 
  variant="standard" 
  onClick={handleClick}
/>
```

---

## 🤝 Contributing

1. Check the [Usage Guidelines](docs/usage-guidelines.md) before creating new components
2. Ensure all components meet [Accessibility Standards](docs/accessibility-checklist.md)
3. Add Storybook stories for new components
4. Update design tokens JSON if adding new values
5. Test in both dark and light modes

---

**Built with ❤️ for the developer community**
