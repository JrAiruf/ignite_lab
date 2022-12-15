import { Injectable } from "@nestjs/common";
import { Notifications } from "src/application/entities/notifications";
import { NotificationsRepository } from "src/application/repositories/notifications-repository";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
    constructor(private prismaService: PrismaService) { }
    async create(notification: Notifications): Promise<void> {
        await this.prismaService.notification.create({
            data: {
                id: notification.id,
                category: notification.category,
                content: notification.content.value,
                recipientId: notification.recipientId,
                readAt: notification.readAt,
                createdAt: notification.createdAt,
            }
        })

    }
}