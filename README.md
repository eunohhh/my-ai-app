# AI Chat Application

A modern AI chat application built with Next.js and Vercel AI SDK, supporting multiple AI models including GPT and Grok.

## Features

- Real-time streaming chat interface
- Support for multiple AI models:
  - GPT-4 (via OpenAI)
  - Grok (via xAI)
- Persistent chat history with Supabase
- Modern UI with Tailwind CSS
- Server-side rendering with Next.js 14

## Tech Stack

- **Framework**: Next.js 14
- **AI SDK**: Vercel AI SDK
- **Database**: Supabase
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: Supabase Auth

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Set up environment variables in `.env.local`:
   ```
   OPENAI_API_KEY=your_openai_api_key
   XAI_API_KEY=your_xai_api_key
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Run the development server:
   ```bash
   pnpm dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/app` - Next.js app router pages and API routes
- `/components` - React components
- `/lib` - Utility functions and AI providers
- `/types` - TypeScript type definitions
