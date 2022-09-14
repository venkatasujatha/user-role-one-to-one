const EntitySchema = require('typeorm').EntitySchema;

const user = new EntitySchema({
  name: 'user',
  tableName: 'user',
  columns: {
    userid: {
      primary: true,
      type: 'int',
      generated: true
    },
    firstname: {
      type: 'varchar',
    },
    lastname: {
      type: 'varchar',
    },
    email: {
      type: 'varchar',
    },
  }, 
  
});

module.exports = {user};
