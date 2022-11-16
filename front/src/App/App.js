
import './App.css';
import React from 'react';
import {Navbar} from "../global/navbar";
import Footer from '../Footer/Footer';
import defaults from "../global/default.json";

const url = "http://localhost:5001";
class App extends React.Component {
  constructor() {
    super();
    this.state = {data: defaults, note: { text: "Введите текст заметки", color: "#dcdcdc" }};
    this.st = this.st.bind(this);
    this.note = this.note.bind(this);
    this.fetchfunc = this.fetchfunc.bind(this);
    this.ubdatenotes = this.ubdatenotes.bind(this);
    this.sendFormData = this.sendFormData.bind(this);
    this.textreaChange = this.textreaChange.bind(this);
  }
  async fetchfunc(urls, data) {
      const response = await fetch(url + urls, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: "same-origin",
        headers: {
          'Content-Type': 'application/json'
        },
        // redirect: 'follow',
        body: JSON.stringify(data),
      });
      // console.log(await response.status)
      return await response.json();
    }
  sendFormData() {
    let data = new FormData();
    let textdata = document.querySelector('textarea[name="text"]');
    let colordata = document.querySelector('input[type="color"]');
    let iddata = document.querySelector('input[type="hidden"]');
    let reactdata = document.querySelectorAll('input[type="radio"]');
    let react;
    if (reactdata[0].checked) {
      react = 'create';
    } else if (reactdata[1].checked) {
      react = 'update';
    } else if (reactdata[2].checked) {
      react = 'delete';
    }

    this.fetchfunc('/api/form', {text: textdata.value, color: colordata.value, id: iddata.value, react: react}).then(data => {
      alert(data.answer);
    })
  }
  ubdatenotes() {
    this.fetchfunc('/api/form', {react: 'read'}).then(data => {
      this.setState({data: data});
    })   
  }
  textreaChange(data) {
    this.setState({ note: {text: data.value}})
  }
  note(data) {
    this.setState({ note: data });
  }
  st(data) {
    this.setState({ data: data })
  }
  // componentDidMount() {
  //   fetch().then(response => this.st(response.json()));
  // }
  render() {

    return (
      <div className="App">
        
        <header className="App-header">
          <Navbar />
        </header>
        <div className='bodier'>
          <div className='hats'>
            
             Заметки {this.state.note.id}
          </div>
          <div className='containern'>
            <div className='notes'>
              {this.state.data.map(data => {
                let click = () => {
                  this.note(data);
                }
                return(
                  <>
                    <div onClick={click} className='note' style={{backgroundColor: data.color}}>
                      { data.text }
                    </div>

              </>    
                );
              })}
 
            </div>   
            <div className='tools'>
              <form  name='note'>
                <input type={"hidden"} value={JSON.stringify(this.state.note.id )}/>
                <textarea className='formtext' rows="10" cols="45" value={ this.state.note.text } onChange={this.textreaChange}  name='text' style={{backgroundColor: this.state.note.color}}  >  </textarea>
                <p> Выберите цвет <input type="color" name="color"/> </p>
                <input type={'radio'} id="create" name={'react'} value={'create'} />
                <label for={'create'} >Создать</label>
                <input type={'radio'} id='update' name={'react'} value={'update'} />
                <label for={'update'} >Обновить</label>
                <input type={'radio'} id='delete' name='react' value={'delete'} />
                <label for="delete" >Удалиь</label>
                <input onClick={this.sendFormData } type="button" value="отправить"/>
              </form>
            <button onClick={this.ubdatenotes}>Обновить</button>     
            </div> 
          </div>
          
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
