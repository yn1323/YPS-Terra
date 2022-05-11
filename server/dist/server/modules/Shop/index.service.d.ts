import { BadRequestException, NotFoundException } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { Shop } from '@/models/Shop';
import { CreateShopArgs, GetShopArgs, GetShopsArgs } from '@/modules/Shop/args';
export declare class ShopService {
    private subscribes;
    createShopData(args: CreateShopArgs & {
        shopId: string;
        userId: string;
    }): Shop;
    createShop(args: CreateShopArgs): Promise<BadRequestException | Shop>;
    findOneByShopId({ shopId }: GetShopArgs): Promise<BadRequestException | NotFoundException | {
        openTime: any;
        closeTime: any;
    }>;
    findShopsByShopIds({ shopIds }: GetShopsArgs): Promise<Shop[]>;
    subscribeOneShopFromFirestore({ shopId }: GetShopArgs, pubSub: PubSub): {
        shopId: string;
    };
}
