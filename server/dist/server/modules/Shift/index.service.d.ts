import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Shift } from '@/models/Shift';
import { AddShiftArgs, GetShiftArgs } from '@/modules/Shift/args';
export declare class ShiftService {
    addShift(args: AddShiftArgs): Promise<BadRequestException | AddShiftArgs>;
    getShift(args: GetShiftArgs): Promise<BadRequestException | NotFoundException | Shift[]>;
}
