/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const existUser = this.usersRepository.findByEmail(email);

    if(existUser){
      throw new Error("Já existe um usuário com esse e-mail !");
    }

    const user = this.usersRepository.create({name, email});

    return user;
  }
}

export { CreateUserUseCase };
