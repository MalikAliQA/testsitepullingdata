function getallRec(){
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(
        function(response) {
            //if the status code is not 200
          if (response.status !== 200) {
              //print to console plus status code
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          //examine text in respone 
          response.json().then(function(data) {
              console.log(data);
          for (let i=0; i<data.length; i++){
              console.log("id", data[i].id);
              console.log("title", data[i].title);
              console.log("body", data[i].body);
              console.log("userID", data[i].userId);
    
              let para = document.createElement("P");
              para.className ="data alert alert-danger col-md-8",
              para.innerText = `
              ${(document.querySelector("#resp").innerHTML = data[i].id)}
              ${(document.querySelector("#resp").innerHTML = data[i].title)}
              ${(document.querySelector("#resp").innerHTML = data[i].body)}
              ${(document.querySelector("#resp").innerHTML = data[i].userId)}
              `
              let myDiv = document.getElementById("myDiv");
              myDiv.appendChild(para);
            };
     
        
        
          // Examine the text in the response
    /*       response.json().then(function(data) {
            console.log(data); */
          });
        }
        )
      //only gonna execute if there is a fetch error
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
    }