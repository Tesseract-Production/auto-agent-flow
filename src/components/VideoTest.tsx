'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const MuxPlayer = dynamic(() => import('@mux/mux-player-react'), {
  ssr: false,
  loading: () => <div className="bg-gray-200 h-64 flex items-center justify-center">Loading player...</div>
});

export function VideoTest() {
  const [testVideo, setTestVideo] = useState('yours');
  
  const testVideos = {
    yours: 'H9KiKlFIc3p7KStkJmV18GpJ2xl3sILy77EPdY5td00c',
    public: 'DS00Spx1CV902MCtPj5WknGlR102V5HFkDe', // This is Mux's demo video
  };

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border">
      <h3 className="font-bold mb-2">Video Test Panel</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Test Video:</label>
        <select 
          value={testVideo} 
          onChange={(e) => setTestVideo(e.target.value)}
          className="w-full p-2 border rounded text-sm"
        >
          <option value="yours">Your Video</option>
          <option value="public">Mux Demo Video</option>
        </select>
      </div>
      
      <div className="mb-4 h-40 border rounded overflow-hidden">
        <MuxPlayer
          playbackId={testVideos[testVideo as keyof typeof testVideos]}
          primaryColor="#da3229"
          controls={true}
          muted={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      
      <div className="text-xs space-y-1">
        <p><strong>Current ID:</strong> {testVideos[testVideo as keyof typeof testVideos]}</p>
        <p className="text-gray-600 dark:text-gray-400">Check console for debugging info</p>
      </div>
    </div>
  );
}