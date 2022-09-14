

const {role} = require('/home/tectoro/Desktop/codejs/models/role.js')
const { dataSource } = require('/home/tectoro/Desktop/codejs/database.js');
const appConst= require('/home/tectoro/Desktop/codejs/routes/constants.js');
const roleRepository = dataSource.getRepository("role");

//get
const findall=async(req,res)=>{
    try
    {
      const records=await roleRepository.find();
      const totalcount=await roleRepository.count();
      res
      .status(201)
      .json({status: appConst.status.success, 
        response: {records,totalcount}, 
        message: null})
    }
    catch(err)
    {
      console.log(err.message);
      res.status(400)
      .json({status:appConst.status.fail,
        response:null,
        message:err.message});
    }
  }
//add
const addrole = async(req,res)=>
{
    try {
        const resp =  await roleRepository.save(req.body);
          
        res.status(201).json({
          status: appConst.status.success,
          response: resp.count,
          message: null,
        });
      } catch (err) {
        console.log(err.message);
        res.status(400).json({
          status: appConst.status.fail,
          response: null,
          message: err.message,
        });
      }

} 

 

const deleterolesbyid = async (req, res) => {
  try {
    const resp = await roleRepository.delete({ id: req.params.id });
  
    //="id deleted successfully";
    res
      .status(200)
      .json({ status: appConst.status.success, response: resp, message: null });
  } catch (err) {
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: err.message,
    });
  }
};
//module export
module.exports = {addrole,findall,deleterolesbyid};