import { TemporaryClosed } from '@/models/TemporaryClosed';
import { GetTemporaryClosedArgs, AddTemporaryClosedArgs } from '@/modules/TemporaryClosed/args';
import { TemporaryClosedService } from '@/modules/TemporaryClosed/index.service';
export declare class TemporaryClosedResolver {
    private temporaryClosedService;
    constructor(temporaryClosedService: TemporaryClosedService);
    addTemporaryClosed(args: AddTemporaryClosedArgs): Promise<import("@nestjs/common").BadRequestException | {
        organizationId: string;
        shopId: string;
        date: Date;
    }>;
    getTempraryClosed(args: GetTemporaryClosedArgs): Promise<import("@nestjs/common").BadRequestException | import("@nestjs/common").NotFoundException | TemporaryClosed[]>;
}
