import React from 'react';
import { BookOpen, TestTube, Coffee, Bug, Workflow, Users } from 'lucide-react';

function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">About Me</h1>
        
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQGEsOwsa1YbNw/profile-displayphoto-shrink_800_800/B56ZPovDuUHQAg-/0/1734776471503?e=1746057600&v=beta&t=ubW0T7nv7Tik_9OFAjdS7hJ82_5Glk2pOq6o_9VYVrw"
            alt="Profile"
            className="w-64 h-64 rounded-xl object-cover shadow-lg"
          />
          <div>
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-50">
              Hello! I’m Gusti Ayu Istiara Bukian, a Software Quality Assurance enthusiast skilled in both manual testing and test automation. I’m passionate about ensuring software is reliable, user-friendly, and performs well.  
            </p>
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-50">
              I work closely with developers to create efficient testing solutions, whether through manual testing or automation, that help catch issues early and improve software quality. I’m also excited by continuous integration and delivery as tools to enhance the development process.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-50">
              Always ready to learn and grow, I look forward to tackling new challenges and improving the quality of the software I test.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Technical Skills</h2>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700 dark:text-gray-50">
                <TestTube className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                Test Automation (Selenium, Cypress)
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-50">
                <Bug className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                Manual & Exploratory Testing
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-50">
                <Workflow className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                CI/CD Implementation
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Interests</h2>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700 dark:text-gray-50">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                Test Architecture Design
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-50">
                <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                Quality Advocacy
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-50">
                <Coffee className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                Automation Best Practices
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Professional Experience</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-blue-100 dark:border-blue-900">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">SDET</h3>
                    <p className="text-blue-600 dark:text-blue-400">Agros Indonesia • Dec 2024 - Present</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-50">
                      Work with developer to ensure quality in development of AGROS Disbursement and all software in AGROS.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-blue-200 dark:border-blue-900"></div>
              </div>

              <div className="relative flex items-center justify-end">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-blue-200 dark:border-blue-900"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-blue-100 dark:border-blue-900">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">QA Engineer Intern</h3>
                    <p className="text-blue-600 dark:text-blue-400">AssistX Enterprise • Nov 2024 - Present</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-50">
                      Create test case, collaborated with development teams to improve test coverage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="w-1/2 pr-8">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-blue-100 dark:border-blue-900">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Freelance Web Developer</h3>
                    <p className="text-blue-600 dark:text-blue-400">PT Motasa Indonesia • May 2024 - Jun 2024</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-50">
                      Collab with developer to create PSM ATL Management System
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-blue-200 dark:border-blue-900"></div>
              </div>

              <div className="relative flex items-center justify-end">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-blue-200 dark:border-blue-900"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-blue-100 dark:border-blue-900">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Front End Web Developer Intern</h3>
                    <p className="text-blue-600 dark:text-blue-400">PT Sinergi Informatika Semen Indonesia • Jan 2022 - Apr 2022</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-50">
                      Contribute to creating a web application named "Monitoring Tools (MoTo)" using ReactJS and Laravel
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;