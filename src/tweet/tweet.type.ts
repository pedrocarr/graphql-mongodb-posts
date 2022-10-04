import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Tweet')
export class TweetType {
  @Field((_type) => ID)
  id: string;

  @Field()
  text: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field((_type) => Boolean, { defaultValue: false })
  liked: boolean;
}
