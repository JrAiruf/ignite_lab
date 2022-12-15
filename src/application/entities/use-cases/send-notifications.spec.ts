import { InMemoryNotificationsRepository } from "../../../../test/repositories/in-memory-notifications-repository";
import { Notifications } from "../notifications";
import { SendNotification } from "./send-notifications";


describe('Send Notification', () => {
    it('Should send a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        
        const sendNotification = new SendNotification(notificationsRepository)
        const {notification} = await sendNotification.execute({
            recipientId: 'asdjfhakdjfhakdsjfh',
            category: 'Social',
            content: 'Hello, welcome user!'
        })

        expect(notificationsRepository.notificationsList[0]).toEqual(notification);
    },);
},); 