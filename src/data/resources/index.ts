import { Resource } from '../../types/Resource';
import frameworks from './frameworks';
import documents from './documents';
import templates from './templates';
import tools from './tools';

// Export all resources as an array
const resources: Resource[] = [
  ...frameworks,
  ...documents,
  ...templates,
  ...tools
];

export default resources;

// Helper function to find a resource by ID
export const getResourceById = (id: string): Resource | undefined => {
  return resources.find(resource => resource.id === id);
};

// Helper function to get resources by type
export const getResourcesByType = (type: string): Resource[] => {
  return resources.filter(resource => resource.type === type);
};

// Helper function to get all unique resource types
export const getResourceTypes = (): string[] => {
  return Array.from(new Set(resources.map(resource => resource.type)));
};