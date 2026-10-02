#  MedMinder Dashboard

MedMinder is a responsive, user-friendly healthcare application designed to help patients manage and track their daily medication schedules seamlessly. The application features a clean, professional dashboard panel leveraging Next.js React patterns and Lucide icons to maximize daily compliance.

##  Core Features

*   ** Dynamic Medical Analytics**: A horizontal, flex-box metric row highlighting total medications added, active intake completed, and remaining items due for the day.
*   ** Schedule Overview**: Clear timeline breakdowns mapping custom frequency schedules and explicit timing metrics.
*   ** Real-Time Logging**: Functional client-side interaction toggles enabling instant intake completion timestamps.
*   ** Persistent Synchronization**: Auto-restoration workflows connected directly with local browser memory contexts and baseline background data handlers.
*   ** Safe Records Administration**: Intuitive validation modals safeguarding against unintended data removal records.

##  Architecture & Tech Stack

*   **Framework:** Next.js (App Router, Client Component Paradigms)
*   **State & Sync Management:** React Context API (`AppContext`) & `localStorage`
*   **Visual Assets:** Lucide React Icon Sets (`Pill`, `CheckCircle2`, `Clock`, `RefreshCw`, `Trash2`)
*   **Styling Engine:** CSS Modules (`dashboard.module.css`) supplemented by isolated, inline Flexbox rows for rigid aspect ratio formatting.

##  Repository Directory Structure

```text
├── app/
│   ├── components/
│   │   ├── Cards.jsx         # Flex-aligned visual analytic metric cards
│   │   └── Sidebar.jsx       # Icon-driven core application navigation
│   ├── dashboard/
│   │   ├── page.jsx          # Primary workspace timeline and scheduling view
│   │   └── dashboard.module.css
│   ├── login/
│   │   └── page.jsx          # Authentication viewport utilizing singular vector icons
│   └── register/
│       └── page.jsx          # Onboarding portal
```

##  Local Installation & Setup

1. **Clone the project repository:**
   ```bash
   git clone https://github.com
   cd medminder
   ```

2. **Install the necessary environment dependencies:**
   ```bash
   npm install lucide-react
   # or if using yarn / pnpm
   yarn install
   ```

3. **Configure Environment Parameters:**
   Create a standard `.env.local` file inside your core root folder directory:
   ```env
   NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
   ```

4. **Launch the local execution runtime environment:**
   ```bash
   npm run dev
   ```
   Open **`http://localhost:3000`** in your local browser window panel to view your functional health dashboard.
