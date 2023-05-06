import Window from './components/Window';
import github from './github-icon.png';
import linkedin from './linkedin-icon.png';

import './styles/App.scss'

function App() {
  return (
    <div className="App">
      
      <div className='programs'>
      <a href="https://github.com/marcocarcamo-tech" target='_blank'><img src={github} alt="Github-icon" /><p className='icon'>Github</p></a>
      <a href="https://www.linkedin.com/in/marcocarcamo/" target='_blank'><img src={linkedin} alt="LinkedIn-icon" /><p className='icon'>LinkedIn</p></a>
      </div>
      
      <Window>
        
      </Window>
      <footer>
        <p style={{textAlign: 'center'}}>Developed with <img src="https://img.icons8.com/fluency/48/null/pixel-heart.png" alt='pixelart-heart' style={{width: '1rem'}} /> by Marco Carcamo</p>
      </footer>
    </div>
  )
}

export default App
