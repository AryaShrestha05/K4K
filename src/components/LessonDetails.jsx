import React from 'react';

const LessonDetails = ({ lesson, onStart, onReset }) => (
  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">{lesson.title}</h2>
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">What you'll learn:</h3>
      <ul className="space-y-2 text-gray-700">
        {lesson.topics.map((topic, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            {topic}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex gap-4">
      <button
        onClick={onStart}
        className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        {lesson.progress > 0 ? 'Continue Lesson' : 'Start Lesson'}
      </button>
      {lesson.progress > 0 && (
        <button
          onClick={onReset}
          className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200"
        >
          Reset Progress
        </button>
      )}
    </div>
  </div>
);

export default LessonDetails; 