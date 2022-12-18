import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { NotificationNotFound } from "./errors/notification-errors";
import { makeNotifications } from "@test/factories/notification-factory";
import { ReadNotification } from "./read-notifications";
import { UnreadNotification } from "./unread-notifications";



describe('Read Notification', () => {
    it('Should read a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const unreadNotification = new UnreadNotification(notificationsRepository);

        const notification = makeNotifications({
            readAt: new Date(),
        });

        await notificationsRepository.create(notification);
        await unreadNotification.execute(
            {
                notificationId: notification.id,
            },);

        expect(notificationsRepository.notificationsList[0].readAt).toBeNull;
    },);
},);
it('Should not be able to read a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    expect(() => {
        return readNotification.execute({
            notificationId: 'fake-notification-id',
        });
    }).rejects.toThrow(NotificationNotFound);
});