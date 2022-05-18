// Functions




// Convert to hack
export function ToHack (category : String, name : String, description : String, _return : String, setClick : String, yaml : boolean) {

    let return_ = _return;
    let setClick_ = setClick;


    if (_return == "") {
        return_ = "return;";
    } else {
        return_ = `return Toast.fire("Success!", "${_return}", "success");`;
    }



    if (yaml == false) {

        return_ = return_ + "\n";
        setClick_ = setClick_ + "\n";
    }


    var toSend : string = `

new Hack (category.${category}, "${name}", "${description}").setClick(async () => {

    ${setClick_}
    ${return_}});
    `;

    // cc(toSend);
    return toSend;
}
// Convert to hack









// Convert to toggler
export function ToToggler (category : String, name : String, description : String, _enabledReturn : String, _disabledReturn : String, setEnabled : String, setDisabled : String, yaml : boolean) {

    let enabledReturn = _enabledReturn;
    let disabledReturn = _disabledReturn;


    if (_enabledReturn == "") {
        enabledReturn = "return;";
    } else {
        enabledReturn = `return Toast.fire("Enabled!", "${_enabledReturn}", "success");`;
    }


    if (_disabledReturn == "" || _disabledReturn == "\n") {
        disabledReturn = ";";
    } else {
        disabledReturn = `return Toast.fire("Disabled!", "${_disabledReturn}", "success");`;
    }



    if (yaml == false) {

            setEnabled = setEnabled + "\n";
            setDisabled = setDisabled + "\n";
            disabledReturn = disabledReturn + "\n";
            enabledReturn = enabledReturn + "\n";
    }


    var toSend : string = `

new Toggler (category.${category}, "${name}", "${description}").setEnabled(async () => {

    ${setEnabled}
    ${enabledReturn}}).setDisabled(() => {

    ${setDisabled}
    ${disabledReturn}});
    `;

    // cc(toSend);

    return toSend;
}
// Convert to toggler