import { Shop } from '@/models/Shop';
import { CreateShopArgs, GetShopArgs, GetShopsArgs } from '@/modules/Shop/args';
import { ShopService } from '@/modules/Shop/index.service';
export declare class ShopResolver {
    private shopService;
    private pubSub;
    constructor(shopService: ShopService);
    createShop(args: CreateShopArgs): Promise<import("@nestjs/common").BadRequestException | Shop>;
    findShopByShopId(args: GetShopArgs): Promise<import("@nestjs/common").BadRequestException | import("@nestjs/common").NotFoundException | {
        openTime: any;
        closeTime: any;
    }>;
    findShopsByShopIds(args: GetShopsArgs): Promise<Shop[]>;
    subscribeOneShopByShopId(args: GetShopArgs): AsyncIterator<unknown, any, undefined>;
}
