import React from 'react'
import './style.css'

const BoxComponent = (props) => {
  return (
    <div className='separate-card'>
      <div className={props.color}></div>
      <div className={props.isDark ? "box-thing box-bg-light" : "box-thing bg"}>

        <div className='social-media'>
            <img src={props.image} alt="Social media logo" className='img-fluid image side-separate'></img>
            <p className={props.isDark ? "light bold" : "dark bold"}>{props.tag}</p>
        </div>
        
        <div className='space'>
          <h1 className={props.isDark ? "light why" : "dark why"}>{props.followers}</h1>
          <p className={props.isDark ? "light fol" : "dark fol"}>{props.type}</p>
        </div>

        <div className='social-media today'>
          <img src={props.direction} alt="Up or Down Symbol" className='img-fluid arrow side-separate'></img>
          <p className={props.directionColor}>{props.today} Today</p>
        </div>

      </div>
    </div>
  )
}

export default BoxComponent