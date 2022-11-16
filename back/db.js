const Sequelize = require('sequelize');
const { INTEGER, STRING, DataTypes, TEXT  } = require('sequelize');
const sequelize = new Sequelize("node_test", "node", "30032003", {
    dialect: 'mariadb',
    
});
const Notes = sequelize.define('note', {
    text: {
        type: TEXT('long'),
        allowNull: false,
    },

    color: {
        type: STRING,
        allowNull: false
    }
});

module.exports.setnode = async function setnote(data) {
    try{
        await Notes.sync();
        const note = await Notes.create({text: data.text, color: data.color});
        return {answer: 'ok'};   
    } catch(e) {
        return {answer: 'no'};
    }
}

module.exports.getnotes = async function getnotes() {
    try{
        await Notes.sync();
        const notes = await Notes.findAll();
        return JSON.stringify(notes);   
    } catch(e) {
        return {answer: 'no'};
    }
}

module.exports.updatenotes = async function updatenote(data) {
    try{
        await Notes.sync();
        const note = await Notes.findOne({ where: { id: data.id } });
        note.text = data.text;
        note.color = data.color;
        await note.save();
        return {answer: 'ok'};   
    } catch(e) {
        return {answer: 'no'};
    }
}

module.exports.deleteone = async function deletenode(data) {
    try{
        await Notes.sync();
        const note = await Notes.findOne({ where: { id: data.id } });
        await note.destroy();     
        return {answer: 'ok'};   
    } catch(e) {
        return {answer: 'no'};
    }
}