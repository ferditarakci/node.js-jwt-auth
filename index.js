const express = require("express");
const cors = require('cors')
const app = express();

app.use(express.json());

app.use(cors())

app.use("/auth", require("./routes/auth"));
app.use("/posts", require("./routes/posts"));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log("Listening on port " + PORT);
});
