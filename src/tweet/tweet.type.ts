import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserType } from 'src/user/user.type';

@ObjectType('Tweet')
export class TweetType {
  @Field((_type) => ID)
  id: string;

  @Field((_type) => String)
  text: string;

  @Field((_type) => String)
  createdAt: Date;

  @Field((_type) => String)
  updatedAt: Date;

  @Field((_type) => Boolean, { defaultValue: false })
  liked: boolean;

  @Field((_type) => [UserType])
  users: string[];
}
