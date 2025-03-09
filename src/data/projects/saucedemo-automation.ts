import { Project } from '../../types/Project';

const saucedemoAutomation: Project = {
  id: "saucedemo-automation",
  title: "SauceDemo E2E Test Automation",
  description: "End-to-end test automation for the SauceDemo e-commerce website using WebdriverIO and Mocha",
  image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80",
  tags: ["WebdriverIO", "JavaScript", "Mocha", "E2E Testing"],
  githubUrl: "#",
  liveUrl: "#",
  longDescription: "A comprehensive end-to-end test automation suite for the SauceDemo e-commerce platform. This project implements the Page Object Model design pattern and includes detailed reporting capabilities. The test suite covers all critical user flows including login, product browsing, cart management, and checkout processes.",
  features: [
    "Page Object Model implementation",
    "Cross-browser testing",
    "Visual regression testing",
    "Parallel test execution",
    "Detailed HTML reports",
    "CI/CD integration"
  ],
  technologies: [
    "WebdriverIO",
    "JavaScript",
    "Mocha",
    "Chai",
    "Allure Reports",
    "GitHub Actions"
  ]
};

export default saucedemoAutomation;