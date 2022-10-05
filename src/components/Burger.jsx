import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import '../assets/stylesheets/burger.css'
const Burger = () => {
  const {
    lettuce,
    bacon,
    cheese,
    meat } = useContext(AppContext)
  return (
      <div className="ingredients">
      <div className="topSide"></div>
      <>
      {[...lettuce].map((e, i) =>
        <div key={i} className="lettuceAddOn"/>
        )}
      {[...bacon].map((e, i) =>
        <div key={i} className="baconAddOn"/>
        )}
      {[...cheese].map((e, i) =>
        <div key={i} className="cheeseAddOn"/>
        )}
      {[...meat].map((e, i) =>
        <div key={i} className="meatAddOn"/>
      )}
      </>
      <div className="bottomSide"></div>
      </div>
  )
}

export default Burger
