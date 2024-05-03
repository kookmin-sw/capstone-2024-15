import { Controller, Get, Post, Body, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MypageService } from './mypage.service';
import { CreateBoilerplateDto } from './dto/create-boilerplate.dto';

@Controller('boilerplates')
export class MypageController {
  constructor(private readonly mypageService: MypageService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() createBoilerplateDto: CreateBoilerplateDto, @UploadedFile() file: Express.Multer.File) {
    return this.mypageService.create(createBoilerplateDto, file);
  }

  @Get()
  findAll() {
    return this.mypageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mypageService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mypageService.remove(+id);
  }
}
