# DevOps Maturity Assessment Tool

**Student Name:** SHREEYA SAHAI  
**Registration No:** 23FE10CSE00420 

**Course:** CSE3253 DevOps [PE6]  
**Semester:** VI (2025-2026)  
**Project Type:** DevOps Maturity Assessment Tool  
**Difficulty:** Intermediate  

---

## 📋 Project Overview

### Problem Statement
Organizations often lack a structured way to evaluate their DevOps practices and identify areas for improvement. This tool provides a comprehensive, interactive assessment across six key DevOps dimensions, generating actionable insights and a visual maturity report.

### Objectives
- Build an interactive web-based DevOps maturity assessment with 18 questions across 6 categories
- Implement a scoring engine that calculates category-level and overall maturity percentages
- Visualize results with a radar chart and provide targeted improvement recommendations
- Add PDF export for assessment reports

### Key Features
- **Multi-category Assessment:** 18 questions across CI/CD, Infrastructure as Code, Monitoring & Observability, Culture & Collaboration, Security (DevSecOps), and Testing & Quality
- **Interactive Wizard:** Step-by-step assessment flow with progress tracking and category icons
- **Radar Chart Visualization:** Custom SVG radar chart mapping strengths and weaknesses
- **Maturity Level Scoring:** 5-level maturity model (Initial → Optimized) with percentage-based thresholds
- **Actionable Recommendations:** Category-specific improvement suggestions based on current score
- **Responsive Design:** Works on desktop and mobile devices

---

## 🛠️ Technology Stack

### Core Technologies
- **Programming Language:** TypeScript
- **Framework:** React 18 + Vite
- **UI Library:** shadcn/ui + Tailwind CSS
- **Charting:** Custom SVG Radar Chart + Recharts
- **Database:** None (client-side state management)

### DevOps Tools
- **Version Control:** Git
- **CI/CD:** N/A
- **Containerization:** Docker
- **Orchestration:** N/A
- **Configuration Management:** N/A
- **Monitoring:** N/A

---

## 🚀 Getting Started

### Prerequisites
- [ ] Docker Desktop v20.10+
- [ ] Git 2.30+
- [ ] Node.js 18+
- [ ] npm 9+

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ShreeyaSahai/devopsproject-devops-maturity-assessment-tool.git
   cd devopsproject-devops-maturity-assessment-tool
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Access the application:
   - Web Interface: http://localhost:8080

### Build for Production
```bash
npm run build
npm run preview
```

### Alternative Installation (With Docker)
```bash
docker build -t devops-maturity-assessment:latest .
docker run -p 8080:8080 devops-maturity-assessment:latest
```
---

## 📁 Project Structure

```
devopsproject-devops-maturity-assessment-tool/
│
├── README.md                           # Main project documentation
├── .gitignore                          # Git ignore file
├── package.json                        # Node.js dependencies
├── vite.config.ts                      # Vite build configuration
├── tailwind.config.ts                  # Tailwind CSS configuration
├── tsconfig.json                       # TypeScript configuration
├── index.html                          # Entry HTML file
│
├── src/                                # Source code
│   ├── main.tsx                        # Application entry point
│   ├── App.tsx                         # Root component with routing
│   ├── App.css                         # Global styles
│   ├── index.css                       # Tailwind & design tokens
│   ├── vite-env.d.ts                   # Vite type declarations
│   │
│   ├── components/                     # React components
│   │   ├── AssessmentWizard.tsx        # Multi-step assessment form
│   │   ├── AssessmentResults.tsx       # Results display with recommendations
│   │   ├── RadarChart.tsx              # Custom SVG radar chart
│   │   ├── NavLink.tsx                 # Navigation link component
│   │   └── ui/                         # shadcn/ui component library
│   │
│   ├── data/                           # Data & configuration
│   │   └── assessmentQuestions.ts      # Questions, categories, scoring logic
│   │
│   ├── hooks/                          # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   │
│   ├── lib/                            # Utility functions
│   │   └── utils.ts
│   │
│   ├── pages/                          # Page components
│   │   ├── Index.tsx                   # Main assessment page
│   │   └── NotFound.tsx                # 404 page
│   │
│   └── test/                           # Test files
│       ├── setup.ts
│       └── example.test.ts
|
├── infrastructure/
|   ├── docker/
|       ├── Dockerfile
|       ├── docker-compose.yml
|       └── nginx.conf
|
├── deliverables/
|       ├── Demo Video.mp4
|       └── DevOps Maturity Assessment Tool Presentation.pptx

```

---

## ⚙️ Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_APP_ENV=development
VITE_APP_TITLE=DevOps Maturity Assessment Tool
```

### Key Configuration Files
1. `tailwind.config.ts` - Design system and theme configuration
2. `vite.config.ts` - Build and dev server configuration
3. `tsconfig.json` - TypeScript compiler options

---

## 🔄 CI/CD Pipeline

### Pipeline Stages
1. **Code Quality Check** - ESLint linting and TypeScript type checking
2. **Build** - Vite production build
3. **Test** - Run unit tests with Vitest
4. **Security Scan** - Trivy vulnerability scanning
5. **Deploy to Staging** - Automatic deployment on develop branch
6. **Deploy to Production** - Manual approval required for main branch

## 🧪 Testing

### Test Types
- **Unit Tests:** `npm test` (Vitest)
- **Integration Tests:** `npm run test:integration`
- **E2E Tests:** Selenium-based UI tests

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage
Target: >80% code coverage

---

## 📊 Monitoring & Logging

### Monitoring Setup
- **Nagios:** Configured for system monitoring
- **Custom Metrics:** Application-specific metrics
- **Alerts:** Email/Slack notifications

### Logging
- Structured JSON logging
- Browser console logging for development
- Log retention: 30 days

---
### Docker Images
```bash
# Build image
docker build -t devopsproject-devops-maturity-assessment-tool:latest .

# Run container
docker run -p 8080:8080 devopsproject-devops-maturity-assessment-tool:latest
```
---
## 🎥 Demo video

[Watch the Demo Video](./deliverables/Demo%20Video.mp4)
---

## 🔀 Development Workflow

### Git Branching Strategy
```
main
├── develop
│   ├── feature/assessment-wizard
│   ├── feature/radar-chart
│   └── hotfix/scoring-fix
└── release/v1.0.0
```

### Commit Convention
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `test:` Test-related
- `refactor:` Code refactoring
- `chore:` Maintenance tasks

---

## 🔒 Security

### Security Measures Implemented
- [x] Input validation and sanitization
- [x] Environment-based configuration
- [ ] Authentication and authorization
- [ ] Regular dependency updates
- [ ] Security headers in web applications

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 💡 Project Challenges

1. **Custom Radar Chart:** Built a custom SVG radar chart from scratch since existing libraries didn't match the design requirements. Solved by computing polygon coordinates using trigonometry.
2. **Scoring Algorithm:** Designing a fair scoring system across categories with different question counts. Solved by normalizing scores to percentages per category.
3. **Responsive Design:** Making the radar chart and results layout work across screen sizes. Solved with responsive SVG viewBox and Tailwind breakpoints.

## 📖 Learnings
- Building custom SVG visualizations in React
- Implementing multi-step wizard forms with state management
- Designing maturity assessment frameworks based on DORA metrics
- Tailwind CSS theming with HSL-based design tokens
