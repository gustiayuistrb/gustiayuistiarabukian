import { Project } from '../../types/Project';

const ecommerceTestAutomation: Project = {
  id: "ecommerce-test-automation",
  title: "E-commerce Test Automation Framework",
  description: "End-to-end test automation suite using Selenium WebDriver and TestNG for a major e-commerce platform",
  image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80",
  tags: ["Selenium", "TestNG", "Java", "Jenkins"],
  githubUrl: "#",
  liveUrl: "#",
  longDescription: "A comprehensive test automation framework built for a large-scale e-commerce platform. This framework implements the Page Object Model design pattern and includes detailed reporting capabilities.",
  features: [
    "Data-driven testing approach",
    "Parallel execution support",
    "Detailed HTML reports",
    "Screenshot capture on failure",
    "Cross-browser testing capability"
  ],
  technologies: [
    "Selenium WebDriver",
    "TestNG",
    "Java",
    "Maven",
    "Jenkins",
    "Extent Reports"
  ]
};

export default ecommerceTestAutomation;