import React from 'react';
import Sidebar from './Sidebar';
import NoteScreen from '../notes/NoteScreen';

const JournalScreen = () => {
    return (
          <div className="journal__main-content">

              <Sidebar/>

              <main>

                  <NoteScreen />
              </main>
          </div>
    );
}

export default JournalScreen;
