import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from './AuthenticateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let authenticateUser: AuthenticateUserService;

describe('AuthentucteUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to atuhenticate', async () => {
    const user = await fakeUsersRepository.create({
      name: 'john Doe',
      email: 'jhon@example.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'jhon@example.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to atuhenticate with non existing user', async () => {
    await expect(
      authenticateUser.execute({
        email: 'jhon@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to atuhenticate with wrong password', async () => {
    await fakeUsersRepository.create({
      name: 'john Doe',
      email: 'jhon@example.com',
      password: '123456',
    });

    await expect(
      authenticateUser.execute({
        email: 'jhon@example.com',
        password: 'wrong-password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
