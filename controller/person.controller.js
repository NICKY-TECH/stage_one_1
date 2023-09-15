const { join } = require("path");

const { Person } = require(join(__dirname, "..", "model", "person.model"));

const createPerson = async (req, res) => {
  const { person } = req.params;
  console.log("req.body outside");
  console.log(req.body);
//   const found = await Person.findOne({
//     $or: [{ age: person, _id: person, name: person, age: person }],
//   });
const found = await Person.findOne({
    $or: [{ age: person,name: person, age: person }],
  });
  console.log("found");
  console.log(found);
  if (found) {
    console.log("found");
    res.status(400).json({
      success: false,
      message: "A person with this name already exists",
      data: {},
    });
  } else {
    if (req.body) {
      console.log("res.body");
      const { age, gender, name } = req.body;
      if (age && gender) {
        const newPerson = new Person({
          age: age ? age : "",
          gender: gender ? gender : "",
          name: name ? name : "",
        });
        await newPerson.save();
        return res.status(201).json({
          success: true,
          message: "New person successfully created",
          data: {},
        });
      } else {
        console.log("first error body");
        return res.status(400).json({
          success: false,
          message: "age, name and gender field cannot be left empty",
          data: {},
        });
      }
    } else {
      console.log("first error body");
      return res.status(400).json({
        success: false,
        message: "age, name and gender field cannot be left empty",
        data: {},
      });
    }
  }
};

const updatePerson = async (req, res) => {
  const { id } = req.params;
  if (req.body) {
     const matched2= await Person.updateOne({ name: id }, { $set: req.body });

     const matched= await Person.updateOne({ _id: id }, { $set: req.body });
      const matched3 =await Person.updateOne({ age: id }, { $set: req.body });
      const matched4 =await Person.updateOne({ gender: id }, { $set: req.body });
      console.log("mstched2")
      console.log(matched2)
      console.log('matched3')
      console.log(matched3)
      console.log('macthed4')
      console.log(matched4)
      if (matched2.matchedCount >= 1||matched3.matchedCount >= 1||matched4.matchedCount >= 1||matched) {
      return res.status(200).json({
        success: true,
        message: "Person's details successfully updated",
        data: {},
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Provide either gender, name or age field to be updated",
        data: {},
      });
    }
  }
};

const getAllPersons = async (req, res) => {
  const persons = await Person.find({});
  return res.status(200).json({
    success: true,
    messgae: "All persons successfully retrieved",
    data: {
      persons,
    },
  });
};

const deletePerson = async (req, res) => {
  const { id } = req.params;
    (await Person.deleteOne({ age: id })) ||
    (await Person.deleteOne({ name: id })) ||
    (await Person.deleteOne({ gender: id }));
  res.status(200).json({
    success: true,
    message: "Person successfully deleted",
    data: {},
  });
};

const getPerson = async (req, res) => {
  const { id } = req.params;
//   const found = await Person.findOne({
//     $or: [{ age: id,name: id,gender:id }],
//   });
  const foundId = await Person.findOne({ gender: id });
  const foundName = await Person.findOne({ name: id });
  const  foundAge = await Person.findOne({ age: id });
  if(foundId){
    
    let value = foundId;
  return  res.status(200).json({
      success: true,
      message: "Person's details successfully retrieved",
      data:value,
    });
  }else if(foundName){

    
    let value4 = foundName;
  return  res.status(200).json({
      success: true,
      message: "Person's details successfully retrieved",
      data: { value4},
    });
  }
else if(foundAge){
  let  value5 = foundAge;
    return res.status(200).json({
      success: true,
      message: "Person's details successfully retrieved",
      data: { value5},
    });
}

  else{
    res.status(400).json({
        success: true,
        message: "Invalid details",
        data: { },
      });
  }
};

module.exports = {
  createPerson,
  getPerson,
  updatePerson,
  getAllPersons,
  deletePerson,
};
