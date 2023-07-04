function createDomElements(data){
    var parentElement = document.getElementById('mainArea');

    var currentChildren = Array.from(parentElement.children);

    let added = 0, updated =0, deleted =0;

    data.forEach((item)=>{
        //check whether the current children already exists
        let existingChildren = data.find(function(child){
            return currentChildren.dataset.id === String(item.id);
        })

        if(existingChildren){
            updated++;

            existingChildren.child[0].innerHTML = item.title;
            existingChildren.child[1].innerHTML = item.description;

            currentChildren = currentChildren.filter(function(child){
                return child !== existingChildren;
            })
        }else{
            added++;
var childElement = document.createElement("div");
childElement.dataset.id = item.id; // Store the ID on the element for future lookups

var grandChildElement1 = document.createElement("span");
grandChildElement1.innerHTML = item.title

var grandChildElement2 = document.createElement("span");
grandChildElement2.innerHTML = item.description

var grandChildElement3 = document.createElement("button");
grandChildElement3.innerHTML = "Delete"
grandChildElement3.setAttribute("onclick", "deleteTodo(" + item.id + ")")

childElement.appendChild(grandChildElement1)
childElement.appendChild(grandChildElement2)
childElement.appendChild(grandChildElement3)
parentElement.appendChild(childElement);

        };
      
    });
    currentChildren.forEach(function(child){
        deleted++;
        parentElement.removeChild(child);
       });

       console.log(added);
       console.log(deleted);
       console.log(updated);
}

