  //hamburger menu

  let mobileMenu = document.querySelector(".mobile-menu");
  let hamburger = document.querySelector(".hamburger");
  let xIcon = document.querySelector(".x-icon");
  let menuIcon = document.querySelector(".menu-icon"); 

//add event listener to button

  hamburger.addEventListener("click", toggleMenu);

//see if menu has class showMenu
  mobileMenu.classList.contains("showMenu");

// toggle menu in and out when clicking on the hamburger by adding/removing 'showMenu' class
function toggleMenu() {
    if (mobileMenu.classList.contains("showMenu")) {
      mobileMenu.classList.remove("showMenu");
      xIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      mobileMenu.classList.add("showMenu");
      xIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }

//make sure that menu links take you home/close menu
  let menuLinks = document.querySelectorAll(".menuLink");

  menuLinks.forEach( 
    function(menuLink) { 
      menuLink.addEventListener("click", toggleMenu);
    }
  )

//MODAL

//when you click bamboo or black 'select reward button' open modal
let modal = document.querySelector(".modal");
//declare rewardBtn variable
let rewardBtn = document.querySelectorAll(".rewardBtn");
let modalClose = document.querySelector(".close");

//loop through reward buttons and add event listener to open modal when either is clicked
rewardBtn.forEach(item => {
  item.addEventListener('click', event => {
    modal.style.display = "block";
  })
})

//close modal when you click x
modalClose.addEventListener("click", () => {
  modal.style.display = "none";
})

//modal has 4 options - 1 grayed out

//if click on option (pledge with no reward, bamboo or black)
    //slide in more content (enter pledge and continue button)
      //when radio button changes get selected radiobutton
      $('#radioForm').change(function(){
        selectedRadioBtn = $("input[name='pledge']:checked").val();
        //if selected value is bamboo show bamboo enter pledge div
          if(selectedRadioBtn == "Bamboo Stand"){
            document.querySelector(".bambooEnterPledge").style.display = "flex";
            //add green border to selected radio button
            $(".bamboo-div").css("border","hsl(176, 50%, 47%) solid 2px");
            $(".black-div").css("border","black solid 1px");
            $(".noReward-div").css("border","black solid 1px");
            //hide other pledge div
            document.querySelector(".blackEnterPledge").style.display = "none";
            document.querySelector(".noEnterPledge").style.display = "none";
          } 
        //if selected value is black show black enter pledge div
            else if (selectedRadioBtn =="Black Edition Stand"){
              document.querySelector(".blackEnterPledge").style.display = "flex";
              //add green border to selected radio button
              $(".black-div").css("border","hsl(176, 50%, 47%) solid 2px");
              $(".bamboo-div").css("border","black solid 1px");
              $(".noReward-div").css("border","black solid 1px");
              //hide other pledge div
              document.querySelector(".bambooEnterPledge").style.display = "none";
              document.querySelector(".noEnterPledge").style.display = "none";
            } 
            //if selected value is no reward add green border to no reward div
            else if (selectedRadioBtn =="No Reward") {
              document.querySelector(".noEnterPledge").style.display = "flex";
              //add green border to selected radio button
              $(".noReward-div").css("border","hsl(176, 50%, 47%) solid 2px");
              $(".bamboo-div").css("border","black solid 1px");
              $(".black-div").css("border","black solid 1px");
              //hide other pledge div
              document.querySelector(".bambooEnterPledge").style.display = "none";
              document.querySelector(".blackEnterPledge").style.display = "none";
            } 
            
    });

//when continue button is clicked 
let continueBtn = document.querySelectorAll(".submit");
let completionModal = document.querySelector(".completionModal");
let completionBtn = document.querySelector(".completionBtn");

    //thank you modal pops up
    $( "#radioForm" ).submit(function( event ) {
      completionModal.style.display="block";

         // # of pledge is added to #backed and updated
              //fetch total backed amount
              let totalBacked = document.querySelector('.totalBacked');
              
              //turn into a num
              let totalBackedNum = parseInt(totalBacked.innerHTML);
              console.log(totalBackedNum);
                //fetch bamboo pledge amount
                let bambooPledgeAmount = document.querySelector("#bambooPledgeAmount").value;
                
                //fetch black pledge amount
                let blackPledgeAmount = document.querySelector("#blackPledgeAmount").value;
                
                let newTotalBacked = +totalBackedNum + +bambooPledgeAmount + +blackPledgeAmount;
                console.log(new Intl.NumberFormat().format(newTotalBacked));
                // totalBacked.innerHTML =  new Intl.NumberFormat().format(newTotalBacked);
                totalBacked.innerHTML = newTotalBacked

            //progress bar is updated based on above number

                //fetch progressbar
                let progressBar= document.querySelector("#progressBar");
                //set value of progress bar to updated total
                progressBar.value= newTotalBacked;

                      //add 1 to total number of backers
                        //fetch total number of backers
                        let totalBackers= document.querySelector(".totalBackers");
                        let totalBackersNum = parseInt(totalBackers.innerHTML);
                        //each time form is submitted add 1 to total backers
                        totalBackers.innerHTML = totalBackersNum + 1;

                  //udpate total number of items left
                    //fetch total #bamboo items
                    let totalBambooItems = document.querySelectorAll(".bambooTotal")
                    //fetch value of bamboo pledge
                        //already got above
                    //if bamboo pledge >0 subtract 1 from #bamboo items
                    if(bambooPledgeAmount.length > 0){
                      //set #bamboo items inner html = new number
                      totalBambooItems.forEach(item => {
                        item.innerHTML = parseInt(item.innerHTML) - 1;
                      })
                    } 
                    else if (bambooPledgeAmount.length === 0) {
                      totalBambooItems.forEach(item =>{
                        item.innerHTML = parseInt(item.innerHTML);
                      })
                    }
                    //fetch total #black items
                    let totalBlackItems = document.querySelectorAll(".blackTotal");
                    //fetch value of black pledge
                        //already got above
                    //turn into a num
                    // let totalBlackItemNum = parseInt(totalBlackItems.innerHTML);
                    //if black pledge >0 subtract 1 from #black items
                    console.log(blackPledgeAmount.length);
                    if(blackPledgeAmount.length > 0) {
                        //set #black items inner html = new number
                        totalBlackItems.forEach(item=>{
                          item.innerHTML = parseInt(item.innerHTML) -1;
                        })
                    } 
                    else if (blackPledgeAmount.length === 0) {
                      totalBlackItems.forEach(item=> {
                        item.innerHTML = parseInt(item.innerHTML);
                      })

                    }
                    
                    

      //prevent form from being submitted
      event.preventDefault();

            //unselect radio buttons
            $("input[type=radio][name=pledge]").prop('checked', false);
            //remove data from fields
            document.querySelector("#bambooPledgeAmount").value='';
            document.querySelector("#blackPledgeAmount").value='';
            //hide extra divs
            document.querySelector(".bambooEnterPledge").style.display = "none";
            document.querySelector(".blackEnterPledge").style.display = "none";
            document.querySelector(".noEnterPledge").style.display = "none";
            //reset all borders to black
            $(".noReward-div").css("border","black solid 1px");
            $(".bamboo-div").css("border","black solid 1px");
            $(".black-div").css("border","black solid 1px");

            modal.style.display = "none";

      

    });
    //close completion modal when got it is clicked
    completionBtn.addEventListener("click", () => {
      completionModal.style.display = "none";
    })



