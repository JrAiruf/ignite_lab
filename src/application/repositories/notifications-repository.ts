import { Notifications } from "../entities/notifications";

export abstract class NotificationsRepository {
    abstract create(notification: Notifications): Promise<void>; 
}