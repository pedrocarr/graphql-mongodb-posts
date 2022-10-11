import { Inject } from '@nestjs/common';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UserService } from 'src/user/user.service';
import { AssignUsersToTweetInput } from './assign-users-to-tweet-input';
import { CreateTweetInput } from './create-tweet.input';
import { Tweet } from './tweet.entity';
import { TweetService } from './tweet.service';
import { TweetType } from './tweet.type';

@Resolver((_of) => TweetType)
export class TweetResolver {
  @Inject()
  private readonly tweetService: TweetService;

  @Inject()
  private readonly userService: UserService;

  @Query((_returns) => TweetType)
  tweet(@Args('id') id: string) {
    return this.tweetService.getTweet(id);
  }

  @Query((_returns) => [TweetType])
  tweets() {
    return this.tweetService.getTweets();
  }

  @Mutation(() => TweetType)
  createTweet(@Args('createTweetInput') createTweetInput: CreateTweetInput) {
    return this.tweetService.createTweet(createTweetInput);
  }

  @Mutation(() => TweetType)
  assignUsersToTweet(
    @Args('assignUsersToTweetInput')
    assignUsersToTweetInput: AssignUsersToTweetInput,
  ) {
    const { tweetId, usersIds } = assignUsersToTweetInput;
    return this.tweetService.assignUsersToTweet(tweetId, usersIds);
  }

  @ResolveField()
  async users(@Parent() tweet: Tweet) {
    return this.userService.getManyUsers(tweet.users);
  }
}
