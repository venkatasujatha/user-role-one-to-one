const { user } = require("/home/tectoro/Desktop/codejs/models/user.js");
const { dataSource } = require("/home/tectoro/Desktop/codejs/database.js");
const userRepo = dataSource.getRepository("user");
const appConst = require("/home/tectoro/Desktop/codejs/routes/constants.js");

//get by id
const findUser = async (req, res) => {
  try {
    const resp = await userRepo.findOneBy({ id: req.params.id });
    res
      .status(201)
      .json({ status: appConst.status.success, response: resp, message: null });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: err.message,
    });
  }
};
/*
const add = async(req,res)=>
{
    try {
        const resp =  await userRepo.save(req.body);
          
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

*/
const add = async (req, res) => {
  try {
    const resp = await userRepo
      .createQueryBuilder()
      .insert()
      .into(user)
      .values(req.body)
      .execute();
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
};

//get
const findall = async (req, res) => {
  try {
    const records = await userRepo.find();
    const totalcount = await userRepo.count();
    res.status(201).json({
      status: appConst.status.success,
      response: { records, totalcount },
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
};

//deleteuser
const deleteuserbyid = async (req, res) => {
  try {
    const resp = await userRepo.delete({ userid: req.params.userid });

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

module.exports = { add, findall, findUser, deleteuserbyid };
