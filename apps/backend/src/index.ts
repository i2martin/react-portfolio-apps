import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

const app = express();

app.use(express.json());
app.use(cors());

//route to add country code to the database
app.post("/add", async (req, res) => {
    const { countryCode } = req.body;
    try {
            const visitedCountry = await prismaClient.visitedCountries.create({
              data: {
                countryCode
                },
            });
            res.status(201).json(visitedCountry);
        }
        catch(error)
        {
            res.status(500).json({error: "Oops, something went wrong."});
        }

});

app.listen(5000, () => {
  console.log("Server running on localhost:5000");
})