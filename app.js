const mongoose = require("mongoose");

const db = mongoose.connect("mongodb://localhost:27017/FruitsDB", { useNewUrlParser: true });

console.log("Worked Successfully");

const fruitSchema = new mongoose.Schema({
  name: {
    type : String,
    required : [true, "Please check your data entry, no name specified "]
  },
  rating: {
    type : Number,
    min : 1,
    max : 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 7,
  review: "Piches are so yummy!"
});

// fruit.save();

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  marks: Number,
  favouriteFruit : fruitSchema
});

const People = mongoose.model("People", peopleSchema);

const pineapple = new Fruit({
  // _id: mongoose.Types.ObjectId(),
  name : "watermeloneee",
  rating : 8,
  review : "Big Fruit" 
})

pineapple.save();


const people = new People({
  name: "John",
  age: 17,
  marks: 88,
  favouriteFruit : pineapple
});

people.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "The Best fruit"
// });

// const orange = new Fruit({
//   name: "orange",
//   rating: 7,
//   review: "Sour"
// });

// const banana = new Fruit({
//   name: "banana",
//   rating: 6,
//   review: "Weird texture"
// });

// const items = [kiwi, orange, banana];

// Fruit.insertMany(items)
//   .then(() => {
//     console.log("Items added successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });



  Fruit.find()
  .then((fruits) => {
    fruits.forEach(fruit => {
      console.log(fruit.name);
    });


    setTimeout(()=>{
      mongoose.connection.close();
    }, 5)

  })
  .catch((err) => {
    console.log(err);
  })


  // Fruit.updateOne({ _id : "64b01c1f188b6aa9cb449724"}, {name : "Peach"})
  // .then(() => {
  //   console.log("Successful")
  // })
  // .catch((err) => {
  //   console.log(err);
  // })

  // Fruit.deleteOne({ _id : "64b01f7ae812e57cd408c547"})
  // .then(() => {
  //   console.log("Successfully Deleted");
  // })
  // .catch((err) => {
  //   console.log(err);
  // })


  // People.deleteMany({ name : "Vinay"})
  // .then(() => {
  //     console.log("Successfully Deleted all");
  // })
  // .catch((err) => {
  //   console.log(err);
  // })