import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  //보일러플레이트 코드의 데이터 모델을 정의.
  //TypeORM 사용하여 PostgreSQL 데이터베이스의 테이블과 매핑.
  //각 보일러플레이트 코드는 고유 ID, 이름, 설명, 그리고 파일 경로를 가짐
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filePath: string;
}
