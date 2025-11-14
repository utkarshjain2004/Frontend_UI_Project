'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Bell, Settings } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-800/50 backdrop-blur-lg border-b border-slate-700/50 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">UL</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-gray-100">Utkarsh Lambade</h1>
              <p className="text-sm text-gray-400">Information Technology • 4th Year</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-gray-300" />
            </button>
            <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-gray-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-300" />
            ) : (
              <Menu className="w-5 h-5 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 pt-4 border-t border-slate-700/50 flex gap-4"
          >
            <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-gray-300" />
            </button>
            <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-gray-300" />
            </button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
