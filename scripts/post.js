showContents();

function showContents()
{

    var text1= sessionStorage.getItem("name");
    console.log(text1);
    var text2= sessionStorage.getItem("heading");
    console.log(text2);
    var text3= sessionStorage.getItem("matter");
    document.getElementById("author").innerHTML=text1;
    document.getElementById("heading").innerHTML=text2;
    document.getElementById("matter").innerHTML=text3;
}

function editContent()  //For editing the content
{

    var text1=document.getElementById("editbutton").innerHTML;
    console.log(text1);
    if(text1=='Edit <i class="fa fa-pencil-square-o" aria-hidden="true"></i>')
   {

    console.log("Inside edit  Content");
    var text2='<i class="fa fa-floppy-o" aria-hidden="true"></i>';
    document.getElementById("editbutton").innerHTML="Save "+text2;
    var text2=document.getElementById("editbutton").innerHTML;
    console.log(text2);
    document.getElementById("heading").contentEditable=true;
    document.getElementById("matter").contentEditable=true;
    document.getElementById("heading").style.border="thin solid pink";
    document.getElementById("matter").style.border="thin solid pink";
   }
   else
   {
    console.log("Inside else  Content");
    var text2='<i class="fa fa-pencil-square-o" aria-hidden="true"></i>';
    document.getElementById("editbutton").innerHTML="Edit "+text2;
    var text2=document.getElementById("editbutton").innerHTML;
    console.log(text2);
    document.getElementById("heading").contentEditable = false;
    document.getElementById("matter").contentEditable=false;
    document.getElementById("heading").style.border="0px solid transparent";
    document.getElementById("matter").style.border="0px solid transparent";
   }

}

function likeContent()  //To increment the count once like is pressed
{
    var value=document.getElementById("likebutton").innerHTML;
    console.log(value);

    if (value =='<i class="fa fa-thumbs-up" aria-hidden="true"></i> Like')
    {
  document.getElementById("likebutton").innerHTML='<i class="fa fa-thumbs-up" aria-hidden="true"></i> Liked';
        var text= document.getElementById("liketext").innerHTML;

        if (text == 'Be the first one to like this!')
        {
            document.getElementById("liketext").innerHTML='1 person likes this!';
        }

        
    }
    else
    {
        var text= document.getElementById("liketext").innerHTML;
        var data= text.split(" ")
        count= data[0];
        console.log(count);
        count++;
        document.getElementById("liketext").innerHTML=count+' people like this!'

    }

}

function addComment()  // To add  comments to posts
{
    var comment= document.getElementById("comment").value;
    console.log(comment);
    var template='<div class="check">' + '<p class="comment-style">'+ comment + '</p>' +'</div>';
    console.log(template);
    var text2=document.getElementById("allcomments").innerHTML;
    document.getElementById("allcomments").innerHTML=template+text2;
    document.getElementById("comment").value="";
    document.getElementById("comment").setAttribute("placeholder","Leave a comment...");
    
   

}