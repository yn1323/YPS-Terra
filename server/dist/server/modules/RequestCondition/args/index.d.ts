import { RequestConditionArgs } from '@/models/RequestCondition';
declare const AddRequestConditionArgs_base: import("@nestjs/common").Type<Pick<RequestConditionArgs, "shopId" | "userId" | "dateFrom" | "dateTo" | "done">>;
export declare class AddRequestConditionArgs extends AddRequestConditionArgs_base {
}
declare const GetRequestConditionArgs_base: import("@nestjs/common").Type<Pick<RequestConditionArgs, "shopId" | "userId">>;
export declare class GetRequestConditionArgs extends GetRequestConditionArgs_base {
}
export {};
