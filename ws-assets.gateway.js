"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsAssetsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const binance_service_1 = require("./binance/binance.service");
let WsAssetsGateway = class WsAssetsGateway {
    constructor(binanceService) {
        this.binanceService = binanceService;
    }
    handleConnection(client, ...args) {
        console.log(`${client.id} has been connected to Assets`);
    }
    handleDisconnect(client) {
        console.log(`${client.id} has been disconnected from Assets`);
    }
    async afterInit(server) {
        await this.binanceService.subscribeStream((data) => {
            this.server.emit('assets', data);
        });
    }
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", Object)
], WsAssetsGateway.prototype, "server", void 0);
WsAssetsGateway = __decorate([
    websockets_1.WebSocketGateway({ namespace: 'assets' }),
    __metadata("design:paramtypes", [binance_service_1.BinanceService])
], WsAssetsGateway);
exports.WsAssetsGateway = WsAssetsGateway;
//# sourceMappingURL=ws-assets.gateway.js.map