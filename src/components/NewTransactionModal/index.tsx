import * as Dialog from "@radix-ui/react-dialog"
import { ArrowCircleUp, X } from "phosphor-react"
import {
	CloseButton,
	Content,
	Overlay,
	TransactionType,
	TransactionTypeButton,
} from "./styles"

export function NewTransactionModal() {
	return (
		<>
			<Dialog.Portal>
				<Overlay />
				<Content>
					<Dialog.Title>Nova transação</Dialog.Title>
					<CloseButton>
						<X />
					</CloseButton>
					<form>
						<input
							type="text"
							placeholder="Descrição"
						/>
						<input
							type="number"
							placeholder="Preço"
							min={0}
						/>
						<input
							type="text"
							placeholder="Categoria"
						/>

						<TransactionType>
							<TransactionTypeButton variant="income"  value="income">
								<ArrowCircleUp size={24} />
								Entrada
							</TransactionTypeButton>
							<TransactionTypeButton variant="outcome" value="outcome">
								<ArrowCircleUp size={24} />
								Saida
							</TransactionTypeButton>
						</TransactionType>

						<button type="submit">Cadastrar</button>
					</form>
				</Content>
			</Dialog.Portal>
		</>
	)
}
