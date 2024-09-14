const back = document.querySelector(".title")

const Lecture_Show = document.querySelector(".button-ShowLecture")
const Lecture_Heard = document.querySelector(".Lecture")

const io = document.querySelector(".io")
const git = document.querySelector(".git")
const ytb = document.querySelector(".ytb")

const origin_backgroundColor = back.style.backgroundColor

io.addEventListener("mouseenter", function()
{
  back.style.backgroundColor = "rgb(50, 50, 50)" 
})
io.addEventListener("mouseleave", function()
{
  back.style.backgroundColor = origin_backgroundColor 
})

git.addEventListener("mouseenter", function()
{
  back.style.backgroundColor = "rgb(50, 23, 101)" 
})
git.addEventListener("mouseleave", function()
{
  back.style.backgroundColor = origin_backgroundColor 
})

ytb.addEventListener("mouseenter", function()
{
  back.style.backgroundColor = "rgb(200, 0, 0)" 
})
ytb.addEventListener("mouseleave", function()
{
  back.style.backgroundColor = origin_backgroundColor 
})


Lecture_Show.addEventListener("click", function()
{
  if(Lecture_Heard != null)
  {
    if(Lecture_Heard.style.height !="500px")
    {
      Lecture_Heard.style.border = "3px solid rgb(67, 73, 66)";
      Lecture_Heard.style.boxShadow = "10px 10px 10px 1px rgb(10, 10, 10)";
      Lecture_Heard.style.height = "500px"
    }
    else
    {
      Lecture_Heard.style.border = "0px solid rgb(67, 73, 66)";
      Lecture_Heard.style.boxShadow = "0px 0px 0px 0px";
      Lecture_Heard.style.height = "0px"
    }
  }
})