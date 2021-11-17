import React, { useState } from 'react';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
// import Music from './components/Music/Music';

function App() {
  const [categories] = useState([
    {
      name: 'Music',
      description: 'Listen',
    },
    // { name: 'portraits', description: 'Portraits of animals in my life' },
    // { name: 'food', description: 'Delicious delicacies' },
    // { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
          <>
            <About></About>
            {/* <Music></Music> */}
          </>
      </main>
    </div>
  );
}

export default App;

  