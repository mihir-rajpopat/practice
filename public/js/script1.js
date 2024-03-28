let card1 = document.querySelector(".card1");
let card2   = document.querySelector(".card2");
let card3 = document.querySelector(".card3");
let card4 = document.querySelector(".card4");
let card5 = document.querySelector(".card5");
let card6 = document.querySelector(".card6");
let card7 = document.querySelector(".card7");
let next = document.getElementById("next");
let sub = document.getElementById("sub");
sub.style.display = "none"
card2.style.display = "none";
card3.style.display = "none";
card4.style.display = "none";
card5.style.display = "none";
card6.style.display = "none";
card7.style.display = "none";
let vli = true
var count  = 1;
async function btn(id)
{   
    vli = true
    next.style.display ="block"
    next.innerText = "next"
    if(count==1)
    {
        let must1 = document.querySelectorAll(".must1");
        let validate = document.querySelectorAll(".validate");
        validate.forEach(data => {
            data.remove()
        })
        must1.forEach(data => {
    
            if (!(data.value.trim()))
             {
                let p = document.createElement("p")
                data.insertAdjacentElement("afterend", p)
                p.classList.add("validate")
                p.textContent = "*must"
                p.style.color = "red"
                p.style.fontSize = "10px"
                p.style.margin = "0 8px"
                vli =false
    
            }
    
            //check phone number is number or not
            if (data.name == "phone" && isNaN(data.value)) {
    
                let p = document.createElement("p")
                data.insertAdjacentElement("afterend", p)
                p.classList.add("validate")
                p.textContent = `*Phone number must be of Number`
                p.style.color = "red"
                p.style.fontSize = "12px"
                p.style.margin = "0 5px"
                vli =false
            }
            //check the length of phone number
            if (data.name == "phone" && !isNaN(data.value) && data.value.length != 10) {
    
                let p = document.createElement("p")
                data.insertAdjacentElement("afterend", p)
                p.classList.add("validate")
                p.textContent = "*Phone number must be of 10 digit"
                p.style.color = "red"
                p.style.fontSize = "12px"
                p.style.margin = "0 5px"
                vli =false
            }
            //check the email is valid or not
            let regexemail = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
          
            if (data.name == "email" && !(data.value.match(regexemail))) {
                let p = document.createElement("p")
                data.insertAdjacentElement("afterend", p)
                p.classList.add("validate")
                p.textContent = "*email is not valid"
                p.style.color = "red"
                p.style.fontSize = "12px"
                p.style.margin = "0 5px"
                vli =false
            }
    
            //check for datevalidte
            if (data.name == "dob") {
                let date=new Date(data.value)
                if (isNaN(date)) {
                    let p = document.createElement("p")
                    data.insertAdjacentElement("afterend", p)
                    p.classList.add("validate")
                    p.textContent = "*date is not valid"
                    p.style.color = "red"
                    p.style.fontSize = "12px"
                    p.style.margin = "0 5px"
                    vli =false
                }
            }
            
        });
    }
    if(count==2)
    {
        let must2 = document.querySelectorAll(".must2");
        let validate = document.querySelectorAll(".validate");
        let bachelor = document.querySelectorAll(".bachelor input")
        let master = document.querySelectorAll(".master input")
            
        validate.forEach(data => {
            data.remove()
        })
    
        must2.forEach(data => {
    
            if (!(data.value.trim()))
             {
                let p = document.createElement("p")
                data.insertAdjacentElement("afterend", p)
                p.classList.add("validate")
                p.textContent = "*must"
                p.style.color = "red"
                p.style.fontSize = "10px"
                p.style.margin = "0 8px"
                vli =false
    
            }
    
            //check phone number is number or not
            if (data.name == "phone" && isNaN(data.value)) {
    
                let p = document.createElement("p")
                data.insertAdjacentElement("afterend", p)
                p.classList.add("validate")
                p.textContent = `*Phone number must be of Number`
                p.style.color = "red"
                p.style.fontSize = "12px"
                p.style.margin = "0 5px"
                vli =false
            }
            //check the length of phone number
            if (data.name == "phone" && !isNaN(data.value) && data.value.length != 10) {
    
                let p = document.createElement("p")
                data.insertAdjacentElement("afterend", p)
                p.classList.add("validate")
                p.textContent = "*Phone number must be of 10 digit"
                p.style.color = "red"
                p.style.fontSize = "12px"
                p.style.margin = "0 5px"
                vli =false
            }
            //check the email is valid or not
            let regexemail = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
          
            if (data.name == "email" && !(data.value.match(regexemail))) {
                let p = document.createElement("p")
                data.insertAdjacentElement("afterend", p)
                p.classList.add("validate")
                p.textContent = "*email is not valid"
                p.style.color = "red"
                p.style.fontSize = "12px"
                p.style.margin = "0 5px"
                vli =false
            }
    
            //check for datevalidte
            if (data.name == "dob") {
                let date=new Date(data.value)
                if (isNaN(date)) {
                    let p = document.createElement("p")
                    data.insertAdjacentElement("afterend", p)
                    p.classList.add("validate")
                    p.textContent = "*date is not valid"
                    p.style.color = "red"
                    p.style.fontSize = "12px"
                    p.style.margin = "0 5px"
                    vli =false
                }
            }
            
        });

        //check the details of bachelor
        let bachelorvalue = [];
        bachelor.forEach(element => {
            bachelorvalue.push(element.value)
        });
        

        bachelorvalue.forEach(element => {
            if (element !== "") {
                let validate = document.querySelectorAll(".bachelor .validate");
                if (validate.length) {
                    validate.forEach(data => {
                        data.remove()
                    })
                }
        bachelor.forEach(data => {
            if (data.value == "") {
                let p = document.createElement("p")
                data.insertAdjacentElement("afterend", p)
                p.classList.add("validate")
                p.textContent = "*"
                p.style.color = "red"
                p.style.fontSize = "14px"
                p.style.margin = "0 2px"
                vli =false
            }

        })

    }
});



    //check the details of master
    let mastervalue = [];
    master.forEach(element => {
        mastervalue.push(element.value)
    });

    mastervalue.forEach(element => {
        if (element !== "") {
            let validate = document.querySelectorAll(".master .validate");
            if (validate.length) {
                validate.forEach(data => {
                data.remove()
            })
            }
        master.forEach(data => {
            if (data.value == "") {
                let p = document.createElement("p")
                data.insertAdjacentElement("afterend", p)
                p.classList.add("validate")
                p.textContent = "*"
                p.style.color = "red"
                p.style.fontSize = "17px"
                p.style.margin = "0 5px"

                vli =false

            }

        })
    }
});

    }
    if(count==3)
    {

        let validate = document.querySelectorAll(".validate");
        let experience1 = document.querySelectorAll(".experience1 input")
        let experience2 = document.querySelectorAll(".experience2 input")
        let experience3 = document.querySelectorAll(".experience3 input")

        validate.forEach(data => {
            data.remove()
        })
   
        //check the details for experience1
        let experience1value = [];
        experience1.forEach(element => {
            experience1value.push(element.value)
        });

        experience1value.forEach(element => 
        {
                if (element !== "") 
                {
                    let validate = document.querySelectorAll(".experience1 .validate");
                    if (validate.length) {
                        validate.forEach(data => {
                        data.remove()
                    })
                        }
                    experience1.forEach(data => {
                        if (data.value == "") 
                        {
                            let p = document.createElement("p")
                            data.insertAdjacentElement("afterend", p)
                            p.classList.add("validate")
                            p.textContent = "*"
                            p.style.color = "red"
                            p.style.fontSize = "14px"
                            p.style.margin = "0 auto"

                            vli =false

                        }

                    })
                }
        });

        //check the details for experience2
        let experience2value = [];
        experience2.forEach(element => {
            experience2value.push(element.value)
        });

        experience2value.forEach(element => {
            if (element !== "") {
                let validate = document.querySelectorAll(".experience2 .validate");
                if (validate.length) {
                    validate.forEach(data => {
                    data.remove()
                })
                }
                experience2.forEach(data => {
                    if (data.value == "") {
                        let p = document.createElement("p")
                        data.insertAdjacentElement("afterend", p)
                        p.classList.add("validate")
                        p.textContent = "*"
                        p.style.color = "red"
                        p.style.fontSize = "14px"
                        p.style.margin = "0 auto"

                        vli =false

                    }

                })
            }
        });

        //check the details for experience3
        let experience3value = []
        experience3.forEach(element => {
            experience3value.push(element.value)
        });

        experience3value.forEach(element => {
            if (element !== "") {
                let validate = document.querySelectorAll(".experience3 .validate");
                if (validate.length) {
                    validate.forEach(data => {
                    data.remove()
                })
                }
                experience3.forEach(data => {
                    if (data.value == "") {
                        let p = document.createElement("p")
                        data.insertAdjacentElement("afterend", p)
                        p.classList.add("validate")
                        p.textContent = "*"
                        p.style.color = "red"
                        p.style.fontSize = "14px"
                        p.style.margin = "0 auto"

                        vli =false

                    }

                })
            }
        });

    }
    if(count==4)
    {


        let lang=document.querySelectorAll(".lang1")
      
        //check the details of language
        let langvalue=[];
        lang.forEach(data=>{
            langvalue.push(data.checked);
        })

        //check whether one language is selected or not
        if(!langvalue.includes(true)){

            let span = document.createElement("span");
            document.querySelector(".error").insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*please select one language"
            span.style.color = "red"
            span.style.fontSize = "12px"
            span.style.margin = "0"
            vli = false;
        }

        //check language and its option is selected or not
        lang.forEach((data,i)=>{
            if (data.checked == true) {
            
                let check=document.querySelectorAll(".check")
                let checkinput=check[i].querySelectorAll("input")
                // console.log(checkinput);
                let checkval=[]
                checkinput.forEach(data=>{
                    checkval.push(data.checked);
                })
                if(!checkval.includes(true)){

                    let span = document.createElement("span");
                    check[i].insertAdjacentElement("afterend", span)
                    span.classList.add("validate")
                    span.textContent = "*please select one option"
                    span.style.color = "red"
                    span.style.fontSize = "12px"
                    span.style.margin = "0 5px"
                    vli= false;
                }
            }

            if (data.checked == false) {
            
                let check=document.querySelectorAll(".check")
                let checkinput=check[i].querySelectorAll("input")
                console.log(checkinput);
                let checkval=[]
                checkinput.forEach(data=>{
                    checkval.push(data.checked);
                })
                if(checkval.includes(true)){

                    let span = document.createElement("span");
                    check[i].insertAdjacentElement("afterend", span)
                    span.classList.add("validate")
                    span.textContent = "*please select one lang"
                    span.style.color = "red"
                    span.style.fontSize = "12px"
                    span.style.margin = "0 5px"
                    vli= false;
                }
            }

        })
    }
    if(count==5)
    {
        let tech=document.querySelectorAll(".tech1")

                //check the details of technology
        let techval=[]
        tech.forEach(element => {
            techval.push(element.checked)
        });

        //check technology and its level is selected or not
        tech.forEach((data,i)=>{
            if (data.checked == true) {
            
        let techs=document.querySelectorAll(".techvalue")
        let techinput=techs[i].querySelectorAll("input")
     
        let techsval=[]
        techinput.forEach(data=>{
            techsval.push(data.checked);
        })
        if(!techsval.includes(true)){

            let span = document.createElement("span");
            techs[i].insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*please select one option"
            span.style.color = "red"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"
            vli= false;
        }
    }

            if (data.checked == false) {
            
                let techs=document.querySelectorAll(".techvalue")
                let techinput=techs[i].querySelectorAll("input")
            
                let techsval=[]
                techinput.forEach(data=>{
                    techsval.push(data.checked);
                    })
            if(techsval.includes(true)){

                    let span = document.createElement("span");
                    techs[i].insertAdjacentElement("afterend", span)
                    span.classList.add("validate")
                    span.textContent = "*please select  technology"
                    span.style.color = "red"
                    span.style.fontSize = "12px"
                    span.style.margin = "0 5px"
                    vli= false;
            }
                }
            })
            


    }
    if(count==6)
    {

        let ref1 = document.querySelectorAll(".ref1 input")
        let ref2 = document.querySelectorAll(".ref2 input")
        let refnumber=document.querySelectorAll(".refnumber")

                //check the details for reference1
                let ref1value = [];
                ref1.forEach(element => {
                    ref1value.push(element.value)
                });

                ref1value.forEach(element => {
                        if (element !== "") {
                            let validate = document.querySelectorAll(".ref1 .validate");
                            if (validate.length) {
                                validate.forEach(data => {
                                data.remove()
                            })
                            }
                    ref1.forEach(data => {
                        if (data.value == "") {
                            let span = document.createElement("span")
                            data.insertAdjacentElement("afterend", span)
                            span.classList.add("validate")
                            span.textContent = "*"
                            span.style.color = "red"
                            span.style.fontSize = "14px"
                            span.style.margin = "0 5px"

                            vli =  false;

                        }

                    })
                }
        });

            refnumber.forEach(ref=>{
                if ((ref.name=="contactnum1" || ref.name=="contactnum2")&& isNaN(ref.value)) {
                    let span = document.createElement("span")
                    ref.insertAdjacentElement("afterend", span)
                    span.classList.add("validate")
                    span.textContent = "*it must be number"
                    span.style.color = "red"
                    span.style.fontSize = "12px"
                    span.style.margin = "0 5px"
                    return false;
                }
            })




        //check the details for reference2
            let ref2value = [];
            ref2.forEach(element => {
                ref2value.push(element.value)
            });

            ref2value.forEach(element => {
                if (element !== "") {
                    let validate = document.querySelectorAll(".ref2 .validate");
                    if (validate.length) {
                        validate.forEach(data => {
                        data.remove()
                    })
                    }
                ref2.forEach(data => {
                    if (data.value == "") {
                        let span = document.createElement("span")
                        data.insertAdjacentElement("afterend", span)
                        span.classList.add("validate")
                        span.textContent = "*"
                        span.style.color = "red"
                        span.style.fontSize = "14px"
                        span.style.margin = "0 5px"

                        vli= false;

                    }

                })
        }
            });

    }
    if(count<=6)
    {

        if(vli == true)
        {
            var target_card = document.getElementById(count.toString())
    
            target_card.style.display= "none";
            sub.style.display = "none"
      
          
              count++;        
             var target_card = document.getElementById(count.toString())
      
             target_card.style.display= "block";
        }
  
    } 
    if(count==7)
    {
         sub.style.display = "block"
    
      next.style.display = "none"
      
    }    
    

}
async function sub1()
{   
    let must7 = document.querySelectorAll(".must7");
    let validate = document.querySelectorAll(".validate");
    validate.forEach(data => {
        data.remove()
    })

    must7.forEach(data => {
        if (!(data.value.trim()))
         {
            let p = document.createElement("p")
            data.insertAdjacentElement("afterend", p)
            p.classList.add("validate")
            p.textContent = "*must"
            p.style.color = "red"
            p.style.fontSize = "10px"
            p.style.margin = "0 8px"
            vli =false
        }  
    });


   if(vli==true)
    {
        form = document.getElementById("form")

    

        const data = new URLSearchParams(new FormData(form));

        console.log(data);
        var  url = window.location.origin+ "/insertdata"
        let res1 = await fetch(url, {
            method: 'post',
            body: data,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
        })
        res1 =await  res1.json();

        alert("data insert succes fully")

    }

    


}
function btn_prev(id)
{   
    next.style.display ="block"
    next.innerText = "next"
    if(count>=2)
    {
        var target_card = document.getElementById(count.toString())
        target_card.style.display= "none";
         count--;        
        var target_card = document.getElementById(count.toString()) 
        target_card.style.display= "block";
        sub.style.display = "none"
      
        
    }
}
let loc = window.location.origin + window.location.pathname ;
if(loc ==  "http://localhost:8000/update")
{
    async function data_fill()
    {
            let path1 = window.location.origin + "/updatedata";
            let jsonData = await fetch(path1);
            jsonData = await jsonData.json();
             console.log(jsonData);
             
                Object.keys(jsonData).forEach(function(key) 
                {
                    var element = document.getElementById(key);
                    if (element) 
                    {
                        element.value = jsonData[key];
                    }
                });

     }
                 data_fill();

}





