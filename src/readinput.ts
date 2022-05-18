import YAML from "yaml";
import * as fs from "fs";
import * as path from "path";
import { ToHack, ToToggler } from "./convert";

export function doYml (FilePath : string) {

    const file : string = fs.readFileSync(FilePath, "utf8")
    const yml : any = YAML.parse(file);


    if (yml.type == "Hack") {

        return ymlHack(yml);

    } else if (yml.type == "Toggler") {

        return ymlToggler(yml);

    } else {

        return console.error("Unknown type: " + yml.type);

    }

}



function ymlHack (yml : any) {

    const type : String = "Hack";
    const category : String = yml.category;
    const name : String = yml.name;
    const description : String = yml.description;
    const return_ : String = yml.return;
    const setClick : String = yml.setClick;


    return ToHack(type, category, name, description, return_, setClick);


}



function ymlToggler (yml : any) {

    const type : String = "Toggler";
    const category : String = yml.category;
    const name : String = yml.name;
    const description : String = yml.description;
    const returnEnabled : String = yml.returnEnabled;
    const returnDisabled : String = yml.returnDisabled;
    const setEnabled : String = yml.setEnabled;
    const setDisabled : String = yml.setDisabled;

    return ToToggler(type, category, name, description, returnEnabled, returnDisabled, setEnabled, setDisabled);


}