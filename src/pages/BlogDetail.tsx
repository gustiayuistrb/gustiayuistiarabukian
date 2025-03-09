import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, Share2, Bookmark, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getBlogPostBySlug, getRelatedPosts } from '../data/blog';

function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || '');
  const relatedPosts = getRelatedPosts(slug || '');
  const [isSaved, setIsSaved] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState('');

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Blog post not found</h1>
        <Link to="/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
          Back to Blog
        </Link>
      </div>
    );
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setTooltipMessage('URL copied to clipboard!');
      setShowShareTooltip(true);
      setTimeout(() => setShowShareTooltip(false), 2000);
    } catch (err) {
      setTooltipMessage('Failed to copy URL');
      setShowShareTooltip(true);
      setTimeout(() => setShowShareTooltip(false), 2000);
    }
  };

  const handleShare = async () => {
    // Always use clipboard method for better compatibility
    await copyToClipboard();
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    const savedPosts = JSON.parse(localStorage.getItem('savedPosts') || '[]');
    
    if (!isSaved) {
      // Save the post
      savedPosts.push({
        slug: post.slug,
        title: post.title,
        date: post.date,
        savedAt: new Date().toISOString()
      });
    } else {
      // Remove the post
      const index = savedPosts.findIndex((p: { slug: string }) => p.slug === post.slug);
      if (index > -1) {
        savedPosts.splice(index, 1);
      }
    }
    
    localStorage.setItem('savedPosts', JSON.stringify(savedPosts));
  };

  // Check if post is saved on component mount
  React.useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('savedPosts') || '[]');
    const isSavedPost = savedPosts.some((p: { slug: string }) => p.slug === post.slug);
    setIsSaved(isSavedPost);
  }, [post.slug]);

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        to="/blog"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-8"
      >
        <ChevronLeft className="w-5 h-5 mr-2" />
        Back to Blog
      </Link>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />

          <div className="p-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-end space-x-4 mb-6 relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleShare}
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 relative"
                aria-label="Share post"
              >
                <Share2 className="w-5 h-5" />
                <AnimatePresence>
                  {showShareTooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap"
                    >
                      {tooltipMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSave}
                className={`${
                  isSaved ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
                } hover:text-blue-600 dark:hover:text-blue-400`}
                aria-label={isSaved ? 'Remove from saved' : 'Save post'}
              >
                <Bookmark className="w-5 h-5" fill={isSaved ? 'currentColor' : 'none'} />
              </motion.button>
            </div>

            <div 
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Related Posts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Link
                  key={index}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center mt-2 text-blue-600 dark:text-blue-400">
                      Read more <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </motion.article>
    </div>
  );
}

export default BlogDetail;