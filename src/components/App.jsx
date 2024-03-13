import { useState } from 'react'
import '../sass/App.sass'
import CV from './CV'
import MainInfo from './MainInfo'
import Experience from './Experience';
import Education from './Education';

function App() {
  const [info, changeInfo] = useState({name: "", surname: "", phone: "", mail: "", photoUrl: ""})
  const [experience, changeExperience] = useState({position: "", company: "", city: "", desc: "", from: "", to: ""});
  const [education, changeEducation] = useState({major: "", school: "", degree: "", from: "", to: ""})

  return (
    <>
      <div className='editSide'>
        <MainInfo info={info} changeInfo={changeInfo}/>
        <Experience experience={experience} changeExperience={changeExperience}/>
        <Education education={education} changeEducation={changeEducation}/>
      </div>
      <CV info={info} experience={experience} education={education}/>
    </>
  )
}

export default App
 