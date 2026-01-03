import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found | Stafford Group & Associates';
  }, []);

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary-800 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 max-w-lg mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn btn-primary">
              <Home size={20} className="mr-2" /> Go Home
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="btn btn-outline"
            >
              <ArrowLeft size={20} className="mr-2" /> Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;