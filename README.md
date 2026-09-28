# Smart Inventory and Sales Dashboard

A dashboard application for tracking inventory and sales, built as two
independent projects: a Next.js frontend and an Express backend, both backed
by a shared Supabase PostgreSQL database.

## Project Structure

```
vibin/
  frontend/   Next.js application (UI)
  backend/    Express API server (business logic, Supabase access)
```

The frontend and backend are separate Node.js projects, each with its own
`package.json`, dependencies, and `.env` file. They communicate over HTTP:
the frontend calls the backend's REST API, and the backend is the only
service that talks to Supabase using the privileged service role key.

## Tech Stack

### Frontend (`/frontend`)

- **Next.js** - React framework used for routing, server rendering, and the
  overall application structure of the dashboard.
- **TypeScript** - Static typing across the frontend codebase to catch
  errors early and make the code easier to maintain.
- **shadcn/ui** - Accessible, unstyled-by-default UI components (buttons,
  cards, tables, dialogs, etc.) used to build the dashboard interface
  quickly and consistently.
- **Lucide React** - Icon set used throughout the UI, shipped as
  tree-shakeable SVG React components.
- **Recharts** - Charting library used to render sales and inventory trends
  (line charts, bar charts, pie charts, etc.) on the dashboard.
- **Supabase JS** - Client library used for reading data directly from
  Supabase where appropriate (e.g. auth session handling) and for calling
  Supabase services from the browser.
- **Zod** - Schema validation for forms and any client-side input before it
  is sent to the backend.

### Backend (`/backend`)

- **Express** - Minimal Node.js HTTP server that exposes the REST API
  consumed by the frontend.
- **TypeScript** - Static typing for the API server and its business logic.
- **Supabase JS** - Server-side client used with the Supabase service role
  key to read and write data in the PostgreSQL database.
- **Zod** - Validates incoming request bodies/query params before they
  reach any business logic or database query.
- **dotenv** - Loads environment variables (Supabase keys, port, allowed
  origin) from a local `.env` file.
- **cors** - Restricts which origins (the frontend's URL) may call the API.

### Database

- **Supabase (PostgreSQL)** - Hosted Postgres database that stores
  inventory, product, and sales data. The frontend never talks to it
  directly with the service role key; only the backend does.

## Getting Started

### 1. Create a Supabase project

Create a project at supabase.com and note down:
- Project URL
- `anon` public API key (for the frontend)
- `service_role` secret API key (for the backend only, never exposed to the
  browser)

### 2. Configure environment variables

```
cp frontend/.env.local.example frontend/.env.local
cp backend/.env.example backend/.env
```

Fill in the Supabase values in both files.

### 3. Install dependencies

```
cd frontend && npm install
cd ../backend && npm install
```

### 4. Run the apps

```
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd frontend && npm run dev
```

The frontend runs on http://localhost:3000 and the backend runs on
http://localhost:4000 by default.
