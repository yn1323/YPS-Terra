import { ShopArgs } from '@/models/Shop';
declare const CreateShopArgs_base: import("@nestjs/common").Type<Pick<ShopArgs, "shopName" | "openTime" | "closeTime" | "timeUnit" | "submitFrequency" | "useTimeCard">>;
export declare class CreateShopArgs extends CreateShopArgs_base {
    userId: string;
}
declare const GetShopArgs_base: import("@nestjs/common").Type<Pick<ShopArgs, "shopId">>;
export declare class GetShopArgs extends GetShopArgs_base {
}
export declare class GetShopsArgs {
    shopIds: string[];
}
export {};
