import React from 'react';
import {Navbar} from "../global/navbar";
import Footer from '../Footer/Footer';
import "./contats.css";
class Contacts extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div className='contain'>
                <header className="App-header">
                    <Navbar />


                    
                </header>
                <div className='cont'>
                    <b>Региональный менеджер по работе с клентами, Ташкент:</b><br/>
                    <i>Кертаев Нурдавлет- <a href='#'>kertaev.nurdavlet@notes.uz</a></i><br/>
                    <b>Региональный менеджер по работе с клиентами, Паркент</b><br/>
                    <i>Палончи Палончиевич- <a href='#'>palonchi.palonchievich@notes.uz</a></i><br/>
                    <b>По вопросам трудоустройства:</b><br/>
                    <a href='#'>hr.notes.uz</a><br/>
                    <b>По вопросам рекламы и сотрудничества:</b><br/>
                    <i>руководитель отдела рекламы и PR Палончи Палончиевна- <a href="#">d.adv@notes.uz</a></i>
                </div>
                <footer>
                <Footer/>
                </footer>                
            </div>
        );
    }
}

export default Contacts;