
function validate() {
    let must = document.querySelectorAll(".must");
    let validate = document.querySelectorAll(".validate");
    let experience1 = document.querySelectorAll(".experience1 input")
    let experience2 = document.querySelectorAll(".experience2 input")
    let experience3 = document.querySelectorAll(".experience3 input")
    let male = document.getElementById("male")
    let female = document.getElementById("female")
    let other = document.getElementById("other")
    let bachelor = document.querySelectorAll(".bachelor input")
    let master = document.querySelectorAll(".master input")

    let ref1 = document.querySelectorAll(".ref1 input")
    let ref2 = document.querySelectorAll(".ref2 input")
    let lang=document.querySelectorAll(".lang1")
    let tech=document.querySelectorAll(".tech1")
    let reference=document.querySelectorAll(".reference")
    let datevalidte=document.querySelectorAll(".datevalidte")
    let passingyear=document.querySelectorAll(".passingyear")
   
    let vli = true;


    validate.forEach(data => {
        data.remove()
    })



    must.forEach(data => {

        
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
    0

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


    //check the details for experience1
    let experience1value = [];
    experience1.forEach(element => {
        experience1value.push(element.value)
    });

    experience1value.forEach(element => {
        if (element !== "") {
            let validate = document.querySelectorAll(".experience1 .validate");
            if (validate.length) {
                  validate.forEach(data => {
                   data.remove()
               })
            }
            experience1.forEach(data => {
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

    datevalidte.forEach(date=>{
        if (date.value) {
            let date1=new Date(date.value);
            if (isNaN(date1)) {
                let p = document.createElement("p")
                date.insertAdjacentElement("afterend", p)
                p.classList.add("validate")
                p.textContent = "*it be a date"
                p.style.color = "red"
                p.style.fontSize = "12px"
                p.style.margin = "0"

                vli =false

            }
        }
    })
    

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
                    let p = document.createElement("p")
                    data.insertAdjacentElement("afterend", p)
                    p.classList.add("validate")
                    p.textContent = "*"
                    p.style.color = "red"
                    p.style.fontSize = "14px"
                    p.style.margin = "0 5px"

                    vli =false

                }

            })
        }
    });

    reference.forEach(ref=>{
        if ((ref.name=="contactnum1" || ref.name=="contactnum2")&& isNaN(ref.value)) {
            let p = document.createElement("p")
            ref.insertAdjacentElement("afterend", p)
            p.classList.add("validate")
            p.textContent = "*it must be number"
            p.style.color = "red"
            p.style.fontSize = "12px"
            p.style.margin = "0 5px"
            vli =false
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
                    let p = document.createElement("p")
                    data.insertAdjacentElement("afterend", p)
                    p.classList.add("validate")
                    p.textContent = "*"
                    p.style.color = "red"
                    p.style.fontSize = "14px"
                    p.style.margin = "0 5px"

                    vli =false

                }

            })
        }
    });
return vli
}