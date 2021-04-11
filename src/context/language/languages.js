import * as english from "./languages/english.json";
import * as polish from "./languages/polish.json";

const languagesSchema = {
  defaultLanguage: "english",
  languages: {
    english: english.default,
    polish: polish.default,
  },
};

export default languagesSchema;
