export type transactionType = {
    transaction: transType[];
    deleteTrans: (id: number) => void;
    addTrans: (transaction: transType) => void;
}

export type transType = {
    id: number,
    text: string,
    amount: number

}
