import React from 'react';
import { ArrowRight, TestTube, Bug, Terminal, Workflow, Gauge, Shield, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const testingTools = [
    { name: "Selenium", category: "UI Automation", icon: Laptop, color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" },
    { name: "WebdriverIO", category: "E2E Testing", icon: Terminal, color: "bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-400" },
    { name: "Cypress", category: "E2E Testing", icon: TestTube, color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" },
    { name: "Katalon", category: "Test Automation", icon: TestTube, color: "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400" },
    { name: "Postman", category: "API Testing", icon: Workflow, color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" },
    { name: "JMeter", category: "Performance", icon: Gauge, color: "bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-400" },
    { name: "Allure", category: "Reporting", icon: Shield, color: "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400" },
    { name: "Appium", category: "Mobile Testing", icon: TestTube, color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" },
    { name: "OWASP ZAP", category: "Security", icon: Shield, color: "bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-400" }
  ];

  return (
    <div className="container py-8 sm:py-12">
      <section className="text-center mb-12 sm:mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white"
        >
          Hi, I'm Gusti Ayu Istiara Bukian
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-700 dark:text-gray-50 max-w-2xl mx-auto mb-6 sm:mb-8 px-4"
        >
          A dedicated Software Quality Assurance Engineer passionate about ensuring software excellence through comprehensive testing and automation
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors transform hover:scale-105"
          >
            Let's collaborate <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card p-6"
        >
          <TestTube className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Manual Testing</h3>
          <p className="text-gray-700 dark:text-gray-50">
            Crafting robust automated test suites using WebdriverIO, Cypress, Selenium, Katalon, and other modern testing frameworks
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="card p-6"
        >
          <Bug className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-600 dark:text-cyan-400 mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Quality Assurance</h3>
          <p className="text-gray-700 dark:text-gray-50">
            Ensuring software reliability through comprehensive testing strategies and best practices
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="card p-6"
        >
          <Terminal className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600 dark:text-indigo-400 mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Automation Testing</h3>
          <p className="text-gray-700 dark:text-gray-50">
            Bridging development and testing with strong technical skills and testing frameworks
          </p>
        </motion.div>
      </section>

      <section className="mb-16 px-4">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Testing Tools Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 dark:text-gray-50 max-w-2xl mx-auto"
          >
            Proficient with industry-standard testing tools across various testing domains
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {testingTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-4 flex flex-col items-center text-center">
                <div className={`p-3 rounded-full ${tool.color} mb-3`}>
                  <tool.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{tool.name}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-50">{tool.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <Link
            to="/about"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            Learn more about my skills <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      <section className="text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 dark:text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="card"
          >
            <img
              src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80"
              alt="Test Automation Framework"
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">E-commerce Test Suite</h3>
              <p className="text-gray-700 dark:text-gray-50 mb-4">
                Comprehensive automated testing framework for a large-scale e-commerce platform using WebdriverIO, Cypress, and Allure reporting
              </p>
              <Link
                to="/projects"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium inline-flex items-center"
              >
                View details <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="card"
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              alt="API Testing Framework"
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">API Testing Framework</h3>
              <p className="text-gray-700 dark:text-gray-50 mb-4">
                Automated API testing solution using Katalon Studio and comprehensive reporting with Allure
              </p>
              <Link
                to="/projects"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium inline-flex items-center"
              >
                View details <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;