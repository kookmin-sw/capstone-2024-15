import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  username: 'beginergainadmin',
  password: 'beginadmin77**',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  host: 'beginergain-database.crmim00qe4z0.ap-northeast-2.rds.amazonaws.com',
  ssl: {
    rejectUnauthorized: false,
  },
};
