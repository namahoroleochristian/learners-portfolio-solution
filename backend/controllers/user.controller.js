import UserModel from '../models/user.model.js'

export const InsertUser = async (req, res) => {
    let  UserInfo = req.body;

   
    if (!UserInfo.name || !UserInfo.email || !UserInfo.password) {
        return res.status(400).json({ success: false, message: 'Fill all the fields' });
    }

   
    const newUser = new UserModel(UserInfo);

    try {
        
        await newUser.save();
        res.status(201).json({ success: true, message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};
export const GetUsers = async (req, res) => {
      try {
        const result = await UserModel.find();
        res.status(200).json(result);
      } catch (error) {
        console.log(`error message:${error.message}`);
      }
    };
export const DeleteUsers = async (req, res) => {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
      return  res
          .status(404)
          .json({ success: false, message: "Nigga give me a valid URL Id" });
      }
      try {
        const result = await userModel.findByIdAndDelete(id);
    
        res.status(200).send({
          success: true,
          message: "Data deleted",
        });
      } catch (error) {
        res.status(404).json({
          success: false,
          message: `object with id ${id} not found`,
        });
      }
    }