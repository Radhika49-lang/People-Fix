# PeopleFix — AI-Powered Smart Civic Problem Reporting & Resolution Platform

> **Tagline:** Report It. Track It. Fix It.  
> **Category:** AI, Automation, Smart City, Civic Technology  
> **Created by:** Trio-Developers

---

## 🏛️ Executive Summary

**PeopleFix** is a full-stack, AI-powered smart civic issue reporting and resolution platform that bridges the gap between citizens and municipal administrators. Rather than relying on static complaint portals that lead to redundant work orders and delayed responses, PeopleFix automates the entire civic problem lifecycle:

1. **AI-Assisted Vision Diagnostic**: Automatically detects issue categories, identifies severity indicators, and estimates confidence from uploaded photos.
2. **Geospatial & Text Deduplication Engine**: Detects overlapping reports within a 200-meter radius, clustering complaints about the same pothole, garbage spill, or streetlight.
3. **Explainable Priority Engine**: Transparently evaluates public safety hazards, arterial road obstructions, and community backing into **Critical**, **High**, **Medium**, or **Low** priority with clear, auditable reasoning.
4. **Transparent Resolution Lifecycle**: Real-time status tracking from `Submitted` to `Resolved` with required on-site photographic resolution evidence and audit trails.
5. **Interactive Public OpenStreetMap**: Public issues map with accessible colored pins, clustering, and citizen privacy protection.

---

## 🎨 Visual Design System

- **Primary Color:** Dark Navy Blue (`#183153`)
- **Secondary Color:** Teal Green (`#168C82`)
- **Page Background:** Soft Off-White (`#F7F9FC`)
- **Card Background:** Pure White (`#FFFFFF`)
- **Primary Text:** Dark Charcoal (`#202B3C`)
- **Secondary Text:** Muted Gray (`#697586`)
- **Borders:** Light Gray (`#E3E8EF`)
- **Priorities:**
  - 🔴 **Critical:** Red (`#DC2626`)
  - 🟠 **High:** Orange (`#EA580C`)
  - 🟡 **Medium:** Amber (`#D97706`)
  - ⚪ **Low:** Slate (`#4B5563`)
- **Status:** Green (`#16A34A`) for Resolved, Blue (`#2563EB`) for In Progress, Teal (`#0D9488`) for Under Review / Verified.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18, TypeScript, Vite, Tailwind CSS, Lucide React |
| **Mapping** | Leaflet, React-Leaflet, OpenStreetMap |
| **Analytics** | Recharts (Category, Priority, Status, Resolution Time) |
| **Backend / API** | Node.js, Express, Multer, REST API |
| **AI Vision Engine** | Google Gemini Vision API + Built-in Rule-Assisted Diagnostic Engine |
| **Database & Auth** | Supabase (PostgreSQL, Supabase Auth, Row Level Security) + Local Storage Sync Fallback |

---

## 🚀 Quick Start & Installation

### 1. Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
*(The application is designed with a resilient offline engine and realistic seed data so it runs 100% out of the box even before configuring external keys!)*

### 4. Run the Full Application
To run both the Vite frontend and the Express AI backend concurrently:
```bash
npm run dev:all
```
Or run the frontend independently:
```bash
npm run dev
```
Open **`http://localhost:5173`** in your browser.

---

## 👥 Hackathon Demo Accounts

For rapid evaluation, PeopleFix provides instant one-click demo login buttons on the Sign-In page and a top navbar role switcher:

- **Citizen Account:**
  - **Email:** `citizen@peoplefix.org`
  - **Password:** `Citizen@123`
  - **Name:** Alex Morgan
  - **Capabilities:** Report civic problems, upload photos, pick map coordinates, view duplicate suggestions, support existing issues, track real-time resolution timeline.

- **Administrator Account:**
  - **Email:** `admin@peoplefix.org`
  - **Password:** `Admin@123`
  - **Name:** Director Sandra Rivera
  - **Capabilities:** Triage incoming reports, review AI classification, override priorities with required reasoning, assign departments/crews, upload resolution evidence photos, inspect analytics and audit history.

---

## 🗄️ Database Schema & Supabase Migration

The full PostgreSQL DDL, auto-generating ticket sequence trigger (`PF-YYYY-XXXXX`), indexes, and Row Level Security (RLS) policies are provided in:
```
supabase/schema.sql
```

To seed initial demonstration data into Supabase:
```bash
npm run seed
```

---

## 📋 All 17 Required Pages Implemented

1. **Landing Page** (`/`): Civic hero, real-time database stats, 4-step workflow, supported categories, duplicate detection explanation, and recent reports preview.
2. **Login Page** (`/login`): Email/password with show-hide toggle, remember-me, and one-click demo logins.
3. **Registration Page** (`/register`): Citizen account creation, validation, and privacy consent.
4. **Forgot Password Page** (`/forgot-password`): Recovery workflow.
5. **Citizen Dashboard** (`/dashboard`): Welcome banner, dynamic count cards, quick action cards, and personal submissions table.
6. **New Report Form** (`/report/new`): 5-stage multi-step form with photo upload, AI vision classification, Leaflet drag-and-drop location picker, description, duplicate detection modal, and priority preview.
7. **Submission Confirmation Page** (`/report/confirmation/:ticketId`): Success badge, generated Ticket ID with copy button, and triage roadmap.
8. **My Reports Page** (`/my-reports`): Grid and table view toggles, category/status/priority filters, and direct tracking buttons.
9. **Report Tracking & Detail Timeline** (`/report/:ticketId`): 6-stage visual status stepper, original photo, AI diagnostic audit, full status history audit trail, resolution evidence display, and community support button.
10. **Public Issues Map** (`/map`): Interactive OpenStreetMap with status-colored pins, search filter, popup summaries, and privacy protection.
11. **Notifications Page** (`/notifications`): In-app alerts for status updates, duplicate clustering, and resolution sign-offs.
12. **User Profile & Settings** (`/profile`): Profile editor, role display, demo role toggle, and seed data reset tool.
13. **Administrator Dashboard** (`/admin`): Metrics cards, priority review action queue, and live administrative audit log.
14. **Administrator Report Management** (`/admin/reports`): Full registry table with sorting, filters, and quick review navigation.
15. **Administrator Report Detail & Review** (`/admin/reports/:ticketId`): Full AI audit review, priority override with mandatory reason, department and crew assignment, and status transition with resolution evidence photo upload.
16. **Analytics Page** (`/admin/analytics`): Interactive Recharts charts (Category breakdown, Priority donut, Status distribution, Submissions over time, and Average resolution time).
17. **Not Found Page** (`*`): 404 handler with return navigation.

---

## 👥 Authorship

Created by Trio-Developers
