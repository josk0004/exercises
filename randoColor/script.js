import { randomNumber } from "../utils/utils.js";
import { select } from "../utils/utils.js";

select("body").style.backgroundColor = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
