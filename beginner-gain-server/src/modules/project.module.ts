import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project, User } from '../entities';
import { ProjectService } from '../services/project.service';
import { ProjectController } from '../controllers/project.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Project, User])],
  providers: [ProjectService],
  controllers: [ProjectController],
})
export class ProjectModule {}
