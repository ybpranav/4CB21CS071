const getAllProducts = async(req,res)=>{
    res.status(200).json({msg:"I am getAllProduct"});
};



const getAllProductsTesting = async(req,res)=>{
    res.status(200).json({msg:"I am getAllProductTesting"});
};

module.exports={getAllProducts,getAllProductsTesting};