// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "../../server/db/index.js";
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
/*name:string
address:string
strteTime:Date
phone:string
webSite:string
options:string[]
images:string[]
updatedAt:Date*/
