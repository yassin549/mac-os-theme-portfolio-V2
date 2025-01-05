# Blog Platform

A full-featured blogging platform with markdown support and user authentication.

## Features

- Rich text editor with Markdown support
- User authentication with Auth0
- Comment system
- Categories and tags
- Search functionality
- Social media sharing
- SEO optimization
- Analytics dashboard
- Image optimization
- RSS feed

## Tech Stack

- Next.js 13+
- MongoDB
- Auth0 authentication
- TailwindCSS
- MDX for content
- Vercel deployment
- Image optimization with next/image
- Server-side rendering

## Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

```env
AUTH0_SECRET='your-auth0-secret'
AUTH0_BASE_URL='your-base-url'
AUTH0_ISSUER_BASE_URL='your-auth0-domain'
AUTH0_CLIENT_ID='your-client-id'
AUTH0_CLIENT_SECRET='your-client-secret'
MONGODB_URI='your-mongodb-uri'
```

## Project Structure

```
├── components/
├── pages/
├── public/
├── styles/
├── lib/
└── content/
```

## License

MIT
