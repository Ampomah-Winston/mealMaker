let menu = {  
  _courses: {
    _appetizers:[],
    _mains:[],
    _desserts:[],
    get appetizers(){      
    },
    get mains(){      
      return this.appetizers  
    },
    get desserts(){        
    },
    set appetizers(appetizer){        
    },
    set mains(main){        
    },
    set desserts(dessert){        
    }
  },
  get courses(){
    return Object.entries(this._courses)
  },  
  addDishToCourse(courseName,dishName,dishPrice){
    dish = {
       name:dishName,
       price:dishPrice
    }
    switch(courseName){
      case 'appetizers':
        this._courses['_appetizers'].push(dish)
      break;
      case 'mains':
        this._courses['_mains'].push(dish)
      break;
      case 'desserts':
        this._courses['_desserts'].push(dish)
      break;
    }
  },
  getRandomDishFromCourse(courseName){
    let dishes = this._courses[courseName];
    let rn = Math.floor(Math.random()*dishes.length)
    return dishes[rn];
  },
  generateRandomMeal(){
    let appetizer = this.getRandomDishFromCourse('_appetizers');
    let main = this.getRandomDishFromCourse('_mains');
    let dessert = this.getRandomDishFromCourse('_desserts');
    price = appetizer.price + main.price + dessert.price;
    return `Appetizer ${appetizer.name} : Main ${main.name} : Dessert ${dessert.name} at a price of ${price}`
  }
}
menu.addDishToCourse('appetizers','redwine',20)
menu.addDishToCourse('appetizers','sobolo',3)
menu.addDishToCourse('appetizers','boiled egg',5)
menu.addDishToCourse('mains','banku',10)
menu.addDishToCourse('mains','yam',40)
menu.addDishToCourse('mains','fufu',50)
menu.addDishToCourse('desserts','khebab',20)
menu.addDishToCourse('desserts','banana',5)
menu.addDishToCourse('desserts','pie',12)
let meal = menu.generateRandomMeal();
console.log(meal)