import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from 'src/application/use-cases/send-notifications';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) { }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId, } = body;

    const { notification } = await this.sendNotification.execute({
      content, category, recipientId,
    });

    
    return {notifications: NotificationViewModel.toHttp(notification)};
  }
}
