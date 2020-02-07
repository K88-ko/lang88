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
                      '<img src="' + event.avatar + '" width="250px" />' +
                      '</div>',
            delay: { 
               hide: "50"
            },
            trigger: 'hover',
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
           left: 'today',
           center: 'prev, title, next',
           right: 'month,agendaWeek,listWeek'
       },
       views: {
            month: {
              columnFormat:'dddd'
            },
            agendaWeek:{
              columnFormat:'M/D ddd',
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
       navLinks: false,
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
		   avatar2: 'img/N.png',
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
		   avatar2: 'img/N.png',
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
       }, {
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
		   avatar2: 'img/N.png',
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
       }, {
           _id: 26,
           title: '도구로형제 + 유스케',
           avatar: 'img/banner/Picture_Notice_1202.png',
		   avatar2: 'img/N.png',
           start: '2020-04-29',
           end: '2020-05-13',
           username: 'NEW',
           backgroundColor: "#EDA900",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 27,
           title: '유스핀미라운드 - 쥬그라',
           avatar: 'img/banner/Picture_Notice_1105.png',
		   avatar2: 'img/Card_Head_Aniki01_0.png',
           start: '2020-05-06',
           end: '2020-05-13',
           username: '형귀',
           backgroundColor: "#FFEAEA",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 28,
           title: '연구개발팀',
           avatar: 'img/banner/Picture_Notice_1308.png',
		   avatar2: 'img/Icon_Events.png',
           start: '2020-05-13',
           end: '2020-06-10',
           username: 'Event',
           backgroundColor: "#FFFC80",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 29,
           title: '빛의 메아리(레인폴스, 베티 스킨)',
           avatar: 'img/banner/Picture_Notice_1306.png',
		   avatar2: 'img/Icon_SkinBig.png',
           start: '2020-05-13',
           end: '2020-06-10',
           username: '빛의 메아리',
           backgroundColor: "#C3ED60",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 30,
           title: '레인폴스 + 베티',
           avatar: 'img/banner/Picture_Notice_1301.png',
		   avatar2: 'img/N.png',
           start: '2020-05-13',
           end: '2020-05-27',
           username: 'NEW',
           backgroundColor: "#EDA900",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 31,
           title: '전설의 문(운명의 문 도전 횟수 증가) - 일섭과 같으면 5일 진행',
           avatar: 'img/banner/Picture_Notice_HD01.png',
		   avatar2: 'img/Mood033.png',
           start: '2020-05-13',
           end: '2020-05-20',
           username: '2배',
           backgroundColor: "#1756ff",
           textColor: "#ffffff",
           allDay: true
       }, {
           _id: 32,
           title: '란디우스 + 보젤 (시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1303.png',
		   avatar2: 'img/Word_2P.png',
           start: '2020-05-20',
           end: '2020-06-03',
           username: '2인',
           backgroundColor: "#86B381",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 33,
           title: '엘라스타 + 쥬그라 + 제리올&레이라 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1302.png',
		   avatar2: 'img/Word_3P.png',
           start: '2020-05-27',
           end: '2020-06-10',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 34,
           title: '고대의 전설 장비',
           avatar: 'img/banner/Picture_Notice_1305.png',
		   avatar2: 'img/Equip_Random_All.png',
           start: '2020-05-27',
           end: '2020-06-10',
           username: '장비소환',
           backgroundColor: "#003399",
           textColor: "#ffffff",
           allDay: true
       }, {
           _id: 35,
           title: '레딘 + 레이첼 + 알테뮬러 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1304.png',
		   avatar2: 'img/Word_3P.png',
           start: '2020-06-03',
           end: '2020-06-17',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 36,
           title: '타로운세 - 란포드',
           avatar: 'img/banner/Picture_Notice_1205.png',
		   avatar2: 'img/Card_Head_Aniki01_0.png',
           start: '2020-06-03',
           end: '2020-06-10',
           username: '형귀',
           backgroundColor: "#FFEAEA",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 37,
           title: '소녀의 여정',
           avatar: 'img/banner/Picture_Notice_1407.png',
		   avatar2: 'img/Icon_Events.png',
           start: '2020-06-10',
           end: '2020-07-08',
           username: 'Event',
           backgroundColor: "#FFFC80",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 38,
           title: '빛의 메아리(에밀리아, 여신의화신 스킨)',
           avatar: 'img/banner/Picture_Notice_1405.png',
		   avatar2: 'img/Icon_SkinBig.png',
           start: '2020-06-10',
           end: '2020-07-08',
           username: '빛의 메아리',
           backgroundColor: "#C3ED60",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 39,
           title: '에밀리아 + 여신의화신',
           avatar: 'img/banner/Picture_Notice_1401.png',
		   avatar2: 'img/N.png',
           start: '2020-06-10',
           end: '2020-06-24',
           username: 'NEW',
           backgroundColor: "#EDA900",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 40,
           title: '유리아 + 셀파닐 (시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1402.png',
		   avatar2: 'img/Word_2P.png',
           start: '2020-06-17',
           end: '2020-07-01',
           username: '2인',
           backgroundColor: "#86B381",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 41,
           title: '쉐리 + 디하르트 + 오메가 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1403.png',
		   avatar2: 'img/Word_3P.png',
           start: '2020-06-24',
           end: '2020-07-08',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 42,
           title: '엘윈 + 레온 + 베른하르트 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1404.png',
		   avatar2: 'img/Word_3P.png',
           start: '2020-07-01',
           end: '2020-07-15',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 43,
           title: '유스핀미라운드 - 엘라스타',
           avatar: 'img/banner/Picture_Notice_1307.png',
		   avatar2: 'img/Card_Head_Aniki01_0.png',
           start: '2020-07-01',
           end: '2020-07-08',
           username: '형귀',
           backgroundColor: "#FFEAEA",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 44,
           title: '봉인된 전장',
           avatar: 'img/banner/Picture_Notice_1507.png',
		   avatar2: 'img/Icon_Events.png',
           start: '2020-07-08',
           end: '2020-08-05',
           username: 'Event',
           backgroundColor: "#FFFC80",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 45,
           title: '빛의 메아리(비라쥬, 미지의기사 스킨)',
           avatar: 'img/banner/Picture_Notice_1504.png',
		   avatar2: 'img/Icon_SkinBig.png',
           start: '2020-07-08',
           end: '2020-08-05',
           username: '빛의 메아리',
           backgroundColor: "#C3ED60",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 46,
           title: '비라쥬 + 미지의기사',
           avatar: 'img/banner/Picture_Notice_1501.png',
		   avatar2: 'img/N.png',
           start: '2020-07-08',
           end: '2020-07-22',
           username: 'NEW',
           backgroundColor: "#EDA900",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 47,
           title: '안젤리나 + 리스틸 + 란포드 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1502.png',
		   avatar2: 'img/Word_3P.png',
           start: '2020-07-15',
           end: '2020-07-29',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 48,
           title: '요슈아 + 에스텔(콜라보 복각)',
           avatar: 'img/banner/Picture_Notice_0501.png',
		   avatar2: 'img/Word_2P.png',
           start: '2020-07-22',
           end: '2020-08-05',
           username: '2인',
           backgroundColor: "#86B381",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 49,
           title: '시공의 궤적 FC(복각)',
           avatar: 'img/banner/Picture_Linkage_01.png',
		   avatar2: 'img/Icon_Events.png',
           start: '2020-07-22',
           end: '2020-08-05',
           username: 'Event',
           backgroundColor: "#FFFC80",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 50,
           title: '루나 + 보젤 + 리아나 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1503.png',
		   avatar2: 'img/Word_3P.png',
           start: '2020-07-29',
           end: '2020-08-12',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 51,
           title: '타로운세 - 람다',
           avatar: 'img/banner/Picture_Notice_1406.png',
		   avatar2: 'img/Card_Head_Aniki01_0.png',
           start: '2020-07-29',
           end: '2020-08-05',
           username: '형귀',
           backgroundColor: "#FFEAEA",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 52,
           title: '숲 속의 미스터리(특수 사건)',
           avatar: 'img/banner/Picture_Notice_1506.png',
		   avatar2: 'img/Icon_Events.png',
           start: '2020-07-29',
           end: '2020-08-12',
           username: 'Event',
           backgroundColor: "#FFFC80",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 53,
           title: '할로윈의 밤',
           avatar: 'img/banner/Picture_Notice_1605.png',
		   avatar2: 'img/Icon_Events.png',
           start: '2020-08-05',
           end: '2020-08-19',
           username: 'Event',
           backgroundColor: "#FFFC80",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 54,
           title: '빛의 메아리(아카야, 브렌다 스킨)',
           avatar: 'img/banner/Picture_Notice_1603.png',
		   avatar2: 'img/Icon_SkinBig.png',
           start: '2020-08-05',
           end: '2020-09-02',
           username: '빛의 메아리',
           backgroundColor: "#C3ED60",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 55,
           title: '아카야 + 브렌다',
           avatar: 'img/banner/Picture_Notice_1601.png',
		   avatar2: 'img/N.png',
           start: '2020-08-05',
           end: '2020-08-19',
           username: 'NEW',
           backgroundColor: "#EDA900",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 56,
           title: '시그마 + 람다 + 기자로프 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1102.png',
		   avatar2: 'img/Word_3P.png',
           start: '2020-08-12',
           end: '2020-08-26',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 57,
           title: '레온하르트 + 렌(콜라보 복각)',
           avatar: 'img/banner/Picture_Notice_0601.png',
		   avatar2: 'img/Word_2P.png',
           start: '2020-08-19',
           end: '2020-09-02',
           username: '2인',
           backgroundColor: "#86B381",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 58,
           title: '시공의 궤적 SC(복각)',
           avatar: 'img/banner/Picture_Linkage_02.png',
		   avatar2: 'img/Icon_Events.png',
           start: '2020-08-19',
           end: '2020-09-02',
           username: 'Event',
           backgroundColor: "#FFFC80",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 59,
           title: '레이첼 + 라나 + 티아리스 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1602.png',
		   avatar2: 'img/Word_3P.png',
           start: '2020-08-26',
           end: '2020-09-09',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 60,
           title: '유스핀미라운드 - 시그마',
           avatar: 'img/banner/Picture_Notice_1505.png',
		   avatar2: 'img/Card_Head_Aniki01_0.png',
           start: '2020-08-26',
           end: '2020-09-02',
           username: '형귀',
           backgroundColor: "#FFEAEA",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 61,
           title: '로도스도전기',
           avatar: 'img/banner/Picture_Notice_1708.png',
		   avatar2: 'img/Icon_Events.png',
           start: '2020-09-02',
           end: '2020-09-30',
           username: 'Event',
           backgroundColor: "#FFFC80",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 62,
           title: '빛의 메아리(디드리트, 판 스킨)',
           avatar: 'img/banner/Picture_Notice_1706.png',
		   avatar2: 'img/Icon_SkinBig.png',
           start: '2020-09-02',
           end: '2020-09-30',
           username: '빛의 메아리',
           backgroundColor: "#C3ED60",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 63,
           title: '디드리트 + 아슈람',
           avatar: 'img/banner/Picture_Notice_1701.png',
		   avatar2: 'img/N.png',
           start: '2020-09-02',
           end: '2020-09-16',
           username: 'NEW',
           backgroundColor: "#EDA900",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 64,
           title: '레인폴스 + 윌러 + 제리올&레이라 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1702.png',
		   avatar2: 'img/Word_3P.png',
           start: '2020-09-09',
           end: '2020-09-21',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 65,
           title: '젤다 + 클라렛 (시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1703.png',
		   avatar2: 'img/Word_2P.png',
           start: '2020-09-16',
           end: '2020-09-30',
           username: '2인',
           backgroundColor: "#86B381",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 66,
           title: '명장의 기이한 상상 장비',
           avatar: 'img/banner/Picture_Notice_1705.png',
		   avatar2: 'img/Equip_Random_All.png',
           start: '2020-09-16',
           end: '2020-09-30',
           username: '장비소환',
           backgroundColor: "#003399",
           textColor: "#ffffff",
           allDay: true
       }, {
           _id: 67,
           title: '란디우스 + 유리아 + 쥬그라 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1704.png',
		   avatar2: 'img/Word_3P.png',
           start: '2020-09-23',
           end: '2020-10-07',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 68,
           title: '타로운세 - 클라렛',
           avatar: 'img/banner/Picture_Notice_1604.png',
		   avatar2: 'img/Card_Head_Aniki01_0.png',
           start: '2020-09-23',
           end: '2020-09-30',
           username: '형귀',
           backgroundColor: "#FFEAEA",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 69,
           title: '전설의 문(운명의 문 도전 횟수 증가)',
           avatar: 'img/banner/Picture_Notice_HD01.png',
		   avatar2: 'img/Mood033.png',
           start: '2020-09-23',
           end: '2020-09-30',
           username: '2배',
           backgroundColor: "#1756ff",
           textColor: "#ffffff",
           allDay: true
       }, {
           _id: 70,
           title: '레스토랑 시즌2',
           avatar: 'img/banner/Picture_Notice_1806.png',
		   avatar2: 'img/Icon_Events.png',
           start: '2020-09-30',
           end: '2020-10-28',
           username: 'Event',
           backgroundColor: "#FFFC80",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 71,
           title: '내면의 여행자(특수 사건)',
           avatar: 'img/banner/Picture_Notice_1808.png',
		   avatar2: 'img/Icon_Events.png',
           start: '2020-09-30',
           end: '2020-10-21',
           username: 'Event',
           backgroundColor: "#FFFC80",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 72,
           title: '마탑 용사 공방전(한정 PVP이벤트)',
           avatar: 'img/banner/Picture_Notice_1809.png',
		   avatar2: 'img/Icon_Events.png',
           start: '2020-09-30',
           end: '2020-10-21',
           username: 'Event',
           backgroundColor: "#FFFC80",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 73,
           title: '빛의 메아리(아레스, 마이야 스킨)',
           avatar: 'img/banner/Picture_Notice_1804.png',
		   avatar2: 'img/Icon_SkinBig.png',
           start: '2020-09-30',
           end: '2020-10-28',
           username: '빛의 메아리',
           backgroundColor: "#C3ED60",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 74,
           title: '아레스 + 마이야',
           avatar: 'img/banner/Picture_Notice_1801.png',
		   avatar2: 'img/N.png',
           start: '2020-09-30',
           end: '2020-10-14',
           username: 'NEW',
           backgroundColor: "#EDA900",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 75,
           title: '베티 + 셀파닐 (시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1803.png',
		   avatar2: 'img/Word_2P.png',
           start: '2020-10-07',
           end: '2020-10-21',
           username: '2인',
           backgroundColor: "#86B381",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 76,
           title: '엘라스타 + 여신의화신 + 디하르트 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1802.png',
		   avatar2: 'img/Word_3P.png',
           start: '2020-10-14',
           end: '2020-10-28',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 76,
           title: '레딘 + 레이첼 + 알테뮬러 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1304.png',
		   avatar2: 'img/Word_3P.png',
           start: '2020-10-21',
           end: '2020-11-04',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 77,
           title: '타로운세 - 베티',
           avatar: 'img/banner/Picture_Notice_1805.png',
		   avatar2: 'img/Card_Head_Aniki01_0.png',
           start: '2020-10-21',
           end: '2020-10-28',
           username: '형귀',
           backgroundColor: "#FFEAEA",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 78,
           title: '유스핀미라운드 - 기자로프(쉐리-크리스마스,티아리스,란디우스,란포드,알테뮬러 형귀스킨 중 택1)',
           avatar: 'img/banner/Picture_Notice_1707.png',
		   avatar2: 'img/Card_Head_Aniki01_0.png',
           start: '2020-12-16',
           end: '2020-12-23',
           username: '형귀',
           backgroundColor: "#FFEAEA",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 79,
           title: '신원협력전(기간한정 협력전)',
           avatar: 'img/banner/Picture_Notice_1807.png',
		   avatar2: 'img/Icon_Events.png',
           start: '2020-10-14',
           end: '2020-10-21',
           username: 'Event',
           backgroundColor: "#FFFC80",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 80,
           title: '발렌타인데이',
           avatar: 'img/banner/Picture_Notice_1908.png',
		   avatar2: 'img/Icon_Events.png',
           start: '2020-10-28',
           end: '2020-11-25',
           username: 'Event',
           backgroundColor: "#FFFC80",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 81,
           title: '빛의 메아리(일루시아, 실린카 스킨)',
           avatar: 'img/banner/Picture_Notice_1906.png',
		   avatar2: 'img/Icon_SkinBig.png',
           start: '2020-10-28',
           end: '2020-11-25',
           username: '빛의 메아리',
           backgroundColor: "#C3ED60",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 82,
           title: '일루시아 + 실린카',
           avatar: 'img/banner/Picture_Notice_1901.png',
		   avatar2: 'img/N.png',
           start: '2020-10-28',
           end: '2020-11-11',
           username: 'NEW',
           backgroundColor: "#EDA900",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 83,
           title: '란디우스 + 안젤리나 (CP 포인트)',
           avatar: 'img/banner/Picture_Notice_1903.png',
		   avatar2: 'img/Word_2P.png',
           start: '2020-11-04',
           end: '2020-11-18',
           username: '2인',
           backgroundColor: "#86B381",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 84,
           title: '미지의기사 + 란포드 (CP 포인트)',
           avatar: 'img/banner/Picture_Notice_1904.png',
		   avatar2: 'img/Word_2P.png',
           start: '2020-11-04',
           end: '2020-11-18',
           username: '2인',
           backgroundColor: "#86B381",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 85,
           title: '시그마 + 클라렛 (CP 포인트)',
           avatar: 'img/banner/Picture_Notice_1905.png',
		   avatar2: 'img/Word_2P.png',
           start: '2020-11-04',
           end: '2020-11-18',
           username: '2인',
           backgroundColor: "#86B381",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 86,
           title: '쉐리 + 비라쥬 + 오메가 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1902.png',
		   avatar2: 'img/Word_3P.png',
           start: '2020-11-11',
           end: '2020-11-25',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 87,
           title: '엘윈 + 레온 + 베른하르트 (특별 혜택 & 시공의 정수)',
           avatar: 'img/banner/Picture_Notice_1404.png',
		   avatar2: 'img/Word_3P.png',
           start: '2020-11-18',
           end: '2020-12-02',
           username: '3인',
           backgroundColor: "#85FFFF",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 88,
           title: '유스핀미라운드 - 윌러',
           avatar: 'img/banner/Picture_Notice_1907.png',
		   avatar2: 'img/Card_Head_Aniki01_0.png',
           start: '2020-11-18',
           end: '2020-11-25',
           username: '형귀',
           backgroundColor: "#FFEAEA",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 89,
           title: '빙설수호전(사건 이벤트)',
           avatar: 'img/banner/Picture_Notice_1710.png',
		   avatar2: 'img/Icon_Events.png',
           start: '2020-12-23',
           end: '2021-01-06',
           username: 'Event',
           backgroundColor: "#FFFC80",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 90,
           title: '전설의 문(운명의 문 도전 횟수 증가) 1주년인데 행복회로 ',
           avatar: 'img/banner/Picture_Notice_HD01.png',
		   avatar2: 'img/Mood033.png',
           start: '2020-06-03',
           end: '2020-06-10',
           username: '2배',
           backgroundColor: "#1756ff",
           textColor: "#ffffff",
           allDay: true
       }, {
           _id: 1001,
           title: '레이드(니드호그) ',
           avatar: 'img/raid/니드호그.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-03-18',
           end: '2020-03-24',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1002,
           title: '레이드(펜릴) ',
           avatar: 'img/raid/펜릴.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-03-24',
           end: '2020-03-30',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1003,
           title: '레이드(슬레이프니르) ',
           avatar: 'img/raid/슬레이프니르.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-03-30',
           end: '2020-04-05',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1004,
           title: '레이드(요르문간드) ',
           avatar: 'img/raid/요르문간드.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-04-05',
           end: '2020-04-11',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1005,
           title: '레이드(후긴무닌) ',
           avatar: 'img/raid/후긴무닌.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-04-11',
           end: '2020-04-17',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 10001,
           title: '시즌보상',
           avatar: 'img/Icon_Boss.png',
		   avatar2: 'img/item/상자.png',
           start: '2020-04-17',
           end: '2020-04-17',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1006,
           title: '레이드(니드호그) ',
           avatar: 'img/raid/니드호그.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-04-17',
           end: '2020-04-23',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1007,
           title: '레이드(펜릴) ',
           avatar: 'img/raid/펜릴.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-04-23',
           end: '2020-04-29',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1008,
           title: '레이드(슬레이프니르) ',
           avatar: 'img/raid/슬레이프니르.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-04-29',
           end: '2020-05-04',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1009,
           title: '레이드(요르문간드) ',
           avatar: 'img/raid/요르문간드.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-05-04',
           end: '2020-05-10',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1010,
           title: '레이드(후긴무닌) ',
           avatar: 'img/raid/후긴무닌.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-05-10',
           end: '2020-05-16',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 10002,
           title: '시즌보상',
           avatar: 'img/Icon_Boss.png',
		   avatar2: 'img/item/상자.png',
           start: '2020-05-16',
           end: '2020-05-16',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1011,
           title: '레이드(니드호그) ',
           avatar: 'img/raid/니드호그.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-05-16',
           end: '2020-05-22',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1012,
           title: '레이드(펜릴) ',
           avatar: 'img/raid/펜릴.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-05-22',
           end: '2020-05-28',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1013,
           title: '레이드(슬레이프니르) ',
           avatar: 'img/raid/슬레이프니르.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-05-28',
           end: '2020-06-03',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1014,
           title: '레이드(요르문간드) ',
           avatar: 'img/raid/요르문간드.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-06-03',
           end: '2020-06-09',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1015,
           title: '레이드(후긴무닌) ',
           avatar: 'img/raid/후긴무닌.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-06-09',
           end: '2020-06-15',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 10003,
           title: '시즌보상',
           avatar: 'img/Icon_Boss.png',
		   avatar2: 'img/item/상자.png',
           start: '2020-06-15',
           end: '2020-06-15',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1016,
           title: '레이드(니드호그) ',
           avatar: 'img/raid/니드호그.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-06-15',
           end: '2020-06-21',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1017,
           title: '레이드(펜릴) ',
           avatar: 'img/raid/펜릴.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-06-21',
           end: '2020-06-27',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1018,
           title: '레이드(슬레이프니르) ',
           avatar: 'img/raid/슬레이프니르.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-06-27',
           end: '2020-07-03',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1019,
           title: '레이드(요르문간드) ',
           avatar: 'img/raid/요르문간드.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-07-03',
           end: '2020-07-10',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1020,
           title: '레이드(후긴무닌) ',
           avatar: 'img/raid/후긴무닌.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-07-10',
           end: '2020-07-16',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 10004,
           title: '시즌보상',
           avatar: 'img/Icon_Boss.png',
		   avatar2: 'img/item/상자.png',
           start: '2020-07-16',
           end: '2020-07-16',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1021,
           title: '레이드(니드호그) ',
           avatar: 'img/raid/니드호그.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-07-16',
           end: '2020-07-22',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1022,
           title: '레이드(펜릴) ',
           avatar: 'img/raid/펜릴.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-07-22',
           end: '2020-07-28',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1023,
           title: '레이드(슬레이프니르) ',
           avatar: 'img/raid/슬레이프니르.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-07-28',
           end: '2020-08-03',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1024,
           title: '레이드(요르문간드) ',
           avatar: 'img/raid/요르문간드.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-08-03',
           end: '2020-08-09',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1025,
           title: '레이드(후긴무닌) ',
           avatar: 'img/raid/후긴무닌.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-08-09',
           end: '2020-08-15',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 10005,
           title: '시즌보상',
           avatar: 'img/Icon_Boss.png',
		   avatar2: 'img/item/상자.png',
           start: '2020-08-15',
           end: '2020-08-15',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1026,
           title: '레이드(니드호그) ',
           avatar: 'img/raid/니드호그.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-08-15',
           end: '2020-08-21',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1027,
           title: '레이드(펜릴) ',
           avatar: 'img/raid/펜릴.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-08-21',
           end: '2020-08-27',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1028,
           title: '레이드(슬레이프니르) ',
           avatar: 'img/raid/슬레이프니르.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-08-27',
           end: '2020-09-02',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1029,
           title: '레이드(요르문간드) ',
           avatar: 'img/raid/요르문간드.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-09-02',
           end: '2020-09-08',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1030,
           title: '레이드(후긴무닌) ',
           avatar: 'img/raid/후긴무닌.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-09-08',
           end: '2020-09-14',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 10006,
           title: '시즌보상',
           avatar: 'img/Icon_Boss.png',
		   avatar2: 'img/item/상자.png',
           start: '2020-09-14',
           end: '2020-09-14',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1031,
           title: '레이드(니드호그) ',
           avatar: 'img/raid/니드호그.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-09-14',
           end: '2020-09-20',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1032,
           title: '레이드(펜릴) ',
           avatar: 'img/raid/펜릴.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-09-20',
           end: '2020-09-26',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1033,
           title: '레이드(슬레이프니르) ',
           avatar: 'img/raid/슬레이프니르.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-09-26',
           end: '2020-10-02',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1034,
           title: '레이드(요르문간드) ',
           avatar: 'img/raid/요르문간드.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-10-02',
           end: '2020-10-08',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1035,
           title: '레이드(후긴무닌) ',
           avatar: 'img/raid/후긴무닌.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-10-08',
           end: '2020-10-14',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 10007,
           title: '시즌보상',
           avatar: 'img/Icon_Boss.png',
		   avatar2: 'img/item/상자.png',
           start: '2020-10-14',
           end: '2020-10-14',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1036,
           title: '레이드(니드호그) ',
           avatar: 'img/raid/니드호그.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-10-14',
           end: '2020-10-20',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1037,
           title: '레이드(펜릴) ',
           avatar: 'img/raid/펜릴.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-10-20',
           end: '2020-10-26',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1038,
           title: '레이드(슬레이프니르) ',
           avatar: 'img/raid/슬레이프니르.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-10-26',
           end: '2020-11-01',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1039,
           title: '레이드(요르문간드) ',
           avatar: 'img/raid/요르문간드.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-11-01',
           end: '2020-11-07',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1040,
           title: '레이드(후긴무닌) ',
           avatar: 'img/raid/후긴무닌.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-11-07',
           end: '2020-11-13',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 10008,
           title: '시즌보상',
           avatar: 'img/Icon_Boss.png',
		   avatar2: 'img/item/상자.png',
           start: '2020-11-13',
           end: '2020-11-13',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }
	   , {
           _id: 1041,
           title: '레이드(니드호그) ',
           avatar: 'img/raid/니드호그.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-11-13',
           end: '2020-11-19',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1042,
           title: '레이드(펜릴) ',
           avatar: 'img/raid/펜릴.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-11-19',
           end: '2020-11-25',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1043,
           title: '레이드(슬레이프니르) ',
           avatar: 'img/raid/슬레이프니르.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-11-25',
           end: '2020-12-01',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1044,
           title: '레이드(요르문간드) ',
           avatar: 'img/raid/요르문간드.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-12-01',
           end: '2020-12-07',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 1045,
           title: '레이드(후긴무닌) ',
           avatar: 'img/raid/후긴무닌.png',
		   avatar2: 'img/Icon_Boss.png',
           start: '2020-12-07',
           end: '2020-12-13',
           username: '레이드',
           backgroundColor: "#FFD9EC",
           textColor: "#000000",
           allDay: true
       }, {
           _id: 10009,
           title: '시즌보상',
           avatar: 'img/Icon_Boss.png',
		   avatar2: 'img/item/상자.png',
           start: '2020-12-13',
           end: '2020-12-13',
           username: '레이드',
           backgroundColor: "#FFD9EC",
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
});
