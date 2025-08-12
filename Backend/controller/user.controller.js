import User from "../model/user.model.js";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email }); // await!

    if (user) {
      return res.status(400).json({ message: "User already exists" }); // fix typo here
    }

    const createdUser = new User({
      fullname,
      email,
      password,
    });

    await createdUser.save(); // await!

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
