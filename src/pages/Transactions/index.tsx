import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighligh, TransactionContainer, TransactionTable } from "./styles";

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />
      <TransactionContainer>
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighligh variant="income">R$ 12.000,00</PriceHighligh>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Lanche</td>
              <td>
                <PriceHighligh variant="outcome">- R$ 50</PriceHighligh>
              </td>
              <td>Alimentacao</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </>
  );
}
