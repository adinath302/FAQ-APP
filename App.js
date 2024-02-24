// import logo from './logo.svg';
import { useCallback, useState } from 'react';
import './App.css';
import { questions } from './Data/FAQ Questions';
// import { useState } from 'react';
// import btnmodule from "./Button.module.css"
function App() {
  let [showans, setshowans] = useState(questions[0].id)
  return (
    <div className="App">
      <div>
        <h1>Frequestly Asked Questions (FAQs)</h1>
        <div className='faqouter'>
          {questions.map((faqitems, i) => {
            return (
              < div className='faqitems' >
                <h2 onClick={() => setshowans(faqitems.id)}>{faqitems.question}</h2>
                <p className={showans === faqitems.id ? "activeans" : ""}>{faqitems.answer}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div >
  );
}
export default App;
