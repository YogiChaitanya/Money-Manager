import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    listOfTransaction: [],
    transferType: transactionTypeOptions[0].optionId,
    balance: 0,
    income: 0,
    expenses: 0,
  }

  // whenver click the add button what will happen
  // doubt 2 how to update balance, income, expenses values whenever click the add button
  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, balance, income, expenses} = this.state
    const totalBalance = income - expenses

    const newTransaction = {
      id: uuid(),
      titleInput,
      amountInput,
      balance: totalBalance,
      income,
      expenses,
    }

    this.setState(prevState => ({
      listOfTransaction: [...prevState.listOfTransaction, newTransaction],
      titleInput: '',
      amountInput: '',
    }))
  }

  onChangeTitleInput = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onChangeAmountInput = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  deleteBtn = id => {
    const {listOfTransaction, income, balance, expenses} = this.state
    const updatedArray = listOfTransaction.filter(
      eachTransfer => eachTransfer.id !== id,
    )
    // doubt2 once delete button is clicked
    // i have to update the 3 states
    // balance, income, expenses
    this.setState({
      listOfTransaction: updatedArray,
    })
  }

  render() {
    const {balance, income, expenses} = this.state
    const {titleInput, amountInput, listOfTransaction} = this.state
    return (
      <div className="bg-container">
        <div className="card1">
          <h1>Hi, Yogi</h1>
          <p>
            Welcome back to your
            <span className="paragraph1"> Money Manager</span>
          </p>
        </div>

        <MoneyDetails />

        <div className="card12">
          <form
            className="form-control card12-1"
            onSubmit={this.addTransaction}
          >
            <h1>Add Transaction</h1>
            <label htmlFor="titleId">TITLE</label>
            <input
              id="titleId"
              type="text"
              className="title-input"
              placeholder="TITLE"
              value={titleInput}
              onChange={this.onChangeTitleInput}
            />
            <label htmlFor="amountId">AMOUNT</label>
            <input
              id="amountId"
              type="text"
              className="amount-input"
              placeholder="AMOUNT"
              value={amountInput}
              onChange={this.onChangeAmountInput}
            />
            <label htmlFor="typeId">TYPE</label>
            <select id="typeId" className="type-select-btn">
              <option value="INCOME">Income</option>
              <option value="EXPENSES">Expenses</option>
            </select>
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1>History</h1>
            <div className="history-sub-titles">
              <p className="paragraph4">Title</p>
              <p className="paragraph4">Amount</p>
              <p className="paragraph4">Type</p>
              <p className="paragraph4">delete</p>
            </div>

            <ul className="list-container">
              {listOfTransaction.map(eachTransfer => (
                <TransactionItem
                  key={eachTransfer.id}
                  transferDetails={eachTransfer}
                  deleteBtn={this.deleteBtn}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
