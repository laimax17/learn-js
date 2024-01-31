window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {    //child node
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {     // create the text
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createButton(btnText, e, l) {     // create the button
  let btnNode = document.createElement("button");
  let btnNodeText = document.createTextNode(btnText);
  btnNode.appendChild(btnNodeText);
  btnNode.addEventListener(e,l)
  return btnNode;
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let col2 = createTDNode(createButton("Edit Text", "click", function() {
      edit(col1);
    }));
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}

function edit(node){
  let newNode = document.createElement("input");
  newNode.type = 'text';
  newNode.placeholder = 'Enter Cell (x,y) ...';
  node.replaceChild(newNode, node.childNodes[0]);
}