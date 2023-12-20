import './App.css';
import thunder from './images/icon-memory.svg'
import memory from './images/icon-reaction.svg'
import verbal from './images/icon-verbal.svg'
import visual from './images/icon-visual.svg'

function App() {
  
  return (
    <div className="App">
      <div className = 'container'>
        <div className='firstHalf'>
            <h1>Your Result</h1>
            <div className='circle'>
              <h1>76</h1>
              <p>of 100</p>
            </div>
            <h2>Great</h2>
            <h5>You scored higher than 65% of the people who have taken these tests.</h5>
        </div>
        <div className='secondHalf'>
          <h3 className = 'headingOne'>Summary</h3>
          {/* Reaction */}
          <div className='category reaction'>
            <div className='reaction'> 
              <img src = {thunder} alt="thunder"/> <p>Memory</p>
              </div>
            <div className='score'>
              <p className='number'>80 </p>
              <p className ="hundred"> / 100</p>
            </div>
          </div>
          {/* Memory */}
          <div className='category memory'>
            <div className='memory'> 
              <img src = {memory} alt="memory"/> <p>Memory</p>
              </div>
            <div className='score'>
              <p className='number'>92 </p>
              <p className ="hundred">/ 100</p>
            </div>
          </div>
          {/* Verbal */}
          <div className='category verbal'>
            <div className='verbal'> 
              <img src = {verbal} alt="verbal"/> <p>Verbal</p>
              </div>
            <div className='score'>
              <p className='number'>61</p>
              <p className ="hundred">/ 100</p>
            </div>
          </div>
          {/* Visual */}
          <div className='category visual'>
            <div className='visual'>
              <img src = {visual} alt="visual"/> <p>Visual</p>
            </div>
            <div className='score'>
              <p className='number'>72</p>
              <p className ="hundred">/ 100</p>
            </div>
          </div>
          <div className='button'>
            <h2>Continue</h2>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
