import React from 'react';
import Player from './Player';
import files from './audioFiles';

const App = () => {
  return (
    <div className="min-h-screen container mx-auto flex items-center justify-center">
      <div className="w-full flex flex-wrap -m-4">
        {
          files.map(file => (
            <div className="p-4 w-1/4">
              <div className="shadow p-4 flex flex-col items-center">
                <h3 className="mb-2">{file.name}</h3>
                <Player url={file.url} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
