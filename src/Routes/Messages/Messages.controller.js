const {
    postMessageDB,
    getAllMessagesDB
} = require('../../Model/Messages/Messages.model')

async function postMessage(req,res){

    const {name,email,subject,phoneNo,message} = req.body;

    if(name.length ===0 || email.length===0 || subject.length===0 || phoneNo.length===0 || message.length===0 ) return res.status(401).json({
        error:"Please Enter Valid Fields!"
    });
    
    const response = await postMessageDB(name,email,subject,phoneNo,message);
    
    if(response.ok){
        return res.status(200).json({
            message:"Message Sent Successfully!"
        });
    }

    return res.status(401).json({
        message:"Internal Server Error!"
    });

}

async function getAllMessages(req,res){
    const response =await getAllMessagesDB();
    return res.status(200).json({
        response
    })
}


module.exports = {
    postMessage,
    getAllMessages
}