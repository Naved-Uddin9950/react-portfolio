import React, { useState, useEffect } from 'react';
import useTheme from '../../contexts/themeContext';

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleCheckboxChange = (e) => {
    const check = e.target.checked;
    if(check) {
      setTheme('dark');
    } else if(!check) {
      setTheme('light');
    }
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(theme);
  }, [theme]);

  return (
    <>
      <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          checked={isChecked == true}
          onChange={(e) => handleCheckboxChange(e)}
          className='sr-only'
        />
        <span className='label flex items-center text-sm font-medium text-black dark:text-white'>
          Light
        </span>
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isChecked ? 'bg-black' : 'bg-[#CCCCCE]'
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              isChecked ? 'translate-x-[28px]' : ''
            }`}
          ></span>
        </span>
        <span className='label flex items-center text-sm font-medium text-black dark:text-white'>
          Dark
        </span>
      </label>
    </>
  )
}

export default Toggle
