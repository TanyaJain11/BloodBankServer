const {
    bloodSchema
} = require('../../database/Blood.schema')
const userModel = require('../../database/User.schema');

async function getBloods(){
    return await bloodSchema.find({},{__v:0});
}

async function addBloodDatabase(bloodData){
    try {
        const blood = await bloodSchema.find({
            email:bloodData.email,
            bloodGroup:bloodData.bloodGroup
        });
        console.log(blood);
        if(blood.length!==0){
            return false;
        }
        await bloodSchema.collection.insertOne({
            quantity:bloodData.quantity,
            email:bloodData.email,
            nameOfDoner:bloodData.nameOfDoner,
            bloodGroup:bloodData.bloodGroup,
            location:bloodData.location,
            city:bloodData.city,
            state:bloodData.state
        })
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function updataBloodDatabase(bloodData){
    try {
        await bloodSchema.updateOne({
            email:bloodData.email,
        },{
            quantity:bloodData.quantity,
            nameOfDoner:bloodData.nameOfDoner,
            bloodGroup:bloodData.bloodGroup,
            location:bloodData.location,
            city:bloodData.city,
            state:bloodData.state
        },{
            upsert:true
        });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function deleteBloodDatabase(bloodData){
    try {
        await bloodSchema.deleteOne({
            email:bloodData.email,
            quantity:bloodData.quantity,
            bloodGroup:bloodData.bloodGroup
        });
        return true;
    } catch (error) {
        console.log(error);
        return true;
    }
}

async function getBloodByEmailDatabase(name){
    try {
        return await bloodSchema.find({
            email:name
        },{__v:0});
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function requestBloodDatabase(user,{bloodData}){
    try { 
        let userReq = await userModel.findOne({email:user});
        userReq.bloodRequested.push(bloodData);
        console.log(userReq)
        await userReq.save();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}



module.exports ={
    getBloods,
    addBloodDatabase,
    deleteBloodDatabase,
    getBloodByEmailDatabase,
    updataBloodDatabase,
    requestBloodDatabase,
}