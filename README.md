⚽ Football App
A live football data web app built with HTML, JavaScript, and the football-data.org API. Displays real-time standings, top scorers, and upcoming fixtures across 9 major leagues.
🔗 Live Demo
football-app-6wa5.vercel.app
🚀 Features
• Live league standings (top 4 per league)
• Top scorers with goals and assists
• Upcoming fixtures with date and time
• 9 leagues supported: Premier League, La Liga, Bundesliga, Serie A, Ligue 1, Eredivisie, Primeira Liga, Championship, Brazilian Serie A
• Fully responsive — works on desktop and mobile
🛠️ Tech Stack
• Frontend: HTML, CSS, JavaScript
• Backend: Vercel Serverless Functions (Node.js)
• API: football-data.org
• Hosting: Vercel
📁 Project Structure
football-app/
├── api/
│   └── football.js   # Serverless function — handles API calls and bypasses CORS
└── index.html        # Frontend — UI, league tabs, standings/scorers/fixtures
🔧 How It Works
The browser cannot call the football-data.org API directly due to CORS restrictions. To solve this, a Vercel serverless function acts as a middleman — the frontend calls /api/football, which fetches the data server-side and returns it to the browser.
🌍 Supported Leagues
League
Code
Premier League
PL
La Liga
PD
Bundesliga
BL1
Serie A
SA
Ligue 1
FL1
Eredivisie
DED
Primeira Liga
PPL
Championship
ELC
Brazilian Serie A
BSA
📌 Note
This app requires an internet connection as all data is fetched in real time from the football-data.org API.
👨‍💻 Author
Built by StackOverThiago
