"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
const router = (0, express_1.Router)();
router.get("/todos", index_1.getTodos);
exports.default = router;
//# sourceMappingURL=index.js.map