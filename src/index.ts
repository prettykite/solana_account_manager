import { SolanaAccountManager } from './SolanaAccountManager';

async function main() {
    const manager = new SolanaAccountManager();
    const account1 = 'publicKey1';
    const account2 = 'publicKey2';

    const result = await manager.compareBalances(account1, account2);

    console.log('Tokens only in account 1:', result.account1Only);
    console.log('Tokens only in account 2:', result.account2Only);
    console.log('Common tokens with combined balances:', result.commonTokens);
}

main();