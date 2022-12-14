import { Request, Response, Router } from "express";
import { deciphering } from "../../../utils/deciphering";
import { declaration } from "../../../utils/declaration";
import { fixingTextDeclaration } from "../../../utils/declarationFixes";
import { encryption } from "../../../utils/encryption";
import { renderSuccess } from "../../helpers/base";

const encryptionHandler = Router();

const fixedDeclarationText = fixingTextDeclaration(declaration);
// console.log("result", fixedDeclaration);

encryptionHandler.post("/deciphering", (req: Request, res: Response) => {
  const { cipher } = req.body;
  if (!cipher) {
    res.json({
      error:
        "Body must include object cipher with numbers separated by comma inside",
      decipherText: "",
      status: "Not deciphered",
    });
    return;
  }
  const decipheredText = deciphering(
    cipher.split(","),
    fixedDeclarationText.split(" ")
  );

  renderSuccess(res, decipheredText.join(""));
});

encryptionHandler.post("/encryption", (req: Request, res: Response) => {
  const { text } = req.body;
  const result = encryption(text, fixedDeclarationText.split(" "));
  renderSuccess(res, result);
});

export default encryptionHandler;
