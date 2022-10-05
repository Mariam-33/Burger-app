export const HandleIngredients = (add, cost, ingrState, setIngrState, item, price, setPrice)=> {
  if (add) {
    setIngrState(current => [...current, item])
    setPrice(price + cost)

  } else {
    ingrState.splice(0, 1)
    setIngrState([...ingrState])
    setPrice(price - cost)
  }
}
