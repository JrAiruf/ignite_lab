import { Notifications } from "../notifications";
import { SendNotification } from "./send-notifications";

const notificationsList: Notifications[] = [];

const notificationsRepository = {
    async create(notification: Notifications) {
        notificationsList.push(notification);
    }
}
describe('Send Notification', () => {
    it('Should send a notification', async () => {
        const sendNotification = new SendNotification(notificationsRepository)
        await sendNotification.execute({
            recipientId: 'asdjfhakdjfhakdsjfh',
            category: 'Social',
            content: 'Hello, welcome user!'
        })

        expect(notificationsList).toHaveLength(1);
    },);
},); 