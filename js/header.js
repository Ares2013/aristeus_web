$(".trouse").mouseover(function(){
				console.log(123)
				$(".trouse>a").removeClass("plaid");
				$(".trouse>a").removeClass("plaitsd");
				$(".peared").css("display",'none')
				$(this).children("a").addClass("plaid");
				$(this).children(".peared").css("display","block");
			})
			$(".trouse").mouseout(function(){
				console.log(123)
				$(".trouse>a").removeClass("plaid");
				$(".peared").css("display",'none')
			
			})
			$(".trouse").mouseout(function(){
				$(".peared").css("display",'none')
			})
			$(".peared p").mouseover(function(){
				$(".peared p").removeClass("ahead");
				$(this).addClass("ahead")
			})
			$(".peared p").mouseout(function(){
				$(".peared").css("display",'none')
			})
			