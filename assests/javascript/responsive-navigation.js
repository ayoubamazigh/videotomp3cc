var a = 0;
function nav_colaps(){
    if(a == 0){
        document.getElementById('links-collaps').style.display = 'block'; 
        a = 1;
    }else{
        document.getElementById('links-collaps').style.display = 'none';
        a = 0;
    }
}