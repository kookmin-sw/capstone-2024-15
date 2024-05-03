import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectDto } from '../dtos/project.dto';
import * as fs from 'fs';
import { Project } from '../entities';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private boilerplateRepository: Repository<Project>,
  ) {}

  async create(projectDto: ProjectDto): Promise<Project> {
    const project = this.boilerplateRepository.create(projectDto);
    return this.boilerplateRepository.save(project);
  }

  findAll() {
    return this.boilerplateRepository.find();
  }

  findOne(id: string) {
    return this.boilerplateRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    const boilerplate = await this.boilerplateRepository.findOneBy({ id });
    fs.unlinkSync(boilerplate.filePath);
    await this.boilerplateRepository.remove(boilerplate);
  }
}
