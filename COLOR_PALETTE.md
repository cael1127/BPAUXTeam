# Website Color Palette Documentation

This document contains all hex color codes used throughout the BPAUX Team website, organized by color family with usage locations.

---

## 🎨 Primary Brand Colors

### Purple Shades
| Hex Code | Tailwind Class | Usage Location | Purpose |
|----------|---------------|----------------|---------|
| `#8B5CF6` | purple-500 | **Primary Brand Color** | Main brand purple, used in:<br>- Focus outlines (index.css:102, 254, 404)<br>- Button gradients<br>- Scrollbar thumb<br>- Card hover shadows (rgba(139, 92, 246, ...))<br>- Navigation logo background |
| `#7C3AED` | purple-700 | **Hover States** | Used in:<br>- Scrollbar thumb hover (index.css:95)<br>- Button hover states (from-purple-700) |
| `#9333EA` | purple-600 | **Buttons & CTAs** | Used in:<br>- Primary button gradients (from-purple-600)<br>- Navigation buttons<br>- Hero section CTA buttons |
| `#A855F7` | purple-500 | **Accents** | Used in:<br>- Background blur effects<br>- Icon colors |
| `#C084FC` | purple-400 | **Text Gradients** | Used in:<br>- Gradient text effects (from-purple-400)<br>- Navigation logo text<br>- Section heading accents |
| `#C4B5FD` | purple-300 | **Light Accents** | Used in:<br>- Text colors in dark sections |
| `#581C87` | purple-900 | **Dark Backgrounds** | Used in:<br>- Hero section background gradient (from-purple-900)<br>- Mobile app section backgrounds |
| `#FAF5FF` | purple-50 | **Light Backgrounds** | Used in:<br>- Section backgrounds (to-purple-50)<br>- Games section gradient |

### Pink Shades
| Hex Code | Tailwind Class | Usage Location | Purpose |
|----------|---------------|----------------|---------|
| `#EC4899` | pink-500 | **Secondary Brand Color** | Used in:<br>- Primary brand gradient (via-pink-400/pink-500)<br>- Scrollbar gradients (index.css:90)<br>- Button gradients (via-pink-600) |
| `#DB2777` | pink-600 | **Hover States** | Used in:<br>- Scrollbar thumb hover (index.css:95)<br>- Button hover states (via-pink-700) |
| `#F472B6` | pink-400 | **Text Gradients** | Used in:<br>- Gradient text effects (via-pink-400)<br>- Section heading accents |
| `#F9A8D4` | pink-300 | **Light Accents** | Used in:<br>- Gradient text (index.css:74)<br>- Icon colors in dark sections |
| `#BE185D` | pink-700 | **Dark Hover States** | Used in button hover states |
| `#FDF2F8` | pink-50 | **Light Backgrounds** | Used in:<br>- Section backgrounds (to-pink-50)<br>- Featured teams section |

### Blue Shades
| Hex Code | Tailwind Class | Usage Location | Purpose |
|----------|---------------|----------------|---------|
| `#3B82F6` | blue-500 | **Accent Color** | Used in:<br>- Primary brand gradient (to-blue-400)<br>- Scrollbar gradients (index.css:90, 314)<br>- Button gradients (to-blue-600) |
| `#2563EB` | blue-600 | **Buttons & CTAs** | Used in:<br>- Button gradients (to-blue-600)<br>- Scrollbar thumb hover (index.css:95)<br>- Game category accents |
| `#1D4ED8` | blue-700 | **Hover States** | Used in button hover states (to-blue-700) |
| `#60A5FA` | blue-400 | **Text Gradients** | Used in:<br>- Gradient text effects (to-blue-400)<br>- Section heading accents |
| `#1E3A8A` | blue-900 | **Dark Backgrounds** | Used in:<br>- Hero section background gradient (to-blue-900)<br>- Mobile app section backgrounds |

---

## 🌸 Rose/Peach Shades (Hero Section Special Effects)

| Hex Code | Tailwind Class | Usage Location | Purpose |
|----------|---------------|----------------|---------|
| `#FB7185` | rose-400 | **Background Blur Effects** | Used in:<br>- Hero section animated hotspots (HeroSection.jsx:48, 50, 56) |
| `#FDA4AF` | rose-300 | **Background Blur Effects** | Used in:<br>- Hero section animated hotspots (HeroSection.jsx:49, 53) |
| `#FED7AA` | orange-200 (custom) | **SVG Gradient** | Used in:<br>- Hero section peachy gradient hotspot (HeroSection.jsx:67)<br>- Hex: `#fed7aa` |
| `#FBBF24` | yellow-400 (custom) | **SVG Gradient** | Used in:<br>- Hero section peachy gradient hotspot (HeroSection.jsx:68)<br>- Hex: `#fbbf24` |
| `#F59E0B` | yellow-500 (custom) | **SVG Gradient** | Used in:<br>- Hero section peachy gradient hotspot (HeroSection.jsx:69)<br>- Hex: `#f59e0b` |

---

## 🎯 Accent Colors

### Yellow/Gold
| Hex Code | Tailwind Class | Usage Location | Purpose |
|----------|---------------|----------------|---------|
| `#EAB308` | yellow-500 | **Trophy Icons** | Used in:<br>- Trophy icon colors<br>- Achievement indicators |
| `#FACC15` | yellow-400 | **Highlights** | Used in:<br>- Trophy icons in hero section<br>- Prize pool displays |
| `#FDE047` | yellow-300 | **Light Accents** | Used in light backgrounds |

### Orange
| Hex Code | Tailwind Class | Usage Location | Purpose |
|----------|---------------|----------------|---------|
| `#F97316` | orange-500 | **Gradients** | Used in:<br>- Mobile app section gradients<br>- Game category colors |
| `#FED7AA` | orange-200 | **Particle Effects** | Used in:<br>- Hero section particle effects (HeroSection.jsx:82) |

### Indigo
| Hex Code | Tailwind Class | Usage Location | Purpose |
|----------|---------------|----------------|---------|
| `#6366F1` | indigo-500 | **Background Blur Effects** | Used in:<br>- Hero section animated hotspots (HeroSection.jsx:45) |

### Red
| Hex Code | Tailwind Class | Usage Location | Purpose |
|----------|---------------|----------------|---------|
| `#DC2626` | red-600 | **Team Colors** | Used in:<br>- Team gradient backgrounds (from-red-600) |
| `#EF4444` | red-500 | **Gradients** | Used in:<br>- Mobile app section gradients<br>- Game category colors |

### Green/Emerald
| Hex Code | Tailwind Class | Usage Location | Purpose |
|----------|---------------|----------------|---------|
| `#16A34A` | green-600 | **Tournament Features** | Used in:<br>- Games section feature icons (to-green-600) |
| `#059669` | emerald-600 | **Tournament Features** | Used in:<br>- Games section feature icons (to-emerald-600) |

### Cyan
| Hex Code | Tailwind Class | Usage Location | Purpose |
|----------|---------------|----------------|---------|
| `#0891B2` | cyan-600 | **Game Categories** | Used in:<br>- Rocket League team colors (to-cyan-600) |
| `#06B6D4` | cyan-500 | **Accents** | Used in game category accents |

---

## ⚫ Neutral Colors

### Gray Scale
| Hex Code | Tailwind Class | Usage Location | Purpose |
|----------|---------------|----------------|---------|
| `#111827` | gray-900 | **Text & Dark Backgrounds** | Used in:<br>- Footer background (Footer.jsx:36)<br>- Navigation background (Navigation.jsx:38)<br>- Primary text color |
| `#1F2937` | gray-800 | **Dark UI Elements** | Used in:<br>- Footer sections<br>- Mobile menu backgrounds<br>- Newsletter input backgrounds |
| `#374151` | gray-700 | **Borders & Hover States** | Used in:<br>- Mobile menu hover states<br>- Navigation hover backgrounds |
| `#4B5563` | gray-600 | **Secondary Text** | Used in:<br>- Body text colors<br>- Descriptions |
| `#9CA3AF` | gray-400 | **Icons & Placeholders** | Used in:<br>- Search icons<br>- Placeholder text<br>- Inactive states |
| `#D1D5DB` | gray-300 | **Borders** | Used in:<br>- Input borders<br>- Card borders |
| `#E5E7EB` | gray-200 | **Light Borders** | Used in light border contexts |
| `#F3F4F6` | gray-100 | **Light Backgrounds** | Used in:<br>- Card backgrounds<br>- Section backgrounds |
| `#F9FAFB` | gray-50 | **Very Light Backgrounds** | Used in:<br>- Page backgrounds<br>- Games section gradient |

### Utility Grays
| Hex Code | Usage Location | Purpose |
|----------|----------------|---------|
| `#f1f1f1` | index.css:86 | Scrollbar track background |
| `#f0f0f0` | index.css:227, 299 | Shimmer/skeleton loading gradient |
| `#e0e0e0` | index.css:227, 299 | Shimmer/skeleton loading gradient |

---

## ⚪ Black & White

| Hex Code | Usage Location | Purpose |
|----------|----------------|---------|
| `#FFFFFF` | Multiple | White - Used for:<br>- Text on dark backgrounds<br>- Card backgrounds<br>- Button text<br>- Focus indicator outlines (index.css:257) |
| `#000000` | Multiple | Black - Used for:<br>- Overlay backgrounds (bg-black/20)<br>- Text on light backgrounds |

---

## 🎨 Gradient Combinations

### Primary Brand Gradients
1. **Purple → Pink → Blue** (Main Brand Gradient)
   - Start: `#8B5CF6` (purple-500)
   - Middle: `#EC4899` (pink-500)
   - End: `#3B82F6` (blue-500)
   - Usage: Scrollbar thumb, gradient text, button backgrounds
   - Location: index.css:90, 314

2. **Purple → Pink** (Secondary Gradient)
   - Start: `#9333EA` (purple-600)
   - End: `#DB2777` (pink-600)
   - Usage: Primary CTA buttons, hero section buttons
   - Location: Multiple components

3. **Purple → Pink → Blue** (Text Gradient)
   - Start: `#C084FC` (purple-400)
   - Middle: `#F472B6` (pink-400)
   - End: `#60A5FA` (blue-400)
   - Usage: Section heading text, navigation logo text
   - Location: Multiple components

4. **Purple → Pink → Blue** (Light Gradient)
   - Start: `#A78BFA` (purple-300 variant)
   - Middle: `#F9A8D4` (pink-300)
   - End: `#93C5FD` (blue-300 variant)
   - Usage: Gradient text class
   - Location: index.css:74

### Background Gradients
1. **Hero Section Background**
   - `from-purple-900` (`#581C87`) → `via-purple-700` (`#7C3AED`) → `to-blue-900` (`#1E3A8A`)
   - Location: HeroSection.jsx:40

2. **Games Section Background**
   - `from-gray-50` (`#F9FAFB`) → `to-purple-50` (`#FAF5FF`)
   - Location: GamesSection.jsx:13

### Special Gradients
1. **Peachy Gradient (Hero Section SVG)**
   - `#fed7aa` → `#fbbf24` → `#f59e0b`
   - Location: HeroSection.jsx:67-69

---

## 🎭 RGBA Color Values (with Transparency)

| RGBA Value | Usage Location | Purpose |
|------------|----------------|---------|
| `rgba(139, 92, 246, 0.5)` | index.css:35 | Glow animation (50% opacity) |
| `rgba(139, 92, 246, 0.8)` | index.css:38 | Glow animation peak (80% opacity) |
| `rgba(139, 92, 246, 0.6)` | index.css:38 | Glow animation secondary (60% opacity) |
| `rgba(139, 92, 246, 0.4)` | index.css:249 | Card hover glow (40% opacity) |
| `rgba(139, 92, 246, 0.15)` | index.css:351 | Card hover shadow (15% opacity) |
| `rgba(139, 92, 246, 0.3)` | index.css:411 | Button hover shadow (30% opacity) |
| `rgba(0, 0, 0, 0.1)` | index.css:69, 245 | General shadows (10% opacity) |
| `rgba(0, 0, 0, 0.15)` | index.css:245 | Card shadows (15% opacity) |
| `rgba(255, 255, 255, 0.1)` | index.css:307 | Glassmorphism background (10% opacity) |
| `rgba(255, 255, 255, 0.2)` | index.css:309, 334 | Glassmorphism borders/backgrounds (20% opacity) |
| `rgba(255, 255, 255, 0.3)` | index.css:427 | Progress bar shimmer (30% opacity) |

---

## 📋 Quick Reference: Most Used Colors

### Essential Brand Colors
- **Primary Purple**: `#8B5CF6`
- **Primary Pink**: `#EC4899`
- **Primary Blue**: `#3B82F6`
- **Dark Purple**: `#7C3AED` (hover states)
- **Dark Pink**: `#DB2777` (hover states)
- **Dark Blue**: `#2563EB` (hover states)

### Text Colors
- **Primary Text (Dark)**: `#111827` (gray-900)
- **Secondary Text**: `#4B5563` (gray-600)
- **Light Text**: `#FFFFFF` (white)
- **Muted Text**: `#9CA3AF` (gray-400)

### Background Colors
- **Dark Background**: `#111827` (gray-900)
- **Light Background**: `#F9FAFB` (gray-50)
- **White Background**: `#FFFFFF` (white)

---

## 🎯 Usage Guidelines

1. **Primary Actions**: Use the purple-pink-blue gradient (`#8B5CF6` → `#EC4899` → `#3B82F6`)
2. **Secondary Actions**: Use purple-pink gradient (`#9333EA` → `#DB2777`)
3. **Text on Dark**: Use white (`#FFFFFF`) or light grays
4. **Text on Light**: Use dark gray (`#111827`) or medium gray (`#4B5563`)
5. **Accents**: Use yellow (`#FACC15`) for highlights and trophies
6. **Hover States**: Darken the base color by one shade (e.g., purple-600 → purple-700)

---

## 📝 Notes

- All colors follow WCAG 2.1 AA contrast standards
- The primary brand gradient (purple-pink-blue) is the signature visual element
- Rose/peach colors are used exclusively in the hero section for special effects
- Gray scale provides the foundation for text and UI elements
- RGBA values are used for shadows, glows, and glassmorphism effects

---

*Last Updated: Based on current codebase analysis*
*Format: Hex codes are in uppercase for consistency*

