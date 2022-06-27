import * as fs from 'fs';
import YAML from "yaml";
import { ISuite } from "../interfaces/index";

export const fileExists = (path: string | string[]): boolean => {
  if (typeof path === 'string') {
    return true;
  }

  const resutls = path.map((p) => fileExists(p));
  return resutls.every((el) => el === true);
}

/**
 *
 * @param path of a suite or array of suites.
 * @returns that suite(s) has a status or an output to be tested.
 */
export const hasResults = (input: ISuite | ISuite[]): boolean => {
  if (Array.isArray(input)) {
    input.every((s) => hasResults(s))
  } else {
    if (input?.cases?.length) {
      return input.cases.every((c) => {
        (fileExists(c?.out)) || (typeof c?.status === "number")
      })
    }
  }
  return false;
}

export const parseYAML = (path: string, encoding: BufferEncoding = 'utf8'): any => {
  const file = fs.readFileSync(path, encoding);
  return YAML.parse(file);
}

