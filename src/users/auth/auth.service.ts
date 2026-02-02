import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../create-user.dto';
import { UserService } from '../user/user.service';
import { User } from '../user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public async register(createUserDto: CreateUserDto) {
    const existingUser = await this.userService.findOneByEmail(
      createUserDto.email,
    );

    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    const user = await this.userService.createUser(createUserDto);

    return user;
  }

  private generateToken(user: User): string {
    const payload = { sub: user.id, name: user.name };
    return this.jwtService.sign(payload);
  }
}
