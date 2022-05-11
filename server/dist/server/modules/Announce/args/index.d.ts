import { AnnounceArgs } from '@/models/Announce';
declare const AddAnnounceArgs_base: import("@nestjs/common").Type<Pick<AnnounceArgs, "organizationId" | "shopId" | "announceDateFrom" | "announceDateTo" | "message">>;
export declare class AddAnnounceArgs extends AddAnnounceArgs_base {
}
declare const GetAnnounceArgs_base: import("@nestjs/common").Type<Pick<AnnounceArgs, "organizationId" | "shopId">>;
export declare class GetAnnounceArgs extends GetAnnounceArgs_base {
}
export {};
