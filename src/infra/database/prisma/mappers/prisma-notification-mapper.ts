import { Notifications } from "@application/entities/notifications";

export class PrismaNotificationMapper {
    static prismaData(notification: Notifications){
        return {
            id: notification.id,
            category: notification.category,
            content: notification.content.value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt,
        }
    }
}