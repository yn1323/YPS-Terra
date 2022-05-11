import { RequestCondition } from '@/models/RequestCondition';
import { GetRequestConditionArgs, AddRequestConditionArgs } from '@/modules/RequestCondition/args';
import { RequestConditionService } from '@/modules/RequestCondition/index.service';
export declare class RequestConditionResolver {
    private requestConditionService;
    constructor(requestConditionService: RequestConditionService);
    addRequestCondition(args: AddRequestConditionArgs): Promise<import("@nestjs/common").BadRequestException | AddRequestConditionArgs>;
    getRequestCondition(args: GetRequestConditionArgs): Promise<import("@nestjs/common").BadRequestException | import("@nestjs/common").NotFoundException | RequestCondition[]>;
}
