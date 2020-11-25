para1 = document.getElementById("para1")
span1 = document.getElementById("span1")
span2 = document.getElementById("span2")
result = document.getElementById("result")

result.innerHTML = (parseInt(span1.innerHTML) + parseInt(span2.innerHTML))

para1.innerText = (parseInt(result.innerText) - 10) < 0 ? para1.innerHTML = "inferieur a 10" : para1.innerHTML = "superieur a 10"

para1.style.color = "cyan"
span1.style.backgroundColor = "red"