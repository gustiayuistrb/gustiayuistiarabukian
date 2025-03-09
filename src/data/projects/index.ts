import { Project } from '../../types/Project';
import ecommerceTestAutomation from './ecommerce-test-automation';
import apiTestingFramework from './api-testing-framework';
import mobileTestingSuite from './mobile-testing-suite';
import saucedemoAutomation from './saucedemo-automation';
import demoblazeAutomation from './demoblaze-automation';
import fakeRestApiKatalon from './fake-rest-api-katalon';
import myDemoAppAppium from './my-demo-app-appium';
import reqresApiMochaChai from './reqres-api-mocha-chai';

// Export all projects as an array
const projects: Project[] = [
  ecommerceTestAutomation,
  apiTestingFramework,
  mobileTestingSuite,
  saucedemoAutomation,
  demoblazeAutomation,
  fakeRestApiKatalon,
  myDemoAppAppium,
  reqresApiMochaChai
];

export default projects;

// Helper function to find a project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};