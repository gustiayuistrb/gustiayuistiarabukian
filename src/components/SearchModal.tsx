import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  type: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  // Sample search data - in a real app, this would come from your backend
  const searchData: SearchResult[] = [
    {
      title: "Test Automation Best Practices",
      description: "Learn about the latest test automation practices and tools",
      url: "/blog",
      type: "Blog"
    },
    {
      title: "API Testing Framework",
      description: "A comprehensive API testing framework for your projects",
      url: "/resources",
      type: "Resource"
    },
    {
      title: "E-commerce Test Suite",
      description: "End-to-end test automation suite for e-commerce platforms",
      url: "/projects",
      type: "Project"
    },
    // Add more searchable content here
  ];

  useEffect(() => {
    if (searchQuery) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  const handleResultClick = (url: string) => {
    navigate(url);
    onClose();
    setSearchQuery('');
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl mx-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 border-b dark:border-gray-700">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search everything..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
                  autoFocus
                />
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {results.length > 0 ? (
                <div className="p-2">
                  {results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
                      onClick={() => handleResultClick(result.url)}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900 dark:text-white">{result.title}</h3>
                        <span className="text-sm text-purple-600 dark:text-purple-400">{result.type}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{result.description}</p>
                    </motion.div>
                  ))}
                </div>
              ) : searchQuery ? (
                <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                  No results found for "{searchQuery}"
                </div>
              ) : null}
            </div>

            <div className="p-4 border-t dark:border-gray-700 flex justify-between text-sm text-gray-500 dark:text-gray-400">
              <div>Press <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">ESC</kbd> to close</div>
              <button
                onClick={onClose}
                className="hover:text-gray-700 dark:hover:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SearchModal;