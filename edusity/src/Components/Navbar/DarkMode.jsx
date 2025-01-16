import React from 'react'
import lightButton from '../../assets/website/light-mode-button.png'
import darkButton from '../../assets/website/dark-mode-button.png'

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme')? localStorage.getItem('theme') : 'light'
  );

  const element = document.documentElement;

  React.useEffect(() => {
    if(theme === 'dark'){
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  },[theme,setTheme,element]);
  return (
    <div className='relative'>
      <img src={lightButton} alt="light mode button" 
      onClick={()=>setTheme(theme==='light'? 'dark':'light')}
      className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-200 absolute right-0 z-10 ${theme==='dark'? "opacity-0" : "opacity-100"}`}/>
      <img src={darkButton} alt="light mode button" 
        onClick={()=>setTheme(theme==='light'? 'dark':'light')}
      className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-200'/>
    </div>
  )
}

export default DarkMode