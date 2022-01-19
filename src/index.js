import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import fotinha from '../src/img/diva.jpeg'


const teAmo='Te amo morrr'
const vidaAposVida='Vida após a vida'


function ListPicture() {
    return (

        <section className={"listPicture"}>
            <Picture teAmo esposa='Thais'/>
            <Picture vidaAposVida esposa='Thais'/>
        </section>

    );
}


const Picture = (props) => {
    return (
        <article className='Picture'>
            <h1>{teAmo}</h1>
            <h2>{props.esposa}</h2>
            <p>{vidaAposVida}</p>
        </article>
    )
}


ReactDOM.render(<ListPicture/>, document.getElementById('root'));
