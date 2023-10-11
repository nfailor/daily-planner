
$(function () {
    // the below function is activated upon click of the save button, which then saves the user input and corresponding hour block to the local storage
    $('.saveBtn').on( "click", function(event) {
        event.preventDefault();

        var userInput = $(this).siblings(".description").val();

        var hourId = $(this).parent().attr('id');

        localStorage.setItem(hourId, userInput);
        
    });
    
    // the below lines are placed to properly display the current date and time. 
    var today = dayjs();
    $('#currentDay').text(today.format('MMM D, YYYY; HH:mm:ss'));

    var currentTime = today.format('HH');

    // the below function is essentially determining the hour blocks' visual display based on the current time based on the 24h clock. If the current time is greater than the hour block, that hour block would be in the past, for example. 
    $('.time-block').each(function() {

        var timeBlock = $(this).attr('id').split("-")[1];

        if (currentTime > timeBlock) {
            $(this).addClass("past");
        } else if (currentTime < timeBlock) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
      });

    // the below function is what will allow for persisting data to remain on each hour block. for example, if user places "lunch" on the 12 hour block and saves it, that data will appear even after the webpage is reloaded
    function loadLocalStorageData() {
        $('.time-block').each(function() {
            var hourId = $(this).attr('id');
            var userInput = localStorage.getItem(hourId);
    
            if (userInput) {
                $(this).find(".description").val(userInput);
            }
        })};
    
    // the below function is what activates the overall javascript
    $(document).ready(function() {
        loadLocalStorageData();
    })
    
  });
