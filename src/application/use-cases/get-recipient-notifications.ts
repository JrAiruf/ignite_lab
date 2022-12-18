import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repository";
import { NotificationNotFound } from "./errors/notification-errors";
import { Notifications } from "@application/entities/notifications";

interface GetRecipientNotificationRequest {
    recipientId: string,
}

interface GetRecipientNotificationResponse {
    notifications: Notifications[];
}


@Injectable()
export class GetRecipientNotification {
    constructor(private notificationsRepository: NotificationsRepository) { }

    async execute(request: GetRecipientNotificationRequest): Promise<GetRecipientNotificationResponse> {
        const { recipientId } = request;

        const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId);

        return { notifications };
    }


}