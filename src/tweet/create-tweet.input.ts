import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, MinLength } from 'class-validator';

@InputType()
export class CreateTweetInput {
  @MinLength(1)
  @Field((_type) => String)
  text: string;

  @IsDateString()
  @Field((_type) => String)
  createdAt: Date;

  @IsDateString()
  @Field((_type) => String)
  updatedAt: Date;

  @Field((_type) => Boolean)
  liked: boolean;
}
