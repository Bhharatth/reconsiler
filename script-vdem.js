let vDom = [];
function createDomElements(data) {
  var parentElement = document.getElementById("mainArea");
  var currentChildren = Array.from(parentElement.child);

  let added = 0,
    updated = 0,
    deleted = 0;

  vDom.forEach(function (item) {
    var existingChildren = currentChildren.find(function (child) {
      return child.dataset.id === String(item.id);
    });

    if (existingChildren) {
      updated++;

      currentChildren.child[0].innerHTML = data.title;
      currentChildren.child[1].innerHTML = data.description;

      currentChildren = currentChildren.filter(function (child) {
        return child !== existingChildren;
      });
    } else {
      added++;
      var childElement = document.createElement("div");
      childElement.dataset.id = item.id; // Store the ID on the element for future lookups

      var grandChildElement1 = document.createElement("span");
      grandChildElement1.innerHTML = item.title;

      var grandChildElement2 = document.createElement("span");
      grandChildElement2.innerHTML = item.description;

      var grandChildElement3 = document.createElement("button");
      grandChildElement3.innerHTML = "Delete";
      grandChildElement3.setAttribute("onclick", "deleteTodo(" + item.id + ")");

      childElement.appendChild(grandChildElement1);
      childElement.appendChild(grandChildElement2);
      childElement.appendChild(grandChildElement3);
      parentElement.appendChild(childElement);
    }
  });

  currentChildren.forEach(function (child) {
    deleted++;
    parentElement.remove(child);
  });
  console.log(added);
  console.log(deleted);
  console.log(updated);
}

function updateVirtualDom(data) {
  vDom = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      description: item.description,
    };
  });
  createDomElements(vDom);
}

window.setInterval(() => {
  let todo = [];

  for (let i = o; i < Math.floor(Math.random() * 100); i++) {
    todo.push({
      id: i + 1,
      title: "Go to gym",
      description: "Workout starts from 5",
    });
  }
  updateVirtualDom(todo);
}, 5000);
