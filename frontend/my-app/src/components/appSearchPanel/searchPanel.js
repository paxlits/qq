import { Component } from 'react';

import searchIkon from '../../images/Icon.png';

import '../appSearchPanel/searchPanel.scss';

class SearchPanel extends Component{
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
    }


    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }


    render(){
        return (
        <div className="form-control search-input">
        <input
          type="search"
          placeholder="Найти сотрудника" 
          value={this.state.term}
          onChange={this.onUpdateSearch}
        />
        <img src={searchIkon} alt="Иконка поиска" />
      </div>
    );
  }
}

export default SearchPanel;