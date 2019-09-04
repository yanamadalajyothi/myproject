function useTemplate() {
    var myTemplate = document.getElementById('myTemplate');
    normalContent = document.getElementById('normalContent');
    clonedTemplate = myTemplate.content.cloneNode(true);
    normalContent.appendChild(clonedTemplate);
}
//cloneNode() method is used to create a copy of a node
