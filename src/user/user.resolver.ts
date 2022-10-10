import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';
import { UserService } from './user.service';
import { UserType } from './user.type';

@Resolver((_of) => UserType)
export class UserResolver {
  @Inject()
  private readonly userService: UserService;

  @Query((_returns) => UserType)
  user(@Args('id') id: string) {
    return this.userService.getUser(id);
  }

  @Query((_returns) => [UserType])
  users() {
    return this.userService.getUsers();
  }

  @Mutation(() => UserType)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }
}
