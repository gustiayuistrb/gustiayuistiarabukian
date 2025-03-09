import { Project } from '../../types/Project';

const mobileTestingSuite: Project = {
  id: "mobile-testing-suite",
  title: "Mobile App Testing Suite",
  description: "Automated testing solution for iOS and Android applications using Appium",
  image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
  tags: ["Appium", "JavaScript", "Mocha", "GitHub Actions"],
  githubUrl: "#",
  liveUrl: "#",
  longDescription: "A comprehensive mobile testing suite that supports both iOS and Android platforms. Includes real device testing, emulator support, and cloud device farm integration.",
  features: [
    "Cross-platform support",
    "Real device testing",
    "Cloud device integration",
    "Gesture automation",
    "Performance monitoring"
  ],
  technologies: [
    "Appium",
    "JavaScript",
    "Mocha",
    "GitHub Actions",
    "BrowserStack",
    "Sauce Labs"
  ]
};

export default mobileTestingSuite;