async function update() {
    let url = window.location.pathname

    if (url!="/form") {
        url=url.split("/").pop()
        let urlmain = window.location.origin 
        urlmain += `/update/${url}`
        let data = await fetch(urlmain, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    let d = await data.json()
    getdata(d)
    }
}

function getdata(d) {
    
    document.querySelector("form").setAttribute("action","/update")

    // Basic details
    document.getElementById("candid").value = d.basicdetail.candid;
    document.getElementById("fname").value = d.basicdetail.fname;
    document.getElementById("lname").value = d.basicdetail.lname;
    document.getElementById("designation").value = d.basicdetail.designation;
    document.getElementById("email").value = d.basicdetail.email;
    document.getElementById("dob").value = d.basicdetail.dob;
    document.getElementById("phone").value = d.basicdetail.phone;
    document.getElementById("address").value = d.basicdetail.address;
    document.getElementById("city").value = d.basicdetail.city;
    document.getElementById("zipcode").value = d.basicdetail.zipcode;
    document.getElementById("state").value = d.basicdetail.state
    document.getElementById("relnstatus").value = d.basicdetail.reln_status

    if (d.basicdetail.gender == "Male") {
        document.getElementById("male").setAttribute("checked", true)
    }

    if (d.basicdetail.gender == "Female") {
        document.getElementById("female").setAttribute("checked", true)
    }

    if (d.basicdetail.gender == "Other") {
        document.getElementById("other").setAttribute("checked", true)
    }

    //education details

    document.getElementById("sscnameofboard").value = d.educationdetial[0].coursename_nameofboard;
    document.getElementById("sscpassingyear").value = d.educationdetial[0].passingyear;
    document.getElementById("sscpercentage").value = d.educationdetial[0].percentage;

    document.getElementById("hscnameofboard").value = d.educationdetial[1].coursename_nameofboard;
    document.getElementById("hscpassingyear").value = d.educationdetial[1].passingyear;
    document.getElementById("hscpercentage").value = d.educationdetial[1].percentage;

    if (d.educationdetial[2]) {
        document.getElementById("bachelorcourse").value = d.educationdetial[2].coursename_nameofboard;
        document.getElementById("bachelorpassingyear").value = d.educationdetial[2].passingyear;
        document.getElementById("bachelorpercentage").value = d.educationdetial[2].percentage;
    }

    if (d.educationdetial[3]) {
        document.getElementById("mastercourse").value = d.educationdetial[3].coursename_nameofboard;
        document.getElementById("masterpassingyear").value = d.educationdetial[3].passingyear;
        document.getElementById("masterpercentage").value = d.educationdetial[3].percentage;
    }

    //work experience
    if (d.workexperience.length > 0) {
        let exp = document.querySelectorAll(".exp")
        exp.forEach(element => {
            element.innerHTML=""
        });
    }

    d.workexperience.forEach(data => {
        let company = document.createElement("div")
        company.classList.add("exp")
        
        company.innerHTML = ` <input type="hidden" name="workid[]" value=${data.wid}>
        <label for="">Company Name:</label>
        <input type="text" name="companyname[]"  placeholder="eSparkbiz" value=${data.companyname}>
        <label for="">Designation:</label>
        <input type="text" name="designation[]"  placeholder="SDL" value=${data.designation}>
        <label for="from3">From:</label>
        <input type="text" name="from[]"  class="dates" placeholder="yyyy-mm-dd" value=${data.fromdate}>
        <label for="">To :</label>
        <input type="text" name="to[]"  class="dates" placeholder="yyyy-mm-dd"value=${data.todate}>`
        works.appendChild(company)
    });

    //language knowns
    let hindi = document.getElementById("hindi")
    let english = document.getElementById("english")
    let gujrati = document.getElementById("gujrati")

    d.languageknown.forEach((data) => {
        if (data.language == "hindi") {
            hindi.setAttribute("checked", true)
            let hindiop = document.getElementsByName("langcheck1[]")

            if (data.canread === 1) {
                hindiop[0].setAttribute("checked", true)
            }
            if (data.canwrite === 1) {
                hindiop[1].setAttribute("checked", true)
            }
            if (data.canspeak === 1) {
                hindiop[2].setAttribute("checked", true)
            }
        }

        else if (data.language == "gujrati") {
            gujrati.setAttribute("checked", true)
            let guj = document.getElementsByName("langcheck2[]")

            if (data.canread) {
                guj[0].setAttribute("checked", true)
            }
            if (data.canwrite) {
                guj[1].setAttribute("checked", true)
            }
            if (data.canspeak) {
                guj[2].setAttribute("checked", true)
            }
        }


        else if (data.language == "english") {
            english.setAttribute("checked", true)
            let eng = document.getElementsByName("langcheck3[]")

            if (data.canread === 1) {
                eng[0].setAttribute("checked", true)
            }
            if (data.canwrite === 1) {
                eng[1].setAttribute("checked", true)
            }
            if (data.canspeak === 1) {
                eng[2].setAttribute("checked", true)
            }
        }

    })


    //technology knowns
    let php = document.getElementById("php");
    let mysql = document.getElementById("mysql")
    let oracle = document.getElementById("oracle")
    let laravel = document.getElementById("laravel")

    d.technologyknown.forEach((data) => {
        if (data.techname == "php") {
            php.setAttribute("checked", true)
            let tech = document.querySelectorAll('input[name="phptech"]')

            if (data.level == "Beginner") {
                tech[0].setAttribute("checked", true)
            } else if (data.level == "Midetor") {
                tech[1].setAttribute("checked", true)
            } else if (data.level == "Expert") {
                tech[2].setAttribute("checked", true)
            }
        }
        else if (data.techname == "mysql") {
            mysql.setAttribute("checked", true)
            let tech = document.querySelectorAll('input[name="mysqltech"]')

            if (data.level == "Beginner") {
                tech[0].setAttribute("checked", true)
            } else if (data.level == "Midetor") {
                tech[1].setAttribute("checked", true)
            } else if (data.level == "Expert") {
                tech[2].setAttribute("checked", true)
            }
        }
        else if (data.techname == "laravel") {
            laravel.setAttribute("checked", true)
            let tech = document.querySelectorAll('input[name="laraveltech"]')

            if (data.level == "Beginner") {
                tech[0].setAttribute("checked", true)
            } else if (data.level == "Midetor") {
                tech[1].setAttribute("checked", true)
            } else if (data.level == "Expert") {
                tech[2].setAttribute("checked", true)
            }
        }
        else if (data.techname == "oracle") {
            oracle.setAttribute("checked", true)
            let tech = document.querySelectorAll('input[name="oracletech"]')

            if (data.level == "Beginner") {
                tech[0].setAttribute("checked", true)
            } else if (data.level == "Midetor") {
                tech[1].setAttribute("checked", true)
            } else if (data.level == "Expert") {
                tech[2].setAttribute("checked", true)
            }
        }
    });

    //reference
    if (d.reference.length > 0) {
        let ref = document.querySelectorAll(".ref")
        ref.forEach(refs => {
            refs.remove()
        });
    }
    
    d.reference.forEach(data => {
        let reference = document.createElement("div")
        reference.classList.add("ref")
    
        reference.innerHTML = `<input type="hidden" name="refid[]" value=${data.refid}>
        <label>Name:
        <input type="text" name="name[]"   placeholder="Axayrajsinh"  value=${data.person_name}></label>
        <label for="contactnum">Contact Number:
        <input type="text" name="contactnum[]" class="refnumber" placeholder="9876543210" value=${data.contactnum}></label>
        <label for="relation">Relation:
        <input type="text" name="relation[]"  placeholder="Brother" value=${data.relation}></label>`
    
        refs.appendChild(reference)
    });


    //preference
    document.getElementById("prefloc").value = d.preference.preferedlocation;
    document.getElementById("noticeperiod").value = d.preference.noticeperiod;
    document.getElementById("department").value = d.preference.department;
    document.getElementById("expectedctc").value = d.preference.expacted_ctc;
    document.getElementById("currentctc").value = d.preference.current_ctc;

}


update()