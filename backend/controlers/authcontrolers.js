//? Signup Routes Function
export const signup =async (req,res)=>{
    try {
        const {fullName ,username,password,confirmPassword}=req.body;
        
        if(password != confirmPassword){
            return res.status(400).json({error:'Password don`t match '})
        }

        const user =await User.findOne({username})

        if(user){
            return res.status(400).json({error:'Username Already exists'})
        }

        //HASH PASWORD HERE
    } catch (error) {
        
    }
}
    
//? Login Route Function
export const login =async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

//? Logout Route Function
export const logout =async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
