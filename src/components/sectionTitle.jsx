import React from 'react'

function SectionTitle(props){

    return(
        <div className='section-head'>
            <hr className='hr'/>
            <h1 className='section-title'>{props.title}</h1>
            <hr className='hr'/>
        </div>
    )
}

export default SectionTitle