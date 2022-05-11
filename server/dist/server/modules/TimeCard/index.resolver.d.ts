import { TimeCard } from '@/models/TimeCard';
import { GetTimeCardArgs, AddTimeCardArgs } from '@/modules/TimeCard/args';
import { TimeCardService } from '@/modules/TimeCard/index.service';
export declare class TimeCardResolver {
    private timeCardService;
    constructor(timeCardService: TimeCardService);
    addTimeCard(args: AddTimeCardArgs): Promise<import("@nestjs/common").BadRequestException | AddTimeCardArgs>;
    getTimeCard(args: GetTimeCardArgs): Promise<import("@nestjs/common").BadRequestException | import("@nestjs/common").NotFoundException | TimeCard[]>;
}
