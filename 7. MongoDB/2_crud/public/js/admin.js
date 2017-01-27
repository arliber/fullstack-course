$(function(){

      /*
        This section gets all the users from the server and lists them in client
      */
      $.get('/users', function(users) {

          for(i in users) {

              $('#user-list').append('<li>' + users[i].basicInfo.firstName + '</li>');
          }

          $('#user-list').on('click', "li", function(e) {
              var firstName = $(e.target).text();
              populateUserDetils(firstName);
          });

      });

      /*
        This function gets a firstName and goes to the server to get the user details.
        When the data arrives - it is placed in the form fields
      */
      function populateUserDetils(firstName) {
          $.get('/user/' + firstName, function(data) {

              $("#firstName").val(data.basicInfo.firstName);
              $("#lastName").val(data.basicInfo.lastName);
              $("#title").val(data.basicInfo.title);
              $("a").attr("href", "index.html#" + data.basicInfo.firstName);

          });
      }

      /*
        This section takes care of form submission - this code runs when user clicks the save button
      */
      $("form").submit(function(e) {

          $.ajax({ //Send a request to the server with the form content
                 type: "POST",
                 url: "/user",
                 data: $("form").serialize(), // serializes the form's data
                 success: function(data) //This code runs when the request was successful
                 {
                     console.log('Success! CV Saved', data);
                 },
                 error: function(error) { //This code runs when there is a problem with sending the request
                   console.error('Error in submitting form: ', error);
                 }
          });


          e.preventDefault(); // avoid to execute the actual submit of the form.

      });

});
