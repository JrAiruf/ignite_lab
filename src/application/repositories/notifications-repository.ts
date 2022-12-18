import { Notifications } from "../entities/notifications";

export abstract class NotificationsRepository {
    abstract create(notification: Notifications): Promise<void>; 
    abstract findById(notificationId: string): Promise<Notifications | null>; 
    abstract save(notification: Notifications): Promise<void>; 
    abstract countManyByRecipientId(recipientId: string): Promise<number>; 
    abstract findManyByRecipientId(recipientId: string): Promise<Notifications[]>; 
}