import { useState } from 'react';
import './App.css';

const messages = ['Learn React', 'Apply for new Jobs', 'Game Starts'];
function App() {
  // const step = 1;
  const [step, setStep] = useState(1);
  const [text, setText] = useState({ name: 'leela' });
  const [isOpen, setIsOpen] = useState(true);

  function previous() {
    console.log('previous', step);
    // step = step - 1 function re-rendering does not work
    setStep((step) => {
      if (step > 1) return step - 1;
      return 1;
    });
  }
  function next() {
    console.log('next', step);
    setText({ name: (Math.random() * 1000) + 'web dev leela' })

    setStep((step) => {
      if (step < 3) return step + 1;
      if (step === 3) return 1;
      return 3;
    });

    // if (step < 3) setStep(step + 1); //its an async operation
    // setStep(step + 1);

    // will jump directly to 3 now
    /* 
        if (step < 3) setStep((step)=>(step + 1)); //its an async operation
        setStep((step)=>(step + 1));
        return;
        // text.name = 'web dev leela'; //works, but avoid it    

    */  
}
  return (
    <div>
      <div className='close' onClick={() => { setIsOpen((flag)=>!flag) }} >X</div>
      {
        isOpen && (
          <div className="steps">
            <p> text : {text.name} </p>
            <div className='numbers'>
              <div onClick={() => setStep(1)}
                className={`${step >= 1 ? 'active' : ''}`} >1</div>
              <div onClick={() => setStep(2)}
                className={`${step >= 2 ? 'active' : ''}`}>2</div>
              <div onClick={() => setStep(3)}
                className={`${step >= 3 ? 'active' : ''}`}>3</div>
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
        )
      }
    </div>

  );
}

export default App;
