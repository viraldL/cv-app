// import { useState } from 'react'

export default function CV({info, experience, education}) {
    return (
        <>
            <div className="cvPage">
                <div className="mainInfoSection">
                    {info.name ? (<h2>{info.name} {info.surname}</h2>) : ("")}
                    <div className="contacts">
                        {info.phone ? (
                            <span>
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
                            </svg>
                          {info.phone}
                        </span>) : ("")}
                        {info.mail ? (                        
                            <span>
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                            </svg>
                             {info.mail}
                        </span>) : ("")}
                    </div>
                </div>
                {info.name ? (<hr />) : ("")}
                <div className="experienceSection">
                    <span className="expDates"><span>{experience.from}</span> {experience.from && experience.to ? (" - ") : ("")} <span>{experience.to}</span></span>
                    <div className="expInfo"><b>{experience.position}</b> {experience.company ? (" | ") : ("")} {experience.company} {experience.city ? (" | ") : ("")} {experience.city}</div>
                    <div className="expDesc">{experience.desc}</div>
                </div>
                {experience.position ? (<hr />) : ("")}
            </div>
        </>
    )
}

// I made virtual dental treatment for patient in DACH region. I used their own 3D software based on AutoCAD.