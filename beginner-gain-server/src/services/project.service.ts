import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectDto } from '../dtos/project.dto';
import * as fs from 'fs';
import { Project, User } from '../entities';
import { getBoilerPlateUrl } from '../helper/boilerplate';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private boilerplateRepository: Repository<Project>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(projectDto: ProjectDto): Promise<Project> {
    const owner = await this.userRepository.findOne({
      where: { id: projectDto.userId },
    });
    const project = this.boilerplateRepository.create({
      name: projectDto.name,
      description: projectDto?.description,
      filePath: getBoilerPlateUrl(),
      owner: owner,
      select: projectDto.select,
    });
    return this.boilerplateRepository.save(project);
  }

  async findAll() {
    return await this.boilerplateRepository.find();
  }

  async findOne(id: string) {
    return await this.boilerplateRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    const boilerplate = await this.boilerplateRepository.findOneBy({ id });
    fs.unlinkSync(boilerplate.filePath);
    await this.boilerplateRepository.remove(boilerplate);
  }
}
