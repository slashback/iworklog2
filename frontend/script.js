function foo() {

let url = '';
let username = '';
let password = '';

let headers = new Headers();

headers.append('Authorization', 'Basic' + btoa(username + ":" + password));

fetch(url, {method:'GET',
        headers: headers,
       })
.then(response => response.json())
.then(json => console.log(json));
//.done();

function parseJSON(response) {
return response.json()
}
}

document.addEventListener('DOMContentLoaded', ondocload, false);
function ondocload() {

    document.getElementById("hours").focus();
    document.getElementById("hours").select();
}

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('input[name="hours"]').oninput=changeEventHandler;
},false);

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('input[name="minutes"]').oninput=changeMinutesEventHandler;
},false);

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('input[name="issue"]').oninput=changeIssueEventHandler;
},false);

/*
1 wait
2 wait
3

7 next
8 
9 
10
15
20

*/

function changeIssueEventHandler(event) {
    const val = event.target.value
    if (val.length === 5) {
        document.getElementById("hours").focus();
        document.getElementById("hours").select();
    }

}

function changeEventHandler(event) {
    const val = parseInt(event.target.value, 10)
    console.log(val)
    if (val < 3 || isNaN(val)) {
        // wait
    } else {
        document.getElementById("minutes").focus();
        document.getElementById("minutes").select();
    }

}

function changeMinutesEventHandler(event) {
    const value = event.target.value
    const val = parseInt(event.target.value, 10)
    if (value.length == 2 && val >= 0 && val < 60) {
        document.getElementById("timelog").focus();
        document.getElementById("timelog").select();
    }
}
