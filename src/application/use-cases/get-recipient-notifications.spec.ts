import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CountRecipientNotification } from "./count-recipient-notifications";
import { makeNotifications } from "@test/factories/notification-factory";
import { GetRecipientNotification } from "./get-recipient-notifications";

describe('Get Recipient Notifications', () => {
    it('Should return a list of recipient notifications', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const getRecipientNotifications = new GetRecipientNotification(notificationsRepository);

        await notificationsRepository.create(makeNotifications({ recipientId: 'recipient-1', }));
        await notificationsRepository.create(makeNotifications({ recipientId: 'recipient-1', }));
        await notificationsRepository.create(makeNotifications({ recipientId: 'recipient-2', }));

        const { notifications } = await getRecipientNotifications.execute(
            {
                recipientId: 'recipient-1',
            },);

        expect(notifications).toHaveLength(2);
        expect(notifications).toEqual(expect.arrayContaining(
            [
                expect.objectContaining({ recipientId: 'recipient-1' }),
                expect.objectContaining({ recipientId: 'recipient-1' }),
            ]),
        );
    });
}); 