import { Announce } from '@/models/Announce';
import { GetAnnounceArgs, AddAnnounceArgs } from '@/modules/Announce/args';
import { AnnounceService } from '@/modules/Announce/index.service';
export declare class AnnounceResolver {
    private announceService;
    constructor(announceService: AnnounceService);
    addAnnounce(args: AddAnnounceArgs): Promise<AddAnnounceArgs | import("@nestjs/common").BadRequestException>;
    getAnnounce(args: GetAnnounceArgs): Promise<import("@nestjs/common").BadRequestException | Announce[] | import("@nestjs/common").NotFoundException>;
}
