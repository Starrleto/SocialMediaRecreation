import React from 'react'
import './style.css'

const SmallerBoxComponent = (props) => {
  return (
    <div className={props.isDark ? "box box-bg-light" : "box bg"}>
      
      <div className='line'>
        <p className={props.isDark ? "light bold" : "dark bold"}>{props.type}</p>
        <img src={props.image} alt="Social media logo" className='image'></img>
      </div>
      <div className='line'>
        <h1 className={props.isDark ? "light bold" : "dark bold"}>{props.views}</h1>
        <div className='social-media today'>
          <img src={props.direction} alt="Up or Down Symbol" className='img-fluid arrow side-separate'></img>
          <p className={props.color}>{props.percent}</p>
        </div>
      </div>

    </div>
  )
}

export default SmallerBoxComponent