import { IMain, ISuite } from "../interface/index";
import { fileExists, hasResults, parseYAML } from "../util";

export class Laze {

  main: IMain | undefined;
  mainPath: string;
  suites: ISuite[] = [];
  isDryRun;

  constructor(mainPath: string, isDryRun: boolean = false) {
    this.mainPath = mainPath;
    this.isDryRun = isDryRun;
    try {
      // has a main file
      if (fileExists(this.mainPath)) this.main = parseYAML(this.mainPath)
      else throw new Error("main file wasn't found.");

      // has valid registred models
      if (!this.main?.registed?.length)
        throw new Error('no tests found to run!')

      if (!fileExists(this.main?.registed))
        throw new Error('some registred specs does not exits.');

      // has outputs and status
      const parsedSuites = this.main?.registed.map((m) => parseYAML(m)) || [];
      if (hasResults(parsedSuites))
        this.suites = parsedSuites;
      if (!isDryRun) {
        this.run();
      }
    } catch (err) {
      // just console log it for now... LAZYYY
      console.log(err);
      console.log('🤬 ');
    }
  }

  run = (): void => {
    console.log("Your spaghetti works! 🤯");
  }

}
