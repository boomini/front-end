window.onload = function () {
    document.getElementById("btn-add").addEventListener("click", function () {
        var listDiv = document.getElementById("poll-answer-list");

        var divEl = document.createElement("div"); //<div> </div>
        divEl.setAttribute("class", "poll-answer-item");
        var inputEl = document.createElement("input");
        inputEl.setAttribute("type", "text");
        inputEl.setAttribute("name", "answer");

        var btnEl = document.createElement("button");
        btnEl.setAttribute("type", "button");
        btnEl.setAttribute("class", "button");
        btnEl.appendChild(document.createTextNode("삭제"));


        btnEl.addEventListener("click", function () {
            var parent = this.parentNode;
            listDiv.removeChild(parent);
        });
        divEl.appendChild(inputEl);
        divEl.appendChild(btnEl);

        listDiv.appendChild(divEl);
    });

    document.getElementById("btn-make").addEventListener("click", function () {
        var question = document.querySelector("#question").value;
        if (!question) {
            alert("투표 내용을 입력해주세요");
            return;
        }
        var answers = document.getElementsByName("answer");
        for (var i = 0; i < answers.length; i++) {
            if (!answers[i].value) {
                alert("답변 항목 입력!!!");
                return;
            }
        }

        var answerArr = [];
        for (var i = 0; i < answers.length; i++) {
            answerArr.push(answers[i].value);
        }
        var sd = document.getElementById("sd").value;
        var ed = document.getElementById("ed").value;
        
    

        console.log(answerArr);
        localStorage.setItem("question", question);
        localStorage.setItem("answers", JSON.stringify(answerArr));
        localStorage.setItem("sd", JSON.stringify(sd));
        localStorage.setItem("ed", JSON.stringify(ed));

        alert("투표를 생성합니다!!");
        self.close();
        opener.location.reload();
    })
};
