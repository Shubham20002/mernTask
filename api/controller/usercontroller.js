const User=require('../model/user.model');

module.exports.signin=async(req,res)=>{
    try{
        console.log(req.body);
        const {name,email,password,role}=req.body;
       const user= await User.findOne({ email:email }).exec();
    //    console.log('user',user);
    //    console.log('user email',user.email);
        
        if(!user){
            const doc = new User();
            doc.name =name;
            doc.email=email;
            doc.password=password;
            doc.role=role;
            doc.save();
            res.status(200).json({
                message:"new user added"
            })
        }
        else{
            res.status(400).json({message:"user already present"})
        }
    }
    catch(error){
        console.log(error);
    }
    
    

}