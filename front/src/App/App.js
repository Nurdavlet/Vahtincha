
import './App.css';
import React from 'react';
import {Navbar} from "../global/navbar";
import Footer from '../Footer/Footer';
import defaults from "../global/default.json";
class App extends React.Component {
  constructor() {
    super();
    this.state = {data: defaults};
    this.st = this.st.bind(this);
  }
  st(data) {
    this.setState({data: data})
  }
  async componentDidMount() {
    let response = await fetch();
    if(response.ok) {
      this.st(await response.json());
    } else {
      console.log("fetch error");
    }
  }
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <Navbar />
        </header>
        <div className='bodier'>
          <div className='hats'>
            
             заметки
          </div>
          <div className='containern'>
            <div className='notes'>
              {this.state.data.map(data => {
                return(
                  <>
                    <div className='note' style={{backgroundColor: data.color}}>
                      {data.text}
                    </div>

              </>    
                );
              })}
 
            </div>   
            <div className='tools'>
              <form action='' method='POST' name='note'>
                <textarea className='formtext' rows="10" cols="45"  name='text'  > Введите текст заметки</textarea>
                <p> Выберите цвет <input type="color" name="color"/> </p>
                <input type="submit" value="сохранить"/>
              </form>
            </div>      
          </div>
          
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
