'use client';

import { useState } from 'react';
import { VideoPlaceholder } from './VideoPlaceholder';

export function MuxDebugger() {
  const [currentTest, setCurrentTest] = useState(0);
  
  const testUrls = [
    {
      name: 'Correct Mux Thumbnail',
      url: 'https://image.mux.com/H9KiKlFIc3p7KStkJmV18GpJ2xl3sILy77EPdY5td00c/thumbnail.jpg?width=800&height=450&time=5'
    },
    {
      name: 'Mux Thumbnail (no params)',
      url: 'https://image.mux.com/H9KiKlFIc3p7KStkJmV18GpJ2xl3sILy77EPdY5td00c/thumbnail.jpg'
    },
    {
      name: 'Mux GIF',
      url: 'https://image.mux.com/H9KiKlFIc3p7KStkJmV18GpJ2xl3sILy77EPdY5td00c/animated.gif'
    },
    {
      name: 'Test Image (should work)',
      url: 'https://via.placeholder.com/800x450/da3229/ffffff?text=Video+Preview'
    }
  ];

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed top-20 right-4 z-50 w-80 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border">
      <h3 className="font-bold mb-2">Mux Video Debug</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Test URL:</label>
        <select 
          value={currentTest} 
          onChange={(e) => setCurrentTest(Number(e.target.value))}
          className="w-full p-2 border rounded text-sm"
        >
          {testUrls.map((test, index) => (
            <option key={index} value={index}>{test.name}</option>
          ))}
        </select>
      </div>
      
      <div className="mb-4 h-32 border rounded overflow-hidden">
        <VideoPlaceholder
          title="Debug Test"
          subtitle={testUrls[currentTest].name}
          thumbnailUrl={testUrls[currentTest].url}
          onPlayClick={() => console.log('Debug play clicked')}
        />
      </div>
      
      <div className="text-xs space-y-1">
        <p><strong>Current URL:</strong></p>
        <p className="break-all bg-gray-100 dark:bg-gray-700 p-1 rounded">{testUrls[currentTest].url}</p>
        
        <div className="mt-2">
          <p><strong>Solutions to try:</strong></p>
          <ul className="text-xs space-y-1 mt-1">
            <li>1. Check Mux dashboard for signed URLs</li>
            <li>2. Verify playback policy settings</li>
            <li>3. Add domain to Mux allowed origins</li>
            <li>4. Use Mux access tokens if required</li>
          </ul>
        </div>
      </div>
    </div>
  );
}