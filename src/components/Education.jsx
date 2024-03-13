import { useState } from 'react'

export default function Experience({education, changeEducation}) {

    const [edit, changeEdit] = useState(false);

    function handleChange() {
        let major = document.querySelector('#major').value;
        let school = document.querySelector('#school').value;
        let degree = document.querySelector('#degree').value;
        let from = document.querySelector('#from').value;
        let to = document.querySelector('#to').value;
        changeEducation({...education,
            major: major,
            school: school,
            degree: degree,
            from: from,
            to: to
        });
    }

    function editEdu() {
        edit ? changeEdit(false) : changeEdit(true);
    }

    return (
        <>
            <div className={edit ? ('education editSection active') : ('education editSection')}>
                {edit ?
                    (<><p>Education</p>
                    <div className="inputs">
                        <label htmlFor="major">Field of study:<input id="major" type="text" defaultValue={education.major}/></label>
                        <label htmlFor="school">School:<input id="school" type="text" defaultValue={education.school}/></label>
                        <label htmlFor="degree">Degree:<input id="degree" type="text" defaultValue={education.degree}/></label>
                        <label htmlFor="from">From:<input id="from" type="date" defaultValue={education.from}/></label>
                        <label htmlFor="to">To:<input id="to" type="date" defaultValue={education.to}/></label>
                    </div>
                    <button onClick={() => { handleChange(); editEdu();}}>Save</button></>) 
                    : 
                    (<>
                        <div>
                            <p>Education</p>
                            <div className='smallInfo'>
                                <p>{education.major}</p>
                                <p>{education.school}</p>
                                <p>{education.degree}</p>
                                <p>{education.from && education.to ? education.from + " --- " +  education.to : ""}</p>
                            </div>
                        </div>
                        </>)
                }
                <button onClick={editEdu}>
                {edit ? (<>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18 17.94 6M18 18 6.06 6"/>
                        </svg>
                    </>) : (
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                        </svg>
                    )}
                Edit</button>
            </div>
        </>
    )
}