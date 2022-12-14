import { Controller, Delete, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { Body } from '@nestjs/common/decorators';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) { }

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;
console.log(body.recipientId);
    await this.prisma.notification.create({ 
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      }
    });
  }

  @Delete()
  async remove() {

  }
}
