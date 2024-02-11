// ||||||||||||||||||||||||||||||_______menu________|||||||||||||||||||||||||||||||||||||

var togle = document.querySelector('.list');

function toggle(){
    var togle = document.querySelector('.list'); 
    if(togle.style.display === 'none'){
        togle.style.display = 'block'
        gsap.to(togle, {
            duration: 0.5, 
            scaleX: 1,
            scaleY: 1,
            display: 'block', 
            ease: 'power2.inOut'
          });
    }else{
        togle.style.display = 'none'
    }
}








console.log("this is a website")
function sendMail(){
    (function(){
        emailjs.init("");
    })();
    var params ={
        sendername:document.querySelector("#sendername").value,
        to:document.querySelector("#to").value,
        message:document.querySelector("#message").value,
    };
    var serviceID = "";
    var templateID = "";

    emailjs.send(serviceID, templateID,params)
    .then(res=>{
        alert("email send succesfully");
    })
    .catch();
}


var tl = gsap.timeline();
tl
.from(".h1_first", {
y:-50,
duration:1,
opacity: 0,
})
tl
.from(".left_nav_btn", {
y:50,
duration:1,
opacity: 0,
})

gsap.to(".black_bol",{
    y:260,
    duration:2,
    
})

gsap.from(".logo,.list ol li, .whatsapp",{
    y:-30,
    opacity:0,
    duration:0.3,
    delay:0.5,
    stagger:0.1,
})

gsap.from(".boxes .box",{
    x:-30,
    opacity:0,
    stagger:0.1,
    // delay:0.9
    
    scrollTrigger: {
        scroller:"body",
        trigger: ".boxes .box",
        start:"top 70%",
        end:"top 30%",
        // markers:true,

    }})


    gsap.from(".left_div,page_1,page_2,page_3,page_4",{
        x:-30,
        opacity:0,
        stagger:0.1,
        // delay:0.1
        
        scrollTrigger: {
            scroller:"body",
            trigger: "section_div",
            start:"30% 80%",
            end:"top 70%",
            // markers:true,
    
        }})
    

var data = [
  { heading: " rahul roy ", content: "Rahul is an experienced frontend developer hailing from the culturally rich city of Varanasi, India. With 5 years of professional experience in the software development industry, Rahul has established himself as a proficient and dedicated member of the development community.", imageSrc: "./photos/Employee 1.png" },
  { heading: " chhutki Pandey ", content: "Meet Chhutki, a versatile and skilled full-stack developer with a passion for creating innovative and robust software solutions. Hailing from an imaginative world of creativity, Chhutki brings a unique perspective to every project she undertakes.", imageSrc: "./photos/Employee 2.png" },
  { heading: " Mony Rajput ", content: "Mony is a seasoned frontend developer based in the historic city of Varanasi, India, with a wealth of experience spanning over 5 years in the software development industry. Armed with a passion for crafting engaging user experiences and a penchant for cutting-edge technologies, Mony is a driving force behind the success of numerous projects.", imageSrc: "./photos/Employee 3.png" },
  { heading: " chinki chauhan ", content: "Chinki is a highly skilled backend developer renowned for her expertise in building robust and scalable software solutions. With a passion for solving complex problems and a dedication to excellence, Chinki brings a wealth of experience and innovation to every project she undertakes.", imageSrc: "./photos/Employee 4.png" }
];

function changeContent(index) {
  var newData = data[index];
  
  gsap.to('.h1_change', { duration: 0.5, opacity: 0, onComplete: function() {
    document.querySelector('.h1_change').textContent = newData.heading;
    gsap.to('.h1_change', { duration: 0.5, opacity: 1 });
  }});
  
  gsap.to('.content_change', { duration: 0.5, opacity: 0, onComplete: function() {
    document.querySelector('.content_change').textContent = newData.content;
    gsap.to('.content_change', { duration: 0.5, opacity: 1 });
  }});
//   document.getElementById('image').src = newData.imageSrc;
  gsap.to('#image', { duration: 0.5, scale:0.7,onComplete:function(){
    document.getElementById('image').src = newData.imageSrc;
    gsap.to('#image', { duration: 0.2,scale:1 });
  }  });
}
// newData.imageSrc


