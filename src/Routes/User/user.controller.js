const {
    addUserDatabase,
    checkUser,
    getAllUsersDB,
    getUserByEmail
} = require('../../Model/User/user.model');

async function addUser(req,res){
    const user = req.body;    
    const result =await addUserDatabase(user);
    if(result.alreadyExist){
        return res.status(401).json({
            message:"User Already Exists!!"
        })
    }
    if(result.created){
        return res.status(201).json({
            message:"User Added Successfully!!"
        })
    }

    return res.status(400).json({
        error:"Please send Correct Details!!"
    })
}

async function login(req,res){
    const {email,password} = req.body;

    const result = await checkUser({email,password});

    if(!result.userExisted) return res.status(400).json({error:"Please Sign up to Login!!"});

    if(result.isLogin) return res.status(200).json({message:"User Login Successfully!!",token:result.token,user:result.user});

    return res.status(400).json({error:"Please Provide correct credentials!!"});
}

async function getAllUsers(req,res){
    const users = await getAllUsersDB();
    return res.status(200).json({
        users
    });
}

async function checkLogin(req,res){
    const user = req.user;
    return res.status(200).json({
        isValid:true,
        user
    });
}

async function getUser(req,res){
    const {email}  =req.body;
    if(!email) return res.status(400).json({message:"Email Not Found!"});

    const response = await getUserByEmail(email);

    if(response.ok){
        return res.status(200).json({
            user:response.user
        })
    }

    return res.status(401).json({
        error:"Internal Server Error!"
    })
}

module.exports = {
    addUser,
    login,
    getAllUsers,
    checkLogin,
    getUser
}