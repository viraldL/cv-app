import { useState } from 'react'

export default function MainInfo({info, changeInfo}) {

    const [edit, changeEdit] = useState(false);

    function handleChange() {
        let name = document.querySelector('#name').value;
        let surname = document.querySelector('#surname').value;
        let phone = document.querySelector('#phone').value;
        let mail = document.querySelector('#mail').value;
        changeInfo({...info,
            name: name,
            surname: surname,
            phone: phone,
            mail: mail
        });
    }

    function editInfo() {
        edit ? changeEdit(false) : changeEdit(true);
    }

    return (
        <>
            <div className={edit ? ('mainInfo editSection active') : ('mainInfo editSection')}>
                {edit ?
                    (<>
                    <p>General Information</p>
                    <div className="inputs">
                        <label htmlFor="name">Name:<input id="name" type="text" defaultValue={info.name}/></label>
                        <label htmlFor="surname">Surname:<input id="surname" type="text" defaultValue={info.surname}/></label>
                        <label htmlFor="phone">Phone:<input id="phone" type="text" defaultValue={info.phone}/></label>
                        <label htmlFor="mail">E-Mail:<input id="mail" type="text" defaultValue={info.mail}/></label>
                    </div>
                    <button onClick={() => { handleChange(); editInfo();}}>Save</button></>) 
                    : 
                    (<>
                    <div>
                        <p>General Information</p>
                        <div className='smallInfo'>
                            <p>{info.name}</p>
                            <p>{info.surname}</p>
                            <p>{info.phone}</p>
                            <p>{info.mail}</p>
                        </div>
                    </div>
                    </>)
                }
                <button onClick={editInfo}>
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