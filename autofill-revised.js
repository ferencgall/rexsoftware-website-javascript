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
    fieldClass[i].value=e;
    }
}

function valueUpdated() {
    fields.forEach(function(e, t) {
            sessionStorage.setItem(fields[t], "False");
    })
}

function saveDetails() {
        fields.forEach(function(e, t) {
        fieldClass = document.getElementsByClassName(fields[t]);
        for(var i = 0; i < fieldClass.length; i++){
            if (fieldClass[i].value != localStorage.getItem(fields[t]) && sessionStorage.getItem(fields[t]) == "False") {
                localStorage.setItem(e, fieldClass[i].value);
                sessionStorage.setItem(fields[t], "True");
            }
        }
        
    })
}

fields.forEach(retrieveDetails), details
    .forEach(outputDetails),valueUpdated(),
    $(".submit").click(function() {
      valueUpdated();
      saveDetails();
      fields.forEach(retrieveDetails)
      details.forEach(outputDetails)
    });
