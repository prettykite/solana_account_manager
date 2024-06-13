import { SolanaAccountManager } from '../SolanaAccountManager';
import { ComparisonResult, Token } from '../types';

describe('SolanaAccountManager', () => {
    let manager: SolanaAccountManager;

    beforeEach(() => {
        manager = new SolanaAccountManager();
    });

    test('fetchTokens should return correct tokens for a public key', async () => {
        const tokens = await manager.fetchTokens('publicKey1');
        expect(tokens).toEqual([
            { name: 'TokenA', balance: 100 },
            { name: 'TokenB', balance: 200 },
        ]);
    });

    test('compareBalances should return correct comparison result', async () => {
        const result: ComparisonResult = await manager.compareBalances('publicKey1', 'publicKey2');
        expect(result).toEqual({
            account1Only: [{ name: 'TokenA', balance: 100 }],
            account2Only: [{ name: 'TokenC', balance: 300 }],
            commonTokens: [{ name: 'TokenB', balance: 350 }],
        });
    });
});