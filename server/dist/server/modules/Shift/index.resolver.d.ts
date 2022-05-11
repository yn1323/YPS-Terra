import { Shift } from '@/models/Shift';
import { GetShiftArgs, AddShiftArgs } from '@/modules/Shift/args';
import { ShiftService } from '@/modules/Shift/index.service';
export declare class ShiftResolver {
    private shiftService;
    constructor(shiftService: ShiftService);
    addShift(args: AddShiftArgs): Promise<import("@nestjs/common").BadRequestException | AddShiftArgs>;
    getShift(args: GetShiftArgs): Promise<import("@nestjs/common").BadRequestException | import("@nestjs/common").NotFoundException | Shift[]>;
}
