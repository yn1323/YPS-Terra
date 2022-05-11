import { RequestArgs } from '@/models/Request';
declare const AddRequestArgs_base: import("@nestjs/common").Type<Pick<RequestArgs, "shopId" | "userId" | "workFrom" | "workTo" | "breakFrom" | "breakTo">>;
export declare class AddRequestArgs extends AddRequestArgs_base {
}
declare const GetRequestArgs_base: import("@nestjs/common").Type<Pick<RequestArgs, "shopId" | "userId">>;
export declare class GetRequestArgs extends GetRequestArgs_base {
}
export {};
