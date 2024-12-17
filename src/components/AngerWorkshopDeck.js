import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Brain, GamepadIcon, Users, Target, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AngerWorkshopDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // First Thoughts - Split into two slides
  const thoughts = [
    { day: 1, thought: "My thoughts went to check what happened to the UIPath Share Results has it gone up or down." },
    { day: 2, thought: "My thoughts went to check arranged cricket umpire went on time at morning 7am." },
    { day: 3, thought: "My thoughts went to see did i slept for long time. Sunday is the day i wont wake up through alarm." },
    { day: 4, thought: "When I woke up, the enticing aroma of idli and thakkali thokku drove me to brush my teeth quickly." },
    { day: 5, thought: "When i Woke up i had no thoughts, but i received a request from my wife to cook in the morning." },
    { day: 6, thought: "What was the champions league match result between liverpool and girona?" },
    { day: 7, thought: "I was sleeping till 9:15 am and I woke up with teams meeting call." },
    { day: 8, thought: "I was getting up thinking what to cook for breakfast" },
    { day: 9, thought: "I was getting up and started thinking of a plan on playing the cricket match" },
    { day: 10, thought: "I didnt had a good sleep i was in trauma on seeing my friend suffering from heart attack." },
    { day: 11, thought: "I was getting up to see any updates on my friend about his health status after 36 hrs" },
    { day: 12, thought: "I was getting up and on seeing the message he got stable heartbeat and breathing." }
  ];

  const selfTriggers = [
    "A short 5 min call",
    "Intha oru work",
    "Any words hurting my parents",
    "You are always happy and don't care",
    "You have no work",
    "Always sitting in front of computer"
  ];

  const othersTriggers = [
    "When I ask a question",
    "When I provide explanation why I did this",
    "Try to reduce the mobile",
    "Be active",
    "I am busy don't disturb me now",
    "I am in a meeting",
    "I will come back later to it"
  ];

  const strategies = [
    {
      title: "Redirect Energy",
      description: "Transform anger into productive energy, focusing intensely on tasks at hand",
      icon: Target,
      detail: "Somehow if I am in anger I usually be more productive without any distractions"
    },
    {
      title: "Self-Direction",
      description: "Channel anger inward rather than towards others, focusing on personal growth",
      icon: Brain,
      detail: "All of my anger I will show it on me or the task in hand"
    },
    {
      title: "Strategic Distraction",
      description: "Engage in chess to redirect mental focus and calm emotions",
      icon: GamepadIcon,
      detail: "I will play chess to get distracted"
    },
    {
      title: "Social Support",
      description: "Reach out to friends for emotional support and perspective",
      icon: Users,
      detail: "I will talk to friends to feel better"
    }
  ];

  const slides = [
    // Slide 1: First Thoughts (Days 1-6)
    <div className="grid gap-4">
      <h2 className="text-3xl font-bold text-center mb-4">Morning First Thoughts</h2>
      <p className="text-xl text-center text-gray-600 mb-4">Days 1-6</p>
      {thoughts.slice(0, 6).map((item) => (
        <div key={item.day} className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-lg">
              {item.day}
            </div>
            <p className="text-lg text-gray-700">{item.thought}</p>
          </div>
        </div>
      ))}
    </div>,

    // Slide 2: First Thoughts (Days 7-12)
    <div className="grid gap-4">
      <h2 className="text-3xl font-bold text-center mb-4">Morning First Thoughts</h2>
      <p className="text-xl text-center text-gray-600 mb-4">Days 7-12</p>
      {thoughts.slice(6, 12).map((item) => (
        <div key={item.day} className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-lg">
              {item.day}
            </div>
            <p className="text-lg text-gray-700">{item.thought}</p>
          </div>
        </div>
      ))}
    </div>,

    // Slide 3: Self Triggers
    <div>
      <div className="flex items-center justify-center gap-3 mb-6">
        <AlertTriangle className="w-8 h-8 text-orange-500" />
        <h2 className="text-3xl font-bold">Words That Trigger Me</h2>
      </div>
      <div className="grid gap-4">
        {selfTriggers.map((trigger, index) => (
          <div key={index} className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-lg">
                {index + 1}
              </div>
              <p className="text-lg text-gray-700">{trigger}</p>
            </div>
          </div>
        ))}
      </div>
    </div>,

    // Slide 4: Others' Triggers
    <div>
      <div className="flex items-center justify-center gap-3 mb-6">
        <Users className="w-8 h-8 text-purple-500" />
        <h2 className="text-3xl font-bold">Words That Trigger Others</h2>
      </div>
      <div className="grid gap-4">
        {othersTriggers.map((trigger, index) => (
          <div key={index} className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-lg">
                {index + 1}
              </div>
              <p className="text-lg text-gray-700">{trigger}</p>
            </div>
          </div>
        ))}
      </div>
    </div>,

    // Slide 5: Management Strategies
    <div>
      <h2 className="text-3xl font-bold text-center mb-6">Anger Management Strategies</h2>
      <div className="grid gap-4">
        {strategies.map((strategy, index) => (
          <div key={index} className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="bg-green-500 text-white rounded-lg p-2 flex-shrink-0">
                <strategy.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{strategy.title}</h3>
                <p className="text-gray-600 mb-1">{strategy.description}</p>
                <p className="text-green-700 italic">{strategy.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ];

  return (
    <div className="max-w-4xl mx-auto p-6" style={{ fontFamily: 'Tahoma, sans-serif' }}>
      <Card className="bg-white shadow-lg">
        <CardContent className="p-8">
          {slides[currentSlide]}
          
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
              disabled={currentSlide === 0}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="text-lg text-gray-600 font-bold">
              Slide {currentSlide + 1} of {slides.length}
            </div>
            <button
              onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))}
              disabled={currentSlide === slides.length - 1}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AngerWorkshopDeck;