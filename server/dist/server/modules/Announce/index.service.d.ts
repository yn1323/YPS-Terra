import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Announce } from '@/models/Announce';
import { AddAnnounceArgs, GetAnnounceArgs } from '@/modules/Announce/args';
export declare class AnnounceService {
    addAnnounce(args: AddAnnounceArgs): Promise<AddAnnounceArgs | BadRequestException>;
    getAnnounce(args: GetAnnounceArgs): Promise<BadRequestException | Announce[] | NotFoundException>;
}
