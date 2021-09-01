var flag = false;
window.addEventListener('load', function () {
    console.log("check")
    var login = document.getElementById("login")
    var join = document.getElementById("join")
    var logout = document.getElementById("logout")
    var mypage = document.getElementById("mypage")
    var manager = document.getElementById("manager")
    var id;
    var passwd;
    logout.style.display = "none"
    mypage.style.display = "none"
    manager.style.display = "none"

    login.addEventListener('click', function () {
        id = prompt("아이디 입력하세요");
        if (id != "ssafy") {
            alert("존재하지 않는 아이디입니다.")
        } else {
            passwd = prompt("비밀번호 입력하세요");
            if (passwd != "1234") {
                alert("비밀번호가 옳지 않습니다 다시 확인해주세요.")
            } else {
                alert("로그인이 완료되었습니다.")
                flag = true;
                opener.location.flag = true;
                localStorage.setItem("passwd", passwd);
                console.log(flag)
                logout.style.display = ""
                mypage.style.display = ""
                manager.style.display = ""
                login.style.display = "none"
                join.style.display = "none"
            }
        }
    })

    console.log(flag)
    console.log(id)
    passwd = this.localStorage.getItem("passwd");
    console.log(passwd);
    if (flag) {

    }
});
