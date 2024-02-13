let img=document.getElementById("img")
let upload=document.getElementById("upload")
let saturate=document.getElementById("saturated")
let contrast=document.getElementById("contrast")
let brightness =document.getElementById("brightness")
let sepia = document.getElementById("sepia")
let grayscale=document.getElementById("grayscale")
let bluro =document.getElementById("blur")
let huerotate =document.getElementById("hue-rotate")
let download=document.getElementById("download")
let reset=document.getElementById("reset")
let imgbox=document.getElementById("imgbox")
function resetvalue(){
  img.style.filter="none";
  saturate.value="100"
  contrast.value="100"
  brightness.value="100"
  sepia.value="100"
  grayscale.value="0"
  bluro.value="0"
  huerotate.value="100"
}
let canvas=document.getElementById("canvas")
let ctx =canvas.getContext("2d")

window.onload=function(){
  download.style.display="none"
 reset.style.display="none"
 imgbox.style.display="none"
  
}
upload.onchange=function(){
     resetvalue();
    download.style.display = "block"
    reset.style.display = "block"
    imgbox.style.display = "block"
    let file = new FileReader();
    file.readAsDataURL(upload.files[0])
    file.onload=function(){
      img.src=file.result
    }
    img.onload=function(){
      canvas.width=img.width
      canvas.height=img.height
      ctx.drawImage(img,0,0,canvas.width,canvas.height)
      img.style.display="none";
    }
    
}
let filters=document.querySelectorAll("ul li input");
filters.forEach(filter =>{
 filter.addEventListener('input', function() {
    ctx.filter = 
    `saturate(${saturate.value}%)
     contrast(${contrast.value}%)
     brightness(${brightness.value}%)
     sepia(${sepia.value}%)
     grayscale(${grayscale.value})
     blur(${bluro.value}px)
     hue-rotate(${huerotate.value}deg)
     
    `
    ctx.drawImage(img,0,0,canvas.width,canvas.height)
  })
})
download.onclick=function(){
  download.href=canvas.toDataURL()
}