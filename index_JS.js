const back = document.querySelector(".title")

const Lecture_Show = document.querySelector(".button-ShowLecture")
const Lecture_Heard = document.querySelector(".Lecture")

const io = document.querySelector(".io")
const git = document.querySelector(".git")
const ytb = document.querySelector(".ytb")

const origin_backgroundColor = back.style.backgroundColor

const menu = document.querySelector(".Menu")
const menuItems = document.querySelectorAll(".Menu_Item");
const select = document.querySelectorAll(".small_title");

const view = document.querySelectorAll(".ProjectView");

var menuOpen = false;

if(sessionStorage.getItem("Scroll_Load") == 'true')
{
  sessionStorage.setItem('Scroll_Load', false);
  window.scrollTo(0, sessionStorage.getItem('Current_Scroll_Value'));
}

view.forEach(e=>
  {    
    e.addEventListener("click", function()
    { 
      sessionStorage.setItem('Current_Scroll_Value', window.scrollY);
      sessionStorage.setItem('Scroll_Load', true);
    })
  }
)


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



menuItems.forEach(element=>
{
  element.addEventListener("click", function()
  {
    const content = element.textContent;
    select.forEach(element2=>
    {
      if(element2.textContent.includes(content))
      {
        element2.scrollIntoView({ behavior: 'smooth' });
      }
    })
  })
})
