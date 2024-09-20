const jwt = require("jsonwebtoken");
const pool = require("../config/db");

// Login/Signup with Google OAuth
exports.googleLogin = (req, res) => {
  const user = req.user;
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
};

// Fetch user profile
exports.getUserProfile = async (req, res) => {
  try {
    const [user] = await pool.query("SELECT * FROM users WHERE id = ?", [
      req.user.id,
    ]);
    res.json(user[0]);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user profile" });
  }
};
