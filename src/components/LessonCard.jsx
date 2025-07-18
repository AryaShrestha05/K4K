import React from 'react';
import { Play, CheckCircle, Clock } from 'lucide-react';
import ProgressBar from './ProgressBar';

const LessonCard = ({ lesson, selected, onSelect }) => (
  <div
    className={`lesson-card bg-white border border-gray-200 rounded-2xl shadow-lg p-6 cursor-pointer transition-all duration-200 hover:shadow-xl hover:scale-105 ${
      selected ? 'ring-2 ring-purple-500' : ''
    }`}
    onClick={onSelect}
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
          lesson.completed ? 'bg-green-100' : 'bg-purple-100'
        }`}>
          {lesson.completed ? (
            <CheckCircle className="w-6 h-6 text-green-600" />
          ) : (
            <Play className="w-6 h-6 text-purple-600" />
          )}
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800">{lesson.title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${
            lesson.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
            lesson.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
            'bg-red-100 text-red-700'
          }`}>
            {lesson.difficulty}
          </span>
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-center gap-1 text-gray-600 text-sm">
          <Clock className="w-4 h-4" />
          {lesson.duration}
        </div>
      </div>
    </div>
    <p className="text-gray-600 mb-4">{lesson.description}</p>
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">Progress</span>
        <span className="text-sm text-gray-600">{lesson.progress}%</span>
      </div>
      <ProgressBar value={lesson.progress} />
    </div>
    <div className="space-y-1">
      <p className="text-sm font-medium text-gray-700">Topics covered:</p>
      <div className="flex flex-wrap gap-1">
        {lesson.topics.map((topic, index) => (
          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {topic}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default LessonCard; 