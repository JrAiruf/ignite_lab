import { Controller, Post } from '@nestjs/common';
import { Body, Get, Param, Patch } from '@nestjs/common/decorators';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from 'src/application/use-cases/send-notifications';
import { NotificationViewModel } from '../view-models/notification-view-model';
import { CancelNotification } from '@application/use-cases/cancel-notifications';
import { ReadNotification } from '@application/use-cases/read-notifications';
import { UnreadNotification } from '@application/use-cases/unread-notifications';
import { CountRecipientNotification } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotification } from '@application/use-cases/get-recipient-notifications';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countNotification: CountRecipientNotification,
    private getNotifications: GetRecipientNotification,
    private cancelNotification: CancelNotification,
  ) { }
  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({ notificationId: id, })
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({ notificationId: id, })
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({ notificationId: id, })
  }

  @Get('count/from/:recipientId')
  async countFromRecipientId(@Param('recipientId') recipientId: string,): Promise<{ count: number }> {
    const { count } = await this.countNotification.execute({ recipientId });

    return { count };
  }

  @Get('from/:recipientId')
  async getFromRecipientId(@Param('recipientId') recipientId: string,){
    const { notifications } = await this.getNotifications.execute({ recipientId });

    return {
      notifications: notifications.map(NotificationViewModel.toHttp),
    };
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId, } = body;

    const { notification } = await this.sendNotification.execute({
      content, category, recipientId,
    });


    return { notifications: NotificationViewModel.toHttp(notification) };
  }
}
