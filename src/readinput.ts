import YAML from "yaml";
import * as fs from "fs";
import { ToHack, ToToggler } from "./convert";

/** This takes a YAML-Syntax file and makes it into a Prodigy Hack. */
export function doYml (FilePath : string) {

    const file : string = fs.readFileSync(FilePath, "utf8")
    const yml : any = YAML.parse(file);

    switch (yml.type) {
        case "Hack":
            return ymlHack(yml);

        case "Toggler":
            return ymlToggler(yml);
    
        default:
            return console.error("Unknown type: " + yml.type);
    }

}



function ymlHack (yml : any) {

    const category : String = yml.category;
    const name : String = yml.name;
    const description : String = yml.description;
    const return_ : String = yml.return;
    const setClick : String = yml.setClick;
    const usingYml : boolean = true;

    return ToHack(category, name, description, return_, setClick, usingYml);
}



function ymlToggler (yml : any) {

    const category : String = yml.category;
    const name : String = yml.name;
    const description : String = yml.description;
    const returnEnabled : String = yml.returnEnabled;
    const returnDisabled : String = yml.returnDisabled;
    const setEnabled : String = yml.setEnabled;
    const setDisabled : String = yml.setDisabled;
    const usingYml : boolean = true;

    return ToToggler(category, name, description, returnEnabled, returnDisabled, setEnabled, setDisabled, usingYml);
}