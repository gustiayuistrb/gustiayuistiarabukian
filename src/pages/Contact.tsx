import React from 'react';
import { Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Get in Touch</h1>
      
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
        >
          <div className="p-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h2>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <a href="ayuistiara2412@gmail.com" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    ayuistiara2412@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p className="text-gray-900 dark:text-white">Jawa Timur, Indonesia</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Connect With Me</h2>
                
                <a 
                  href="https://github.com/gustiayuistrb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full">
                    <Github className="w-6 h-6 text-gray-900 dark:text-gray-100" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">GitHub</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">View my projects</p>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/gustiayuistiarabukian" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                    <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">LinkedIn</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Connect with me</p>
                  </div>
                </a>

                <a 
                  href="https://instagram.com/ayu.istiara" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="bg-pink-100 dark:bg-pink-900/50 p-3 rounded-full">
                    <Instagram className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">Instagram</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Follow my journey</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-center text-gray-600 dark:text-gray-400">
                I'm always interested in hearing about new opportunities and connecting with fellow professionals.
                Feel free to reach out through any of the channels above!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;