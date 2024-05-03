// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { PostImage } from '../entities/index.js';
// import { uploadObjectToS3 } from "../helper/s3.helper.js";
//
// @Injectable()
// export class PostImageService {
//     constructor(
//         @InjectRepository(PostImage)
//         private readonly postImageRepository: Repository<PostImage>,
//     ) {}
//
//     async create(imageBuffer: Buffer, postId: string): Promise<PostImage> {
//         const s3ImagePath = await uploadObjectToS3(imageBuffer);
//         const urlPath = `https://apt-dam-bucket.s3.ap-northeast-2.amazonaws.com/develop/${s3ImagePath}`;
//         const postImage = this.postImageRepository.create({ path: urlPath, post: { id: postId } });
//         console.log(postImage);
//         return await this.postImageRepository.save(postImage);
//     }
//     async uploadS3(imageBuffer: Buffer): Promise<string> {
//         const s3ImagePath = await uploadObjectToS3(imageBuffer);
//         return `https://apt-dam-bucket.s3.ap-northeast-2.amazonaws.com/develop/${s3ImagePath}`;
//     }
//     async findAllByPostId(postId: string): Promise<PostImage[]> {
//         return this.postImageRepository.find({ where: { post: { id: postId } } });
//     }
// }
