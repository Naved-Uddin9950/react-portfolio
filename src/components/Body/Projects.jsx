import React from 'react';
import { Card } from '../../components';

function Projects() {
  return (
    <div className='p-4'>
      <h1 className='font-bold text-2xl border rounded text-center py-2 mb-6 shadow-md dark:text-white dark:bg-gray-900 dark:border-transparent'>Projects</h1>

      <div className='grid lg:grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2 dark:text-white'>
        <Card 
          title='SeekSphere' 
          desc='A search engine built with NodeJs as backend and Google search API' 
          live='https://seeksphere.onrender.com/' 
          github='https://github.com/Naved-Uddin9950/SeekSphere' 
          image='./images/seeksphere.png'
        />
        
        <Card 
          title='Random Password Generator' 
          desc='A random password generator made with using ReactJS. Learnt useEffect, useCallback, useState hooks and many other react basics' 
          live='https://passgenrt.netlify.app/' 
          github='https://github.com/Naved-Uddin9950/react-password-generator' 
          image='./images/passgenrt.png'
        />
        
        <Card 
          title='GitHub User Data Fetcher' 
          desc='Assignment project from Fyle company. I learnt Angular to built this project. It fetches the github user data and their repositories' 
          live='https://github-data-fetcher.netlify.app/' 
          github='https://github.com/Naved-Uddin9950/fyle-internship-challenge-23' 
          image='./images/gitfetch.png'
        />
        
        <Card 
          title='React Background Changer' 
          desc='A simple projct in ReactJS. Lets the user change background color on button clicks' 
          live='https://bg-changer7023.netlify.app/' 
          github='https://github.com/Naved-Uddin9950/react-bg-changer' 
          image='./images/bg-changer.png'
        />
        
        <Card 
          title='Fitbar - BMI Calculator' 
          desc='A simple BMI calculator that calculates BMI based on user height and weight. It also tells the user if he/she is underweight, overweight, normal or obesse and shows the health bar as well' 
          live='https://fitbar.netlify.app/' 
          github='https://github.com/Naved-Uddin9950/BMI-Calculator' 
          image='./images/fitbar.png'
        />
        
        <Card 
          title='Personaforge' 
          desc='It generates random user info like username, email, mobile number, address on a button click' live='https://personaforge.netlify.app/' 
          github=''
          image='./images/personaforge.png'
        />

        <Card 
          title='Noris - Joke Generator' 
          desc='Noris generates random chuck noris jokes on a button click. It also have a feature to generate a joke by category' 
          live='https://noris.netlify.app/' 
          github='' 
          image='images/noris.png'
        />

        <Card 
          title='Shadow Text - Simple Text Editor' 
          desc='A simple text editor built in vanilla javascript' 
          live='https://shadowtext.netlify.app/' 
          github='' 
          image='images/shadowtext.png'
        />
      </div>
    </div>
  )
}

export default Projects