import './App.css'
import ReactLogo from './assets/react.svg'

function App() {
  return (
    <>
      <div className="flex flex-col items-center p-7 rounded-2xl">
        <div>    
          <img className="size-48 shadow-xl rounded-md" alt="" src={ReactLogo} />  
        </div>  
        <div className="flex">    
          <span>EXAMPLE</span>    
          <span>The Anti-Patterns</span>    
          <span className="flex">      
            <span>No. 4</span>      
            <span>·</span>      
            <span>2025</span>    
          </span>  
        </div>
      </div>
    </>
  )
}

export default App
