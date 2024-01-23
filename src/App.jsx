import { useState } from 'react';
import Screen2 from './Screen2';

const App = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const renderContent = () => {
    switch (selectedButton) {
      case 'Button 1':
        return <div><Screen2/></div>;
      case 'Button 2':
        return <div>Content for Button 2</div>;
      case 'Button 3':
        return <div>Content for Button 3</div>;
      default:
        return <div>Select a button to see content</div>;
    }
  };

  return (
    <div className='absolute top-0 w-1/2 ml-auto'>
      <div className='absolute top-0 w-1/2 ml-auto'>
        <button onClick={() => handleButtonClick('Button 1')}>Button 1</button>
        <button onClick={() => handleButtonClick('Button 2')}>Button 2</button>
        <button onClick={() => handleButtonClick('Button 3')}>Button 3</button>
      </div>
      <div className='absolute top-0 w-1/2 ml-auto'>
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
