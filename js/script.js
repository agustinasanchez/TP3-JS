var franchise = {
    
    sellers: ["Ada", "Grace", "Hedy", "Sheryl"],
    
    componentsSold: [
      // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
      { date: new Date(2019, 1, 4), seller: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { date: new Date(2019, 0, 1), seller: "Ada", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { date: new Date(2019, 0, 2), seller: "Grace", components: ["Monitor ASC 543", "Motherboard MZI"] },
      { date: new Date(2019, 0, 10), seller: "Ada", components: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
      { date: new Date(2019, 0, 12), seller: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ],

    prices: [
      { component: "Monitor GPRS 3000", price: 200 },
      { component: "Motherboard ASUS 1500", price: 120 },
      { component: "Monitor ASC 543", price: 250 },
      { component: "Motherboard ASUS 1200", price: 100 },
      { component: "Motherboard MZI", price: 30 },
      { component: "HDD Toyiva", price: 90 },
      { component: "HDD Wezter Dishital", price: 75 },
      { component: "RAM Quinston", price: 110 },
      { component: "RAM Quinston Fury", price: 230 },
    ]
  
};

//1-a

const machinePrice = sold => {
  let sumComponents = 0
  sold.forEach(e => {
    const piece = franchise.prices.find(({component}) => e === component)
    sumComponents = sumComponents + piece.price
  })
  return sumComponents
} 

console.log(machinePrice(["Monitor ASC 543", "Motherboard MZI" ]))
  
//1-b

const quantitySalesComponent = (c) =>{
  let count = 0
  franchise.componentsSold.forEach(e => {
    e.components.forEach(piece => {
      if(piece === c){
        count++
      }
    })
  })
  return count
}

console.log(quantitySalesComponent("Monitor ASC 543"))

//1-c

const sellerOfTheMonth = (month, year) =>{
}

console.log(sellerOfTheMonth(1, 2019) );