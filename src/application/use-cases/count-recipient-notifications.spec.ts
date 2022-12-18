import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "./cancel-notifications";
import { Content } from "@application/entities/content";
import { Notifications } from "@application/entities/notifications";
import { NotificationNotFound } from "./errors/notification-errors";
import { CountRecipientNotification } from "./count-recipient-notifications";
import { makeNotifications } from "@test/factories/notification-factory";



describe('Count Recipient Notifications', () => {
    it('Should be able to count recipient notifications', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const countRecipientNotifications = new CountRecipientNotification(notificationsRepository);

        await notificationsRepository.create(makeNotifications({recipientId: 'recipient-1',}));
        await notificationsRepository.create(makeNotifications({recipientId: 'recipient-1',}));
        await notificationsRepository.create(makeNotifications({recipientId: 'recipient-2',}));
        
        const {count} = await countRecipientNotifications.execute(
            {
                recipientId: 'recipient-1',
            },);

        expect(count).toEqual(2);
    },);
},); 