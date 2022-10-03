export const HandleIngredients = (check, amount, ingredient, setingredient, item, price, setPrice)=> {
  if (check) {
    setingredient(current => [...current, item])
    setPrice(price + amount)

  } else {
    ingredient.splice(0, 1)
    setingredient([...ingredient])
    setPrice(price - amount)
  }
}
