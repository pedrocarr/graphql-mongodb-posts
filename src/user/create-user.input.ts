import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @MinLength(1)
  @Field((_type) => String)
  name: string;

  @Field((_type) => String)
  email: string;

  @IsDateString()
  @Field((_type) => String)
  createdAt: Date;

  @IsDateString()
  @Field((_type) => String)
  updatedAt: Date;
}
