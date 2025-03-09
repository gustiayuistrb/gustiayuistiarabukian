import { Project } from '../../types/Project';

const apiTestingFramework: Project = {
  id: "api-testing-framework",
  title: "API Testing Framework",
  description: "Robust API testing framework using RestAssured and JUnit for microservices architecture",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  tags: ["RestAssured", "JUnit", "Maven", "CircleCI"],
  githubUrl: "#",
  liveUrl: "#",
  longDescription: "A scalable API testing framework designed for testing microservices. Features include automated test generation, comprehensive validation, and integration with CI/CD pipelines.",
  features: [
    "Automated test generation",
    "Schema validation",
    "Performance metrics",
    "Environment configuration",
    "CI/CD integration"
  ],
  technologies: [
    "RestAssured",
    "JUnit",
    "Maven",
    "CircleCI",
    "JSON Schema Validator",
    "Swagger"
  ]
};

export default apiTestingFramework;