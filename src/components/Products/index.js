import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import Header from '../Header'
import PasswordItem from '../PasswordItem'

import './index.css'

class Products extends Component {
  state = {
    passwordRecords: [],
    inputUrl: '',
    inputName: '',
    inputPassword: '',
    searchInput: '',
    showPassword: false,
  }

  getSearchRecords = () => {
    const {passwordRecords, searchInput} = this.state

    return passwordRecords.filter(eachRecord =>
      eachRecord.url.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  onInputUrlChange = e => {
    this.setState({inputUrl: e.target.value})
  }

  onSearchChange = e => {
    this.setState({searchInput: e.target.value})
  }

  onInputNameChange = e => {
    this.setState({inputName: e.target.value})
  }

  onInputPasswordChange = e => {
    this.setState({inputPassword: e.target.value})
  }

  onCheckChange = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  addPasswordRecord = e => {
    e.preventDefault()
    console.log('in ad ')
    const {inputUrl, inputName, inputPassword} = this.state
    const newPasswordRecord = {
      id: uuidv4(),
      url: inputUrl,
      name: inputName,
      password: inputPassword,
    }
    this.setState(prevState => ({
      passwordRecords: [...prevState.passwordRecords, newPasswordRecord],
    }))
  }

  render() {
    const {showPassword} = this.state
    const searchResults = this.getSearchRecords()
    console.log(this.state, searchResults)

    return (
      <>
        <Header />
        <div className="app-container">
          <div className="responsive-container">
            <div className="card-container manager-container">
              <div className="card form-container">
                <form
                  className="card-responsive"
                  onSubmit={this.addPasswordRecord}
                >
                  <h1 className="form-heading">Add New Project</h1>
                  <div className="input-container">
                    <input
                      className="input"
                      type="text"
                      placeholder="project name"
                      onChange={this.onInputUrlChange}
                    />
                  </div>
                  <div className="input-container">
                    <input
                      className="input"
                      type="text"
                      placeholder="project link"
                      onChange={this.onInputNameChange}
                    />
                  </div>
                  <div className="input-container">
                    <input
                      className="input"
                      name="description"
                      type="description"
                      placeholder="project description"
                      onChange={this.onInputPasswordChange}
                    />
                  </div>
                  <div className="btn-container">
                    <button
                      className="add-btn"
                      type="submit"
                      onClick={this.addPasswordRecord}
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="card-container">
              <div className="card-responsive no-password-container">
                <div className="passwords-header">
                  <h1 className="passwords-header-title">
                    Your Projects
                    <p className="results-count"> {searchResults.length}</p>
                  </h1>
                  <div className="search-container">
                    <div className="search-icon-container">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                        alt="search"
                        className="search-icon"
                      />
                    </div>
                    <input
                      className="search-input"
                      type="search"
                      placeholder="Search"
                      onChange={this.onSearchChange}
                    />
                  </div>
                </div>
                <hr className="hr-line" />
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="checkbox"
                    onChange={this.onCheckChange}
                  />
                </div>
                {searchResults.length !== 0 ? (
                  <ul className="passwords-list-container">
                    {searchResults.map(eachRecord => (
                      <PasswordItem
                        key={eachRecord.id}
                        record={eachRecord}
                        deletePasswordRecord={this.deletePasswordRecord}
                        showPassword={showPassword}
                      />
                    ))}
                  </ul>
                ) : (
                  <div className="no-password-container">
                    <p className="no-passwords-title">No Projects</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Products

//
