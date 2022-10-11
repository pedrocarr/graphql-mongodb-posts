import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignUsersToTweetInput {
  @IsUUID()
  @Field((_type) => ID)
  tweetId: string;

  @IsUUID('4', { each: true })
  @Field((_type) => [ID])
  usersIds: string[];
}
