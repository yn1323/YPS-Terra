import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Request } from '@/models/Request';
import { AddRequestArgs, GetRequestArgs } from '@/modules/Request/args';
export declare class RequestService {
    addRequest(args: AddRequestArgs): Promise<BadRequestException | AddRequestArgs>;
    getRequest(args: GetRequestArgs): Promise<BadRequestException | NotFoundException | Request[]>;
}
