import { createContext, ReactNode, useState, useEffect } from "react"

interface TransactionProps {
	id: number
	description: string
	type: "income" | "outcome"
	price: number
	category: string
	createdAt: string
}

interface TransactionContextType {
	transactions: TransactionProps[]
}

interface TransactionProvideProps {
	children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionProvideProps) {

  const [transactions, setTransaction] = useState<TransactionProps[]>([])

  async function loadTransactions() {
    const response = await fetch("http://localhost:3333/transactions")
    const data = await response.json()
  
    setTransaction(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

	return (
		<TransactionsContext.Provider value={{ transactions }}>
			{children}
		</TransactionsContext.Provider>
	)
}
