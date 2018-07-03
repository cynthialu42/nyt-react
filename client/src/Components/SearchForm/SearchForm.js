import React from 'react';


class SearchForm extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            start_date: '',
            end_date: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
      }


    
    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(target);
        this.setState({
            [name]: value
        })
    }
    render(){
        return(
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="query">Search Query</label>
                        <input type="text" name = "query" value = {this.state.query} onChange = {this.handleInputChange} className="form-control" id="query" placeholder="Enter a query term" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="startDate">Start Date</label>
                        <input type="text" name = "start_date" value = {this.state.start_date} onChange = {this.handleInputChange} className="form-control" id="startDate" placeholder="Format: YYYYMMDD" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endDate">End Date</label>
                        <input type="text" name = "end_date" value = {this.state.end_date} onChange = {this.handleInputChange} className="form-control" id="endDate" placeholder = "Format: YYYYMMDD" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick = {() => this.props.handleSearch(this.state.query, this.state.start_date, this.state.end_date)}>Submit</button>
                </form>
            </div>
        )
    }
    
}

export default SearchForm;