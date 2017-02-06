var doc = document;

var fragment = doc.createDocumentFragment();

for (i = 0; i < 3; i++) {
    var tr = doc.createElement("tr");

    var td = doc.createElement("td");
    td.innerHTML = "content";

    tr.appendChild(td);

    //does not trigger reflow
    fragment.appendChild(tr);
}

var table = doc.createElement("table");

table.appendChild(fragment);

doc.getElementById("here_table").appendChild(table);
