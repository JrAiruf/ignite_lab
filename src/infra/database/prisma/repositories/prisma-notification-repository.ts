import { Injectable } from "@nestjs/common";
import { Notifications } from "src/application/entities/notifications";
import { NotificationsRepository } from "src/application/repositories/notifications-repository";
import { PrismaService } from "@infra/database/prisma/prisma.service";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
    constructor(private prismaService: PrismaService) { }
    findManyByRecipientId(recipientId: string): Promise<Notifications[]> {
        throw new Error("Method not implemented.");
    }
    countManyByRecipientId(recipientId: string): Promise<number> {
        throw new Error("Method not implemented.");
    }
    save(notification: Notifications): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(notificationId: string): Promise<Notifications | null> {
        throw new Error("Method not implemented.");
    }
    async create(notification: Notifications): Promise<void> {
        const raw = PrismaNotificationMapper.prismaData(notification);
        await this.prismaService.notification.create({
            data: raw
        })

    }
}