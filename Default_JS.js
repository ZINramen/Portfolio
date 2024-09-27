const back = document.querySelector(".title")

const Lecture_Show = document.querySelector(".button-ShowLecture")
const Lecture_Heard = document.querySelector(".Lecture")

const io = document.querySelector(".io")
const git = document.querySelector(".git")
const ytb = document.querySelector(".ytb")

var origin_backgroundColor = null;

const menu = document.querySelector(".Menu")
const menuItems = document.querySelectorAll(".Menu_Item");
const select = document.querySelectorAll(".small_title");

const view = document.querySelectorAll(".ProjectView");

var menuOpen = false;

if(back)
{
  origin_backgroundColor = back.style.backgroundColor
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
}
if(Lecture_Show)
{
  Lecture_Show.addEventListener("click", function()
  {
    if(Lecture_Heard != null)
    {
      if(Lecture_Heard.style.height !="750px")
      {
        Lecture_Heard.style.border = "3px solid rgb(67, 73, 66)";
        Lecture_Heard.style.boxShadow = "10px 10px 10px 1px rgb(10, 10, 10)";
        Lecture_Heard.style.height = "750px";
      }
      else
      {
        Lecture_Heard.style.border = "0px solid rgb(67, 73, 66)";
        Lecture_Heard.style.boxShadow = "0px 0px 0px 0px";
        Lecture_Heard.style.height = "0px";
      }
    }
  })
}

if(menu)
{
  menu.addEventListener("click", function()
  {
    if(!menuOpen)
    {
      menuOpen = true;
      menuItems.forEach(element => 
      {
        element.style = "margin-top: 20px;  margin-bottom: 20px; font-size: 60%;";
      }); 
    }
    else
    {
      menuOpen = false;
      menuItems.forEach(element => 
      {
        element.style = "margin-top: 0px;  margin-bottom: 0px; font-size: 0%;";
      }); 
    }
  })
}



if(menuItems)
{
  menuItems.forEach(element=>
  {
    element.addEventListener("click", function()
    {
      const content = element.textContent;
      
      console.log(content);
      select.forEach(element2=>
      {
        if(element2.textContent.trim().includes(content.trim()))
        {
          element2.scrollIntoView({ behavior: 'smooth' });
        }
      })
    })
  })
}