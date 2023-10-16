const { Sequelize } = require("sequelize");
// //MsSQL Configuration
// const sequelize = new Sequelize("Store-Management",null,null,{
//     dialect: "mssql",
//     dialectOptions: {
//       authentication: {
//         type: "default",
      
//       },
//     },  
//     options: {
//       instanceName: 'AK-SWL-0261\SQLEXPRESS01'
//     }
// });
// module.exports = sequelize;

// MySQL Configuration
const sequelize = new Sequelize("storedb","root","rooshan^!!)!)^&)^(#(",{
  dialect: "mysql",
  host: "localhost"
});
module.exports = sequelize;

//ODM Configuration
// module.exports = {
//   url: "mongodb://localhost:27017/Store",
//   options: {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
// };
