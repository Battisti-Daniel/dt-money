import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighligh, TransactionContainer, TransactionTable } from "./styles";
import { SearchForm } from "./components/SearchForm";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";


export function Transactions() {

  const { transactions } = useContext(TransactionsContext)

  return (
    <>
      <Header />
      <Summary />      
      <TransactionContainer>
        <SearchForm/>
        <TransactionTable>
          <tbody>
            {transactions.map(transaction => {
              return(
                <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighligh variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                    </PriceHighligh>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
              )
            })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </>
  );
}
