import type { ShiftSubmitFrequency, ShiftTimeUnit } from '@/constants/validations';
export declare class Shop {
    shopId: string;
    shopName: string;
    openTime: Date;
    closeTime: Date;
    timeUnit: ShiftTimeUnit;
    submitFrequency: ShiftSubmitFrequency;
    useTimeCard: boolean;
    avatar: string;
    closedWeekday: number[];
    shopOwnerIds: string[];
}
export declare class ShopArgs extends Shop {
}
