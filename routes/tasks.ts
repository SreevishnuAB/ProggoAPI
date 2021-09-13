import express, { Request, Response, Router } from 'express';
import { Task } from '../types/task';

const router: Router = express.Router();

router.post("/", (req: Request<{}, {}, Task>, res: Response)=>{
  
});

module.exports = router;