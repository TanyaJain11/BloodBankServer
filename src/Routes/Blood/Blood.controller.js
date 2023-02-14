const {
    getBloods,
    addBloodDatabase,
    deleteBloodDatabase,
    getBloodByEmailDatabase,
    updataBloodDatabase,
    requestBloodDatabase,
    getUserByEmail
} = require('../../Model/Blood/Blood.model');

async function getAllBlood(req,res){
    return res.status(200).json(await getBloods());
}

async function addBlood(req,res){
    const data = req.body;
    const {email} = req.user;

    if(await addBloodDatabase({...data,email})===true){
        return res.status(201).json({
            message:"Blood Added!" 
        });
    }else if(await addBloodDatabase({...data,email})===false){
        return res.status(200).json({
            message:"Blood Already Exists!" 
        });
    }

    return res.status(401).json({
        error:"Please Check your data again!"
    });
}

async function deleteBlood(req,res){
    const data = req.body;

    if(deleteBloodDatabase(data)){
        return res.status(200).json({
            message:"Deleted Successfully!"
        });
    }

    return res.status(401).json({
        error:"Please Check your data again!"
    });
}

async function getBloodByUsername(req,res){
    const name = req.params.name;
    return res.status(200).json(await getBloodByEmailDatabase(name));
}

async function updataBlood(req,res){
    const data = req.body;
    const {email} = req.user;

    if(await updataBloodDatabase({...data,email})===true){
        return res.status(201).json({
            message:"Blood Updated!" 
        });
    }

    return res.status(401).json({
        error:"Please Check your data again!"
    });
}

async function requestBlood(req,res){
    const { email } = req.user.user;
    const data = req.body;
    if(!data) return req.status(400).json({message:"Please Provide Blood Data"});

    if(await requestBloodDatabase(email,data)===true){
        return res.status(201).json({
            message:"Blood Requested Succefully!" 
        });
    }

    return res.status(401).json({
        error:"Internal Server Error"
    });
}


module.exports = {
    getAllBlood,
    addBlood,
    deleteBlood,
    getBloodByUsername,
    updataBlood,
    requestBlood
}