// function openAbout() {
//     let element=document.getElementById("col_left");

//     while (element.firstChild) {
//         element.removeChild(element.firstChild);
//     }

//     var abt = document.createElement('abt');
//     abt.id = "about";
//     abt.setAttribute('style', 'font-size: 20px; cursor: pointer; font-family: serif; text-align: center;');
//     var abt_content = document.createTextNode("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");

//     abt.appendChild(abt_content);
    
//     var orgheading=document.getElementById("jheading");
//     var parentDiv = orgheading.parentNode;
//     parentDiv.replaceChild(abt, orgheading);
// }