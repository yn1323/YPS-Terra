import { BadRequestException, NotFoundException } from '@nestjs/common';
import { TimeCard } from '@/models/TimeCard';
import { AddTimeCardArgs, GetTimeCardArgs } from '@/modules/TimeCard/args';
export declare class TimeCardService {
    addTimeCard(args: AddTimeCardArgs): Promise<BadRequestException | AddTimeCardArgs>;
    getTimeCard(args: GetTimeCardArgs): Promise<BadRequestException | NotFoundException | TimeCard[]>;
}
