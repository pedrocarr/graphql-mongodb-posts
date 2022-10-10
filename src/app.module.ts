import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TweetModule } from './tweet/tweet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './tweet/tweet.entity';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/tweet',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Tweet, User],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      path: '/tweet',
    }),
    TweetModule,
    UserModule,
  ],
})
export class AppModule {}
