"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const PORT = process.env.PORT || 3000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: 'http://localhost:4200',
        },
    });
    await app.listen(PORT);
}
bootstrap().then(() => {
    console.log(`Server has been started on port ${PORT}...`);
});
//# sourceMappingURL=main.js.map