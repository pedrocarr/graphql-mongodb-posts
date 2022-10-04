import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './tweet.entity';
import { TweetResolver } from './tweet.resolver';
import { TweetService } from './tweet.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tweet])],
  providers: [TweetResolver, TweetService],
})
export class TweetModule {}
