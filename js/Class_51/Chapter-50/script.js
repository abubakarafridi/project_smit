function fillCity() {
    let autofill ;
    let zip = +document.getElementById("zip").value;

    switch (zip) {
        case 24841 :
            autofill = "Zangali";
            break;
        case 25000 :
            autofill = "Peshawer";
            break;
        case 24401 :
            autofill = "Shakra Pura"
            break;
    }
    document.getElementById("city").value = autofill;
}