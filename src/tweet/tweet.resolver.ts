import { Resolver, Query } from '@nestjs/graphql';
import { TweetType } from './tweet.type';

@Resolver((_of) => TweetType)
export class TweetResolver {
  @Query((_returns) => TweetType)
  tweet() {
    return {
      id: '1',
      text: 'Hello World',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      liked: false,
    };
  }
}
