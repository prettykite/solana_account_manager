export interface Token {
  name: string;
  balance: number;
}

export interface ComparisonResult {
  account1Only: Token[];
  account2Only: Token[];
  commonTokens: Token[];
}