import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "./cancel-notifications";
import { Content } from "@application/entities/content";
import { Notifications } from "@application/entities/notifications";
import { NotificationNotFound } from "./errors/notification-errors";
import { makeNotifications } from "@test/factories/notification-factory";
import { ReadNotification } from "./read-notifications";



describe('Read Notification', () => {
    it('Should read a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const readNotification = new ReadNotification(notificationsRepository);

        const notification = makeNotifications()

        await notificationsRepository.create(notification);
        await readNotification.execute(
            {
                notificationId: notification.id,
            },);

        expect(notificationsRepository.notificationsList[0].readAt).toEqual(expect.any(Date));
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
},); 