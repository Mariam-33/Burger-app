import React, { useContext} from 'react'
import '../stylesheets/control.css'
import { AppContext } from '../Context/AppContext'
import { HandleIngredients } from './HandleIngredients'

const Control = () => {
  const {
    lettuce, setLettuce,
    bacon, setBacon,
    cheese, setCheese,
    meat, setMeat,
    price, setPrice } = useContext(AppContext)
  return (
      <div className="ingredientsBlock">
        <p>Price = { price }</p>
        <p>Lettuce</p>
        <div className="ingrBtns">
            <button disabled={lettuce.length === 0} className="ingrBtn" onClick={() => HandleIngredients(false, 5, lettuce, setLettuce,'lettuce', price, setPrice)} >Less</button>
            <button className="ingrBtn" onClick={() => HandleIngredients(true, 5, lettuce, setLettuce,'lettuce', price, setPrice)}>More</button>
        </div>
        <p>Bacon</p>
        <div className="ingrBtns">
            <button disabled={bacon.length === 0} className="ingrBtn" onClick={() => HandleIngredients(false, 7, bacon, setBacon,'bacon', price, setPrice)}>Less</button>
            <button className="ingrBtn" onClick={() => HandleIngredients(true, 7, bacon, setBacon,'bacon', price, setPrice)}>More</button>
        </div>
        <p>Cheese</p>
        <div className="ingrBtns">
            <button disabled={cheese.length === 0} className="ingrBtn" onClick={() => HandleIngredients(false, 4, cheese, setCheese,'cheese', price, setPrice)}>Less</button>
            <button className="ingrBtn" onClick={() => HandleIngredients(true, 4, cheese, setCheese,'cheese', price, setPrice)}>More</button>
        </div>
        <p>Meat</p>
        <div className="ingrBtns">
            <button disabled={meat.length === 0} className="ingrBtn" onClick={() => HandleIngredients(false, 3, meat, setMeat,'meat', price, setPrice)}>Less</button>
            <button className="ingrBtn" onClick={() => HandleIngredients(meat, 3, meat, setMeat,'meat', price, setPrice)} >More</button>
        </div>
        <button className='order-btn' onClick={() => {
              alert(`Total Payable Amount is = $${price}`)
            }}>SIGN UP TO ORDER</button>
    </div>
  )
}

export default Control
