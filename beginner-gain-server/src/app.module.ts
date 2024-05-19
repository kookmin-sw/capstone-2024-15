import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './typeorm.config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './modules/user.module.js';
import { QuestionModule } from './modules/question.module';
import { AnswerModule } from './modules/answer.module';
import { ProjectModule } from './modules/project.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    QuestionModule,
    AnswerModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
