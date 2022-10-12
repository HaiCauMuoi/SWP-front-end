import type { NextApiRequest, NextApiResponse } from 'next'

const {getAllProject} = require('../controllers/project_controller')

// export default async function handler(req, res) {
//     getAllProject(req, res)
//     console.log(getAllProject(req, res));
// }

type ResponseData = {
    
  }

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
    getAllProject(req, res)
    console.log(getAllProject(req, res));
  }