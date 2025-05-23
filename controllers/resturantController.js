const resturantModel = require("../models/resturantModel");

//create resturant
const createResturantController = async ( req,res) =>{
 try {
    const {title,imageUrl,foods,time,pickup,delivery,isOpen,logoUrl,rating,ratingCount,code,coords, } = req.body;
    //validation
    if(!title || !coords){
        return res.status(500).send({
            success:false,
            message:"please provide title and address",
        })
    }
    const newResturant = new resturantModel({title,imageUrl,foods,time,pickup,delivery,isOpen,logoUrl,rating,ratingCount,code,coords,})
    await newResturant.save()
    res.status(201).send({
        success:true,
        message:"new Resturant created successfully"
    })
 } catch (error) {
    console.log(error);
    res.status(500).send({
        success: false,
        message:"error in create resturant api",
        error,
    });
 }
};
//get all resturant
const getAllResturant = async (req, res) => {
  try {
    const restaurants = await resturantModel.find(); // Fixed model name
    res.status(200).json({
      success: true,
      message: "Fetched all restaurants",
      data: restaurants,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch restaurants",
      error: error.message,
    });
  }
};

module.exports = {createResturantController,getAllResturant};