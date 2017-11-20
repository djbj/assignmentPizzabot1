const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
alert ("Hey! Happy to serve your pizza. On our menu we have " + vegetarian + ", " + hawaiian + " and " + pepperoni)

const orderName = prompt ("Enter the name of the pizza you want to order today: ")

const checkOrderName = (orderName) => {
  if ((orderName === vegetarian) || (orderName === hawaiian) || (orderName === pepperoni)) {
      return true
  } else {
      return false
  }
}

const totalCost = (orderQuantity) => {
  return orderTotal = orderQuantity * pizzaPrice
}

const cookingTime = (orderQuantity) => {
  if (orderQuantity < 3) {
    return 10
  } else if ((orderQuantity >= 3) && (orderQuantity <=5)) {
    return 15
  } else if (orderQuantity > 5) {
    return 20
  }

}

if (checkOrderName (orderName) ) {
    const orderQuantity = prompt ("How many of " + orderName + " do you want ?")
    totalCost (orderQuantity)
    // if ((orderQuantity === 1) || (orderQuantity === 2)) {  Why does this line not work ?
    // let bakingTime = ???
    // if (orderQuantity < 3) {
    //  alert ("Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + " kr. The pizzas will take " +                        cookingTime (orderQuantity) + " minutes.")
    //} else if ((orderQuantity >= 3) && (orderQuantity <=5)) {
    //  alert ("Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + " kr. The pizzas will take " +                        cookingTime (orderQuantity) + " minutes.")
    //} else if (orderQuantity > 5) {
    //  alert ("Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + " kr. The pizzas will take " +                        cookingTime (orderQuantity) + " minutes.")
    alert ("Great, I'll get started on your " +
           orderName +
           " right away, it will cost " +
           totalCost (orderQuantity) +
           " kr. The pizzas will take " +
           cookingTime (orderQuantity) +
           " minutes.")
} else {
    alert ("The " + orderName + " is not on our menu !")
}
