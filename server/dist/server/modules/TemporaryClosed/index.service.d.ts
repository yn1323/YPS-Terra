import { BadRequestException, NotFoundException } from '@nestjs/common';
import { TemporaryClosed } from '@/models/TemporaryClosed';
import { AddTemporaryClosedArgs, GetTemporaryClosedArgs } from '@/modules/TemporaryClosed/args';
export declare class TemporaryClosedService {
    addTemporaryClosed(args: AddTemporaryClosedArgs): Promise<BadRequestException | {
        organizationId: string;
        shopId: string;
        date: Date;
    }>;
    getTempraryClosed(args: GetTemporaryClosedArgs): Promise<BadRequestException | NotFoundException | TemporaryClosed[]>;
}
