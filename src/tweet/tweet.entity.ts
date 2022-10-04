import { Entity, PrimaryColumn, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Tweet {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  text: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  liked: boolean;
}
