import { Content } from "../content";
import { Notifications } from "../notifications";

interface SendNotificationRequest {
    recipientId: string,
    content: string,
    category: string,
}

interface SendNotificationResponse {
    notification: Notifications
}


export class SendNotification {
    async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
        const { recipientId, content, category } = request;

        const notification = new Notifications({
            recipientId,
            content: new Content(content),
            category
        })
        return { notification };    
    }
    
}