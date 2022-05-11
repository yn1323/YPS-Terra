import { Request } from '@/models/Request';
import { GetRequestArgs, AddRequestArgs } from '@/modules/Request/args';
import { RequestService } from '@/modules/Request/index.service';
export declare class RequestResolver {
    private requestService;
    constructor(requestService: RequestService);
    addRequest(args: AddRequestArgs): Promise<import("@nestjs/common").BadRequestException | AddRequestArgs>;
    getRequest(args: GetRequestArgs): Promise<import("@nestjs/common").BadRequestException | import("@nestjs/common").NotFoundException | Request[]>;
}
