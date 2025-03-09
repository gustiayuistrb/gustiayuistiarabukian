import { Project } from '../../types/Project';

const demoblazeAutomation: Project = {
  id: "demoblaze-automation",
  title: "Demoblaze Test Automation",
  description: "Automated testing framework for Demoblaze e-commerce demo site using WebdriverIO and Cucumber",
  image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
  tags: ["WebdriverIO", "Cucumber", "BDD", "JavaScript"],
  githubUrl: "#",
  liveUrl: "#",
  longDescription: "A behavior-driven development (BDD) test automation framework for the Demoblaze demo e-commerce website. This project uses WebdriverIO with Cucumber to create human-readable test scenarios that serve as both documentation and automated tests. The framework covers product catalog browsing, shopping cart functionality, user authentication, and purchase workflows.",
  features: [
    "BDD approach with Gherkin syntax",
    "Reusable step definitions",
    "Screenshot capture on failure",
    "Custom reporter integration",
    "Data-driven testing",
    "Multi-environment configuration"
  ],
  technologies: [
    "WebdriverIO",
    "Cucumber",
    "JavaScript",
    "Chai",
    "Spec Reporter",
    "Jenkins"
  ]
};

export default demoblazeAutomation;