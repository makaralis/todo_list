"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use((0, cors_1.default)());
app.use(routes_1.default);
const uri = process.env.MONGODB_URL;
console.log('uri', uri);
mongoose_1.default
    .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));
app.listen(PORT, () => console.log("Server running on port " + PORT));
//# sourceMappingURL=app.js.map