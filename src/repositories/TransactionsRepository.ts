import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface Transaction {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}
class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
  }

  public create({ title, value, type }: Transaction): Transaction {
    const transactions = new Transaction({ title, value, type });
    this.transactions.push(transactions);
    return transactions;
  }
}

export default TransactionsRepository;
