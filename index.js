const app = require("express")();
const path = require("path")


app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname, "slope", req.path))
})

app.listen(process.env.PORT || 9001)