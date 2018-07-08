import React, {Component} from 'react';
import API from './../../utils/API';
import Article from './../../Components/Article';
// import SearchForm from '../../Components/SearchForm';
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            savedArticles: [],
            q: "",
            start_year: "",
            end_year: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getArticles = this.getArticles.bind(this);

    }
    
    
    // lifecycles
    componentDidMount() {
        this.getArticles();
        this.getSavedArticles();
    }

    // my methods
    getArticles = () => {
        API.getArticles({
            q: this.state.q,
            start_year: this.state.start_year,
            end_year: this.state.end_year
        })
        .then(res =>
            this.setState({
                articles: res.data,
            })
        )
        .catch(err => console.log(err));
    }
    handleArticleSave = id => {
        const article = this.state.articles.find(article => article._id === id);
        console.log(article);
        API.saveArticle(article).then(res => {this.getSavedArticles();this.getArticles()});
    }

    handleArticleDelete = id => {
        console.log('here');
        const article = this.state.savedArticles.find(article => article._id === id);
        console.log(article._id);
        API.deleteArticle(article._id).then(res => {this.getSavedArticles();this.getArticles()});
    }

    getSavedArticles = () => {
        API.getSavedArticles()
            .then(res => {
                console.log(res);
                this.setState({
                    savedArticles: res.data
                })}
        )
        .catch(err => console.log(err));
    }

    handleSearch = (q, start_year, end_year) => {
        const query = q;
        // this.setState({
        //     q: query
        // });
        console.log('HEREHEHREHR')
        console.log(query);
        
    }
    handleInputChange(event){
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(target);
        this.setState({
            [name]: value
        }); 
    }
    handleSubmit(event){
        event.preventDefault();
        console.log('hi')
        this.getArticles();
    }
    render() {
        return (
            <div className = "row mt-3">
                <div className = "col-md-4">
                    <h2><strong>Search</strong></h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="query"><strong>Search Query</strong></label>
                            <input type="text" name = "q" value = {this.state.q} onChange = {this.handleInputChange} className="form-control" id="query" placeholder="Enter a query term" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="startDate"><strong>Start Date</strong></label>
                            <input type="text" name = "start_year" value = {this.state.start_year} onChange = {this.handleInputChange} className="form-control" id="startDate" placeholder="Format: YYYYMMDD" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endDate"><strong>End Date</strong></label>
                            <input type="text" name = "end_year" value = {this.state.end_year} onChange = {this.handleInputChange} className="form-control" id="endDate" placeholder = "Format: YYYYMMDD" />
                        </div>
                        <input type="submit" className="btn btn-dark" onClick = {this.handleSubmit}/>
                    </form>
                </div>
                <div className = "col-md-8">
                    <h2><strong>Articles</strong></h2>
                    {this.state.articles.map(article => (
                        <Article
                            key={article._id}
                            _id={article._id}
                            title={article.headline.main}
                            url={article.web_url}
                            date={article.pub_date}
                            handleClick={this.handleArticleSave}
                            buttonText="Save Article"
                        />
                    ))}
                    {/* <p>Saved Articles</p>
                    {this.state.savedArticles.map(article => (
                        <Article
                            key={article._id}
                            _id={article._id}
                            title={article.title}
                            handleClick={this.handleArticleDelete}
                            buttonText="Delete Article"
                        />
                    ))}     */}
                </div>            
            </div>
        );
    };
}

export default Home;