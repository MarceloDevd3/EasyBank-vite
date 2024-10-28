import React from 'react';

export default function EasyBankCard(props) {
    return (
        <article className='EasyBank-card'>
           <div className='EasyBank-img-container'>
              <img src={props.image} alt={props.alt} />
           </div>
           <section className="EasyBank-content">
              <h3 className='EasyBank-title'>{props.title}</h3>
              <h4 className='sub-title'>{props.sub}</h4>
              <p className='info'>{props.info}</p>
           </section>
        </article>
    )
}