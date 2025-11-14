'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const attendanceData = [
  { week: 'Week 1', attendance: 95 },
  { week: 'Week 2', attendance: 92 },
  { week: 'Week 3', attendance: 88 },
  { week: 'Week 4', attendance: 94 },
  { week: 'Week 5', attendance: 96 },
  { week: 'Week 6', attendance: 91 },
  { week: 'Week 7', attendance: 93 },
  { week: 'Week 8', attendance: 92 },
];

export default function AttendanceChart() {
  const [isAnimated, setIsAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const CustomTooltip = (props: any) => {
    const { active, payload } = props;
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 shadow-lg">
          <p className="text-gray-200 text-sm">{payload[0].payload.week}</p>
          <p className="text-emerald-400 font-semibold">
            {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-xl"
    >
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-100 mb-2">
          Attendance Trend
        </h3>
        <p className="text-sm text-gray-400">
          Weekly attendance percentage over the semester
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, scaleY: 0.8 }}
        animate={isAnimated ? { opacity: 1, scaleY: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ originY: 0 }}
      >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(71, 85, 105, 0.2)" />
            <XAxis
              dataKey="week"
              stroke="rgba(148, 163, 184, 0.5)"
              style={{ fontSize: '0.875rem' }}
            />
            <YAxis stroke="rgba(148, 163, 184, 0.5)" style={{ fontSize: '0.875rem' }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ color: 'rgb(203, 213, 225)' }} />
            <Line
              type="monotone"
              dataKey="attendance"
              stroke="rgb(16, 185, 129)"
              strokeWidth={3}
              dot={{ fill: 'rgb(16, 185, 129)', r: 5 }}
              activeDot={{ r: 7 }}
              animationDuration={1500}
              name="Attendance %"
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="mt-6 pt-6 border-t border-slate-700/50">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">
              Average
            </p>
            <p className="text-lg font-bold text-emerald-400 mt-1">92.4%</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">
              Highest
            </p>
            <p className="text-lg font-bold text-indigo-400 mt-1">96%</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">
              Lowest
            </p>
            <p className="text-lg font-bold text-orange-400 mt-1">88%</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
