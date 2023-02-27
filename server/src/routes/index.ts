import { Router } from "express";

import { getTodos } from "../controllers/index";

const router: Router = Router();

router.get("/todos", getTodos);

export default router;
