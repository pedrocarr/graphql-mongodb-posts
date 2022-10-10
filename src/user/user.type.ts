import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserType {
  @Field((_type) => ID)
  id: string;

  @Field((_type) => String)
  name: string;

  @Field((_type) => String)
  email: string;

  @Field((_type) => String)
  createdAt: Date;

  @Field((_type) => String)
  updatedAt: Date;
}
