const mongodb = require('./db');

const createschema = () => {
   try {
    const testschema = new mongodb.Schema({
        name: String,
        password: String,
        email: String
    });
    const testmodel = new mongodb.model("table",testschema);
    module.exports = testmodel;
   } catch (error) {
     console.log("Schema Error!!");
   }
}
createschema();
