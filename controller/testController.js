import Test from "../model/testmodel.js";

export const getAllData = async (req, res) => {
  try {
    const test = await Test.find({});
    res.json({
      data: test,
    });
  } catch (error) {
    res.send(error);
  }
};
export const postATest = async (req, res) => {
  try {
    const test = new Test(req.body);
    const result = await test.save();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
