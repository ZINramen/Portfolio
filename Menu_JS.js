const back = document.querySelector(".title")
const io = document.querySelector(".io")
const git = document.querySelector(".git")
const ytb = document.querySelector(".ytb")
const loading = document.querySelector(".Loading");

const pbc = document.querySelector(".PublishingBox_Container")
let idx = sessionStorage.getItem("idx") ? parseInt(sessionStorage.getItem("idx")) : 0;
let max_idx;

const element = document.querySelector(".SceneLoad")
const element2 = document.querySelector(".SceneLoad2")

const coins = document.querySelectorAll(".coin");

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
      })
    }
  }
)

if(element)
  {
  element.classList.remove("SceneLoad");
  element.offsetWidth;
  element.classList.add("SceneLoad");
}
if(element2)
  {
  element2.classList.remove("SceneLoad2");
  element2.offsetWidth;
  element2.classList.add("SceneLoad2");
}

if(pbc)
{
  max_idx = 2;
  switch(idx)
  {
    case 0:
      document.body.style.backgroundImage = "url('/images/KADI02.png')";
      pbc.innerHTML = 
      `
      <div style= "width:1050px; display:flex; margin-left:auto; margin-right:auto;">
        <h2 style=" text-align: left; color : rgb(192, 231, 255);"> >> Google Play Store </h2>
      </div>
      <div style="display: flex; margin-left: auto; margin-right: auto; width: 1200px">
          <div class ="PageButton pre">◁</div>
            <div class="PublishingBox" style="margin-left:2%;">
              <div>
                <h1 style="color:hsl(59, 100%, 51%)">① 카디의 미로 </h1>
                <hr style="max-width: 98%;">
                <span style="color:#d69027; "> <b>▪︎ 게시 일자 : </b> </span> <span>2020.02.10 <sub style="color: rgb(165, 165, 165);">(현재 업로드 종료)</sub><span> 
                  <br><br>
                  <span style="color:#d69027"> <b>▪︎ 게시 프로젝트 요약</b> </span> 
                  <div style="padding-left: 20px;"> ▪︎ 모바일 환경에서 구동되도록 제작된 플랫포머 게임 </div> 
                  <div style="padding-left: 20px"> ▪︎ 광고 호출, 유료 결제 등 수익과 관련된 부분도 구현 </div>
                  <br>
                  <span style="color:#d69027"> <b>▪︎ 게시 결과</b> </span> 
                  <br><div style ="padding-left: 20px;">플레이 스토어에 개발한 앱을 등록하기 위한 준비 과정과 결제 시스템을 추가하는 과정을 알게 되었습니다.</div>
                  <br><div style="padding-left: 20px"> 또한, 업데이트 게시나 버전 관리, 테스트 버전 게시 등의 플레이스토어의 다양한 기능들도 학습해볼 수 있었습니다. </div>
              </div>
              <br>
            </div>
            <img style="margin-left:2%; margin-right:2%; width: 30%; height:100%; border-radius: 25px" src="/images/KADI.png" alt="">
            <div class ="PageButton next">▷</div>
        </div>
        <div style="margin-top: 100px; margin-bottom: 500px; margin-right: auto; text-align: center;">
          <div class="PublishingBox" style="display: inline-block; width:1180px; margin-top:30px; padding-left:auto; margin-right:auto">
            <img src="/images/2019_Projects/카디_!.png" style="max-height: 171px; margin-top:30px;">
            <img src="/images/2019_Projects/카디_2.png" style="max-height: 171px; margin-top:30px;">
            <img src="/images/2019_Projects/카디_3.png" style="max-height: 171px; margin-top:30px;">
            <img src="/images/2019_Projects/카디_4.png" style="max-height: 171px; margin-top:30px;">
          </div>    
        </div>
      `;
    break
    
    case 1:
      document.body.style.backgroundImage = "url('/images/2021-Projects/PrisonB.png')";
      pbc.innerHTML = 
      `
      <div style= "width:1050px; display:flex; margin-left:auto; margin-right:auto;">
        <h2 style=" text-align: left; color : rgb(192, 231, 255);"> >> Google Play Store </h2>
      </div>
      <div style="display: flex; margin-left: auto; margin-right: auto; width: 1200px">
          <div class ="PageButton pre">◁</div>
            <div class="PublishingBox" style="margin-left:2%;">
              <div>
                <h1 style="color:hsl(193, 100.00%, 51.00%)">② 감옥 탈출 </h1>
                <hr style="max-width: 98%;">
                <span style="color:#d69027; "> <b>▪︎ 게시 일자 : </b> </span> <span>2020.05.24 <sub style="color: rgb(165, 165, 165);">(현재 업로드 종료)</sub><span> 
                  <br><br>
                  <span style="color:#d69027"> <b>▪︎ 게시 프로젝트 요약</b> </span> 
                  <div style="padding-left: 20px;"> ▪︎ 모바일 환경에서 구동되도록 제작된 2D 플랫포머 게임 </div> 
                  <div style="padding-left: 20px"> ▪︎ 최대 3개의 버튼으로 진행되는 매우 간단한 게임 </div> 
                  <div style="padding-left: 20px"> ▪︎ 광고 기능만 적용한 어플</div>
                  <br>
                  <span style="color:#d69027"> <b>▪︎ 게시 결과</b> </span> 
                  <br><div style ="padding-left: 20px;">쉬운 게임 플레이 방식과 제목에 검색하기 쉬운 키워드를 삽입하는 방법으로 누적 다운로드 100회를 달성했습니다. </div>
                  <br><div style="padding-left: 20px"> 추가적으로 구글 Admob의 여러 광고 설정을 테스트해볼 수 있었습니다. </div>
              </div>
              <br>
            </div>
            <img style="margin-left:2%; margin-right:2%; width: 30%; height:100%; border-radius: 25px" src="/images/2021-Projects/Prison.png" alt="">
            <div class ="PageButton next">▷</div>
        </div>
        <div style="margin-top: 100px; margin-bottom: 500px; margin-right: auto; text-align: center;">
          <div class="PublishingBox" style="display: inline-block; width:1180px; margin-top:30px; padding-left:auto; margin-right:auto">
            <img src="/images/2021-Projects/감옥 탈출.png" style="max-height: 160px; margin-top:30px;">
            <img src="/images/2021-Projects/감옥 탈출2.png" style="max-height: 160px; margin-top:30px;">
            <img src="/images/2021-Projects/감옥 탈출3.jpg" style="max-height: 160px; margin-top:30px;">
            <img src="/images/2021-Projects/감옥 탈출4.jpg" style="max-height: 160px; margin-top:30px;">
          </div>    
        </div>
      `;
    break
    
    case 2:
      document.body.style.backgroundImage = "url('/images/2024-Projects/TAB.png')";
      pbc.innerHTML = 
      `
      <div style= "width:1050px; display:flex; margin-left:auto; margin-right:auto;">
        <h2 style=" text-align: left; color : rgb(255, 153, 0);"> >> Stove Indie </h2>
      </div>
      <div style="display: flex; margin-left: auto; margin-right: auto; width: 1200px">
          <div class ="PageButton pre">◁</div>
            <div class="PublishingBox" style="margin-left:2%;">
              <div>
                <h1 style="color:hsl(0, 100.00%, 51.00%)">③ TRI APO </h1>
                <hr style="max-width: 98%;">
                <span style="color:#d69027; "> <b>▪︎ 게시 일자 : </b> </span> <span>2024.12.31 <sub style="color: rgb(165, 165, 165);"></sub><span> 
                  <br><br>
                  <span style="color:#d69027"> <b>▪︎ 게시 프로젝트 요약</b> </span> 
                  <div style="padding-left: 20px;"> ▪︎ 졸업 프로젝트로 제작했던 게임 "TRI APO" </div> 
                  <div style="padding-left: 20px"> ▪︎ 국내 인디 게임 유통 플랫폼에 처음 출시한 게임입니다. </div><br>
                  <div style="padding-left: 20px"> <div style="display:flex;"><div>▪︎</div> <div  style="padding-left: 9px">현업 개발자분의 피드백을 받아 퀄리티, 게임 플레이 측면에서 개선 작업을 진행하여 업로드하였습니다. </div> </div> </div>
                  <br>
                  <span style="color:#d69027"> <b></b> </span> 
                  <br><div style ="padding-left: 20px;"></div>
                  <br><div style="padding-left: 20px"> </div>
              </div>
              <br>
            </div>
            <img style="margin-left:2%; margin-right:2%; width: 30%; height:100%; border-radius: 25px" src="/images/2024-Projects/TA_Stove.png" alt="">
            <div class ="PageButton next">▷</div>
        </div>
        <div style="margin-top: 100px; margin-bottom: 500px; margin-right: auto; text-align: center;">
          <div class="PublishingBox" style="display: inline-block; width:1180px; margin-top:30px; padding-left:auto; margin-right:auto">
            <img src="/images/2024-Projects/TA.png" style="max-height: 160px; margin-top:30px;">
            <img src="/images/2024-Projects/TA2.png" style="max-height: 170px; margin-top:30px;">
            <img src="/images/2024-Projects/TA4.png" style="max-height: 170px; margin-top:30px;">
            <img src="/images/2024-Projects/TA5.png" style="max-height: 170px; margin-top:30px;">
          </div>    
        </div>
      `;
    break
  }
}

const previous = document.querySelector(".PageButton.pre")
const next = document.querySelector(".PageButton.next")

if(previous)
{
  previous.addEventListener("click", function()
  {
    if(idx == 0)
      sessionStorage.setItem("idx", max_idx)
    else
      sessionStorage.setItem("idx", idx-1)
    window.open(window.location.href, taget="blank");
  }) 
}

if(next)
  {
    next.addEventListener("click", function()
    {
      if(idx == max_idx)
        sessionStorage.setItem("idx", 0)
      else
        sessionStorage.setItem("idx", idx+1)
      window.open(window.location.href, taget="blank");
    }) 
  }

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

const trigger_With_Href = document.querySelector('.trigger_With_Href');
const trigger_With_Href2 = document.querySelector('.trigger_With_Href2');

if(trigger_With_Href){
window.addEventListener('scroll', () => {
  const trigger_With_Href_Position = trigger_With_Href.getBoundingClientRect().bottom;
  const trigger_With_Href_Position2 = trigger_With_Href2.getBoundingClientRect().bottom;
  if (trigger_With_Href_Position2 <= window.innerHeight) 
  {
    document.body.style.backgroundImage = `url(` + trigger_With_Href2.getAttribute("href") + ')';
  }
  else if(trigger_With_Href_Position <= window.innerHeight)
  {
    document.body.style.backgroundImage = `url(` + trigger_With_Href.getAttribute("href") + ')';
  }
})}