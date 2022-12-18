import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "./cancel-notifications";
import { Content } from "@application/entities/content";
import { Notifications } from "@application/entities/notifications";
import { NotificationNotFound } from "./errors/notification-errors";
import { makeNotifications } from "@test/factories/notification-factory";



describe('Cancel Notification', () => {
    it('Should cancel a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);

        const notification = makeNotifications()

        await notificationsRepository.create(notification);
        await cancelNotification.execute(
            {
                notificationId: notification.id,
            },);

        expect(notificationsRepository.notificationsList[0].canceledAt).toEqual(expect.any(Date));
    },);

    it('Should not be able to cancel a non existing notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);

        expect(() => {
            return cancelNotification.execute({
                notificationId: 'fake-notification-id',
            });
        }).rejects.toThrow(NotificationNotFound);
    });
},); 