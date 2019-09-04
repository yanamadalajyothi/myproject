function render()
{
var template=document.getElementById("temp");
var clone=document.importNode(template.content,true);//the template element
var host=document.getElementById("host");//node to which you have to append the data
host.appendChild(clone);//appends the template data to host
var display=document.getElementById("main");
display.style="display:none";
}