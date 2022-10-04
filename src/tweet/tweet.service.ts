import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tweet } from './tweet.entity';
import { v4 as uuid } from 'uuid';
import { CreateTweetInput } from './create-tweet.input';

@Injectable()
export class TweetService {
  constructor(
    @InjectRepository(Tweet)
    private tweetRepository: Repository<Tweet>,
  ) {}

  async getTweet(id: string): Promise<Tweet> {
    return this.tweetRepository.findOneByOrFail({ id });
  }

  async getTweets(): Promise<Tweet[]> {
    return this.tweetRepository.find();
  }

  async createTweet(createTweetInput: CreateTweetInput): Promise<Tweet> {
    const tweet = this.tweetRepository.create({
      id: uuid(),
      ...createTweetInput,
    });

    return this.tweetRepository.save(tweet);
  }
}
