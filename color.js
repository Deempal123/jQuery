const startTime = 3;
            var time = 15;
            let dt = new Date();
            let date = String(dt.getDate()).padStart(2, '0');
            let month = String(dt.getMonth()+1).padStart(2, '0');
            let year = dt.getFullYear();
            var count= 301;
            var randomNumber;
            var randomColor;
            var selectedColor;
            var selectedNumber;
            var selectedAmount;
            var balance = 10000;
            var price = 0;
            var popup = document.getElementById("popup");
            
            localStorage.setItem("Count",count)
            rColor();
            rNumber();
            addRow();

                       
            document.getElementById("balance").innerHTML = "Available Balance : ₹ "+balance;
            const countdown = document.getElementById('countdown');
            var x = setInterval(updateCountdown, 1000);

            function updateCountdown() {
                const minutes = Math.floor(time / 60);
                let seconds = time % 60;
                document.getElementById("countdown").innerHTML = minutes.toString().padStart(2,'0') + "m : " + seconds.toString().padStart(2,'0') + "s ";
                time = time - 1;
                if (time <= 0) {

                    // clearInterval(x);
                    
                    time = 15;
                    count++;
                    //for (let i = 0; i < 1; i++)
                    rColor();
                    rNumber();
                    addRow();
                    
                    const buttons = document.querySelectorAll('button');

                    // loop through each button and remove its color
                    buttons.forEach((button) => {
                        button.style.backgroundColor = '';
                    });


                    // document.getElementById("countdown").innerHTML = "Time's up!";
                }
                if (seconds == 10 && minutes == 0) {
                    for (let i = 0; i < 13; i++)
                    
                        document.getElementsByTagName("button")[i].style.backgroundColor = "grey";
                


                }
                document.getElementById("period").innerHTML = year + "" + month + "" +date +""+count;
                // document.getElementById("period1").innerHTML = year + "" + month + "" +date +""+count;
            }

            

            function addRow()
            {
                var table = document.getElementById("table");
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = year + "" + month + "" +date +""+count;
                cell2.innerHTML = price+""+randomNumber;
                cell3.innerHTML = randomNumber;
                cell3.style.color = randomColor;
                cell4.innerHTML = `<span class="color-circle" style="background-color:${randomColor}"></span>`;
            }
            
            function gameNumber()
            {
                count++;
                document.getElementById("period").innerHTML = date + "" + month + "" + year+""+count;
                
            }
          
            const clickedButton = document.querySelectorAll(".t");

                clickedButton.forEach(function(button) {
                button.addEventListener("click", function() {
                document.body.appendChild(popup);
                selectedColor = button.value;
                // var popup = document.getElementById("popup");
                popup.style.display = "flex";
                console.log("Selected Color : "+selectedColor);
                if(selectedColor == randomColor)
                    {
                        price += selectedAmount*2;
                        balance += price;
                    }
                    
                    // document.getElementById("balance").innerHTML = "Available Balance : ₹ "+balance;
                });
            });

            const numberButton = document.querySelectorAll(".n");

                numberButton.forEach(function(button) {
                button.addEventListener("click", function() {
                selectedNumber = button.value;
                console.log("Selected Number : "+selectedNumber);
                if(selectedNumber == randomNumber)
                    {
                        price += selectedAmount*10;
                        balance += price;
                    }
                });
            });

            const amountButton = document.querySelectorAll(".amount");

                amountButton.forEach(function(button) {
                button.addEventListener("click", function() {
                // console.log("hi");
                selectedAmount = button.textContent;
                balance -=selectedAmount;
                document.getElementById("balance").innerHTML = "Available Balance : ₹ "+balance;
                console.log("Selected Amount : "+selectedAmount);
                popup.remove();
                });
            });

            const gameButton = document.querySelectorAll(".m");

                gameButton.forEach(function(button) {
                button.addEventListener("click", function() {
                // console.log("hi");
                game = button.textContent;
                document.getElementById("s").innerHTML = ""+game+" Result";              
                                
                });
            });


            function rColor(){

                const colors = ["yellowgreen", "darkmagenta", "tomato"];

                function getRandomColor() {
                    // generate a random index for the colors array
                    const index = Math.floor(Math.random() * colors.length);
                    // return the color at the randomly generated index
                    return colors[index];
                }

                // example usage
                //$("body").css("background-color", getRandomColor());
                randomColor = getRandomColor();
                console.log(randomColor);
			}             
				
                
			

            function rNumber(){
                var min = 0;
                var max = 9;
                randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                console.log(randomNumber);
            }