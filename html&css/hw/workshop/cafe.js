
window.addEventListener('load', function () {
    console.log("check")
    var login = document.getElementById("login")
    var join = document.getElementById("join")
    var logout = document.getElementById("logout");
    var mypage = document.getElementById("mypage");
    var manager = document.getElementById("manager");
    var opencard = document.getElementById("store-card");
    var card = document.getElementsByClassName("center-left-store-card");
    var branch = document.getElementsByClassName('branch');
    var id;
    var passwd;
    var profileimg = document.getElementById("profileimg");
    var isLogin = false;
    var cardflag = false;
    isLogin = localStorage.getItem("isLogin");
    if (isLogin) {
        logout = document.getElementById("logout")
        mypage = document.getElementById("mypage")
        manager = document.getElementById("manager")
        logout.style.display = "block";
        mypage.style.display = "block";
        manager.style.display = "block";
        login.style.display = "none";
        join.style.display = "none";
        profileimg.setAttribute('src', './img/profile.png')


    }
    // "./img/profile.png"
    login.addEventListener('click', function () {
        id = prompt("아이디 입력하세요");
        if (id != "ssafy") {
            alert("존재하지 않는 아이디입니다.");
            return;
        } else {
            passwd = prompt("비밀번호 입력하세요");
            if (passwd != "1234") {
                alert("비밀번호가 옳지 않습니다 다시 확인해주세요.")
            } else {
                alert("로그인이 완료되었습니다.")
                isLogin = true;
                localStorage.setItem("isLogin", isLogin);
                this.location.reload();
            }
        }
    })
    opencard.addEventListener('click', function () {

        if (!cardflag) {
            for (var i = 0; i < branch.length; i++) {
                branch[i].style.display = "block";
                opencard.innerText = "전국매장접기"
                cardflag = true;

            }
        } else {
            for (var i = 0; i < branch.length; i++) {
                branch[i].style.display = "none";
                opencard.innerText = "전국매장펼치기"
                cardflag = false;

            }
        }
    })

    manager.addEventListener('click', function () {
        var _width = '500';
        var _height = '500';
        var _left = Math.ceil((window.screen.width - _width) / 2);
        var _top = Math.ceil((window.screen.height - _height) / 2);

        window.open("./makepoll.html", "mp", 'width=' + _width + ', height=' + _height + ', left=' + _left + ', top=' + _top);
    })
    for (var i = 0; i < card.length; i++) {
        card[i].addEventListener('click', function () {

            var now = this.getElementsByClassName("branch");
            now[0].getat
            if (now[0].style.display === "block") {
                now[0].style.display = "none";
            } else {
                now[0].style.display = "block";
            };
        });
    }

});
