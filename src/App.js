import { useState } from 'react';
import './App.css';

const messages = ['Learn React', 'Apply for new Jobs', 'Game Starts'];
function App() {
  // const step = 1;
  const [step, setStep] = useState(1);

  function previous() {
    console.log('previous',step);
    setStep((step) => {
      if (step > 1) return step - 1;
      return 1;
    });    
  }
  function next() {
    console.log('next',step);
    setStep((step) => {
      if (step < 3) return step + 1;
      if (step === 3) return 1;
      return 3;
    });
  }
  return (
    <div className="steps">
      <div className='numbers'>
        <div onClick={()=>setStep(1)}
        className={`${step >= 1 ? 'active':'' }`} >1</div>
        <div onClick={()=>setStep(2)}
        className={`${step >= 2 ? 'active':'' }`}>2</div>
        <div onClick={()=>setStep(3)}
        className={`${step >= 3 ? 'active':'' }`}>3</div>
      </div>
      <p className='message' >
        Step {step} : {messages[step - 1]}
      </p>
      <div className='buttons'>
        <button onClick={() => previous()}
          style={{ backgroundColor: '#7950f2', color: '#fff' }} >previous</button>
        <button onClick={next}
          style={{ backgroundColor: '#7950f2', color: '#fff' }} >next</button>
      </div>
    </div>
  );
}

export default App;
