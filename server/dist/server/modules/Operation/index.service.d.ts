import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Operation } from '@/models/Operation';
import { CreateOperationsArgs, GetOperationsArgs } from '@/modules/Operation/args';
export declare class OperationService {
    private defaultOperations;
    createOperations(args: CreateOperationsArgs): Promise<BadRequestException | Operation[]>;
    findAllByShopId(args: GetOperationsArgs): Promise<BadRequestException | NotFoundException | Operation[]>;
}
