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
const SolanaAccountManager_1 = require("./SolanaAccountManager");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const manager = new SolanaAccountManager_1.SolanaAccountManager();
        const account1 = 'publicKey1';
        const account2 = 'publicKey2';
        const result = yield manager.compareBalances(account1, account2);
        console.log('Tokens only in account 1:', result.account1Only);
        console.log('Tokens only in account 2:', result.account2Only);
        console.log('Common tokens with combined balances:', result.commonTokens);
    });
}
main();
