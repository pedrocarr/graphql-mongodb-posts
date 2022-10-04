import { Module } from '@nestjs/common';
import { TweetResolver } from './tweet.resolver';

@Module({
  providers: [TweetResolver],
})
export class TweetModule {}
