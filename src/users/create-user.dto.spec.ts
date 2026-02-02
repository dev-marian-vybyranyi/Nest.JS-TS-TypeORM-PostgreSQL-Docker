import { validate } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

describe('CreateUserDto', () => {
  it('should validate complete valid data', async () => {
    const dto = new CreateUserDto();
    dto.email = 'test@test.com';
    dto.name = 'Marian';
    dto.password = '123456';
    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });
});