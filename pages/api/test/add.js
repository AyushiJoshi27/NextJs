/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

import Test from "@/models/testModel";
import connectMongo from "@/utils/connectMongo";

export default async function addTest(req, res) {

  try {
    const { name, email } = req.body;
    console.log("Connecting to mongo");
    await connectMongo();
    // console.log("Connected to mongo");
    // console.log("Creating document");

    const test = await Test.create(req.body);
    // console.log("Document created");
    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({error});
  };

};