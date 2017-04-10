function highlightrows()
{
    if(!document.getElementsByTagName)
        return false;
    var rows=document.getElementsByTagName("option");
    if(rows.length<1)
        return false;
    var text;
    for(var i=0;i<rows.length;i++)
    {
        rows[i].onmouseover=function()
        {
            this.style.fontWeight="bold";
        }
        /*
        rows[i].onmouseout=function()
        {
            this.style.fontWeight="normal";
        }*/
    }
}
window.onload=highlightrows;