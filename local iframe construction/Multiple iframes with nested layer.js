// Input: contentDocument of parent iframe
function add(doc)
{
    const div=doc.createElement("div");
    div.innerHTML="hello";
    doc.body.appendChild(div);
}

//Input: contentDocument of parent iframe, id of this created element, size of created element.
function create(ele,id,height,width,type)
{
    const ifr=ele.createElement("iframe");
    ifr.src=type;
    ifr.id=id;
    ifr.height=height;
    ifr.width=width;
    ele.body.appendChild(ifr);
}