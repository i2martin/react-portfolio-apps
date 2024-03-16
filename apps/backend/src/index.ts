import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";

const prismaClient = new PrismaClient();

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

//route to add country code to the database
app.post("/add", async (req, res) => {
    const { countryCode } = req.body;
    console.log(req.body);
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

//allows access to all the visited countries added to the db
app.get("/get-countries", async (req, res) => {
  try {
    const visitedCountries = await prismaClient.visitedCountries.findMany();
    console.log(visitedCountries);
    return res.status(201).json(visitedCountries);
   
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Oops, something went wrong." });
  }
});

app.listen(5000, () => {
  console.log("Server running on localhost:5000");
})