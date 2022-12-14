import { SendNotification } from "./send-notifications";

describe('Send Notification', () => {
    it('Should send a notification', async () => {
        const sendNotification = new SendNotification()
        const {notification} = await sendNotification.execute({
            recipientId: 'asdjfhakdjfhakdsjfh',
            category: 'Social',
            content: 'Hello, welcome user!'
        })

        expect(notification).toBeTruthy();
    },);
},); 