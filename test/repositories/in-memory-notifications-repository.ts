import { Notifications } from "@application/entities/notifications";
import { NotificationsRepository } from "@application/repositories/notifications-repository";

export class InMemoryNotificationsRepository implements NotificationsRepository{
    public notificationsList: Notifications[] = [];

    async create(notification: Notifications) {
        this.notificationsList.push(notification);
    }
}