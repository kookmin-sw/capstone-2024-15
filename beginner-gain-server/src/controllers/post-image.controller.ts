// import {Controller, Param, Get, Post, UseInterceptors, UsePipes, ValidationPipe, UploadedFile} from '@nestjs/common';
// import { PostImageService } from '../services/post-image.service.js';
// import {FileInterceptor} from "@nestjs/platform-express";
//
// @Controller('post-images')
// export class PostImageController {
//     constructor(private readonly postImageService: PostImageService) {}
//
//     @Get(':postId')
//     findAllByPostId(@Param('postId') postId: string) {
//         return this.postImageService.findAllByPostId(postId);
//     }
//     @Post()
//     @UseInterceptors(FileInterceptor('image'))
//     @UsePipes(new ValidationPipe({ transform: true }))
//     async create(
//         @UploadedFile() file: Express.MulterS3.File,
//     ) {
//         const imageUrl = await this.postImageService.uploadS3(file.buffer);
//         if (imageUrl) {
//             return { message: 'success', data: imageUrl };
//         } else {
//             return { message: 'fail' };
//         }
//     }
// }
