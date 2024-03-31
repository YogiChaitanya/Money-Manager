// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="money-details-container">
      <div className="card2 card21">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="money-details-img"
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          {/* i have to replace 0 to {balance} from props */}
          <p data-testid="balanceAmount" className="rupees">
            Rs 0
          </p>
        </div>
      </div>

      <div className="card2 card22">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="money-details-img"
          alt="income"
        />
        <div>
          <p>Your Income</p>
          {/* i have to replace 0 to  {income} from props */}
          <p data-testid="incomeAmount" className="rupees">
            Rs 0
          </p>
        </div>
      </div>

      <div className="card2 card23">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="money-details-img"
          alt="expenses"
        />
        <div>
          <p>Your Expenses</p>
          {/* i have to replace 0 to {expenses} from props  */}
          <p data-testid="expensesAmount" className="rupees">
            Rs 0
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
