import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TweetModule } from './tweet/tweet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './tweet/tweet.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/tweet',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Tweet],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      path: '/tweet',
    }),
    TweetModule,
  ],
})
export class AppModule {}
