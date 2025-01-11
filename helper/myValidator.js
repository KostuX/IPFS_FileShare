var validator = require("validator");
var xss = require("xss");
import { CID } from "multiformats/cid";

export default class myValidator {
  cid(input) {
    let err = [];
    input = this.clean(input);
    input = this.black_escape(input);

    let e = this.text(input, 40, 60, "CID", true).err;
    err = err.concat(e);

    // stop verification if input to short or to long
    if (e.length > 0) return { ok: err.length == 0, err };
    try {
      const parsedCID = CID.parse(input);

      if (![0, 1].includes(parsedCID.version)) {
        err.push(`Invalid CID version ${parsedCID.version}`);
      }
    } catch (error) {
      err.push("Invalid CID");
    }
    return { ok: err.length == 0, err };
  }

  text(input, min, max, tag, ascii) {
    let err = [];
    tag = tag ? tag : "Input";
    if (input) {
      if (!validator.isLength(input, { min: min, max: max })) {
        err.push(`${tag} must be between ${min} and ${max} characters. `);
      } else if (ascii && !validator.isAscii(input)) {
        err.push(`${tag} contains invalid characters. `);
      }
    } else {
      err.push(`${tag} cannot be blank`);
    }
    return { ok: err.length == 0, err };
  }

  clean(input) {
    let output = "";
    output = xss(input);
    return output;
  }

  isEmail(email) {
    let err = [];
    let ok = true;
    if (!email) {
      return { ok, err: ["Blank Email"] };
    }
    if (validator.isEmail(email)) {
      ok = true;
    } else {
      ok = false;
      err = `Email is not valid.`;
    }
    return { ok, err };
  }

  black_escape(input) {
    let output = "";
    const chars_blacklist = "{;#%/=?`:|&$}+-";
    output = validator.escape(input);
    output = validator.blacklist(input, chars_blacklist);
    return output;
  }
}
