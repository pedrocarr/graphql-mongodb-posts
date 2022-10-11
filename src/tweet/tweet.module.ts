import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { Tweet } from './tweet.entity';
import { TweetResolver } from './tweet.resolver';
import { TweetService } from './tweet.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tweet]), UserModule],
  providers: [TweetResolver, TweetService],
})
export class TweetModule {}
