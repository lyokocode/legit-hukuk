import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { sequelize } from "./database/db.js"

const app = express()

// middlewares
dotenv.config()
app.use(cors())

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