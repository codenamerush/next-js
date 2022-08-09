// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async function handler(req, res) {
  console.log("did it come here?")
  const { name } = req.query
  const response = (await axios("http://localhost:8080/")).data;
  return res.status(200).json(response);
}
