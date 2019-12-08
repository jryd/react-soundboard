import React from 'react';
import Player from './Player';
import files from './audioFiles';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {
        files.map(file => (
          <Player name={file.name} url={file.url} />
        ))
      }
    </div>
  );
}

export default App;
