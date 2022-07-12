import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/Prisma/prisma.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

@Injectable()
export class ContentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateContentDto) {
    const createContent = await this.prisma.dataUser.create({ data });
    return createContent;
  }

  async findAll() {
    const getAllContent = await this.prisma.dataUser.findMany();
    return getAllContent;
  }

  async findOne(id: number) {
    const getOneContent = await this.prisma.dataUser.findUnique({
      where: { id: id },
    });
    return getOneContent ? getOneContent : 'Esse usuário não existe!';
  }

  async update(id: number, data: UpdateContentDto) {
    const updateContent = await this.prisma.dataUser.findUnique({
      where: { id },
    });
    return updateContent
      ? await this.prisma.dataUser
          .update({ where: { id }, data })
          .then(() => 'Usuário atualizado com sucesso!')
      : 'Esse usuário não existe!';
  }

  async remove(id: number) {
    const deleteContent = await this.prisma.dataUser.findUnique({
      where: { id },
    });

    return deleteContent
      ? await this.prisma.dataUser
          .delete({ where: { id } })
          .then(() => 'Usuário deletado com sucesso!')
      : 'Esse usuário não existe!';
  }
}
