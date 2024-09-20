const express = require("express");
const cors = require("cors");
const passport = require("passport");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
require("./config/passport")(passport); // Passport configuration for Google OAuth

const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use("/api/users", userRoutes);

// Error handling (optional)

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
