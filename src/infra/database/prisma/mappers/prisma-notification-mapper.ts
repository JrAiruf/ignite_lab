import { Notification as RawNotification } from "@prisma/client";
import { Notifications } from "@application/entities/notifications";
import { Content } from "@application/entities/content";

export class PrismaNotificationMapper {
    static prismaData(notification: Notifications) {
        return {
            id: notification.id,
            category: notification.category,
            content: notification.content.value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt,
        }
    }

    static toDomain(raw: RawNotification): Notifications {
        return new Notifications({
            category: raw.category,
            content: new Content(raw.content),
            createdAt: raw.createdAt,
            canceledAt: raw.canceledAt,
            recipientId: raw.category,
            readAt: raw.readAt,
        }, raw.id);
    }
}