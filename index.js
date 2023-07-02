 
    //For coping password
    function copyPassword() {
        var passwordInput = document.getElementById('password-input');
        passwordInput.select();
          document.execCommand("copy");
        alert("Copied the password: " + passwordInput.value);
      }
      
      
      //For increasing or decreacing Number
      function updateDragbarCount() {
        var dragbarCount = document.getElementById('dragbar').value;
        document.getElementById('dragbar-count').textContent = dragbarCount;
      }
      
      
      
      //Filling colors in bars
      function updateBarColor() {
        var includeUpper = document.getElementById('include-upper').checked;
        var includeLower = document.getElementById('include-lower').checked;
        var includeNumbers = document.getElementById('include-numbers').checked;
        var includeSymbols = document.getElementById('include-symbols').checked;
      
        var dragbarCount = document.getElementById('dragbar').value;
        var bars = document.getElementsByClassName('bar');
        
        for (var i = 0; i < bars.length; i++) {
          bars[i].style.backgroundColor = '#ccc';
        }
        
          if (dragbarCount >= 4) {
              if (includeUpper || includeLower || includeNumbers || includeSymbols) {
                bars[0].style.backgroundColor = 'red';
              }
              if ( includeLower || includeNumbers || includeSymbols) {
                bars[1].style.backgroundColor = 'red';
              }
              if (includeNumbers || includeSymbols) {
                bars[2].style.backgroundColor = 'red';
              }
              if (includeSymbols) {
                bars[3].style.backgroundColor = 'red';
              }
          }
      }
      
      
      
      
          function generatePassword() {
          var includeUpper = document.getElementById('include-upper').checked;
          var includeLower = document.getElementById('include-lower').checked;
          var includeNumbers = document.getElementById('include-numbers').checked;
          var includeSymbols = document.getElementById('include-symbols').checked;
          var dragbarCount = document.getElementById('dragbar').value;
          
          if (dragbarCount < 1) {
            alert('Dragbar count should be at least 1 to generate password.');
            return;
          }
          
          if (includeUpper==false && includeLower==false && includeNumbers==false && includeSymbols==false) {
            alert('Please select at least one option.');
            return;
          }
          
        
          //Calling  generateRandomPassword() function 
          var password = generateRandomPassword(dragbarCount, includeUpper, includeLower, includeNumbers, includeSymbols);
          document.getElementById('password-input').value = password;
      }
      
      
      
      
      
      
      
      
      //Functions of  generateRandomPassword() .
      function generateRandomPassword(length, includeUpper, includeLower, includeNumbers, includeSymbols) {
        var charset = "";
        var password = "";
        
        if (includeUpper==true) {
          charset = charset + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        
        if (includeLower==true) {
          charset =charset +  'abcdefghijklmnopqrstuvwxyz';
        }
        
        if (includeNumbers==true) {
          charset = charset + '1234567890';
        }
        
        if (includeSymbols==true) {
          charset = charset +'!@#$%^&*_+-=|';
        }
        
        for (var i = 0; i < length; i++) {
          var randomIndex = Math.floor(Math.random() * charset.length);
          password = password + charset[randomIndex];
        }
        
        return password;
      }
      