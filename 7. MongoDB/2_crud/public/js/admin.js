$(function(){

      //List users
      $.get('/users', function(users) {

          for(i in users) {

              $('#user-list').append('<li>' + users[i].basicInfo.firstName + '</li>');
          }

          $('#user-list').on('click', "li", function(e) {
              var firstName = $(e.target).text();
              populateUserDetils(firstName);
          });

      });

      function populateUserDetils(firstName) {
          $.get('/user/' + firstName, function(data) {

              $("#firstName").val(data.basicInfo.firstName);
              $("#lastName").val(data.basicInfo.lastName);
              $("#title").val(data.basicInfo.title);
              $("a").attr("href", "index.html#" + data.basicInfo.firstName);

          });
      }

      //Handle form submission
      $("form").submit(function(e) {

          $.ajax({
                 type: "POST",
                 url: "/user",
                 data: $("form").serialize(), // serializes the form's elements.
                 success: function(data)
                 {
                     console.log('Success! CV Saved', data);
                 },
                 error: function(error) {
                   console.error('Error in submitting form: ', error);
                 }
          });

          e.preventDefault(); // avoid to execute the actual submit of the form.

      });

});
