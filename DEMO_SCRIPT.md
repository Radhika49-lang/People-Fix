# ⏱️ PeopleFix — 5-Minute Live Hackathon Demo Script

> **Platform:** PeopleFix — AI-Powered Smart Civic Problem Reporting & Resolution Platform  
> **Tagline:** Report It. Track It. Fix It.  
> **Time Limit:** 5 Minutes  
> **Target Audience:** Hackathon Judges, Municipal Officials, Smart City Evaluators

---

## 🕒 Minute 1: Problem Introduction & Landing Page Showcase

### Visual:
- Open `http://localhost:5173/` (Landing Page).

### Spoken Script:
> "Good morning, judges. When a pothole appears on a busy junction, 10 different citizens might call the city helpline or submit duplicate complaints on outdated portals. This overloads municipal staff, generates redundant work orders, and leaves urgent hazards buried under administrative noise.
>
> Welcome to **PeopleFix: Report It. Track It. Fix It.**
>
> On our landing page, you see real-time municipal metrics calculated directly from our database. Citizens can see supported civic categories, explore reported problems on our live OpenStreetMap, and understand how our AI deduplication engine protects city resources."

---

## 🕒 Minute 2: Citizen Reporting & Interactive Location

### Visual:
- Click **"Report an Issue"** or navigate to `/report/new`.
- Select the demonstration sample photo: **"Pothole on 4th St (Duplicate Test)"** or upload an image.

### Spoken Script:
> "Let's submit a report as a citizen. In Step 1, we select a photo of a dangerous pothole. Notice that our AI Vision diagnostic immediately activates in the background.
>
> In Step 2, the AI correctly identifies this as a **'Pothole / Road Damage'** with a 94% confidence score and explains the pavement disruption. The citizen can easily confirm or adjust the category.
>
> In Step 3, we use our Leaflet OpenStreetMap location picker. We can tap 'Use My Current Location' or drag the pin directly onto the crossroad of 4th St & Market St. The exact coordinates and human-readable address are saved separately."

---

## 🕒 Minute 3: AI Prioritization & Duplicate Detection

### Visual:
- Complete Step 4 (Title & Description).
- Click **"Check Duplicates & Review"**. The **Duplicate Candidate Modal** pops up.

### Spoken Script:
> "Now, watch what happens next. In Step 4, we enter our problem description. Because this pothole affects active traffic, our explainable priority engine evaluates the hazard indicators.
>
> When we proceed, PeopleFix's geospatial engine calculates Haversine distance against all active complaints within 200 meters.
>
> Look at the screen: **'A similar issue may already have been reported nearby'**. It found ticket `PF-2026-01001` just 15 meters away with a 94% similarity match!
>
> Rather than creating a redundant ticket, the citizen can click **'Support This Existing Issue (+1)'**. This automatically links the report, bumps the community counter, and increases the issue's priority without creating a duplicate work order!"

---

## 🕒 Minute 4: Administrator Triage, Assignment & Resolution

### Visual:
- Switch role to **Admin** using the top navbar pill or log in as `admin@peoplefix.org`.
- Open `/admin` (Admin Dashboard) and click into report `PF-2026-01001` or `/admin/reports`.

### Spoken Script:
> "Now let's switch to the perspective of **Director Sandra Rivera** in the Municipal Command Center.
>
> On the Admin Dashboard, the operations team sees real-time KPI metrics, the priority queue, and potential duplicate clusters.
>
> Opening the ticket, the administrator reviews the AI classification explanation, inspects the linked duplicate cluster, assigns the work to the **'Roads & Infrastructure Maintenance'** department and **'Field Crew Alpha'**, and transitions the status to **'In Progress'**.
>
> When the crew completes the repair, the admin marks it **'Resolved'**, enters a verification note, and attaches the before-and-after photo evidence. An auditable history entry is created permanently in the database."

---

## 🕒 Minute 5: Citizen Verification, Notifications & Public Map

### Visual:
- Switch back to **Citizen** role.
- Open `/notifications` and then view `/report/PF-2026-01001`.
- Finally, open `/map` (Public Issues Map).

### Spoken Script:
> "Back in the citizen's view, an instant in-app notification alerts the resident that their issue has been resolved.
>
> Opening the tracking timeline, the citizen sees the complete lifecycle stepper, the detailed audit trail with timestamps, and the official on-site repair photograph.
>
> On the **Public Issues Map**, the pin has turned green for 'Resolved', demonstrating total civic accountability without ever exposing private citizen personal information.
>
> By automating classification, deduplication, explainable prioritization, and verification, PeopleFix turns chaotic civic complaints into streamlined, accountable municipal action.
>
> Thank you, and we welcome your questions!"

---

Created by Trio-Developers
