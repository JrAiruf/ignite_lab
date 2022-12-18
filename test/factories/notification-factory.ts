import { Content } from "@application/entities/content";
import { Notifications, NotificationsProps } from "@application/entities/notifications";

type Override = Partial<NotificationsProps>

export function makeNotifications(override: Override = {}){
    return new Notifications({
        category: override.category!,
        content: override.content!,
        recipientId: override.recipientId!,
        ...override,
    });
}