import React from 'react';
import Footer from '../Footer/Footer';
import {Navbar} from "../global/navbar";
import "./news.css";
import defaultnews from "../global/defaultNews.json";
class About extends React.Component {
    constructor() {
        super();
        this.state = { news: defaultnews };
        this.st = this.st.bind(this);
    }
    st(data) {
        this.setState({ news: data });
    }
    componentDidMount() {
        
    }
    render() {
        return(
            <div className='contain'>
                <header className="App-header">
                    <Navbar />
                </header>
                
                <div style={{
                    height: "560px",
                    overflowY: "scroll",
                    marginLeft: "200px",
                    backgroundColor: "#dcdcdc"
                }}>
                    <h2>Новости</h2>
                    <div className='news'>
                        {
                            this.state.news.map(news => {
                                return(
                                <div className='new'>
                                    {news.news}
                                </div>
                                );
                            })
                        }
                    </div>
                </div>
                <footer>
                <Footer/>
                </footer>
            </div>
        );
    }
}

export default About;