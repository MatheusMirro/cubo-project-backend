import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { PrismaService } from 'src/Prisma/prisma.service';

@Module({
  controllers: [ContentController],
  providers: [ContentService, PrismaService],
})
export class ContentModule {}
