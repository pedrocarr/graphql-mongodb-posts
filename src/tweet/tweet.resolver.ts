import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TweetService } from './tweet.service';
import { TweetType } from './tweet.type';

@Resolver((_of) => TweetType)
export class TweetResolver {
  @Inject()
  private readonly tweetService: TweetService;

  @Query((_returns) => TweetType)
  tweet(@Args('id') id: string) {
    return this.tweetService.getTweet(id);
  }

  @Mutation(() => TweetType)
  createTweet(
    @Args('text') text: string,
    @Args('createdAt') createdAt: Date,
    @Args('updatedAt') updatedAt: Date,
    @Args('liked') liked: boolean,
  ) {
    return this.tweetService.createTweet(text, createdAt, updatedAt, liked);
  }
}
