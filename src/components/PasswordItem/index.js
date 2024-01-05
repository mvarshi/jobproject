import './index.css'

const PasswordItem = props => {
  const {record} = props
  const {url, name, password} = record

  return (
    <li className="password-item">
      <div className="circle">{name.charAt(0)}</div>
      <div className="details-container">
        <p className="website-text">{url}</p>
        <p className="website-text">{name}</p>
        <p className="website-text">{password}</p>
      </div>
    </li>
  )
}
export default PasswordItem
