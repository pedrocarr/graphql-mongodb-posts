import { Resolver, Query } from '@nestjs/graphql';
import { UserType } from './user.type';

@Resolver((_of) => UserType)
export class UserResolver {
  @Query((_returns) => UserType)
  user() {
    return {
      id: '1',
      name: 'John Doe',
      email: 'eng.pedro.amb@gmail.com',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }
}
