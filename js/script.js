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

//1-a precioMaquina(componentes):

const machinePrice = sold => {
  let sumComponents = 0
  sold.forEach(e => {
    const piece = franchise.prices.find(({component}) => e === component)
    sumComponents = sumComponents + piece.price
  })
  return sumComponents
} 

console.log(machinePrice(["Monitor ASC 543", "Motherboard MZI" ]))
  
//1-b cantidadVentasComponente(componente):

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

//1-c vendedoraDelMes(mes, año)
    

//1-d ventasMes(mes, año):

 const salesMonth = (month, year) => {
  let sumMonth = 0
  for (let index = 0; index < franchise.componentsSold.length; index++) {
      let components = franchise.componentsSold[index].components
      if (franchise.componentsSold[index].date.getMonth() + 1 == month && franchise.componentsSold[index].date.getFullYear() == year) {
          sumMonth = sumMonth + machinePrice(components)
      }

  }
  return sumMonth
}
console.log(salesMonth(1, 2019)); // 1250

//1-e ventasVendedora(nombre):

const salesBySeller = name => {
  let sellingSum = 0
  franchise.componentsSold.forEach(e => {
    if(e.seller === name){
      let totalSales = machinePrice(e.components)
      sellingSum += totalSales
    }
  })
  
  return sellingSum
}
console.log(salesBySeller("Ada"));

//1-f componenteMasVendido():
const bestSellerComponent = () => {
  let sellingComponent = []
  let nameComponent
  franchise.prices.forEach(e => {
    sellingComponent.push(quantitySalesComponent(e.component))
    countMaxComponent = Math.max.apply(null, sellingComponent)
    if(quantitySalesComponent(e.component) === countMaxComponent){
    nameComponent = e.component
    }
  })
  return nameComponent
}

console.log(bestSellerComponent() ); // Monitor GPRS 3000

//1-g

const wereThereSales = (month, year) => {
  return salesMonth(month, year) > 0;
  }
  
  console.log('hubo ventas?:' , wereThereSales(3, 2019));

//3-a
  const renderPerMonth = () => {
    
    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    let monthsNumber= [1,2,3,4,5,6,7,8,9,10,11,12]
    let perMonth= 0 
    
    for (let i= 0; i< months.length; i++) {
      
        perMonth= console.log('Total de '+ months[i] + ': ' + salesMonth(monthsNumber[i], 2019));
    }
      return perMonth   
      
    }
    
    renderPerMonth()
