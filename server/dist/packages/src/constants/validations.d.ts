export declare const MAX_LENGTH: {
    readonly USER_NAME: 32;
    readonly SHOP_ID: 64;
    readonly SHOP_NAME: 64;
};
export declare const FORM_ERROR_TEXT: {
    readonly USER_NAME: "ユーザー名を入力してください";
    readonly SHOP_ID: "店舗IDを入力してください";
    readonly SHOP_NAME: "店舗名を入力してください";
    readonly EMAIL: "メールアドレスを入力してください";
    readonly PASSWORD: "パスワードを入力してください";
};
export declare const SHIFT_SUBMIT_FREQUENCY: readonly ["1w", "0.5m", "1m"];
export declare type ShiftSubmitFrequency = typeof SHIFT_SUBMIT_FREQUENCY[number];
export declare const SHIFT_TIME_UNIT: readonly [5, 10, 15, 30];
export declare type ShiftTimeUnit = typeof SHIFT_TIME_UNIT[number];
export declare const SUBMIT_FREQUENCY: {
    label: string;
    value: string;
}[];
export declare const TIME_UNIT: {
    label: string;
    value: string;
}[];
