const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const logger = require("morgan");
const cors = require("cors")
const mainRoute = require("./routes/index");

const app = express();

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB bağlantısı başarılı.");
  } catch (error) {
    console.log(error);
  }
};

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors())
app.use("/api", mainRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
  connectDB();
  console.log(`Sunucu port 5000'de başlatıldı.`);
});
