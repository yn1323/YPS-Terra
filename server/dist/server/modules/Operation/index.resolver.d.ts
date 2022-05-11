import { Operation } from '@/models/Operation';
import { GetOperationsArgs, CreateOperationsArgs } from '@/modules/Operation/args';
import { OperationService } from '@/modules/Operation/index.service';
export declare class OperationResolver {
    private operationService;
    constructor(operationService: OperationService);
    createOperations(args: CreateOperationsArgs): Promise<import("@nestjs/common").BadRequestException | Operation[]>;
    getOperations(args: GetOperationsArgs): Promise<import("@nestjs/common").BadRequestException | import("@nestjs/common").NotFoundException | Operation[]>;
}
