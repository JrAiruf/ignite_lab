import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repository";
import { Content } from "../entities/content";
import { Notifications } from "../entities/notifications";

interface SendNotificationRequest {
    recipientId: string,
    content: string,
    category: string,
}

interface SendNotificationResponse {
    notification: Notifications
}


@Injectable()
export class SendNotification {
    constructor(private notificationsRepository: NotificationsRepository){}
    
    async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
        const { recipientId, content, category } = request;

        const notification = new Notifications({
            recipientId,
            content : new Content(content),
            category
        })

        await this.notificationsRepository.create(notification);

        return { notification };    
    }

    
}