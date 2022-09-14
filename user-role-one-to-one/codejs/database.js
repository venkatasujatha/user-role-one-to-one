const { DataSource} = require('typeorm');

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nodedb1',
  entities: ['/home/tectoro/Desktop/codejs/models/*.js'],
  migrations: ['migrations/*.js'],
  migrationsTableName:'nodedb_migrations',
  cli: {
    entitiesDir: ['/home/tectoro/Desktop/codejs/models/*.js'],
  },
  synchronize: true,
  
});

module.exports = { dataSource };











