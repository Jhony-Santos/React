import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import fotinha from '../src/img/diva.jpeg'

// setup vars
const teAmo='Te amo morrr'
const vidaAposVida='Vida após a vida'


const books = [

    {
        img: 'https://www.bing.com/th?id=AMMS_b18d4585860550f41869b3ca8bf9d636&w=120&h=180&c=7&rs=1&qlt=80&o=6&cdv=1&pid=16.1',
        title: 'The World As I see it',
        author: 'Jhonatan Santos',
    },
    {
        img:'https://th.bing.com/th/id/OIP.NYnlLcirP_JsXFojusuJzAHaJ7?w=185&h=249&c=7&r=0&o=5&pid=1.7',
        title:'Artificial Intelligence',
        author:'Jhonatan Santos'

    },

    {
        img:'https://nsa.gov1.info/dni/nsa-ant-catalog/cell-phone-networks/TYPHON_HX.jpg',
        title:'',
        author: 'Jhonatan Santos'

    }
]


function BookList() {
    return (
        <section className={"bookList"}>
            {books.map((book) =>{
                const{img, title, author}=book;

                return(
                    <div>
                        <h3>{title}</h3>
                        <h6>{author}</h6>

                    </div>
                )
                })}
        </section>

    );
}


const names=['Jhonatan','Thais','Helena','Charlie','Brianna']
const namesMap=names.map((names)=>{
    return <h1>{names}</h1>

})


const Book = (props) => {
    const {img, title, author}=props;
    console.log(props)
    return (
        <article className='book'>
            <img src={props.img} alt=''/>
            <h1>{props.title}</h1>
            <h4>{props.author}</h4>
        </article>
    );
};


ReactDOM.render(<BookList/>, document.getElementById('root'));
