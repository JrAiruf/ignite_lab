import { Notifications } from "../../src/application/entities/notifications";
import { NotificationsRepository } from "../../src/application/repositories/notifications-repository";

export class InMemoryNotificationsRepository implements NotificationsRepository{
    public notificationsList: Notifications[] = [];

    async create(notification: Notifications) {
        this.notificationsList.push(notification);
    }
}