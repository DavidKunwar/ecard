import React from 'react';

function Detail(props){
    return (
        <>
            <div className='detail'>
                <span className='detailIcon'>{props.icon}</span>
                <p>{props.text}</p>
            </div>
        </>
    )
}

export default Detail