import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Boilerplate } from './entities/boilerplate.entity';
import { CreateBoilerplateDto } from './dto/create-boilerplate.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class MypageService {
  constructor(
    @InjectRepository(Boilerplate)
    private boilerplateRepository: Repository<Boilerplate>
  ) {}

  async create(createBoilerplateDto: CreateBoilerplateDto, file: Express.Multer.File): Promise<Boilerplate> {
    const newBoilerplate = this.boilerplateRepository.create(createBoilerplateDto);
    const savePath = path.join(__dirname, '../../storage', file.originalname);
    fs.writeFileSync(savePath, file.buffer);
    newBoilerplate.filePath = savePath;
    return this.boilerplateRepository.save(newBoilerplate);
  }

  findAll() {
    return this.boilerplateRepository.find();
  }

  findOne(id: number) {
    return this.boilerplateRepository.findOneBy({id});
  }

  async remove(id: number): Promise<void> {
    const boilerplate = await this.boilerplateRepository.findOneBy({id});
    fs.unlinkSync(boilerplate.filePath);
    await this.boilerplateRepository.remove(boilerplate);
  }
}
