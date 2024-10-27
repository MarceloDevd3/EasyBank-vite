import React from 'react';

export default function MiniCard(props) {
    return (
        <article className="mini-card">
             <div className="mini-img">
                <img src={props.image} alt="icon image"/>
             </div>
             <section className="mini-card-content">
                <h2 className='min-title-card'>{props.title}</h2>
                <p className='mini-info'>{props.info}</p>
             </section>
        </article>
    )
}