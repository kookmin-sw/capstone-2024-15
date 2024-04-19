import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../modules/user/user.model'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'beginnergain',
  entities: [User],
  synchronize: true,
};
  