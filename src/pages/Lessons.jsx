import React, { useState } from 'react';
import Chatbot from '../components/Chatbot';
import LessonCard from '../components/LessonCard';
import LessonDetails from '../components/LessonDetails';
import BadgeList from '../components/BadgeList';
import '../components/lessons/Lessons.css';

const badges = [
  {
    id: 1,
    title: 'HTML Hero',
    description: 'Master the basics of HTML structure',
    icon: 'Code',
    earned: true,
    color: 'bg-orange-500'
  },
  {
    id: 2,
    title: 'CSS Champion',
    description: 'Style websites like a pro',
    icon: 'Star',
    earned: true,
    color: 'bg-blue-500'
  },
  {
    id: 3,
    title: 'JavaScript Wizard',
    description: 'Bring websites to life with interactivity',
    icon: 'Zap',
    earned: false,
    color: 'bg-yellow-500'
  },
  {
    id: 4,
    title: 'Game Creator',
    description: 'Build your first interactive game',
    icon: 'Gamepad2',
    earned: false,
    color: 'bg-purple-500'
  },
  {
    id: 5,
    title: 'Problem Solver',
    description: 'Complete 10 coding challenges',
    icon: 'Puzzle',
    earned: true,
    color: 'bg-green-500'
  },
  {
    id: 6,
    title: 'Code Master',
    description: 'Complete all beginner lessons',
    icon: 'Award',
    earned: false,
    color: 'bg-pink-500'
  }
];

const lessons = [
  {
    id: 0,
    title: 'HTML Basics',
    description: 'Learn the fundamental building blocks of web pages',
    duration: '45 min',
    difficulty: 'Beginner',
    progress: 100,
    completed: true,
    topics: ['HTML structure', 'Tags and elements', 'Semantic HTML']
  },
  {
    id: 1,
    title: 'CSS Styling',
    description: 'Style your websites with colors, fonts, and layouts',
    duration: '60 min',
    difficulty: 'Beginner',
    progress: 75,
    completed: false,
    topics: ['CSS selectors', 'Properties', 'Box model', 'Flexbox']
  },
  {
    id: 2,
    title: 'JavaScript Fundamentals',
    description: 'Add interactivity and dynamic behavior to your sites',
    duration: '90 min',
    difficulty: 'Intermediate',
    progress: 30,
    completed: false,
    topics: ['Variables', 'Functions', 'DOM manipulation', 'Events']
  },
  {
    id: 3,
    title: 'Building Your First Website',
    description: 'Put it all together to create a complete website',
    duration: '120 min',
    difficulty: 'Intermediate',
    progress: 0,
    completed: false,
    topics: ['Project setup', 'Layout design', 'Content creation', 'Testing']
  },
  {
    id: 4,
    title: 'Interactive Elements',
    description: 'Create buttons, forms, and interactive components',
    duration: '75 min',
    difficulty: 'Intermediate',
    progress: 0,
    completed: false,
    topics: ['Forms', 'Buttons', 'Modal dialogs', 'Animations']
  },
  {
    id: 5,
    title: 'Game Development',
    description: 'Build your first interactive game with JavaScript',
    duration: '150 min',
    difficulty: 'Advanced',
    progress: 0,
    completed: false,
    topics: ['Game loop', 'Canvas API', 'Collision detection', 'Scoring']
  }
];

const Lessons = () => {
  const [selectedLesson, setSelectedLesson] = useState(0);

  const handleLessonSelect = (lessonId) => {
    setSelectedLesson(lessonId);
  };

  const startLesson = () => {
    console.log(`Starting lesson: ${lessons[selectedLesson].title}`);
  };

  const resetProgress = () => {
    console.log(`Resetting progress for: ${lessons[selectedLesson].title}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white">Lessons</h1>
          <p className="text-white/90 mt-2">Master web development step by step!</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Lesson List */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {lessons.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  selected={selectedLesson === lesson.id}
                  onSelect={() => handleLessonSelect(lesson.id)}
                />
              ))}
            </div>

            {/* Lesson Details */}
            <LessonDetails
              lesson={lessons[selectedLesson]}
              onStart={startLesson}
              onReset={resetProgress}
            />

            {/* Badge Section */}
            <BadgeList badges={badges} />
          </div>

          {/* Chatbot */}
          <div className="lg:col-span-1">
            <Chatbot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
