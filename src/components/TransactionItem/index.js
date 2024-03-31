// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transferDetails, deleteBtn} = props
  const {id, titleInput, amountInput} = transferDetails

  const onClickDeleteBtn = () => {
    deleteBtn(id)
  }
  return (
    <li className="list-card">
      <p className="paragraph5">{titleInput}</p>
      <p className="paragraph5">{amountInput}</p>
      <p className="paragraph5">income</p>
      <button
        onClick={onClickDeleteBtn}
        data-testid="delete"
        type="button"
        className="delete-btn"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-img"
          alt="delete img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
