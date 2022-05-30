const url=`https://masai-mock-api.herokuapp.com/coffee/menu`;




async function g(){
    let res=await fetch(url)
    let data=await res.json()
    console.log(data.menu.data)
    // console.log(data)
 display(data.menu.data)
}
g()


//  display(data.menu.data)
 function display(data){
     data.forEach(function(ele){
        var box=document.createElement("div")
        var p1=document.createElement("h2");
        p1.innerText=ele.title;
        var p2=document.createElement("p")
        p2.innerText=ele.price;
        var image=document.createElement("img")
        image.setAttribute("src",ele.image)
        var btn=document.createElement("button");
        btn.innerText="Add to Bucket"
        btn.style.marginBottom="11px"
        btn.style.cursor="pointer"
        btn.addEventListener("click",function(){
            fun(ele);
        })
       box.append(image,p1,p2,btn)
    
        document.getElementById("container").append(box)

     })
 }

// function play(){
//     window.location.href="bucket.html"
// }2






function fun(ele){
    window.location.href="bucket.html"
    


}
function login(){
    window.location.href="login.html"

}
function sign(){
    window.location.href="signup.html"
}



//  function  g(){

//  }
