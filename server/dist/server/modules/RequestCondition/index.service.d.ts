import { BadRequestException, NotFoundException } from '@nestjs/common';
import { RequestCondition } from '@/models/RequestCondition';
import { AddRequestConditionArgs, GetRequestConditionArgs } from '@/modules/RequestCondition/args';
export declare class RequestConditionService {
    addRequestCondition(args: AddRequestConditionArgs): Promise<BadRequestException | AddRequestConditionArgs>;
    getRequestCondition(args: GetRequestConditionArgs): Promise<BadRequestException | NotFoundException | RequestCondition[]>;
}
