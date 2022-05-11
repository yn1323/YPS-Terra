"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("./firebase/common");
const app_module_1 = require("./modules/app.module");
async function bootstrap() {
    (0, common_1.firebaseInit)();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        allowedHeaders: '*',
        origin: '*',
        credentials: true,
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map