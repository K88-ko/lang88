var newEvent;
var editEvent;

$(document).ready(function() {
    
   var calendar = $('#calendar').fullCalendar({
       
       eventRender: function(event, element, view) {
         
         var startTimeEventInfo = moment(event.start).format('HH:mm');
         var endTimeEventInfo = moment(event.end).format('HH:mm');
         var displayEventDate;
         
         if(event.avatar.length > 1){
           
           element.find(".fc-content").css('padding-left','55px');
           element.find(".fc-content").after($("<div class=\"fc-avatar-image\"></div>").html('<img src=\''+event.avatar2+'\' />'));
           
         }
         
         if(event.allDay == false){
           displayEventDate = startTimeEventInfo + " - " + endTimeEventInfo;
         }else{
           displayEventDate = "All Day";
         }
         
          element.popover({
            title:    '<div class="popoverTitleCalendar" style="background-color:'+ event.backgroundColor +'; color:'+ event.textColor +'">'+ event.title +'</div>',
            content:  '<div class="popoverInfoCalendar">' +
                      '<img src="' + event.avatar + '" width="245px" />' +
                      '</div>',
            delay: { 
               show: "100", 
               hide: "10"
            },
            trigger: 'click',
            placement: 'top',
            html: true,
            container: 'body'
          });
         
           var show_username, show_type = true, show_calendar = true;

           var username = $('input:checkbox.filter:checked').map(function() {
               return $(this).val();
           }).get();
           var types = $('#type_filter').val();
           var calendars = $('#calendar_filter').val();

           show_username = username.indexOf(event.username) >= 0;

           if (types && types.length > 0) {
               if (types[0] == "all") {
                   show_type = true;
               } else {
                   show_type = types.indexOf(event.type) >= 0;
               }
           }

           if (calendars && calendars.length > 0) {
               if (calendars[0] == "all") {
                   show_calendar = true;
               } else {
                   show_calendar = calendars.indexOf(event.calendar) >= 0;
               }
           }

           return show_username && show_type && show_calendar;
          
       },
       customButtons: {
          printButton: {
            icon: 'print',
            click: function() {
              window.print();
            }
          }
        },
       header: {
           left: 'today, prevYear, nextYear, printButton',
           center: 'prev, title, next',
           right: 'month,agendaWeek,agendaDay,listWeek'
       },
       views: {
            month: {
              columnFormat:'dddd'
            },
            agendaWeek:{
              columnFormat:'ddd D/M',
              eventLimit: false
            },
            agendaDay:{
              columnFormat:'dddd',
              eventLimit: false
            },
            listWeek:{
              columnFormat:''
            }
        },
     
       loading: function(bool) {
           //alert('events are being rendered');
       },
       eventAfterAllRender: function(view) {
           if(view.name == "month"){
              $(".fc-content").css('height','auto');
            }
       },
       eventLimitClick: function(cellInfo, event) {
           

       },
       eventResize: function(event, delta, revertFunc, jsEvent, ui, view) {
            $('.popover.fade.top').remove();
       },
       eventDragStart: function(event, jsEvent, ui, view) {
            var draggedEventIsAllDay;
            draggedEventIsAllDay = event.allDay;
       },
       eventDrop: function(event, delta, revertFunc, jsEvent, ui, view) {
            $('.popover.fade.top').remove();
       },
       unselect: function(jsEvent, view) {
          //$(".dropNewEvent").hide();
       },
       dayClick: function(startDate, jsEvent, view) {
         
         //var today = moment();
         //var startDate;
         
         //if(view.name == "month"){
           
         //  startDate.set({ hours: today.hours(), minute: today.minutes() });
         //  alert('Clicked on: ' + startDate.format());
           
         //}
         
       },
       select: function(startDate, endDate, jsEvent, view) {
         
         var today = moment();
         var startDate;
         var endDate;
         
         if(view.name == "month"){
            startDate.set({ hours: today.hours(), minute: today.minutes() });
            startDate = moment(startDate).format('ddd DD MMM YYYY HH:mm');
            endDate = moment(endDate).subtract('days', 1);
            endDate.set({ hours: today.hours() + 1, minute: today.minutes() });
            endDate = moment(endDate).format('ddd DD MMM YYYY HH:mm');           
         }else{
            startDate = moment(startDate).format('ddd DD MMM YYYY HH:mm');
            endDate = moment(endDate).format('ddd DD MMM YYYY HH:mm');
         }
         
         var $contextMenu = $("#contextMenu");
         
         var HTMLContent = '<ul class="dropdown-menu dropNewEvent" role="menu" aria-labelledby="dropdownMenu" style="display:block;position:static;margin-bottom:5px;">' +
      '<li onclick=\'newEvent("'+ startDate +'","'+ endDate +'","'+ "Appointment" +'")\'> <a tabindex="-1" href="#">Add Appointment</a></li>' +
      '<li onclick=\'newEvent("'+ startDate +'","'+ endDate +'","'+ "Check-in" +'")\'> <a tabindex="-1" href="#">Add Check-In</a></li>' +
      '<li onclick=\'newEvent("'+ startDate +'","'+ endDate +'","'+ "Checkout" +'")\'> <a tabindex="-1" href="#">Add Checkout</a></li>' +
      '<li onclick=\'newEvent("'+ startDate +'","'+ endDate +'","'+ "Inventory" +'")\'> <a tabindex="-1" href="#">Add Inventory</a></li>' +
      '<li onclick=\'newEvent("'+ startDate +'","'+ endDate +'","'+ "Valuation" +'")\'> <a tabindex="-1" href="#">Add Valuation</a></li>' +
      '<li onclick=\'newEvent("'+ startDate +'","'+ endDate +'","'+ "Viewing" +'")\'> <a tabindex="-1" href="#">Add Viewing</a></li>' +
      '<li class="divider"></li>' +
      '<li><a tabindex="-1" href="#">Close</a></li>' +
    '</ul>';
          
          $(".fc-body").unbind('click');
          $(".fc-body").on('click', 'td', function (e) {
              
              document.getElementById('contextMenu').innerHTML = (HTMLContent);

              $contextMenu.addClass("contextOpened");
              $contextMenu.css({
                display: "block",
                left: e.pageX,
                top: e.pageY
              });
              return false;
            
            });

            $contextMenu.on("click", "a", function(e) {
              e.preventDefault();
              $contextMenu.removeClass("contextOpened");
              $contextMenu.hide();
            });
         
            $('body').on('click', function() {
               $contextMenu.hide();
               $contextMenu.removeClass("contextOpened");
           });

         //newEvent(startDate, endDate);
         
        },
        eventClick: function(event, jsEvent, view) {
          
          editEvent(event);
          
        },
       locale: 'en-GB',
       timezone: "local",
       nextDayThreshold: "09:00:00",
       allDaySlot: true,
       displayEventTime: true,
       displayEventEnd: true,
       firstDay: 3,
       weekNumbers: false,
       selectable: false,
       weekNumberCalculation: "ISO",
       eventLimit: false,
       eventLimitClick: 'week', //popover
       navLinks: true,
       timeFormat: 'HH:mm',
       defaultTimedEventDuration: '01:00:00',
       editable: false,
       minTime: '23:00:00',
       maxTime: '24:00:00',
       slotLabelFormat: 'HH:mm', 
       weekends: true,
       nowIndicator: true,
       dayPopoverFormat: 'dddd DD/MM', 
       longPressDelay : 0,
       eventLongPressDelay : 0,
       selectLongPressDelay : 0,
       monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	   monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	   dayNames: ['일', '월', '화', '수', '목', '금', '토'],
       dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
       events: [{
           _id: 1,
           title: '벛꽃필 무렵',
           avatar: 'img/banner/Picture_Notice_0906.png',
		   avatar2: 'img/Icon_Events.png',
           description: '따스한 봄볕 아래 활짝 피어난 벚꽃, 흩날리는 꽃잎 속으로 보이는 새로운 영웅... ',
           start: '2020-01-21',
           end: '2020-02-12',
           username: 'Event',
           backgroundColor: "#FFFC80",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 2,
           title: '빛의 메아리(사쿠라, 스미레 스킨)',
           avatar: 'img/banner/Picture_Notice_0904.png',
		   avatar2: 'img/Icon_SkinBig.png',
           description: '신구지 사쿠라, 칸자키 스미레 한정 스킨 「사쿠라의 무장」, 「스미레의 춤」절찬 출시!',
           start: '2020-01-21',
           end: '2020-02-19',
           username: '빛의 메아리',
           backgroundColor: "#C3ED60",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 3,
           title: '화격단 장비',
           avatar: 'img/banner/Picture_Notice_0903.png',
		   avatar2: 'img/Equip_Random_All.png',
           description: '영검 아라타카, 화격단 제복, 빨간 리본, 곰인형 출현 확률 UP!',
           start: '2020-02-05',
           end: '2020-02-19',
           username: '장비소환',
           backgroundColor: "#003399",
           textColor: "#ffffff",
           allDay: true
       }, {
           _id: 4,
           title: '베른하르트 + 엘윈 + 레온 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_0902.png',
		   avatar2: 'img/Word_3P.png',
           description: '베른하르트, 엘윈, 레온의 출현 확률 UP!</br> + 특별 혜택 + 시공의 정수',
           start: '2020-01-29',
           end: '2020-02-12',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 5,
           title: '전설의 문(운명의 문 도전 횟수 증가)',
           avatar: 'img/banner/Picture_Notice_HD01.png',
		   avatar2: 'img/Mood033.png',
           description: '「운명의 문」 매일 도전 횟수 두배(9회에서 18회로 변경), 단일 영웅의 도전 횟수는 변하지 않습니다.',
           start: '2020-02-05',
           end: '2020-02-12',
           username: '2배',
           backgroundColor: "#1756ff",
           textColor: "#ffffff",
           allDay: true
       }, {
           _id: 6,
           title: '젤다 + 쥬그라',
           avatar: 'img/banner/Picture_Notice_SP10.png',
		   avatar2: 'img/Word_2P.png',
           description: '젤다, 쥬그라의 출현 확률 UP!',
           start: '2020-02-12',
           end: '2020-02-26',
           username: '2인',
           backgroundColor: "#86B381",
           textColor: "#ffffff",
           allDay: true
       }, {
           _id: 7,
           title: '타로운세 - 리스틸',
           avatar: 'img/banner/Picture_Notice_0805.png',
		   avatar2: 'img/Card_Head_Aniki01_0.png',
           description: '영웅 리스틸 한정 스킨 백의 천사',
           start: '2020-02-12',
           end: '2020-02-19',
           username: '형귀',
           backgroundColor: "#FFEAEA",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 8,
           title: '칠음계의 주문',
           avatar: 'img/banner/Picture_Notice_1006.png',
		   avatar2: 'img/Icon_Events.png',
           start: '2020-02-19',
           end: '2020-03-18',
           username: 'Event',
           backgroundColor: "#FFFC80",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 9,
           title: '빛의 메아리(엘라스타, 클라렛 스킨)',
           avatar: 'img/banner/Picture_Notice_1004.png',
		   avatar2: 'img/Icon_SkinBig.png',
           start: '2020-02-19',
           end: '2020-03-18',
           username: '빛의 메아리',
           backgroundColor: "#C3ED60",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 10,
           title: '엘라스타 + 클라렛',
           avatar: 'img/banner/Picture_Notice_1001.png',
		   avatar2: 'img/n.png',
           start: '2020-02-19',
           end: '2020-03-04',
           username: 'NEW',
           backgroundColor: "#EDA900",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 11,
           title: '루나 + 쉐리 + (SR)나암  (시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1002.png',
		   avatar2: 'img/Word_2P.png',
           start: '2020-02-26',
           end: '2020-03-11',
           username: '2인',
           backgroundColor: "#86B381",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 12,
           title: '리스틸 + 란포드 + 윌러 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1003.png',
		   avatar2: 'img/Word_3P.png',
           start: '2020-03-04',
           end: '2020-03-18',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 13,
           title: '레딘 + 엘윈 + 란디우스 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_0802.png',
		   avatar2: 'img/Word_3P.png',
           start: '2020-03-11',
           end: '2020-03-25',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 14,
           title: '타로운세 - 란디우스',
           avatar: 'img/banner/Picture_Notice_0905.png',
		   avatar2: 'img/Card_Head_Aniki01_0.png',
           start: '2020-03-11',
           end: '2020-03-18',
           username: '형귀',
           backgroundColor: "#FFEAEA",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 15,
           title: '불꽃놀이',
           avatar: 'img/banner/Picture_Notice_1106.png',
		   avatar2: 'img/Icon_Events.png',
           start: '2020-03-18',
           end: '2020-04-15',
           username: 'Event',
           backgroundColor: "#FFFC80",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 16,
           title: '빛의 메아리(유리아, 오메가 스킨)',
           avatar: 'img/banner/Picture_Notice_1104.png',
		   avatar2: 'img/Icon_SkinBig.png',
           start: '2020-03-18',
           end: '2020-04-15',
           username: '빛의 메아리',
           backgroundColor: "#C3ED60",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 17,
           title: '전설의 문(운명의 문 도전 횟수 증가) - 일섭과 같으면 5일 진행',
           avatar: 'img/banner/Picture_Notice_HD01.png',
		   avatar2: 'img/Mood033.png',
           start: '2020-03-18',
           end: '2020-03-25',
           username: '2배',
           backgroundColor: "#1756ff",
           textColor: "#ffffff",
           allDay: true
       }, {
           _id: 18,
           title: '유리아 + 오메가',
           avatar: 'img/banner/Picture_Notice_1101.png',
		   avatar2: 'img/n.png',
           start: '2020-03-18',
           end: '2020-04-01',
           username: 'NEW',
           backgroundColor: "#EDA900",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 19,
           title: '시그마 + 람다 + 기자로프 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1102.png',
		   avatar2: 'img/Word_3P.png',
           start: '2020-03-25',
           end: '2020-04-08',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }
	   , {
           _id: 20,
           title: '라나 + 젤다 + 리아나 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1103.png',
		   avatar2: 'img/Word_3P.png',
           start: '2020-04-01',
           end: '2020-04-15',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 21,
           title: '타로운세 - 젤다',
           avatar: 'img/banner/Picture_Notice_0905.png',
		   avatar2: 'img/Card_Head_Aniki01_0.png',
           start: '2020-04-08',
           end: '2020-04-15',
           username: '형귀',
           backgroundColor: "#FFEAEA",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 22,
           title: '유유백서',
           avatar: 'img/banner/Picture_Notice_1206.png',
		   avatar2: 'img/Icon_Events.png',
           start: '2020-04-15',
           end: '2020-05-13',
           username: 'Event',
           backgroundColor: "#FFFC80",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 23,
           title: '빛의 메아리(유스케, 카즈마 스킨)',
           avatar: 'img/banner/Picture_Notice_1204.png',
		   avatar2: 'img/Icon_SkinBig.png',
           start: '2020-04-15',
           end: '2020-05-13',
           username: '빛의 메아리',
           backgroundColor: "#C3ED60",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 24,
           title: '유스케 + 카즈마',
           avatar: 'img/banner/Picture_Notice_1201.png',
		   avatar2: 'img/n.png',
           start: '2020-04-15',
           end: '2020-04-29',
           username: 'NEW',
           backgroundColor: "#EDA900",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 25,
           title: '티아리스 + 클라렛 + 루나 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1203.png',
		   avatar2: 'img/Word_3P.png',
           start: '2020-04-22',
           end: '2020-05-06',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }
	   ]

   });
  
   $('.filter').on('change', function() {
       $('#calendar').fullCalendar('rerenderEvents');
   });

   $("#type_filter").select2({
       placeholder: "Filter Types",
       allowClear: true
   });

   $("#calendar_filter").select2({
       placeholder: "Filter Calendars",
       allowClear: true
   });
  
  $("#starts-at, #ends-at").datetimepicker({
    format: 'ddd DD MMM YYYY HH:mm'
  });
  
  //var minDate = moment().subtract(0, 'days').millisecond(0).second(0).minute(0).hour(0);
  
  $(" #editStartDate, #editEndDate").datetimepicker({
    format: 'ddd DD MMM YYYY HH:mm'
    //minDate: minDate
  });
  
  //CREATE NEW EVENT CALENDAR

  newEvent = function(start, end, eventType) {
      
      var colorEventyType;
      
      if (eventType == "Appointment"){
        colorEventyType = "colorAppointment";
      }
      else if (eventType == "Check-in"){
        colorEventyType = "colorCheck-in";
      }
      else if (eventType == "Checkout"){
        colorEventyType = "colorCheckout";
      }
      else if (eventType == "Inventory"){
        colorEventyType = "colorInventory";
      }
      else if (eventType == "Valuation"){
        colorEventyType = "colorValuation";
      }
      else if (eventType == "Viewing"){
        colorEventyType = "colorViewing";
      }

      $("#contextMenu").hide();
      $('.eventType').text(eventType);
      $('input#title').val("");
      $('#starts-at').val(start);
      $('#ends-at').val(end);
      $('#newEventModal').modal('show');
      
      var statusAllDay;
      var endDay;
    
      $('.allDayNewEvent').on('change',function () {
      
        if ($(this).is(':checked')) {
          statusAllDay = true;
          var endDay = $('#ends-at').prop('disabled', true);
        } else {
          statusAllDay = false;
          var endDay = $('#ends-at').prop('disabled', false);
        }   
      });
      
      //GENERATE RAMDON ID - JUST FOR TEST - DELETE IT
      var eventId = 1 + Math.floor(Math.random() * 1000);
      //GENERATE RAMDON ID - JUST FOR TEST - DELETE IT
    
      $('#save-event').unbind();
      $('#save-event').on('click', function() {
      var title = $('input#title').val();
      var startDay = $('#starts-at').val();
      if(!$(".allDayNewEvent").is(':checked')){
        var endDay = $('#ends-at').val();
      }
      var calendar = $('#calendar-type').val();
      var description = $('#add-event-desc').val();
      var type = eventType;
      if (title) {
        var eventData = {
            _id: eventId,
            title: title,
            avatar: 'https://republika.mk/wp-content/uploads/2017/07/man-852762_960_720.jpg',
            start: startDay,
            end: endDay,
            description: description,
            type: type,
            calendar: calendar,
            className: colorEventyType,
            username: 'Caio Vitorelli',
            backgroundColor: '#1756ff',
            textColor: '#ffffff',
            allDay: statusAllDay
        };
        $("#calendar").fullCalendar('renderEvent', eventData, true);
        $('#newEventModal').find('input, textarea').val('');
        $('#newEventModal').find('input:checkbox').prop('checked',false);
        $('#ends-at').prop('disabled', false);
        $('#newEventModal').modal('hide');
        }
      else {
        alert("Title can't be blank. Please try again.")
      }
      });
    }
    
  //EDIT EVENT CALENDAR
  
    editEvent = function(event, element, view) {

        $('.popover.fade.top').remove();
        $(element).popover("hide");
      
        //$(".dropdown").hide().css("visibility", "hidden");
      
        if(event.allDay == true){
          $('#editEventModal').find('#editEndDate').attr("disabled", true);
          $('#editEventModal').find('#editEndDate').val("");
          $(".allDayEdit").prop('checked', true);
        }else{
          $('#editEventModal').find('#editEndDate').attr("disabled", false);
          $('#editEventModal').find('#editEndDate').val(event.end.format('ddd DD MMM YYYY HH:mm'));
          $(".allDayEdit").prop('checked', false);
        }
      
        $('.allDayEdit').on('change',function () {
      
          if ($(this).is(':checked')) {
              $('#editEventModal').find('#editEndDate').attr("disabled", true);
              $('#editEventModal').find('#editEndDate').val("");
              $(".allDayEdit").prop('checked', true);
            } else {
              $('#editEventModal').find('#editEndDate').attr("disabled", false);
              $(".allDayEdit").prop('checked', false);
            }   
        });
        
        $('#editTitle').val(event.title);
        $('#editStartDate').val(event.start.format('ddd DD MMM YYYY HH:mm'));
        $('#edit-calendar-type').val(event.calendar);
        $('#edit-event-desc').val(event.description);
        $('.eventName').text(event.title);
        $('#editEventModal').modal('show');
        $('#updateEvent').unbind();
        $('#updateEvent').on('click', function() {
          var statusAllDay;
          if ($(".allDayEdit").is(':checked')) {
            statusAllDay = true;
          }else{
            statusAllDay = false;
          }
          var title = $('input#editTitle').val();
          var startDate = $('input#editStartDate').val();
          var endDate = $('input#editEndDate').val();
          var calendar = $('#edit-calendar-type').val();
          var description = $('#edit-event-desc').val();
          $('#editEventModal').modal('hide');
          var eventData;
          if (title) {
            event.title = title
            event.start = startDate
            event.end = endDate
            event.calendar = calendar
            event.description = description
            event.allDay = statusAllDay
            $("#calendar").fullCalendar('updateEvent', event);
          } else {
          alert("Title can't be blank. Please try again.")
          }
        });
      
        $('#deleteEvent').on('click', function() {
          $('#deleteEvent').unbind();
          if (event._id.includes("_fc")){
            $("#calendar").fullCalendar('removeEvents', [event._id]);
          } else {
            $("#calendar").fullCalendar('removeEvents', [event._id]);
          }
          $('#editEventModal').modal('hide');
        });
      }
    

  //SET DEFAULT VIEW CALENDAR
    
  var defaultCalendarView = $("#calendar_view").val();
  
  if(defaultCalendarView == 'month'){                             
      $('#calendar').fullCalendar( 'changeView', 'month');
  }else if(defaultCalendarView == 'agendaWeek'){
      $('#calendar').fullCalendar( 'changeView', 'agendaWeek');
  }else if(defaultCalendarView == 'agendaDay'){
      $('#calendar').fullCalendar( 'changeView', 'agendaDay');
  }else if(defaultCalendarView == 'listWeek'){
      $('#calendar').fullCalendar( 'changeView', 'listWeek');
  }
  
  $('#calendar_view').on('change',function () {
    
    var defaultCalendarView = $("#calendar_view").val();
    $('#calendar').fullCalendar('changeView', defaultCalendarView);
    
  });
  
  //SET MIN TIME AGENDA
    
  $('#calendar_start_time').on('change',function () {
    
    var minTimeAgendaView = $(this).val();
    $('#calendar').fullCalendar('option', {minTime: minTimeAgendaView});
    
  });
  
  //SET MAX TIME AGENDA
    
  $('#calendar_end_time').on('change',function () {
    
    var maxTimeAgendaView = $(this).val();
    $('#calendar').fullCalendar('option', {maxTime: maxTimeAgendaView});
    
  });
  
  //SHOW - HIDE WEEKENDS
  
  var activeInactiveWeekends = false;
  checkCalendarWeekends();

  $('.showHideWeekend').on('change',function () {
    checkCalendarWeekends();
  });
  
  
  //CREATE NEW CALENDAR AND APPEND
  
  $('#addCustomCalendar').on('click', function() {
    
    var newCalendarName = $("#inputCustomCalendar").val();
    $('#calendar_filter, #calendar-type, #edit-calendar-type').append($('<option>', {
        value: newCalendarName,
        text: newCalendarName
    }));
    $("#inputCustomCalendar").val("");
    
  });
  
  //WEATHER GRAMATICALLY
  
  function retira_acentos(str) {
    var com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝRÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿr";
    var sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    var novastr="";
    for(i=0; i<str.length; i++) {
      troca=false;
      for (a=0; a<com_acento.length; a++) {
        if (str.substr(i,1)==com_acento.substr(a,1)) {
          novastr+=sem_acento.substr(a,1);
          troca=true;
          break;
        }
      }
      if (troca==false) {
        novastr+=str.substr(i,1);
      }
    }
    return novastr.toLowerCase().replace( /\s/g, '-' );
  }
  
  //WEATHER THEMES
  
  document.getElementById('switchWeatherTheme').addEventListener('change', function(){
    
    var valueTheme = $(this).val();
    var widget = document.querySelector('.weatherwidget-io');
    widget.setAttribute('data-theme', valueTheme);
    __weatherwidget_init();
    
  });
  
  //WEATHER LOCATION
  var input = document.getElementById('searchTextField');
  var autocomplete = new google.maps.places.Autocomplete(input);
  
  google.maps.event.addListener(autocomplete, 'place_changed', function () {
    var place = autocomplete.getPlace();
    var latitude = place.geometry.location.lat();
    var longitude = place.geometry.location.lng();
    var newPlace = retira_acentos(place.name);
    
    var urlDataWeather = 'https://forecast7.com/en/'+ latitude.toFixed(2).replace(/\./g,'d').replace(/\-/g,'n') + longitude.toFixed(2).replace(/\./g,'d').replace(/\-/g,'n') + '/'+ newPlace +'/';
    
    alert(urlDataWeather);
    
    var weatherWidget = document.querySelector('.weatherwidget-io');
    weatherWidget.href = urlDataWeather;
    weatherWidget.dataset.label_1 = place.name;
    __weatherwidget_init();
    
    //document.getElementById('city2').value = place.name;
    //document.getElementById('cityLat').value = place.geometry.location.lat();
    //document.getElementById('cityLng').value = place.geometry.location.lng();
    //alert("This function is working!");
    //alert(place.name);
    // alert(place.address_components[0].long_name);

  });
  
});