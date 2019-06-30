var franchise = {
    
    sellers: ["Ada", "Grace", "Hedy", "Sheryl"],

    branch: ['Centro', 'Caballito'],
    
    sales: [
      { date: new Date(2019, 1, 4), seller: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], branch:'Centro'}, 
      { date: new Date(2019, 0, 1), seller: "Ada", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], branch:'Centro'},
      { date: new Date(2019, 0, 2), seller: "Grace", components: ["Monitor ASC 543", "Motherboard MZI"],  branch:'Centro'},
      { date: new Date(2019, 0, 10), seller: "Ada", components: ["Monitor ASC 543", "Motherboard ASUS 1200"],  branch:'Centro'},
      { date: new Date(2019, 0, 12), seller: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], branch:'Centro'},
      { date: new Date(12/02/2019), seller: "Hedy", components: ["Monitor GPRS 3000", "HDD Toyiva"], branch:'Centro'},
      { date: new Date(24/02/2019), seller: "Sheryl", components: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], branch:'Caballito'},
      { date: new Date(01/02/2019), seller: "Ada", components: ["Motherboard MZI", "RAM Quinston Fury"], branch:'Centro'},
      { date: new Date(11/02/2019), seller: "Grace", components: ["Monitor ASC 543", "RAM Quinston"], branch:'Caballito'},
      { date: new Date(15/02/2019), seller: "Ada", components: ["Motherboard ASUS 1200", "RAM Quinston Fury"], branch:'Centro'},
      { date: new Date(12/02/2019), seller: "Hedy", components:["Motherboard ASUS 1500", "HDD Toyiva"], branch:'Caballito'},
      { date: new Date(21/02/2019), seller: "Grace", components: ["Motherboard MZI", "RAM Quinston"], branch:'Centro'},
      { date: new Date(08/02/2019), seller: "Sheryl", components: ["Monitor ASC 543", "HDD Wezter Dishital"], branch:'Centro'},
      { date: new Date(16/02/2019), seller: "Sheryl", components: ["Monitor GPRS 3000", "RAM Quinston Fury"], branch:'Centro'},
      { date: new Date(27/02/2019), seller: "Hedy", components: ["Motherboard ASUS 1200", "HDD Toyiva"], branch:'Caballito'},
      { date: new Date(22/02/2019), seller: "Grace", components: ["Monitor ASC 543", "HDD Wezter Dishital"], branch:'Centro'},
      { date: new Date(05/02/2019), seller:  "Ada", components: ["Motherboard ASUS 1500", "RAM Quinston"], branch:'Centro'},
      { date: new Date(01/02/2019), seller: "Grace", components: ["Motherboard MZI", "HDD Wezter Dishital"], branch:'Centro'},
      { date: new Date(07/02/2019), seller: "Sheryl", components: ["Monitor GPRS 3000", "RAM Quinston"], branch:'Caballito'},
      { date: new Date(14/02/2019), seller: "Ada", components: ["Motherboard ASUS 1200", "HDD Toyiva"], branch:'Centro'},
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

const machinePrice = components => {
  let sumComponents = 0
  components.forEach(e => {
    const piece = franchise.prices.find(({component}) => e === component)
    sumComponents = sumComponents + piece.price
  })
  return sumComponents
} 

console.log(machinePrice(["Monitor ASC 543", "Motherboard MZI" ]))

//1-b

const quantitySalesComponent = (component) =>{
  let count = 0
  franchise.sales.forEach(sale => {
    sale.components.forEach(piece => {
      if(piece === component){
        count++
      }
    })
  })
  return count
}

console.log(quantitySalesComponent("Monitor ASC 543"))

//1-c 

/*const bestSellerMonth = (month, year) => {
  const sales = franchise.sales;
  const sellers = franchise.sellers;

  const fileteredSales = sales.filter(
    sale => sale.date.getMonth() + 1 === month && sale.date.getFullYear() === year
  );

  const salesBySeller = sellers.map(seller => {
    return {
      seller: seller,
      totalAmount: fileteredSales.reduce((accum, curr) => { 
        if (seller === curr.seller) {
          return accum + machinePrice(curr.components);
        } else {
          return accum;
        }
      }, 0)
    };
  });

  //(condicion) ? siSeCumpleHagoEsto : siNoSeCumpleHagoEstoOtro;

  return salesBySeller
    .reduce((accum, curr) => (curr.totalAmount > accum.totalAmount ? curr : accum), { seller: "", totalAmount: 0 });
};


console.log('best seller was: ' + bestSellerMonth(2, 2019).seller + ', with sales for: ' + bestSellerMonth(2, 2019).totalAmount);*/

const bestSellerMonth = (month, year) => {
  const fileteredSales = franchise.sales.filter(sale => sale.date.getMonth() + 1 === month && sale.date.getFullYear() === year);
  return franchise.sellers
    .map(seller => ({
      seller: seller,
      totalAmount: fileteredSales.reduce((accum, curr) => (seller === curr.seller) ? accum + machinePrice(curr.components) : accum, 0)
    }))
    .reduce((accum, curr) => (curr.totalAmount > accum.totalAmount ? curr : accum), { seller: "", totalAmount: 0 })
    .seller;
}

console.log('best seller was: ' + bestSellerMonth(2, 2019));

//1-d

 const salesMonth = (month, year) => {
  let sumMonth = 0
  for (let index = 0; index < franchise.sales.length; index++) {
      let components = franchise.sales[index].components
      if (franchise.sales[index].date.getMonth() + 1 == month && franchise.sales[index].date.getFullYear() == year) {
          sumMonth = sumMonth + machinePrice(components)
      }

  }
  return sumMonth
}
console.log(salesMonth(1, 2019)); // 1250

//1-e

const salesBySeller = name => {
  let sellingSum = 0
  franchise.sales.forEach(e => {
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

  for (let index = 0; index < franchise.sales.length; index++) {
    franchise.sales[index].sucursal = 'Centro'

}

console.log(franchise.sales)

franchise.sales.forEach(sold => {
  sold.branch = 'Centro';
});
console.log(franchise.sales);

// 2-a
const salesForBranch = (branch) => {
  const sales = franchise.sales;
  return sales
    .filter(sale => sale.branch === branch)
    .reduce((accum, curr) => accum = accum + machinePrice(curr.components), 0);
};

console.log('sales for branch Centro', salesForBranch('Centro'));




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

    