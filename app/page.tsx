'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import SummaryCards from '@/components/SummaryCards';
import AttendanceChart from '@/components/AttendanceChart';
import EventsList from '@/components/EventsList';

export default function Dashboard() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <SummaryCards />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <AttendanceChart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <EventsList />
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}
