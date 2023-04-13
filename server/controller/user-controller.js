import User from '../model/userSchema.js';

export const userLogIn = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        if(user) {
            return response.status(200).json(`${request.body.username} login successfull`);
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.json('Error: ', error.message);        
    }
}

export const userSignUp = async (request, response) => {
    try {
        const exist = await User.findOne({ username: request.body.username });
        if(exist) {
            return response.status(401).json({ message: 'User already exist'});
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json({ mesage: user });
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}


// const emailsend=async(req,res)=>{
//     let data=await User.findOne({email:req.body.email})
//     const responseType={};
//     if(data)
//     {
//         let otp=Math.floor((Math.random()*10000)+1);
//         let otpData=new Otp({
//                 email:req.body.email,
//                 code:otp,
//                 expireIn:new Date().getTime()+300*1000
//         })
//         let otpResponse=await otpData.save();
//         responseType.statusText="success"
//         responseType.mesage="please check your email id"

//     }
//     else{
//         responseType.statusText="Error"
//         responseType.mesage="Email Id not Exist"
//     }
//     res.status(200).json(responseType)
// }
