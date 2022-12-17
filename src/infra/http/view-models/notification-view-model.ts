import { Notifications } from "@application/entities/notifications";

export class NotificationViewModel {
    static toHttp(notification: Notifications) {
        return {
            id: notification.id,
            content: notification.content.value,
            category: notification.category,
            recipientId: notification.recipientId,
        }
    }
}