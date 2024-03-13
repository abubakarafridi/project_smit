// function expandPara() {
//     var expandedpara = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
//     document.getElementById("para").innerHTML = expandedpara;
// }

// In line 2 expandedpara is assigned the long text.
// In line 3 the orginal text is replace by expandedpara
// The keyword innerHTML is used for the purpose of inserting text in html

// We can apper list in the div using the innerHTML

function placeAList() {
    let listToPlace = "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";
    document.getElementById("lorisList").innerHTML = listToPlace;
}

// In line 2 listToPlace has all the html assigned to listToPlace
// In line 3 all the html is placed inside the div
