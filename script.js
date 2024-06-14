const data = [
    {
        type: "deposit",
        amount: 20000
    },
    {
        type: "deposit",
        amount: 15000
    },
    {
        type: "withdrawal",
        amount: 8000
    },
    {
        type: "deposit",
        amount: 90000
    },
    {
        type: "withdrawal",
        amount: 34000
    },
    {
        type: "withdrawal",
        amount: 12000
    }
]

const largestTransaction = (transArr) => {
    /* let largest = transArr[0]

    for (let i = 1; i < transArr.length; i++) {
        if(transArr[i].amount > largest.amount) {
            largest = transArr[i]
        }
    }

    return largest */
    return transArr.sort((a, b) => b.amount - a.amount)[0]
    
}
//console.log(largestTransaction(data))

const filterTransactions = (transArr, transType) => {
    return transArr.filter((transaction) => transaction.type ===  transType)

}
console.log(filterTransactions(data, "deposit"))


//HOMEWORK create currentBalance function which returns the current amoint of money on the account
//create a transactionsHistory function, which returns a string of the transactions like this: 2000+ 150000 - 7000 + 60000 = currentBalance()
