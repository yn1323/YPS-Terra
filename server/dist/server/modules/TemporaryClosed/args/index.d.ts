import { TemporaryClosedArgs } from '@/models/TemporaryClosed';
declare const AddTemporaryClosedArgs_base: import("@nestjs/common").Type<Pick<TemporaryClosedArgs, "organizationId" | "shopId" | "date">>;
export declare class AddTemporaryClosedArgs extends AddTemporaryClosedArgs_base {
}
declare const GetTemporaryClosedArgs_base: import("@nestjs/common").Type<Pick<TemporaryClosedArgs, "organizationId" | "shopId">>;
export declare class GetTemporaryClosedArgs extends GetTemporaryClosedArgs_base {
}
export {};
