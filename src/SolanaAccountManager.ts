import { Token, ComparisonResult } from './types';

export class SolanaAccountManager {
    async fetchTokens(publicKey: string): Promise<Token[]> {
        // Mocking the fetch with predefined data
        const mockData: { [key: string]: Token[] } = {
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
    }

    async compareBalances(account1: string, account2: string): Promise<ComparisonResult> {
        const tokens1 = await this.fetchTokens(account1);
        const tokens2 = await this.fetchTokens(account2);

        const account1Only = tokens1.filter(token1 => 
            !tokens2.some(token2 => token2.name === token1.name)
        );

        const account2Only = tokens2.filter(token2 => 
            !tokens1.some(token1 => token1.name === token2.name)
        );

        const commonTokens = tokens1.filter(token1 => 
            tokens2.some(token2 => token2.name === token1.name)
        ).map(token1 => ({
            name: token1.name,
            balance: token1.balance + tokens2.find(token2 => token2.name === token1.name)!.balance,
        }));

        return { account1Only, account2Only, commonTokens };
    }
}