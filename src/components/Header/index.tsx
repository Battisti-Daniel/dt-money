import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
            <h1>DT MONEY</h1>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
