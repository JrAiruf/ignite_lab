import { Notifications } from "@application/entities/notifications";
import { NotificationsRepository } from "@application/repositories/notifications-repository";

export class InMemoryNotificationsRepository implements NotificationsRepository {

    public notificationsList: Notifications[] = [];
    async findById(notificationId: string): Promise<Notifications | null> {
        const notifications = this.notificationsList.find((item) => item.id == notificationId);
        if (!notifications) {
            return null;
        }
        return notifications;
    }
    async countManyByRecipientId(recipientId: string): Promise<number> {
        return this.notificationsList.filter(notification => notification.recipientId == recipientId).length;
    }
    async create(notification: Notifications) {
        this.notificationsList.push(notification);
    }
    async save(notification: Notifications): Promise<void> {
        const notificationIndex = this.notificationsList.findIndex((item) => item.id == notification.id,)
    }
}