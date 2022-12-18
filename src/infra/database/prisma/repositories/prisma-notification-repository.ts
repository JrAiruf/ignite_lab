import { Injectable } from "@nestjs/common";
import { Notifications } from "src/application/entities/notifications";
import { NotificationsRepository } from "src/application/repositories/notifications-repository";
import { PrismaService } from "@infra/database/prisma/prisma.service";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
    constructor(private prisma: PrismaService) { }
    async findById(notificationId: string): Promise<Notifications | null> {
        const notification = await this.prisma.notification.findUnique({ where: { id: notificationId } });

        if (!notification) {
            return null;
        }
        return PrismaNotificationMapper.toDomain(notification);

    }
    async findManyByRecipientId(recipientId: string): Promise<Notifications[]> {
        const notifications = await this.prisma.notification.findMany({ where: { recipientId } });
        return notifications.map(PrismaNotificationMapper.toDomain)
    }
    async countManyByRecipientId(recipientId: string): Promise<number> {
        const count = await this.prisma.notification.count({
            where: {
                recipientId
            }
        })
        return count;
    }
    async create(notification: Notifications): Promise<void> {
        const raw = PrismaNotificationMapper.prismaData(notification);
        await this.prisma.notification.create({
            data: raw
        })
    }

    async save(notification: Notifications): Promise<void> {
        const raw = PrismaNotificationMapper.prismaData(notification);

        await this.prisma.notification.update({ where: { id: raw.id }, data: raw })
    }
}