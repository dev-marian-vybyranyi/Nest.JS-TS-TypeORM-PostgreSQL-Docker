import { validate } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

describe('CreateUserDto', () => {
  let dto = new CreateUserDto();

  beforeEach(() => {
    dto = new CreateUserDto();
    dto.email = 'test@test.com';
    dto.name = 'Marian';
    dto.password = 'Password123';
  });

  it('should validate complete valid data', async () => {
    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should fail on invalid email', async () => {
    dto.email = 'test';
    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].property).toBe('email');
    expect(errors[0].constraints).toHaveProperty('isEmail');
  });

  it('should return specific validation messages', async () => {
    dto.password = 'abcdfa';
    const errors = await validate(dto);
    const passwordError = errors.find((error) => error.property === 'password');
    expect(passwordError).not.toBeUndefined();
    const messages = Object.values(passwordError?.constraints ?? {});
    expect(messages).toContain(
      'Password must contain at least 1 uppercase letter',
    );
  });
});
