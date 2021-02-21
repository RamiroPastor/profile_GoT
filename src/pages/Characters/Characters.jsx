import React, {useState, useEffect} from "react";
import './_Characters.scss';
import {Footer} from "../../core/Footer/Footer";
import {Header} from "../../core/Header/Header";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import {useParams} from "react-router-dom";
import {API} from '../../shared/const/api.const';


export function Characters(props) {
    const {characterName} = useParams();
    const [character, setCharacter] = useState([]);
    const getCharacter = () => {
        API.get('show/characters/').then((res) => {
            setCharacter(res.data);
        });
    }
    useEffect(getCharacter, []);
    return (
        <div className="hero">
            <Header
                showGoBackButton={false}
                showSearchBar={true}
                showGoHomeButton={true}
                t={props.t}
                fnSetLang={props.fnSetLang}
            />
        <section className="section">
            <SimpleBar autoHide={false}>
            <div className="c-character">
            {character.map((char, i) => <div key={i} className={"c-character__top-info"}>
            <figure className="figure">
                <img className={"c-character__image"} src={char.image} alt={char.name}/>
                <figcaption>
                <h2>{char.name}</h2>
                </figcaption>
                </figure>
            </div>)}
            </div>
            </SimpleBar>
            </section>

    
            <Footer
                t={props.t}
            />
        </div>
    )
}
  
