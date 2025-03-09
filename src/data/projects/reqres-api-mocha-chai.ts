import { Project } from '../../types/Project';

const reqresApiMochaChai: Project = {
  id: "reqres-api-mocha-chai",
  title: "Reqres API Testing Framework",
  description: "API testing framework for Reqres REST API using Mocha, Chai, and SuperTest",
  image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?auto=format&fit=crop&w=800&q=80",
  tags: ["API Testing", "Mocha", "Chai", "JavaScript"],
  githubUrl: "#",
  liveUrl: "#",
  longDescription: "A robust API testing framework built for testing the Reqres REST API. This project uses Mocha as the test runner, Chai for assertions, and SuperTest for making HTTP requests. The framework includes comprehensive test coverage for all API endpoints, with tests for positive scenarios, edge cases, and error conditions.",
  features: [
    "Data-driven testing approach",
    "Response schema validation",
    "Status code verification",
    "Response body validation",
    "Error handling testing",
    "Detailed HTML reports"
  ],
  technologies: [
    "Mocha",
    "Chai",
    "SuperTest",
    "JavaScript",
    "Mochawesome Reporter",
    "GitHub Actions"
  ]
};

export default reqresApiMochaChai;