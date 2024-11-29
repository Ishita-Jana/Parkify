import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/util/prisma';

@Injectable()
export class UsersService {

  constructor(private readonly prisma: PrismaService) {}
  create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({ data: createUserInput });
    // 'This action adds a new user';
  }

  findAll() {
    return this.prisma.user.findMany(); 
    // `This action returns all users`;
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { uid: id } });
    // `This action returns a #${id} user`;
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.prisma.user.update({ where: { uid: id }, data: updateUserInput }); 
    // `This action updates a #${id} user`;
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { uid: id } }); 
    // `This action removes a #${id} user`;
  }
}
