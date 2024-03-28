import { useState } from 'react'

let id = 0;

export default function Languages({languages, changeLanguages}) {

    const [edit, changeEdit] = useState(false);

    function editInfo() {
        edit ? changeEdit(false) : changeEdit(true);
    }

    function handleChange() {
        let language = document.querySelector('#language').value;
        changeLanguages([...languages, {id: id++, value: language}]);
    }

    function deleteLang(id) {
        changeLanguages((languages) =>
        languages.filter((item) => item.id !== id)
      );
    }

    return (
        <>
            <div className={edit ? ('languages editSection active') : ('languages editSection')}>
                {edit ?
                    (<>
                    <p>Languages</p>
                    <div className="inputs">
                        <label htmlFor="language">Language:<input id="language" type="text"/></label>
                        {languages.map(language => ( <>
                            <span className='langList'>
                                <p key={language.id}>{language.value}</p>
                                <button onClick={() => {deleteLang(language.id)}}>X</button>
                            </span>
                        </>
                        ))}
                    </div>
                    <button onClick={handleChange}>Add</button></>) 
                    : 
                    (<>
                    <div>
                        <p>Languages</p>
                        <div className='smallInfo'>
                        {languages.map(language => (
                            <p key={language.id}>{language.value}</p>
                        ))}
                        </div>
                    </div>
                    </>)
                }
                <button onClick={editInfo}>
                    {edit ? (<>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18 17.94 6M18 18 6.06 6"/>
                        </svg>Close
                    </>) : (<>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                        </svg>Edit</>
                    )}
                </button>
            </div>
        </>
    )
}