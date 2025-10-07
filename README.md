# FaunaFlora - Next.js Green Energy Template

A modern, fully-responsive green energy SaaS website template built with Next.js 15, TypeScript, and Tailwind CSS.

![FaunaFlora Preview](https://themewagon.github.io/FaunaFlora/fauna-assets/headers/header-photos-center-1.png)

## ✨ Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS v3** with custom design system
- 📱 **Fully Responsive** - Mobile-first design
- 🎯 **TypeScript** - Type-safe code
- 🔄 **Interactive Components** - FAQ accordions, testimonial sliders
- 🎭 **7 Complete Pages** - Home, About, Pricing, Contact, Blog, Login, Register
- 🌙 **Modern UI/UX** - Clean, professional design
- 🚀 **Static Export** - Deploy anywhere
- ♿ **Accessible** - Built with accessibility in mind

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm, pnpm, or yarn

### Installation

1. **Clone the repository** (or use this directory)

```bash
cd FaunaFlora-1.0.0
```

2. **Install dependencies**

```bash
npm install
# or
pnpm install
# or
yarn install
```

3. **Copy static assets**

**IMPORTANT:** Copy assets from the original structure:

```bash
# On Windows (PowerShell)
Copy-Item -Path "src\assets\fauna-assets" -Destination "public\" -Recurse
Copy-Item -Path "src\assets\images" -Destination "public\" -Recurse
Copy-Item -Path "src\assets\favicon.png" -Destination "public\"
Copy-Item -Path "src\assets\robots.txt" -Destination "public\"

# On macOS/Linux
cp -r src/assets/fauna-assets public/
cp -r src/assets/images public/
cp src/assets/favicon.png public/
cp src/assets/robots.txt public/
```

4. **Run the development server**

```bash
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage (/)
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── login/             # Login page
│   ├── pricing/           # Pricing page
│   ├── register/          # Register page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
│
├── components/            # Reusable components
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Footer section
│   ├── FAQAccordion.tsx   # FAQ component
│   └── TestimonialSlider.tsx
│
├── public/                # Static assets
│   ├── fauna-assets/      # Images, icons, graphics
│   ├── images/            # Logo files
│   └── favicon.png        # Site favicon
│
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript config
├── next.config.js         # Next.js config
└── package.json           # Dependencies
```

## 📄 Available Pages

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero section, features, stats, FAQ |
| About | `/about` | Company mission, values, team |
| Pricing | `/pricing` | Pricing plans and features |
| Contact | `/contact` | Contact form and information |
| Blog | `/blog` | Blog posts and articles |
| Login | `/login` | User login page |
| Register | `/register` | User registration page |

## 🎨 Design System

### Color Palette

- **Teal** - Primary brand color
- **Lime** - Accent color
- **Orange** - Secondary accent
- **Gray** - Neutral colors

### Typography

- **Font Family**: Figtree (Google Fonts)
- **Heading Sizes**: 5xl to 8xl
- **Body Sizes**: sm to xl

### Components

- ✅ Navigation with mobile menu
- ✅ Footer with newsletter signup
- ✅ FAQ accordion
- ✅ Testimonial carousel
- ✅ Pricing cards
- ✅ Blog post cards
- ✅ Contact forms
- ✅ Authentication forms

## 🛠️ Development

### Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Export static site
npm run export
```

### Environment Variables

No environment variables required for basic setup.

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Netlify

1. Build command: `npm run build`
2. Publish directory: `out`

### Static Hosting

1. Run `npm run build`
2. Deploy `out/` directory to any static host

## 🎯 Customization

### Update Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  teal: {
    // Your custom teal shades
  },
  lime: {
    // Your custom lime shades
  }
}
```

### Add New Pages

1. Create new folder in `app/`
2. Add `page.tsx` file
3. Export React component

### Modify Components

All components are in `components/` directory. Edit any component to customize behavior or styling.

## 📦 Dependencies

- **next**: ^15.1.3
- **react**: ^19.0.0
- **tailwindcss**: ^3.4.17
- **typescript**: ^5.7.2

## 🤝 Credits

- **Design & Code**: [PixelRocket](https://www.pixelrocket.store)
- **Distributed by**: [ThemeWagon](https://themewagon.com)
- **Next.js Conversion**: 2024

## 📝 License

- Design and Code is Copyright © PixelRocket
- Licensed under MIT
- Distributed by ThemeWagon

## 🐛 Support

For issues or questions about the Next.js version, please check:
- The `MIGRATION.md` file for detailed conversion notes
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS documentation: https://tailwindcss.com/docs

## 🎓 Learn More

Want to learn how to build templates like this?

Visit [www.pixelrocket.store](https://www.pixelrocket.store)

---

**Made with ❤️ for a greener future**
