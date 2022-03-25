import React from "react";
import "./Card.css"
import { Link, useMatch } from "react-router-dom";

type CardProps = {
  title: string
}

function Card(props: CardProps){
  let match = useMatch({ path: '/login' });
  return(
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{props.title}</span>
            <p>I am a very simple card. I am good at containing small bits of information.</p>
          </div>
          <div className="card-action">
            <p>Hi, Jane Doe! <Link className="right" to={match ? '/' : 'login'}>{match ? 'home' : 'login'}</Link></p>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Card