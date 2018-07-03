import React, { Component } from 'react';
import API from './../../utils/API';
import Article from './../../Components/Article';

class Saved extends Component {
    state = {
        savedArticles: []
    }

    componentDidMount(){
        this.getSavedArticles();
    }

    getSavedArticles = () => {
        API.getSavedArticles()
        .then(res => {
            console.log(res);
            this.setState({
                savedArticles: res.data
            })
        })
        .catch(err => console.log(err));
    }

    handleArticleDelete = id => {
        const savedArticle = this.state.savedArticles.find(article => article._id === id);
        console.log(savedArticle);
        console.log('here');
        API.deleteArticle(savedArticle._id).then(res => {this.getSavedArticles()});
    }

    render() {
        return(
            <div>
                {this.state.savedArticles.map(article => (
                    <Article    
                        key = {article._id}
                        _id = {article._id}
                        title = {article.title}
                        handleClick = {this.handleArticleDelete}
                        url = {article.url}
                        date = {article.date}
                        buttonText = "Delete"
                    />
                ))}
            </div>
        )
    }
}

export default Saved;