import { TimeCardArgs } from '@/models/TimeCard';
declare const AddTimeCardArgs_base: import("@nestjs/common").Type<Pick<TimeCardArgs, "shopId" | "userId" | "workFrom" | "workTo" | "breakFrom" | "breakTo">>;
export declare class AddTimeCardArgs extends AddTimeCardArgs_base {
}
declare const GetTimeCardArgs_base: import("@nestjs/common").Type<Pick<TimeCardArgs, "shopId" | "userId">>;
export declare class GetTimeCardArgs extends GetTimeCardArgs_base {
}
export {};
