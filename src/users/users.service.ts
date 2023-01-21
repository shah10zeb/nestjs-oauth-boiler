import { Injectable } from '@nestjs/common';
import { Role } from 'src/entities/roles.enum';
import { User } from 'src/entities/users.entity';

// This should be a real class/interface representing a user entity


@Injectable()
export class UsersService {
  private readonly users:User[] = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
      roles: [Role.READ_USER, Role.WRITE_USER]
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      roles: [Role.READ_USER, Role.WRITE_USER]
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
