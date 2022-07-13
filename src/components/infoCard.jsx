import React from 'react'

function InfoCard(props){

    return (
        <table>
            <tbody>
            {
                props.info.map((data, index) =>
                        <tr key={index}>
                            <th>{data.field}</th>
                            <th>{data.text}</th>
                        </tr>
                    )
            }
            </tbody>
        </table>
    )
}

export default InfoCard