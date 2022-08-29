const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please check your data entry no name specified']
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String
});
const Fruit = mongoose.model('Fruit',fruitSchema)

const fruit = new Fruit ({
    name:'apple',
    rating:10,
    review: "Pretty solid"

})

// fruit.save();

const personSchema = new mongoose.Schema({
    name:String,
    age:Number,
    favouriteFruit : fruitSchema
})

const Person = mongoose.model('Person',personSchema)

const person = new Person({
    name:'asad',
    age:20
})

// person.save();

const orange = new Fruit({
    name:'orange',
    rating:9,
    review:'Sour'
})
// const apple = new Fruit({
//     name:'apple',
//     rating:5,
//     review:'sweet'
// })
// const banana = new Fruit({
//     name:'banana',
//     rating:6,
//     review:"sweet but weird"
// })

const pineapple = new Fruit({
    name:'Pineapple',
    ratings:5,
    review: 'Great fruit'
})

// pineapple.save();

const Amy = new Person({
    name:'Amy',
    age:12,
    favouriteFruit: pineapple
})

// Amy.save()

const mango = new Fruit({
    name:'mango',
    rating:10,
    review:'Yummy'
})
mango.save()

// Fruit.insertMany([orange,apple,banana],function(err){
//     if(err){
//         console.log(err)

//     }else{
//         console.log('Successfuly logged in')
//     }
// })
   
Fruit.find(function(err,fruits){
    if(err){
        console.log(err)
        mongoose.connection.close()
    }

    else{
        console.log(fruits)

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        })

    }

})

// Fruit.updateOne({_id:'630c9a1e8128c81f021f2416'},{name:'peach'},function(err){
//     if(err){
//         console.log(err)

//     }else{
//         console.log('Succesfully update')
//     }
// })

Person.updateOne({name:'asad'},{favouriteFruit:orange},function(err){
    if(err){
        console.log(err)

    }else{
        console.log('Updated asad successfuly')
    }
})