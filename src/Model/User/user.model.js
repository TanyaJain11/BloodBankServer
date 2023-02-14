const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserSchema = require('../../database/User.schema');

async function addUserDatabase({name,password,email,isAdmin}){
    try {
        const isAlreadyPresent = await UserSchema.find({email:email});

        if(isAlreadyPresent.length!==0) return {
            created:false,
            alreadyExist:true
        }

        // const saltRounds = 15;
        // const passwordHashed = await bcrypt.hash(password,saltRounds);

        await UserSchema.collection.insertOne({
            name:name,
            email:email,
            password:password,
            isAdmin:isAdmin
        })

        return {
            created:true,
            alreadyExist:false
        };

    } catch (error) {
        console.log(error);

        return {
            created:false,
            alreadyExist:false
        };
    }
}

async function checkUser({email,password}){
    try {
        const data =await UserSchema.find({email:email},{password},{_id:0,__v:0});

        if(data.length === 0) return {
            isLogin:false,
            userExisted:false
        }

        const user=data[0];

        // if(await bcrypt.compare(password,user.password)){
        //     const token = jwt.sign({
        //         user
        //     },'35A7DB5ECB36E85225ECD1E6BD7A3C8F6926C53FC4D09BC6AF5F20DEA1016DAB',{
        //         expiresIn:'2d'
        //     })
        //     return {
        //         isLogin:true,
        //         userExisted:true,
        //         user,
        //         token,
        //     }
        // }

        if(await  UserSchema.findOne({password})){
            const token = jwt.sign({
                user
            },'35A7DB5ECB36E85225ECD1E6BD7A3C8F6926C53FC4D09BC6AF5F20DEA1016DAB',{
                expiresIn:'2d'
            })
            return {
                isLogin:true,
                userExisted:true,
                user,
                token,
            }
        }

        return {
            isLogin:false,
            userExisted:true
        }

    } catch (error) {
        console.log(error);
        return{
            isLogin:false,
            userExisted:false
        }
    }
}

async function getAllUsersDB(){
    return UserSchema.find({},{__v:0});
}

async function getUserByEmail(email){
    try {
        let user = await UserSchema.findOne({email:email});
        return {
            ok:true,
            user
        }
    } catch (error) {
        console.log(error);
        return {
            ok:false
        };
    }
}

module.exports = {
    addUserDatabase,
    checkUser,
    getAllUsersDB,
    getUserByEmail
}