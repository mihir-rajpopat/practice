//validations
function basicdetails() {
    let require = document.querySelectorAll(".basicdetails .required");
    let validate = document.querySelectorAll(".validate");
    let male = document.getElementById("male")
    let female = document.getElementById("female")
    let other = document.getElementById("other")
    let a = true;
    validate.forEach(data => {
        data.remove()
    })

    require.forEach((data) => {

        if ((data.value.trim() === "")) {
            a = false
            let span = document.createElement("span")
            data.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*Required"
            span.style.color = "red"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"
        }

        // check phone number is number or not
        if (data.name == "phone" && isNaN(data.value)) {
            a = false;
            let span = document.createElement("span")
            data.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = `*Phone number must be of Number`
            span.style.color = "red"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"
        }

        if (data.name == "phone" && data.value.trim() != "" && !isNaN(data.value) && data.value.length != 10) {
            a = false;
            let span = document.createElement("span")
            data.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*Phone number must be of 10 digit"
            span.style.color = "red"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"
        }

        let regexemail = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

        if (data.name == "email" && data.value.trim() != "" && !(data.value.match(regexemail))) {
            let span = document.createElement("span")
            data.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*email is not valid"
            span.style.color = "red"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"
            a = false;
        }

        //check for dates
        if (data.name == "dob" && data.value.trim() != "") {
            let date = new Date(data.value)
            if (isNaN(date)) {
                let span = document.createElement("span")
                data.insertAdjacentElement("afterend", span)
                span.classList.add("validate")
                span.textContent = "*date is not valid"
                span.style.color = "red"
                span.style.fontSize = "12px"
                span.style.margin = "0 5px"
                return false;
            }
        }

    })


    if (!male.checked && !female.checked && !other.checked) {
        a=false
        let span = document.createElement("span");
        document.querySelector("label[for=gender]").insertAdjacentElement("afterend", span)
        span.classList.add("validate")
        span.textContent = "*Required"
        span.style.color = "red"
        span.style.fontSize = "12px"
        span.style.margin = "0 5px"
    }

    return a;

}

function educationdetails() {
    let require = document.querySelectorAll(".educationdetails .required");
    let validate = document.querySelectorAll(".validate");
    let bachelor = document.querySelectorAll(".bachelor .val")
    let master = document.querySelectorAll(".master .val")
    let passingyear = document.querySelectorAll(".passingyear")

    let a = true;
    validate.forEach(data => {
        data.remove()
    })

    require.forEach((data) => {

        if ((data.value.trim() === "")) {
            a = false
            let span = document.createElement("span")
            data.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*Required"
            span.style.color = "red"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"
          
        }

        if ((data.name == "sscpassingyear" || data.name == "hscpassingyear") && isNaN(data.value)) {
            a = false;
            let span = document.createElement("span")
            data.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*passing year must be number"
            span.style.color = "red"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"
        }

        if ((data.name == "sscpassingyear" || data.name == "hscpassingyear") && data.value.trim() != "" && !isNaN(data.value) && data.value.length != 4) {
            a = false;
            let span = document.createElement("span")
            data.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*passing year must be 4 digit"
            span.style.color = "red"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"
        }

    })

    let bachelorvalue = [];
    bachelor.forEach(element => {
        bachelorvalue.push(element.value)
    });

    bachelorvalue.forEach(element => {
        if (element.trim() !== "") {
            let validate = document.querySelectorAll(".bachelor .validate");
            if (validate.length) {
                validate.forEach(data => {
                    data.remove()
                })
            }

            bachelor.forEach(data => {
                if (data.value.trim() == "") {
                    a = false;
                    let span = document.createElement("span")
                    data.insertAdjacentElement("afterend", span)
                    span.classList.add("validate")
                    span.textContent = "*"
                    span.style.color = "red"
                    span.style.fontSize = "14px"
                    span.style.margin = "0 2px"

                }
            })
        }
    });

    passingyear.forEach(py => {
        if (py.value && isNaN(py.value)) {
            a = false
            let span = document.createElement("span")
            py.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*it be number"
            span.style.color = "red"
            span.style.fontSize = "12px"
            span.style.margin = "0 2px"
        }

        if (py.value && !isNaN(py.value) && py.value.length != 4) {
            a = false;
            let span = document.createElement("span")
            py.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*4 digit only"
            span.style.color = "red"
            span.style.fontSize = "12px"
            span.style.margin = "0 2px"
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
                    a = false;
                    let span = document.createElement("span")
                    data.insertAdjacentElement("afterend", span)
                    span.classList.add("validate")
                    span.textContent = "*"
                    span.style.color = "red"
                    span.style.fontSize = "17px"
                    span.style.margin = "0 5px"
                }

            })
        }
    })
    return a;
}

function workexperience() {
    let exp = document.querySelectorAll(".exp")
    let dates = document.querySelectorAll(".dates")
    let validate = document.querySelectorAll(".validate");

    let a = true;
    validate.forEach(data => {
        data.remove()
    })

    exp.forEach((data) => {
        let exp = data.querySelectorAll(".exp input")
        let expvalue = []
        exp.forEach(element => {
            expvalue.push(element.value)
        });
        
        expvalue.forEach((element,i) => {
            if (element !== "" && i != 0) {
                let validate = data.querySelectorAll(".exp .validate");
                if (validate.length) {
                    validate.forEach(data => {
                        data.remove()
                    })
                }
                exp.forEach(data => {
                    if (data.value == "" && data.getAttribute("type")!=="hidden") {
                        a = false;
                        let span = document.createElement("span")
                        data.insertAdjacentElement("afterend", span)
                        span.classList.add("validate")
                        span.textContent = "*"
                        span.style.color = "red"
                        span.style.fontSize = "14px"
                        span.style.margin = "0 auto"
                    }

                })
            }
        });
    });

    dates.forEach(date => {
        if (date.value) {
            let date1 = new Date(date.value);
            if (isNaN(date1)) {
                a = false;
                let span = document.createElement("span")
                date.insertAdjacentElement("afterend", span)
                span.classList.add("validate")
                span.textContent = "*it be a date"
                span.style.color = "red"
                span.style.fontSize = "12px"
                span.style.margin = "0"
            }
        }
    })
    return a;
}

function languuageknowns() {
    let lang = document.querySelectorAll(".lang1")
    let validate = document.querySelectorAll(".validate");
    let tech = document.querySelectorAll(".tech1")
    let a = true;

    validate.forEach(data => {
        data.remove()
    })

    //  check the details of language
    let langvalue = [];
    lang.forEach(data => {
        langvalue.push(data.checked);
    })

    //check whether one language is selected or not
    if (!langvalue.includes(true)) {
        a = false;
        let span = document.createElement("span");
        document.querySelector(".error").insertAdjacentElement("afterend", span)
        span.classList.add("validate")
        span.textContent = "*please select one language"
        span.style.color = "red"
        span.style.fontSize = "12px"
        span.style.margin = "0"
    }

    //check language and its option is selected or not
    lang.forEach((data, i) => {
        if (data.checked == true) {
            let check = document.querySelectorAll(".check")
            let checkinput = check[i].querySelectorAll("input")
            let checkval = []
            checkinput.forEach(data => {
                checkval.push(data.checked);
            })
            if (!checkval.includes(true)) {
                a = false;
                let span = document.createElement("span");
                check[i].insertAdjacentElement("afterend", span)
                span.classList.add("validate")
                span.textContent = "*please select one option"
                span.style.color = "red"
                span.style.fontSize = "12px"
                span.style.margin = "0 5px"
            }
        }

        if (data.checked == false) {
            let check = document.querySelectorAll(".check")
            let checkinput = check[i].querySelectorAll("input")
            let checkval = []
            checkinput.forEach(data => {
                checkval.push(data.checked);
            })
            if (checkval.includes(true)) {
                a = false;
                let span = document.createElement("span");
                check[i].insertAdjacentElement("afterend", span)
                span.classList.add("validate")
                span.textContent = "*please select one lang"
                span.style.color = "red"
                span.style.fontSize = "12px"
                span.style.margin = "0 5px"
            }
        }

    })

    let techval = []
    tech.forEach(element => {
        techval.push(element.checked)
    });

    //check technology and its level is selected or not
    tech.forEach((data, i) => {
        if (data.checked == true) {
            let techs = document.querySelectorAll(".techvalue")
            let techinput = techs[i].querySelectorAll("input")
            let techsval = []
            techinput.forEach(data => {
                techsval.push(data.checked);
            })

            if (!techsval.includes(true)) {
                a = false;
                let span = document.createElement("span");
                techs[i].insertAdjacentElement("afterend", span)
                span.classList.add("validate")
                span.textContent = "*please select one option"
                span.style.color = "red"
                span.style.fontSize = "12px"
                span.style.margin = "0 5px"
            }
        }

        if (data.checked == false) {

            let techs = document.querySelectorAll(".techvalue")
            let techinput = techs[i].querySelectorAll("input")
            let techsval = []
            techinput.forEach(data => {
                techsval.push(data.checked);
            })

            if (techsval.includes(true)) {
                a = false;
                let span = document.createElement("span");
                techs[i].insertAdjacentElement("afterend", span)
                span.classList.add("validate")
                span.textContent = "*please select  technology"
                span.style.color = "red"
                span.style.fontSize = "12px"
                span.style.margin = "0 5px"
            }
        }
    })
    return a;
}

function reference() {
    let ref = document.querySelectorAll(".ref")
    let refnumber = document.querySelectorAll(".refnumber")
    let validate = document.querySelectorAll(".validate");
    let a = true;
    validate.forEach(data => {
        data.remove()
    })

    ref.forEach(data => {
        let ref = data.querySelectorAll(".ref input")
        let refvalue = [];
        ref.forEach(element => {
            refvalue.push(element.value)
        });

        refvalue.forEach((element,i) => {
           
            if (element !== "" && i != 0) {
                let validate = data.querySelectorAll(".ref .validate");
                if (validate.length) {
                    validate.forEach(data => {
                        data.remove()
                    })
                }

                ref.forEach(data => {
                    if (data.value == "" && data.getAttribute("type")!=="hidden") {
                        a = false;
                        let span = document.createElement("span")
                        data.insertAdjacentElement("afterend", span)
                        span.classList.add("validate")
                        span.textContent = "*"
                        span.style.color = "red"
                        span.style.fontSize = "14px"
                        span.style.margin = "0 5px"
                    }

                })
            }
        });
    });


    refnumber.forEach(ref => {
        if ((ref.name == "contactnum1" || ref.name == "contactnum2") && isNaN(ref.value)) {
            a = false;
            let span = document.createElement("span")
            ref.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*it must be number"
            span.style.color = "red"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"
        }
    })

    return a;
}

function preference() {
    let require = document.querySelectorAll(".required");
    let validate = document.querySelectorAll(".validate");
    let a = true;
    validate.forEach(data => {
        data.remove()
    })

    require.forEach((data) => {

        if ((data.value.trim() === "")) {
            a = false
            let span = document.createElement("span")
            data.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*Required"
            span.style.color = "red"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"
           
        }

        //check current ctc is number or not
        if (data.name == "currentctc" && data.value.trim() != "" && isNaN(data.value)) {
            a = false;
            let span = document.createElement("span")
            data.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = `*Current CTC must be of Number`
            span.style.color = "red"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"
        }

        //check expected ctc is number or not
        if (data.name == "expectedctc" && isNaN(data.value)) {
            a = false;
            let span = document.createElement("span")
            data.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = `*Expected CTC must be of Number`
            span.style.color = "red"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"
        }
    })
    return a;
}

//paginations and submit
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let form = document.querySelector("form")
let message = document.querySelector(".messege")

let array = [basicdetails, educationdetails, workexperience, languuageknowns, reference, preference]
let i = 0;

next.addEventListener("click", async function (e) {
    e.preventDefault()
    // for submit form
    if (next.classList.contains("submit")) {
        if (array[i]()) {
            let data = new URLSearchParams();
            for (let pair of new FormData(form)) {
                data.append(pair[0], pair[1]);
            }
            let url=window.location.origin;
            console.log(window.location.pathname);
            
            if (window.location.pathname !== "/form") {
                url+="/update"
                console.log(url);            
            }else{
                url+="/form"
                console.log(url);
            }

            let d = await fetch(url, {
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })

            let datas = await d.json()

            if (datas.success === true) {
                message.innerHTML = datas.message;
                message.style.color = 'green'
                form.reset();
                form.children[i].style.display = "none";
                i = 0;
            } else {
                message.innerHTML = datas.message;
                message.style.color = 'red';
                form.children[i].style.display = "none"
                i = 0;
            }
        }

    }

    //for next page
    if (i < form.children.length - 2) {
        //after form submit 
        if (next.classList.contains("submit")) {
            i = 0;
            next.value = "next"
            next.classList.remove("submit");
            form.children[i].style.display = "flex";
            prev.style.visibility = "hidden";
        }
        //before form submit
        else {
            //for form validations
            if (array[i]()) {
                prev.style.visibility = "visible";
                message.innerHTML = "";
                form.children[i].style.display = "none";
                i = i + 1;
                form.children[i].style.display = "flex";
            }
        }
    }

    // when it second last page
    if (i == form.children.length - 2) {
        next.value = "Submit"
        next.classList.add("submit")
    }

})

prev.addEventListener("click", function (e) {
    e.preventDefault()
  
  //when user not at first page
    if (i > 0) {
        next.value = "next";
        next.classList.remove("submit")
        form.children[i].style.display = "none";
        i = i - 1;
        form.children[i].style.display = "flex";
    }

  //when user not at first page
    if (i == 0) {
        prev.style.visibility = "hidden";
    }

})