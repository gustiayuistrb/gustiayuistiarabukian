import { Project } from '../../types/Project';

const myDemoAppAppium: Project = {
  id: "my-demo-app-appium",
  title: "My Demo App by Sauce Labs - Mobile Testing",
  description: "Mobile automation testing framework for My Demo App by Sauce Labs using Appium and JavaScript",
  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  tags: ["Appium", "Mobile Testing", "JavaScript", "Sauce Labs"],
  githubUrl: "#",
  liveUrl: "#",
  longDescription: "A comprehensive mobile automation testing framework for My Demo App by Sauce Labs. This project demonstrates effective mobile testing strategies using Appium for both Android and iOS platforms. The framework includes tests for all key user flows including login, product browsing, cart management, and checkout processes on mobile devices.",
  features: [
    "Cross-platform testing (iOS & Android)",
    "Page Object Model implementation",
    "Gesture automation",
    "Device rotation testing",
    "Screenshot capture on failure",
    "Sauce Labs integration"
  ],
  technologies: [
    "Appium",
    "JavaScript",
    "WebdriverIO",
    "Mocha",
    "Chai",
    "Sauce Labs"
  ]
};

export default myDemoAppAppium;