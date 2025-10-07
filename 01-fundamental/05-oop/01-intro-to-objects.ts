//OOP

const car = {
    brand : "Nissan",
    model : "Nissan skyline R35",
    price : {
        new : 900_000_000,
        used : 650_000_000,
    },
    color : "white japanesse",
    showcardetail : () => {
        return `This car brand is ${car.brand} and the model is ${car.model} and the price is ${car.price.new}`
    }

    
}
console.log(car.showcardetail())