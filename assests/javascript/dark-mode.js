if (window.localStorage.getItem('theme')){
    if(window.localStorage.getItem('theme') == 0){
        document.write("<link rel='stylesheet' href='assests/css/thems/light-mode.css'>")
    }else if(window.localStorage.getItem('theme') == 1){
        document.write("<link rel='stylesheet' href='assests/css/thems/dark-mode.css'>")
    }else{
        window.localStorage.setItem('theme', 1)
        location.reload()
    }
}else{
    window.localStorage.setItem('theme', 1)
    location.reload()
}

function darkmode(){

        if(window.localStorage.getItem('theme') == 1){
            window.localStorage.setItem('theme', 0)
            location.reload()
        }else if(window.localStorage.getItem('theme') == 0){
            window.localStorage.setItem('theme', 1)
            location.reload()
        }
}