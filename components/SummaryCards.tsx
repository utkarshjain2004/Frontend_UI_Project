'use client';

import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Award, Clock } from 'lucide-react';

const cardData = [
  {
    id: 1,
    label: 'Attendance',
    value: '92%',
    icon: BookOpen,
    color: 'from-emerald-500/20 to-emerald-600/20',
    borderColor: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
  },
  {
    id: 2,
    label: 'CGPA',
    value: '9.23',
    icon: TrendingUp,
    color: 'from-indigo-500/20 to-indigo-600/20',
    borderColor: 'border-indigo-500/30',
    iconColor: 'text-indigo-400',
  },
  {
    id: 3,
    label: 'Total Credits',
    value: '120',
    icon: Award,
    color: 'from-purple-500/20 to-purple-600/20',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-400',
  },
  {
    id: 4,
    label: 'Upcoming Exams',
    value: '3',
    icon: Clock,
    color: 'from-orange-500/20 to-orange-600/20',
    borderColor: 'border-orange-500/30',
    iconColor: 'text-orange-400',
  },
];

export default function SummaryCards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {cardData.map((card) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.id}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`bg-gradient-to-br ${card.color} backdrop-blur-xl border ${card.borderColor} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all cursor-pointer group`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium mb-2">
                  {card.label}
                </p>
                <p className="text-3xl font-bold text-gray-100">
                  {card.value}
                </p>
              </div>
              <div className="p-3 bg-slate-700/50 rounded-lg group-hover:bg-slate-600/50 transition-colors">
                <Icon className={`w-6 h-6 ${card.iconColor}`} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
