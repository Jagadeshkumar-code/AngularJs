$(document).ready(function() {
    console.log('###POST ready####')

  
    // SUBMIT FORM
      $("#customerForm").submit(function(event) {
      // Prevent the form from submitting via the browser.
      event.preventDefault();
      ajaxPost();
    });
      
      
      function ajaxPost(){
        
        // PREPARE FORM DATA
        var formData = {
          firstname : $("#firstname").val(),
          lastname :  $("#lastname").val()
        }

        console.log('####JSON.stringify(formData)####')
        console.log(JSON.stringify(formData))
        
        // DO POST
        $.ajax({
        //type : "POST",
        // type: 'POST',
        // crossDomain: true,
        // dataType: 'jsonp',
        // //method: 'POST',
        // contentType : "application/json",
        // url : "http://localhost:3000/api/customers/save",
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Content-Type':'application/json'
        // },
        url: 'http://localhost:3000/api/customers/save',            
        method: 'POST',
        type: 'json',
        data : formData,
        success : function(customer) {
          $("#postResultDiv").html("<p>" + 
            "Post Successfully! <br>" +
            "--->" + JSON.stringify(customer)+ "</p>"); 
        },
        error : function(e) {
          alert("Error!")
          console.log("ERROR: ", e);
        }
      });
        
        // Reset FormData after Posting
        resetData();
   
      }
      
      function resetData(){
        $("#firstname").val("");
        $("#lastname").val("");
      }
  })