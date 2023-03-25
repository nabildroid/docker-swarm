import Express from "express";

import Cors from "cors";
const app = Express();
app.use(Express.json());
app.use(Cors({
    origin: "*"
}))



import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({
    
})




app.get("/users", async (req, res) => {

    const users = await prisma.user.findMany()
    res.json(users);
})

app.post("/user", async (req, res) => {

    const { name, age } = req.body;
    const user = await prisma.user.create({
        data: {
            age: parseInt(age),
            name: name
        }
    })
    res.json(user);
});



app.listen(2222, () => {
    console.log("listening on port 2222")
})



