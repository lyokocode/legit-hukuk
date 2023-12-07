// middlewares
import express from "express"
import dotenv from "dotenv"
import cors from "cors"

// connection
import { sequelize } from "./database/db.js"

// routes
import userRoute from "./routes/user.js"


// middlewares
const app = express()

dotenv.config()
app.use(cors())


// functions
app.use("/api/users", userRoute)

app.use("/", (req, res) => {
    res.send("server is running")
})

async function main() {
    try {
        await sequelize.sync(
            { force: true }
        );
        console.log("db connection is successfull")
        app.listen(process.env.PORT, () => console.log(`api is running on port: ${process.env.PORT}`))

    } catch (error) {
        console.log(`Unable to connect to the database ${error}`)
    }
}
main()