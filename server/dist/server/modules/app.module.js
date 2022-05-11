"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const path_1 = require("path");
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const graphql_1 = require("@nestjs/graphql");
const AuthGurd_1 = require("../gurds/AuthGurd");
const index_module_1 = require("./Announce/index.module");
const index_module_2 = require("./DevOnly/index.module");
const index_module_3 = require("./Operation/index.module");
const index_module_4 = require("./Organization/index.module");
const index_module_5 = require("./Request/index.module");
const index_module_6 = require("./RequestCondition/index.module");
const index_module_7 = require("./Shift/index.module");
const index_module_8 = require("./Shop/index.module");
const index_module_9 = require("./TemporaryClosed/index.module");
const index_module_10 = require("./TimeCard/index.module");
const index_module_11 = require("./User/index.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        providers: [{ provide: core_1.APP_GUARD, useClass: AuthGurd_1.AuthGurd }],
        imports: [
            index_module_8.ShopModule,
            index_module_4.OrganizationModule,
            index_module_11.UserModule,
            index_module_3.OperationModule,
            index_module_9.TemporaryClosedModule,
            index_module_1.AnnounceModule,
            index_module_7.ShiftModule,
            index_module_10.TimeCardModule,
            index_module_5.RequestModule,
            index_module_6.RequestConditionModule,
            index_module_2.DevOnlyModule,
            config_1.ConfigModule.forRoot(),
            graphql_1.GraphQLModule.forRoot({
                buildSchemaOptions: {
                    dateScalarMode: 'timestamp',
                    numberScalarMode: 'integer',
                },
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'schema/schema.gql'),
                installSubscriptionHandlers: true,
                sortSchema: true,
                debug: true,
                playground: true,
                context: ({ req, res }) => ({ req, res }),
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map