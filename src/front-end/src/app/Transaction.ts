export class Transaction{
    id: number
    accountId: number
    TransactionType: number //credit 0, debit 1
    TransactionDate: string
    FormattedAmount: number
    Description: string
    categoryId: number
    Amount:number
}
