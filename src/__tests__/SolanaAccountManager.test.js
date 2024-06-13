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
const SolanaAccountManager_1 = require("../SolanaAccountManager");
describe('SolanaAccountManager', () => {
    let manager;
    beforeEach(() => {
        manager = new SolanaAccountManager_1.SolanaAccountManager();
    });
    test('fetchTokens should return correct tokens for a public key', () => __awaiter(void 0, void 0, void 0, function* () {
        const tokens = yield manager.fetchTokens('publicKey1');
        expect(tokens).toEqual([
            { name: 'TokenA', balance: 100 },
            { name: 'TokenB', balance: 200 },
        ]);
    }));
    test('compareBalances should return correct comparison result', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield manager.compareBalances('publicKey1', 'publicKey2');
        expect(result).toEqual({
            account1Only: [{ name: 'TokenA', balance: 100 }],
            account2Only: [{ name: 'TokenC', balance: 300 }],
            commonTokens: [{ name: 'TokenB', balance: 350 }],
        });
    }));
});
