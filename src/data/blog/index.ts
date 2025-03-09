import { BlogPost } from '../../types/BlogPost';
import testAutomationFramework from './test-automation-framework-design';
import apiTestingStrategies from './effective-api-testing';
import cicdPipelineIntegration from './cicd-pipeline-integration';
import mobileAppTesting from './mobile-app-testing';
import performanceTesting from './performance-testing-fundamentals';
import securityTesting from './security-testing';
import testDataManagement from './test-data-management';
import whatIsQualityAssurance from './what-is-quality-assurance';
import qaProcessLifecycle from './qa-process-lifecycle';
import testLevelsAndTypes from './test-levels-and-types';
import testScenariosAndCases from './test-scenarios-and-cases';
import bugClassificationReporting from './bug-classification-reporting';

// Export all blog posts as an array
const blogPosts: BlogPost[] = [
  whatIsQualityAssurance,
  qaProcessLifecycle,
  testLevelsAndTypes,
  testScenariosAndCases,
  bugClassificationReporting,
  testAutomationFramework,
  apiTestingStrategies,
  cicdPipelineIntegration,
  mobileAppTesting,
  performanceTesting,
  securityTesting,
  testDataManagement
];

export default blogPosts;

// Helper function to find a blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Helper function to get related posts
export const getRelatedPosts = (currentSlug: string, limit: number = 2): BlogPost[] => {
  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit)
    .map(post => ({
      title: post.title,
      slug: post.slug,
      image: post.image
    })) as BlogPost[];
};