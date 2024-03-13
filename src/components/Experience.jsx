import { useState } from 'react'

export default function Experience({experience, changeExperience}) {

    const [edit, changeEdit] = useState(false);

    function handleChange() {
        let position = document.querySelector('#position').value;
        let company = document.querySelector('#company').value;
        let city = document.querySelector('#city').value;
        let desc = document.querySelector('#desc').value;
        let from = document.querySelector('#from').value;
        let to = document.querySelector('#to').value;
        changeExperience({...experience,
            position: position,
            company: company,
            city: city,
            desc: desc,
            from: from,
            to: to
        });
    }

    function editExp() {
        edit ? changeEdit(false) : changeEdit(true);
    }

    return (
        <>
            <div className={edit ? ('experience editSection active') : ('experience editSection')}>
                {edit ?
                    (<><p>Experience</p>
                    <div className="inputs">
                        <label htmlFor="position">Position:<input id="position" type="text" defaultValue={experience.position}/></label>
                        <label htmlFor="company">Company:<input id="company" type="text" defaultValue={experience.company}/></label>
                        <label htmlFor="city">City:<input id="city" type="text" defaultValue={experience.city}/></label>
                        <label htmlFor="desc">Description:<input id="desc" type="textarea" defaultValue={experience.desc}/></label>
                        <label htmlFor="from">From:<input id="from" type="date" defaultValue={experience.from}/></label>
                        <label htmlFor="to">To:<input id="to" type="date" defaultValue={experience.to}/></label>
                    </div>
                    <button onClick={() => { handleChange(); editExp();}}>Save</button></>) 
                    : 
                    (<>
                        <div>
                            <p>Experience</p>
                            <div className='smallInfo'>
                                <p>{experience.position}</p>
                                <p>{experience.company}</p>
                                <p>{experience.city}</p>
                                <p>{experience.desc ? experience.desc.slice(0, 35) + "..." : ("")}</p>
                                <p>{experience.from && experience.to ? experience.from + " --- " +  experience.to : ""}</p>
                            </div>
                        </div>
                        </>)
                }
                <button onClick={editExp}>
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