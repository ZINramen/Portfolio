const back = document.querySelector(".title")

const Lecture_Show = document.querySelector(".button-ShowLecture")
const Lecture_Heard = document.querySelector(".Lecture")

const io = document.querySelector(".io")
const git = document.querySelector(".git")
const ytb = document.querySelector(".ytb")

var origin_backgroundColor = null;

const loading = document.querySelector(".Loading");
const menu = document.querySelector(".Menu")
const menuItems = document.querySelectorAll(".Menu_Item");
const select = document.querySelectorAll(".small_title");

const view = document.querySelectorAll(".ProjectView");
const projectBox = document.querySelectorAll(".ProjectBox");
const projectButton = document.querySelectorAll(".PROJECT_Button");

const coins = document.querySelectorAll(".coin");

const hidden = document.getElementById('hidden');

function checkCoin()
{ 
  console.log(sessionStorage.getItem('coin'))
  if(sessionStorage.getItem('coin') && sessionStorage.getItem('coin') == 7)
  {
    hidden.style.display = "block"
  }
}

checkCoin();

coins.forEach(coin=>
  {
    if(sessionStorage.getItem(coin.getAttribute('number')))
    {
      coin.style.display = "none"
    }
    else
    {
      coin.addEventListener("click", function()
      {    
        if(!sessionStorage.getItem('coin'))
        {
          sessionStorage.setItem('coin', 1)
        }
        else
        {
          sessionStorage.setItem('coin', parseInt(sessionStorage.getItem('coin'))+1)
        }
        const a = coin.querySelector('audio');
        sessionStorage.setItem(coin.getAttribute('number'), true);
        a.play();
        coin.style.display = "none"
        checkCoin();
      })
    }
  }
)


var menuOpen = false;

sessionStorage.setItem("idx", 0);

window.onload = function()
{
  loading.style.display = "none";
}

if(sessionStorage.getItem("Scroll_Load") == 'true')
{
  sessionStorage.setItem('Scroll_Load', false);
  window.scrollTo(0, sessionStorage.getItem('Current_Scroll_Value'));
}

view.forEach(e=>
  {    
    e.addEventListener("mouseenter", function()
    { 
      sessionStorage.setItem('Current_Scroll_Value', window.scrollY);
      sessionStorage.setItem('Scroll_Load', true);
    })
  }
)

projectBox.forEach(box=>
  {    
    box.addEventListener("mouseenter", function()
    { 
      box.querySelector(".PROJECT_Buttons").style.display = "block";
    })
    box.addEventListener("mouseleave", function()
    { 
      box.querySelector(".PROJECT_Buttons").style.display = "none";
    })
  }
)

projectButton.forEach(button=>
  {    
    button.addEventListener("mouseenter", function()
    { 
      button.style.boxShadow = "0px 0px 20px red";
      button.style.cursor = "pointer";
    })
    button.addEventListener("mouseleave", function()
    { 
      button.style.boxShadow = "0px 0px 0px gray";
      button.style.cursor = "default";
    })
    button.addEventListener("click", function()
    {
      window.open(this.getAttribute("href"), "_blank");
    })
  }
)



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

// 폰 번호 클릭했을 때 실행
document.getElementById('Phone').addEventListener('click', function(){CopyText("전화번호", "01062905244");});

// 메일 클릭했을 때 실행
document.getElementById('Mail').addEventListener('click', function(){CopyText("메일", "dos9978@naver.com");});

function CopyText(name, content) 
{
  // 텍스트 복사
  navigator.clipboard.writeText(content).then(function() {
      alert(name + " 복사 성공!");
  }).catch(function(err) {
      alert(name + " 복사 실패: " + err);
  });
}

const audio = document.getElementById('myAudio');
const trigger = document.querySelector('.trigger');
const trigger2 = document.querySelector('.trigger2');
const trigger3 = document.querySelector('.trigger3');

window.addEventListener('scroll', () => {
    const triggerPosition = trigger.getBoundingClientRect().bottom;
    const triggerPosition2 = trigger2.getBoundingClientRect().bottom;
    const triggerPosition3 = trigger3.getBoundingClientRect().bottom;

    // 스크롤 위치가 특정 위치에 도달했는지 확인
    if (triggerPosition3 <= window.innerHeight) {
      document.body.style.backgroundImage = `url("/images/READ.gif")`;
    }
    else if (triggerPosition2 <= window.innerHeight) {
      document.body.style.backgroundImage = `url("/images/skill.gif")`;
    }
    else if (triggerPosition <= window.innerHeight) {
      document.body.style.backgroundImage = `url("/images/DEV.gif")`;
    }
    else
    {
      document.body.style.backgroundImage = `url("/images/hello.gif")`;
    }
});