$(function(){
				$('.follow img').click(function(){
					$img = $('.follow img').attr('src');
//					console.log($img);
					if($img == 'img/techer_11.jpg')
					{
						$('.follow-list').show();
						$('.follow img').attr({
							src:'img/techer_18.jpg'
						});
					}
					if($img == 'img/techer_18.jpg')
					{
						$('.follow-list').hide();
						$('.follow img').attr({
							src:'img/techer_11.jpg'
						});
					}
				});
				
				$('#expert img').click(function(){
					$img = $('#expert img').attr('src');
//					console.log($img);
					if($img == 'img/techer_11.jpg')
					{
						$('.family-list').show();
						$('#expert img').attr({
							src:'img/techer_18.jpg'
						});
					}
					if($img == 'img/techer_18.jpg')
					{
						$('.family-list').hide();
						$('#expert img').attr({
							src:'img/techer_11.jpg'
						});
					}
				});
			});