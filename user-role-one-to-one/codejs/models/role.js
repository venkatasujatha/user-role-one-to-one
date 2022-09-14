

const EntitySchema = require('typeorm').EntitySchema;
const {user} =require('/home/tectoro/Desktop/codejs/models/user.js');

const role1 = new EntitySchema({
  name: 'role',
  tableName: 'role',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    role_name: {
      type: 'varchar',
    }
  },
  relations:{
    user:{
        target:user,
        type:'one-to-one',
        joinColumn:true,
        joinTable: true,
        inverseSide:"user",
        cascade: true,
        eager: true,
        null:false,
        referenceColumn:true
    }
}
});

module.exports = {role1};
