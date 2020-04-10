import React from 'react'

function Card(props) {
    return (
<>
        <div class="column">
        <div class="content">
            <a href={props.href} target="_blank"><img
                    src={props.src}
                    alt="" style={{width: "100%"}} />
            </a>
            <h3>{props.title}</h3>
            <p>{props.description}
            </p>

        </div>
        </div>
        </>
    )
}

export default Card
