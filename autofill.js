const details = [],
    fields = ["first-name", "last-name",
        "email", "phone", "company"
    ];

function retrieveDetails(e, t) {
    details[t] = localStorage.getItem(e);
}

function outputDetails(e, t) {
    fieldClass = document.getElementsByClassName(fields[t]);
    for(var i = 0; i < fieldClass.length; i++){
    fieldClass[i].value=e;    // Change the content
    }
}

function saveDetails() {
    fields.forEach(function(e, t) {
        localStorage.setItem(e,
            document
            .getElementById(
                e).value)
    })
}
fields.forEach(retrieveDetails), details
    .forEach(outputDetails), document
    .getElementById("submit").onclick =
    function() {
        saveDetails()
    };
