const messageDatabase = require('../../database/message.schema');
const { uuid } = require('uuidv4');

async function postMessageDB(name,email,subject,phoneNo,message){
    try {
        const id = uuid();
        await messageDatabase.collection.insertOne({
            id:id,
            email,
            subject,
            phoneNo,
            message,
            name
        })
        return {
            ok:true
        }
    } catch (error) {
        console.log(error);
        return{
            ok:false
        }
    }
}

async function getAllMessagesDB(){
    return messageDatabase.find({},{_id:0,__v:0});
}

module.exports = {
    postMessageDB,
    getAllMessagesDB
}