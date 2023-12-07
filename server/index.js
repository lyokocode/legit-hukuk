// middlewares
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import fileUpload from 'express-fileupload';
import cookieParser from "cookie-parser"

// connection
import { sequelize } from "./database/db.js"

// routes
import userRoute from "./routes/user.js"
import authRoute from "./routes/auth.js"
import categoryRoute from "./routes/category.js"
import blogRoute from "./routes/blog.js"


// middlewares
const app = express()

app.use(fileUpload());
app.use(cors())
dotenv.config()
app.use(express.json());
app.use(cookieParser())


// functions
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/categories", categoryRoute)
app.use("/api/blogs", blogRoute)


app.use("/", (req, res) => {
    res.send("server is running")
})

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

async function main() {
    try {
        await sequelize.sync(
            // { force: true }
        );
        console.log("db connection is successfull")
        app.listen(process.env.PORT, () => console.log(`api is running on port: ${process.env.PORT}`))

    } catch (error) {
        console.log(`Unable to connect to the database ${error}`)
    }
}
main()