var bmName = document.getElementById('siteName');
var webUrl = document.getElementById('siteUrl');
var container = [];
if (localStorage.getItem('websites') != null) {
    container = JSON.parse(localStorage.getItem('websites'))
}
displayWebsite()

function addWebsite() {
    var webObj = {
        name: bmName.value,
        url: webUrl.value,
    }
    container.push(webObj);
    localStorage.setItem('websites', JSON.stringify(container))
    displayWebsite()
    refresh()
}

function displayWebsite() {
    var x = ``
    for (i = 0; i < container.length; i++) {
        x += `<tr>
        <td>${container[i].name}</td>
        <td><a href="${container[i].url}" target="_blank"><button class="btn btn-primary mx-2">Visit</button></a><button onclick="deleteWeb(${i})" class="btn btn-danger">Delete</button></td>
    </tr>`
    }
    document.getElementById('tbody').innerHTML = x
}

function refresh() {
    bmName.value = ""
    webUrl.value = ""
}

function deleteWeb(i) {
    container.splice(i, 1)
    localStorage.setItem('websites', JSON.stringify(container))
    displayWebsite()
}

function searchWeb(y) {
    var box = ``
    for (i = 0; i < container.length; i++) {
        if (container[i].name.toLowerCase().includes(y.toLowerCase())) {
            box += `<tr>
            <td>${container[i].name}</td>
            <td><a href="${container[i].url}" target="_blank"><button class="btn btn-primary mx-2">Visit</button></a><button onclick="deleteWeb(${i})" class="btn btn-danger">Delete</button></td>
        </tr>`
        }
    }
    document.getElementById('tbody').innerHTML = box
}