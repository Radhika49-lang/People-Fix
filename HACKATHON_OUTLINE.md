# 📊 PeopleFix — Hackathon Presentation Outline

> **Project Name:** PeopleFix  
> **Tagline:** Report It. Track It. Fix It.  
> **Category:** AI, Automation, Smart City, Civic Technology  
> **Team:** Trio-Developers

---

## 🎯 Slide 1: Title & The Vision
- **Brand:** PeopleFix
- **Tagline:** *Report It. Track It. Fix It.*
- **Mission:** Transforming citizen frustration into accountable, automated municipal action through AI vision, geospatial deduplication, and explainable prioritization.

---

## ⚠️ Slide 2: The Civic Problem
- **The Redundancy Bottleneck:** A single pothole at a major intersection generates 10+ calls and portal submissions.
- **Resource Fragmentation:** City operations teams waste up to 35% of administrative time triaging duplicate complaints.
- **Urgency Blindspots:** Critical hazards (e.g. fallen trees, open drains, sparking wires) often get lost in unfiltered queues.

---

## 💡 Slide 3: The PeopleFix Solution
- **AI-Assisted Diagnostic:** Citizens take a photo; AI identifies the category (pothole, garbage, streetlight, etc.) and analyzes severity indicators.
- **Geospatial Deduplication (200m Radius):** Automatically cross-references nearby complaints using Haversine calculation and description similarity.
- **Community Endorsement (+1):** Citizens can upvote an existing ticket, increasing its priority score without creating duplicate work orders.
- **Explainable Priority Engine:** Objective, auditable priority rating (Critical, High, Medium, Low) based on public safety hazards and road obstruction.

---

## 🏗️ Slide 4: System Architecture & Technology Stack
- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, Lucide React
- **Mapping:** Leaflet & OpenStreetMap (interactive drag-and-drop location picker + public issue map)
- **Data Analytics:** Recharts (category breakdowns, priority distribution, resolution times)
- **Backend & AI:** Node.js Express server + Google Gemini Vision API / diagnostic fallback engine
- **Database & Security:** PostgreSQL / Supabase, Row Level Security (RLS) policies, automated sequence triggers for ticket IDs (`PF-YYYY-XXXXX`)

---

## 🔄 Slide 5: The End-to-End Workflow
1. **Citizen Submission:** Upload photo, AI categorization, map location selection.
2. **Duplicate Detection:** Instant prompt if an existing issue is located nearby.
3. **Automated Triage:** Ticket generated and routed to the correct department (e.g., Roads & Infrastructure Maintenance).
4. **Field Action:** Field crews dispatched; status progresses to `In Progress`.
5. **Resolution Verification:** Administrator uploads on-site before/after evidence photos; status marks `Resolved`.
6. **Citizen Notification:** Real-time alert delivered to the citizen with full audit history.

---

## 🔒 Slide 6: Security, Ethics & Privacy
- **Citizen Privacy Guarantee:** Public maps display anonymized data only; personal emails and phone numbers are never exposed.
- **Explainable AI (No Black Boxes):** AI offers suggestions; citizens and human administrators retain full review control.
- **Auditable History:** Every single status update records actor name, role, timestamp, and justification note.

---

## 📈 Slide 7: Municipal Impact & Scalability
- **35% Reduction in Administrative Overhead:** Eliminates duplicate work orders through automated clustering.
- **Faster Response Times:** High and Critical hazards are flagged immediately for emergency dispatch.
- **Increased Civic Trust:** Transparent photographic resolution evidence builds citizen confidence in local government.

---

## 🚀 Slide 8: Future Roadmap
- WhatsApp & SMS civic chatbot integration for zero-friction reporting.
- IoT smart sensor integration (sewer level sensors & connected streetlights).
- Municipal contractor SLA automated escalation alerts.

---

Created by Trio-Developers
