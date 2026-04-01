function RunTime() {
            let clock = document.getElementById("clock");
            let dateElement = document.getElementById("date");
            
            let time = new Date();

            // Time
            let h = time.getHours();
            let m = time.getMinutes();
            let s = time.getSeconds();
            
            // Format minutes and seconds
            m = m.toString().padStart(2, "0");
            s = s.toString().padStart(2, "0");

            // AM/PM
            let ampm = h >= 12 ? "PM" : "AM";

            // 24 hour to 12 hour format
            h = h % 12;
            h = h ? h : 12; // 0 ko 12 karna
            h = h.toString().padStart(2, "0");

            // Update clock with AM/PM in separate span
            clock.innerHTML = `${h}:${m}:${s} <span class="ampm">${ampm}</span>`;

            // Date (optional)
            let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            
            let day = days[time.getDay()];
            let month = months[time.getMonth()];
            let date = time.getDate();
            
            dateElement.textContent = `${day}, ${month} ${date}`;
        }

        // Run immediately and then every second
        RunTime();
        setInterval(RunTime, 1000);