"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TIME_UNIT = exports.SUBMIT_FREQUENCY = exports.SHIFT_TIME_UNIT = exports.SHIFT_SUBMIT_FREQUENCY = exports.FORM_ERROR_TEXT = exports.MAX_LENGTH = void 0;
exports.MAX_LENGTH = {
    USER_NAME: 32,
    SHOP_ID: 64,
    SHOP_NAME: 64,
};
exports.FORM_ERROR_TEXT = {
    USER_NAME: 'ユーザー名を入力してください',
    SHOP_ID: '店舗IDを入力してください',
    SHOP_NAME: '店舗名を入力してください',
    EMAIL: 'メールアドレスを入力してください',
    PASSWORD: 'パスワードを入力してください',
};
exports.SHIFT_SUBMIT_FREQUENCY = ['1w', '0.5m', '1m'];
exports.SHIFT_TIME_UNIT = [5, 10, 15, 30];
exports.SUBMIT_FREQUENCY = [
    {
        label: '1週間ごと',
        value: '1w',
    },
    {
        label: '0.5ヶ月ごと',
        value: '0.5m',
    },
    {
        label: '1ヶ月ごと',
        value: '1m',
    },
];
exports.TIME_UNIT = (() => {
    return exports.SHIFT_TIME_UNIT.map(unit => ({
        label: `${unit}分ごと`,
        value: unit.toString(),
    }));
})();
//# sourceMappingURL=validations.js.map