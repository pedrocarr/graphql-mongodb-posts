import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tweet } from './tweet.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TweetService {
  constructor(
    @InjectRepository(Tweet)
    private tweetRepository: Repository<Tweet>,
  ) {}

  async getTweet(id: string): Promise<Tweet> {
    return this.tweetRepository.findOneByOrFail({ id });
  }

  async createTweet(text, createdAt, updatedAt, liked): Promise<Tweet> {
    const tweet = this.tweetRepository.create({
      id: uuid(),
      text,
      createdAt,
      updatedAt,
      liked,
    });

    return this.tweetRepository.save(tweet);
  }
}
