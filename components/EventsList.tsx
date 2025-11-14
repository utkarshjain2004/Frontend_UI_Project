'use client';

import { motion } from 'framer-motion';
import { Calendar, AlertCircle, FileText, Trophy, Users } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Software Architecture Exam',
    date: 'Nov 13, 2025',
    type: 'exam',
    icon: Calendar,
  },
  {
    id: 2,
    title: 'Frontend Project Submission',
    date: 'Nov 15, 2025',
    type: 'deadline',
    icon: FileText,
  },
  {
    id: 3,
    title: 'Guest Lecture - ML in Industry',
    date: 'Nov 19, 2025',
    type: 'event',
    icon: Users,
  },
  {
    id: 4,
    title: 'End-semester Assessment',
    date: 'Nov 20, 2025',
    type: 'alert',
    icon: AlertCircle,
  },
  {
    id: 5,
    title: 'Coding Competition',
    date: 'Nov 23, 2025',
    type: 'event',
    icon: Trophy,
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'exam':
      return 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400';
    case 'deadline':
      return 'bg-orange-500/10 border-orange-500/30 text-orange-400';
    case 'event':
      return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400';
    case 'alert':
      return 'bg-red-500/10 border-red-500/30 text-red-400';
    default:
      return 'bg-gray-500/10 border-gray-500/30 text-gray-400';
  }
};

export default function EventsList() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-100">
          Upcoming Events
        </h3>
        <p className="text-sm text-gray-400 mt-1">
          Stay updated with important dates
        </p>
      </div>

      <motion.div
        className="space-y-3 max-h-[400px] overflow-y-auto pr-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {events.map((event) => {
          const Icon = event.icon;
          const colorClass = getTypeColor(event.type);

          return (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="border border-slate-700/50 rounded-lg p-4 hover:bg-slate-700/30 transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-lg border ${colorClass} flex-shrink-0 mt-0.5`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-100 truncate">
                    {event.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {event.date}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-6 pt-4 border-t border-slate-700/50">
        <button className="w-full py-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
          View All Events →
        </button>
      </div>
    </motion.div>
  );
}
