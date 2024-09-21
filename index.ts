//var x=document.getElementById("idname")

//const x1:HTMLElement |null = document.getElementById("id");


//Access to value 
let getvalue=()=>{
    var x1=document.getElementById("n1")as HTMLInputElement
    var x2=document.getElementById("n2")as HTMLInputElement
    var result=parseInt(x1.value)+parseInt(x2.value)

    console.log(result)
}