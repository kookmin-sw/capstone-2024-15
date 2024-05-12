// project.dto.ts
import { IsEmpty, IsNotEmpty } from 'class-validator';
export class ProjectDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  select: { question: string; answer: string }[];

  @IsEmpty()
  description: string;
}
