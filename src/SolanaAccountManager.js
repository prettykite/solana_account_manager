"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolanaAccountManager = void 0;
class SolanaAccountManager {
    fetchTokens(publicKey) {
        return __awaiter(this, void 0, void 0, function* () {
            // Mocking the fetch with predefined data
            const mockData = {
                'publicKey1': [
                    { name: 'TokenA', balance: 100 },
                    { name: 'TokenB', balance: 200 },
                ],
                'publicKey2': [
                    { name: 'TokenB', balance: 150 },
                    { name: 'TokenC', balance: 300 },
                ],
            };
            return new Promise((resolve) => {
                setTimeout(() => resolve(mockData[publicKey] || []), 500);
            });
        });
    }
    compareBalances(account1, account2) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokens1 = yield this.fetchTokens(account1);
            const tokens2 = yield this.fetchTokens(account2);
            const account1Only = tokens1.filter(token1 => !tokens2.some(token2 => token2.name === token1.name));
            const account2Only = tokens2.filter(token2 => !tokens1.some(token1 => token1.name === token2.name));
            const commonTokens = tokens1.filter(token1 => tokens2.some(token2 => token2.name === token1.name)).map(token1 => ({
                name: token1.name,
                balance: token1.balance + tokens2.find(token2 => token2.name === token1.name).balance,
            }));
            return { account1Only, account2Only, commonTokens };
        });
    }
}
exports.SolanaAccountManager = SolanaAccountManager;
