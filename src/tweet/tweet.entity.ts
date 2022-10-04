import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Tweet {
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
