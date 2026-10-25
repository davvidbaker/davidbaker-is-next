"use client"
import { Heading } from "@/components/Heading"

import { CodeSnippet, DecisionVariables, Parameters, SetsAndIndices, } from "@/components/optimization"
import { Figure1, Figure2, FigureProfits, FigureStacks } from "../q2-figures"
import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, SkipBack, SkipForward } from 'lucide-react';

// @ts-ignore — webpack raw-loader; fixture only (original steps.csv was never committed)
import stepsCsv from './steps.csv'

function parseCSV(text) {
  return text.split('\n').map(line => line.trim()).filter(Boolean).map(line => {
    return line.split(',').map(Number);
  });
}

export function FileSystem() {
  const [steps, setSteps] = useState([]);
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(500);
console.log('❤️‍🔥 steps', steps);


  useEffect(() => {
    fetch('./steps.csv')
      .then(response => stepsCsv)
      .then(text => setSteps(parseCSV(text)));
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying && steps.length > 0) {
      interval = setInterval(() => {
        setStep(prev => prev < steps.length - 1 ? prev + 1 : 0);
      }, speed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, speed, steps.length]);

  const FileBlock = ({ value, prevValue }) => {
    const isMoving = value !== prevValue;
    const getColor = (id) => {
      if (id < 0) return undefined;
      const hue = (id * 13) % 360;
      return `hsl(${hue}, 85%, ${isMoving ? 65 : 55}%)`;
    };

    return (
      <div 
        className={`w-5 h-5 flex items-center justify-center text-[10px] font-mono transition-all duration-500
          ${value === -1 ? 'bg-gray-100' : 'text-white shadow-sm'}
          ${isMoving ? 'scale-110 shadow-md z-10' : ''}`}
        style={{
          backgroundColor: getColor(value),
          transform: isMoving ? 'translateY(-2px)' : undefined
        }}
      >
        {value >= 0 ? value : ''}
      </div>
    );
  };

  if (steps.length === 0) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <div className="flex flex-wrap gap-px mb-6 border border-gray-200 p-2 bg-gray-50 max-w-[800px]">
        {steps[step].map((value, i) => (
          <FileBlock 
            key={i} 
            value={value} 
            prevValue={step > 0 ? steps[step-1][i] : value}
          />
        ))}
      </div>
      
      <div className="flex gap-4 items-center justify-center">
        <button onClick={() => setStep(0)} className="p-2">
          <RotateCcw size={18} />
        </button>
        <button 
          onClick={() => setStep(Math.max(0, step - 1))}
          className="p-2"
          disabled={step === 0}
        >
          <SkipBack size={18} className={step === 0 ? "text-gray-300" : ""} />
        </button>
        <button onClick={() => setIsPlaying(!isPlaying)} className="p-2">
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <button 
          onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
          className="p-2"
          disabled={step === steps.length - 1}
        >
          <SkipForward size={18} className={step === steps.length - 1 ? "text-gray-300" : ""} />
        </button>
        <select 
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="text-sm border rounded p-1"
        >
          <option value={1000}>Slow</option>
          <option value={500}>Normal</option>
          <option value={200}>Fast</option>
        </select>
        <span className="text-sm">Step {step + 1}/{steps.length}</span>
      </div>
    </div>
  );
}



const Page = () => <div>
    <FigureStacks />
    {/* <Figure1 />
    <Figure2 />
    <FigureProfits/> */}
    <FileSystem />

    
    
</div>

export default Page