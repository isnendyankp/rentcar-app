import React from "react";
import { useState } from "react";
import Arrowd from './images/img_221758.png'
import Arrowu from './images/img_354911.png'

function Faq() {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if(selected === i) {
            return setSelected(null)
        };
        setSelected(i);
    }
    return (
        <>
        <div className="faq-cont" id="faq">
            <div className="faqtext">
                <p id="faqtitle">Frequently Asked Question</p>
                <p id="faqdesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="faq-drop">
            {data.map((item, i) => (
                <div className="item">
                    <div className="question" onClick={() => toggle(i)}><p>{item.question}</p>
                    <span>{selected === i ? <img src={Arrowu} alt="" id="arrow"/> : <img src={Arrowd} alt="" id="arrow"/>}</span>
                    </div>
                    <p className={selected === i ? 'answer show' : 'answer'}>{item.answer}</p>
                </div>
            )
                )}
            </div>
        </div>
        </>
    )
}
const data = [
    {question: 'Apa saja syarat yang dibutuhkan?',
     answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    }, 
    {question: 'Berapa hari minimal sewa mobil lepas kunci?', 
     answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    },
    {question: 'Berapa hari sebelumnya sabaiknya booking sewa mobil?', 
     answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    }, 
    {question: 'Apakah Ada biaya antar-jemput?', 
     answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    }, 
    {question: 'Bagaimana jika terjadi kecelakaan', 
     answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
];

export default Faq;