import { ShiftArgs } from '@/models/Shift';
declare const AddShiftArgs_base: import("@nestjs/common").Type<Pick<ShiftArgs, "shopId" | "userId" | "workFrom" | "workTo" | "breakFrom" | "breakTo">>;
export declare class AddShiftArgs extends AddShiftArgs_base {
}
declare const GetShiftArgs_base: import("@nestjs/common").Type<Pick<ShiftArgs, "shopId" | "userId">>;
export declare class GetShiftArgs extends GetShiftArgs_base {
}
export {};
