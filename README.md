# ✨ Snapt

**Instant visual identity for your GitHub projects**

Generate stunning images for your repositories: social banners, star history charts, language distributions, and more.

## 🚀 Features

- **🎨 Social Banners** - Beautiful 1280×640px banners with live GitHub stats
- **📊 Star History** - Elegant charts showing repository growth
- **🌈 Language Stats** - Visual breakdown of your codebase languages
- **⚡ Lightning Fast** - Edge runtime with smart caching
- **🔧 Easy to Use** - Just URL parameters, no configuration needed

## 💫 Quick Start

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Build for production
bun run build

# Start production server
bun start
```

Visit `http://localhost:3000`

## 📖 API Usage

### Social Banner

Generate a stunning social preview banner:

```
GET /api/banner?title=MyProject&tagline=Amazing description&features=Fast,Secure,Simple,Elegant&gradient=667eea,764ba2&icon=🚀&repo=owner/repo
```

**Parameters:**
- `title` (required) - Project name
- `tagline` (required) - One-line description
- `features` (required) - Comma-separated features (max 4)
- `gradient` (required) - Two hex colors without #
- `icon` (required) - Emoji icon
- `theme` (optional) - `modern` or `dark` (default: modern)
- `repo` (optional) - `owner/repo` for live GitHub stats
- `showStats` (optional) - Show stats badges (default: true)

### Star History Chart

Visualize your repository's star growth:

```
GET /api/star-history?repo=owner/repo
```

**Parameters:**
- `repo` (required) - Repository in format `owner/repo`

### Language Distribution

Show language breakdown as a donut chart:

```
GET /api/languages?repo=owner/repo
```

**Parameters:**
- `repo` (required) - Repository in format `owner/repo`

## 🎯 Examples

### Banner for Silk

```
/api/banner?title=Silk&tagline=Zero-runtime CSS-in-TS with 92% smaller bundles&features=Type-safe styling,Zero runtime overhead,Full TypeScript support,92% smaller&gradient=667eea,764ba2&icon=🎨&theme=modern&repo=sylphxltd/silk
```

### Star History for Zen

```
/api/star-history?repo=sylphxltd/zen
```

### Languages for Benchmark

```
/api/languages?repo=sylphxltd/benchmark
```

## ⚙️ Configuration

### GitHub Token (Optional but Recommended)

Add a GitHub Personal Access Token for higher API rate limits:

1. Create token at https://github.com/settings/tokens
2. Required scope: `public_repo`
3. Add to `.env.local`:

```env
GITHUB_TOKEN=your_token_here
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
bun install -g vercel

# Deploy
vercel
```

Or click: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sylphxltd/snapt)

### Environment Variables

Set `GITHUB_TOKEN` in Vercel dashboard:
1. Go to Project Settings
2. Add Environment Variable
3. Name: `GITHUB_TOKEN`
4. Value: Your GitHub token

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **Bun** - Fast JavaScript runtime and package manager
- **@vercel/og** - Dynamic Open Graph image generation
- **Biome** - Fast linter and formatter
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

## 📦 Use Cases

- **GitHub Social Previews** - Upload generated banners to repo settings
- **README Headers** - Embed dynamic images in your documentation
- **Social Media** - Share beautiful repo cards on Twitter/LinkedIn
- **Project Showcases** - Create visual portfolios of your work

## 🎨 Customization

All images are fully customizable via URL parameters. Mix and match:
- Colors (any hex gradient)
- Themes (modern glassmorphism or dark premium)
- Content (title, tagline, features)
- Stats (automatic GitHub data)

## 📄 License

MIT © [SylphX](https://github.com/sylphxltd)

## 🙏 Credits

Built with:
- [@vercel/og](https://vercel.com/docs/functions/og-image-generation) - Image generation
- [GitHub REST API](https://docs.github.com/en/rest) - Repository data

---

Made with ❤️ for the open source community
