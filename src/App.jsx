import React from 'react';
// Import your package
import GradientBackground from 'gradiald';

function App() {
  return (
    <GradientBackground
      type="radial"
      colors={['#ff7eb3', '#ff758c']}
      position="bottom-right"
      rippleEffect={true}
      width="300px"
      height="300px"
      borderRadius="50%"
    >
      <h1 style={{ color: '#fff' }}>Hello, World!</h1>
    </GradientBackground>
  );
}

export default App;
