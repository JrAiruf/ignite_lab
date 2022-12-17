import { Injectable } from "@nestjs/common";
import { Notifications } from "src/application/entities/notifications";
import { NotificationsRepository } from "src/application/repositories/notifications-repository";
import { PrismaService } from "@infra/database/prisma/prisma.service";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
    constructor(private prismaService: PrismaService) { }
    async create(notification: Notifications): Promise<void> {
        const raw = PrismaNotificationMapper.prismaData(notification);
        await this.prismaService.notification.create({
            data: raw
        })

    }
}