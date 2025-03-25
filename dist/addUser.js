var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import client from "./db.js";
function addUser(name, surname, full_name, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `
    INSERT INTO users (name, surname, full_name, email, password)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
        try {
            const result = yield client.query(query, [name, surname, full_name, email, password]);
            console.log("✅ User added:", result.rows[0]);
        }
        catch (err) {
            console.error("❌ Error adding a user:", err);
        }
    });
}
export { addUser };
