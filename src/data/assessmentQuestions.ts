export interface Question {
  id: string;
  text: string;
  category: string;
  options: { label: string; score: number }[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  { id: "ci-cd", name: "CI/CD", icon: "🔄", description: "Continuous Integration & Delivery practices" },
  { id: "infrastructure", name: "Infrastructure as Code", icon: "🏗️", description: "Infrastructure automation & management" },
  { id: "monitoring", name: "Monitoring & Observability", icon: "📊", description: "System visibility & incident response" },
  { id: "culture", name: "Culture & Collaboration", icon: "🤝", description: "Team practices & communication" },
  { id: "security", name: "Security (DevSecOps)", icon: "🔒", description: "Security integration in the pipeline" },
  { id: "testing", name: "Testing & Quality", icon: "🧪", description: "Automated testing & quality gates" },
];

export const questions: Question[] = [
  // CI/CD
  {
    id: "cicd-1",
    text: "How frequently does your team deploy to production?",
    category: "ci-cd",
    options: [
      { label: "Rarely (monthly or less)", score: 1 },
      { label: "Bi-weekly or weekly", score: 2 },
      { label: "Multiple times per week", score: 3 },
      { label: "On-demand / multiple times per day", score: 4 },
    ],
  },
  {
    id: "cicd-2",
    text: "What is the level of automation in your build and deployment pipeline?",
    category: "ci-cd",
    options: [
      { label: "Mostly manual processes", score: 1 },
      { label: "Some scripts but manual triggers", score: 2 },
      { label: "Automated pipeline with manual gates", score: 3 },
      { label: "Fully automated with auto-rollback", score: 4 },
    ],
  },
  {
    id: "cicd-3",
    text: "How do you manage release versioning and artifacts?",
    category: "ci-cd",
    options: [
      { label: "No formal versioning", score: 1 },
      { label: "Manual versioning, ad-hoc artifact storage", score: 2 },
      { label: "Semantic versioning with artifact repository", score: 3 },
      { label: "Automated versioning with immutable artifacts", score: 4 },
    ],
  },
  // Infrastructure
  {
    id: "infra-1",
    text: "How is your infrastructure provisioned?",
    category: "infrastructure",
    options: [
      { label: "Manually configured servers", score: 1 },
      { label: "Scripted but not version controlled", score: 2 },
      { label: "IaC tools (Terraform/Pulumi) with version control", score: 3 },
      { label: "Fully declarative, immutable infrastructure with GitOps", score: 4 },
    ],
  },
  {
    id: "infra-2",
    text: "What is your containerization adoption level?",
    category: "infrastructure",
    options: [
      { label: "No containers", score: 1 },
      { label: "Some services containerized", score: 2 },
      { label: "Most services in containers with orchestration", score: 3 },
      { label: "Full container orchestration with auto-scaling (K8s)", score: 4 },
    ],
  },
  {
    id: "infra-3",
    text: "How do you manage environment configurations?",
    category: "infrastructure",
    options: [
      { label: "Hardcoded or manually managed", score: 1 },
      { label: "Config files per environment", score: 2 },
      { label: "Centralized config management (Consul/Vault)", score: 3 },
      { label: "Dynamic config with feature flags and secrets management", score: 4 },
    ],
  },
  // Monitoring
  {
    id: "mon-1",
    text: "What is your monitoring coverage?",
    category: "monitoring",
    options: [
      { label: "Basic uptime checks only", score: 1 },
      { label: "Infrastructure metrics (CPU, memory, disk)", score: 2 },
      { label: "Application metrics, logs, and traces", score: 3 },
      { label: "Full observability with distributed tracing and SLOs", score: 4 },
    ],
  },
  {
    id: "mon-2",
    text: "How do you handle incident response?",
    category: "monitoring",
    options: [
      { label: "React when users report issues", score: 1 },
      { label: "Basic alerting via email", score: 2 },
      { label: "PagerDuty/OpsGenie with runbooks", score: 3 },
      { label: "Automated remediation with blameless post-mortems", score: 4 },
    ],
  },
  {
    id: "mon-3",
    text: "How do you track Mean Time To Recovery (MTTR)?",
    category: "monitoring",
    options: [
      { label: "We don't track it", score: 1 },
      { label: "Tracked manually after incidents", score: 2 },
      { label: "Automated tracking with dashboards", score: 3 },
      { label: "Continuously optimized with targets under 1 hour", score: 4 },
    ],
  },
  // Culture
  {
    id: "cult-1",
    text: "How do development and operations teams collaborate?",
    category: "culture",
    options: [
      { label: "Siloed teams with handoffs", score: 1 },
      { label: "Some shared meetings and communication", score: 2 },
      { label: "Cross-functional teams with shared ownership", score: 3 },
      { label: "Full DevOps culture with embedded SRE practices", score: 4 },
    ],
  },
  {
    id: "cult-2",
    text: "How does your team approach knowledge sharing?",
    category: "culture",
    options: [
      { label: "Tribal knowledge, minimal documentation", score: 1 },
      { label: "Some wiki pages, occasional demos", score: 2 },
      { label: "Regular tech talks, well-maintained docs", score: 3 },
      { label: "Internal developer portal, learning culture, guilds", score: 4 },
    ],
  },
  {
    id: "cult-3",
    text: "How do you handle failure and blameless culture?",
    category: "culture",
    options: [
      { label: "Blame individuals for failures", score: 1 },
      { label: "Informal post-mortems sometimes", score: 2 },
      { label: "Structured blameless post-mortems", score: 3 },
      { label: "Failure is celebrated as learning; chaos engineering practiced", score: 4 },
    ],
  },
  // Security
  {
    id: "sec-1",
    text: "When is security considered in your development lifecycle?",
    category: "security",
    options: [
      { label: "Only before release (if at all)", score: 1 },
      { label: "During QA phase", score: 2 },
      { label: "Integrated in CI pipeline (SAST/DAST)", score: 3 },
      { label: "Shift-left: security from design through deployment", score: 4 },
    ],
  },
  {
    id: "sec-2",
    text: "How do you manage secrets and credentials?",
    category: "security",
    options: [
      { label: "Hardcoded in source code", score: 1 },
      { label: "Environment variables, not rotated", score: 2 },
      { label: "Secrets manager (Vault/AWS Secrets Manager)", score: 3 },
      { label: "Dynamic secrets with automatic rotation and audit trails", score: 4 },
    ],
  },
  {
    id: "sec-3",
    text: "How do you handle vulnerability scanning?",
    category: "security",
    options: [
      { label: "No scanning", score: 1 },
      { label: "Occasional manual scans", score: 2 },
      { label: "Automated scanning in CI (Trivy, Snyk)", score: 3 },
      { label: "Continuous scanning with auto-blocking and SBOMs", score: 4 },
    ],
  },
  // Testing
  {
    id: "test-1",
    text: "What is your automated test coverage?",
    category: "testing",
    options: [
      { label: "No automated tests", score: 1 },
      { label: "Some unit tests (<30% coverage)", score: 2 },
      { label: "Good coverage (>60%) with integration tests", score: 3 },
      { label: ">80% coverage with unit, integration, E2E, and performance tests", score: 4 },
    ],
  },
  {
    id: "test-2",
    text: "How are tests integrated into your pipeline?",
    category: "testing",
    options: [
      { label: "Tests run manually before release", score: 1 },
      { label: "Tests run on CI but failures don't block", score: 2 },
      { label: "Tests are quality gates that block merges", score: 3 },
      { label: "Tests include canary deploys and production verification", score: 4 },
    ],
  },
  {
    id: "test-3",
    text: "How do you manage test environments?",
    category: "testing",
    options: [
      { label: "Shared, long-lived test environment", score: 1 },
      { label: "Dedicated environments, manually provisioned", score: 2 },
      { label: "On-demand ephemeral environments", score: 3 },
      { label: "Preview environments per PR with production parity", score: 4 },
    ],
  },
];

export const maturityLevels = [
  {
    level: 1,
    name: "Initial",
    description: "Processes are mostly manual with limited automation.",
    color: "#ef4444",
    range: [0, 26],
  },
  {
    level: 2,
    name: "Managed",
    description: "Some DevOps practices are implemented but not consistently.",
    color: "#f59e0b",
    range: [26, 50],
  },
  {
    level: 3,
    name: "Defined",
    description: "DevOps practices are standardized with good automation.",
    color: "#3b82f6",
    range: [50, 75],
  },
  {
    level: 4,
    name: "Optimized",
    description: "Highly mature DevOps practices with full automation and monitoring.",
    color: "#10b981",
    range: [75, 101],
  },
];

export const recommendations: Record<string, Record<number, string>> = {
  "ci-cd": {
    1: "Start by implementing a basic CI pipeline using GitHub Actions or Jenkins. Automate your build process first.",
    2: "Add automated deployment to a staging environment. Implement artifact versioning.",
    3: "Implement canary deployments and feature flags. Add auto-rollback capabilities.",
    4: "Continue optimizing deployment frequency. Consider progressive delivery and A/B testing in production.",
  },
  infrastructure: {
    1: "Begin containerizing applications with Docker. Start using Terraform for basic infrastructure.",
    2: "Adopt Kubernetes for orchestration. Version control all infrastructure code.",
    3: "Implement GitOps workflows. Add auto-scaling and self-healing infrastructure.",
    4: "Explore advanced patterns like service mesh and multi-cloud strategies.",
  },
  monitoring: {
    1: "Implement basic monitoring with Prometheus/Grafana. Set up uptime monitoring.",
    2: "Add application-level metrics and structured logging. Implement alerting.",
    3: "Adopt distributed tracing (Jaeger/Zipkin). Define SLOs and error budgets.",
    4: "Implement AIOps for anomaly detection. Practice chaos engineering regularly.",
  },
  culture: {
    1: "Start breaking down silos. Introduce shared stand-ups between dev and ops.",
    2: "Create cross-functional teams. Implement blameless post-mortems.",
    3: "Establish internal developer portals and guilds. Invest in learning culture.",
    4: "Foster innovation through hackathons. Embed SRE practices across the organization.",
  },
  security: {
    1: "Immediately stop hardcoding secrets. Implement basic SAST scanning.",
    2: "Integrate security scanning into CI/CD. Adopt a secrets management solution.",
    3: "Implement shift-left security. Add SBOM generation and supply chain security.",
    4: "Practice red team exercises. Implement zero-trust architecture patterns.",
  },
  testing: {
    1: "Start writing unit tests for critical paths. Set up a test framework.",
    2: "Add integration tests and make tests part of CI. Aim for 60% coverage.",
    3: "Implement E2E tests with ephemeral environments. Add performance testing.",
    4: "Adopt contract testing for microservices. Implement production testing safely.",
  },
};
