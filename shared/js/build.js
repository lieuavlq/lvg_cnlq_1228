var infoHeros = {
	"valhein": {
		"hero_id": "Valhein",
		"hero_name": "Valhein",
		"main_info": {
			"price_gold": "",
			"price_voucher": "",
			"price_text": "Quà cho chiến sĩ",
			"position": "Xạ thủ",
			"special": "Cấu rỉa",
			"lane": "Đường rồng / Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Ám khí",
				"info": "Nội tại: Mỗi đòn đánh thường thứ 3 đánh 1 đoản kiếm ngẫu nhiên kèm hiệu ứng đặc biệt. Valhein nhận 1 điểm cộng dồn “Thợ săn” giúp tăng 10% tốc chạy trong 2s, cộng dồn tối đa 5 lần.<br>Phi tiêu đỏ gây ST：100 (mỗi khi tăng 1 cấp+12) (+1.0 Công vật lý) (+0.65 Công phép) STP<br>Phi tiêu vàng gây ST: 100（mỗi khi tăng 1 cấp+12）(+0.6 Công vật lý) (+0.55 Công phép) STP<br>Phi tiêu xanh giảm hồi chiêu 1s của toàn bộ chiêu thức<br>Tỷ lệ phi tiêu đỏ : xanh : vàng được chỉnh thành 4 : 2 : 4.<br>Công vật lý cơ bản: 178",
			},
			{
				"name": "Chuyến săn mạo hiểm",
				"info": "ST Gốc: 300/330/360/390/420/450<br>H.Chiêu: 9/8.6/8.2/7.8/7.4/7<br>Valhein ném ám khí vào 1 kẻ địch, gây 300 (+0.8 Công vật lý) (+0.8 Công phép) STP. Ngoài ra Valhein còn được nhận 1 điểm cộng dồn hiệu ứng Thợ săn."
			},
			{
				"name": "Lời nguyền tử vong",
				"info": "ST Gốc: 150/170/190/210/230/250<br>H.Chiêu: 10/9.4/8.8/8.2/7.6/7<br>Valhein ném ám khí hoàng kim vào một kẻ địch, gây 150 (+98) (+0) STP và làm choáng mục tiêu. Ngoài ra Valhein còn được nhận 1 điểm cộng dồn hiệu ứng Thợ săn.",
			},
			{
				"name": "Bão đạn",
				"info": "ST Gốc: 200/250/300<br>H.Chiêu: 24/20/16<br>Valhein bắn 6 viên đạn bạc gây 200 (+169 STVL) (+0 STP) STP lên những kẻ địch trúng chiêu, tuy nhiên từ viên thứ 2 trở đi nạn nhân sẽ chỉ phải chịu 40% ST, mỗi phát đạn trúng đích giúp tăng 10% tốc chạy (tối đa 60%) và 8% tốc đánh (tối đa 48%), hiệu ứng kéo dài 3s.",
			}
		],
		"skill_up": {
			"line1": "2,6,10,13,14,15",
			"line2": "1,3,5,7,9,11",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,2,4,0",
			}
		],
		"skill_note": "*Đánh thường 3 lần sẽ nhận được thêm sức mạnh.<br>*Một AD có khả năng làm choáng đối thủ tha hồi mà quẩy, Chiêu cuối Bão đạn cố gắng áp sát mục tiêu ra đòn, lượng sát thương vô cùng lớn.",
		"skill_special": "TocBien,GamThet",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo22",
					"info": "Tốc đánh +0.6%<br>Tỷ lệ chí mạng +0.3%<br>Sát thương chí mạng +1.1%",
				},
				{
					"name": "NgocTim27",
					"info": "Tốc đánh +0.4%<br>Tỷ lệ chí mạng +0.3%<br>Tốc chạy +0.5%",
				},
				{
					"name": "NgocXanh21",
					"info": "Tốc đánh +0.4%<br>Giảm hồi chiêu +0.5%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo38",
					"info": "Tốc đánh +1.6%<br>Tỷ lệ chí mạng +0.5%",
				},
				{
					"name": "NgocTim32",
					"info": "Tốc đánh +1%<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường đơn hoặc đi cùng trợ thủ",
				"info": "GuomSamSet,GiayHoVe,ThanhKiem,QuyKiem,VuotHungTan,NanhFenrir",
			},
			{
				"name": "Đường đơn hoặc đi cùng trợ thủ",
				"info": "ThapTuKiem,GiayDuMuc,TruongHonMang,GuomTanThe,VuongMiengHecate,SachThanh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "GuomSamSet,GiayHoVe,AoChoangBangGia,RiuHyoga,KiemFafnir,GiapHoMenh"
			}
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp đi cùng các tướng bảo kê",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "toro", "id_page": "Toro"},
					{"hero_id": "gildur", "id_page": "Gildur"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp các tướng sau",
				"info": [
					{"hero_id": "zephys", "id_page": "Zephys"},
					{"hero_id": "veera", "id_page": "Veera"},
					{"hero_id": "thane", "id_page": "Thane"},
				]
			}
		],
		"hero_story": "\"Ta từng là hy vọng duy nhất của nhân loại trong cả thế kỷ chiến tranh với ma cà rồng\"<br>Trước khi trở thành Thợ săn ác quỷ, cả dòng họ của <i class=\"clr-orange\">Valhein</i> đều chỉ là cống phẩm đối với bè lũ Huyết tộc. Họ chỉ đơn giản là lũ dê béo được nuôi dưỡng hàng ngày chờ đến khi Huyết tộc cần cung cấp lương thực mà thôi. Là thành viên ưu tú nhất của cả dòng họ, <i class=\"clr-orange\">Valhein</i> quyết không thể tiếp tục số phận đen tối này, anh đã cùng khẩu súng huyền thoại của mình phá nát gông cùm xiềng xích của bầy Huyết tộc một lần và mãi mãi.<br>Sự phản kháng của <i class=\"clr-orange\">Valhein</i> nhanh chóng lan truyền như một ngọn lửa hừng hực cháy. Càng ngày càng có nhiều thành viên gia nhập hơn, và cũng từ đây <i class=\"clr-orange\">Valhein</i> đã kết bạn với người đồng hành thân cận nhất của mình, . Tuy nhiên kể cả có lớn mạnh bao nihêu đi chăng nữa, dường như sự chống cự của một bộ phận nhân loại vẫn quá nhỏ trước ách thống trị vững chắc hàng thế kỷ của Huyết tộc.<br>Trước sự phản công cuồng bạo của Huyết tộc, <i class=\"clr-orange\">Valhein</i> quyết dẫn dắt tất cả lực lượng phản kháng tìm đến Lâu đài khởi nguyên hòng tìm được sự che chở. Nhằm bảo đảm tốp đầu được đến nơi an toàn, <i class=\"clr-orange\">Valhein</i> đã cùng abc và các chiến sĩ tài năng nhất ở lại để chặn hậu. Dẫu chiến thắng và mang được những đồng đội còn sống sót đến với an toàn, nhưng cái giá phải trả vẫn quá cao, <i class=\"clr-orange\">Valhein</i> thề sẽ có ngày chàng khiến bè lũ Huyết tộc trả giá cho những tội ác của chúng.<br>\"Nhân danh trời đất, ta thề sẽ quét sạch mọi thế lực bóng tối và bè lũ Huyết tộc khỏi thế giới này!\"",
		"hero_skin": [
			{
				"name": "Thợ Săn Phù Thủy",
				"gold": "",
				"voucher": "",
				"event": "Quà cho chiến sĩ",
				"wall": "Valhein01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Valhein01",
			},
			{
				"name": "Hoàng Tư Quạ",
				"gold": "",
				"voucher": "",
				"event": "Được thưởng nhiệm vụ",
				"wall": "Valhein02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "Valhein02",
			},
			{
				"name": "Vũ Khí Tối Thượng (Bậc SS)",
				"gold": "",
				"voucher": "799",
				"event": "",
				"wall": "Valhein03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "Valhein03",
			},
			{
				"name": "Đại Công Tước (Bậc A)",
				"gold": "",
				"voucher": "279",
				"event": "",
				"wall": "Valhein04",
				"disable": "yes",
				"img": "thumb4.jpg",
				"video": "Valhein04",
			},
			{
				"name": "Số 7 Thần Sầu (Football Fever)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Valhein05",
				"disable": "yes",
				"img": "thumb5.jpg",
				"video": "Valhein05",
			},
			{
				"name": "Quang Vinh",
				"gold": "",
				"voucher": "",
				"event": "S7 Thưởng hạng",
				"wall": "Valhein06",
				"disable": "yes",
				"img": "thumb6.jpg",
				"video": "Valhein06",
			},
		]
	},
	"thane": {
		"hero_id": "Thane",
		"hero_name": "Thane",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Đỡ đòn / Đấu sĩ",
			"special": "Khống chế / Tiền vệ",
			"lane": "Đường rồng / Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Quyền năng ma thuật",
				"info": "Nội tại: Khi máu còn thấp hơn 30%, Thane sẽ tự hồi lại 24% máu tối đa trong 6s, 75s hồi chiêu.",
			},
			{
				"name": "Xung phong",
				"info": "ST Gốc: 60/75/90/105/120/135<br>H.Chiêu: 12/11.2/10.4/9.6/8.8/8<br>Thane lao đến hướng chỉ định, gây 60 (+54) STVL theo từng đợt lên kẻ địch kèm hiệu ứng đẩy lùi liên tục. Khi chiêu kết thúc sẽ hất tung nạn nhân."
			},
			{
				"name": "Gươm thần",
				"info": "ST Gốc: 200/260/320/380/440/500<br>H.Chiêu: 8.5/8/7.5/7/6.5/6<br>Thane phóng lên trời cấm kiếm thần xuống đất, gây 200 (+91) STVL và hất tung rồi làm chậm 90% tốc chạy của các nạn nhân trúng chiêu.",
			},
			{
				"name": "Excalibur",
				"info": "ST Gốc: 500/750/1000<br>H.Chiêu: 40/35/30<br>Thane rút kiếm thần chém về phía trước, gây 500 (+141) STC và 15% máu đã mất của mục tiêu thành STVL. Ngoài ra trong khoản thời gian tung chiêu Thane nhận 20% miễn thương.",
			}
		],
		"skill_up": {
			"line1": "2,6,10,13,14,15",
			"line2": "1,3,5,7,9,11",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,4,0",
			}
		],
		"skill_note": "*Đừng lo sợ khi lượng máu thấp hơn 30% nó sẽ tự động hồi lại.<br>*Combo tốt tạo hiệu ứng đẩy lùi và hất tung khá bá đạo.<br>*Chiêu cuối dùng với khoảng cách khá xa vì thế đừng lo địch bỏ chạy!!",
		"skill_special": "CapCuu,TocBien,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim24",
					"info": "Máu tối đa +36<br>Giáp +1.6",
				},
				{
					"name": "NgocXanh22",
					"info": "Máu tối đa +15.7<br>Hồi máu/5s +3.1<br>Giảm hồi chiêu +0.3%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo35",
					"info": "Công vậy lý +2.5<br>Hút máu +0.5%",
				},
				{
					"name": "NgocTim39",
					"info": "Máu tối đa +75",
				},
				{
					"name": "NgocXanh36",
					"info": "Giáp +5<br>Giáp phép +5",
				}
			]
		},
		"item_build": [
			{
				"name": "Chơi hỗ trợ",
				"info": "LenhBaiPhongThan,GiayKienCuong,AoChoangThanRa,GiapGaia,KhienThatTruyen,GiapThongKho",
			},
			{
				"name": "Chơi hỗ trợ",
				"info": "GiayKienCuong,LenhBaiPhongThan,AoChoangBangGia,GiapGaia,NanhFenrir,KhienHuyenThoai",
			},
			{
				"name": "Đường Caesar",
				"info": "GiayKienCuong,AoChoangThanRa,KhienHuyenThoai,GiapGaia,GiapThongKho,KhienThatTruyen"
			}
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp đi cùng các tướng bảo kê",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "butterfly", "id_page": "Butterfly"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp các tướng sau",
				"info": [
					{"hero_id": "jinna", "id_page": "Jinna"},
					{"hero_id": "ormarr", "id_page": "Ormarr"},
				]
			}
		],
		"hero_story": "Cái tên <i class=\"clr-orange\">Thane</i> được viết trang trọng trên mọi trang bìa của mọi cuốn sách trong lịch sử loài người. Không chỉ bởi vì chàng đã phá vỡ ách cai trị của bè lũ bóng đêm, mà chàng cũng là người tiên phong trong công nghệ.<br>Vào khoảng thời gian khi đức tin đã không còn và quỷ dữ hiển hiện muôn nơi, loài người đã sử dụng những công nghệ tối tân để thoát khỏi ách cai trị và tự quyết định cuộc sống của họ. Từ một người di cư không thể tự bảo vệ đến vị vua mà muôn người ngưỡng mộ, <i class=\"clr-orange\">Thane</i> đã phải trải qua một cuộc sống gian truân, phải chứng kiến hàng ngàn mạng sống ngã xuống trên khắp các chiến trường, ra tay giết chết vô số ma quỷ và đánh mất rất nhiều người bạn. Nhưng <i class=\"clr-orange\">Thane</i> không bao giờ từ bỏ, anh dẫn dắt đoàn quân đi qua thời kì đen tối, bám lấy dù chỉ là một hi vọng nhỏ nhoi nhất.<br>Ngày mà <i class=\"clr-orange\">Thane</i> lên ngội, anh nhận được sự kính trọng từ mọi người. Mặc dù vẫn còn những hoài nghi đâu đó trong Lâu Đài, người ta vẫn tin rằng <i class=\"clr-orange\">Thane</i> sẽ là người dẫn dắt họ đến một tương lai tươi sáng và bình an.<br>Đó là lý do mà Valhein, Thợ săn ác quỷ mang người của mình tới và hội ngộ cùng <i class=\"clr-orange\">Thane</i>.<br>Đó là lý do tại sao Astrid, Nữ Võ Thần, vì danh dự của cả gia tộc, giúp đỡ <i class=\"clr-orange\">Thane</i> trở thành vua.<br>Đó là lý do tại sao Raz, Quyền Vương, hi sinh bản thân trở thành gián điệp và ngấm ngầm thực hiện một cuộc tấn công ngay giữa lòng địch.<br>Những chiến binh ngừng đấu đá nhau và cùng tụ họp lại dưới quyền của <i class=\"clr-orange\">Thane</i>, kết hợp sức mạnh để tạo nên một quân đoàn, viết nên lịch sử và đẩy những con quỷ trở lại địa ngục. Khi những con thú hoang học được các tự chủ, những vị thần cũng phải sợ hãi.<br>Đối diện với mọi thứ, <i class=\"clr-orange\">Thane</i> giữ cho mình một cái đầu lạnh, bởi vì khi mà chiếc tù và chiến tranh được thổi, <i class=\"clr-orange\">Thane</i> sẽ lãnh đạo cuộc chiến này.<br>\"Với thanh gươm này, Ta sẽ thanh tẩy mọi tà ác khỏi thế giới!\"",
		"hero_skin": [
			{
				"name": "Thanh Gươm Anh Dũng",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Thane01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Thane01",
			},
			{
				"name": "Quang Vinh",
				"gold": "",
				"voucher": "",
				"event": "S2 Thưởng Hạng",
				"wall": "Thane02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "Thane02",
			},
			{
				"name": "Mật Vụ (Bậc S)",
				"gold": "",
				"voucher": "379",
				"event": "",
				"wall": "Thane03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "Thane03",
			},
		]
	},
	"veera": {
		"hero_id": "Veera",
		"hero_name": "Veera",
		"main_info": {
			"price_gold": "",
			"price_voucher": "",
			"price_text": "Có thể mua bằng Ruby",
			"position": "Pháp sư",
			"special": "Tiền vệ",
			"lane": "Đường giữa",
		},
		"main_skill": [
			{
				"name": "Mê hoặc",
				"info": "Nội tại: Chiêu thức trúng đích của Veera khiến nạn nhân bị giảm giáp phép, tối đa 3 lần cộng dồn, mỗi lần giảm 30-72 giáp phép (tăng theo cấp tướng).",
			},
			{
				"name": "Dơi địa ngục",
				"info": "ST Gốc: 575/625/675/725/775/825<br>H.Chiêu: 8/7.7/7.4/7.1/6.8/6.5<br>N.Lượng: 70<br>Veera triệu hồi bầy dơi địa ngục bay đi tấn công những kẻ địch theo hướng chỉ định, gây ra 575 (+1.15 công phép) STP."
			},
			{
				"name": "Hôn gió",
				"info": "ST Gốc: 285/320/355/390/425/460<br>H.Chiêu: 10/9.4/8.8/8.2/7.6/7<br>Veera quyến rũ 1 mục tiêu bằng nụ hôn chết người, gây 285 (+0) STP và làm choáng nạn nhân trong 1,5s.",
			},
			{
				"name": "Tiểu quỷ",
				"info": "ST Gốc: 325/405/485<br>H.Chiêu: 18/15/12<br>Veera triệu hồi tối đa 5 tiểu quỷ tấn công những kẻ địch lân cận. Mỗi tiểu quỷ gây 325 (+0) STP, nếu tấn công cùng mục tiêu sẽ khiến tiểu quỷ thứ 2 trở đi chỉ còn gây 50% sát thương.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,4,2,0",
			}
		],
		"skill_note": "*Hôn gió là chiêu thức khá độc đáo và là chiêu bắt lẻ khá tốt, một combo đủ cả 3 chiêu thức, đối thủ cũng khó mà sống sót.",
		"skill_special": "TocBien,CapCuu",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim22",
					"info": "Công phép +1.4<br>Hút máu phép +0.8%<br>Giáp phép +1.6",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim33",
					"info": "Máu tối đa +45<br>Hồi máu/5s +5.2<br>Tốc chạy +0.4%",
				},
				{
					"name": "NgocXanh33",
					"info": "Công phép +2.4<br>Giảm hồi chiêu +0.7%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường giữa",
				"info": "NgocDaiPhapSu,GiayThuatSi,VuongMiengHecate,TruongBungNo,QuyenTruongRhea,TruongHonMang",
			},
			{
				"name": "Đường giữa",
				"info": "NgocDaiPhapSu,GiayPhuThuy,VuongMiengHecate,TruongBungNo,MatNaBerith,SachThanh",
			},
			{
				"name": "Đường giữa",
				"info": "NgocDaiPhapSu,GiayHermes,VuongMiengHecate,MatNaBerith,QuyenTruongRhea,GuomHienTriet",
			},
			{
				"name": "Game thủ hay lên",
				"info": "GiayPhuThuy,TruongBungNo,MatNaBerith,VuongMiengHecate,TruongHonMang,SachThanh"
			}
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp đi cùng các tướng bảo kê",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "teemee", "id_page": "TeeMee"},
					{"hero_id": "toro", "id_page": "Toro"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp các tướng sau",
				"info": [
					{"hero_id": "murad", "id_page": "Murad"},
					{"hero_id": "kahlii", "id_page": "Kahlii"},
					{"hero_id": "zill", "id_page": "Zill"},
					{"hero_id": "lauriel", "id_page": "Lauriel"},
				]
			}
		],
		"hero_story": "\"Ta là <i class=\"clr-orange\">Veera</i>, Nữ Hoàng Bóng Đêm\"<br>Theo cổ thư ghi lại, <i class=\"clr-orange\">Veera</i> là Đại Tông Đồ mộ đạo và quyền lực nhất của các Đấng Toàn Năng. Ả ta càng cầu nguyện và tìm kiếm sự thông tuệ của họ, họ càng giữ im lặng. Vì nôn nóng muốn chứng tỏ bản lĩnh, ả ta quyết một mình tấn công Toán Cai Ngục. Ả chắc chắn sẽ nhận được vinh quang trong mắt các Đấng Toàn Năng khi triệt hạ được Toán Cai NGục, nhưng cũng chính sự ngạo mạn của ả làm cho các Đấng Toàn Năng thấy kinh tởm.<br>Mặc dù rất anh dũng trên chiến trường, ả vẫn bị địch tóm gọn. Không cần phải bàn tới những đòn roi ả phải hứng chịu. Điều quan trọng nhất là trong đôi mắt trong trẻo từng hướng về thiên đường để tìm chân lý, nay chỉ còn máu và những ngọn lửa tăm tối. Maloch, thủ lĩnh của Toán Cai Ngục, tự tay mình thực hiện những trận tra tấn với <i class=\"clr-orange\">Veera</i>. Và từ đó giữa 2 bên đã hình thành một mối quan hệ tăm tối khác.<br>Từ đó, ả luôn ở bên cạnh hắn ta, chỉ huỷ quân lính Maloc và tiêu diệt tất cả những kẻ thù của hắn ta. Nhưng ả luôn thích tiếp cận một cách âm thầm. Bằng sự mưu mô và nét quyết rũ của mình để hạ gục cả những kẻ hùng mạnh nhất. Trên bia mộ của những kẻ ngã xuống luôn ghi cùng một lời răn dằn, nếu gặp ả phải che tai lại để không nghe những lời dụ dỗ của ả để đi đến vinh quang.<br>Vì con đường tới đó không hơn gì đi vào chỗ chết. Nữ hoàng bóng đêm luôn bình tĩnh. Ả biết rõ mình sẽ đạt được mục đích. Và ả sẽ là luôn là kẻ cuối cùng còn sống. Ả cũng luôn mơ, mơ một ngày sẽ được tắm mình trong máu của những Đấng Toàn Năng, và cho họ nhìn thấu được nỗi đau của mình.",
		"hero_skin": [
			{
				"name": "Nữ Hoàng Bóng Đêm",
				"gold": "",
				"voucher": "",
				"event": "Có thể mua bằng Ruby",
				"wall": "Veera01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Cô Giáo Hắc Ám (Bậc S)",
				"gold": "",
				"voucher": "510",
				"event": "",
				"wall": "Veera02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "Veera02",
			},
			{
				"name": "Nàng Dơi Tuyết",
				"gold": "",
				"voucher": "",
				"event": "Mở bán: Giáng Sinh",
				"wall": "Veera03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "Veera03",
			},
			{
				"name": "Y Tá Bạo Loạn (Bậc A)",
				"gold": "",
				"voucher": "309",
				"event": "",
				"wall": "Veera04",
				"disable": "yes",
				"img": "thumb4.jpg",
				"video": "Veera04",
			},
		]
	},
	"lu_bo": {
		"hero_id": "LuBo",
		"hero_name": "Lữ Bố",
		"main_info": {
			"price_gold": "",
			"price_voucher": "",
			"price_text": "Quà nạp lần đầu",
			"position": "Đấu sĩ",
			"special": "Hút máu",
			"lane": "Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Chúa tể",
				"info": "Nội tại: Giảm 1s hồi chiêu của Phương thiên họa kích bất cứ khi nào Lữ bố đánh trúng mục tiêu bằng chiêu thức này hay đòn đánh thường.",
			},
			{
				"name": "Xích thố",
				"info": "ST Gốc: 160/185/210/235/260/285<br>H.Chiêu: 10/9.4/8.8/8.2/7.6/7<br>Khoảng cách lướt đi mỗi lần：3m<br>Khống chế Hất：Hất 0.7s<br>Lữ Bố lướt đi tấn côn kẻ địch (trúng tướng sẽ dừng lại), gây 160 (+146) STVL. Chiêu thức này có thể được sử dụng 3 lần liên tiếp, đặc biệt đòn thứ 3 sẽ hất tung nạn nhân."
			},
			{
				"name": "Phương thiên họa kích",
				"info": "ST Gốc: 240/300/360/420/480/540<br>H.Chiêu: 12/11/10/9/8/7<br>Lữ bố phóng ra sóng xung kích bằng vũ khí gây 240 (+156) STVL, và làm chậm 50% tốc chạy của các nạn nhân trúng chiêu trong 2s.",
			},
			{
				"name": "Chiến Thần",
				"info": "ST thêm: 100/150/200<br>Hồi máu: 120/180/240<br>Lữ Bố cường hoá Phương thiên họa kích, giúp tăng công vật lý 100, 20% kháng hiệu ứng, đồng thời khiến mọi chiêu hoặc đòn đánh của bản thân hồi phục 120 (+0.40 công vật lý) máu trong 8s.",
			}
		],
		"skill_up": {
			"line1": "1,3,6,9,13,14",
			"line2": "2,5,7,10,11,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,0,2,0,2,0,3",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "4,2,3,0,2,0,2,0",
			}
		],
		"skill_note": "*Chiêu 1 có thể dùng 3 lần tha hồ mà quẩy.<br>*Chiến Thần bật lên thì không phải ngán một ai cả!!",
		"skill_special": "BocPha,TrungTri",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim23",
					"info": "Công vật lý +0.6<br>Máu tối đa +36",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo37",
					"info": "Tốc đánh +1%<br>Máu tối đa +33.7<br>Giáp +2.3",
				},
				{
					"name": "NgocTim31",
					"info": "Công vật lý +1.6<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh34",
					"info": "Máu tối đa +37.5<br>Giảm hồi chiêu +0.6%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường Caesar (mang trừng trị)",
				"info": "KiemTruyHon,GiayKienCuong,AoChoangThanRa,PhucHopKiem,HuanChuongTroy,GiapHoMenh",
			},
			{
				"name": "Đường Caesar",
				"info": "AoChoangThanRa,GiayKienCuong,ThuongXuyenPha,AoChoangBangGia,HuanChuongTroy,KiemFafnir",
			},
			{
				"name": "Pro lên đồ",
				"info": "ThuongLonginus,GiayKienCuong,AoChoangBangGia,KiemFafnir,HuanChuongTroy,GiapHoMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp đi cùng các tướng bảo kê",
				"info": [
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "chaugnar", "id_page": "Chaugnar"},
					{"hero_id": "alice", "id_page": "Alice"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp các tướng sau",
				"info": [
					{"hero_id": "ormarr", "id_page": "Ormarr"},
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "aleister", "id_page": "Aleister"},
				]
			}
		],
		"hero_story": "\"Chịu thua? Sao các ngươi dám chịu thua!\"<br>Cưỡi trên lưng chiến mã Xích Thố kiêu hùng, <i class=\"clr-orange\">Lữ Bố</i> nhìn xuống những kẻ địch đang run rẩy vì sợ hãi mà không kìm nối cơn giận giữ của mình. Chiến thắng như vậy thật chẳng còn ý nghĩa gì cả, <i class=\"clr-orange\">Lữ Bố</i> nghĩ trong đầu. <i class=\"clr-orange\">Lữ Bố</i> được mệnh danh là “Vô Địch Chiến Thần” nhờ vào khả năng chiến đấu phi thường của bản thân. <i class=\"clr-orange\">Lữ Bố</i> bắt đầu nhớ lại trận chiến với Lưu Bị, Quan Vũ và Trương Phi ở Hổ Lao quan.<br>Thật bất công khi đấu ba người cùng lúc, nhưng <i class=\"clr-orange\">Lữ Bố</i> đã quen với kiểu này. Bởi không người thường nào có thể đấu ngang cơ với <i class=\"clr-orange\">Lữ Bố</i> trong một trận chiến tay đôi cả. \"Nói ta nghe xem, ta có phải chiến binh mạnh nhất thế gian không?\", <i class=\"clr-orange\">Lữ Bố</i> hỏi Điêu Thuyền. Điêu Thuyền mỉm cười ngọt ngào và rút một cuộn giấy ra từ tay áo.<br>\"Ở thế gian này có lẽ không ai đáng để đối đầu. Nhưng trên thượng giới thì sao? Chàng có muốn đấu với họ không?\"<br>\"Thượng giới?! Đúng thế!\" <i class=\"clr-orange\">Lữ Bố</i> không thể giấu sự phấn khích trong đôi mắt.",
		"hero_skin": [
			{
				"name": "Chiến Thần",
				"gold": "",
				"voucher": "",
				"event": "Quà nạp lần đầu",
				"wall": "LuBo01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "LuBo01",
			},
			{
				"name": "Long Kỵ Sĩ (Bậc S)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "LuBo02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "LuBo02",
			},
			{
				"name": "Kỵ Sĩ Âm Phủ",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "LuBo03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "LuBo03",
			},
			{
				"name": "Đặc Nhiệm SWAT (Bậc A)",
				"gold": "",
				"voucher": "349",
				"event": "",
				"wall": "LuBo04",
				"disable": "",
				"img": "thumb4.jpg",
				"video": "LuBo04",
			},
			{
				"name": "Tiệc Bãi Biển (Bậc SS)",
				"gold": "",
				"voucher": "499",
				"event": "",
				"wall": "LuBo05",
				"disable": "",
				"img": "thumb5.jpg",
				"video": "LuBo05",
			},
			{
				"name": "Nam Vương (Bậc S)",
				"gold": "",
				"voucher": "379",
				"event": "",
				"wall": "LuBo06",
				"disable": "",
				"img": "thumb6.jpg",
				"video": "LuBo06",
			},
		]
	},
	"mina": {
		"hero_id": "Mina",
		"hero_name": "Mina",
		"main_info": {
			"price_gold": "2,888",
			"price_voucher": "259",
			"price_text": "",
			"position": "Đỡ đòn",
			"special": "Khống chế",
			"lane": "Đường rồng",
		},
		"main_skill": [
			{
				"name": "Lưỡi hái phục hận",
				"info": "Nội tại: Mina có tỷ lệ xoay lưỡi hái mỗi khi gánh chiệu sát thương, gây 50 (+158) (+70) (2% máu tối đa của bản thân) STVL lên những kẻ địch lân cận.",
			},
			{
				"name": "Vũ điệu lưỡi hái",
				"info": "ST Gốc: 125/150/175/200/225/250<br>H.Chiêu: 8/7.4/6.8/6.2/5.6/5<br>Mina xoay lưỡi hái gây 125 (+189) (+70) (2% máu tối đa của bản thân) STVL lên những kẻ địch lân cận."
			},
			{
				"name": "Lưỡi hái tử thần",
				"info": "ST Gốc: 150/185/220/255/290/325<br>H.Chiêu: 12/11.4/10.8/10.2/9.6/9<br>Mina vung lưỡi hái kéo các kẻ địch lại gần, gây 150 (+110) STVL và làm chậm 50% tốc chạy của nạn nhân trong 2s.",
			},
			{
				"name": "Ma lực bóng tối",
				"info": "H.Chiêu: 24/20/16<br>Mina thôi miên những kẻ địch lân cận, khiến chúng buộc phải tập trung tấn công cô trong 2s. Suốt thời gian này những nạn nhân bị thôi miên chỉ gây 50% sát thương lên Mina.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,4,2,0",
			}
		],
		"skill_note": "*Làm tốt combo Mina khiến đối thủ phải quay lưng bỏ chạy.<br>*Bật Ma Lực Bóng Tối khiến tất cả mọi đối thủ phải tập trung vào cô và thế là đồng đội mình cứ xả thoải mái thôi!!",
		"skill_special": "TocBien,CapCuu,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim24",
					"info": "Máu tối đa +36<br>Giáp +1.6",
				},
				{
					"name": "NgocXanh22",
					"info": "Máu tối đa +15.7<br>Hồi máu/5s +3.1<br>Giảm hồi chiêu +0.3%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo37",
					"info": "Tốc đánh +1%<br>Máu tối đa +33.7<br>Giáp +2.3",
				},
				{
					"name": "NgocTim33",
					"info": "Máu tối đa +45<br>Hồi máu/5s +5.2<br>Tốc chạy +0.4%",
				},
				{
					"name": "NgocXanh38",
					"info": "Giáp +9",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường rồng",
				"info": "LenhBaiPhongThan,GiayKienCuong,GiapGaia,GiapThongKho,KhienThatTruyen,PhuChuTruongSinh",
			},
			{
				"name": "Đường đơn",
				"info": "AoChoangThanRa,GiayHoVe,RiuHyoga,PhucHopKiem,GiapThongKho,ThuongLonginus",
			},
			{
				"name": "Đường đơn",
				"info": "AoChoangThanRa,GiayHermes,GiapThongKho,AoChoangBangGia,HuanChuongTroy,PhuChuTruongSinh"
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp đi cùng các tướng bảo kê",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "ormarr", "id_page": "Ormarr"},
					{"hero_id": "natalya", "id_page": "Natalya"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp các tướng sau",
				"info": [
					{"hero_id": "ormarr", "id_page": "Ormarr"},
					{"hero_id": "chaugnar", "id_page": "Chaugnar"},
				]
			}
		],
		"hero_story": "\"Ngươi nên đến xem ta diễn, sẽ rất đáng sợ đấy.\"<br>Nhìn vào lọ thuộc trên tay gã đàn ông mặc áo blouse trắng, <i class=\"clr-orange\">Mina</i> gắng chút sức tàn để thoát khỏi chiếc dây thừng. Nhưng càng cố giãy, sợ dây càng siết chặt cánh tay gầy guộc của cô. Đói lả sau nhiều ngày nhịn ăn, hơi thở của <i class=\"clr-orange\">Mina</i> ngày một yếu dần. Cô buông xuôi tất cả. Gã đàn ông bắt đầu chậm rãi tiến đến gần, khẽ nâng cổ <i class=\"clr-orange\">Mina</i> như một nhà sưu tầm đồ cổ nâng niu món đồ của mình vậy. Nhanh tay tiêm thứ huyết thanh kì lạ lên cổ cô, rồi nhanh chóng rút ra. Thứ huyết thanh đó chảy qua huyết quản, len lỏi qua từng milimet cơ thể của <i class=\"clr-orange\">Mina</i>. Cô cảm nhận được nó nhưng không còn chút sức lực nào để chống lại.<br>Cứ từng chút, từng chút một, thứ huyết thanh đó dần gặm nhấm tâm trí của cô thật giống phong cách của một gã nhà giàu đang dùng điểm tâm vậy. Gã đàn ông nhìn <i class=\"clr-orange\">Mina</i> một cách khoan khoái, hắn biết chuyện đã tiến triển ngoài cả dự liệu của mình.<br>\"Chờ chút đi, cô làm được mà… Chỉ một hai ngày nữa thôi, cô sẽ trở thành tạo vật tuyệt vời nhất trên thế giới này\".<br>Nói xong, gã quay lưng rời khỏi phòng mà không nhận ra rằng dây trói đã được tháo bỏ từ lúc nào không hay.<br>\"Vậy… câu trả lời đúng là gì?\"<br>Thứ âm thanh vang vọng này làm ớn lạnh bất kì ai. Chưa kịp định thần, gã đã bị ghim chặt xuống sàn, và thét lên.<br>\"Làm thế nào mà cô… không, KHÔNG, LÀM ƠN! Làm ơn… đừng!\"<br>Tiếng thét của gã xé tan màn đêm tĩnh lặng. Căn phòng đó, công xưởng bỏ hoang đó tất cả sau đó bị thiêu rụi hoàn toàn… tất cả bí mật nó nắm giữ sẽ mãi nằm đó. Còn <i class=\"clr-orange\">Mina</i> ở đâu, làm gì, không ai biết. Sự biến mất của cô bí ẩn giống như nó đã từng xuất hiện vậy.<br>\"Chỉ có kẻ sống mới sợ cái chết\"",
		"hero_skin": [
			{
				"name": "Nữ Hoàng Lưỡi Hái",
				"gold": "2,888",
				"voucher": "259",
				"event": "",
				"wall": "Mina01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Mina01",
			},
			{
				"name": "Tiểu Thư Đoạt Hồn (Tân Xuân)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Mina02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "Mina02",
			},
			{
				"name": "Tiệc Bánh Kẹo",
				"gold": "",
				"voucher": "309",
				"event": "",
				"wall": "Mina03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "Mina03",
			},
			{
				"name": "Kẹo Hay Ghẹo (Halloween)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Mina04",
				"disable": "",
				"img": "thumb4.jpg",
				"video": "",
			},
		]
	},
	"krixi": {
		"hero_id": "Krixi",
		"hero_name": "Krixi",
		"main_info": {
			"price_gold": "2,888",
			"price_voucher": "259",
			"price_text": "",
			"position": "Pháp sư",
			"special": "Cấu rỉa",
			"lane": "Đường giữa",
		},
		"main_skill": [
			{
				"name": "Tung cánh",
				"info": "Nội tại: Khi tung kĩ năng trúng đích, tốc chạy của cô sẽ được tăng 25% trong 2s.",
			},
			{
				"name": "Bướm ảo",
				"info": "ST Gốc: 450/550/650/750/850/950<br>H.Chiêu: 6/5.8/5.6/5.4/5.2/5<br>Krixi tung ra một ảnh ảo bươm bướm gây 450 (+0.8 công phép) STP. Mỗi đơn vị trúng đích sẽ giảm 20% sát thương lên các đơn vị sau đó, tối đa giảm 40%."
			},
			{
				"name": "Bão lá",
				"info": "ST Gốc: 260/292/324/356/388/420<br>H.Chiêu: 13/12/11/10/9/8<br>Phạm vi: 7m<br>Krixi triệu hồi bão lá hất tung những kẻ địch trúng chiêu và gây 260 (+0) STP.",
			},
			{
				"name": "Mưa sao băng",
				"info": "ST Gốc: 275/350/425<br>H.Chiêu: 42/37/32<br>Krixi có thể triệu tập Mưa Sao Băng ngay cả khi không có mục tiêu xung quanh và tăng 15% tốc độ di chuyển trong suốt thời gian sử dụng chiêu.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,2,4,0,2",
			}
		],
		"skill_note": "*Cứ việc thả chiêu vào đối phương cô được tăng tốc độ chạy đáng kể.<br>*Combo tốt sẽ mang lại cho cô nàng dồi dào sát thương.",
		"skill_special": "TocHanh,TocBien",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim22",
					"info": "Công phép +1.4<br>Hút máu phép +0.8%<br>Giáp phép +1.6",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim32",
					"info": "Tốc đánh +1%<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh310",
					"info": "Tốc đánh +0.6%<br>Xuyên giáp phép +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường giữa",
				"info": "NgocDaiPhapSu,GiayPhuThuy,VuongMiengHecate,TruongBang,TruongHonMang,SachThanh",
			},
			{
				"name": "Đường giữa",
				"info": "NgocDaiPhapSu,GiayHoVe,VuongMiengHecate,QuyenTruongRhea,TruongHonMang,SachThanh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "NgocDaiPhapSu,GiayPhuThuy,VuongMiengHecate,ThapTuKiem,SachThanh,GiapHoMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp đi cùng các tướng bảo kê",
				"info": [
					{"hero_id": "gildur", "id_page": "Gildur"},
					{"hero_id": "toro", "id_page": "Toro"},
					{"hero_id": "yorn", "id_page": "Yorn"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp các tướng sau",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
				]
			}
		],
		"hero_story": "\"Những nàng tiên của khu rừng là sứ giả của đấng tạo hóa\"<br>Thoạt nhìn, <i class=\"clr-orange\">Krixi</i> thật giống với những nàng tiên xinh đẹp hay nhảy múa trong rừng hoa hay vui đùa với muông thú. Nhưng khi nguy hiểm gần kề, <i class=\"clr-orange\">Krixi</i> sẽ trở nên hung bạo hơn bao giờ hết. Cô sẽ dùng hết sức bình sinh để trừng phạt bất kì kẻ nào có ý định xâm phạm, làm tổn hại đến khu rừng của mình. Điều làm thay đổi trái tim của <i class=\"clr-orange\">Krixi</i> đến từ việc một người cô từng coi là bạn đã phản bội cô, cấu kết với loài người để tàn phá và khai thác tài nguyên khu rừng.<br>Không chịu khuất phục trước sự bạo ngược ấy, <i class=\"clr-orange\">Krixi</i> đã tập hợp một đội quân, triệu hồi linh vật để bảo vệ rừng già. Một cuộc chiến khốc liệt đã diễn ra, trước tinh thần quả cảm của mình, đội quân của <i class=\"clr-orange\">Krixi</i> đã đánh lùi được cuộc xâm lăng của loài người, buộc họ phải kí vào hiệp ước Hòa Bình. Kể từ đó, rừng già nhanh chóng trở lại trạng thái yên bình, thanh nhã vốn có của mình, nhưng <i class=\"clr-orange\">Krixi</i> biết rằng tham vọng của nhưng kẻ xâm lược vẫn còn đó.<br>Để ngăn chuyện đó diễn ra trong tương lai, cô bắt đầu đào tạo những sinh vật hoang dã trở nên mạnh mẽ và đủ khả năng chống lại mọi cuộc tấn công của loài người.<br>\"Chiến tranh không có mục đích nào khác hơn là tàn phá cuộc sống!\"",
		"hero_skin": [
			{
				"name": "Tinh Linh Thiên Nhiên",
				"gold": "2,888",
				"voucher": "259",
				"event": "",
				"wall": "Krixi01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Krixi01",
			},
			{
				"name": "Công Chúa Bướm (Bậc A)",
				"gold": "",
				"voucher": "375",
				"event": "",
				"wall": "Krixi02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "Krixi02",
			},
			{
				"name": "Xứ Sở Thần Tiên (Bậc S)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Krixi03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "Krixi03",
			},
			{
				"name": "Tiệc Bãi Biển (Bậc SS)",
				"gold": "",
				"voucher": "499",
				"event": "",
				"wall": "Krixi04",
				"disable": "yes",
				"img": "thumb4.jpg",
				"video": "Krixi04",
			},
			{
				"name": "Cô Tiên Thỏ (Bậc S)",
				"gold": "",
				"voucher": "429",
				"event": "",
				"wall": "Krixi05",
				"disable": "",
				"img": "thumb5.jpg",
				"video": "Krixi05",
			},
			{
				"name": "Phó Văn Nghệ",
				"gold": "",
				"voucher": "",
				"event": "Từ Sổ sứ mệnh 3",
				"wall": "Krixi06",
				"disable": "",
				"img": "thumb6.jpg",
				"video": "Krixi06",
			},
		]
	},
	"mganga": {
		"hero_id": "Mganga",
		"hero_name": "Mganga",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Pháp sư / Trợ Thủ",
			"special": "Cấu rỉa / Khôi phục",
			"lane": "Đường giữa",
		},
		"main_skill": [
			{
				"name": "Tà thuật",
				"info": "Nội tại: Các đòn đánh thường và chiêu thức đều kèm theo hiệu ứng độc, gây 25 (+0) STP và cộng dồn 1 ấn tà thuật, tối đa 5 ấn.",
			},
			{
				"name": "Độc khí",
				"info": "ST Gốc: 60/66/72/78/84/90<br>H.Chiêu: 12/11.4/10.8/10.2/9.6/9<br>Mganga tạo ra 1 vùng khói độc tại vùng chỉ định trong 4s. Làn khói này dần lan rộng ra và gây 60 (+0.16 công phép) STP, kèm hiệu ứng làm chậm 30% tốc chạy của các nạn nhân tại vùng ảnh hưởng trong 2s, chiêu thức có thể tích trữ tối đa 2 lần, thời gian nạp đạn giữa 2 điểm tích lũy là 2s."
			},
			{
				"name": "Độc tố",
				"info": "ST Gốc: 90/103/116/129/142/155<br>Mganga phóng độc theo hướng chỉ định gây 90 (+0) STP lên những kẻ địch trúng chiêu. Nếu mục tiêu là tướng đồng minh, họ sẽ được yểm dấu ấn giúp hồi máu.",
			},
			{
				"name": "Độc dược",
				"info": "ST Gốc: 120/180/240<br>H.Chiêu: 18/15/12<br>Mganga kích nổ tất cả Ấn tà thuật lân cận, gây 120 (+0) STP lên các nạn nhân, và hồi 120 (+0) máu cho tướng đồng minh, mỗi dấu ấn cộng dồn gây thêm 120 (+0) STP và tăng 50% hiệu lực hồi phục.",
			}
		],
		"skill_up": {
			"line1": "1,3,6,9,11,14",
			"line2": "2,5,7,10,13,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,0,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng (đủ 5 dấu ấn thì dùng chiêu cuối)",
				"info": "2,0,3,0,4",
			},
		],
		"skill_note": "*Hãy nhớ đủ 5 điểm Nội tại rồi dùng Chiêu cuối cho hiệu quả nhất.",
		"skill_special": "TocBien,CapCuu,TocHanh",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim22",
					"info": "Công phép +1.4<br>Hút máu phép +0.8%<br>Giáp phép +1.6",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim32",
					"info": "Tốc đánh +1%<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh310",
					"info": "Tốc đánh +0.6%<br>Xuyên giáp phép +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường giữa (xong món cuối có thể bán Phượng hoàng lệ mua món khác tùy trận đấu)",
				"info": "PhuongHoangLe,GiayKienCuong,TruongBang,MatNaBerith,VuongMiengHecate,TruongBungNo",
			},
			{
				"name": "Đường giữa (như trên)",
				"info": "PhuongHoangLe,GiayHermes,TruongBang,AoChoangBangGia,VuongMiengHecate,SachTruyHon",
			}
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp đi cùng các tướng bảo kê",
				"info": [
					{"hero_id": "toro", "id_page": "Toro"},
					{"hero_id": "butterfly", "id_page": "Butterfly"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp các tướng sau",
				"info": [
					{"hero_id": "krixi", "id_page": "Krixi"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "zephys", "id_page": "Zephys"},
				]
			}
		],
		"hero_story": "\"Quyền lực là thứ duy nhất đáng để theo đuổi.\"<br>Sự khát khao quyền lực đã khiến <i class=\"clr-orange\">Mganga</i> đi theo con đường ma thuật hắc ám. Trước khi bộ tộc của hắn được thành lập, <i class=\"clr-orange\">Mganga</i> đã lên kế hoạch thu thập những con thú mạnh nhất để đổi chúng lấy nguồn ma thuật hắc ám từ lũ quỷ. Kế hoạch của hắn nhanh chóng bị các thầy tu phát giác và ngăn chặn. Khắc sâu mối thù này vào trong tim, <i class=\"clr-orange\">Mganga</i> tìm cách tiêu diệt từng người, từng người một trong hội đồng các thầy tu. Hắn sát hại họ một cách dã man.<br>Trước sự tàn ác của <i class=\"clr-orange\">Mganga</i>, người dân lúc nào cũng cảm giác bất an, ám ảnh và sợ hãi. Cho đến khi sự điên rồ, vô nhân đạo vượt ngoài sự chịu đựng đã buộc dân chúng cùng đoàn kết lại, đứng lên chống lại hắn. Bị bao vây, nhưng nhờ vào khả sự khôn ranh của mình, hắn vẫn trốn được vào Khu rừng Chết chóc. Ẩn mình trong khu đầm lầy bao quanh là rất nhiều loài rắn độc, hắn tiếp tục nghiên cứu về ma thuật đen.<br>Dưới sự trợ giúp của thế lực hắc ám, <i class=\"clr-orange\">Mganga</i> giờ đây thông thạo ma thuật hắc ám hơn bao giờ hết.<br>\"Kẻ yếu chỉ có thể thu mình lại trước quyền lực, trong khi kẻ mạnh dùng nó để thống trị.\"",
		"hero_skin": [
			{
				"name": "Tên Hề Ma Quái",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Mganga01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Mganga01",
			},
			{
				"name": "Hề Cung Đình (Bậc A)",
				"gold": "",
				"voucher": "450",
				"event": "",
				"wall": "Mganga02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "Mganga02",
			},
			{
				"name": "Tiệc Bánh Kẹo (Bậc A)",
				"gold": "",
				"voucher": "309",
				"event": "",
				"wall": "Mganga02",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "Mganga03",
			},
		]
	},
	"trieu_van": {
		"hero_id": "TrieuVan",
		"hero_name": "Triệu Vân",
		"main_info": {
			"price_gold": "",
			"price_voucher": "",
			"price_text": "tướng miễn phí",
			"position": "Đấu sĩ",
			"special": "Trung phong",
			"lane": "Đi rừng / Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Long tướng",
				"info": "Nội tại: Hạ hoặc phụ giúp hồi 5% máu tối đa đồng thời nhận một bùa lợi tăng 12 CVL (tối đa 20 điểm).",
			},
			{
				"name": "Long huyết",
				"info": "ST Gốc: 200/225/250/275/300/325<br>H.Chiêu: 9/8.6/8.2/7.8/7.4/7<br>Triệu Vân cường hoá bản thân giúp loại bỏ mọi trạng thái bất lợi đang gánh chịu, đồng thời tăng 80% tốc chạy trong 1,5s. Đòn đánh thường kế tiếp sẽ được cường hóa, gây thêm 200 STVT lên những kẻ địch lân cận và làm chậm 50% tốc chạy của chúng trong 2,5s."
			},
			{
				"name": "Long hống",
				"info": "H.Chiêu: 8/7.7/7.4/7.1/6.8/6.5 giây<br>Triệu Vân quét thương, gây sát thương vật lý lên những kẻ địch lân cận, đồng thời giúp tăng cho bản thân 100/120/140/160/180/200% tốc đánh và thêm khả năng hút máu vật lý：10/12/14/16/18/20% trong 3 giây.",
			},
			{
				"name": "Long kích",
				"info": "H.Chiêu: 24/22/20 giây<br>Triệu Vân nện thương lên mục tiêu, gây 300/375/450 (+1.4 Công vật lý) sát thương chuẩn kèm hiệu ứng hất văng thoáng chốc. Ngoài ra Triệu Vân còn tự cường hóa giúp các đòn đánh thường gây thêm 70/110/150 (+0.35 công vật lý) sát thương chuẩn. Hiệu ứng kéo dài 5 giây.",
			}
		],
		"skill_up": {
			"line1": "2,3,5,7,9,11",
			"line2": "1,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "4,3,2,0",
			}
		],
		"skill_note": "*Có thể giải các hiệu ứng khống chế bằng Long huyết",
		"skill_special": "TrungTri,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo26",
					"info": "Công vật lý +1.5<br>Tốc đánh +0.4%",
				},
				{
					"name": "NgocTim23",
					"info": "Công vật lý +0.6<br>Máu tối đa +36",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo37",
					"info": "Tốc đánh +1%<br>Máu tối đa +33.7<br>Giáp +2.3",
				},
				{
					"name": "NgocTim31",
					"info": "Công vật lý +1.6<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh34",
					"info": "Máu tối đa +37.5<br>Giảm hồi chiêu +0.6%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đi rừng",
				"info": "RiuLeviathan,GiayKienCuong,ThuongLonginus,AoChoangBangGia,HuanChuongTroy,KiemFafnir",
			},
			{
				"name": "Đi rừng (thay thế)",
				"info": "KiemTruyHon,GiayKienCuong,PhucHopKiem,RiuHyoga,GiapGaia,GiapHoMenh",
			},
			{
				"name": "Đường Caesar",
				"info": "AoChoangThanRa,GiayHoVe,GiapThongKho,RiuHyoga,GiapGaia,NanhFenrir",
			},
			{
				"name": "Game thủ hay lên",
				"info": "AoChoangThanRa,GiayHoVe,PhucHopKiem,HuanChuongTroy,KhienThatTruyen,GiapHoMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp đi cùng các tướng bảo kê",
				"info": [
					{"hero_id": "aleister", "id_page": "Aleister"},
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "maloch", "id_page": "Maloch"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp các tướng sau",
				"info": [
					{"hero_id": "zephys", "id_page": "Zephys"},
					{"hero_id": "lu_bo", "id_page": "LuBo"},
				]
			}
		],
		"hero_story": "Kỵ sĩ Rồng núi Trường Bản mãi được ghi danh nhờ vào điển tích cứu sống Hoàng nhi. <i class=\"clr-orange\">Triệu Vân</i> còn là tướng danh chấn thiên hạ được kính trọng bởi cả Vô Địch Chiến Thần Lữ Bố.<br>\"Thế thương tựa rồng bay, thế tấn tựa rồng cuộn, mỗi mũi thương như ngàn mũi tên xuyên thấu kẻ thù. Chỉ cần thấy ngọn thương của <i class=\"clr-orange\">Triệu Vân</i> cũng đủ làm kẻ địch phải ớn lạnh”<br>Không một ai dám ngông cuồng, coi thường sức mạnh của <i class=\"clr-orange\">Triệu Vân</i>.<br>“Chiến tranh là điều ta không mong muốn”, <i class=\"clr-orange\">Triệu Vân</i> từng nói.<br>Ngay cả đại hiền nhân Gia Cát Lượng cũng không thể giảm bớt đi sự mệt mỏi sau mỗi trận chiến của <i class=\"clr-orange\">Triệu Vân</i>. Điều ông có thể làm là liên tục giao nhiệm vụ để <i class=\"clr-orange\">Triệu Vân</i> bớt đi phần nào ưu phiền về chiến tranh. Lòng trung thành của <i class=\"clr-orange\">Triệu Vân</i> với Hoàng đế được thể hiện ngoài tiền tuyến, và đó chính là nơi <i class=\"clr-orange\">Triệu Vân</i> đáng sợ nhất.<br>\"Ta có thể mệt mỏi vì chiến trận, nhưng ta sẽ luôn chiến đấu khi người khác cần đến”",
		"hero_skin": [
			{
				"name": "Kỵ Sĩ Rồng",
				"gold": "",
				"voucher": "",
				"event": "tướng miễn phí",
				"wall": "TrieuVan01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "TrieuVan01",
			},
			{
				"name": "Đoạt Mệnh Thương",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "TrieuVan02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "TrieuVan02",
			},
			{
				"name": "Quý Công Tử (Bậc S)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "TrieuVan03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "TrieuVan03",
			},
			{
				"name": "Quanh Vinh",
				"gold": "",
				"voucher": "",
				"event": "S4 Thưởng hạng",
				"wall": "TrieuVan04",
				"disable": "yes",
				"img": "thumb4.jpg",
				"video": "TrieuVan04",
			},
			{
				"name": "Dũng Sĩ Đồ Long",
				"gold": "",
				"voucher": "",
				"event": "Mở tại AIC 2017",
				"wall": "TrieuVan05",
				"disable": "yes",
				"img": "thumb5.jpg",
				"video": "TrieuVan05",
			},
		]
	},
	"omega": {
		"hero_id": "Omega",
		"hero_name": "Omega",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Đỡ đòn",
			"special": "Khống chế",
			"lane": "Đường rồng / Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Chế độ phá hoại",
				"info": "Nội tại: Các chiêu thức của Omega gây STC lên công trình.",
			},
			{
				"name": "Chế độ xung phong",
				"info": "H.Chiêu: 12/11/10/9/8/7<br>Sau khi kích hoạt, Omega tạo khiên chắn hấp thụ sát thương và tăng 25/30/35/40/45/50% tốc chạy. Trong 3s tiếp theo đó đòn đánh thường tiếp theo của hắn sẽ gây ra 180/210/240/270/300/330 (+1 công vật lý) sát thương vật lý và hất tung mục tiêu."
			},
			{
				"name": "Chế độ nghiền nát",
				"info": "ST Gốc: 330/370/410/450/490/530<br>Omega tấn công những kẻ địch trước mặt, gây 330 (+249) STVL và làm choáng chúng.<br>Giảm 0.15 giây thời gian tung chiêu.",
			},
			{
				"name": "Chế độ hủy diệt",
				"info": "ST Gốc: 200/275/350<br>H.Chiêu: 30/25/20<br>Omega mở rộng hai cánh tay, liên tục tấn công dữ dội những kẻ thù gần đó và gây sát thương vật lý mỗi lượt, đồng thời mỗi lượt xoay còn có thể tạo ra hiệu ứng đẩy lùi tạm thời lên kẻ địch (vô hiệu với Trụ).",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,10,13",
			"line2": "2,6,9,11,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,4,0",
			}
		],
		"skill_note": "*Hãy núp bụi để tận dụng combo tốt nhất.",
		"skill_special": "CapCuu,CamTru,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim25",
					"info": "Máu tối đa +45",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo37",
					"info": "Tốc đánh +1%<br>Máu tối đa +33.7<br>Giáp +2.3",
				},
				{
					"name": "NgocTim33",
					"info": "Máu tối đa +45<br>Hồi máu/5s +5.2<br>Tốc chạy +0.4%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường trên hoặc dưới",
				"info": "GiayHoVe,GiapGaia,RiuHyoga,ThuongLonginus,HerculeThinhNo,GiapHoMenh",
			},
			{
				"name": "Đường trên hoặc dưới",
				"info": "ThuongLonginus,PhuChuTruongSinh,HuanChuongTroy,GiapGaia,KhienThatTruyen,PhucHopKiem",
			},
			{
				"name": "Game thủ hay lên",
				"info": "GiayKienCuong,AoChoangThanRa,GiapGaia,HuanChuongTroy,KhienThatTruyen,GiapHoMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp đi cùng các tướng bảo kê",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "gildur", "id_page": "Gildur"},
					{"hero_id": "fennik", "id_page": "Fennik"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp các tướng sau",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "ormarr", "id_page": "Ormarr"},
				]
			}
		],
		"hero_story": "\"Chiến tranh hay hòa bình?\"<br><i class=\"clr-orange\">Omega</i> – một bộ giáp có tri giác được trao sức mạnh tối thượng để đập tan mọi loại vũ khí cùng khát khao kết thúc mọi cuộc chiến tranh trên thế giới. Một bộ áo giáp không thể bị phá hủy bởi vũ khí hay sức mạnh phép thuật nào. Khả năng hồi phục của <i class=\"clr-orange\">Omega</i> tuyệt vời đến mức, tất cả đòn đánh từ kẻ địch đều biến mất trước khi đòn đánh thứ 2 chạm đích. <i class=\"clr-orange\">Omega</i> được cả người và thần coi trọng.<br>Nó không thuộc về bất kỳ vị thần hoặc nền văn minh nào, nhưng vẫn sở hữu trí tuệ, hiểu biết, kỷ luật và quyết tâm cho chiến tranh. Có lẽ từng xuất hiện một nền văn minh tiên tiến hơn đã biến mất trong màn sương thời gian. Nguồn gốc của <i class=\"clr-orange\">Omega</i> vẫn còn là một điều bí ấn, nhưng giờ đây các vị thần không còn thời gian cho vấn đề đó, bởi có 1 vấn đề cấp bách hơn cả: <i class=\"clr-orange\">Omega</i> ngày càng hiếu chiến và mạnh hơn qua các cuộc chiến, điều này khiến các vị thần nghi ngờ về truyền thuyết <i class=\"clr-orange\">Omega</i> được tạo ra để dập tắt chiến tranh.<br>\"Bạo lực dưỡng bạo lực, chiến tranh nuôi chiến tranh!\"",
		"hero_skin": [
			{
				"name": "Cỗ Máy Tri Giác",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Omega01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Omega01",
			},
			{
				"name": "Người Máy Xanh (Bậc A)",
				"gold": "",
				"voucher": "270",
				"event": "",
				"wall": "Omega02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "Omega02",
			},
		]
	},
	"kahlii": {
		"hero_id": "Kahlii",
		"hero_name": "Kahlii",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Pháp sư",
			"special": "Cấu rỉa",
			"lane": "Đường giữa",
		},
		"main_skill": [
			{
				"name": "Thấu tâm",
				"info": "Nội tại: Các đòn đánh thường gây hiệu ứng xuyên thấu, gây 50 (+1.0công vật lý) (+0.4công phép) STP lên những kẻ địch theo đường thẳng.",
			},
			{
				"name": "Lời nguyền Vĩnh cửu",
				"info": "ST Gốc: 135/155/175/195/215/235<br>Kahlii tạo ra một vùng đất bị nguyền rủa gây 130 (+0.3 công phép) STP mỗi 0.5s lên tất cả, đồng thời khiến nạn nhân bị làm chậm 15% tốc chạy trong 2s, hiệu ứng cộng dồn tối đa 5 lần, thời gian thi triển kỹ năng là 0.5s."
			},
			{
				"name": "Linh hồn hộ mệnh",
				"info": "Nội tại: Có thể tăng trưởng 25/40/55/70/85/100 điểm công phép và 2/3/4/5/6/7% tốc độ di chuyển<br>Kích hoạt: Tạo một lớp bảo hộ tăng 50/80/110/140/170/200 công phép đồng thời tăng (7/9/11/13/15/17)% tốc chạy trong 60s, có thể xếp chồng nội tại.",
			},
			{
				"name": "Binh đoàn linh hồn",
				"info": "ST Gốc: 70/90/110<br>Kahlii trút giận lên kẻ địch, trong vòng 5s, cô triệu hồi 55 đợt hồn ma liên tục tấn công kẻ địch phía trước, mỗi đợt gây 70 (+0.09 công phép) STP, kỹ năng này gây sát thương lên quái rừng nhiều hơn 10%.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,4,0",
			}
		],
		"skill_note": "*Tận dụng Chiêu cuối để đánh những mục tiêu xa khỏi tầm đánh.",
		"skill_special": "TocHanh,TocBien,CapCuu",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim28",
					"info": "Máu tối đa +13.5<br>Tốc chạy +0.7%",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim32",
					"info": "Tốc đánh +1%<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh310",
					"info": "Tốc đánh +0.6%<br>Xuyên giáp phép +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường giữa",
				"info": "PhuongHoangLe,GiayPhuThuy,TruongBang,VuongMiengHecate,TruongBungNo,TruongHonMang",
			},
			{
				"name": "Đường giữa",
				"info": "NgocDaiPhapSu,GiayHoVe,TruongBang,VuongMiengHecate,MatNaBerith,SachThanh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "NgocDaiPhapSu,GiayThuatSi,MatNaBerith,VuongMiengHecate,TruongHonMang,SachThanh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp đi cùng các tướng bảo kê",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "grakk", "id_page": "Grakk"},
					{"hero_id": "gildur", "id_page": "Gildur"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp các tướng sau",
				"info": [
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "butterfly", "id_page": "Butterfly"},
				]
			}
		],
		"hero_story": "“Ta sẽ trả lại những gì người đã làm với ta gấp mười lần!”<br><i class=\"clr-orange\">Kahlii</i> đi lang thang khắp nơi trên thế giới cùng trái tim ngập tràn hận thù các vị thần. Để trả thù các vị thần, những người theo đạo sẽ bị <i class=\"clr-orange\">Kahlii</i> giết và cướp mất linh hồn chỉ để thỏa mãn sự ích kỉ của bản thân. Những kỉ niệm đẹp của những con người xấu số này sẽ mãi bị thay thế bởi sự sợ hãi và đau khổ. Các linh hồn sau đó sẽ buộc phải trở thành tôi tớ trung thành của <i class=\"clr-orange\">Kahlii</i>.<br>Nhiều thế kỉ trôi qua, cứ mỗi lần <i class=\"clr-orange\">Kahlii</i> cảm thấy buồn chán, nữ thần sẽ sai một trong những tôi tớ của mình để đi tìm người yêu hoặc người thân để bắt về làm nô lệ. Những nạn nhân của <i class=\"clr-orange\">Kahlii</i> đều phải chịu nỗi đau bất tận, điều mà không một chiến binh quả cảm hay một vị thần nào có thể chịu nổi.<br>\"Hận thù sẽ mang đến sức mạnh không gì sánh nổi\"",
		"hero_skin": [
			{
				"name": "Nữ Thần Nghiệp Chướng",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Kahlii01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Kahlii01",
			},
			{
				"name": "Cô Dâu Hắc Ám",
				"gold": "",
				"voucher": "",
				"event": "Mở Valentine",
				"wall": "Kahlii02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "Kahlii02",
			},
			{
				"name": "Quàng Khăn Đỏ (Bậc A)",
				"gold": "",
				"voucher": "279",
				"event": "",
				"wall": "Kahlii03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "Kahlii03",
			},
			{
				"name": "Kim Cô Giáo Chủ (Bậc S)",
				"gold": "",
				"voucher": "<s>409</s> -> 286",
				"event": "",
				"wall": "Kahlii04",
				"disable": "yes",
				"img": "thumb4.jpg",
				"video": "Kahlii04",
			},
		]
	},
	"zephys": {
		"hero_id": "Zephys",
		"hero_name": "Zephys",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Đấu sĩ / Sát thủ",
			"special": "Tiền đạo",
			"lane": "Đi rừng / Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Bền bỉ",
				"info": "Nội tại: Mỗi 3% máu tối đa tổn thất giúp tăng 1% miễn thương.",
			},
			{
				"name": "Đâm lao",
				"info": "ST Gốc: 190/214/238/262/286/310<br>H.Chiêu: 7/6.4/5.8/5.2/4.6/4<br>ST thêm: 85/97/109/121/133/145<br>Zephys lướt và đâm về hướng chỉ định, gây 190 (+173) STVL lên những kẻ địch trúng chiêu. Đòn đánh thường kế tiếp của Zephys gây thêm 85 (+259) STVL, đồng thời làm chậm 25% tốc chạy của nạn nhân trúng đòn trong 2s."
			},
			{
				"name": "Liên kích",
				"info": "ST Gốc: 95/105/115/125/135/145<br>H.Chiêu: 8/7.2/6.4/5.6/4.8/4<br>Hồi máu: 35/39/43/47/51/55<br>Zephys công kích liên tục các kẻ địch phía trước, mỗi đợt gây 95 (+69) STVL. Tung chiêu trúng tướng địch giúp Zephys được hồi 35 (+24) máu.",
			},
			{
				"name": "Không kích",
				"info": "ST Gốc: 370/460/550<br>H.Chiêu: 18/15/12<br>ST sấm chóp: 30/45/60<br>Tầm tấn công của chiêu cuối: 6.5m<br>Zephys đột kích kẻ địch từ trên không, gây 370 (+242) STVL và hất văng các mục tiêu trong vùng ảnh hưởng. Ngoài ra Không kích còn gây hiệu ứng Rền vang lên những nạn nhân trúng chiêu, khiến đòn đánh thường hoặc chiêu thức của Zephys lên các mục tiêu này gây thêm 30 (+22) STP.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "4,3,2,0",
			}
		],
		"skill_note": "*Lên 3 trang bị là thời điểm Zephys trở thành một con quỷ dữ.",
		"skill_special": "TrungTri,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim28",
					"info": "Máu tối đa +13.5<br>Tốc chạy +0.7%",
				},
				{
					"name": "NgocXanh22",
					"info": "Máu tối đa +15.7<br>Hồi máu/5s +3.1<br>Giảm hồi chiêu +0.3%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo37",
					"info": "Tốc đánh +1%<br>Máu tối đa +33.7<br>Giáp +2.3",
				},
				{
					"name": "NgocTim31",
					"info": "Công vật lý +1.6<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường rừng",
				"info": "RiuLeviathan,GiayHoVe,ThuongLonginus,AoChoangBangGia,ThuongXuyenPha,HuanChuongTroy",
			},
			{
				"name": "Đường đơn",
				"info": "AoChoangThanRa,GiayKienCuong,AoChoangBangGia,HuanChuongTroy,KiemMuramasa,HerculeThinhNo",
			},
			{
				"name": "Game thủ hay lên",
				"info": "RiuLeviathan,GiayKienCuong,AoChoangThanRa,AoChoangBangGia,KiemMuramasa,HuanChuongTroy"
			}
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp đi cùng các tướng bảo kê",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "cresht", "id_page": "Cresht"},
					{"hero_id": "valhein", "id_page": "Valhein"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp các tướng sau",
				"info": [
					{"hero_id": "aleister", "id_page": "Aleister"},
					{"hero_id": "ormarr", "id_page": "Ormarr"},
				]
			}
		],
		"hero_story": "“Không một ai có thể thoát khỏi lưỡi hái Tử Thần của ta”<br>Mùi vị của cái chết ở thế giới loài người là minh chứng rõ ràng để biết hướng di chuyển của Tử thần. Tương truyền rằng, <i class=\"clr-orange\">Zephys</i> là một tử thần kiệm lời, toàn thân ông được bao phủ bởi làn sương giá lạnh. Mỗi khi du hành, <i class=\"clr-orange\">Zephys</i> khoác lên mình chiếc áo dài đen óng cùng chiếc lưỡi hái sắc đến mức có thể cắt lìa mọi thứ trên đời. Thu thập linh hồn chỉ là một công việc không hề đơn giản.<br>Bởi sau khi lìa cõi đời, rất nhiều linh hồn trở thành ác linh đi quấy phá và reo rắc nỗi sợ hãi lên loài người. Chính lúc này đây, <i class=\"clr-orange\">Zephys</i> sẽ phải dùng quyền lực của một vị thần, triệu gọi đội quân của mình để gìn giữ trật tự của cả 2 thế giới. Bất cứ kẻ nào chống đối đều sẽ phải chịu sự trừng phạt giày xéo tâm hồn, và nhận một kết cục đau đớn hơn cả cái chết.<br>\"Khi cái bóng của tử thần phủ xuống, lưỡi hái sẽ nhanh chóng theo sau thôi\"",
		"hero_skin": [
			{
				"name": "Lãnh Chúa Bất Tử",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Zephys01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Zephys01",
			},
			{
				"name": "Oán Linh (Bậc A)",
				"gold": "",
				"voucher": "375",
				"event": "",
				"wall": "Zephys02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "Zephys02",
			},
			{
				"name": "Hiệp Sĩ Bí Ngô",
				"gold": "",
				"voucher": "",
				"event": "Mở Halloween",
				"wall": "Zephys03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "Zephys03",
			},
			{
				"name": "Dung Nham (AWC)",
				"gold": "",
				"voucher": "429",
				"event": "",
				"wall": "Zephys04",
				"disable": "yes",
				"img": "thumb4.jpg",
				"video": "",
			},
		]
	},
	"dieu_thuyen": {
		"hero_id": "DieuThuyen",
		"hero_name": "Điêu Thuyền",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Pháp sư",
			"special": "Khống chế",
			"lane": "Đường giữa",
		},
		"main_skill": [
			{
				"name": "Nữ hoàng băng tuyết",
				"info": "Nội tại: Những kẻ địch bị đóng băng phải chịu thêm 155 STP.",
			},
			{
				"name": "Sương giá",
				"info": "ST Gốc: 350/420/490/560/630/700<br>Điêu Thuyền tung hàn băng chưởng vào điểm chỉ định, gây 350 (+0.85 công phép) STP và làm chậm 50% tốc chạy của các kẻ địch trúng chiêu trong 2s. Chưa hết, những nạn nhân này còn phải chịu hiệu ứng Băng hàn trong 5.5s. Kẻ địch trúng Bão tuyết khi đang chịu hiệu ứng Băng hàn sẽ bị trói 1s."
			},
			{
				"name": "Tuyết liên",
				"info": "ST Gốc: 288/324/360/396/432/468<br>H.Chiêu: 9/8.6/8.2/7.8/7.4/7<br>Điêu Thuyền tạo ra một bông sen băng tại điểm đã chọn, thoáng chốc sau bông sen nở rộ gây 288 (+0) STP, có thể sử dụng chiêu 2 lần, mục tiêu sau khi bị đóng băng lần 1 sẽ bất động trong 2,5s, nếu dính chiêu thức lần 2 trong 5s sau đó thì thời gian đóng băng tăng thêm chỉ 0,75s, thời gian giữa 2 lần sử dụng chiêu thức: 1s, ngoài ra những nạn nhân này sẽ phải chịu thêm STP từ mọi nguồn sát thương của Điêu Thuyền.",
			},
			{
				"name": "Bão tuyết",
				"info": "ST Gốc: 350/440/530<br>H.Chiêu: 42/35/28<br>Điêu Thuyền triệu hồi bão tuyết tấn công những kẻ địch lân cận, gây 350 (+0) STP và làm chậm 30% tốc chạy của các nạn nhân trúng chiêu. Ngoài ra Điêu Thuyền còn được tăng 600 giáp.",
			}
		],
		"skill_up": {
			"line1": "1,3,6,9,11,14",
			"line2": "2,5,7,10,13,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,4,0",
			}
		],
		"skill_note": "*Sát thương khá cao nếu cô có thể làm đối thủ đóng băng.<br>*Kết hợp hoàn hảo Chiêu 1 và 2 giúp cô trở nên khá bá đạo.<br>*Bão Tuyết khá rộng vì thế hãy chọn vị trí thích hợp nhất và hạch sát kẻ địch.",
		"skill_special": "CapCuu,TocBien",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim22",
					"info": "Công phép +1.4<br>Hút máu phép +0.8%<br>Giáp phép +1.6",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim36",
					"info": "Công phép +2.4<br>Hút máu phép +1%",
				},
				{
					"name": "NgocXanh35",
					"info": "Giáp +2.7<br>Giáp phép +2.7<br>Giảm hồi chiêu +0.6%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường giữa",
				"info": "TruongBungNo,GiayPhuThuy,VuongMiengHecate,GuomTanThe,TruongHonMang,SachThanh",
			},
			{
				"name": "Đường giữa",
				"info": "QuyenTruongRhea,GiayThuatSi,TruongBungNo,GuomTanThe,ThapTuKiem,SachThanh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "NgocDaiPhapSu,GiayPhuThuy,TruongBungNo,GuomHienTriet,TruongHonMang,MatNaBerith",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp đi cùng các tướng bảo kê",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "lu_bo", "id_page": "LuBo"},
					{"hero_id": "toro", "id_page": "Toro"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp các tướng sau",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "butterfly", "id_page": "Butterfly"},
				]
			}
		],
		"hero_story": "\"Đàn ông chinh phục thế giới, ta sẽ chinh phục đàn ông.\"<br><i class=\"clr-orange\">Điêu Thuyền</i> nói câu đó năm mười lăm tuổi. Nàng vừa học nghệ thuật múa lụa nhưng đã có thể quyến rũ tất cả những ai hay ghé qua đại lộ Trường An. Một viên quan đã nói: \"Cô gái này là hiện thân của tội lỗi từ thiên đường!\" trước khi đổ gục dưới chân nàng tìm kiếm mùi hương vương trên áo.<br>Ngay cả Lữ Bố hùng mạnh cũng không thể cưỡng lại vẻ đẹp của <i class=\"clr-orange\">Điêu Thuyền</i>. Khi nàng nhăn mặt, Lữ Bố sẵn sàng ra tay với cha nuôi Đổng Trác. Chỉ một nét thoáng buồn trên mặt <i class=\"clr-orange\">Điêu Thuyền</i> cũng đủ để Lữ Bố trừng trị kẻ phạm lỗi.<br><i class=\"clr-orange\">Điêu Thuyền</i> xinh đẹp, nhưng cái đẹp đó cũng tương xứng với dã tâm trong nàng. Các tướng khắp thế giới đến thách thức Lữ Bố để có thể đoạt <i class=\"clr-orange\">Điêu Thuyền</i> về tay. Đa số đều bị hạ ngay lập tức. Nhưng người khác tập hợp cùng nhau và cũng chịu chung số phận. Thấy kẻ địch ngày một nhiều thêm và khát khao chiến trận của Lữ Bố ngày một lớn dần, <i class=\"clr-orange\">Điêu Thuyền</i> lặng lẽ rời bỏ người đàn ông yêu nàng tha thiết trong một sáng trời mưa bão.<br>\"Cố đừng nghĩ đến ta nhiều quá.\"",
		"hero_skin": [
			{
				"name": "Tuyệt Sắc Giai Nhân",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "DieuThuyen01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "DieuThuyen01",
			},
			{
				"name": "Nữ Vương Anh Đào (Bậc A)",
				"gold": "",
				"voucher": "450",
				"event": "",
				"wall": "DieuThuyen02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "DieuThuyen02",
			},
			{
				"name": "Hoa Hậu (Bậc S)",
				"gold": "",
				"voucher": "349",
				"event": "",
				"wall": "DieuThuyen03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "DieuThuyen03",
			},
			{
				"name": "Tiệc Bãi Biển (Bậc SS)",
				"gold": "",
				"voucher": "499",
				"event": "",
				"wall": "DieuThuyen04",
				"disable": "yes",
				"img": "thumb4.jpg",
				"video": "DieuThuyen04",
			},
		]
	},
	"chaugnar": {
		"hero_id": "Chaugnar",
		"hero_name": "Chaugnar",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Trợ thủ / Đỡ đòn",
			"special": "Yểm hộ",
			"lane": "Đường rồng / Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Đại dương sâu thẳm",
				"info": "Nội tại: Mỗi khi tung Thủy triều giúp Chaugnar hóa giải tất cả hiệu ứng khống chế, đồng thời tăng 10% miễn thương và 20% tốc chạy trong 2s.",
			},
			{
				"name": "Thủy triều",
				"info": "ST Gốc: 375/450/525/600/675/750<br>Chaugnar tung ra 1 luồng sóng năng lượng, gây 375 (+0) STP lên những kẻ địch trúng chiêu, đồng thời giảm 50% tốc chạy của nạn nhân trong 2s."
			},
			{
				"name": "Nước xoáy",
				"info": "ST Gốc: 275/325/375/425/475/525<br>Chaugnar tạo chấn động quanh bản thân, gây 275 (0) STP lên tất cả kẻ địch lân cận, đồng thời giảm 1s hồi chiêu Thủy triều và cường hóa sát thương của lần tung chiêu Nước xoáy kế tiếp thêm 30%, cộng dồn tối đa 2 lần.",
			},
			{
				"name": "Vực Hỗn Loạn",
				"info": "H.Chiêu: 45/40/35<br>Chaugnar gội ra 1 luồng năng lượng hỗn độn giúp hóa giải mọi hiệu ứng khống chế trên đồng minh, đồng thời giúp cường hóa kháng hiệu ứng, miễn thương, và tăng tốc chạy trong 1s, riếng bản thân kéo dài 3s. Đặc biệt trong vòng 6s Nước xoáy sẽ được giảm hồi chiêu và sử dụng không tốn năng lượng.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,4,0",
			}
		],
		"skill_note": "*Hãy đứng trung tâm đội trong giao tranh để Vực Hỗn Loạn thực sự có hiệu quả.",
		"skill_special": "BocPha,CamTru,CapCuu",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim24",
					"info": "Máu tối đa +36<br>Giáp +1.6",
				},
				{
					"name": "NgocXanh27",
					"info": "Hồi máu/5s +4.5<br>Giáp +3.2",
				}
			],
			"rune3": [
				{
					"name": "NgocDo32",
					"info": "Công phép +5.3",
				},
				{
					"name": "NgocTim310",
					"info": "Máu tối đa +60<br>Hồi máu/5s +4.5",
				},
				{
					"name": "NgocXanh36",
					"info": "Giáp +5<br>Giáp phép +5",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường giữa hoặc trợ thủ",
				"info": "PhuongHoangLe,GiayHoVe,TruongBang,MatNaBerith,GiapGaia,AoChoangBangGia",
			},
			{
				"name": "Đường giữa hoặc trợ thủ",
				"info": "NgocDaiPhapSu,SachThanh,VuongMiengHecate,QuyenTruongRhea,ThapTuKiem,TruongBang",
			},
			{
				"name": "Game thủ hay lên",
				"info": "NgocDaiPhapSu,GiayHoVe,TruongBang,MatNaBerith,VuongMiengHecate,SachTruyHon",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp đi cùng các tướng bảo kê",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "butterfly", "id_page": "Butterfly"},
					{"hero_id": "gildur", "id_page": "Gildur"},
					{"hero_id": "mganga", "id_page": "Mganga"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp các tướng sau",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "ormarr", "id_page": "Ormarr"},
				]
			}
		],
		"hero_story": "\"Ta là hóa thân của hỗn loạn, tổ tiên của ma quỷ\"<br>Kẻ có tên <i class=\"clr-orange\">Chaugnar</i>, Sứ giả của Cthulu, là một thực thể tà ác do hỗn độn sinh ra. Hắn đã tồn tại lâu hơn cả Thiên Đường hay Địa Ngục. Trong mắt hắn, sự tồn tại chỉ đơn thuần là cuộc chiến bất tận giữa hỗn loạn và trật tự. Sự sống, luật lệ, quy luật, cảm xúc và đức tin không có ý nghĩa với hắn. Những ai không may đối diện con quỷ độc ác này sẽ phải thu mình lại và cảm nhận sự tăm tối hơn cả bóng đêm, nỗi kinh hoàng hơn tất cả những sợ hãi từng trải qua.<br>Nếu không có một thiên tài lừa <i class=\"clr-orange\">Chaugnar</i> vào bẫy và nhốt hắn dưới đáy của Biển Đen thì có thể thế giới này đã biến mất từ lâu. Tuy nhiên, sức mạnh của sự hỗn loạn không bao giờ có thể được dập tắt hoàn toàn. Tất cả những gì loài người có thể làm là chiến đấu để làm suy yếu <i class=\"clr-orange\">Chaugnar</i> và giảm thiểu các mối đe dọa mà hắn tạo ra. Tuy nhiên, mọi người đều biết rằng một ngày <i class=\"clr-orange\">Chaugnar</i> sẽ phá vỡ xiềng xích của hắn và cho nổ tung thế giới này bằng lửa thù hận.<br>\"Ta sẽ cho ngươi chứng kiến thế giới này bị hỗn loạn nuốt chửng!\"",
		"hero_skin": [
			{
				"name": "Sứ Giả Hư Vô",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Chaugnar01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Chaugnar01",
			},
			{
				"name": "Ác Mộng Sinh Hóa (Bậc A)",
				"gold": "",
				"voucher": "270",
				"event": "",
				"wall": "Chaugnar02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "Chaugnar02",
			},
			{
        "name": "Quang Vinh (Bậc A)",
        "gold": "",
        "voucher": "",
        "event": "S6 Thưởng hạng",
        "wall": "Chaugnar03",
        "disable": "",
        "img": "thumb3.jpg",
        "video": "",
	    },
		]
	},
	"violet": {
		"hero_id": "Violet",
		"hero_name": "Violet",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Xạ thủ",
			"special": "Tiền đạo / Trung phong",
			"lane": "Đi rừng / Đường rồng",
		},
		"main_skill": [
			{
				"name": "Nạp đạn",
				"info": "Nội tại: đánh trúng lính giảm 0.25s hồi chiều, đánh trúng tướng địch làm giảm 0.5s hồi chiêu của Đạn Xuyên Thấu.",
			},
			{
				"name": "Đạn xuyên thấu",
				"info": "ST Gốc: 275/315/355/395/435/475<br>Violet lộn về phía trước cường hoán đòn đánh thường tiếp theo giúp tăng tầm đánh trong thoáng chốc và gây 330 (+197) STVL lên những kẻ địch theo đường thẳng. Ngoài ra nếu xung quanh Violet có kẻ địch sau khi lộn nhào, cô sẽ được tăng 50% tốc chạy giảm dần trong 2s."
			},
			{
				"name": "Lựu đạn nổ",
				"info": "ST Gốc: 125/140/155/170/185/200<br>H.Chiêu: 10/9.2/8.4/7.6/6.8/6<br>Violet ném lựu đạn vào vùng chỉ định, gây 125 (+86) STVL lên những kẻ địch trúng chiêu, đồng thời làm chậm 90% tốc chạy của nạn nhân trong 1s.",
			},
			{
				"name": "Pháo đại",
				"info": "ST Gốc: 400/500/600<br>H.Chiêu: 30/25/20<br>Violet bắn một phát pháo cực đại theo hướng chỉ định, gây 400 (+258) STVL lên những kẻ địch trúng chiêu.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,0,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,0,3,0,4",
			}
		],
		"skill_note": "*Hãy tận dụng chiêu Đạn xuyên thấu để cấu máu, và dùng Pháo đại để kết thúc kẻ địch bỏ trốn.",
		"skill_special": "TocBien,TrungTri,ThanhTay",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo27",
					"info": "Tỷ lệ chí mạng +1%",
				},
				{
					"name": "NgocTim21",
					"info": "Tốc đánh +0.4%<br>Hút máu +0.8%",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo310",
					"info": "Tỷ lệ chí mạng +1.6%",
				},
				{
					"name": "NgocTim35",
					"info": "Hút máu +1.6%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường trên hoặc dưới",
				"info": "ThanhKiem,GiayThuatSi,SongDaoBaoTap,PhucHopKiem,ThuongXuyenPha,NanhFenrir",
			},
			{
				"name": "Đi rừng",
				"info": "KiemTruyHon,GiayKienCuong,ThuongXuyenPha,KiemFafnir,AoChoangBangGia,KiemMuramasa",
			},
			{
				"name": "Game thủ hay lên",
				"info": "KiemTruyHon,GiayHoVe,ThuongXuyenPha,ThanhKiem,PhucHopKiem,NanhFenrir",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp đi cùng các tướng bảo kê",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "gildur", "id_page": "Gildur"},
					{"hero_id": "toro", "id_page": "Toro"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp các tướng sau",
				"info": [
					{"hero_id": "veera", "id_page": "Veera"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "zephys", "id_page": "Zephys"},
				]
			}
		],
		"hero_story": "\"Những phát bắn của ta luôn nhắc nhở mọi người về thời kỳ khủng khiếp dưới ách thống trị của Hắc Ám\".<br>Xuyên suốt cuộc Chiến Tranh Chạng Vạng, bóng hồng <i class=\"clr-orange\">Violet</i> nổi lên như một thợ săn dòng giống ác quỷ với cái tên Thái tử. Sức mạnh của những con quỷ dần trở nên không thể kiểm soát, không đơn thuần sử dụng móng vuốt và răng nanh như trước đây nữa, ma cà rồng thuộc chủng loại mới có tên là Thái Tử giờ đây có thể sử dụng phép thuật để tạo ra các vụ nổ, sấm sét hay thậm chí là bay lượn. Kĩ năng của <i class=\"clr-orange\">Violet</i> mang tới cho cô những lợi thế lớn không dễ bị áp đảo. Chỉ có những người giống <i class=\"clr-orange\">Violet</i>, những người đã trải qua quá trình huấn luyện khắc nghiệt, mới có thể đối đầu với những thế lực phi tự nhiên và ma thuật của chúng.<br>Đồng loại bị tiêu diệt càng nhiều, lũ ma cà rồng càng căm hận <i class=\"clr-orange\">Violet</i>. Chúng liên tục tìm cách tiêu diệt lực lượng của cô. Liên tục phải phòng ngự trước những đợt tấn công đến từ kẻ thù, khẩu súng thân tín “Hoa Hồng Định Mệnh” của <i class=\"clr-orange\">Violet</i> cũng bị phá hủy.<br>Mất cặp súng trên tay và nhìn thấy bạn bè mình từng người một ngã xuống, <i class=\"clr-orange\">Violet</i> gào lên giận giữ và thề rằng sẽ tận diệt ma cà rồng đến tận hơi thở cuối cùng, cho dù không còn tấc sắt trên tay.<br>“Ma cà rồng săn đuổi chúng ta, chúng ta săn đuổi lại ma cà rồng!”",
		"hero_skin": [
			{
				"name": "Tay Súng Quả Cảm",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Violet01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Violet01",
			},
			{
				"name": "Nữ Hoàng Pháo Hoa (Bậc S)",
				"gold": "",
				"voucher": "",
				"event": "Mở dịp lễ tết",
				"wall": "Violet03",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "Violet03",
			},
			{
				"name": "Nữ Đặc Cảnh",
				"gold": "",
				"voucher": "175",
				"event": "",
				"wall": "Violet02",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "Violet02",
			},
			{
				"name": "Mèo Siêu Quậy",
				"gold": "",
				"voucher": "",
				"event": "Mở sinh nhật 1 tuổi",
				"wall": "Violet04",
				"disable": "yes",
				"img": "thumb4.jpg",
				"video": "Violet04",
			},
			{
				"name": "Phi Công Trẻ (Bậc A)",
				"gold": "",
				"voucher": "279",
				"event": "",
				"wall": "Violet05",
				"disable": "",
				"img": "thumb5.jpg",
				"video": "Violet05",
			},
			{
				"name": "Tiệc Bãi Biển (Bậc SS)",
				"gold": "",
				"voucher": "",
				"event": "2 viên đá quý",
				"wall": "Violet06",
				"disable": "yes",
				"img": "thumb6.jpg",
				"video": "Violet06",
			},
			{
				"name": "Phó Học Tập",
				"gold": "",
				"voucher": "",
				"event": "Từ Sổ sứ mệnh 3",
				"wall": "Violet07",
				"disable": "yes",
				"img": "thumb7.jpg",
				"video": "Violet07",
			},
			{
				"name": "Pháo Hoa Neon",
				"gold": "",
				"voucher": "",
				"event": "Nhận từ vẽ bùa",
				"wall": "Violet08",
				"disable": "yes",
				"img": "thumb8.jpg",
				"video": "Violet08",
			},
		]
	},
	"butterfly": {
		"hero_id": "Butterfly",
		"hero_name": "Butterfly",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Sát thủ / Đấu sĩ",
			"special": "Tiền đạo / Trung phong",
			"lane": "Đi rừng",
		},
		"main_skill": [
			{
				"name": "Sát thủ",
				"info": "Nội tại: Hạ hoạc phụ sẽ làm mới toàn bộ thời gian hồi chiêu.",
			},
			{
				"name": "Quét kiếm",
				"info": "ST Gốc: 200/240/280/320/360/400<br>Butterfly vung kiếm theo hình vòng cung gây 200 (+0.65 công vật lý) STVL và tăng tốc cho bản thân 50%, xóa làm chậm và miễn nhiễm làm chậm trong 1 giây."
			},
			{
				"name": "Phi kiếm",
				"info": "ST Gốc: 350/400/450/500/550/600<br>H.Chiêu: 9/8.4/7.8/7.2/6.6/6<br>Butterfly phóng kiếm chớp nhoáng gây 350（+1.25 công vật lý) STVL lên những kẻ địch theo đường thẳng, đồng thời Butterfly được tăng 50% tốc đánh cơ bản trong 3s.",
			},
			{
				"name": "Ám sát",
				"info": "ST Gốc: 500/725/950<br>H.Chiêu: 13.5/12.3/11.1<br>Butterfly đột kích kẻ địch có lượng máu thấp nhất (ưu tiên tướng) từ phía sau, gây 525 (+238) STVL, đồng thời Butterfly được tăng 50% miễn thương trong 3s giảm dần về 0, và mục tiêu sẽ bị đánh dấu trong 3s. Trong khoảng thời gian này Tốc chạy của kẻ địch bị giảm 30%. Khi kết thúc đánh dấu hoặc mục tiêu đã chết, 20% sát thương mà mục tiêu đã chịu sẽ chuyển thành trị liệu cho bản thân.",
			}
		],
		"skill_up": {
			"line1": "2,6,8,11,13,15",
			"line2": "1,3,5,7,10,14",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "4,2,3,0",
			}
		],
		"skill_note": "*Bộ kỹ năng của cô được tạo ra là để đi rừng, bức bí thì đường trên dưới cũng được.<br>*Hạ mục tiêu hoặc hỗ trợ đồng đội, bộ kỹ năng sẽ được reset hồi chiêu.<br>*Sử dụng Chiêu 1 và 2 chuẩn sát để có thể làm chậm và choáng các mục tiêu.<br>*Bật Ám Sát lên mà quẩy thôi, còn ai lao vào không em tiển!!",
		"skill_special": "TrungTri,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo26",
					"info": "Công vật lý +1.5<br>Tốc đánh +0.4%",
				},
				{
					"name": "NgocTim24",
					"info": "Máu tối đa +36<br>Giáp +1.6",
				},
				{
					"name": "NgocXanh27",
					"info": "Hồi máu/5s +4.5<br>Giáp +3.2",
				}
			],
			"rune3": [
				{
					"name": "NgocDo37",
					"info": "Tốc đánh +1%<br>Máu tối đa +33.7<br>Giáp +2.3",
				},
				{
					"name": "NgocTim34",
					"info": "Tỷ lệ chí mạng +0.5%<br>Máu tối đa +60",
				},
				{
					"name": "NgocXanh34",
					"info": "Máu tối đa +37.5<br>Giảm hồi chiêu +0.6%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường đơn",
				"info": "AoChoangThanRa,GiayHoVe,ThuongXuyenPha,GiapGaia,KhienThatTruyen,GiapThongKho",
			},
			{
				"name": "Đi rừng",
				"info": "KiemTruyHon,GiayHoVe,ThuongXuyenPha,AoChoangBangGia,GiapThongKho,LiemDoatMenh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "RiuLeviathan,GiayHermes,AoChoangThanRa,ThuongXuyenPha,NanhFenrir,HerculeThinhNo",
			},
		],
		"hero_battle": [
			{
				"name": "chơi trên cơ",
				"desc": "dễ dàng chiến thắng khi gặp",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "slimz", "id_page": "Slimz"},
					{"hero_id": "kriknak", "id_page": "Kriknak"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "batman", "id_page": "Batman"},
					{"hero_id": "zephys", "id_page": "Zephys"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
				]
			}
		],
		"hero_story": "\"Cuộc đời của ta sẽ ra sao khi chiến tranh kết thúc?\" Trong một đêm lạnh giá, <i class=\"clr-orange\">Butterfly</i> trầm ngâm bên thanh gươm lấp lánh ánh sáng dìu dịu ấm áp.<br>\"Tồn tại trong thế giới hỗn loạn này chẳng dễ dàng chút nào, đặc biệt là những người kiếm tiền từ máu của kẻ khác. Ta còn chẳng có thời gian để suy nghĩ về bất cứ điều gì khác\" giọng của cô lạnh lùng mà chua chát, phát ra từ bóng tối. Mới vừa thực hiện nhiệm vụ trước đó ít lâu, <i class=\"clr-orange\">Butterfly</i> không hề có dấu hiệu mệt mỏi. Là một sát thủ ám sát thuê được huấn luyện tốt, cô có khả năng duy trì và khôi phục sức chịu đựng của mình xuyên suốt các cuộc chiến.<br><i class=\"clr-orange\">Butterfly</i> là một biệt hiệu được cô sử dụng trong hợp đồng ám sát. Không giống như lính đánh thuê thông thường, nhiệm vụ của <i class=\"clr-orange\">Butterfly</i> rất đa dạng và phức tạp. Khách hàng bắt đầu yêu cầu sát thủ thực hiện nhiệm vụ khó khăn hơn; nhấn mạnh vào khả năng, giới tính, tuổi tác, và thậm chí thời gian xuất hiện. Để đáp lại, <i class=\"clr-orange\">Butterfly</i> không ngừng cải thiện bản thân để phục vụ những yêu cầu đó.<br><i class=\"clr-orange\">Butterfly</i> từng là một đứa trẻ mồ côi, được nuôi dưỡng bởi hiệp hội lính đánh thuê và huấn luyện qua rất nhiều cuộc chiến. Lớn lên, cô ra chiến trường kiếm tiền, trả lại khoản phí nuôi dạy cho hiệp hội. Mỗi nhiệm vụ thành công, <i class=\"clr-orange\">Butterfly</i> phải trả họ một nửa số tiền kiếm được, cho đến khi món nợ từ bé của cô được thanh toán sòng phẳng.<br>Những thành viên của hiệp hội tử trận ngày một nhiều. Điều này khiến cho <i class=\"clr-orange\">Butterfly</i> được giao nhiệm vụ quan trọng nhất: bảo vệ Astrid, con gái út của gia tộc Hoa Hồng. Cô đã hoàn thành rất nhiều nhiệm vụ tương tự, ngụy trang trong bộ đồ người hầu bí mật hộ tống những quý cô sang chảnh, diêm dúa đi đến các sự kiện khác nhau.<br>Nếu đó không phải là một công việc được trả lương cao, <i class=\"clr-orange\">Butterfly</i> đã chọn một nhiệm vụ thú vị hơn, như ám sát một gã cưỡi rồng, hoặc loại bỏ thủ lĩnh của toán cướp. Nó khiến cô thấy hưng phấn hơn việc dành cả đêm để nghe những câu chuyện viển vông của tụi quý tộc.<br>Kỳ lạ thay, nhiệm vụ mới không phải là nhàm chán như <i class=\"clr-orange\">Butterfly</i> đã nghĩ. Cô hoàn toàn bị choáng ngợp bởi độ khó của nhiệm vụ, bởi cô được cử đến để bảo vệ Astrid trong một cuộc chiến chống lại binh đoàn Lokheim, những kẻ đã đánh bại Arduin và nhóm hiệp sĩ Vedan.<br>Sau cái chết của cha, anh trai, và chứng kiên lâu đài bị vây hãm, Astrid lãnh đạo các hiệp sỹ Hoa Hồng cầm kiếm tử chiến với kẻ thù. <i class=\"clr-orange\">Butterfly</i> được thuê để bảo vệ Astrid. Và khi đao kiếm dừng lại, cả hai cùng bị thương nặng.<br>Theo các quy định của hợp đồng, <i class=\"clr-orange\">Butterfly</i> có quyền từ bỏ, chiếu theo điều khoản \"Mức độ phức tạp của công việc\". Tuy nhiên, cô tiếp tục nhiệm vụ bảo vệ Astrid bé bỏng, người thừa kế cuối cùng của dòng dõi Bá tước Hoa hồng. Chừng nào Astrid còn thở, còn sức nâng cao thanh kiếm Tro Tàn của cha nàng, nhiệm vụ của <i class=\"clr-orange\">Butterfly</i> còn chưa kết thúc.<br>Đó không chỉ đơn thuần là nhiệm vụ, nó cũng là cách cô làm việc.<br>\"Từ 'chạy trốn' không có trong từ vựng của tôi\"",
		"hero_skin": [
			{
				"name": "Siêu Cấp Sát Thủ",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Butterfly01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Butterfly01",
			},
			{
				"name": "Xuân Nữ Ngổ Ngáo",
				"gold": "",
				"voucher": "",
				"event": "Mở dịp lễ tết",
				"wall": "Butterfly02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "Butterfly02",
			},
			{
				"name": "Thủy Thủ",
				"gold": "",
				"voucher": "175",
				"event": "",
				"wall": "Butterfly03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "Butterfly03",
			},
			{
				"name": "Teen Nữ Công Nghệ (Bậc S)",
				"gold": "",
				"voucher": "379",
				"event": "",
				"wall": "Butterfly04",
				"disable": "",
				"img": "thumb4.jpg",
				"video": "Butterfly04",
			},
			{
				"name": "Nữ Quái Nổi Loạn (Bậc SS)",
				"gold": "",
				"voucher": "599",
				"event": "",
				"wall": "Butterfly05",
				"disable": "",
				"img": "thumb5.jpg",
				"video": "Butterfly05",
			},
			{
				"name": "Quận Chúa Đế Chế (Bậc S)",
				"gold": "",
				"voucher": "429",
				"event": "",
				"wall": "Butterfly06",
				"disable": "yes",
				"img": "thumb6.jpg",
				"video": "Butterfly06",
			},
			{
				"name": "Đông Êm Đềm",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Butterfly07",
				"disable": "yes",
				"img": "thumb7.jpg",
				"video": "Butterfly07",
			},
		]
	},
	"ormarr": {
		"hero_id": "Ormarr",
		"hero_name": "Ormarr",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Đấu sĩ / Đỡ đòn",
			"special": "Khống chế / Tiền đạo",
			"lane": "Đường rồng",
		},
		"main_skill": [
			{
				"name": "Man lực",
				"info": "Nội tại: Tất cả sát thương của Ormarr đều có 60% tỷ lệ làm choáng 0.75 giây mục tiêu, và gây 3-7% máu tối đa của bản thân thành sát thương phép (6 giây hồi).",
			},
			{
				"name": "Búa cuồng",
				"info": "ST Gốc: 150/200/250/300/350/400<br>H.Chiêu: 10/9/8/7/6/5<br>Ormarr lao đến vung búa hất tung những kẻ địch trúng chiêu và gây 150 (+196) STVL."
			},
			{
				"name": "Búa tạ",
				"info": "ST Gốc: 215/260/305/350/395/440<br>Hồi chiêu: 6 giây<br>Ormarr nện búa xuống đất gây 215 (+179) STVL lên những kẻ địch trúng chiêu, đồng thời làm chậm 50% tốc chạy của nạn nhân trong 1s. Mỗi lần tung chiêu trúng địch giúp nhận 1 điểm Cuồng dã, khi đạt đủ 3 điểm sẽ khiến lần tung chiêu kế gây kèm hiệu ứng làm choáng.",
			},
			{
				"name": "Bão búa",
				"info": "Hồi chiêu: 40/35/30 giây<br>Vũ khí trên tay Ormarr xoay vòng cực nhanh gây 100/120/140 (+0.50 công vật lý) sát thương vật lý kèm theo tỷ lệ làm choáng trên mỗi chiêu trúng đích. Nếu có tướng địch trúng chiêu sẽ khiến Ormarr được hồi 2% máu tối đa của bản thân (cộng dồn lên đến 3 tầng hiệu lực). Suốt thời gian này Ormarr không thể bị ngắt quãng chiêu, và có thể sử dụng Búa cuồng, nhưng bù lại sẽ bị giảm tốc chạy.",
			}
		],
		"skill_up": {
			"line1": "1,6,10,13,14,15",
			"line2": "2,3,5,7,9,11",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "4,2,3,0",
			}
		],
		"skill_note": "*Bật Bão Búa quay tay khá vui nhưng lượng sát thương không hề ít nhé.<br>*Chiêu 2 nện búa xuống đất khá rộng vì thế tìm vị trí tốt có thể trúng nhiều địch càng tốt.",
		"skill_special": "CapCuu,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim23",
					"info": "Công vật lý +0.6<br>Máu tối đa +36",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo34",
					"info": "Công vật lý +3.2",
				},
				{
					"name": "NgocTim34",
					"info": "Tỷ lệ chí mạng +0.5%<br>Máu tối đa +60",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Chơi hỗ trợ",
				"info": "LenhBaiPhongThan,GiayKienCuong,KhienThatTruyen,AoChoangBangGia,GiapGaia,HerculeThinhNo",
			},
			{
				"name": "Chơi hỗ trợ",
				"info": "LenhBaiPhongThan,GiayKienCuong,GiapHiepSi,HuanChuongTroy,GiapThongKho,GiapHoMenh",
			},
			{
				"name": "Đường Caesar",
				"info": "AoChoangThanRa,GiayKienCuong,RiuHyoga,ThuongLonginus,HuanChuongTroy,PhucHopKiem",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chời cùng",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "krixi", "id_page": "Krixi"},
					{"hero_id": "yorn", "id_page": "Yorn"},
					{"hero_id": "tel_annas", "id_page": "TelAnnas"},
					{"hero_id": "valhein", "id_page": "Valhein"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "chaugnar", "id_page": "Chaugnar"},
				]
			}
		],
		"hero_story": "\"Thử đánh bại ta xem nào!\"<br>Sinh ra trong bộ lạc Huyết Phủ, <i class=\"clr-orange\">Ormarr</i> sở hữu sức mạnh phi thường và sức chịu đựng dẻo dai.<br>Với cây búa khổng lồ và thanh kiếm của mình, <i class=\"clr-orange\">Ormarr</i> xung phong tham chiến không biết bao nhiêu trận đánh của bộ tộc của mình với. Gã luôn là người xung phong đầu tiên và rút lui cuối cùng. Trước sự bất khuất, gan dạ, quả cảm đó, <i class=\"clr-orange\">Ormarr</i> nhận được sự kính nể của cả đồng minh lẫn kẻ thù. Biệt danh “Cuồng Chiến Binh” cũng bắt đầu từ đây.<br>Nhận được sự tín nhiệm của nhiều người trong bộ tộc, <i class=\"clr-orange\">Ormarr</i> trở thành đầu lĩnh. Nhưng trong quá trình lãnh đạo, gã có nhiều quyết định sai lầm, mà nổi bật trong đó là việc cố gắng cướp kho lương thực dự trữ của đồng minh. Điều này đã khiến bộ tộc của gã bị trục xuất đến vùng đất băng giá phương Bắc xa xôi. Điều kì lạ là điều này lại không hề làm ảnh hưởng đến danh tiếng của <i class=\"clr-orange\">Ormarr</i>. Mọi người trong bộ tộc vẫn nhất nhất nghe theo <i class=\"clr-orange\">Ormarr</i>, điều này luôn thôi thúc gã phải cố gắng nhiều hơn nữa.<br>Không làm mọi người trong bộ tộc thất vọng, khi đội quân quỷ dữ xâm lược lục địa, <i class=\"clr-orange\">Ormarr</i> đã dẫn đầu đội quân để bảo vệ bộ tộc của mình. Cảm phục trước tinh thần quả cảm, vì bộ tộc quên thân đó, những bộ tộc lân cận nhanh chóng cho người chi viện vật tư, quân đội để cùng <i class=\"clr-orange\">Ormarr</i> chống lại lũ quỷ dữ kia.<br>\"Chiến trường là nơi duy nhất dành cho một chiến binh ngã xuống!\"",
		"hero_skin": [
			{
				"name": "Cuồng Chiễn Sĩ",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Ormarr01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Ormarr01",
			},
			{
				"name": "Cựu Chiến Binh (Bậc A)",
				"gold": "",
				"voucher": "270",
				"event": "",
				"wall": "Ormarr02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "Ormarr02",
			},
			{
				"name": "Thông Thỏa Thích (Bậc S)",
				"gold": "",
				"voucher": "409",
				"event": "",
				"wall": "Ormarr03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "Ormarr03",
			},
			{
				"name": "Giáo Viên Thể Hình (Bậc A)",
				"gold": "",
				"voucher": "279",
				"event": "",
				"wall": "Ormarr04",
				"disable": "",
				"img": "thumb4.jpg",
				"video": "Ormarr04",
			},
		]
	},
	"azzen_ka": {
		"hero_id": "AzzenKa",
		"hero_name": "Azzen'Ka",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Pháp sư",
			"special": "Khống chế",
			"lane": "Đường giữa",
		},
		"main_skill": [
			{
				"name": "Bẫy cát",
				"info": "Nội tại: Các mục tiêu bị sát thương bởi các kỹ năng sẽ bị nguyền rủa, tối đa 3 lần. Mục tiêu chịu đủ 3 lời nguyền sẽ bị hóa đá và gây 150 (+0.75 công phép) (+10 mỗi cấp) STP.<br>Thời gian duy trì dấu ấn：5s<br>Thời gian hồi giữa 2 lần kích hoạt nội tại：2s",
			},
			{
				"name": "Cồn cát tà ác",
				"info": "ST Gốc: 350/390/430/470/510/550<br>H.Chiêu: 9/8.6/8.2/7.8/7.4/7<br>Azzen'Ka triệu hồi những bãi cát dịch chuyển để tấn công kẻ thù, sau 0.6s sẽ gây 300 (+0.9 công phép) STP và hất tung chúng 1s."
			},
			{
				"name": "Bụi hắc ám",
				"info": "ST Gốc: 235/285/335/385/435/485<br>Azzen’Ka tung Bụi hắc ám vào kẻ địch, gây 235 (+0) STP. Kẻ địch trúng bụi lần 2 sẽ chỉ phải chịu 80% sát thương.",
			},
			{
				"name": "Sa mạc hóa",
				"info": "ST Gốc: 200/260/320<br>H.Chiêu: 35/30/25<br>ST kéo dài: 140/175/210<br>Azzen’Ka triệu hồi cồn cát cực đại lướt đến tấn công kẻ địch, gây 200 (+0) STP. Cồn cát sau khi va chạm liền hóa thành 1 cơn bão cát, gây 140 (+0) STP lên những kẻ địch vùng ảnh hưởng và làm chậm 60% tốc chạy của nạn nhân.",
			}
		],
		"skill_up": {
			"line1": "2,6,10,13,14,15",
			"line2": "1,3,5,7,9,11",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,4,3,0",
			}
		],
		"skill_note": "*Cố gắng giữ vị trí và kiếm gốc đẹp để dùng Sa Mạc Hóa tốt nhất có thể.",
		"skill_special": "TocBien,TocHanh,CapCuu",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim28",
					"info": "Máu tối đa +13.5<br>Tốc chạy +0.7%",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim32",
					"info": "Tốc đánh +1%<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh32",
					"info": "Giảm hồi chiêu +1%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường giữa",
				"info": "NgocDaiPhapSu,GiayKienCuong,TruongBang,VuongMiengHecate,SachThanh,GiapHoMenh",
			},
			{
				"name": "Đường giữa",
				"info": "NgocDaiPhapSu,GiayKienCuong,TruongBang,DayChuyenLucBao,AoChoangBangGia,SachThanh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "TruongBungNo,GiayPhuThuy,VuongMiengHecate,NgocDaiPhapSu,TruongHonMang,SachThanh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chời cùng",
				"info": [
					{"hero_id": "chaugnar", "id_page": "Chaugnar"},
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "payna", "id_page": "Payna"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
				]
			}
		],
		"hero_story": "\"Ta là <i class=\"clr-orange\">Azzen'Ka</i>, vua của các vị vua!\"<br><i class=\"clr-orange\">Azzen'Ka</i> là hiện thân của một vị thần vô danh cổ xưa. Những ai du hành qua sa mạc phải làm đồ cúng tế cho <i class=\"clr-orange\">Azzen'Ka</i> để chuyến đi được an toàn; nếu không, họ sẽ bị cát nuốt chửng. Vùng đất sa mạc không hiếu khách tách biệt với phần còn lại của thế giới, và những cơn bão cát bất tận đã làm suy giảm hứng thú của mọi vị thần khác, để lại <i class=\"clr-orange\">Azzen'Ka</i> là người cai trị duy nhất trên sa mạc.<br>Thần Horus từng cố dẫn dắt một đội quân để chinh phục sa mạc. Thất bại nhanh chóng theo sau. Bởi không có một trận chiến bình thường trên một vùng đất bất thường. Dù là thần chết, sa mạc vẫn nằm ngoài tầm với của Horus. Ngài tự tin có thể đánh bại <i class=\"clr-orange\">Azzen'Ka</i>, nhưng gục ngã trước cơn bão cát không ngừng và ý chí sinh tồn của sa mạc, và buộc phải rút lui.<br>Mọi ghi chép về <i class=\"clr-orange\">Azzen'Ka</i> nói ngài là một kẻ tà ác. Tuy nhiên, các hành khách phản bác rằng nếu họ thật sự dâng hiến cúng tế, họ sẽ được đảm bảo an toàn. Do đó luôn có những luồng dư luận trái chiều nhau về <i class=\"clr-orange\">Azzen'Ka</i>. Có người coi ngài là thần, có kẻ ghét ngài đến tận xương tủy. Tất nhiên, <i class=\"clr-orange\">Azzen'Ka</i> chẳng quan tâm đến cả hai.<br>\"Đến cả thần linh cũng đầu hàng trong lĩnh vực của ta.\"",
		"hero_skin": [
			{
				"name": "U Hồn Sa Mạc",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "AzzenKa01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "AzzenKa01",
			},
			{
				"name": "Linh Hồn Lữ Khách",
				"gold": "",
				"voucher": "",
				"event": "S3 Thưởng hạng",
				"wall": "AzzenKa02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "AzzenKa02",
			},
			{
				"name": "Ghẹo Hay Kẹo (Halloween)",
				"gold": "",
				"voucher": "349",
				"event": "",
				"wall": "AzzenKa03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "",
			},
		]
	},
	"alice": {
		"hero_id": "Alice",
		"hero_name": "Alice",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Trợ thủ",
			"special": "Khống chế / Yểm hộ",
			"lane": "Đường rồng",
		},
		"main_skill": [
			{
				"name": "Bước chân thần tốc",
				"info": "Nội tại: Tung chiêu thức bất kỳ giúp Alice tăng 20% tốc chạy trong 1s.",
			},
			{
				"name": "Vụ nổ thời không",
				"info": "ST Gốc: 375/423/471/519/567/615<br>H.Chiêu: 9/8.4/7.8/7.2/6.6/6<br>Alice tạo ra 1 vụ nổ tại điểm chỉ định, gây 375 (+0) STP và làm choáng những kẻ địch trúng chiêu, thời gian tung chiêu giảm 0.2s và thơi gian chiêu thức bay đến vị trí chỉ định tăng thêm 0.2s."
			},
			{
				"name": "Lá chắn thời không",
				"info": "Bảo hộ: 125/145/165/185/205/225<br>H.Chiêu: 14/12.8/11.6/10.4/9.2/8<br>Alice tạo lá chắn cho các đồng minh lân cận giúp chặn 125 (+0) sát thương và tăng 30% tốc chạy trong 2s.",
			},
			{
				"name": "Dòng chảy thời không",
				"info": "ST Gốc: 75/93/111<br>H.Chiêu: 35/30/25<br>Giảm tốc chạy: 25%/30%/35%<br>Giảm giáp phép: 30%/40%/50%<br>Alice tạo ra một vùng năng lượng ma thuật gây 75 (+0) STP mỗi 0.5s, đồng thời làm giảm 25/30/35% tốc chạy của các nạn nhân trong vùng ảnh hưởng. Ngoài ra những kẻ dại dột bước vào vùng năng lượng này sẽ phải chịu hiệu ứng câm lặng trong 1s.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,4,3,0",
			}
		],
		"skill_note": "*Nên kết hợp với xạ thủ và sát thủ để có hiệu quả tốt nhất.<br>*Bật Dòng Chảy Thời Không trong lúc combat khiến các đối thủ phải dè chừng.",
		"skill_special": "CapCuu,TocBien",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim28",
					"info": "Máu tối đa +13.5<br>Tốc chạy +0.7%",
				},
				{
					"name": "NgocXanh22",
					"info": "Máu tối đa +15.7<br>Hồi máu/5s +3.1<br>Giảm hồi chiêu +0.3%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim33",
					"info": "Máu tối đa +45<br>Hồi máu/5s +5.2<br>Tốc chạy +0.4%",
				},
				{
					"name": "NgocXanh36",
					"info": "Giáp +5<br>Giáp phép +5",
				}
			]
		},
		"item_build": [
			{
				"name": "Chơi hỗ trợ",
				"info": "GiayThuatSi,LenhBaiPhongThan,TruongBang,KhienHuyenThoai,PhuChuTruongSinh,HuanChuongTroy",
			},
			{
				"name": "Chơi hỗ trợ",
				"info": "LenhBaiPhongThan,GiayKienCuong,TruongBang,KhienHuyenThoai,SachTruyHon,HuanChuongTroy",
			},
			{
				"name": "Chơi đường giữa",
				"info": "TruongBang,GiayKienCuong,AoChoangBangGia,KhienHuyenThoai,MatNaBerith,SachThanh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chơi cùng",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "ormarr", "id_page": "Ormarr"},
					{"hero_id": "butterfly", "id_page": "Butterfly"},
					{"hero_id": "fennik", "id_page": "Fennik"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "chaugnar", "id_page": "Chaugnar"},
				]
			}
		],
		"hero_story": "<i class=\"clr-orange\">Alice</i> là vị thần hoàng đạo trẻ tuổi nhất. Đó là lý do cô thường từ chối trách nhiệm của mình, mà thích dành thời gian chơi đùa cùng chim muông hơn. Các vị thần hoàng đạo coi <i class=\"clr-orange\">Alice</i> như con của mình vậy. Ngây thơ, trong sáng và không có chữ “sợ hãi” trong từ điển của cô. <i class=\"clr-orange\">Alice</i> thậm chí không thể hoãn cái sự ham vui của mình lại được, dù là trước những vị thần hoàng đạo vĩ đại nhất.<br>Nụ cười từ sâu thẳm trong cô có thể làm tan chảy trái tim sắt đá nhất. Nhưng đừng có ngốc nghếch mà đánh giá thấp cô, khi đồng minh hoặc Thánh Điện Tinh Tú cần đến, <i class=\"clr-orange\">Alice</i> như một quả cầu cuồng nộ đập tan bất kì kẻ thù nào dám cả gan động đến Thánh Điện.<br>\"Thà dây với Sư Tử còn hơn quấy rầy Ma Kết\". Một lời khuyên chân thành từ những kẻ đã bị <i class=\"clr-orange\">Alice</i> đánh bại.<br>Nếu có 1 dịp nào đó đối đầu với <i class=\"clr-orange\">Alice</i>, bạn sẽ phải ngạc nhiên trước sức mạnh đang ẩn sâu trong một hình hài của 1 cô bé đáng yêu đó.<br>\"Nhanh nào! Đến chơi với tôi đi!”",
		"hero_skin": [
			{
				"name": "Tiểu Thân Thiện Lương",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Alice01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Alice01",
			},
			{
				"name": "Nhà Chiêm Tinh",
				"gold": "",
				"voucher": "175",
				"event": "",
				"wall": "Alice02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "Alice02",
			},
			{
				"name": "Bé Gấu Tuyết (Bậc S)",
				"gold": "",
				"voucher": "379",
				"event": "",
				"wall": "Alice03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "",
			},
			{
				"name": "Xứ Sở Thần Tiên (Bậc S)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Alice04",
				"disable": "",
				"img": "thumb4.jpg",
				"video": "",
			},
		]
	},
	"gildur": {
		"hero_id": "Gildur",
		"hero_name": "Gildur",
		"main_info": {
			"price_gold": "",
			"price_voucher": "",
			"price_text": "Có thẻ mua bằng Ruby",
			"position": "Đỡ đòn / Pháp sư",
			"special": "Khống chế / Tiền đạo",
			"lane": "Đường rồng",
		},
		"main_skill": [
			{
				"name": "Bàn tay vàng",
				"info": "Nội tại: Đòn đánh thường thứ tư liên tiếp đẩy lùi những mục tiêu phía trước và gây 264 STP. Ngoài ra Gildur sẽ nhận một lớp lá chắn trong thoáng chốc sau mọi chiêu tung ra.",
			},
			{
				"name": "Quả đấm vàng",
				"info": "ST Gốc: 90/100/110/120/130/140<br>H.Chiêu: 10/9/8/7/6/5<br>Gildur lướt qua những kẻ địch gây 90 (+79) (+0) STVL, đồng thời khiến đồn đánh thường kế tiếp kích hoạt nội tại."
			},
			{
				"name": "Vụ nổ vàng",
				"info": "ST Gốc: 400/500/600/700/800/900<br>H.Chiêu: 9/8.6/8.2/7.8/7.4/7<br>N.Lượng: 75/80/85/90/95/100<br>Gildur bắng vàng theo hướng chỉ định gây 400（+1.2 công phép) STP và làm choáng tất cả kẻ địch trúng chiêu.",
			},
			{
				"name": "Vương quốc vàng",
				"info": "ST Gốc: 100/130/160<br>H.Chiêu: 42/35/28<br>Gildur tạo ra 1 vương quốc vàng liên tục công kích làm choáng và gây 100 (+0) STP lên những kẻ địch trong phạm vi hiệu lực.",
			}
		],
		"skill_up": {
			"line1": "2,6,9,11,14,15",
			"line2": "1,3,5,7,10,13",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,2,4,0",
			}
		],
		"skill_note": "*Sử dụng tốt combo và giữ chân nhiều kẻ địch dường như tỷ lể thắng của cả đội là 80% rồi!!",
		"skill_special": "CapCuu,BocPha,TocBien",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim23",
					"info": "Công phép +1.4 <br>Hút máu phép +0.8%<br>Giáp phép +1.6",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim36",
					"info": "Công phép +2.4<br>Hút máu phép +1%",
				},
				{
					"name": "NgocXanh33",
					"info": "Công phép +2.4<br>Giảm hồi chiêu +0.7%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường trên hoặc dưới",
				"info": "NgocDaiPhapSu,QuyenTruongRhea,SachThanh,VuongMiengHecate,GuomHienTriet,GiayPhuThuy",
			},
			{
				"name": "Đường trên hoặc dưới",
				"info": "GiayHoVe,GiapGaia,KhienHuyenThoai,GuomHienTriet,QuyenTruongRhea,SachThanh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "NgocDaiPhapSu,GiayHoVe,TruongBang,QuyenTruongRhea,SachThanh,VuongMiengHecate",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chơi cùng",
				"info": [
					{"hero_id": "natalya", "id_page": "Natalya"},
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "butterfly", "id_page": "Butterfly"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "toro", "id_page": "Toro"},
					{"hero_id": "chaugnar", "id_page": "Chaugnar"},
					{"hero_id": "raz", "id_page": "Raz"},
					{"hero_id": "thane", "id_page": "Thane"},
					{"hero_id": "azzen_ka", "id_page": "AzzenKa"},
				]
			}
		],
		"hero_story": "\"Câu trả lời của vàng liệu có mua được tất cả là gì? Mua lũ đặt câu hỏi!\"<br><i class=\"clr-orange\">Gildur</i> đã từng là một nhà quý tộc giàu nứt đố đổ vách. Gần như mọi ngóc ngách của cả lục địa đều có liên quan đến sản nghiệp của hắn. Bất cứ nơi đâu dính liếu đến tiền bạc, đều sẽ có dính líu đến <i class=\"clr-orange\">Gildur</i>. Nói không ngoa thì huy hiệu của hắn đôi khi có hiệu lực hơn cả mệnh lệnh của nhà vua. Ấy thế nên chẳng ai lấy làm lại khi hắn được người đời trao cho biệt danh \"Vua hoàng kim\".<br>Thật trớ trêu khi đời sống vật chất càng sung túc bao nhiêu, thì thế giới tinh thần của <i class=\"clr-orange\">Gildur</i> càng trống rỗng vô vị bấy nhiêu. Hắn cố khiến bản thân chìm đắm trong nữ sắc và những cơn say vô tận, nhưng vô dụng. Đúng lúc này <i class=\"clr-orange\">Gildur</i> được biết đến giáo lý \"thanh tẩy linh hồn, cứu rỗi thế gian\" của Cung điện ánh sáng.<br>Thế giới tâm linh của <i class=\"clr-orange\">Gildur</i> nhanh chóng được khỏa lấp khi hắn tham gia Cung điện ánh sáng. Dẫu vậy với kinh nghiệm lõi đời của mình, <i class=\"clr-orange\">Gildur</i> thừa biết thứ tín ngưỡng cuồng nhiệt này về bản chất cũng không khác những thứ hắn đã từng trải nghiệm là bao. Thứ hắn thấy thậm chí còn vươn xa hơn thế, đó là những cơ hội để truy đuổi quyền lực một cách danh chính ngôn thuận nếu hắn vận dụng được những lợi thế của bản thân để leo cao hơn trên nấc thang uy quyền của Cung điện.<br>Rất nhanh chóng, <i class=\"clr-orange\">Gildur</i> đã thành công và trở thành một trong những \"tín đồ\" quan trọng và quyền lực bậc nhất không chỉ của Cung điện, mà là của cả lục địa!<br>“Tâm hồn trống rỗng của ta chỉ có thể được khỏa lấp bằng... quyền lực!\"",
		"hero_skin": [
			{
				"name": "Vua Hoàng Kim",
				"gold": "",
				"voucher": "",
				"event": "Có thể mua bằng Ruby",
				"wall": "Gildur01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Gildur01",
			},
			{
				"name": "Phượt Thủ (Bậc S)",
				"gold": "",
				"voucher": "309",
				"event": "",
				"wall": "Gildur02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "Gildur02",
			},
			{
				"name": "Tiệc Bãi Biển (Bậc SS)",
				"gold": "",
				"voucher": "499",
				"event": "",
				"wall": "Gildur03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "Gildur03",
			},
		]
	},
	"yorn": {
		"hero_id": "Yorn",
		"hero_name": "Yorn",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Xạ thủ",
			"special": "Cấu rỉa",
			"lane": "Đường rồng",
		},
		"main_skill": [
			{
				"name": "Vô tận tên",
				"info": "Nội tại: Đòn đánh thường thứ năm hoặc đòn đánh kế tiếp sau khi Yorn dùng một kĩ năng, cho phép Yorn bắn nhanh gấp đôi bình thường, mỗi đợt gây 75 (Cấp tướng + 6)(+0.4 công vật lý) sát thương vật lý (tổng cộng 4 đợt).",
			},
			{
				"name": "Tên nổ",
				"info": "ST Gốc: 120/145/170/195/220/245<br>H.Chiêu: 9/8.4/7.8/7.2/6.6/6<br>Yorn bắn 1 mũi tên nổ đến vùng chỉ định, gây 120 (+93) STVL lên những kẻ địch trúng chiêu, đồng thời khiến nạn nhân bị choáng trong 0.75s. Ngoài ra đòn đánh thường tiếp theo sẽ kích hoạt nội tại Vô tận tên."
			},
			{
				"name": "Mưa tên",
				"info": "ST Gốc: 105/120/135/150/165/180<br>H.Chiêu: 20/19/18/17/16/15<br>Yorn triệu hồi một ma trận di động liên tục sát thương những kẻ địch ngẫu nhiên bên trong, hay 105 (+73) STVL mỗi mũi tên. Ngoài ra đòn đánh thường tiếp theo sẽ kích hoạt nội tại Vô tận tên.",
			},
			{
				"name": "Tên thần",
				"info": "ST Gốc: 300/400/500<br>H.Chiêu: 18/15/12<br>Yorn bắn một mũi tên cường hóa đến một mục tiêu gây 300 (+1.23 công vật lý) STVL lên tướng địch đầu tiên trúng phải, kèm theo lượng máu đã mất của mục tiêu thành 10% máu đã mất của mục tiêu thành STP thuật, đồng thời các đòn đánh tiếp theo sẽ kích hoạt nội tại Vô tận tên, đồng thời nếu đi qua quái, Tên Thần sẽ gây 1000 sát thương.",
			}
		],
		"skill_up": {
			"line1": "2,3,5,7,9,11",
			"line2": "1,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "0,3,2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,0,2,3,0,4,3,0",
			}
		],
		"skill_note": "*Chiêu 2 khá bá đạo thả luôn cả vùng trời, sát thương không cao nhưng đối thủ phải dè chừng.<br>*Bật Tên Thần bắn xuyên lục địa, kết thúc địch bằng chiêu này với khoảng cách xa sẽ mang lại hưng phấn cao!!",
		"skill_special": "TocBien,TrungTri",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim27",
					"info": "Tốc đánh +0.4%<br>Tỷ lệ chí mạng +0.3%<br>Tốc chạy +0.5%",
				},
				{
					"name": "NgocXanh22",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo36",
					"info": "Công vật lý +2<br>Xuyên giáp +3.6",
				},
				{
					"name": "NgocTim31",
					"info": "Công vật lý +1.6<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường trên hoặc dưới",
				"info": "KiemFafnir,GiayDuMuc,SongDaoBaoTap,KiemMuramasa,PhucHopKiem,NanhFenrir",
			},
			{
				"name": "Đi rừng 1",
				"info": "KiemTruyHon,GiayHoVe,ThuongXuyenPha,ThanhKiem,KiemFafnir,PhucHopKiem",
			},
			{
				"name": "Game thủ hay lên",
				"info": "QuyKiem,GiayDuMuc,SongDaoBaoTap,KiemMuramasa,PhucHopKiem,NanhFenrir",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chơi cùng",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "toro", "id_page": "Toro"},
					{"hero_id": "ormarr", "id_page": "Ormarr"},
					{"hero_id": "krixi", "id_page": "Krixi"},
					{"hero_id": "aleister", "id_page": "Aleister"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "butterfly", "id_page": "Butterfly"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "zephys", "id_page": "Zephys"},
				]
			}
		],
		"hero_story": "“Bất cứ đâu ta đến, ánh sáng sẽ thanh tẩy bóng tối!”<br>Vị chiến binh rực rỡ nhất của Đền Ánh Sáng, <i class=\"clr-orange\">Yorn</i> chói lóa với những mũi tên lấp lánh của chàng.Không chỉ là một chiến binh dũng mãnh, chàng còn đẹp như tạc tượng với thân hình khỏe mạnh cùng gương mặt điển trai cũng đủ “cưa đổ” bất kì ai. Chưa hết, <i class=\"clr-orange\">Yorn</i> còn chơi được đàn lia, mỗi khi chàng cất lên tiếng đàn, điệu nhạc du dương đó sẽ làm mê hoặc bất kì sinh vật nào gần đó. Cả người <i class=\"clr-orange\">Yorn</i> lấp lánh ánh hào quang không chút tì vết, bởi chàng chính là hiện thân của năng lượng, và ánh sáng.<br>Khi các lực lượng bóng tối bắt đầu manh động, <i class=\"clr-orange\">Yorn</i> sẽ cưỡi lên cỗ xe ngựa và dẫn đầu đoàn quân của mình đến chiến trường. Sát cánh bên chàng luôn là thần cung ánh sáng, và cũng như hàng ngàn ánh mặt trời luôn xóa tan bóng tối, chẳng mục tiêu nào có thể trốn thoát những mũi tên của chàng. Thậm chí trên chiến trường đến Maloch cũng phần nào e dè tránh mặt <i class=\"clr-orange\">Yorn</i>, chiến binh hùng mạnh nhất của Đền Ánh Sáng.<br>\"Cẩn thận! Ta đã nhắm vào ngươi!\"",
		"hero_skin": [
			{
				"name": "Mũi Tên Mặt Trời",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Yorn01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Yorn01",
			},
			{
				"name": "Cung Thủ Bóng Đêm",
				"gold": "",
				"voucher": "175",
				"event": "",
				"wall": "Yorn02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "Yorn02",
			},
			{
				"name": "Đặc Nhiệm SWAT (Bậc A)",
				"gold": "",
				"voucher": "379",
				"event": "",
				"wall": "Yorn03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "Yorn03",
			},
			{
				"name": "Thế Tử Nguyệt Tộc (Bậc SS)",
				"gold": "",
				"voucher": "",
				"event": "Có tại Vòng Quay Nguyệt Tộc",
				"wall": "Yorn04",
				"disable": "",
				"img": "thumb4.jpg",
				"video": "Yorn04",
			},
		]
	},
	"toro": {
		"hero_id": "Toro",
		"hero_name": "Toro",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Đỡ đòn",
			"special": "Khống chế / Tiền vệ",
			"lane": "Đường rồng",
		},
		"main_skill": [
			{
				"name": "Mình đồng da sắt",
				"info": "Nội tại: Sau khi tung chiêu Toro được miễn nhiễm khống chế, và tăng 20% miễn thương.",
			},
			{
				"name": "Sừng trâu",
				"info": "ST Gốc: 115/130/145/160/175/190<br>H.Chiêu: 10/9.4/8.8/8.2/7.6/7<br>Toro húc tới trước, gây 115 (+163) STVL đồng thời hất tung những nạn nhân trúng chiêu."
			},
			{
				"name": "Dư chấn",
				"info": "ST Gốc: 375/425/475/525/575/625<br>H.Chiêu: 10/9.4/8.8/8.2/7.6/7<br>Bảo hộ: 250/300/350/400/450/500<br>Toro gầm lên giúp bản thân nhận lớp bảo hộ chặn 250 (+2% máu tối đa) ST, đồng thời gây 375 (+1.17 công vật lý) (+2% máu tối đa) STVL lên những kẻ địch lân cận và làm chậm 35% tốc chạy của các nạ nhân trong 1s.",
			},
			{
				"name": "Đại địa chấn",
				"info": "ST Gốc: 150/200/250<br>H.Chiêu: 40/35/30<br>Toro nhảy xổ đến điểm chỉ định nện liên tục 3 đọt lên mặt đất. Hai đợt đầu gây 150 (+122) STVL và lần lượt làm chậm 30% tốc chạy các kẻ địch trúng chiêu trong 1s, rồi 40% trong 1s. Đợt thứ 3 khiến những nạn nhân trong tầm ảnh hưởng bị hất tung và chịu 300 (+244) STVL.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,4,0",
			}
		],
		"skill_note": "*Dư chấn sẽ giúp bạn loại bỏ các hiệu ứng bất lợi.",
		"skill_special": "CapCuu,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim24",
					"info": "Máu tối đa +36<br>Giáp +1.6",
				},
				{
					"name": "NgocXanh22",
					"info": "Máu tối đa +15.7<br>Hồi máu/5s +3.1<br>Giảm hồi chiêu +0.3%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo37",
					"info": "Tốc đánh +1%<br>Máu tối đa +33.7<br>Giáp +2.3",
				},
				{
					"name": "NgocTim33",
					"info": "Máu tối đa +45<br>Hồi máu/5s +5.2<br>Tốc chạy +0.4%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Chơi hỗ trợ",
				"info": "LenhBaiPhongThan,GiayKienCuong,KhienHuyenThoai,GiapGaia,GiapThongKho,GiapHoMenh",
			},
			{
				"name": "Đường đơn",
				"info": "AoChoangThanRa,GiayHoVe,GiapGaia,KhienHuyenThoai,HuanChuongTroy,KhienThatTruyen",
			},
			{
				"name": "Game thủ hay lên",
				"info": "LenhBaiPhongThan,GiayHoVe,AoChoangThanRa,GiapGaia,KhienHuyenThoai,GiapThongKho",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chơi cùng",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "yorn", "id_page": "Yorn"},
					{"hero_id": "valhein", "id_page": "Valhein"},
					{"hero_id": "tel_annas", "id_page": "TelAnnas"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "chaugnar", "id_page": "Chaugnar"},
					{"hero_id": "raz", "id_page": "Raz"},
					{"hero_id": "azzen_ka", "id_page": "AzzenKa"},
				]
			}
		],
		"hero_story": "\"Ngộ Không, gieo nhân nào gặt quả nấy!\"<br><i class=\"clr-orange\">Toro</i> luôn giữ mối hận Ngộ Không sau từng đó năm. Bá chủ cả dãy Hỏa Diệm Sơn, <i class=\"clr-orange\">Toro</i> được xem như một trong những vị thần vĩ đại nhất của thế giới. Sức mạnh và quyền lực của hắn hiển nhiên còn hơn cả Ngộ Không trong Hiệp Ước Máu của Quái Thú nếu không sử dụng bất kì hỗ trợ gì như Gậy Như Ý.<br>Sự thật là, <i class=\"clr-orange\">Toro</i> đã từng chia sẻ  những gì tốt nhất với Ngộ Không, nhưng mọi thứ đã thay đổi kể từ khi Ngộ Không bắt đầu đi Tây Thiên thỉnh kinh. Tôn Ngộ Không xuống tay giết chết người anh em của <i class=\"clr-orange\">Toro</i> để bảo vệ Đường Tăng trên đường thỉnh Kinh. Chưa dừng ở đấy, Ngộ Không còn bắt con trai của <i class=\"clr-orange\">Toro</i> là Hồng Hài Nhi, và xen vào cuộc tình tay ba giữa <i class=\"clr-orange\">Toro</i>, Thiết Phiến Công Chúa và Ngọc Diện Hồ Ly. Kể từ đây, tình nghĩa huynh đệ rạn nứt, mối thâm thù của họ ngày càng trở nên sâu đậm, không bút mực nào tả xiết.<br>\"Chúng ta đã thề là anh em kết nghĩa, sao hắn luôn gây rắc rối cho ta vậy?\", <i class=\"clr-orange\">Toro</i> gầm lên hết sức giận dữ.<br><i class=\"clr-orange\">Toro</i> muốn giáp mặt Ngộ Không để giải quyết mọi ân oán, nhưng Ngộ Không nay đã trở nên thật xa xôi tận Tây Thiên. <i class=\"clr-orange\">Toro</i> cảm thấy như bị hạ nhục. Sau khi biết tin Ngộ Không nay đã đến Athanor, <i class=\"clr-orange\">Toro</i> nắm lấy cơ hội và theo dấu Ngộ Không. Hắn chiếm được lòng tin của Afata sau khi tiết lộ danh tính thật và chờ đợi một trận thư hùng cùng \"người anh em\" của hắn.<br>“Con khỉ ngu ngốc kia mau ra đây? Ta sẽ cho ngươi một bài học bằng nắm đấm.",
		"hero_skin": [
			{
				"name": "Ngưu Ma Vương",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Toro01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Toro01",
			},
			{
				"name": "Đặc Cảnh NYPD (Bậc A)",
				"gold": "",
				"voucher": "270",
				"event": "",
				"wall": "Toro02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "Toro02",
			},
			{
				"name": "Trung Phong Cắm",
				"gold": "",
				"voucher": "249",
				"event": "",
				"wall": "Toro03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "Toro03",
			},
		]
	},
	"taara": {
		"hero_id": "Taara",
		"hero_name": "Taara",
		"main_info": {
			"price_gold": "",
			"price_voucher": "",
			"price_text": "Quà đăng nhập",
			"position": "Đỡ đòn / Đấu sĩ",
			"special": "Tiền đạo / Khôi phục",
			"lane": "Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Chiến ý",
				"info": "Nội tại: Mỗi 1% máu tối đa bị mất được thêm 3~6 công vật lý (tăng theo cấp tướng)<br>Khi sử dụng mọi chiêu thức sẽ tiêu hao 8% máu hiện tại<br>Hồi lại 6% máu đã mất trong 3 giây mỗi khi sử dụng Đập tan hoặc Trăn trối.",
			},
			{
				"name": "Trăn trối",
				"info": "ST Gốc: 120/155/190/225/260/295<br>H.Chiêu: 12/11.4/10.8/10.2/9.6/9<br>Giảm tốc chạy: 30%/36%/42%/48%/54%/60%<br>Taara nhảy nện búa vào điểm chỉ định, gây 120 (+86) STVL và làm chậm 30% tốc chạy của nạn nhân trúng chiêu trong 2s."
			},
			{
				"name": "Đập tan",
				"info": "ST Gốc: 150/180/210/240/270/300<br>Taara vung búa xoay tròn gây hai lượt sát thương lên kẻ địch lân cận, mỗi lượt gây 150 (+0.6 công vật lý) STVL.",
			},
			{
				"name": "Thân thể thép",
				"info": "Hồi chiêu: 35 giâybr>Taara sử dụng hết tiềm năng của mình giúp phục hồi 8% máu tối đa mỗi giây trong 5/7/9 giây, đồng thời tăng 30% tốc chạy.",
			}
		],
		"skill_up": {
			"line1": "2,3,5,7,9,11",
			"line2": "1,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,4,0",
			}
		],
		"skill_note": "*Nếu để lượng máu tầm 50%, gank các đường sẽ càng hiệu quả hơn.",
		"skill_special": "TrungTri,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim28",
					"info": "Máu tối đa +13.5<br>Tốc chạy +0.7%",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo34",
					"info": "Công vật lý +3.2",
				},
				{
					"name": "NgocTim32",
					"info": "Tốc đánh +1%<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh36",
					"info": "Giáp +5<br>Giáp phép +5",
				}
			]
		},
		"item_build": [
			{
				"name": "Đi rừng",
				"info": "RiuLeviathan,GiayHermes,AoChoangBangGia,GiapGaia,GiapThongKho,PhuChuTruongSinh",
			},
			{
				"name": "Đường trên hoặc dưới",
				"info": "RiuHyoga,GiayDuMuc,SongDaoBaoTap,PhucHopKiem,GuomSamSet,HerculeThinhNo",
			},
			{
				"name": "Game thủ hay lên",
				"info": "AoChoangThanRa,GiayHoVe,RiuHyoga,GiapGaia,KhienThatTruyen,GiapHoMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chơi cùng",
				"info": [
					{"hero_id": "toro", "id_page": "Toro"},
					{"hero_id": "ormarr", "id_page": "Ormarr"},
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "aleister", "id_page": "Aleister"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "ormarr", "id_page": "Ormarr"},
					{"hero_id": "trieu_van", "id_page": "TrieuVan"},
				]
			}
		],
		"hero_story": "Dãy Núi Thép nằm sừng sững ở đất Bắc xa xôi, bao quanh Cung điện ánh sáng như một bức tường bằng sắt. Dãy núi nổi tiếng này được biết đến với các mỏ quặng kim loại, vốn là nguồn năng lượng chính của giới chức sắc trong Cung điện ánh sáng.<br>Là một nhóm người đến với vùng đất này, Cung điện ánh sáng trực tiếp điều khiển tất cả những người theo tín hữu của họ. Bộ tộc do <i class=\"clr-orange\">Taara</i> dẫn đầu đã đạt được nhiều thành tích trong thời kỳ chiến tranh. Mặc dù họ còn thiếu những kỹ năng chế tác cần thiết để chế tạo vũ khí, họ vẫn nắm giữ những chiếc búa quyền năng và đẩy lùi mọi cuộc tấn công dưới chân núi. Những dòng sông máu cứ chảy, bộ lạc của <i class=\"clr-orange\">Taara</i> phải trả cái giá quá đắt. Tuy nhiên, khi gần như thất thế khắp Núi Thép, ý nghĩa bỏ cuộc vẫn không xuất hiện trong đầu <i class=\"clr-orange\">Taara</i>.<br>Trong ngày ánh sáng hồi sinh, <i class=\"clr-orange\">Taara</i> cùng các bộ lạc tổ chức một bữa tiệc linh đình. Họ thắp lên ngọc lửa sáng sâu trong những ngọn núi và đốt lên những cột lửa sáng lóa. Các sứ giả của Thane đến, mang tới mệnh lệnh từ vị vua đáng kính: Vì sự trung thành của <i class=\"clr-orange\">Taara</i> trong chiến tranh, cô xứng đáng được trao danh hiệu cao quý. Cô sở hữu một vùng đất rộng lớn trong vương quốc mới và cả bộ lạc cuối cùng cũng thoát khỏi cảnh nghèo đói.<br>Tuy nhiên, trước khi <i class=\"clr-orange\">Taara</i> có thể lên kế hoạch cho những điều mới mẻ, sự giận dữ của Gildur đã lan đến Sông Thép. Nắm giữ ngân khố của Cung điện ánh sáng, Gildur biết rằng tăng dân số là tăng khả năng sản xuất, và ông không cho phép Thane tự ý đưa thêm người vào Cung điện. Người đưa tin của Thane bị lưu đày, <i class=\"clr-orange\">Taara</i> bị coi như là kẻ phản bội niềm tin và bị bỏ tù. Ngoài ra, các khoản thuế áp dụng với bộ lạc của cô bị tăng gấp đôi trong 10 như một hình phạt thích đáng.<br>Mọi thứ quay ngoắt 180 độ, <i class=\"clr-orange\">Taara</i> như rơi thẳng từ thiên đàng xuống địa ngục. Veera, gián điệp bóng đêm, nắm lấy cơ hội và giải cứu <i class=\"clr-orange\">Taara</i>, và để lại lời nhắn: \"Những vị thần Ánh Sáng đã khiến cô gục ngã, tại sao cô không nắm lấy Bóng Tối thật sự?\". Thất vọng vì những gì Cung điện ánh sáng đối xử với cô, <i class=\"clr-orange\">Taara</i> đã tự gieo mình xuống vực thẳm. Cô sẵn sàng bị dầy vò bởi lửa băng, và dâng linh hồn mình cho bóng đêm.<br>\"Ta chỉ dựa vào sức mạnh mà ta có trong tay!\"",
		"hero_skin": [
			{
				"name": "Búa Cuồng Bạo",
				"gold": "",
				"voucher": "",
				"event": "Quà đăng nhập",
				"wall": "Taara01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Đại Tù Trưởng (Bậc S)",
				"gold": "",
				"voucher": "510",
				"event": "",
				"wall": "Taara02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Hỏa Ngọc Nữ Đế (Bậc S)",
				"gold": "",
				"voucher": "379",
				"event": "",
				"wall": "Taara03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "Taara03",
			},
			{
				"name": "Tiệc Bãi Biển (Bậc SS)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Taara04",
				"disable": "yes",
				"img": "thumb4.jpg",
				"video": "Taara04",
			},
		]
	},
	"nakroth": {
		"hero_id": "Nakroth",
		"hero_name": "Nakroth",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Sát thủ / Đấu sĩ",
			"special": "Tiền đạo",
			"lane": "Đi rừng",
		},
		"main_skill": [
			{
				"name": "Thẩm phán oai nghiêm",
				"info": "Nội tại: Mỗi đòn đánh thường thứ tư sẽ hất tung 1 mục tiêu, đồng thời chiêu tung trúng đích giúp Nakroth tăng 50% tốc đánh.",
			},
			{
				"name": "Bồi thẩm đoàn",
				"info": "ST Gốc: 135/151/167/183/199/215<br>H.Chiêu: 9.6/8.8/8/7.2/6.4/5.6<br>Nakroth lướt đến hất tung 1 mục tiêu, gây 135 (+106) STVL. Chiêu này có thể được tung râ một lần nữa trong vòng 5s sau khi sử dụng."
			},
			{
				"name": "Nguồn cơn rắc rối",
				"info": "ST Gốc: 180/200/220/240/260/280<br>Nakroth lướt ngược lại và khiến đòn đánh thường kế tiếp trong vòng 3 thành một đòn quét gây 180 (+172) STVL.",
			},
			{
				"name": "Gươm hành quyết",
				"info": "ST Gốc: 130/180/230<br>H.Chiêu: 36/30/24<br>Nakroth vung gươm chém liên tục những kẻ địch trước mặt, gây 130 (+107) STVL mỗi đợt. Suốt thời gian nàu Nakroth không thể bị khống chế, đặt biệt đòn cuối cùng sẽ hất văng nạn nhân.",
			}
		],
		"skill_up": {
			"line1": "1,3,7,9,13,14",
			"line2": "2,5,6,10,11,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "4,3,0,2,0",
			}
		],
		"skill_note": "*Có thể dùng Bồi thẩm đoàn hoặc Gươm hành quyết để tiếp cận mục tiêu.",
		"skill_special": "TrungTri",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo26",
					"info": "Công vật lý +1.5<br>Tốc đánh +0.4%",
				},
				{
					"name": "NgocTim21",
					"info": "Tốc đánh +0.4%<br>Hút máu +0.8%",
				},
				{
					"name": "NgocXanh21",
					"info": "Tốc đánh +0.4%<br>Giảm hồi chiêu +0.5%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo36",
					"info": "Công vật lý +2<br>Xuyên giáp +3.6",
				},
				{
					"name": "NgocTim34",
					"info": "Hút máu (Vật lý) +1.6%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đi rừng",
				"info": "KiemTruyHon,GiayKienCuong,ThuongXuyenPha,PhucHopKiem,AoChoangThanRa,GiapHoMenh",
			},
			{
				"name": "Đi rừng",
				"info": "KiemTruyHon,GiayHoVe,AoChoangThanRa,ThuongXuyenPha,PhucHopKiem,GiapHoMenh",
			},
			{
				"name": "Đi rừng",
				"info": "RiuLeviathan,GiayKienCuong,ThuongXuyenPha,PhucHopKiem,AoChoangThanRa,GiapHoMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chơi cùng",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "gildur", "id_page": "Gildur"},
					{"hero_id": "toro", "id_page": "Toro"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "butterfly", "id_page": "Butterfly"},
					{"hero_id": "zephys", "id_page": "Zephys"},
				]
			}
		],
		"hero_story": "\"Đối mặt với phán xét của ngươi!\"<br><i class=\"clr-orange\">Nakroth</i>, dẫu là phán quan của cõi âm, nhưng lại nổi tiếng cả đại lục bởi sự công chính liêm minh, thiết diện vô tư của ông. Tất cả linh hồn đến với cõi âm đều được <i class=\"clr-orange\">Nakroth</i> phán xét một cách công bình, đối với những kẻ có tội bất luận xuất thân đều sẽ phải gánh chịu hình phạt thích đáng!<br>Sau khi Zephys tạo nên cầu nối giữa cõi âm và toàn bộ thế giới, <i class=\"clr-orange\">Nakroth</i> đã đầu nhập vào Lực lượng Sa đọa. Thế nhưng trái ngược với sự tàn nhẫn của lực lượng này, đoàn quân vong linh được dẫn dắt bởi <i class=\"clr-orange\">Nakroth</i> chiếu đấu vì lý tưởng, không hề xuất phát từ dục vọng bạo lực trên chiến trường.<br>Đương nhiên trên chiến trường không có chỗ cho sự mềm lòng, và sự thiện chiến của <i class=\"clr-orange\">Nakroth</i> chỉ càng gia tăng sự kính sợ của tất cả đối với ông. Đối với các lời đồn ngày càng lan truyền về sức mạnh khủng khiếp của mình, <i class=\"clr-orange\">Nakroth</i> chỉ khẽ nhếch miệng cười.",
		"hero_skin": [
			{
				"name": "Lưỡi Đao Phán Xét",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Nakroth01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Quân Đoàn Địa Ngục (Bậc A)",
				"gold": "",
				"voucher": "450",
				"event": "",
				"wall": "Nakroth02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Bboy Công Nghệ (Bậc S)",
				"gold": "",
				"voucher": "499",
				"event": "",
				"wall": "Nakroth03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "",
			},
			{
				"name": "Chiến Binh Hỏa Ngục (Bậc S)",
				"gold": "",
				"voucher": "309",
				"event": "",
				"wall": "Nakroth04",
				"disable": "",
				"img": "thumb4.jpg",
				"video": "",
			},
			{
				"name": "Siêu Việt Bậc I (EVO I)",
				"gold": "",
				"voucher": "",
				"event": "Tiến hóa trang phục",
				"wall": "Nakroth05",
				"disable": "yes",
				"img": "thumb5.jpg",
				"video": "",
			},
			{
				"name": "Khiêu Chiến (AIC 2018)",
				"gold": "",
				"voucher": "",
				"event": "1 viên đá quý",
				"wall": "Nakroth06",
				"disable": "yes",
				"img": "thumb6.jpg",
				"video": "",
			},
		]
	},
	"grakk": {
		"hero_id": "Grakk",
		"hero_name": "Grakk",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Đỡ đòn / Pháp sư",
			"special": "Khống chế",
			"lane": "Đường rồng",
		},
		"main_skill": [
			{
				"name": "Huyết tế",
				"info": "Nội tại: Khi chịu sát thương vượt quá 10% lượng máu hiện tại, Grakk sẽ bùng nổ (2s hồi chiêu) gây trong phạm vi 500 xung quanh 40 (+0) (+74) (2% máu tối đa) STP. Sau khi Grakk tử vong, 3s sau sẽ phát nổ trong phạm vi 500 xung quanh khiến những kẻ địch trúng chiêu phải chịu 160 (+0) (+299) ( 8% máu tối đa) STP.",
			},
			{
				"name": "Càn quét",
				"info": "ST Gốc: 150/180/210/240/270/300<br>Grakk bộc phát năng lượng quanh bản thân, gây 150 (+0) STP, làm câm lặng kẻ địch 0.5s và làm chậm 30% tốc chạy của những kẻ địch trúng chiêu. Các nạn nhân lân cận Grakk sẽ phải chịu gấp 2 lần sát thương và hiệu ứng làm chậm."
			},
			{
				"name": "Xích ma quái",
				"info": "ST Gốc: 625/750/875/1000/1125/1250<br>H.Chiêu: 15/14.4/13.8/13.2/12.6/12<br>Grakk tung xích kéo địch đến trước mặt, gây 625 (+0) STP,  Nội tại: mỗi lần Grakk hạ hoặc phụ sẽ tăng máu tối đa thêm 125, cộng dồn lên đến 20 lần.",
			},
			{
				"name": "Nuốt chửng",
				"info": "ST Gốc: 1200/1500/1800<br>H.Chiêu: 40/35/30<br>Sau thoáng chốc, Grakk từ từ nuốt chửng kẻ địch trong vùng ảnh hưởng, tổng cộng gây 1200 (+0) STP, đồng thời tự tạo lá chắn bảo hộ bản thân.",
			}
		],
		"skill_up": {
			"line1": "2,6,10,13,14,15",
			"line2": "1,3,5,7,9,11",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,2,4,0",
			}
		],
		"skill_note": "*Kiếm vị trí tốt và kéo chính xác nhất có thể.",
		"skill_special": "TocBien,CapCuu",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim25",
					"info": "Máu tối đa +45",
				},
				{
					"name": "NgocXanh26",
					"info": "Giáp +5.4",
				}
			],
			"rune3": [
				{
					"name": "NgocDo32",
					"info": "Công phép +5.3",
				},
				{
					"name": "NgocTim39",
					"info": "Máu tối đa +75",
				},
				{
					"name": "NgocXanh34",
					"info": "Máu tối đa +37.5<br>Giảm hồi chiêu +0.6%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường đơn",
				"info": "AoChoangThanRa,GiayHoVe,HuanChuongTroy,KhienHuyenThoai,AoChoangBangGia,SachThanh",
			},
			{
				"name": "Đường đơn",
				"info": "NgocDaiPhapSu,GiayHoVe,MatNaBerith,GuomHienTriet,VuongMiengHecate,SachThanh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "LenhBaiPhongThan,GiayHermes,KhienHuyenThoai,HuanChuongTroy,GiapThongKho,GiapHoMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chơi cùng",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "natalya", "id_page": "Natalya"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "ormarr", "id_page": "Ormarr"},
					{"hero_id": "toro", "id_page": "Toro"},
				]
			}
		],
		"hero_story": "<i class=\"clr-orange\">Grakk</i> là một gã đao phủ trứ danh với sự tàn bạo khôn cùng, hắn thường dùng các sợi xích khủng bố trói lấy linh hồn nạn nhân, rồi nhồm nhoàm ngấu nghiến cắn xé họ từng chút một. Cái giá phải trả cho chuỗi hành động này cũng khủng bố không kém, nó khiến hắn chẳng thể nuốt bất cứ thứ gì khác ngoại trừ linh hồn, và rằng hắn sẽ phải mãi mãi là một con quỷ đói!<br>Để kìm hãm cơn đói bất diệt, đôi khi hắn phải tìm đến Zephys - kẻ thu thập linh hồn và Nakroth - kẻ phán xét;. Tất cả các linh hồn tội lỗi chỉ có một số phận: yên vị trong dạ dày của hắn. Sau khi cuộc chiến nổ ra, để nhận lấy sự phục vụ của <i class=\"clr-orange\">Grakk</i>, Maloch đã hứa rằng hắn có thể làm bất kỳ điều gì hắn muốn với mọi tù binh.<br>Cơn đói khát vĩnh cửu biến <i class=\"clr-orange\">Grakk</i> trở thành một thảm hỏa chiến tranh. Với mỗi linh hồn tiêu hóa, hắn lại càng trở nên mạnh mẽ hơn. Hắn biến tất cả những thứ gì không thể ăn trở thành bầy tôi tớ quỷ quái trợ giúp hắn trong công cuộc tìm kiếm thêm nạn nhân.<br>\"Ta... đói...\"",
		"hero_skin": [
			{
				"name": "Kẻ Phàm Ăn",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Grakk01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Chàng Gấu Tuyết",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Grakk02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Khô Lâu Đại tướng",
				"gold": "",
				"voucher": "185",
				"event": "",
				"wall": "Grakk03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "",
			},
			{
				"name": "Thuyền Trưởng Râu Đỏ",
				"gold": "",
				"voucher": "359",
				"event": "",
				"wall": "Grakk04",
				"disable": "yes",
				"img": "thumb4.jpg",
				"video": "",
			},
		]
	},
	"aleister": {
		"hero_id": "Aleister",
		"hero_name": "Aleister",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Pháp sư",
			"special": "Khống chế",
			"lane": "Đường giữa",
		},
		"main_skill": [
			{
				"name": "Ma thuật đen",
				"info": "Nội tại: Aleister nguyền rủa một mục tiêu với mỗi kỹ năng. Mỗi lần cộng dồn thứ 3 sẽ kích hoạt một vụ nổ gây 55 ( mỗi khi tăng 1 cấp +5 điểm)(+0.3 Công phép) STC<br>Thời gian duy trì dấu ấn： 5s<br>Khoảng cách giữa các lần kích hoạt dấu ấn: 0s.",
			},
			{
				"name": "Vách ngăn hắc ám",
				"info": "ST Gốc: 315/355/395/435/475/515<br>H.Chiêu: 12/11.4/10.8/10.2/9.6/9<br>Aleister tạo ra một vách ngăn bằng năng lượng hắc ám gây choáng và gây 130 (+10 mỗi cấp)(+0.4 công phép) STP lên mục tiêu, kèm theo 1 điểm cộng dồn ma thuật đen."
			},
			{
				"name": "Ma trận thống khổ",
				"info": "ST Gốc: 125/140/155/170/185/200<br>Aleister triệu hồi một ma trận liên tục gây sát thương lên kẻ thù, mỗi lượt gây 125 (+0.3 Công phép) STP, mỗi lần gây sát thương tạo một điểm ma thuật đen.",
			},
			{
				"name": "Ngục tù vĩnh hằng",
				"info": "ST Gốc: 100/125/150<br>H.Chiêu: 35/30/25<br>Aleister bẫy một kẻ địch trong nhà tù ma thuật, gây 100 (+0.25 Công phép) STP mỗi đợt trong 2.5s, mỗi lần gây sát thương tạo một điểm ma thuật đen.",
			}
		],
		"skill_up": {
			"line1": "2,3,6,8,11,14",
			"line2": "1,5,7,10,13,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,4,0",
			}
		],
		"skill_note": "*Cố gằng tìm vị trí tốt nhất để dùng chiêu cuối một cách hiệu quả nhất.",
		"skill_special": "TocBien,CapCuu",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim23",
					"info": "Công phép +1.4 <br>Hút máu phép +0.8%<br>Giáp phép +1.6",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim36",
					"info": "Công phép +2.4<br>Hút máu phép +1%",
				},
				{
					"name": "NgocXanh310",
					"info": "Tốc đánh +0.6%<br>Xuyên giáp phép +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường giữa",
				"info": "PhuongHoangLe,GiayPhuThuy,TruongBang,VuongMiengHecate,TruongHonMang,TruongBungNo",
			},
			{
				"name": "Đường giữa",
				"info": "NgocDaiPhapSu,GiayKienCuong,KhienHuyenThoai,DayChuyenLucBao,TruongBang,GiapHoMenh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "NgocDaiPhapSu,GiayThuatSi,VuongMiengHecate,TruongBang,QuyenTruongRhea,SachThanh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chơi cùng",
				"info": [
					{"hero_id": "fennik", "id_page": "Fennik"},
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "gildur", "id_page": "Gildur"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "krixi", "id_page": "Krixi"},
					{"hero_id": "butterfly", "id_page": "Butterfly"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
				]
			}
		],
		"hero_story": "\"Tột cùng của dối trá là gì ngoài sự thật?\"<br>Nhiều người có thể đã quên lãng, nhưng <i class=\"clr-orange\">Aleister</i> đã từng là một trong những ứng viên sáng giá của Cung điện ánh sáng. Đã từng có thời hắn cùng Yorn là cặp đôi xuất sắc, tài năng nhất của cả thế hệ trẻ Cung điện. Ấy thế mà <i class=\"clr-orange\">Aleister</i>, dẫu thông minh nhưng lại thiếu lòng tin, đã rơi vào sự mê hoặc của Veera rồi sa vào con đường bóng tối.<br><i class=\"clr-orange\">Aleister</i> quả thật đã không phụ lòng tin của mọi người về tài năng của hắn, điểm khác biệt duy nhất là giờ đây lập trường của hắn đã thay đổi hoàn toàn. Bằng thiên phú kinh người, <i class=\"clr-orange\">Aleister</i> đã liên tục giúp lực lượng Sa đoạ giành được hết chiến thắng này đến chiến thắng khác trước quân phản kháng.<br>Vì nghĩa quên thân, Valhein dẫn đầu một lực lượng đặc nhiệm quyết ám sát gã phản đồ. Nhưng nào hay tất cả đã nằm trong dự tính của <i class=\"clr-orange\">Aleister</i>, hắn lặng lẽ thiết lập cạm bẫy rồi bất thình lình phản công khiến Valhein suýt nữa đã phải hi sinh.<br>\"Muốn đấu trí với ta? Các ngươi đủ sức sao?\"",
		"hero_skin": [
			{
				"name": "Ác Thần Xảo Quyệt",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Aleister01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Thiếu Niên Hắc Ám",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Aleister02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Quang Vinh",
				"gold": "",
				"voucher": "",
				"event": "S5 Thưởng hạng",
				"wall": "Aleister03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "",
			},
		]
	},
	"fennik": {
		"hero_id": "Fennik",
		"hero_name": "Fennik",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Xạ thủ",
			"special": "Tiền đạo / Trung phong",
			"lane": "Đi rừng / Đường rồng",
		},
		"main_skill": [
			{
				"name": "Ná thun",
				"info": "Nội tại: Với chiếc ná thun thần sầu, Fennik sở hữu tầm đánh xa hơn so với đại đa số các xạ thủ khác. Ngoài ra đạn ná sau khi trúng đích còn lan sát thương ra xung quanh mục tiêu.",
			},
			{
				"name": "Kíp nổ",
				"info": "ST Gốc và ST gây thêm: 160/200/240/280/320/360<br>H.Chiêu: 10/9.4/8.8/8.2/7.6/7 giây<br>Tốc đánh: 25%/30%/35%/40%/45%/50%<br>Fennik ném một sợi xích kỳ lạ lên kẻ địch, thứ sẽ phát nổ sau 4s đòn đánh gây 160 (+80) STVL, trong thời gian sợi xích còn bám lấy mục tiêu, đòn tấn công của Fennik sẽ gây thêm 160 (+80) STVL, cộng dồn tối đa 4 lần, đồng thời sau khi tung chiêu Fennik sẽ được tăng 25% tốc đánh trong 4s."
			},
			{
				"name": "Nẹt điện",
				"info": "ST Gốc: 80/90/100/110/120/130<br>ST thêm: 30/36/42/48/54/60<br>H.Chiêu: 12/11.5/11/10.5/10/9.5<br>Fennik lướt đi cực nhanh và không thể bị chọn làm mục tiêu đồng thời tạo ra 1 vệt điện tích gây 80 (+107) STVL và làm chậm 50% tốc chạy của những kẻ địch trúng chiêu trong 2s. Các nạn nhân đứng trên vệt điện tích sẽ phải chịu 30 (+40) STVL mỗi 0.25s.",
			},
			{
				"name": "Lốc siêu thanh",
				"info": "ST Gốc: 80/105/130<br>H.Chiêu: 30/25/20 giây<br>Fennik ném dây xích đến nơi chỉ định tạo ra cơn bão siêu thanh gây 75 (+0.30) STVL mỗi 0.5s gây và hiệu ứng làm chậm, những kẻ địch trong phạm vi ảnh hưởng sẽ phải chịu gấp đôi sát thương, đồng thời Bão Siêu Thanh có thể giúp Fennik nạp kíp nổ cho Chiêu 1.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,4,2,0",
			}
		],
		"skill_note": "*Hãy tận dụng tốt Nẹt Điện để ra vào giao tranh hiệu quả nhất có thể.",
		"skill_special": "TrungTri,CapCuu,TocBien",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo21",
					"info": "Tốc đánh +1.2%",
				},
				{
					"name": "NgocTim27",
					"info": "Tốc đánh +0.4%<br>Tỷ lệ chí mạng +0.3%<br>Tốc chạy +0.5%",
				},
				{
					"name": "NgocXanh21",
					"info": "Tốc đánh +0.4%<br>Giảm hồi chiêu +0.5%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo38",
					"info": "Tốc đánh +1.6%<br>Tỷ lệ chí mạng +0.5%",
				},
				{
					"name": "NgocTim32",
					"info": "Tốc đánh +1%<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đi rừng",
				"info": "KiemTruyHon,GiayHoVe,ThuongLonginus,KiemFafnir,PhucHopKiem,LiemDoatMenh",
			},
			{
				"name": "Đi rừng",
				"info": "KiemTruyHon,GiayDuMuc,ThuongXuyenPha,ThanhKiem,AoChoangBangGia,KiemMuramasa",
			},
			{
				"name": "Game thủ hay lên",
				"info": "KiemTruyHon,GiayDuMuc,QuyKiem,ThanhKiem,KiemMuramasa,NanhFenrir",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chơi cùng",
				"info": [
					{"hero_id": "ormarr", "id_page": "Ormarr"},
					{"hero_id": "krixi", "id_page": "Krixi"},
					{"hero_id": "violet", "id_page": "Violet"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "batman", "id_page": "Batman"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "kriknak", "id_page": "Kriknak"},
				]
			}
		],
		"hero_story": "\"Lên thôi, mọi người!\"<br><i class=\"clr-orange\">Fennik</i> rất có thể là sinh vật nhanh nhất trên thế gian. Lý do tồn tại chữ \"có thể\" là vì sử sách thường chỉ lưu lại các kỷ lục về sức mạnh hoặc trí khôn, còn về tốc độ thì chẳng có mấy. Và rồi <i class=\"clr-orange\">Fennik</i> xuất hiện - hắn nhanh đến mức chẳng có con gà nào thoát nổi tay hắn, và cũng chẳng ai tóm được hắn. Mọi thứ thế cho đến khi chẳng ai hay, <i class=\"clr-orange\">Fennik</i> đã trở thành tên trộm với mức tiền thưởng cao kỷ lục từ trước đến nay.<br>Trong nội bộ xã hội cũng có những luồng ý kiến trái chiều nhau về <i class=\"clr-orange\">Fennik</i>. Một số thì cay hắn đến cùng cực, chủ yếu là do mãi không tóm được hắn, hoặc đã từng là nạn nhân bị hắn viếng thăm. Một số thì lại rất thích hắn, vì họ không ít thì nhiều dều chịu ân huệ của hắn.<br>Cướp kẻ giàu, cho người nghèo? <i class=\"clr-orange\">Fennik</i> không bận tâm, chẳng qua chỉ là hắn thích nhìn thấy những kẻ vò đầu bứt tai vì mất của, cũng như sự ngạc nhiên sung sướng của những người được nhận của cải từ trên trời rơi xuống. Còn về giàu hay nghèo thì liên quan gì đến hắn.<br>Quan trọng là phải vui!",
		"hero_skin": [
			{
				"name": "Cáo Siêu Thanh",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Fennik01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Nhà Thám Hiểm (Hữu hạn)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Fennik02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Tiệc Bánh Kẹo (Bậc A)",
				"gold": "",
				"voucher": "349",
				"event": "",
				"wall": "Fennik03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "",
			},
			{
				"name": "Tuần Lộc Láu Lỉnh (Christmas)",
				"gold": "",
				"voucher": "",
				"event": "1 viên đá quý",
				"wall": "Fennik04",
				"disable": "",
				"img": "thumb4.jpg",
				"video": "",
			},
		]
	},
	"lumburr": {
		"hero_id": "Lumburr",
		"hero_name": "Lumburr",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Đỡ đòn / Trợ thủ",
			"special": "Khống chế / Yểm hộ",
			"lane": "Đường rồng",
		},
		"main_skill": [
			{
				"name": "Ỷ mạnh vệ yếu",
				"info": "Nội tại: Lumburr giúp đồng đội có lượng máu  thấp nhất trong bán kính 500 xung quanh 80 giáp và giáp phép.",
			},
			{
				"name": "Đất bằng dậy sóng",
				"info": "ST Gốc: 230/280/330/380/430/480<br>Giảm st: 15%/17%/19%/21%/23%/25%<br>Lumburr giận dữ đấm xuống đất hất văng đất đá, gây 230 (+1156) STVL. Kẻ địch trúng chiêu sẽ chịu suy yếu, bị giảm 15% STVL và phép gây ra (chỉ hiệu lực với tướng), hiệu ứng kéo dài 3s."
			},
			{
				"name": "Bất khả cản phá",
				"info": "H.Chiêu: 13/12.4/11.8/11.2/10.6/10<br>Năng lượng：75/80/85/90/95/100<br>.Lumburr xông về phía trước gây 300/340/380/420/460/500 (+95) STVL đồng thời hất văng những kẻ địch trúng chiêu. Sau khi rớt xuống đất nạn nhân sẽ bị làm chậm 50% trong 1s. Đồng đội trúng chiêu sẽ nhận 450/505/560/615/670/725 (+78) lá chắn và 115% tốc chạy trong 3s.",
			},
			{
				"name": "Long trời lở đất",
				"info": "H.Chiêu: 36/33/30<br>Năng lượng： 120/140/160<br>Lumburr nổi thịnh nộ tạo ra 11 cơn động đát hất văng kẻ địch, gây 520/650/780 (+168) STVL. Khê nứt khiến những nạn nhân còn bên trong sẽ bị làm chậm 60% tốc chạy và chịu 52/65/78 (+16) STVL mỗi giây trong 5s.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,0,2",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "4,3,2,0",
			}
		],
		"skill_note": "*Cố gắng hất tung nhiều kẻ địch nhất có thể.",
		"skill_special": "CapCuu,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim25",
					"info": "Máu tối đa +45",
				},
				{
					"name": "NgocXanh22",
					"info": "Máu tối đa +15.7<br>Hồi máu/5s +3.1<br>Giảm hồi chiêu +0.3%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo34",
					"info": "Công vật lý +3.2",
				},
				{
					"name": "NgocTim39",
					"info": "Máu tối đa +75",
				},
				{
					"name": "NgocXanh34",
					"info": "Máu tối đa +37.5<br>Giảm hồi chiêu +0.6%",
				}
			]
		},
		"item_build": [
			{
				"name": "Chơi hỗ trợ",
				"info": "LenhBaiPhongThan,GiayKienCuong,KhienHuyenThoai,HuanChuongTroy,HerculeThinhNo,KhienThatTruyen",
			},
			{
				"name": "Chơi hỗ trợ",
				"info": "LenhBaiPhongThan,GiayHoVe,GiapGaia,KhienHuyenThoai,AoChoangBangGia,PhuChuTruongSinh",
			},
			{
				"name": "Đường Caesar",
				"info": "AoChoangThanRa,GiayHoVe,KhienHuyenThoai,GiapGaia,HuanChuongTroy,GiapHoMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chơi cùng",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "omega", "id_page": "Omega"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "natalya", "id_page": "Natalya"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "ormarr", "id_page": "Ormarr"},
					{"hero_id": "toro", "id_page": "Toro"},
				]
			}
		],
		"hero_story": "\"Chiến tranh tàn phá đất đai. Đất đai tàn phá chiến tranh!\"<br>Đất đai là một trong những nguyên tố cơ bản của thế giới. Và <i class=\"clr-orange\">Lumburr</i>, một trong những trường hợp đặc biệt nhất của các kỳ tích hi hữu, được kế thừa toàn bộ ý thức từ đất mẹ. Hắn lẳng lặng bảo vệ tất cả những sinh linh trên vùng đất này đã hàng ngàn năm trôi qua.<br>Nguyên tắc của <i class=\"clr-orange\">Lumburr</i> thật ra rất đơn giản, hắn không hề can dự gì đến tất cả những quỹ đạo vận động của thế giới tự nhiên. Bất kể hành vi dù là mạnh được yếu thua, ỷ mạnh hiếp yếu... hắn đều điềm nhiên quan sát và chỉ quan sát mà thôi. Thế nhưng, khi quân đoàn ác quỷ ngoại giới muốn xâm lược thế giới này, thời điểm hắn xuất thế đã điểm.<br><i class=\"clr-orange\">Lumburr</i> rời khỏi núi rừng, nơi nghỉ ngơi hàng ngàn năm qua, để gia nhập đội quân bảo vệ thế giới. Trước bầy ác quỷ hung hãn, <i class=\"clr-orange\">Lumburr</i> luôn là một lớp lá chắn đáng tin cậy. Đã từng có lần hàng ngàn đợt ác quỷ công kích liên tục, nhưng <i class=\"clr-orange\">Lumburr</i> vẫn sừng sững hiên ngang đầy vững chãi. Trước một thế lực bảo vệ đầy hùng mạnh như thế, đến cả biển ác quỷ cũng đành phải bó tay rút lui.<br>\"Vùng đất này sẽ luôn được ta bảo vệ\"",
		"hero_skin": [
			{
				"name": "Khổng Lồ Lục Địa",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Lumburr01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Dung Nham (Bậc A)",
				"gold": "",
				"voucher": "270",
				"event": "",
				"wall": "Lumburr02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
		]
	},
	"natalya": {
		"hero_id": "Natalya",
		"hero_name": "Natalya",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Pháp sư",
			"special": "Cấu rỉa",
			"lane": "Đường giữa",
		},
		"main_skill": [
			{
				"name": "Âm hỏa",
				"info": "Nội tại: chiêu thức trúng đích gây thêm sát thương lên kẻ địch, có thể cộng dồn tối đa 10 lần trong thời gian ngắn.",
			},
			{
				"name": "Ác quỷ tụ hội",
				"info": "ST Gốc: 350/390/430/470/510/550<br>Natalya triệu hồi 5 bóng ma tấn công nơi chỉ định, mỗi bóng ma gây 350 (+0) STP, những bóng ma bồi thêm vào cùng mục tiêu sẽ chỉ gây 30% sát thương, sau khi trúng tướng địch các bóng ma sẽ biến mất ngay sau đó và hồi cho Natalya 10 năng lượng cùng 0.6s hồi chiêu."
			},
			{
				"name": "Quả cầu hắc ám",
				"info": "ST Gốc: 130/145/160/175/190/205<br>H.Chiêu: 10/9.6/9.2/8.8/8.4/8<br>Natalya tung ra một quả cầu năng lượng, sau khi bay hết tầm tối đa hoặc trúng đích sẽ bùng nổ gây choáng, rồi tiếp tục lơ lửng thêm thoáng chốc khiến các nạn nhân trong vùng ảnh hưởng chịu 130 (+0) STP và bị làm chậm 50 tốc chạy trong 1.5s.",
			},
			{
				"name": "Tia sáng tử vong",
				"info": "ST Gốc: 120/150/180<br>H.Chiêu: 30/26/22<br>Lắ chắn: 500/750/1000<br>Natalya ngay lập tức giải trừ hiệu ứng khống chế và tập trung năng lượng phóng ra một luồng năng lượng chết chóc gây 120 (+0) STP mỗi 0.25s, đồng thời nhận được một lớp lá chắn giúp miễn dịch trạng thái khống chế, và chặn 500 (+0.75 Công phép) ST. (Ấn 1 lần nữa sau khi tung chiêu 1s để hủy chiêu).",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,10,13",
			"line2": "2,6,9,11,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,2,4,0",
			}
		],
		"skill_note": "*Tận dụng tốt vị trí để xóa sổ địch nhanh nhất có thể với 1 combo.",
		"skill_special": "TocBien,CapCuu",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim23",
					"info": "Công phép +1.4 <br>Hút máu phép +0.8%<br>Giáp phép +1.6",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo32",
					"info": "Công phép +5.3",
				},
				{
					"name": "NgocTim36",
					"info": "Công phép +2.4<br>Hút máu phép +1%",
				},
				{
					"name": "NgocXanh33",
					"info": "Công phép +2.4<br>Giảm hồi chiêu +0.7%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường giữa",
				"info": "PhuongHoangLe,GiayPhuThuy,TruongBang,VuongMiengHecate,MatNaBerith,TruongHonMang",
			},
			{
				"name": "Đường giữa",
				"info": "NgocDaiPhapSu,GiayPhuThuy,VuongMiengHecate,TruongBungNo,TruongHonMang,SachThanh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "NgocDaiPhapSu,GiayThuatSi,VuongMiengHecate,TruongBang,QuyenTruongRhea,SachThanh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chơi cùng",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "ormarr", "id_page": "Ormarr"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "krixi", "id_page": "Krixi"},
					{"hero_id": "butterfly", "id_page": "Butterfly"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
				]
			}
		],
		"hero_story": "Trước thảm họa bè lũ ác quỷ xâm lăng thế giới, một nhóm quang minh chiến sĩ đã tự nguyện hy sinh bản thân, họ sẵn sàng gánh chịu thứ nguyền rủa ma thuật tà ác để trở thành những hộ vệ bất tử của thánh điện. Dẫu thành công ngăn chặn cuộc xâm lược, nhưng họ buộc phải lùi vào bóng tối vì thứ nguyền rủa đang mang trên mình, và <i class=\"clr-orange\">Natalya</i> chính là hậu duệ của những chiến sĩ này.<br>Kẻ bị nguyền rủa không thể chết cho đến khi truyền lại nó cho dòng dõi của họ, và đó là cách <i class=\"clr-orange\">Natalya</i> trở thành kẻ bị nguyền rủa. Đôi khi sẽ có những kẻ không thể khống chế thứ năng lượng tà ác bên trong, khiến họ trở nên điên loạn và nuốt chửng các đồng loại của mình. Càng cắn nuốt lẫn nhau, họ lại càng trở nên hùng mạnh. Trước mối hiểm họa bị xâm lược, thánh điện đã quyết định duy trì, và thậm chí nuôi dưỡng những chiến sĩ bị nguyền rủa này.<br><i class=\"clr-orange\">Natalya</i> là một trong những chiến sĩ nổi bật nhất, đến mức thánh điện đã chuẩn bị sẵn cả một bữa tiệc để chúc mừng lễ trưởng thành của cô. Nhưng họ nào ngờ rằng <i class=\"clr-orange\">Natalya</i> đã chán ghét cuộc sống địa ngục không chút tự tôn này đến tận cổ. Thứ cảm xúc tội lỗi cô gánh chịu mỗi ngày khi buộc phải chứng kiến và tự tay sát hại các đồng loại của mình đã đến lúc để bùng nổ.<br>\"Tất cả tội ác, cứ để ta gánh vác!\" <i class=\"clr-orange\">Natalya</i> ngay tại lễ trưởng thành của mình đã cắn nuốt tất cả đồng loại để kết liễu cuộc sống địa ngục của họ. Chưa dừng lại ở đó, cô tiêu diệt luôn cả gã sứ giả của thánh điện để chứng minh cho chúng thấy quyết tâm của mình, bởi cô biết rõ chính chúng là cội nguồn của thứ nguyền rủa này.<br>Sau đó <i class=\"clr-orange\">Natalya</i> náu mình trong bóng tối, cô thậm chí còn tách được lời nguyền ra khỏi bản thân và ký kết hiệp ước với chúng bằng cách tuyên thệ thần phục hắc ám. Từ đấy về sau <i class=\"clr-orange\">Natalya</i>, với sức mạnh của lời nguyền nay là trợ thủ, trở thành một cỗ lực lượng khủng khiếp đến cùng cực!",
		"hero_skin": [
			{
				"name": "Hiểm Họa Địa Ngục",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Natalya01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Quý Cô Thủy Tề",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Natalya02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Nghệ Nhân Lân (Bậc S)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Natalya03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "",
			},
			{
				"name": "Quà Quái Quỷ (XMAS)",
				"gold": "",
				"voucher": "409",
				"event": "",
				"wall": "Natalya04",
				"disable": "",
				"img": "thumb4.jpg",
				"video": "",
			},
			{
				"name": "Phó Nháy Nhí Nhảnh (Bậc A)",
				"gold": "",
				"voucher": "309",
				"event": "",
				"wall": "Natalya05",
				"disable": "yes",
				"img": "thumb5.jpg",
				"video": "",
			},
		]
	},
	"cresht": {
		"hero_id": "Cresht",
		"hero_name": "Cresht",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Đỡ đòn / Trợ thủ",
			"special": "Tiền đạo / Khống chế",
			"lane": "Đường rồng / Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Đại dương thịnh nộ",
				"info": "Nội tại: các đòn đánh thường của Cresht giúp tích lũy Nộ, khi đạt mốc tối đa hắn có thể hóa thành Thủy thần với quyền năng làm chậm kẻ địch xung quanh đi 50% trong 2s mỗi khi tung chiêu, đồng thời hán còn được tăng mạnh Công vật lý ở đòn đánh thường kế tiếp.",
			},
			{
				"name": "Đinh ba thủy thần",
				"info": "ST Gốc: 360/435/510/585/660/735<br>ST biến hình: 400/480/560/640/720/800<br>Cresht vung cây đinh ba khổng lồ đập vào các kẻ địch xung quanh, gây 360 (+122) STVL và đẩy lùi nạn nhân trúng chiêu, đồng thời giúp Cresht tăng Nộ, khi hóa thành Thủy thần hắn điên cuồng tấn công vào kẻ địch trước mặt gây 400 (+191) STVL."
			},
			{
				"name": "Bọt bong bóng",
				"info": "Lá chắn: 500/570/640/710/780/850<br>Lá chắn biến hình: 380/430/480/530/580/630<br>Cresht nhảy tới điểm chỉ định tạo ra một lớp bọt bong bóng giúp tăng Nộ, và bảo vệ bản thân cùng tướng đồng minh khỏi 500 (+72) sát thương, khi Cresht biến thành Thủy thần sẽ tạo ra một cột nước gây 380 (+144) STVL lên kẻ địch trong phạm vi ảnh hưởng.",
			},
			{
				"name": "Thủy thần",
				"info": "ST Gốc: 400/500/600<br>Khi đạt đủ Nộ, Cresht có thể hóa thành bản thể Thủy thần giúp nhận một lớp bảo hộ hùng mạnh, đồng thời tạo ra một cơn đại hồng thủy làm choáng, chậm, và đẩy lùi kẻ địch gây 400 (+153) STVL, khi lướt trên cơn sóng, hắn được tăng mạnh tốc chạy.",
			}
		],
		"skill_up": {
			"line1": "1,5,6,9,13,15",
			"line2": "2,3,7,10,11,14",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "4,2,3,0",
			}
		],
		"skill_note": "*Ở dạng Thủy thần cố gắng xóa sổ địch càng nhiều càng tốt cùng đồng đội.",
		"skill_special": "CapCuu,NgatNgu",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim26",
					"info": "Hồi máu/5s +9",
				},
				{
					"name": "NgocXanh22",
					"info": "Máu tối đa +15.7<br>Hồi máu/5s +3.1<br>Giảm hồi chiêu +0.3%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo37",
					"info": "Tốc đánh +1%<br>Máu tối đa +33.7<br>Giáp +2.3",
				},
				{
					"name": "NgocTim39",
					"info": "Máu tối đa +75",
				},
				{
					"name": "NgocXanh35",
					"info": "Giáp +2.7<br>Giáp phép +2.7<br>Giảm hồi chiêu +0.6%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường đơn",
				"info": "AoChoangThanRa,GiayHermes,HuanChuongTroy,KhienHuyenThoai,AoChoangBangGia,PhuChuTruongSinh",
			},
			{
				"name": "Chơi trợ thủ",
				"info": "LenhBaiPhongThan,GiayKienCuong,AoChoangBangGia,KhienHuyenThoai,HuanChuongTroy,GiapThongKho",
			},
			{
				"name": "Game thủ hay lên",
				"info": "AoChoangThanRa,GiayKienCuong,AoChoangBangGia,GiapGaia,GiapThongKho,HuanChuongTroy",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chơi cùng",
				"info": [
					{"hero_id": "fennik", "id_page": "Fennik"},
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "omega", "id_page": "Omega"},
					{"hero_id": "krixi", "id_page": "Krixi"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "gildur", "id_page": "Gildur"},
					{"hero_id": "toro", "id_page": "Toro"},
				]
			}
		],
		"hero_story": "\"Mạnh mẽ hay là chết!\"<br><i class=\"clr-orange\">Cresht</i>, Chiến Binh Thủy Quái, thường xuyên kể về Biển Sục Sôi quê nhà của hắn. Tuy nhiên, khi đối đầu với <i class=\"clr-orange\">Cresht</i>, mọi người nên nhớ rằng tên của vùng biển này không xuất phát từ nhiệt độ mà từ sự hỗn loạn không ngừng dưới mặt nước, và ở đó hắn chính là kẻ đứng đầu chuỗi thức ăn.<br>Các ghi chép cổ đại không có nhiều thông tin về nguồn gốc của <i class=\"clr-orange\">Cresht</i>. Con người chỉ biết đến hắn qua bài hát của những người hát rong: \"Một con quái vật đi lên từ đáy biển, với cây đinh ba khủng khiếp không mang theo gì khác hơn ngoài cái chết.\" Trong Chiến tranh Người - Thú, <i class=\"clr-orange\">Cresht</i> chiến đấu không sợ hãi trên tiền tuyến, không ngừng hành hạ con người. Thật ngạc nhiên, <i class=\"clr-orange\">Cresht</i> không trở về với Biển Sục Sôi khi chiến tranh kết thúc. Thay vào đó, hắn  theo đuổi mục tiêu cao hơn so với việc thôn tính những kẻ yếu đuối.<br>\"Trận chiến giữa Thần linh và Ác quỷ không thể vắng mặt <i class=\"clr-orange\">Cresht</i>!\"",
		"hero_skin": [
			{
				"name": "Chiến Binh Thủy Quái",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Cresht01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Thợ Sửa Cáp (Bậc A)",
				"gold": "",
				"voucher": "375",
				"event": "",
				"wall": "Cresht02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Cá Cắn Cáp (Bậc A)",
				"gold": "",
				"voucher": "279",
				"event": "",
				"wall": "Cresht03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "",
			},
		]
	},
	"jinna": {
		"hero_id": "Jinna",
		"hero_name": "Jinna",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Pháp sư",
			"special": "Cấu rỉa",
			"lane": "Đường giữa",
		},
		"main_skill": [
			{
				"name": "Ấn chú",
				"info": "Nội tại: sau 4 lần công kích (gồm cả đánh thường lẫn chiêu thức), đòn đánh thường kế tiếp sẽ phóng kình lực xuyên thấu kẻ địch gây 300 (+0) STP.",
			},
			{
				"name": "Loạn hạt",
				"info": "ST Gốc: 300/360/420/480/540/600<br>Jinna tung chuỗi hạt vào tối đa 2 kẻ địch lân cận gây 300 (+0.5 công phép) STP, kẻ địch trúng chiêu sẽ khiến chuỗi hạt nảy đi tối đa 2 lần, các nạn nhân trúng chiêu nhiều lần sẽ chỉ phải chịu 30% sát thương ở các lần nảy sau."
			},
			{
				"name": "Hàng yêu phục ma",
				"info": "ST Gốc: 450/510/570/630/690/750<br>H.Chiêu: 10/9.4/8.8/8.2/7.6/7<br>Jinna dậm chân phát kình lực gây 450 (+0) STP lên những kẻ địch lân cận, đồng thời làm giảm 50% tốc độ chạy của các nạn nhân trong 2s.",
			},
			{
				"name": "Kết giới xá lợi",
				"info": "ST Gốc: 170/210/250<br>H.Chiêu: 35/30/25<br>Jinna tạo ra một kết giới bằng những viên xá lợi bay quanh bản thân gây 170 (+0.2 công phép) STP mỗi đợt, trong 0.5s, tổng cộng 10 lần Ngay tại thời điểm kích hoạt kết giới, Jinna lập tức nhận được 15% miễn thương, với mỗi tướng địch cạnh bên sẽ khiến Jinna nhận thêm 5% miễn thương, trong 5 giây, phát hiện số lượng tướng địch ở xung quanh, kích hoạt miễn thương theo con số tương ứng, ngoài ra Jinna được tăng 80% tốc chạy (giảm dần) cộng thêm trong 2.5s.",
			}
		],
		"skill_up": {
			"line1": "1,3,6,9,11,15",
			"line2": "2,5,7,10,13,14",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "4,3,2,0",
			}
		],
		"skill_note": "*Tận dụng chiêu cuối để đỡ sát thương giúp đồng đội và đừng quên hạ gục đối thủ.",
		"skill_special": "TocBien,BocPha,TocHanh",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim23",
					"info": "Công phép +1.4 <br>Hút máu phép +0.8%<br>Giáp phép +1.6",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim36",
					"info": "Công phép +2.4<br>Hút máu phép +1%",
				},
				{
					"name": "NgocXanh310",
					"info": "Tốc đánh +0.6%<br>Xuyên giáp phép +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường giữa",
				"info": "PhuongHoangLe,GiayHoVe,VuongMiengHecate,GuomHienTriet,QuyenTruongRhea,AoChoangBangGia",
			},
			{
				"name": "Đường giữa",
				"info": "NgocDaiPhapSu,GiayHoVe,VuongMiengHecate,TruongBang,GuomHienTriet,GiapGaia",
			},
			{
				"name": "Game thủ hay lên",
				"info": "VuongMiengHecate,GiayPhuThuy,TruongHonMang,SachThanh,TruongBang,GuomHienTriet",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chơi cùng",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "ormarr", "id_page": "Ormarr"},
					{"hero_id": "toro", "id_page": "Toro"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "aleister", "id_page": "Aleister"},
					{"hero_id": "krixi", "id_page": "Krixi"},
				]
			}
		],
		"hero_story": "Chuỗi hạt luân hồi, là thánh vật lưu truyền của gia tốc <i class=\"clr-orange\">Jinna</i>.<br>Từ thời xa xưa, tổ tiên của bộ tộc <i class=\"clr-orange\">Jinna</i>, chỉ dựa vào sức mạnh khi niệm thần chú của chuỗi hạt mà có thể đối đầu với ác ma trong địa ngục. Tuy nhiên, việc tàn sát quá nhiều khiến chuỗi hạt bị nhiễm phải sức mạnh hắc ám tà ác, cuối cùng tổ tiên <i class=\"clr-orange\">Jinna</i> buộc phải hy sinh linh hồn để phong ấn chuỗi hạt, và căn dặn hậu thế bảo vệ thật cẩn thận.<br>Một lần nữa sức mạnh hắc ám lại trỗi dậy, phong ấn cổ xưa đang dần bị lung lay. <i class=\"clr-orange\">Jinna</i> tu luyện quanh năm, cảm nhận được sự thay đổi của chuỗi hạt. Để tránh chuối hạt bị sức mạnh hắc ám nuốt trọn, hắn quyết định mang chuỗi hạt lên Cung Điện Ánh Sáng để thanh tẩy.<br>Cái mà không ai ngờ đến, là sức mạnh hắc ám phát ra từ chuỗi hạt, đã thu hút được sự chú ý của tên Maloch đến từ địa ngục, những tên ác ma dưới trướng của hắn nhanh chóng truy đuổi theo <i class=\"clr-orange\">Jinna</i>. Trong lúc nguy cấp, sức mạnh linh hồn còn sót lại trong chuỗi hạt bỗng thức tỉnh, <i class=\"clr-orange\">Jinna</i> đã đẩy lùi được ác ma dưới sự giúp đỡ của tổ tiên, đồng thời cũng nắm giữ được cách điều khiển sức mạnh chuỗi hạt.<br>Cuối cùng, <i class=\"clr-orange\">Jinna</i> đã mang chuỗi hạt luân hồi đến được Cung Điện Ánh Sáng. Sức mạnh tu luyện nhiều năm của <i class=\"clr-orange\">Jinna</i> và sức mạnh lấy được từ chuỗi hạt, đã được mọi người trong Cung Điện công nhận. Dưới sự gợi ý của Thánh nữ Lauriel, <i class=\"clr-orange\">Jinna</i> bắt đầu tu luyện sức mạnh ma pháp khó nhất của Cung Điện Ánh Sáng là Bí pháp thiền tông, tu luyện tâm pháp bằng cách không nói 1 lời nào.<br><i class=\"clr-orange\">Jinna</i> hiểu rằng, chỉ có sức mạnh ánh sáng thuần khiết này, mới có thể thanh tẩy được sức mạnh hắc ám bên trong chuỗi hạt luân hồi!",
		"hero_skin": [
			{
				"name": "Đại Thiền Sư",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Jinna01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Đại Tư Tế",
				"gold": "",
				"voucher": "185",
				"event": "",
				"wall": "Jinna02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Dạ Xoa Vương (Bậc S)",
				"gold": "",
				"voucher": "409",
				"event": "",
				"wall": "Jinna03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "",
			},
		]
	},
	"payna": {
		"hero_id": "Payna",
		"hero_name": "Payna",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Trợ thủ",
			"special": "Yểm hộ",
			"lane": "Đường rồng",
		},
		"main_skill": [
			{
				"name": "Thanh cao",
				"info": "Nội tại: kẻ địch dám tấn công Payna sẽ phải chịu sự trừng phát của rửng thẳm, khiến nạn nhân gánh chịu 200 (+0) STP, đồng thời bị giảm 90% tốc chạy trong 1s, 90 giây hồi chiêu.",
			},
			{
				"name": "Ánh sáng thần thánh",
				"info": "Hồi máu gốc: 60/80/100/120/140/160<br>H.Chiêu: 20/19/18/17/16/15<br>Tăng tốc đánh: 25%/30%/35%/40%/45%/50%<br>Payna phủ ánh sáng ma pháp xuống một vùng nhỏ quanh bản thân, giúp hồi 60 (+0) máu (cộng thêm 10% máu tổn thất) mỗi giây cho các tướng đồng minh lân cận, đồng thời giúp tăng cho tất cả trong vùng hiệu lực 25% tốc đánh trong 3s."
			},
			{
				"name": "Cú ma pháp",
				"info": "ST Gốc: 200/225/250/275/300/325<br>Payna sử dụng sức mạnh của rửng thẳm triệu hồi ra một chú chim cú bay theo hướng chỉ định, tấn công mục tiêu, gây 200 (+0) STP và làm choáng nạn nhân, Chim cú sau khi tấn công mục tiêu đầu có thể tiếp tục bay lượn công kích thêm các mục tiêu ngẫu nhiên khác (cùng mục tiêu vẫn có thể bị trúng chiêu nhiều lần) lên đến 6 lượt.",
			},
			{
				"name": "Kết giới sinh mệnh",
				"info": "ST Gốc: 250/310/370<br>H.Chiêu: 60/50/40<br>Tăng giáp: 200/250/300<br>Payna niệm chú tạo ra một kết giới năng lượng tác động lên cả tướng đồng minh lẫn đối phương trong vùng ảnh hưởng theo các cách khác nhau, tăng 200 giáp cho phe ta, gây 250 (+0) STP lên phe địch mỗi 0.5s, kèm hiệu ứng giảm 20% tốc chạy, đặc biệt những nạn nhân xấu số vẫn còn trong kết giới sau 2s sẽ bị choáng 1.5s.",
			}
		],
		"skill_up": {
			"line1": "1,5,9,13,14,15",
			"line2": "2,3,6,7,10,11",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "4,3,2,0",
			}
		],
		"skill_note": "*Tận dụng vị trí đồng đội và vị trí đối phương để ra đòn chuẩn sát.",
		"skill_special": "CapCuu,TocBien",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim25",
					"info": "Máu tối đa +45",
				},
				{
					"name": "NgocXanh21",
					"info": "Tốc đánh +0.4%<br>Giảm hồi chiêu +0.5%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim33",
					"info": "Máu tối đa +45<br>Hồi máu/5s +5.2<br>Tốc chạy +0.4%",
				},
				{
					"name": "NgocXanh32",
					"info": "Giảm hồi chiêu +1%",
				}
			]
		},
		"item_build": [
			{
				"name": "Chơi hỗ trợ",
				"info": "LenhBaiPhongThan,GiayHoVe,GiapGaia,KhienHuyenThoai,GiapThongKho,HuanChuongTroy",
			},
			{
				"name": "Chơi hỗ trợ",
				"info": "LenhBaiPhongThan,GiayKienCuong,KhienHuyenThoai,TruongBang,HuanChuongTroy,PhuChuTruongSinh",
			},
			{
				"name": "Đường giữa",
				"info": "NgocDaiPhapSu,GiayHoVe,DayChuyenLucBao,AoChoangBangGia,VuongMiengHecate,SachThanh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chơi cùng",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "krixi", "id_page": "Krixi"},
					{"hero_id": "butterfly", "id_page": "Butterfly"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "chaugnar", "id_page": "Chaugnar"},
					{"hero_id": "batman", "id_page": "Batman"},
					{"hero_id": "butterfly", "id_page": "Butterfly"},
					{"hero_id": "kriknak", "id_page": "Kriknak"},
				]
			}
		],
		"hero_story": "Lần đầu tiên <i class=\"clr-orange\">Payna</i> nhìn thấy đôi cánh thiên thần của Lauriel, là lúc Lauriel đang bị Aleister điên cuồng truy đuổi. Từ lúc rời bỏ Cung Điện Ánh Sáng, Aleister vẫn luôn rất khao khát Suối Nguồn Ánh Sáng mà Lauriel đang canh giữ, đây là nguồn nguyên liệu cực quan trọng để hắn thực hành những thí nghiệm ma pháp. Sau khi bị vậy hãm, Lauriel bị trọng thương, buộc phải trốn vào trong Khu Rừng Hắc Ám để tránh sự truy đuổi. Chính vào lúc này, Thần rừng hộ mệnh <i class=\"clr-orange\">Payna</i> đã ra tay hỗ trợ cho Lauriel.<br>Đối mặt với sức mạnh hủy diệt của Aleister, <i class=\"clr-orange\">Payna</i> cũng không thể cản phá. Để đập tan âm mưu của Aleister, Lauriel quyết định giao Suối Nguồn Ánh Sáng lại cho <i class=\"clr-orange\">Payna</i>, và ở lại giữ chân Aleister. Nhưng hai người đều không thể tránh khỏi những đòn sấm sét của Aleister và bị thương tổn khắp người.<br>\"Thà uống hết chứ không để ngươi đạt được!\" <i class=\"clr-orange\">Payna</i> dùng chút sức lực cuối cùng uống hết Suối Nguồn Ánh Sáng, sức mạnh của ánh sáng bùng phát ra trong cơ thể cô. Sức mạnh phát ra nhanh chóng chữa trị vết thương trên người của Lauriel. Dưới sự giúp sức của <i class=\"clr-orange\">Payna</i>, Lauriel đã phục hồi và đẩy lùi được Aleister.<br>Sau sự việc, Lauriel kiên quyết mời <i class=\"clr-orange\">Payna</i> gia nhập vào Cung Điện Ánh Sáng, nhưng <i class=\"clr-orange\">Payna</i> đã từ chối rằng: \"Ta đã thề ở mãi trong Khu Rừng Hắc Ám, nhưng những ai đến từ Cung Điện Ánh Sáng, sẽ mãi là bạn của ta.\"",
		"hero_skin": [
			{
				"name": "Thần Rừng Hộ Mệnh",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Payna01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Cảnh Vệ Rừng",
				"gold": "",
				"voucher": "185",
				"event": "",
				"wall": "Payna02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
		]
	},
	"maloch": {
		"hero_id": "Maloch",
		"hero_name": "Maloch",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Đấu sĩ / Đỡ đòn",
			"special": "Trung phong",
			"lane": "Đường rồng / Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Ma vương",
				"info": "Nội tại: Maloch sở hữu tầm đánh xa hơn các đơn vị cận chiến thông thường. Ngoài ra sau khi tung chiêu Quỷ Kiếm trúng tướng địch, Maloch sẽ tiến vào trạng thái Ma Vương khiến sát thương kĩ năng và đòn đánh gây ra thành sát thương chuẩn 100%, đồng thời hồi 2% máu đã mất（+0.15 sát thương vật lý cộng thêm) mỗi đòn đánh thường.",
			},
			{
				"name": "Quỷ kiếm",
				"info": "ST Gốc: 370/480/590/700/810/920<br>Maloch vận sức trong thoáng chốc rồi vung kiếm gây sát thương vật lý, đặc biệt nếu nạn nhân là tướng địch sẽ khiến Maloch tiến vào trạng thái Ma Vương trong 6 giây. Hắn được hồi 6% máu đã mất (+0.3 sát thương vật lý cộng thêm) (tối đa 24%) dựa trên mỗi tướng địch trúng chiêu."
			},
			{
				"name": "Đoạt hồn",
				"info": "Bảo hộ: 600/800/1000/1200/1400/1600<br>H.Chiêu: 12/11/10/9/8/7<br>Maloch tước đoạt linh hồn của tướng địch lân cận và gây một lượng STVL nhỏ cùng hiệu ứng làm chậm 30% trong 3s, ngoài ra giúp hắn tạo một lớp Khiên chắn: 150 (+0.7 công vật lý), Khiên chắn tối đa: 600 (+2.8 công vật lý).",
			},
			{
				"name": "Luyện ngục",
				"info": "ST Gốc: 420/525/630<br>H.Chiêu: 60/50/40<br>Maloch chỉ định một khu vực rồi phóng vút lên không và lao xuống hủy diệt toàn bộ kẻ địch trong vùng ảnh hưởng, gây 420 (+204) STVL, đồng thời hất tung các mục tiêu bên trong, những nạn nhân cố tiến vào hoặc thoát ra khu vực này đều sẽ bị làm chậm.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "4,3,2,0",
			}
		],
		"skill_note": "*Tìm vị trí thật đẹp để đảo chiều giao tranh có lợi cho đồng đội.",
		"skill_special": "TocBien,BocPha,CapCuu",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim23",
					"info": "Công vật lý +0.6<br>Máu tối đa +36",
				},
				{
					"name": "NgocXanh26",
					"info": "Giáp +5.4",
				}
			],
			"rune3": [
				{
					"name": "NgocDo34",
					"info": "Công vật lý +3.2",
				},
				{
					"name": "NgocTim31",
					"info": "Công vật lý +1.6<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh36",
					"info": "Giáp +5<br>Giáp phép +5",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường trên hoặc dưới",
				"info": "GiayKienCuong,AoChoangBangGia,KhienHuyenThoai,GiapGaia,NanhFenrir,GiapThongKho",
			},
			{
				"name": "Đường trên hoặc dưới",
				"info": "GiayHoVe,AoChoangBangGia,KhienHuyenThoai,HuanChuongTroy,HerculeThinhNo,KhienThatTruyen",
			},
			{
				"name": "Game thủ hay lên",
				"info": "GiayKienCuong,KhienHuyenThoai,AoChoangBangGia,HuanChuongTroy,KhienThatTruyen,GiapHoMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chơi cùng",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "ormarr", "id_page": "Ormarr"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "krixi", "id_page": "Krixi"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "Ormarr", "id_page": "Ormarr"},
					{"hero_id": "lu_bo", "id_page": "LuBo"},
					{"hero_id": "aleister", "id_page": "Aleister"},
					{"hero_id": "raz", "id_page": "Raz"},
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "dieu_thuyen", "id_page": "DieuThuyen"},
				]
			}
		],
		"hero_story": "\"Tra tấn mang lại đau khổ, và đau khổ mang đến sức mạnh.\"<br>Sinh ra từ nơi sâu thẳm nhất Địa Ngục, <i class=\"clr-orange\">Maloch</i> biết rõ mọi hình phạt tàn nhẫn nhất tại đây. Không gì trên đời làm hắn thích thú hơn việc bóp nát tâm hồn của những kẻ bất hạnh.<br>Tiếng gào thét của sự đau đớn, nỗi thống khổ giống như một điệu nhạc Valse đối với <i class=\"clr-orange\">Maloch</i> vậy và sức mạnh của hắn cũng đến từ đó. Trong cái nơi ánh sáng không thể chiếu đến này, Cai Ngục là kẻ thống trị, còn <i class=\"clr-orange\">Maloch</i> là Vua của những kẻ thống trị.<br>\"Thuộc hạ của ta luôn khao khát quyền lực của ta, nhưng chúng sẽ không bao giờ có được nó!\"<br>Hắn luôn tự hào về sự am hiểu của bản thân hay những mưu hèn kế bẩn bản thân nghĩ ra. Một trong những thú tiêu khiển yêu thích của <i class=\"clr-orange\">Maloch</i> chính là đích thân tra tấn các Cai Ngục cho đến khi linh hồn của chúng vỡ nát.<br>Nhưng qua thời gian, thú vui đó dần trở nên nhàm chán đối với <i class=\"clr-orange\">Maloch</i>.<br>\"Tất cả linh hồn trên thế giới này đều sẽ phải khóc lóc, van xin và bị hủy diệt dưới chân ta!\"<br>Với khát vọng tột cùng đó, <i class=\"clr-orange\">Maloch</i> rời bỏ Vương quốc của mình để tham gia đấu trường huyền thoại.<br>\"Ta sẽ cho các người thấy nỗi đau đớn thật sự là như thế nào!\"",
		"hero_skin": [
			{
				"name": "Ma Vương Quản Ngục",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Maloch01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Tiệc Hóa Trang (Bậc A)",
				"gold": "",
				"voucher": "450",
				"event": "",
				"wall": "Maloch02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Ác Ma Địa Ngục (Bậc S)",
				"gold": "",
				"voucher": "309",
				"event": "",
				"wall": "Maloch03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "",
			},
			{
				"name": "Samurai Tử Sĩ (Bậc S)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Maloch04",
				"disable": "yes",
				"img": "thumb4.jpg",
				"video": "",
			},
		]
	},
	"ngo_khong": {
		"hero_id": "NgoKhong",
		"hero_name": "Ngộ Không",
		"main_info": {
			"price_gold": "25,888",
			"price_voucher": "599",
			"price_text": "",
			"position": "Đấu sĩ / Sát thủ",
			"special": "Tiền đạo / Khống chế",
			"lane": "Đường Caesar / Đi rừng",
		},
		"main_skill": [
			{
				"name": "Vô địch thiên hạ",
				"info": "Nội tại: mỗi lần Ngộ Không tung một chiêu thức, đòn đánh thường tiếp theo của hắn được cường hóa gây 330 (+167) STVL, đồng thời khiến hắn lập tức áp sát mục tiêu, đặc biệt Ngộ Không sở hữu sẵn 15% tỷ lệ chí mạng, vì Ngộ Không rất bá đạo.",
			},
			{
				"name": "Ẩn thân thuật",
				"info": "H.Chiêu: 15/13.8/12.6/11.4/10.2/9<br>Ngộ Không lập tức tiến vào trạng thái tàng hình, đồng thời được tăng 40% tốc chạy trong 1s."
			},
			{
				"name": "Cân đẩu vân",
				"info": "H.Chiêu: 8/7.4/6.8/6.2/5.6/5<br>Tăng hai loại giáp: 100/120/140/160/180/200<br>Ngộ Không cường hóa bản thân giúp tăng 100 giáp cùng giáp phép trong 3s, rồi lướt về phía trước sẵn sàng đại chiến 500 hiệp.",
			},
			{
				"name": "Gậy như ý",
				"info": "ST Gốc: 150/190/230<br>H.Chiêu: 36/30/24<br>Ngộ Không xoay gậy tấn công kẻ địch xung quanh 150 (+183 công vật lý) STVL và làm choáng kẻ địch trúng đòn trong 1s, sau đó, trong vòng 5s, có thể kích hoạt 1 lần nữa giúp tàng hình và tăng tốc độ di chuyển, duy trì liên tục 1s.",
			}
		],
		"skill_up": {
			"line1": "2,6,10,13,14,15",
			"line2": "1,3,5,7,9,11",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,0,2,0",
			},
			{
				"name": "*Hoặc combo này",
				"info": "2,0,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,0,4,0,3,0",
			},
			{
				"name": "*Hoặc combo này",
				"info": "3,0,4,0,2,0",
			},
		],
		"skill_note": "*Cố gắng dùng Gậy Như Ý đẹp nhất có thể để nhanh chóng xóa sổ địch.",
		"skill_special": "TrungTri,BocPha,GamThet",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo28",
					"info": "Tỷ lệ chí mạng +0.5%<br>Sát thương chí mạng +2%",
				},
				{
					"name": "NgocTim21",
					"info": "Tốc đánh +0.4%<br>Hút máu +0.8%",
				},
				{
					"name": "NgocXanh22",
					"info": "Máu tối đa +15.7<br>Hồi máu/5s +3.1<br>Giảm hồi chiêu +0.3%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo310",
					"info": "Tỷ lệ chí mạng +1.6%",
				},
				{
					"name": "NgocTim35",
					"info": "Hút máu +1.6%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường trên hoặc dưới",
				"info": "ThanhKiem,GiayKienCuong,SongDaoBaoTap,ThuongXuyenPha,PhucHopKiem,NanhFenrir",
			},
			{
				"name": "Đường trên hoặc dưới có chút tank",
				"info": "GiayHoVe,ThanhKiem,AoChoangBangGia,QuyKiem,GiapThongKho,GiapHoMenh",
			},
			{
				"name": "Game thủ hay lên đi rừng",
				"info": "KiemTruyHon,GiayKienCuong,ThanhKiem,SongDaoBaoTap,ThuongXuyenPha,PhucHopKiem",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chơi cùng",
				"info": [
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "jinna", "id_page": "Jinna"},
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "ormarr", "id_page": "Ormarr"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "zephys", "id_page": "Zephys"},
					{"hero_id": "lu_bo", "id_page": "LuBo"},
					{"hero_id": "aleister", "id_page": "Aleister"},
					{"hero_id": "raz", "id_page": "Raz"},
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "dieu_thuyen", "id_page": "DieuThuyen"},
				]
			}
		],
		"hero_story": "Hầu Vương <i class=\"clr-orange\">Ngộ Không</i> từng đại nào thiên cung 500 năm trước khi hắn một mình đánh bại mười vạn thiên binh. Nhưng, dù đã tung hết sức, hắn cũng không thể thoát khỏi bàn tay của Phật Tổ Như Lai và bị phong ấn dưới Ngũ Hành Sơn. Mỗi thời khắc trong năm thế kỷ bị giam cầm ấy, <i class=\"clr-orange\">Ngộ Không</i> đều mơ về tự do.<br>\"Đầu tiên, ta sẽ làm bậy trước đại điện... để dạy cho chúng một bài học!\" <i class=\"clr-orange\">Ngộ Không</i> lẩm nhẩm giận dữ. Hắn chưa từng ghét Phật. Trái lại, <i class=\"clr-orange\">Ngộ Không</i> ngưỡng mộ Phật, bởi ngài đã chửng tỏ mình mạnh mẽ hơn hắn. Hắn chỉ muốn chơi khăm Phất một phen.<br>Tuy nhiên, khi phong ấn bị phá vỡ, <i class=\"clr-orange\">Ngộ Không</i> lại không làm như đã định. Hắn sợ ư? Không hẳn. Bởi một giọng nói chào đón hắn từ xa xăm: \"<i class=\"clr-orange\">Ngộ Không</i>, tướng, những kẻ bất tử, và cả thần thánh đã tập hợp lại đây cho trận chiến vĩ đại nhất mọi thời đại! Người dám chiến không?\" Điều đó vượt quá cả những giấc mơ điên cuồng nhất của <i class=\"clr-orange\">Ngộ Không</i>.",
		"hero_skin": [
			{
				"name": "Tề Thiên Đệ Thánh",
				"gold": "25,888",
				"voucher": "599",
				"event": "",
				"wall": "NgoKhong01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Đạo Tặc",
				"gold": "",
				"voucher": "279",
				"event": "",
				"wall": "NgoKhong02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Hỏa Nhãn Kim Tinh (Bậc S)",
				"gold": "",
				"voucher": "??",
				"event": "",
				"wall": "NgoKhong03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "",
			},
			{
				"name": "Siêu Việt (Bậc SS)",
				"gold": "",
				"voucher": "799",
				"event": "",
				"wall": "NgoKhong04",
				"disable": "yes",
				"img": "thumb4.jpg",
				"video": "",
			},
		]
	},
	"kriknak": {
		"hero_id": "Kriknak",
		"hero_name": "Kriknak",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Sát thủ / Đấu sĩ",
			"special": "Tiền đạo",
			"lane": "Đi rừng",
		},
		"main_skill": [
			{
				"name": "Nhấm nháp",
				"info": "Nội tại: sau khi chiêu của Kriknak trúng đích, đòn đánh thường kế tiếp của hắn sẽ gây thêm 100 sát thương vật lý (+0.8 công vật lý).",
			},
			{
				"name": "Ấu trùng quỷ",
				"info": "ST Gốc: 410/465/520/575/630/685<br>H.Chiêu: 10/9.5/9/8.5/8/7.5<br>Kriknak gọi một bầy ấu trùng quỷ tấn công một mục tiêu (ưu tiên tướng) gây 410 (+1.35 công vật lý), và đánh dấu Ấu trùng lên nạn nhân, mọi đòn đánh thường hoặc chiêu thức của Kriknak đều sẽ kích hoạt dấu ấn gây 10% (+0.01 công vật lý) STP của mục tiêu, đồng thời giảm 3s thời gian hồi và hồi phục năng lượng."
			},
			{
				"name": "Bọ húc",
				"info": "ST Gốc: 390/445/500/555/610/665<br>Hồi máu: 190/230/270/310/350/390<br>Kriknak ủi thẳng về phía trước gây 390 (+1.25 công vật lý) STVL, mỗi tướng địch trúng chiêu giúp hồi 190 máu (+0.6 công vật lý).",
			},
			{
				"name": "Hiểm họa không trung",
				"info": "ST Gốc: 690/920/1150<br>Thời gian bay: 6/8/10<br>Kriknak đập cánh bay lên không giúp tăng tốc chạy trong 6s, Kriknak vẫn có thể tung Chiêu 1 - Ấu Trùng Quỷ trong khi bay, tái kích hoạt lần nữa để đáp đất, gây 690 (+2.4 công vật lý) STVL, kèm hiệu ứng giảm tốc chạy lên các nạn nhân trúng chiêu.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "4,2,3,0",
			}
		],
		"skill_note": "*Cố gắng bắt lẻ và hạ sát thưởng chủ lực team bạn nhanh nhất có thể.",
		"skill_special": "TrungTri,TocBien,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo26",
					"info": "Công vật lý +1.5<br>Tốc đánh +0.4%",
				},
				{
					"name": "NgocTim27",
					"info": "Tốc đánh +0.4%<br>Tỷ lệ chí mạng +0.3%<br>Tốc chạy +0.5%",
				},
				{
					"name": "NgocXanh21",
					"info": "Tốc đánh +0.4%<br>Giảm hồi chiêu +0.5%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo34",
					"info": "Công vật lý +3.2",
				},
				{
					"name": "NgocTim31",
					"info": "Công vật lý +1.6<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh32",
					"info": "Giảm hồi chiêu +1%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đi rừng",
				"info": "RiuLeviathan,GiayHermes,PhucHopKiem,ThanhKiem,AoChoangBangGia,PhuChuTruongSinh",
			},
			{
				"name": "Đường Caesar",
				"info": "ThanhKiem,GiayThuatSi,SongDaoBaoTap,QuyKiem,ThuongLonginus,PhucHopKiem",
			},
			{
				"name": "Game thủ hay lên đi rừng",
				"info": "RiuLeviathan,GiayKienCuong,AoChoangThanRa,AoChoangBangGia,HuanChuongTroy,KiemMuramasa",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chơi cùng",
				"info": [
					{"hero_id": "gildur", "id_page": "Gildur"},
					{"hero_id": "teemee", "id_page": "TeeMee"},
					{"hero_id": "toro", "id_page": "Toro"},
					{"hero_id": "ormarr", "id_page": "Ormarr"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "taara", "id_page": "Taara"},
					{"hero_id": "thane", "id_page": "Thane"},
					{"hero_id": "alice", "id_page": "Alice"},
				]
			}
		],
		"hero_story": "Thật khó để nói rõ <i class=\"clr-orange\">Kriknak</i> thuộc về cõi âm hay cõi dương, vì hắn hoàn toàn tự do tự tại ra vào các hầm mộ, hút hết năng lượng còn sót lại của những linh hồn vất vưởng nơi đây, thế nhưng có một điều chắc chắn rằng, <i class=\"clr-orange\">Kriknak</i> có sinh mệnh và linh hồn riêng biệt của chính hắn. Mà thật ra thì <i class=\"clr-orange\">Kriknak</i> không bận tâm đến sự sống hay cái chết cho lắm, thứ duy nhất hắn quan tâm là những mệnh lệnh của chủ nhân, Searcy, Oán nữ báo tử.<br>Là bầy tôi tận tụy của Searcy, chỉ cần chủ nhân ra lệnh, hắn sẽ thực hiện ngay không chút ngại ngần. Kể cả điều đó có nghĩa là hắn phải đối đầu với Thanh gươm anh dũng, Thane. <i class=\"clr-orange\">Kriknak</i> hùng dũng chắn trước chủ nhân của mình, sẵn sàng đón nhận bất cứ thứ gì có thể gây nguy hại đến ngài. Những chiếc sừng của hắn tuy cứng rắn, nhưng chẳng thể nào đủ sức chặn lại sức mạnh đến từ lưỡi kiếm của Thane.<br>Dẫu vậy <i class=\"clr-orange\">Kriknak</i> đã chứng minh được sự trung thành của mình, và hắn sẽ được tưởng thưởng vì điều đó. Searcy, khẽ nhịn đau rút một phần năng lượng của bản thân để truyền sang <i class=\"clr-orange\">Kriknak</i>, giúp chiếc sừng tan nát của hắn dần được tái tạo và phục hồi hoan toàn. Khi chiếc sừng mới thành hình, một mối liên hệ huyền bí giữa <i class=\"clr-orange\">Kriknak</i> và Searcy cũng được thiết lập. Ngay cả khi họ cách xa nhau hàng ngàn dặn, <i class=\"clr-orange\">Kriknak</i> vẫn luôn biết được chủ nhân đang nghĩ gì, và luôn luôn chẳng ngại ngần thực hiện bất kỳ điều gì chủ nhân muốn.",
		"hero_skin": [
			{
				"name": "Bọ Báo Tử",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Kriknak01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Bọ Cánh Bạc (Bậc A)",
				"gold": "",
				"voucher": "185",
				"event": "",
				"wall": "Kriknak02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Yêu Trùng Cổ Mộ (Bậc A)",
				"gold": "",
				"voucher": "309",
				"event": "",
				"wall": "Kriknak03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "",
			},
		]
	},
	"arthur": {
		"hero_id": "Arthur",
		"hero_name": "Arthur",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Đấu sĩ / Đỡ đòn",
			"special": "Tiền đạo",
			"lane": "Đường rồng / Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Uy dũng",
				"info": "Nội tại: Arthur được thần thánh hộ mệnh giúp tự thân sở hữu 28 giáp (tăng theo cấp tướng).",
			},
			{
				"name": "Gươm chính nghĩa",
				"info": "ST Gốc: 180/205/230/255/280/305<br>H.Chiêu: 10/9/8/7/6/5<br>Arthur tăng 30% tốc chạy và cường hóa thanh gươm khiến đòn đánh kế sẽ nhảy xổ đến kẻ địch, gây 180 (+164) STVL, và làm chậm 90% tốc chạy của mục tiêu trong 1s, chưa hết nạn nhân tướng địch còn phải chịu sự trừng phạt của thần linh khiến các đòn đánh thường và chiêu thức của Arthur gây thêm 1% máu tối đa của nạn nhân thành STP, đồng thời tăng tốc chạy của đồng minh xung quanh, hiệu ứng kéo dài 5s."
			},
			{
				"name": "Thần vật hộ thân",
				"info": "ST Gốc: 100/125/150/175/200/225<br>H.Chiêu: 12/11.4/10.8/10.2/9.6/9<br>Arthur dùng ý chí điều khiển sức mạnh của Thánh kiếm, xoay xung quanh bản thân và tấn công địch xuang quanh, mỗi lần tạo ra 100 （+0.4 công vật lý) (+0.4 công phép) STP, duy trì 5s.",
			},
			{
				"name": "Công lý phán quyết",
				"info": "ST Gốc: 750/1000/1250<br>H.Chiêu: 42/35/28<br>ST đốt: 100/125/150<br>Arthur giương cao thanh gươm chính nghĩa tấn công kẻ địch, gây 750 (+213) STVL, đồng thời hất văng cả mục tiêu lẫn những nạn nhân lân cận trong 0.5s, chưa dừng lại ở đó, dư uy của thanh gươm khiến các kẻ địch trong vùng ảnh hưởng sẽ phải chịu 100 (+57) STVL mỗi giây.",
			}
		],
		"skill_up": {
			"line1": "2,5,7,10,13,15",
			"line2": "1,3,6,9,11,14",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,4,0",
			}
		],
		"skill_note": "*Có khả năng bắt lẻ tốt vì thế hãy để ý những chú cừu non lạc lõng trên bản đồ.",
		"skill_special": "TocBien,BocPha,TrungTri",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim24",
					"info": "Máu tối đa +36<br>Giáp +1.6",
				},
				{
					"name": "NgocXanh27",
					"info": "Hồi máu/5s +4.5<br>Giáp +3.2",
				}
			],
			"rune3": [
				{
					"name": "NgocDo37",
					"info": "Tốc đánh +1%<br>Máu tối đa +33.7<br>Giáp +2.3",
				},
				{
					"name": "NgocTim33",
					"info": "Máu tối đa +45<br>Hồi máu/5s +5.2<br>Tốc chạy +0.4%",
				},
				{
					"name": "NgocXanh36",
					"info": "Giáp +5<br>Giáp phép +5",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường đơn gank lane",
				"info": "AoChoangThanRa,GiayHermes,AoChoangBangGia,GiapGaia,GiapThongKho,GiapHoMenh",
			},
			{
				"name": "Đi rừng hỗ trợ các đường",
				"info": "KiemTruyHon,GiayHermes,ThuongLonginus,GiapCuongNo,GiapGaia,RiuHyoga",
			},
			{
				"name": "Game thủ hay lên",
				"info": "AoChoangThanRa,GiayKienCuong,AoChoangBangGia,GiapGaia,KhienHuyenThoai,HuanChuongTroy",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chơi cùng",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "tel_annas", "id_page": "TelAnnas"},
					{"hero_id": "lindis", "id_page": "Lindis"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "raz", "id_page": "Raz"},
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "zephys", "id_page": "Zephys"},
				]
			}
		],
		"hero_story": "Với thanh kiếm thánh trong tay và sự công chính trong lòng, <i class=\"clr-orange\">Arthur</i> trở thành vị lãnh đạo chính thức đầu tiên của loài người. Ông được sinh ra trong một thời đại khi mà đức tin sụp đổ và thế giới bị che khuất trong bóng tối. Đối mặt với những con quái vật hung dữ và ác quỷ khát máu, con người không có được sức mạnh để tự bảo vệ mình, không có cả sự bảo hộ từ những vị thần, điều đó có thể dấy lên một cuộc chiến trong chính con người. Thời đại hỗn loạn này vẫn tồn tại cho đến khi <i class=\"clr-orange\">Arthur</i> xuất hiện. Tuyên truyền các giáo điều công lý và sự đúng đắn, ông bắt đầu công cuộc tạo nên trật tự và kỷ luật như một người hiệp sĩ.<br>Hiệp sĩ <i class=\"clr-orange\">Arthur</i> được mọi người đón nhận và ngưỡng mộ, ông chiêu mộ những chiến binh loài người dũng cảm từ khắp nơi cho một cam kết trung thành với <i class=\"clr-orange\">Arthur</i>. Dưới sự lãnh đạo tài tình của mình, ông đã hình thành được một tập hợp những hiệp sĩ dũng mãnh được đào tạo để chiến đấu kiên cường. Họ diễu hành dưới lá cờ công lý mang danh <i class=\"clr-orange\">Arthur</i>. Quân đoàn du hành qua khắp các mảnh đất, tiêu diệt mọi ác quỷ trên đường. Quan trọng nhất, họ thiết lập lại trật tự và bình yên, đảm bảo sự sống cho mọi người.<br>Những hành động của đoàn quân <i class=\"clr-orange\">Arthur</i> đã cản trở kế hoạch xâm chiếm của lũ ác quỷ. <i class=\"clr-orange\">Arthur</i> nghiễm nhiên trở thành cái gai khó chịu trong mắt Maloch, từ đó những hiệp sĩ của <i class=\"clr-orange\">Arthur</i> liên tục phải chống chọi với những đợt tấn công. Tuy nhiên, ý chí của binh đoàn không hề bị lung lay. <i class=\"clr-orange\">Arthur</i> cùng các hiệp sĩ kiên quyết đứng lên bảo vệ vùng đất của họ. Sự kiên cường và kiên trì của họ đã truyền cảm hứng cho tất cả mọi người.<br>Thiếu hụt quân số chưa bao giờ là vấn đề đội quân của <i class=\"clr-orange\">Arthur</i> phải đối mặt, do luôn luôn có các chàng trai trẻ cùng bầu nhiệt huyết sẵn sàng tham gia bất cứ lúc nào. Những người anh em này một lòng trung thành với nhà lãnh đạo của họ, <i class=\"clr-orange\">Arthur</i>. Con người, từ lâu luôn bị những chủng loại khác khinh thường, cuối cùng đã nhận được sự công nhận và tôn trọng lần đầu tiên trong suốt chiều dài lịch sử.<br>Ngay cả những kẻ thù lâu năm của con người đến từ Rừng chạng vãng cũng đã mở rộng cánh tay đón chào <i class=\"clr-orange\">Arthur</i>. Thậm chí Cung điện ánh sáng cũng ban phước lành dành cho những hiệp sĩ <i class=\"clr-orange\">Arthur</i>. <i class=\"clr-orange\">Arthur</i> và tinh thần hiệp sĩ của ông đã đem lại nhiều điều dành cho loài người cùng những người kế nhiệm, đặc biệt là Thane, chàng hiệp sĩ được trao ngọn đuốc quang vinh.<br>\"Ánh hào quang của Thánh kiếm sẽ đưa ánh sáng sẽ soi sáng cho con đường của mỗi Hiệp Sĩ!\"",
		"hero_skin": [
			{
				"name": "Thanh Gươm Chính Nghĩa",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Arthur01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Hoàng Kim Cốt (Bậc A)",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Arthur02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Lãnh Chúa Xương (Bậc A)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Arthur03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "",
			},
			{
				"name": "Si Tình Kiếm (Valentine)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Arthur04",
				"disable": "yes",
				"img": "thumb4.jpg",
				"video": "",
			},
			{
				"name": "Siêu Sao Cricket",
				"gold": "",
				"voucher": "",
				"event": "Từ Sổ Sứ Mệnh II",
				"wall": "Arthur05",
				"disable": "yes",
				"img": "thumb5.jpg",
				"video": "",
			},
		]
	},
	"slimz": {
		"hero_id": "Slimz",
		"hero_name": "Slimz",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Xạ thủ",
			"special": "Tiền đạo / Tiền vệ",
			"lane": "Đi rừng / Đường rồng",
		},
		"main_skill": [
			{
				"name": "Xuyên thấu",
				"info": "Nội tại: sau mỗi 2 đòn đánh thường, đòn tiếp theo của Slimz sẽ xuyên thủng mục tiêu đầu sát thương lên cả các nạn nhân phía sau, gây 1.3 lầm STVL, (tốc độ đánh cơ bản tăng lên 3%, Tầm bắn cơ bản 7.5m).",
			},
			{
				"name": "Lao cơ khí",
				"info": "ST Gốc: 150/200/250/300/350/400<br>Tốc đánh: 20%/24%/28%/32%/36%/40%<br>ST chuẩn: 100/140/180/220/260/300<br>Slimz phóng 1 mũi lao bay cực xa, nạn nhân đầu tiên trúng chiêu sẽ bị choáng và chịu tối thiểu 150 (+86) STVL, thời gian choáng và sát thương gây ra tỷ lệ thuận với khoảng cách mũi lao đã bay bao xa, tối đa choáng trong 2.5s và gây gấp đôi sát thương, mũi lao trúng đích giúp Slimz tăng 20% tốc đánh cơ bản trong 4s, nếu nạn nhân là tướng địch sẽ khiến Slimz tăng thêm 60% tốc chạy trong 1s, nếu là lính hoặc quái sẽ gây thêm 100 STC."
			},
			{
				"name": "Lò xo cơ khí",
				"info": "Công vật lý: 50/60/70/80/90/100<br>Slimz sử dụng lò xo trong ba lô nhảy bật đến điểm đã chọn, sau khi đáp xuống đất hắn được tăng 50 công vật lý trong 5s.",
			},
			{
				"name": "Thuốc cà rốt",
				"info": "Sửa lỗi khiến sát thương chiêu cuối của Slimz kẹt ở cấp đầu tiên<br>Slimz sử dụng một loại thuốc cà rốt đặc chế giúp hắn được kích phát bản năng hoang dã, khiến các đòn đánh thường gây thêm 3/4/5% máu tối đa của mục tiêu (tối đa 150 sát thương lên quái rừng). Đồng thời Slimz được tăng 20% tốc chạy trong 8 giây (hiệu ứng tăng thêm 3 giây với mỗi điểm hạ hoặc phụ).",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,4,0",
			}
		],
		"skill_note": "*Hãy tập luyện kỹ năng vừa đánh vừa chạy và giữ vị trí thật tốt để có sát thương cao nhất.",
		"skill_special": "TrungTri,TocBien",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo22",
					"info": "Tốc đánh +0.6%<br>Tỷ lệ chí mạng +0.3%<br>Sát thương chí mạng +1.1%",
				},
				{
					"name": "NgocTim27",
					"info": "Tốc đánh +0.4%<br>Tỷ lệ chí mạng +0.3%<br>Tốc chạy +0.5%",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo36",
					"info": "Công vật lý +2<br>Xuyên giáp +3.6",
				},
				{
					"name": "NgocTim31",
					"info": "Công vật lý +1.6<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đi rừng",
				"info": "KiemTruyHon,GiayDuMuc,ThanhKiem,KiemFafnir,ThuongXuyenPha,LiemDoatMenh",
			},
			{
				"name": "Đi rừng",
				"info": "CungBaoTo,GiayDuMuc,ThanhKiem,KiemFafnir,ThuongXuyenPha,KiemMuramasa",
			},
			{
				"name": "Game thủ hay lên",
				"info": "KiemTruyHon,GiayDuMuc,ThanhKiem,QuyKiem,SongDaoBaoTap,KiemMuramasa",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "phù hợp khi chơi cùng",
				"info": [
					{"hero_id": "cresht", "id_page": "Cresht"},
					{"hero_id": "jinna", "id_page": "Jinna"},
					{"hero_id": "grakk", "id_page": "Grakk"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "batman", "id_page": "Batman"},
					{"hero_id": "kriknak", "id_page": "Kriknak"},
				]
			}
		],
		"hero_story": "\"Giao dịch quan trọng nhất là phải công bằng!\"<br><i class=\"clr-orange\">Slimz</i> hoạt động trong khu vực giáp ranh giữa Lâu đài Khởi nguyên và Rừng chạng vạng. Cũng tương tự như các con buôn khác, hắn luôn tin vào giá trị cốt lõi của thương mại, đó chính là \"công bằng\". Một khi đã thông thương, tức hai bên đã bắt đầu vui vẻ hợp tác với nhau, đó chính là lúc <i class=\"clr-orange\">Slimz</i> lộ nanh vuốt ra và \"công bằng\" hết mức khi ép khô lợi nhuận từ đối tác.<br>Dưới lớp vỏ bọc của một thương nhân thành đạt, <i class=\"clr-orange\">Slimz</i> dần bành trướng lưc lượng thâu tóm tất cả mạng lưới giao dịch tại vùng biên giới, và nhanh chóng trở thành chúa tể của vùng đất này. Sau khi chiến tranh nổ ra, khứu giác nhạy bén của <i class=\"clr-orange\">Slimz</i> lập tức ngửi thấy mùi cơ hội. Hắn thuyết phục thành công Moren, vị chuyên gia cơ khí trứ danh, giúp chế tạo Lâu đài Cơ giới ngay trên khu biên giới. Tòa lâu đài này đóng vai trò then chốt trong việc cung cấp nhân lực, ma thú, vũ khí hoặc bất cứ thứ gì chiến tranh cần thiết. Bởi <i class=\"clr-orange\">Slimz</i> là một thương nhân trung lập, chiến tranh phe phái đâu liên quan gì đến hắn.<br>Chiến tranh càng lớn, thu nhập càng nhiều, nhiều đến nỗi <i class=\"clr-orange\">Slimz</i> đã tích lũy được cả một gia tài khổng lồ. Để bảo vệ số tài sản này, cũng như bảo đảm phi vụ làm ăn vẫn có thể diễn ra trôi chảy, <i class=\"clr-orange\">Slimz</i> nhận thấy hắn cần có một lực lượng phòng ngự đủ hùng mạnh để có thể dập tắt mọi tham vọng chiếm đoạt tài sản. Bất hạnh thay cho <i class=\"clr-orange\">Slimz</i> khi Preyta, chỉ huy tối cao của lực lượng Sa đọa, đã để mắt đến hắn. <i class=\"clr-orange\">Slimz</i> chiến đấu bằng hết sức bình sinh, thậm chí hắn còn tung con át chủ bài Omega, nhưng vẫn không thể cứu vãn được tình thế. Nhanh chóng tất cả gia sản hắn tốn vô số năm tích lũy tan thành mây khói, và rơi vào tay quân địch chỉ trong một đêm.<br>Khao khát lấy lại được những gì đã mất, <i class=\"clr-orange\">Slimz</i> trở lại Rừng chạng vạng và lập nên một hiệp ước cùng Tel'Annas, Nữ hoàng tinh linh: rằng nữ hoàng sẽ vận dụng sức mạnh của khu rừng để trợ giúp hắn chiếm lại được Lâu đài Cơ giới, bù lại <i class=\"clr-orange\">Slimz</i> sẽ ở lại trông coi khu rừng khi nữ hoàng vắng mặt.<br>\"Món nợ này môỵ ngày nào đó sẽ phải được trả đủ!\"",
		"hero_skin": [
			{
				"name": "Thỏ Tài Phiệt",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Slimz01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Thỏ Thợ Mỏ",
				"gold": "",
				"voucher": "185",
				"event": "",
				"wall": "Slimz02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Hiệp Sĩ Thỏ Ngọc (Bậc A)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Slimz03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "",
			},
		]
	},
	"ilumia": {
		"hero_id": "Ilumia",
		"hero_name": "Ilumia",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Pháp sư",
			"special": "Khống chế / Cấu rỉa",
			"lane": "Đường giữa",
		},
		"main_skill": [
			{
				"name": "Thần lực",
				"info": "Nội tại: Quả cầu ánh sáng sẽ lập tức được làm mới thời gian hồi, đồng thời được cường hóa trong vòng 3s tiếp theo sau mỗi khi Ilumia tung 2 chiêu thức bất kỳ.",
			},
			{
				"name": "Quả cầu ánh sáng",
				"info": "ST Gốc: 300/360/420/480/540/600<br>Ilumia tung quả cầu năng lượng theo hướng chỉ định, thứ sẽ phát nổ khi bay hết tầm hoặc trúng phải mục tiêu, gây sát thương phép. Khi được cường hóa bởi nội tại, Quả cầu ánh sáng sẽ gây sát thương gấp 1,6 lần sát thương trên đường bay và gấp đôi sát thương ở cuối đường bay và hất văng các nạn nhân trúng chiêu<br>Sẽ có thêm một bộ đếm báo hiệu thời gian Quả cầu ánh sáng được cường hoá<br>Bán kính nổ khi được cường hóa: 3"
			},
			{
				"name": "Trục xuất",
				"info": "ST Gốc: 190/214/238/262/286/310<br>H.Chiêu: 10/9/8/7/6/5<br>Làm chậm: 30%/34%/38%/42%/46%/50%<br>Ilumia đẩy lùi mọi kẻ địch lân cận, gây 190 (+0.4 công phép) STP đồng thời làm chậm 30% tốc chạy trong 1s.",
			},
			{
				"name": "Thần trận",
				"info": "ST Gốc: 640/820/1000<br>H.Chiêu: 70/60/50<br>Ilumia triệu hồi pháp trận chứa đầy sức mạnh thần thánh ngay vị trí hiện tại của tất cả tướng địch, gây 640 (+0) STP, đồng thời làm choáng các nạn nhân.<br>Sau khi kích hoạt chiêu thức sẽ cho phép hiển thị vị trí mục tiêu.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,2,4,2,0",
			}
		],
		"skill_note": "*Chiêu 1 hưởng reset và cường hóa từ Nội tại vì thế đây là chiêu khá độc đáo và khá mạnh của cô nàng.<br>*Bật Thần Trận trong các pha giao tranh tổng khiến kẻ địch phải dè chừng.",
		"skill_special": "TocBien,TocHanh",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim23",
					"info": "Công phép +1.4 <br>Hút máu phép +0.8%<br>Giáp phép +1.6",
				},
				{
					"name": "NgocXanh21",
					"info": "Tốc đánh +0.4%<br>Giảm hồi chiêu +0.5%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim36",
					"info": "Công phép +2.4<br>Hút máu phép +1%",
				},
				{
					"name": "NgocXanh33",
					"info": "Công phép +2.4<br>Giảm hồi chiêu +0.7%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường giữa",
				"info": "PhuongHoangLe,GiayPhuThuy,TruongBang,VuongMiengHecate,MatNaBerith,TruongHonMang",
			},
			{
				"name": "Đường giữa",
				"info": "NgocDaiPhapSu,GiayThuatSi,QuyenTruongRhea,TruongHonMang,VuongMiengHecate,SachThanh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "NgocDaiPhapSu,GiayThuatSi,VuongMiengHecate,TruongBang,SachThanh,DayChuyenLucBao",
			},
		],
		"hero_battle": [
			{
				"name": "chơi trên cơ",
				"desc": "dễ dàng chiến thắng khi gặp",
				"info": [
					{"hero_id": "arthur", "id_page": "Arthur"},
					{"hero_id": "payna", "id_page": "Payna"},
					{"hero_id": "dieu_thuyen", "id_page": "DieuThuyen"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "zill", "id_page": "Zill"},
					{"hero_id": "chaugnar", "id_page": "Chaugnar"},
					{"hero_id": "ngo_khong", "id_page": "NgoKhong"},
					{"hero_id": "kriknak", "id_page": "Kriknak"},
				]
			}
		],
		"hero_story": "<i class=\"clr-orange\">Ilumia</i> sở hữu mọi thứ: nhan sắc, thông thái, sức mạnh, vinh quang, và quyền lực. Nếu Maloch đại diện cho thế lực bóng tối, <i class=\"clr-orange\">Ilumia</i> đại diện cho thế quyền uy ánh sáng. Mọi tướng đều trở nên lu mờ trước <i class=\"clr-orange\">Ilumia</i>. Cô không bao giờ để lộ diện mạo của mình, vì vẫn còn đó một danh tính cô cần duy trì: Nữ thần ánh sáng.<br>Sự thánh khiết, cao quý, đầy thanh tao của cô khiến tất cả đều tin rằng <i class=\"clr-orange\">Ilumia</i> chính là nữ thần mang đến hy vọng và ánh sáng cho nhân loại. Cung điện ánh sáng được dựng nên chính bởi thứ niềm tin này. Thời gian trôi qua niềm tin này không hề phai nhạt đi mà ngày càng trở nên vững chắc hơn, giúp những tín đồ kiên tâm trước các cám dỗ bóng tối.<br>Là một nhà lãnh đạo tài ba, <i class=\"clr-orange\">Ilumia</i> tinh thông cả đối nội lẫn đối ngoại. Dẫu rằng quyền uy của Thane như mặt trời buổi ban trưa, cô vẫn giải phóng được Cung điện khỏi các ràng buộc của Lâu đài Khởi nguyên. Đồng thời cô hợp sức cùng Rừng chạng vạng đánh bật được các cuộc tấn công của lực lượng Sa đọa. <i class=\"clr-orange\">Ilumia</i> sẽ chẳng bao giờ để quyền lực tuột khỏi tầm khống chế của bản thân.",
		"hero_skin": [
			{
				"name": "Nữ Thần Ánh Sáng",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Ilumia01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Ilumia01",
			},
			{
				"name": "Nữ Chúa Tuyết (Bậc A)",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Ilumia02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Hồng Hoa Hậu (Bậc S)",
				"gold": "",
				"voucher": "379",
				"event": "",
				"wall": "Ilumia03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "",
			},
			{
				"name": "Thiên Nữ Áo Dài (Bậc S)",
				"gold": "",
				"voucher": "449",
				"event": "",
				"wall": "Ilumia04",
				"disable": "",
				"img": "thumb4.jpg",
				"video": "",
			},
		]
	},
	"preyta": {
		"hero_id": "Preyta",
		"hero_name": "Preyta",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Pháp sư",
			"special": "Cấu rỉa",
			"lane": "Đường giữa",
		},
		"main_skill": [
			{
				"name": "Rồng dịch bệnh",
				"info": "Nội tại: cưỡi rồng nên Preyta có tốc chạy nhanh hơn đa số tướng khác!",
			},
			{
				"name": "Hơi độc hại",
				"info": "ST tối đa: 720/900/1080/1260/1440/1620<br>Preyta niệm chú 2 giây tập trung toàn bộ năng lượng để phát tán dịch bệnh theo hướng chỉ định. Trong thời gian này nếu thức hiện bất kỳ động tác gì khác sẽ khiến chiêu thức được kích hoạt ngay lập tức, gây 250/300/350/400/450/500 (+0.35 công phép) sát thương phép. Nếu tích tụ đủ 2 giây sẽ khiến sát thương tăng gấp ba. Khi Preyta trong trạng thái Siêu khuẩn, hắn có thể di chuyển tự do kể cả trong thời gian niệm chú."
			},
			{
				"name": "Bom hoại tử",
				"info": "Hồi chiêu: 12/ 11.4/ 10.8/ 10.2/ 9.6/ 9 giây<br>Preyta tạo ra một vụ nổ dịch bệnh đẩy lùi kẻ địch trong vùng ảnh hưởng, gây 250/300/350/400/450/500 (+0.50 công phép) sát thương phép kèm hiệu ứng làm chậm 30% tốc chạy trong 2 giây. Trong trạng thái Siêu khuẩn, vụ nổ còn gây kèm hiệu ứng làm choáng trong 0.75 giây.",
			},
			{
				"name": "Dịch hạch",
				"info": "H.Chiêu: 45/40/35<br>Preyta tiến vào trạng thái siêu khuẩn, tạo lá chắn 500/750/1000 (+1.0 công phép), đồng thời làm mới hồi chiêu kèm cường hóa Hơi độc hại và Bom hoại tử kế tiếp. Chưa hết, trong 10 giây hiệu lực Preyta còn được tăng tầm đánh, 15% tốc chạy, 24/32/40 % tốc đánh, và khiến đòn đánh thường gây thêm 100/175/250 (+0. 5 công phép) sát thương phép diện rộng.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,4,2,3,0",
			}
		],
		"skill_note": "*Cố gắng giữ vị trí và cover AD tốt nhất có thể.",
		"skill_special": "TocBien,ThanhTay,TocHanh",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim25",
					"info": "Máu tối đa +45",
				},
				{
					"name": "NgocXanh22",
					"info": "Máu tối đa +15.7<br>Hồi máu/5s +3.1<br>Giảm hồi chiêu +0.3%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo37",
					"info": "Tốc đánh +1%<br>Máu tối đa +33.7<br>Giáp +2.3",
				},
				{
					"name": "NgocTim39",
					"info": "Máu tối đa +75",
				},
				{
					"name": "NgocXanh34",
					"info": "Máu tối đa +37.5<br>Giảm hồi chiêu +0.6%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường giữa",
				"info": "PhuongHoangLe,GiayPhuThuy,ThapTuKiem,VuongMiengHecate,QuyenTruongRhea,KiemFafnir",
			},
			{
				"name": "Đường giữa",
				"info": "NgocDaiPhapSu,GiayHermes,ThapTuKiem,VuongMiengHecate,KiemFafnir,QuyenTruongRhea",
			},
			{
				"name": "Game thủ hay lên",
				"info": "NgocDaiPhapSu,GiayPhuThuy,ThapTuKiem,VuongMiengHecate,QuyenTruongRhea,KiemFafnir",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp chơi cùng",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "gildur", "id_page": "Gildur"},
					{"hero_id": "toro", "id_page": "Toro"},
					{"hero_id": "lumburr", "id_page": "Lumburr"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "batman", "id_page": "Batman"},
					{"hero_id": "butterfly", "id_page": "Butterfly"},
					{"hero_id": "grakk", "id_page": "Grakk"},
				]
			}
		],
		"hero_story": "“Hãy run sợ đi, ta chính là hiện thân của bệnh tật!”<br>Trong suốt các cuộc chiến cổ đại thương vong là điều không thể tránh khỏi, và hậu quả nó mang lại luôn kèm theo vô số những thi thể của các chiến sĩ gục ngã trên chiến trường. An táng tại đây là một xa xỉ mà chẳng có bất kỳ ai đạt được, và cứ thế những thi thể ngày càng hoại tử, hôi thối, và trở nên khủng khiếp hơn theo thời gian.<br>Kẻ cai quản nơi đây là một người lính cần mẫn, ít nói. Ngày qua ngày, tiếp xúc với tử thi, oán khí tích tụ đã dần biến đổi hắn. Linh hồn trở nên u ám, lương tri bị ăn mòn, gã dần không còn nhớ bản thân mình là ai nữa. Những gì gã nhớ lúc này chỉ là cái tên <i class=\"clr-orange\">Preyta</i> cùng năng lực hắc ám dịch bệnh có thể tiêu diệt bất kì sinh vật sống nào trên đời. Kể từ lúc đó, cái tên Kị sĩ dịch bệnh, <i class=\"clr-orange\">Preyta</i> ra đời.<br>Sử thi lúc đó có viết rằng, “<i class=\"clr-orange\">Preyta</i> bước đến đâu, đất đai nơi đó trở nên khô cằn, u ám đến đấy. Luồng khí bao quanh của <i class=\"clr-orange\">Preyta</i> sẽ biến sinh vật sống trở thành xác chết trong tích tắc. Hắn nuốt chửng mọi sinh vật sống xung quanh mình”.<br>“Ta chính là điềm báo của cái chết. Tên ta là <i class=\"clr-orange\">Preyta</i>!”",
		"hero_skin": [
			{
				"name": "Kỵ Sĩ Tai Ương",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Preyta01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Không Tặc",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Preyta02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Băng Hỏa Long Sư (Hữu Hạn)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Preyta03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "",
			},
		]
	},
	"skud": {
		"hero_id": "Skud",
		"hero_name": "Skud",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Đấu sĩ / Đỡ đòn",
			"special": "Tiền đạo / Khống chế",
			"lane": "Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Sôi máu",
				"info": "Nội tại: mỗi 10s Skud sẽ tung một cú đấm đặc biệt, gây 120% STCB, đồng thời giúp hồi 80 (+128) (+4% chỉ số máu tối đa) máu cùng 30 (+3% năng lượng đã sử dụng) năng lượng, mỗi đòn đánh thường giúp giảm thời gian hồi nội tại này đi 1s.",
			},
			{
				"name": "Găng nổi loạn",
				"info": "Hồi chiêu: 6 giây<br>Skud nhảy xổ đến phía trước tung một cú đấm, gây 200/250/300/350/400/450 (+1.0 công vật lý) sát thương vật lý kèm hiệu ứng hất văng trong 0.5 giây. Chiêu trúng kẻ địch giúp Skud nhận 60/90/120/150/180/210 giáp vật lý trong 3 giây."
			},
			{
				"name": "Găng cuồng bạo",
				"info": "ST Gốc: 120/160/200/240/280/320<br>H.Chiêu: 11/10.6/10.2/9.8/9.4/9<br>Skud dồn sức mạnh vào găng tay khiến bản thân được tăng 20% tốc đánh, 10% tốc chạy trong 5 giây. Cú đấm kế tiếp trong thời gian hiệu lực sẽ gây thêm 120 (+0.4 công vật lý) sSTVL, kèm hiệu ứng làm chậm tốc chạy.<br>Sau khi dùng găng cuồng bạo, sát thương nhiều nhất có thể tăng: 100%.",
			},
			{
				"name": "Găng hung thần",
				"info": "ST Gốc: 370/470/570<br>H.Chiêu: 35/30/25<br>Skud niệm chú trong thoáng chốc rồi hất văng tất cả kẻ địch lân cận, gây 370 (+1.2 công vật lý) STVL đồng thời làm choáng 1s, ngoại ra chiêu còn gây thêm 15% máu hiện tại của nạn nhân thành STVL, đồng thời khiến Găng cuồng bạo được lập tức làm mới.",
			}
		],
		"skill_up": {
			"line1": "2,5,7,10,14,15",
			"line2": "1,3,6,9,11,13",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,4,2,0",
			}
		],
		"skill_note": "*Với kỹ năng làm chậm diện rộng của mình,hãy kiếm vị trí combo tốt nhất có thể.",
		"skill_special": "TocBien,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim23",
					"info": "Công vật lý +0.6<br>Máu tối đa +36",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo37",
					"info": "Tốc đánh +1%<br>Máu tối đa +33.7<br>Giáp +2.3",
				},
				{
					"name": "NgocTim31",
					"info": "Công vật lý +1.6<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh35",
					"info": "Giáp +2.7<br>Giáp phép +2.7<br>Giảm hồi chiêu +0.6%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường trên hoặc dưới",
				"info": "AoChoangThanRa,GiayKienCuong,AoChoangBangGia,GiapGaia,KhienThatTruyen,GiapThongKho",
			},
			{
				"name": "Đường trên hoặc dưới",
				"info": "ThuongLonginus,GiayHoVe,GiapGaia,KhienHuyenThoai,AoChoangBangGia,GiapHoMenh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "ThuongLonginus,GiayKienCuong,AoChoangBangGia,HuanChuongTroy,KhienThatTruyen,GiapHoMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp chơi cùng",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "natalya", "id_page": "Natalya"},
					{"hero_id": "preyta", "id_page": "Preyta"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "batman", "id_page": "Batman"},
					{"hero_id": "raz", "id_page": "Raz"},
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "dieu_thuyen", "id_page": "DieuThuyen"},
				]
			}
		],
		"hero_story": "\"Hắn là một cỗ máy chiến đấu chứa đầy dòng máu ác quỷ luôn sục sôi sự phẫn nộ\".<br><i class=\"clr-orange\">Skud</i> là sáng chế tự hào nhất của Mganga. Chảy trong mình dòng máu ác quỷ luôn sục sôi thứ năng lượng của sự phẫn nộ, <i class=\"clr-orange\">Skud</i> không chỉ sở hữu sức mạnh khôn cùng mà còn luôn khao khát tàn sát tất cả mọi sinh linh. Nắm đấm của hắn khiến bất kỳ ai muốn đối đầu với các thế lực bóng tối đều phải suy nghĩ lại thật cẩn thận. Trong suốt những năm tháng chiến tranh, <i class=\"clr-orange\">Skud</i> được cắt cử phục vụ dưới trướng Preyta, đảm nhiệm trọng trách quân tiên phong của lực lượng Sa đọa.<br>Cuộc chiến tại Lâu đài Giả kim đánh dấu một cột mốc quan trọng trong chuỗi chiến tích của <i class=\"clr-orange\">Skud</i>. Hắn đã thành công dẫn một toán quân nhỏ vượt qua được phòng tuyến ma pháp trứ danh của Moen, chuyên gia cơ khí hóa. Chưa dừng lại ở đó, hắn một mình hạ gục tất cả các cỗ máy phòng ngự để thẳng tiến đến các tầng sâu hơn của lâu đài. Lúc bấy giờ Omega bất thình lình xuất hiện phản công, lập tức <i class=\"clr-orange\">Skud</i> cùng đồng bọn bị bao vây bởi cả biển những cỗ máy thép lạnh.<br>Nhìn thấy lực lượng phòng ngự hùng mạnh của Lâu đài Giả kim không khiến <i class=\"clr-orange\">Skud</i> chùn bước, thậm chí hắn càng sôi máu, điên cuồng và trở nên mạnh mẽ hơn. Các cỗ máy không thể cản nổi bước tiến của hắn, sắt thép giờ đây với hắn thậm chí còn mỏng manh hơn cả giấy. Chỉ một mình <i class=\"clr-orange\">Skud</i> đã quét sạch lực lượng phòng ngự vừa trỗi dậy. Không còn cách nào khác, Omega buộc phải tóm lấy Moen và tháo chạy trước khi quá muộn.<br>Khi cuộc chiến ngã ngũ, <i class=\"clr-orange\">Skud</i> giành được một phần thưởng đặc biệt khiến hắn đã mạnh nay càng trở nên đáng sợ hơn bao giờ hết; một cặp găng được rèn bởi chính tay Moen. Đặc biệt Mganga đã tinh chỉnh khiến đôi găng này hoàn toàn tích hợp với dòng máu ác quỷ sục sôi bên trong <i class=\"clr-orange\">Skud</i>, khiến tổ hợp này trở nên bất khả chiến bại.<br>\"Máu của ta lại bắt đầu sục sôi!\"",
		"hero_skin": [
			{
				"name": "Cỗ Máy Cuồng Nộ",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Skud01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Sơn Tặc (Bậc A)",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Skud02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
		]
	},
	"raz": {
		"hero_id": "Raz",
		"hero_name": "Raz",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Pháp sư / Sát thủ",
			"special": "Cấu rỉa",
			"lane": "Đường giữa",
		},
		"main_skill": [
			{
				"name": "Đấm và lách",
				"info": "Nội tại: Sau khi tung chiêu thức Raz có thể lập tức lách bước với tốc độ di chuyển cực cao, đặc biệt cú đấm đầu tiên trong 3 lần đánh thường sẽ gây thêm 100 STP (+5 mỗi cấp) (+0.7 công phép） kèm hiệu ứng đẩy lùi địch.",
			},
			{
				"name": "Cú đấm thăng hoa",
				"info": "ST Gốc: 480/540/600/660/720/780<br>H.Chiêu: 10/9.2/8.4/7.6/6.8/6<br>Raz lao tới tung một cú đấm móc đầy uy lực lên những kẻ địch trong vùng ảnh hưởng, gây 480 (+0) STP kèm hiệu ứng hất văng, chiêu trúng đích giúp hổi 25 nội năng."
			},
			{
				"name": "Cú đấm chân không",
				"info": "H.Chiêu: 4/3.6/3.2/2.8/2.4/2<br>Raz vung tay mạnh đến mức sức gió của cú đấm gây 500/570/640/710/780/850 (+0.9 công phép) sát thương phép kèm hiệu ứng làm chậm 60/66/72/78/84/90% tốc chạy, và giảm 50/100/150/200/250/300 giáp phép lên kẻ địch đầu tiên trúng phải; chiêu thức tung trúng đích giúp hồi 25 nội năng.<br>Sửa một lỗi khiến chiêu thức không được hưởng lợi từ hiệu ứng giảm giáp phép.",
			},
			{
				"name": "Tả xung hữu đột",
				"info": "ST Gốc: 720/900/1080<br>H.Chiêu: 25/22.5/20<br>Raz ủi người về phía trước tung ra một cú đấm bộc phá, gây 720 (+0) STP, kèm hiệu ứng đẩy lùi và giảm công vật lý, chiêu trúng đích giúp hồi 25 nội năng.",
			}
		],
		"skill_up": {
			"line1": "2,6,10,13,14,15",
			"line2": "1,3,5,7,9,11",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,2,4,3,0",
			}
		],
		"skill_note": "*Với bộ chiêu thức ám sát từ khoảng cách xa, hãy tận dụng và dứt điểm kẻ địch nhanh nhất có thể.",
		"skill_special": "TocBien,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim23",
					"info": "Công phép +1.4 <br>Hút máu phép +0.8%<br>Giáp phép +1.6",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim36",
					"info": "Công phép +2.4<br>Hút máu phép +1%",
				},
				{
					"name": "NgocXanh33",
					"info": "Công phép +2.4<br>Giảm hồi chiêu +0.7%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường giữa",
				"info": "TruongBungNo,GiayHermes,VuongMiengHecate,QuyenTruongRhea,MatNaBerith,SachThanh",
			},
			{
				"name": "Đường giữa",
				"info": "GuomLoki,GiayHoVe,AoChoangBangGia,GuomHienTriet,QuyenTruongRhea,SachThanh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "TruongBungNo,GiayKienCuong,VuongMiengHecate,QuyenTruongRhea,TruongHonMang,SachTruyHon",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp chơi cùng",
				"info": [
					{"hero_id": "preyta", "id_page": "Preyta"},
					{"hero_id": "skud", "id_page": "Skud"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "aleister", "id_page": "Aleister"},
					{"hero_id": "taara", "id_page": "Taara"},
					{"hero_id": "grakk", "id_page": "Grakk"},
					{"hero_id": "kil_groth", "id_page": "KilGroth"},
				]
			}
		],
		"hero_story": "\"<i class=\"clr-orange\">Raz</i> từng là một tên nô lệ bị bán cho lực lượng Sa đọa, nhưng thật ra anh chính là một điệp viên được Thane bí mật cài vào nhằm tìm hiểu sâu hơn về lực lượng này.<br>Tài năng nổi bật của <i class=\"clr-orange\">Raz</i> với nắm đấm nhanh chóng được Preyta, Kỵ sĩ tai ương nhận ra và cất nhắc làm đội trưởng của một nhóm nô lệ nho nhỏ. Nhanh chóng với sự khéo léo chẳng kém cạnh nắm đấm của mình là bao, <i class=\"clr-orange\">Raz</i> đã giành được sự ủng hộ của các nô lệ khác giúp tiểu đội của họ ngày càng bành trướng góp phần không nhỏ vào công cuộc ngấm ngầm kềm hãm sức mạnh của lực lượng Sa đọa.<br>Bất hạnh thay, Preyta quỷ quyệt nhanh chóng phát hiện vấn đề. Hắn liền lập tức âm thầm sắp đặt một cái bẫy chết người hòng tóm gọn quân phản kháng một lần và mãi mãi. Chẳng ngờ rằng cả đội đã bị lộ, <i class=\"clr-orange\">Raz</i> cùng đồng bọn rơi vào bẫy và buộc phải chiến đấu với vô vàn kẻ địch hung hãn khát máu. Nhưng kể cả trong thời khắc tuyệt vọng nhất, <i class=\"clr-orange\">Raz</i> vẫn kiên quyết không lùi bước.<br>Phẫn nộ trước sự bất khuất của <i class=\"clr-orange\">Raz</i>, Preyta tung lời nguyền độc địa bao phủ lấy cả toán quân phản kháng. Trước hiểm họa khôn cùng, <i class=\"clr-orange\">Raz</i> bộc phát toàn bộ sức bình sinh tung vô số những cú đấm bùng nổ đẩy lùi kẻ địch, thành công phá vây giúp bản thân và những đồng bọn còn sót lại rút lui trước khi quá muộn. Trớ trêu thay lời nguyền của Preyta vẫn kịp bám vào hai bàn tay của <i class=\"clr-orange\">Raz</i> và dần dần hủy hoại cả cơ thể lẫn linh hồn của anh.<br>Sau khi đón được <i class=\"clr-orange\">Raz</i>, Thane tức tốc tìm đến Đền ánh sáng khẩn cầu Thánh nữ Lauriel cứu giúp cả thể xác lẫn linh hồn của người chiến sĩ quả cảm này. Lauriel đồng ý, nhưng với điều kiện <i class=\"clr-orange\">Raz</i> phải vượt qua được khảo nghiệm linh hồn của Suối sinh mệnh. Chỉ những ai bất khuất nhất, quả cảm nhất, và chính trực nhất mới xứng đáng nhận được sự chúc phúc thần thánh của Suối sinh mệnh.<br><i class=\"clr-orange\">Raz</i> lần nữa chứng minh sức mạnh ý chí của bản thân, anh vượt qua được thử thách và nhận được sự chúc phúc của Suối sinh mệnh giúp cả cơ thể lẫn linh hồn được hoàn toàn bình phục. Chưa dừng lại ở đó, <i class=\"clr-orange\">Raz</i> thậm chí còn nhận được một quyền năng mới đầy hùng mạnh. Sau khi thoát khỏi thần chết, <i class=\"clr-orange\">Raz</i> đã trở lại và lợi hại hơn nghìn lần!\"",
		"hero_skin": [
			{
				"name": "Quyền Vương",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Raz01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Đại Tù Trưởng",
				"gold": "",
				"voucher": "279",
				"event": "",
				"wall": "Raz02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Băng Quyền Quán Quân (Bậc S)",
				"gold": "",
				"voucher": "499",
				"event": "",
				"wall": "Raz03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "",
			},
			{
				"name": "Chiến Thần Muay Thái (Bậc SS)",
				"gold": "",
				"voucher": "",
				"event": "1 viên đá quý",
				"wall": "Raz04",
				"disable": "yes",
				"img": "thumb4.jpg",
				"video": "",
			},
		]
	},
	"lauriel": {
		"hero_id": "Lauriel",
		"hero_name": "Lauriel",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Pháp sư / Sát thủ",
			"special": "Tiền đạo",
			"lane": "Đường giữa",
		},
		"main_skill": [
			{
				"name": "Trời phạt",
				"info": "Nội tại: Các chiêu thức trúng đích của Lauriel sẽ khắc dấu ấn Trời phạt lên mục tiêu, khi đạt đủ 4 lần tích lũy, dấu ấn sẽ bùng nổ giúp hồi 110 (+8 mỗi cấp tướng ) máu, và gây 160 (+0.64 công phép) STC diện rộng, đồng thời làm chậm 50% tốc chạy của nạn nhân, 1s hiệu lực.",
			},
			{
				"name": "Con đường sám hối",
				"info": "ST Gốc: 215/260/305/350/395/440<br>Lauriel vẽ ra một con đường ánh sáng gây 215 (+0) STP, trong thoáng chốc sau đó con đường sẽ bùng nổ gây lượng sát thương tương đương tự lần nữa lên những nạn nhân còn trong vùng hiệu lực."
			},
			{
				"name": "Đôi cánh thuần khiết",
				"info": "ST Gốc: 175/190/205/220/235/250<br>Lauriel tung cánh lướt đến hướng chỉ định, khi đến nơi nàng vỗ cánh tạo ra 3 luồng ánh sáng tấn công kẻ địch gây 175 (+0) STP mỗi luồng, kẻ địch trúng chiêu giúp giảm thời gian hồi đi 4s.",
			},
			{
				"name": "Đại phán xét",
				"info": "ST Gốc: 210/245/280<br>H.Chiêu: 40/35/30<br>Lauriel triệu hồi sức mạnh thần thánh tạo ra một pháp trận hùng mạnh, gây 210 (+0) STP lúc xuất hiện và biến mất, trong vùng hiệu lực Lauriel sẽ được giúp giảm mạnh thời gian hồi hai chiêu thức đầu.",
			}
		],
		"skill_up": {
			"line1": "1,3,6,10,14,15",
			"line2": "2,5,7,9,11,13",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,2,4,3,2,0,3,2,0",
			}
		],
		"skill_note": "*Lauriel càng về sau game càng bá đạo vì thế mà cứ quẩy thôi.<br>*Tích lũy đủ 4 điểm Nội tại vào mục tiêu sẽ mang lại cho Lauriel thêm nhiều sức mạnh.<br>*Chú ý Chiêu 1 gây 2 lần sát thương, vì thế hãy sử dụng nó một cách tốt nhất.<br>*Chiêu 2 bay nhảy khá đẹp mắt nhưng nó cũng là thứ vũ khí lợi hại của cô.<br>*Đại Phán Xét vị trí thích hợp sẽ giúp Lauriel không còn lo ngại một ai nửa.",
		"skill_special": "TocBien,ThanhTay,TrungTri",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim23",
					"info": "Công phép +1.4 <br>Hút máu phép +0.8%<br>Giáp phép +1.6",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim36",
					"info": "Công phép +2.4<br>Hút máu phép +1%",
				},
				{
					"name": "NgocXanh37",
					"info": "Hút máu phép +0.7%<br>Giáp +5.9",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường giữa",
				"info": "NgocDaiPhapSu,GiayKienCuong,KhienHuyenThoai,QuyenTruongRhea,VuongMiengHecate,GiapGaia",
			},
			{
				"name": "Đi rừng",
				"info": "GuomLoki,GiayHermes,AoChoangBangGia,KhienHuyenThoai,QuyenTruongRhea,TruongHonMang",
			},
			{
				"name": "Game thủ hay lên",
				"info": "NgocDaiPhapSu,GiayKienCuong,KhienHuyenThoai,QuyenTruongRhea,VuongMiengHecate,HuanChuongTroy",
			},
		],
		"hero_battle": [
			{
				"name": "chơi trên cơ",
				"desc": "dễ dàng chiến thắng khi gặp",
				"info": [
					{"hero_id": "zuka", "id_page": "Zuka"},
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "zephys", "id_page": "Zephys"},
					{"hero_id": "tel_annas", "id_page": "TelAnnas"},
					{"hero_id": "taara", "id_page": "Taara"},
					{"hero_id": "gildur", "id_page": "Gildur"},
					{"hero_id": "cresht", "id_page": "Cresht"},
					{"hero_id": "chaugnar", "id_page": "Chaugnar"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "grakk", "id_page": "Grakk"},
					{"hero_id": "aleister", "id_page": "Aleister"},
					{"hero_id": "skud", "id_page": "Skud"},
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "thane", "id_page": "Thane"},
					{"hero_id": "arthur", "id_page": "Arthur"},
				]
			}
		],
		"hero_story": "\"Trên chín tầng trời, nàng ngự trị cùng các thần.\"<br><i class=\"clr-orange\">Lauriel</i> là hộ thần của Đền ánh sáng, và cũng là lãnh tụ tinh thần của các tín đồ. Nhằm bảo đảm thế giới được duy trì trật tự cùng bình an, <i class=\"clr-orange\">Lauriel</i> dành phần lớn thời gian cư ngụ bên trong ngôi đền thờ phụng chúng thần, và truyền đạt lại dụ ngôn của các ngài đến với chúng sinh. Đối với tín đồ, <i class=\"clr-orange\">Lauriel</i> chính là người đại diện của các thần.<br>Tín ngưỡng thành kính đã từng khiến <i class=\"clr-orange\">Lauriel</i> sở hữu sức mạnh vô bì, nàng thậm chí đã từng nắm giữ quyền cai quản luân hồi. Bất kể là sinh mạng mới ra đời, hay trút bỏ hơi thở cuối cùng, hoặc linh hồn đi đâu về đâu, đều phụ thuộc vào <i class=\"clr-orange\">Lauriel</i>. Tương truyền khi đôi cánh của nàng khẽ đập nghĩa là một sinh mạng mới chào đời, khi cánh nàng khép lại nghĩa là có sinh mạng lìa đời.<br>Các tín đồ từng được chứng kiến sức mạnh của <i class=\"clr-orange\">Lauriel</i> trên chiến trường, khi nàng sải cánh bay xuyên qua hàng ngũ quân thù hạ gục từng tên một. Với tốc độ ánh sáng cùng sức mạnh thần thánh, chẳng kẻ nào có thể chống lại được nàng. Cùng với đội quân của mình, <i class=\"clr-orange\">Lauriel</i> đã quét sạch một đoàn quân Sa đọa trên chiến trường dễ như trở bàn tay.<br>\"Khi ngày tận thế đến, ta sẽ thổi lên chiếc tù và phán xét!\"",
		"hero_skin": [
			{
				"name": "Đại Thiên Sứ",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Lauriel01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Đọa Lạc Thiên Sứ",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Lauriel02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Phù Thủy Bí Ngô",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Lauriel03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "",
			},
			{
				"name": "Hỏa Phượng Hoàng (Bậc S)",
				"gold": "",
				"voucher": "279",
				"event": "",
				"wall": "Lauriel04",
				"disable": "yes",
				"img": "thumb4.jpg",
				"video": "",
			},
			{
				"name": "Thánh Quang Sứ (Bậc SS)",
				"gold": "",
				"voucher": "799",
				"event": "",
				"wall": "Lauriel05",
				"disable": "yes",
				"img": "thumb5.jpg",
				"video": "Lauriel05",
			},
		]
	},
	"batman": {
		"hero_id": "Batman",
		"hero_name": "Batman",
		"main_info": {
			"price_gold": "28,888",
			"price_voucher": "629",
			"price_text": "",
			"position": "Sát thủ / Đấu sĩ",
			"special": "Tiền đạo / Trung phong",
			"lane": "Đi rừng",
		},
		"main_skill": [
			{
				"name": "Truy nã",
				"info": "Nội tại: tiến đến gần tướng địch sẽ giúp tăng 20% tốc chạy.",
			},
			{
				"name": "Vuốt chân không",
				"info": "ST Gốc: 215/260/305/350/395/440<br>Batman vung tay tấn công những kẻ địch lân cận bằng móng vuốt chân không gây 215 (+145) STVL, trong số đó sẽ có một nạn nhân ngẫu nhiên chịu gấp hai lần sát thương."
			},
			{
				"name": "Phi tiêu dơi",
				"info": "ST Gốc: 165/186/207/228/249/270<br>H.Chiêu: 9.6/8.8/8/7.2/6.4/5.6<br>Hồi máu: 140/168/196/224/252/280<br>Batman phóng chiếc phi tiêu dơi trứ danh của mình, gây 165 (+97) STVL, đồng thời làm chậm tốc chạy của mục tiêu, sau 3s gây thêm 24% máu đã mất thành STVL, trong thời gian chiêu còn hiệu lưc nếu Batman tấn công nạn nhân đủ số lần khiến mục tiêu bị choáng, và bản thân được hồi lại 140 (+85) máu.",
			},
			{
				"name": "Dơi đêm",
				"info": "ST Gốc: 660/830/1000<br>H.Chiêu: 36/30/24<br>Sau 1.5s Batman ẩn mình vào bóng đêm và trở thành tàng hình trong tối đa 30s, khi tiến lại gần phạm vi 6 mét cạnh kẻ địch quá 3s, trạng thái tàng hình sẽ tự động chấm dứt, trong thời gian hiệu lực nếu Batman tái kích hoạt chiêu sẽ lướt bay đến tấn công kẻ địch, gây 660 (+321) STVL, sau khi rời khỏi trạng thái tàng hình Batman sẽ được tăng 50% tốc đánh trong 5s.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,10,13",
			"line2": "2,6,9,11,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "4,3,2,0",
			}
		],
		"skill_note": "*Tận dụng trạng thái tàng hình có thể đi gank các đường hoặc phá trụ địch nếu có thể.",
		"skill_special": "TrungTri,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim23",
					"info": "Công vật lý +0.6<br>Máu tối đa +36",
				},
				{
					"name": "NgocXanh22",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo36",
					"info": "Công vật lý +2<br>Xuyên giáp +3.6",
				},
				{
					"name": "NgocTim31",
					"info": "Công vật lý +1.6<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đi rừng",
				"info": "RiuLeviathan,GiayHermes,ThuongLonginus,AoChoangBangGia,ThuongXuyenPha,HuanChuongTroy",
			},
			{
				"name": "Đi rừng",
				"info": "RiuGnoll,GiayKienCuong,ThuongXuyenPha,AoChoangBangGia,HuanChuongTroy,LiemDoatMenh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "GiayKienCuong,ThuongXuyenPha,NanhFenrir,AoChoangBangGia,KiemMuramasa,LiemDoatMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp khi chơi cùng",
				"info": [
					{"hero_id": "airi", "id_page": "Airi"},
					{"hero_id": "maloch", "id_page": "Maloch"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "joker", "id_page": "Joker"},
					{"hero_id": "taara", "id_page": "Taara"},
					{"hero_id": "ryoma", "id_page": "Ryoma"},
					{"hero_id": "alice", "id_page": "Alice"},
				]
			}
		],
		"hero_story": "<i class=\"clr-orange\">Batman</i>, tên thật là Bruce Wayne, hay còn được gọi là Hiệp sĩ bóng đêm. Dẫu được sinh ra trong một gia đình giàu có, tuổi thơ của <i class=\"clr-orange\">Batman</i> lại cực kỳ đau khổ khi anh phải chứng kiến cha mẹ của mình bị lũ cướp sát hại ngay trước mắt. Kể từ đó trở đi, chiến đấu chống lại cái ác đã trở thành lý tưởng sống bất diệt của <i class=\"clr-orange\">Batman</i>. Suốt 10 năm, <i class=\"clr-orange\">Batman</i> chu du thế giới tôi rèn cả cơ thể lẫn ý chí của mình đến cực hạn. Kết quả không phụ lòng người, trên nền tảng cơ sở đầy vững chắc đó, anh đã phát huy được năng lực điều tra và chiến đấu trên cả xuất sắc. Điều này dần dần đã khiến cái tên <i class=\"clr-orange\">Batman</i> là nỗi hoảng sợ của gần như tất cả tội phạm trong mọi thế lực hắc ám.<br>Trong quá trình chiến đấu với tội phạm, nhiều lần <i class=\"clr-orange\">Batman</i> bị cuốn vào các cuộc chiến với những thế giới song song, cùng Zephys không ngừng chiến đấu. Thông qua những cuộc chiến này, dần dần <i class=\"clr-orange\">Batman</i> biết đến thế giới Liên Quân Mobile. Zephys cùng sức mạnh siêu phàm của hắn âm mưu chiếm lấy Trái Đất, xóa sổ mọi thế lực phản kháng nhằm thiết lập một trật tự thế giới mới. Tất cả vì mục đích biến Trái Đất thành hậu phương vững chắc giúp cung cấp nguồn lực vô hạn cho các cuộc chiến trong thế giới Liên Quân Mobile. <i class=\"clr-orange\">Batman</i> lần theo dấu vết của Zephys đến được thế giới mới hòng quyết tâm chặn đứng âm mưu tà ác này một lần và mãi mãi. Thế nhưng trước mũi thương tràn đầy sức mạnh ma pháp, ngay cả <i class=\"clr-orange\">Batman</i> cũng trở nên bất lực đến vô vọng. May thay Valhein, theo lệnh của Thane đến điều tra Zephys, đã kịp thời xuất hiện giải cứu <i class=\"clr-orange\">Batman</i> thoát chết khỏi đường tơ kẽ tóc. Cùng nhau cả hai đã đẩy lui được Zephys, phá tan kế hoạch xâm chiếm thế giới khác của hắn từ trong trứng nước.<br>\"Chào mừng bạn đến với thế giới mới!\" Sự nhiệt tình của Valhein khiến <i class=\"clr-orange\">Batman</i> khó từ chối, đồng thời cũng vì tò mò muốn tìm hiểu thêm về thế giới này, thế là <i class=\"clr-orange\">Batman</i> đã cùng người bạn đồng hành mới gặp này đến với Lâu đài khởi nguyên. Tại đây anh được gặp Thane cùng một mảnh đá huyền bí đầy năng lượng phép thuật. Ngay khi chạm vào mảnh đá này, một cảnh tượng khủng khiếp hiện ra ngay trước mắt anh: thế giới hoang tàn, người người lầm than, hắc ám tràn ngập muôn nơi như sắp sửa nuốt chửng tất cả.<br>\"Đây là ảo ảnh ư?\", <i class=\"clr-orange\">Batman</i> cố bảo trì sự tỉnh táo của bản thân, thắc mắc. Thane lắc đầu, ánh mắt nặng trĩu đáp lại \"Thảm kịch đó sẽ trở thành sự thực. Mảnh đá trên tay anh chỉ là một phần của Viên đá hỗn mang, cội nguồn của mọi sức mạnh vô bì. Nếu kẻ thù tập hợp được trọn vẹn viên đá này, chúng sẽ có sức mạnh thừa sức hủy diệt cả thế giới này, lẫn mọi thế giới có liên kết với nhau, bao gồm thế giới của anh!\" Không còn lựa chọn nào khác, <i class=\"clr-orange\">Batman</i> quyết tạm thời lưu lại thế giới này để ngăn chặn tấn thảm kịch khủng khiếp anh vừa nhìn thấy có thể xảy ra. Để làm được điều đó anh sẽ cần thích nghi với thứ sức mạnh lạ kỳ của thế giới này, và rất nhanh <i class=\"clr-orange\">Batman</i> đã tìm ra phương pháp cải tiến toàn bộ dàn vũ khí của bản thân, anh đã sẵn sàng để đối đầu với mọi thế lực của thế giới mới.<br>\"Bất kỳ kẻ nào dám xem thường <i class=\"clr-orange\">Batman</i> đều phải trả giá đắt!\"",
		"hero_skin": [
			{
				"name": "Hiệp Sĩ Bóng Đêm",
				"gold": "28,888",
				"voucher": "629",
				"event": "",
				"wall": "Batman01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Đôi Cánh Đại Dương",
				"gold": "",
				"voucher": "249",
				"event": "",
				"wall": "Batman02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Dơi Địa Ngục (Bậc S)",
				"gold": "",
				"voucher": "379",
				"event": "",
				"wall": "Batman03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "Batman03",
			},
		]
	},
	"airi": {
		"hero_id": "Airi",
		"hero_name": "Airi",
		"main_info": {
			"price_gold": "25,888",
			"price_voucher": "599",
			"price_text": "",
			"position": "Đấu sĩ / Sát thủ",
			"special": "Tiền đạo / Trung phong",
			"lane": "Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Sắc lẻm",
				"info": "Nội tại: mỗi đòn đánh thường giúp giảm thời gian hồi của Phi tiêu đi 1s.",
			},
			{
				"name": "Phi tiêu",
				"info": "ST Gốc: 200/275/350/425/500/575<br>Airi phóng phi tiêu theo hướng chỉ định, gây 200 (+1.1 Công vật lý) STVL và làm choáng những kẻ địch trúng chiêu."
			},
			{
				"name": "Kiếm vũ",
				"info": "ST Gốc: 100/120/140/160/180/200<br>H.Chiêu: 10/9.4/8.8/8.2/7.6/7<br>Airi múa kiếm lướt theo hướng chỉ định, gây 100 (+95) STVL, chiêu thức này có thể tung tối đa 3 lượt trước khi tiến vào thời gian hồi chiêu.",
			},
			{
				"name": "Long kiếm",
				"info": "ST Gốc: 250/350/450<br>H.Chiêu: 40/35/30<br>Bảo hộ: 250/400/550<br>Airi tung Long kiếm, gây 250 (+147) STVL lên các mục tiêu và làm chậm tốc chạy của chúng, ngay sau đó Airi tiếp tục tung kiếm gây lượng sát thương tương tự và làm choáng các nạn nhân, mỗi tướng địch trúng chiêu giúp Airi nhận lá chắn giúp chặn 250 (+127) sát thương, chưa hết Airi còn được tăng 100% tốc chạy giảm dần trong 2.5s kèm 30% tốc đánh trong 8s.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,4,3,2,3,0",
			}
		],
		"skill_note": "*Bộ combo nhanh nhẹn với độ cơ động cao, dễ dàng kết liễu đối thủ, dễ dàng rút khỏi giao tranh.",
		"skill_special": "BocPha,TrungTri",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim23",
					"info": "Công vật lý +0.6<br>Máu tối đa +36",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo36",
					"info": "Công vật lý +2<br>Xuyên giáp +3.6",
				},
				{
					"name": "NgocTim31",
					"info": "Công vật lý +1.6<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đi đường trên hoặc dưới",
				"info": "ThuongLonginus,GiayKienCuong,AoChoangThanRa,AoChoangBangGia,HuanChuongTroy,NanhFenrir",
			},
			{
				"name": "Đi rừng",
				"info": "RiuLeviathan,GiayKienCuong,AoChoangThanRa,AoChoangBangGia,HuanChuongTroy,KiemMuramasa",
			},
			{
				"name": "Đi rừng",
				"info": "KiemTruyHon,GiayHoVe,ThuongLonginus,AoChoangBangGia,HuanChuongTroy,ThuongXuyenPha",
			},
			{
				"name": "Game thủ hay lên",
				"info": "AoChoangThanRa,GiayKienCuong,AoChoangBangGia,ThuongXuyenPha,HuanChuongTroy,NanhFenrir",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp khi chơi cùng",
				"info": [
					{"hero_id": "superman", "id_page": "Superman"},
					{"hero_id": "cresht", "id_page": "Cresht"},
					{"hero_id": "raz", "id_page": "Raz"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "taara", "id_page": "Taara"},
					{"hero_id": "thane", "id_page": "Thane"},
					{"hero_id": "alice", "id_page": "Alice"},
				]
			}
		],
		"hero_story": "\"Dòng máu thuần khiết của họ nhà rồng cuồn cuộn tuôn chảy trong huyết quản của <i class=\"clr-orange\">Airi</i> Thượng nhẫn, truyền nhân mới nhất của một dòng tộc Ninja cổ xưa có tên là Rồng phương đông. Họ có một và chỉ một sứ mệnh đó chính là duy trì sự hòa bình và an toàn của cả lục địa bằng thứ sức mạnh họ sở hữu từ họ nhà rồng. Bản thân gánh vác trọng trách của cả dòng tộc Ninja thế hệ mới, <i class=\"clr-orange\">Airi</i> không chỉ xuất sắc đạt được danh hiệu cao quý \"\"Thượng nhẫn\"\", mà còn được chính loài Rồng huyền bí phương đông chứng nhận tài năng của cô bằng Dấu ấn Rồng ngài ban tặng.<br>Khi lực lượng hắc ám xâm lăng thế giới, các đội Ninja thượng đẳng dẫn đầu bởi <i class=\"clr-orange\">Airi</i>, lập tức tiến vế Đền ánh sáng để cứu viện. Bằng các nhẫn thuật thượng thừa của bản thân, <i class=\"clr-orange\">Airi</i> vượt qua vô số những ma quái ác quỷ với đầy rẫy những ma pháp hắc ám nhất. Để tăng tốc, <i class=\"clr-orange\">Airi</i> hóa thân thành một cơn lốc sắc bén vô bì, cắt xuyên tất cả mọi trở ngại trên đường đến Maloch, kẻ thống lãnh của quân đoàn ác quỷ.<br>Càng tiến đến gần Maloch, thương tích trên người <i class=\"clr-orange\">Airi</i> càng tích tụ nhiều hơn. Biết rõ bản thân nếu chiến đấu càng kéo dài, tình hình sẽ càng chỉ bất lợi hơn, <i class=\"clr-orange\">Airi</i> quyết định đánh cuộc tất cả bằng một và chỉ một đòn duy nhất. Cô dùng hết sức tàn còn lại để kích hoạt Dấu ấn Rồng rồi vung kiếm - vốn đã nhuộm vô số dòng máu hắc ám của bầy ác quỷ cô hạ gục trước đó - chém một đường tuyệt mỹ vào Maloch. Ngay tại khoảnh khắc ấy Maloch thậm chí không thể rút nổi thanh gươm quỷ của hắn để đón đỡ, tất cả những gì hắn có thể làm bao trùm bản thân bằng đôi cánh ác quỷ. Mọi nỗ lực chống cự trước sức mạnh thần thánh của loài rồng dường như đều vô ích.<br>Máu tuôn ra như suối từ vết thương trên ngực Maloch, đôi cánh của hắn chỉ có thể giúp hắn thoát chết trong đường tơ kẽ tóc. Chỉ một đường kiếm duy nhất từ <i class=\"clr-orange\">Airi</i> đã khiến kẻ thống lãnh đầy hùng mạnh Maloch trở nên vô vọng hơn bao giờ. Chẳng còn cách nào khác, Maloch buộc phải rút lui ngay lập tức để bảo toàn tính mạng, để lại một đoàn quân ác quỷ hỗn loạn như rắn mất đầu.<br>Sự quyết tâm của <i class=\"clr-orange\">Airi</i> thể hiện trên chiến trường này đã khiến tất cả ngưỡng mộ cô. Ngay cả bè lũ xấu xa nhất cũng đều phải run sợ khi nghe đến tên của <i class=\"clr-orange\">Airi</i>.\"",
		"hero_skin": [
			{
				"name": "Ninja Rồng",
				"gold": "25,888",
				"voucher": "599",
				"event": "",
				"wall": "Airi01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Ninja Xanh Lá (Bậc A)",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Airi02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Thích Khách (Bậc A)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Airi03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "",
			},
			{
				"name": "Cấm Vệ Nguyệt Tộc (Bậc S)",
				"gold": "",
				"voucher": "379",
				"event": "",
				"wall": "Airi04",
				"disable": "",
				"img": "thumb4.jpg",
				"video": "",
			},
			{
				"name": "Keimono (Bậc SS)",
				"gold": "",
				"voucher": "799",
				"event": "",
				"wall": "Airi05",
				"disable": "yes",
				"img": "thumb5.jpg",
				"video": "Airi05",
			},
		]
	},
	"zuka": {
		"hero_id": "Zuka",
		"hero_name": "Zuka",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Đấu sĩ / Sát thủ",
			"special": "Tiền đạo",
			"lane": "Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Võ hồn",
				"info": "Nội tại: Mỗi 15 giây khi gây sát thương lên tướng địch giúp kích hoạt nội lực Zuka, tăng thêm 15/20/25/30% công vật lý trong 4 giây.",
			},
			{
				"name": "Loạn đã bổng",
				"info": "Zuka lướt tới trước vung gậy phỉ thúy tấn công kẻ địch, gây 135/160/185/210/235/260 (+0.90 công vật lý) sát thương vật lý lên những nạn nhân lân cận. Chiêu thức này có thể tái sử dụng trong vòng 5 giây kế, đồng thời mỗi lần tung chiêu cường hóa đòn đánh thường kế tiếp của Zuka giúp gây thêm 60/80/100/120/140/160（+0.25 công vật lý) sát thương vật lý và gia tăng tầm đánh."
			},
			{
				"name": "Phi thân kích",
				"info": "Zuka lộn nhào về phía trước, gây 100/120/140/160/180/200 (+0.35 công vật lý) sát thương vật lý lên những nạn nhân trúng chiêu dọc đường bay. Tung chiêu trúng đích giúp Zuka nhận 250/300/350/400/450/500 (+1.5 công vật lý) lá chắn trong 2.5 giây, đồng thời cường hóa đòn đánh thường kế tiếp gây thêm 50% công vật lý sát thương vật lý và làm choáng các kẻ địch lân cận trong 1 giây. Đặc biệt khi lá chắn biến mất, Zuka sẽ được hồi 30/40/50/60/70/80 (+0.1 công vật lý) máu mỗi giây trong 3 giây.",
			},
			{
				"name": "Trầm trọng lực",
				"info": "Zuka phóng vút lên không rồi nện xuống mặt đất, gây 500/650/800 (+ 1.0 công vật lý) sát thương vật lý lên các nạn nhân trong vùng ảnh hưởng, đồng thời làm choáng trúng trong 1 giây. Đòn đánh thường kế tiếp của Zuka được cường hóa, gây thêm 70/110/150（+0.25 công vật lý) sát thương vật lý lên những kẻ địch lân cận.",
			}
		],
		"skill_up": {
			"line1": "1,5,9,13,14,15",
			"line2": "2,3,6,7,10,11",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,0,2,0,3,0",
			},
			{
				"name": "*Hoặc như này",
				"info": "2,0,3,0,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "4,2,0,2,0,3,0",
			},
			{
				"name": "*Hoặc như này",
				"info": "2,0,2,0,4,0,3,0",
			},
		],
		"skill_note": "*Nhanh chóng tạo lợi thế bằng việc đi gank các đường đang đẩy cao.",
		"skill_special": "BocPha,TocBien,TrungTri",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim27",
					"info": "Tốc đánh +0.4%<br>Tỷ lệ chí mạng +0.3%<br>Tốc chạy +0.5%",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo36",
					"info": "Công vật lý +2<br>Xuyên giáp +3.6",
				},
				{
					"name": "NgocTim31",
					"info": "Công vật lý +1.6<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường Caesar (mang Trừng trị)",
				"info": "KiemTruyHon,GiayKienCuong,ThuongXuyenPha,PhucHopKiem,NanhFenrir,KhienThatTruyen",
			},
			{
				"name": "Đường Caesar (mang Bộc phá)",
				"info": "AoChoangThanRa,GiayKienCuong,ThuongXuyenPha,PhucHopKiem,NanhFenrir,GiapHoMenh",
			},
			{
				"name": "Đương Caesar (mang Bộc phá)",
				"info": "ThuongXuyenPha,GiayKienCuong,PhucHopKiem,KhienThatTruyen,KiemMuramasa,HuanChuongTroy",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp đi cùng đồng đội có khả năng giữ, làm chậm, cô lập mục tiêu,..tạo tiền đề cho Zuka bay nhảy dồn sát thương tốt hơn.",
				"info": [
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "preyta", "id_page": "Preyta"},
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "payna", "id_page": "Payna"},
					{"hero_id": "ybneth", "id_page": "Ybneth"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "mạnh nhờ khả năng bay nhảy dồn hết combo, tuy nhiên hạn chế mặt này thì Zuka trở thành chú gấu lạc lõng giữa vòng tay kẻ địch..",
				"info": [
					{"hero_id": "airi", "id_page": "Airi"},
					{"hero_id": "raz", "id_page": "Raz"},
					{"hero_id": "annette", "id_page": "Annette"},
					{"hero_id": "arum", "id_page": "Arum"},
					{"hero_id": "omen", "id_page": "Omen"},
					{"hero_id": "roxie", "id_page": "Roxie"},
				]
			}
		],
		"hero_story": "\"Một chiến binh thực thụ bảo vệ người yếu đuối và trừng trị cái ác.\"<br><i class=\"clr-orange\">Zuka</i> sinh ra trong một ngôi làng xinh đẹp và trù phú. Người trong làng hoạt động trong ban ngày và giữ yên tĩnh vào ban đêm. Đó là nơi mà con người được che chở khỏi những khó khăn và đau khổ của thế giới. Võ thuật chính là điều mà cư dân của ngôi làng đánh giá cao nhất. Vì vậy, ngay từ thuở niên thiếu, <i class=\"clr-orange\">Zuka</i> đã buộc phải nghiên cứu tất cả các phong cách chiến đấu và môn phái võ thuật do các bậc sư phụ chỉ dạy.<br>Chàng <i class=\"clr-orange\">Zuka</i> trẻ tuổi không hiểu tại sao anh ta cần phải dành nhiều thời gian và công sức để học võ, khi mà <i class=\"clr-orange\">Zuka</i> chưa bao giờ sử dụng? Chắc chắn nó sẽ tốt hơn nếu dành thời gian đó nghiên cứu những lĩnh vực khác bản thân thực sự muốn theo đuổi? \"Hòa bình không chỉ đơn giản là ngồi một chỗ và ao ước, con người phải có khả năng mới bảo vệ được hòa bình!\" Đó là câu trả lời của sư phụ với <i class=\"clr-orange\">Zuka</i>.<br>Những lời giáo huấn đó để lại một ấn tượng sâu sắc trong tâm trí <i class=\"clr-orange\">Zuka</i>. Khi Lực Lượng Sa Đọa xuất hiện từ thung lũng quỷ dữ đã lan truyền dịch bệnh và hỗn loạn, ngôi làng yên bình này chìm trong ngọn lửa chiến tranh. Trong một nỗ lực để chạy trốn, <i class=\"clr-orange\">Zuka</i> trẻ tuổi bắt tay vào một cuộc hành trình dài với gia đình của mình, vượt qua ngọn núi nguy hiểm để đến Khu Rừng Chạng Vạng huyền thoại.<br><i class=\"clr-orange\">Zuka</i> đã được nghe kể về Khu Rừng Chạng Vạng qua những câu chuyện của người già trong làng. Đây là nhà của Nữ hoàng Tel'Annas, nhưng cũng là nơi trú ngụ của vô số sinh vật lạ kì. Họ là đội quân dưới quyền nàng, lực lượng bảo vệ đất đai khỏi ác quỷ.<br>Trong suốt cuộc hành trình, <i class=\"clr-orange\">Zuka</i> đã chứng kiến nhiều tội ác của Lực Lượng Sa Đọa. Võ thuật mà ông đã luyện tập bao năm qua cuối cùng cũng đến lúc sử dụng. Với bộ giáp biểu tượng và tuyệt kĩ xài quyền trượng, ông đã chiến đấu chống lại kẻ ác thuộc Lực Lượng Sa Đọa và ra tay cứu người vô tội trong tay bọn chúng.<br>Những câu chuyện về người tướng <i class=\"clr-orange\">Zuka</i> được lan truyền khắp nơi. Từ Cung Điện Ánh Sáng đến Lâu Đài Khởi Nguyên, vốn nghi ngờ loài Thú từ lâu nay đã phải công khai tán dương chủ nghĩa tướng của <i class=\"clr-orange\">Zuka</i>. Ngay cả Nữ hoàng Tel'Annas cũng đã chuẩn bị một lễ đón xa hoa cho chiến binh danh dự của Khu Rừng. Sau đó, theo lời",
		"hero_skin": [
			{
				"name": "Đại Sư Gấu Mèo",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Zuka01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Zuka01",
			},
			{
				"name": "Đại Phú Ông",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Zuka02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "Zuka02",
			},
			{
				"name": "Giáo Sư Sừng Sỏ (Bậc S)",
				"gold": "",
				"voucher": "349",
				"event": "",
				"wall": "Zuka03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "Zuka03",
			},
			{
				"name": "Phát Tài (Tân Xuân)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Zuka04",
				"disable": "yes",
				"img": "thumb4.jpg",
				"video": "Zuka04",
			},
			{
				"name": "Gấu Nhồi Bông (Bậc S)",
				"gold": "",
				"voucher": "379",
				"event": "",
				"wall": "Zuka05",
				"disable": "yes",
				"img": "thumb5.jpg",
				"video": "Zuka05",
			},
		]
	},
	"ignis": {
		"hero_id": "Ignis",
		"hero_name": "Ignis",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Pháp sư",
			"special": "Cấu rỉa",
			"lane": "Đường giữa",
		},
		"main_skill": [
			{
				"name": "Hỏa hồn",
				"info": "Nội tại: Hoả cầu trúng đích khiến các nạn nhân phải gánh chịu hiệu ứng Hỏa hồn, hiệu ứng kéo dài 3 giây. Chiêu thức tiếp theo của Ignis nếu kích phát Hỏa hồn sẽ được cường hóa và hồi cho Ignis 100 (+5 mỗi cấp) (+0.15 công phép) máu.",
			},
			{
				"name": "Hỏa cầu",
				"info": "Ignis tung cầu lửa vào mục tiêu đầu tiên, thứ sẽ phát nổ theo hình nón lên những kẻ địch phía sau, gây 300/340/380/420/460/500（+0.4 Công phép) sát thương phép, đồng thời tăng 40% tốc chạy trong 1 giây. Nếu mục tiêu trúng chiêu đang dính phải hiệu ứng Hỏa hồn, Ignis sẽ nhận một lá chắn giúp chặn 300/400/500/600/700/800 (+0.65 Công phép) sát thương trong 2 giây."
			},
			{
				"name": "Hỏa hoạn",
				"info": "Ignis triệu hồi một cơn mưa lửa trong 3 giây tại điểm chỉ định, gây 135/170/205/240/275/310 sát thương phép mỗi giây, và làm chậm 30% tốc chạy của nạn nhân trong 2 giây. Nếu mục tiêu đang bị dính hỏa hồn, sẽ bị choáng trong 0.75 giây.",
			},
			{
				"name": "Hỏa trận",
				"info": "ST Gốc: 700/900/1100<br>H.Chiêu: 24/20/16<br>ST thêm: 800/1000/1200<br>Ignis vẽ ra một pháp trận rực cháy, thoáng chốc sau đó những kẻ địch trong vùng ảnh hưởng sẽ phải chịu 700 STP. Nếu mục tiêu trúng chiêu đang dính phải hiệu ứng Hỏa hồn, nạn nhân sẽ phải chịu thêm 800 （+1.0 công phép) STC.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,2,4,2,0",
			}
		],
		"skill_note": "*Tận dụng các bụi cỏ để dùng combo hiệu quả và tạo hiệu ứng bất ngờ cho đối thủ.",
		"skill_special": "TocBien,TocHanh",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim23",
					"info": "Công phép +1.4 <br>Hút máu phép +0.8%<br>Giáp phép +1.6",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim36",
					"info": "Công phép +2.4<br>Hút máu phép +1%",
				},
				{
					"name": "NgocXanh33",
					"info": "Công phép +2.4<br>Giảm hồi chiêu +0.7%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường giữa",
				"info": "PhuongHoangLe,GiayPhuThuy,TruongBang,VuongMiengHecate,TruongBungNo,QuyenTruongRhea",
			},
			{
				"name": "Đường giữa",
				"info": "QuyenTruongRhea,GiayHoVe,MatNaBerith,VuongMiengHecate,KhienThatTruyen,SachThanh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "NgocDaiPhapSu,GiayHermes,TruongBang,VuongMiengHecate,MatNaBerith,QuyenTruongRhea",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp khi chơi cùng",
				"info": [
					{"hero_id": "skud", "id_page": "Skud"},
					{"hero_id": "murad", "id_page": "Murad"},
					{"hero_id": "natalya", "id_page": "Natalya"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "raz", "id_page": "Raz"},
					{"hero_id": "batman", "id_page": "Batman"},
					{"hero_id": "trieu_van", "id_page": "TrieuVan"},
					{"hero_id": "alice", "id_page": "Alice"},
				]
			}
		],
		"hero_story": "“Ngọn Lửa Thiêng sẽ dẫn lối chúng ta đến vương quốc của chân lý”<br>Học thuyết của Cung Điện Ánh Sáng chỉ ra rằng Ngọn Lửa Thiêng chính là biểu tượng của ánh sáng và chân lý. Với vai trò bảo vệ Ngọn Lửa Thiêng, <i class=\"clr-orange\">Ignis</i> từ lâu đã được biết đến là người có kiến thức phong phú và đức tin không thể lay chuyển, dẫn dắt các tín hữu đi theo con đường ánh sáng. Vì lý do này mà ông được biết đến với cái tên \"Người dẫn lối\". Tuy nhiên, trước khi trở thành một phần của Cung Điện Ánh Sáng, <i class=\"clr-orange\">Ignis</i> đã từng là một học giả kiêm linh mục tại Ngôi Đền Trầm Tư.<br>Bị ám ảnh bởi việc tìm ra cội nguồn chân lý, <i class=\"clr-orange\">Ignis</i> đã dành phần lớn thời gian tại Ngôi Đền Trầm Tư để nghiên cứu. Ông đã tham khảo vô số văn tự cổ xưa, một trong số đó đã dẫn lối <i class=\"clr-orange\">Ignis</i> khám phá ra những phép thuật màu nhiệm của Ngọn Lửa Thiêng vốn bị lãng quên từ lâu. Đáng tiếc là Ngọn Lửa Thiêng đã lụi tàn cách đây một thế kỷ, khiến cho khám phá của ông trở thành vô giá trị. Mặc dù các linh mục khác trong Ngôi đền đều thấy tiếc nuối, <i class=\"clr-orange\">Ignis</i> lại vui mừng. Nghiên cứu về Ngọn Lửa Thiêng đã mang ông tiến gần hơn đến vương quốc của chân lý - ước mơ của <i class=\"clr-orange\">Ignis</i> trong thời gian dài.<br>Mặc dù không tìm ra nguồn gốc nhưng khám phá của <i class=\"clr-orange\">Ignis</i> đã thu hút sự chú ý của phe Bóng Tối. Không ai lường trước được rằng phát hiện tiếp theo của <i class=\"clr-orange\">Ignis</i> có khả năng phá vỡ sự cân bằng giữa ánh sáng và bóng tối. Dưới sự chỉ huy của Chúa Tể Bóng Tối, đội quân quỷ dữ tấn công và dùng lửa địa ngục thiêu đốt Ngôi Đền Trầm Tư. Các học giả khác hoảng loạn chạy trốn, nhưng <i class=\"clr-orange\">Ignis</i> kiên quyết không chịu rời đi. Để bảo vệ các văn tự cổ quý giá, ông sẵn sàng chịu đựng những vết bỏng nặng nề từ cơn thịnh nộ của bầy quỷ.<br>\"Nếu đây là số phận, hãy để xác tôi được chôn vùi trong vương quốc của chân lý cùng với kiến thức vô giá!\" Lời cầu nguyện chân thành của <i class=\"clr-orange\">Ignis</i> đã đánh thức sức mạnh của Ngọn Lửa Thiêng, khiến màu đỏ của lửa địa ngục biến thành màu lửa trắng thần thánh. Đó chính là Ngọn Lửa Thiêng mà <i class=\"clr-orange\">Ignis</i> đã mong muốn nhìn thấy sau nhiều năm nghiên cứu, dù đã lụi tàn từ lâu nhưng giờ nó đã tái sinh.<br>Vận dụng thần chú của Ngọn Lửa Thiêng, một bức tường lửa đã được <i class=\"clr-orange\">Ignis</i> dựng lên. \"Những kẻ xâm lăng sẽ bị tiêu diệt. Ngọn Lửa Thiêng sẽ chôn vùi các ngươi thành tro!\" Đứng trước nguy cơ thất bại, những người bảo vệ Ngôi Đền đã tập hợp dưới sự lãnh đạo của <i class=\"clr-orange\">Ignis</i>, cùng vùng lên chống trả và giành chiến thắng. Sau trận chiến, <i class=\"clr-orange\">Ignis</i> quay trở lại Ngôi Đền Trầm Tư và tiếp tục cuộc hành trình của mình trên con đường dẫn tới chân lý.<br>\"Trước chân lý, kiến thức của ta chỉ là một giọt nước trong đại dương.\"",
		"hero_skin": [
			{
				"name": "Sứ Giả Lửa Thiêng",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Ignis01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Hỏa Thuật Sư",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Ignis02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
		]
	},
	"murad": {
		"hero_id": "Murad",
		"hero_name": "Murad",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Sát thủ / Đấu sĩ",
			"special": "Tiền đạo / Trung phong",
			"lane": "Đi rừng",
		},
		"main_skill": [
			{
				"name": "Ảnh hồn",
				"info": "Nội tại: đòn đánh thứ 4 liên tục trong vòng 3s giúp Murad tăng 5% công vật lý (không hữu hiệu với Trụ), đồng thời tạm phá phong ấn của Ảo ảnh trảm.",
			},
			{
				"name": "Tàn ảnh đao",
				"info": "ST Gốc: 120/144/168/192/216/240<br>H.Chiêu: 12/10.6/9.2/7.8/6.4/5<br>Murad lướt đi gây 120 (+169) STVL và làm choáng những kẻ địch trúng chiêu, chiếu thức có thể tung ra 3 lần, đặc biệt ở lần thứ 3 Murad sẽ quay trở về vị trí ban đầu của bản thân."
			},
			{
				"name": "Vô ảnh cực",
				"info": "ST Gốc: 110/142/174/206/238/270<br>H.Chiêu: 12/11.6/11.2/10.8/10.4/10<br>Giáp giảm: 100/175/250/325/400/475<br>Murad tạo ra một vùng không gian gây 110 (+91) STVL lên tất cả nạn nhân bên trong phạm vi ảnh hưởng, những kẻ địch dại dột chạm phải biên giới vùng không gian này sẽ phải chịu 180 (+152) STVL, và bị làm chậm 90% tốc chạy trong 2s, kèm chịu giảm 100 giáp trong 3s, ngay thời điểm kích hoạt chiêu thức Murad sẽ trở nên không bị tấn công hoặc chọn làm mục tiêu.",
			},
			{
				"name": "Ảo ảnh trảm",
				"info": "ST Gốc: 150/215/280<br>Murad giải phóng sức mạnh của bản thân, tạo ra vô số ảo ảnh tấn công liên tục 5 đòn đánh lên mọi kẻ địch trong vùng ảnh hưởng, gây 150 (+114) STVL mỗi đợt, kèm hiệu ứng hút máu (dựa trên thông số tướng), suốt thời gian tung chiêu, Murad không thể bị tấn công hoặc chọn làm mục tiêu, ngoài ra Ảo ảnh trảm chỉ có thể được tung sau khi phong ấn được phá giải, và lập tức bị phong ấn trở lại sau khi vừa tung chiêu.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,9,10,13",
			"line2": "2,6,7,11,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,4,2,0",
			}
		],
		"skill_note": "*Chọn vị trí an toàn để bật chiêu cuối, sao đó có thể rút khỏi giao tranh một cách an toàn.",
		"skill_special": "TrungTri,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo22",
					"info": "Tốc đánh +0.6%<br>Tỷ lệ chí mạng +0.3%<br>Sát thương chí mạng +1.1%",
				},
				{
					"name": "NgocTim27",
					"info": "Tốc đánh +0.4%<br>Tỷ lệ chí mạng +0.3%<br>Tốc chạy +0.5%",
				},
				{
					"name": "NgocXanh22",
					"info": "Máu tối đa +15.7<br>Hồi máu/5s +3.1<br>Giảm hồi chiêu +0.3%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo37",
					"info": "Tốc đánh +1%<br>Máu tối đa +33.7<br>Giáp +2.3",
				},
				{
					"name": "NgocTim35",
					"info": "Hút máu +1.6%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đi rừng 1",
				"info": "KiemTruyHon,GiayHoVe,ThuongXuyenPha,PhucHopKiem,NanhFenrir,KiemMuramasa",
			},
			{
				"name": "Đường Caesar",
				"info": "ThuongLonginus,GiayHoVe,ThuongXuyenPha,AoChoangBangGia,PhucHopKiem,LiemDoatMenh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "KiemTruyHon,GiayDuMuc,ThuongXuyenPha,PhucHopKiem,NanhFenrir,GiapHoMenh",
			}
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp khi chơi cùng",
				"info": [
					{"hero_id": "joker", "id_page": "Joker"},
					{"hero_id": "cresht", "id_page": "Cresht"},
					{"hero_id": "ilumia", "id_page": "Ilumia"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "airi", "id_page": "Airi"},
					{"hero_id": "aleister", "id_page": "Aleister"},
					{"hero_id": "taara", "id_page": "Taara"},
					{"hero_id": "thane", "id_page": "Thane"},
					{"hero_id": "alice", "id_page": "Alice"},
				]
			}
		],
		"hero_story": "Không gian - thời gian là cấu trúc của thực tại và cũng đồng thời là khởi nguồn sức mạnh tối cao. Tuy nhiên chưa một thần chú ma thuật nào đủ khả năng khai thác sức mạnh của không gian - thời gian. Chỉ có đá Andura mới có thể chứa được sức mạnh phi thường của không gian - thời gian, cho phép người dùng khai thác nó.<br>Với mục tiêu sở hữu sức mạnh này, tổ tiên của <i class=\"clr-orange\">Murad</i> đã tiến vào sa mạc để tìm kiếm các mảnh vỡ của Andura. Ở đó, họ phải đối mặt với Azzen'ka hung ác và nham hiểm, nhưng bằng sự khôn ngoan, họ đã thu thập được các mảnh vỡ. Họ chế tạo ra một thứ vũ khí vô cùng đáng sợ, có thể thao túng không gian - thời gian và xây dựng một đế chế mới trên sa mạc bằng sức mạnh đó.<br>Khi <i class=\"clr-orange\">Murad</i> đến tuổi trưởng thành, anh chàng đã thừa kế vũ khí từ cha mình và chính thức trở thành người lãnh đạo đế chế. Chàng đã dẫn dắt quân đội Hoàng gia tham gia viễn chinh, diệt trừ các sinh vật nguy hiểm và mở rộng đế chế. Điều này đe dọa nghiêm trọng tới quyền lực của Azzen'ka, gã rất tức giận sau khi khám phá ra sự thật đằng sau thứ vũ khí của <i class=\"clr-orange\">Murad</i>. Nhưng <i class=\"clr-orange\">Murad</i> chẳng để tâm, bởi vì miễn là có vũ khí bên cạnh, Azzen'ka không thể làm tổn thương chàng.<br>Azzen'Ka buộc phải thương lượng, đầu hàng có điều kiện với hoàng tử. <i class=\"clr-orange\">Murad</i> vui mừng chấp nhận và chính vì vậy, chàng đã bỏ qua cơ hội vàng để giải thoát đế chế khỏi mối đe dọa tiềm tàng mãi mãi. Không có quyền lực kéo dài mãi mãi và Azzen'Ka hiểu vụ thương lượng này chỉ lợi cho gã. Từ trong bóng tối, gã ngầm tạo ra vô số biến cố, buộc <i class=\"clr-orange\">Murad</i> sử dụng vũ khí của mình để bảo vệ đế chế non trẻ.<br>Việc lạm dụng quyền năng đã khiến đá Andura suy yếu rõ rệt, dần dần vũ khí của <i class=\"clr-orange\">Murad</i> đã xuất hiện nhiều vết nứt, khiến sức mạnh của thời gian - không gian rò rỉ. Điều này đã làm giảm khả năng chiến đấu của <i class=\"clr-orange\">Murad</i> và Azzen'Ka đã nắm lấy cơ hội để triệu hồi một cơn bão cát hùng mạnh nhấn chìm hoàn toàn đế chế thịnh vượng một thời. Nhờ lời cầu xin của cha chàng, vũ khí phát huy sức mạnh cứu <i class=\"clr-orange\">Murad</i> thoát khỏi thảm họa, tuy nhiên nó chỉ có thể bảo vệ một mình chàng.<br>Nhưng chàng trai ấy không bỏ cuộc. <i class=\"clr-orange\">Murad</i> che khuôn mặt điển trai của mình và trở thành một lãng khách sa mạc đơn độc, tìm cách phục hồi sức mạnh cho vũ khí của mình cũng như chờ ngày đối đầu với Azzen'Ka. <i class=\"clr-orange\">Murad</i> tin chắc rằng miễn là có vũ khí bên cạnh, ngày nào đó chàng sẽ giết Azzen'Ka và khôi phục danh dự, vinh quang cho đế chế.",
		"hero_skin": [
			{
				"name": "Lãng Khách Thời Không",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Murad01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "Murad01",
			},
			{
				"name": "Thợ Săn Tiền Thưởng",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Murad02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "Murad02",
			},
			{
				"name": "M-TP Thần Tượng Học Đường (Bậc S)",
				"gold": "",
				"voucher": "499",
				"event": "",
				"wall": "Murad03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "Murad03",
			},
			{
				"name": "Thiên Tài Sân Cỏ (Football Fever)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Murad04",
				"disable": "yes",
				"img": "thumb4.jpg",
				"video": "Murad04",
			},
			{
				"name": "Siêu Việt (Bậc SS)",
				"gold": "",
				"voucher": "",
				"event": "Từ Sổ Sứ Mệnh I",
				"wall": "Murad05",
				"disable": "yes",
				"img": "thumb5.jpg",
				"video": "",
			},
			{
				"name": "Đồ Thần Đao (Bậc S)",
				"gold": "",
				"voucher": "429",
				"event": "",
				"wall": "Murad06",
				"disable": "yes",
				"img": "thumb6.jpg",
				"video": "",
			},
		]
	},
	"zill": {
		"hero_id": "Zill",
		"hero_name": "Zill",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Pháp sư / Sát thủ",
			"special": "Tiền đạo / Trung phong",
			"lane": "Đi rừng",
		},
		"main_skill": [
			{
				"name": "Bão tố",
				"info": "Nội tại: các chiêu thức trúng đích của Zill khiến mục tiêu phải chịu thêm dấu ấn giông tố, khi đạt đủ 3 cộng dồn, dấu ấn tiến hóa thành bão tố kéo dài 5s đồng thời giảm 80% tốc chạy của mục tiêu trong 0.25s, dấu ấn tồn tại 5s, các đòn đánh thường của Zill gây thêm 40 STP, đặc biệt nếu mục tiêu đang chịu ấn bão tố sẽ giúp Zill lập tức hoàn tất hồi chiêu của Phong độn, và gây thêm 150 (+0) STP.",
			},
			{
				"name": "Phong đao",
				"info": "ST Gốc: 200/240/280/320/360/400<br>ST phản: 300/360/420/480/540/600<br>H.Chiêu: 8/7.5/7/6.5/6/5.5<br>Zill ném cặp song đao gây 200 (+0) STP lên tất cả kẻ địch trúng phải trên đường bay đi, và làm chậm 50% tốc chạy của chúng trong 1.5s, Song đao khi quay ngược về gây 300 (+0) STP lên những nạn nhân trúng chiêu."
			},
			{
				"name": "Phong độn",
				"info": "ST Gốc: 260/300/340/380/420/460<br>H.Chiêu: 12.5/12/11.5/11/10.5/10<br>Zill dịch chuyển đến điểm đã chọn, gây 260 (+0) STP lên tất cả kẻ địch quanh vùng ảnh hưởng.",
			},
			{
				"name": "Phong ba",
				"info": "ST Gốc: 300/550/800<br>H.Chiêu: 50/45/40<br>Zill hóa thân thành một luồng phong ba bão tố trong 1.5s, tấn công liên tục 5 lần lên những kẻ địch lân cận, gây 300 (+0) STP mỗi đợt, kẻ địch trúng nhiều đòn sẽ chỉ phải chịu 40% sát thương từ đòn thứ 2 trở đi, suốt khoảng thời gian này Zill không thể bị công kích hoặc chọn làm mục tiêu.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,0,4,0",
			}
		],
		"skill_note": "*Chú ý các đòn đánh thường nhằm hồi lại kỹ năng Phong độn.",
		"skill_special": "TrungTri,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo22",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim22",
					"info": "Công phép +1.4<br>Hút máu phép +0.8%<br>Giáp phép +1.6",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim36",
					"info": "Công phép +2.4<br>Hút máu phép +1%",
				},
				{
					"name": "NgocXanh310",
					"info": "Tốc đánh +0.6%<br>Xuyên giáp phép +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đi rừng",
				"info": "GuomLoki,GiayKienCuong,GuomTanThe,VuongMiengHecate,TruongBang,QuyenTruongRhea",
			},
			{
				"name": "Đi rừng",
				"info": "GuomLoki,GiayHoVe,VuongMiengHecate,TruongBungNo,AoChoangBangGia,SachThanh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "GuomLoki,GiayPhuThuy,GuomTanThe,VuongMiengHecate,TruongBungNo,SachThanh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp khi chơi cùng",
				"info": [
					{"hero_id": "zuka", "id_page": "Zuka"},
					{"hero_id": "ilumia", "id_page": "Ilumia"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "superman", "id_page": "Superman"},
					{"hero_id": "taara", "id_page": "Taara"},
					{"hero_id": "ormarr", "id_page": "Ormarr"},
					{"hero_id": "alice", "id_page": "Alice"},
				]
			}
		],
		"hero_story": "\"Tiếng gầm của cơn bão chính là điềm báo tử của các ngươi!\"<br>Lịch sử kể rằng nhiều tướng đã thoát khỏi sự kiểm soát của lực hấp dẫn và bay lên không trung. Tuy nhiên, không ai trong số họ đã có thể thoải mái bay lượn tự do như những chú chim bởi sự xuất hiện của <i class=\"clr-orange\">Zill</i>, mối nguy hiểm tiềm ẩn trên bầu trời. Là hiện thân của sức mạnh tự nhiên, <i class=\"clr-orange\">Zill</i> tàn phá cơ chế phòng thủ của đối phương mạnh mẽ như bão và cũng nhẹ nhàng, đau đớn tới thấu xương như một ngọn gió.<br>Trong cuộc chiến vĩ đại, <i class=\"clr-orange\">Zill</i> đã ra tay diệt trừ hàng tá quỷ dữ. Những chiến tích xuất sắc và vang dội đã giúp <i class=\"clr-orange\">Zill</i> giành lấy đỉnh cao danh vọng và ngưỡng mộ. Tuy nhiên, không ai hiểu tại sao ông lại từ chối danh hiệu Người bảo vệ Khu Rừng Hắc Ám. Đơn giản, <i class=\"clr-orange\">Zill</i> nói rằng vinh quang là không phù hợp với bản chất tự do của mình.<br>\"Khi bạn cần tôi, lưỡi dao của tôi sẽ luôn sẵn sàng phục vụ. Nhưng ta là gió, và gió thì không gì có thể trói buộc\". Đó là lời giải thích của ông với Nữ hoàng Tel'Annas. Sự trung thành và bản ngã của ông luôn giành được sự tôn trọng và tin tưởng của nữ hoàng. Trước khi tiến vào ngủ ngàn năm, nàng đã trao cho <i class=\"clr-orange\">Zill</i> quyền thực hiện ý chí tự do. Ông không bị yêu cầu thực hiện bất kỳ nhiệm vụ cụ thể nào, nhưng được phép tiếp cận với các tài nguyên của Khu Rừng Chạng Vạng<br>Sau đó, <i class=\"clr-orange\">Zill</i> biến mất khỏi sự chú ý của công chúng. Ngoại trừ tinh linh Krixi thỉnh thoảng cảm nhận được sự hiện diện của ông, không ai khác tìm thấy được dấu vết của <i class=\"clr-orange\">Zill</i>. Trong một thời gian, mọi người thậm chí còn quên tất cả về người tướng cai trị bầu trời tên tuổi thuở nào. Tuy nhiên, ngày thức dậy của nữ hoàng Tel’Annas, <i class=\"clr-orange\">Zill</i> là người đầu tiên trở lại bên cạnh cô. Trong một nghìn năm dài, <i class=\"clr-orange\">Zill</i> đã bỏ tự do mà ông hằng mong muốn để canh giữ cho giấc ngủ của Tel'Annas. Đây là cách để đáp trả lại sự tin tưởng vô điều kiện mà nữ hoàng đã dành cho ông.",
		"hero_skin": [
			{
				"name": "Ma Phong Ba",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Zill01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Lốc Địa Ngục",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Zill02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Dung Nham (Bậc S)",
				"gold": "",
				"voucher": "379",
				"event": "",
				"wall": "Zill03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "",
			},
		]
	},
	"arduin": {
		"hero_id": "Arduin",
		"hero_name": "Arduin",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Đấu sĩ / Đỡ đòn",
			"special": "Tiền đạo / Khống chế",
			"lane": "Đường Caesar / Đường rồng",
		},
		"main_skill": [
			{
				"name": "Hồn huyết",
				"info": "Nội tại: khi máu của Arduin còn thấp hơn 50%, hắn sẽ tiến vào trạng thái Hồn huyết trong 8s, suốt thời gian này Arduin được hồi lại 4% máu tối đa mỗi khi đòn đánh thường hoặc chiêu thức của hắn gây sát thương lên kẻ địch, chỉ kích hoạt trong chiến đấu, nội tại này có thời gian hồi 45 giây.",
			},
			{
				"name": "Hồn trảm",
				"info": "ST Gốc: 250/300/350/400/450/500<br>Arduin vung rìu chém ra một vòng cung năng lượng gây 250 (+159) STVL, và làm chậm 40% tốc chạy của nạn nhân trúng chiêu trong 2s, nếu có tướng địch trúng chiêu, Arduin có thể tiếp tục nện rìu xuống đất gây 250 (+159) STVL và hất tung những kẻ địch trong vùng ảnh hưởng trong 1s."
			},
			{
				"name": "Hồn giáp",
				"info": "ST Gốc: 200/225/250/275/300/325<br>H.Chiêu: 12/11/10/9/8/7<br>ST chuẩn: 100/125/150/175/200/225<br>Arduin tạo ra một lá chắn trị giá 10% máu tối đa trong 5s, ngay khi kích hoạt lá chắn gây 200 (+119) STP lên những kẻ địch lân cận, trong vòng 8s sau khi tạo lá chắn, 3 đòn đánh thường kế của Arduin gây thêm 100 STC, đồng thời mỗi đòn trúng đích giúp giảm thời gian hồi của Câu hồn rìu đi 1s.",
			},
			{
				"name": "Câu hồn rìu",
				"info": "ST Gốc: 300/425/550<br>Arduin phóng rìu phía trước gây 300 (+190) STVL diện rộng, và làm choáng kẻ địch trúng chiêu đầu tiên trong 1.5s, sau đó hắn phóng đến vị trí chiếc rìu, gây 300 (+190) STVL lên các kẻ địch lân cận, khi Câu hồn rìu được kích hoạt, các trạng thái khống chế sẽ không thể cản Arduin hoàn tất chiêu.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,10,13",
			"line2": "2,6,9,11,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,4,2,3,0",
			}
		],
		"skill_note": "*Một đỡ đòn bảo mẫu, vì thế nên sử dụng tốt combo để tăng khả năng chống chịu, giúp trụ trong giao tranh lâu hơn.",
		"skill_special": "BocPha,CapCuu",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim25",
					"info": "Máu tối đa +45",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo37",
					"info": "Tốc đánh +1%<br>Máu tối đa +33.7<br>Giáp +2.3",
				},
				{
					"name": "NgocTim310",
					"info": "Máu tối đa +60<br>Hồi máu/5s +4.5",
				},
				{
					"name": "NgocXanh34",
					"info": "Máu tối đa +37.5<br>Giảm hồi chiêu +0.6%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường đơn",
				"info": "ThuongLonginus,GiayHoVe,AoChoangBangGia,GiapThongKho,HuanChuongTroy,GiapHoMenh",
			},
			{
				"name": "Đường đơn",
				"info": "GiayHoVe,AoChoangThanRa,KhienThatTruyen,HuanChuongTroy,GiapThongKho,HerculeThinhNo",
			},
			{
				"name": "Game thủ hay lên",
				"info": "AoChoangThanRa,GiayKienCuong,ThuongLonginus,AoChoangBangGia,HuanChuongTroy,GiapThongKho",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp khi chơi cùng",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "lu_bo", "id_page": "LuBo"},
					{"hero_id": "jinna", "id_page": "Jinna"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "lauriel", "id_page": "Lauriel"},
					{"hero_id": "raz", "id_page": "Raz"},
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "dieu_thuyen", "id_page": "DieuThuyen"},
				]
			}
		],
		"hero_story": "Dưới huấn luyện của Vedä, <i class=\"clr-orange\">Arduin</i> đã trở thành lãnh đạo của loài người.<br>Dũng cảm và kiên trì, <i class=\"clr-orange\">Arduin</i> chính là hình mẫu của một nhà lãnh đạo vĩ đại trong mắt công chúng. Bài diễn văn đầy say mê và thuyết phục của anh đã thu hút vô vàn chiến binh trẻ tuổi tham gia quân đoàn của mình, đấu tranh cho những mục tiêu cao cả.<br><i class=\"clr-orange\">Arduin</i> đã từng coi Thane là đối thủ chính của mình. Cả hai đã hẹn thách đấu vì danh dự, mặc dù đã chiến thắng nhưng phong cách chiến đấu không sợ hãi và tư duy chiến thuật của Thane đã khuất phục <i class=\"clr-orange\">Arduin</i>. Cả hai đã quyết định hợp táãnhây dựng tình bạn và trở thành đồng minh.<br>Bộ đôi này chính là chìa khóa cho chiến thắng vẻ vang của quân đoàn, khiến Lực lượng Sa ngã buộc phải rút lui về Inferi phòng thủ. Trong trận chiến cuối cùng, <i class=\"clr-orange\">Arduin</i> và Thane lần đầu bất đồng quan điểm. <i class=\"clr-orange\">Arduin</i> muốn tiếp tục đem quân đi chiến đấu, với hy vọng xóa sổ các thế lực Bóng tối, trong khi Thane cho rằng hành động như vậy sẽ phá hủy những gì họ đã giành được bấy lâu nay.<br>Không thuyết phục được Thane, <i class=\"clr-orange\">Arduin</i> đã bỏ đi cùng với những chiến binh Vedä và người ủng hộ. Họ tiến vào Inferi để săn lùng những thành viên còn lại của phe Lực lượng Sa đọa. Tuy nhiên, họ đã mắc vào bẫy của Veera quỷ quyệt. Ả hồi sinh ngọn lửa băng giá, quyết tâm thiêu trụi quân đoàn. Hối tiếc về quyết định nóng vội của mình, <i class=\"clr-orange\">Arduin</i> sải bước qua đám lửa, cố gắng tạo ra một cơn bão bằng cách quẳng cây rìu của mình, mở lối đi an toàn cho các chiến binh.<br>Nhờ nỗ lực của <i class=\"clr-orange\">Arduin</i>, một vài chiến binh đã kịp bỏ chạy trong khi người thủ lĩnh cùng những đồng đội khác không may mắn tới vậy. <i class=\"clr-orange\">Arduin</i> tưởng như đã bị biển lửa thiêu trụi, tuy nhiên bộ giáp Vedä đã kịp bảo vệ anh. Anh quăng rìu trong vô vọng, nhằm đẩy lùi đội quân quỷ dữ bủa vây xung quanh<br>Veera bước vào và dùng ngọn lửa băng giá làm tê liệt hoàn toàn cơ thể <i class=\"clr-orange\">Arduin</i>, vô hiệu hóa dấu ấn Vedä và thay thế bằng dấu ấn của ác quỷ. Cơ thể của <i class=\"clr-orange\">Arduin</i> trở thành tro tàn, tinh thần chiến đấu của anh nay đã bị bóng tối chiếm lấy. Ngọn lửa bang giá chi phối hoàn toàn tâm trí và bộ giáp của Adurin, biến anh thành công cụ chiến tranh của Lực lượng Sa đọa.<br>\"Hãy bày tỏ lòng thương tiếc cho <i class=\"clr-orange\">Arduin</i> bởi bạn sẽ không còn cơ hội nhìn thấy một người tướng huyền thoại như thế lần nữa!\"",
		"hero_skin": [
			{
				"name": "Linh Hồn Phẫn Nộ",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Arduin01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Cận Vệ Hoàng Gia (Bậc A)",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Arduin02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
		]
	},
	"joker": {
		"hero_id": "Joker",
		"hero_name": "Joker",
		"main_info": {
			"price_gold": "28,888",
			"price_voucher": "629",
			"price_text": "",
			"position": "Xạ thủ",
			"special": "Cấu rỉa",
			"lane": "Đường rồng",
		},
		"main_skill": [
			{
				"name": "Đùa dai",
				"info": "Nội tại: Sau khi rời khỏi giao tranh, Joker nạp đạn cường hóa khiến đòn đánh thường kế tiếp có tầm công kích vượt trội, gây 200 (+165) STVL, nạn nhân trúng phát đạn đặc biệt này sẽ bị giảm 90% tốc chạy và rơi vào trạng thái suy yếu giảm dần trong 1.5s.",
			},
			{
				"name": "Đùa sốc",
				"info": "ST Gốc: 365/475/585/695/805/915<br>Joker khai hỏa khẩu súng phóng lựu gây 365 (+297) STVL lên mọi kẻ địch trúng chiêu, những nạn nhân trúng sau sẽ chịu sát thương giảm dần từ 10% đến 60%."
			},
			{
				"name": "Bịp bợm",
				"info": "H.Chiêu: 15/14/13/12/11/10<br>Tăng tốc chạy: 30%/36%/42%/48%/54%/60%<br>Joker loại bỏ mọi trạng thái làm chậm trên bản thân, đồng thời tự tăng 30% tốc chạy kèm hiệu ứng miễn nhiễm STVL trong 2s.",
			},
			{
				"name": "Bơm cười",
				"info": "H.Chiêu: 20/17/14<br>Joker phóng chớp nhoáng đến làm choáng mục tiêu, rồi trước khi bật ngược trở về vị trí cũ hắn nhanh tay cài vào nạn nhân một quả bom khí gas cười, thứ sẽ phát nổ thoáng chốc sau đó gây 530/715/900 (+2.4 công vật lý) sát thương vật lý, đồng thời làm chậm 90% tốc chạy giảm dần trong 1.5 giây. Suốt thời gian thực hiện chuỗi động tác này, Joker không thể bị khống chế.<br>Sau khi dùng chiêu được tăng 50 / 75 / 100% tốc độ đánh trong 4 giây.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "4,2,3,0",
			}
		],
		"skill_note": "*Tận dụng lợi thế về tốc độ chạy nên quyết định đeo bám hoặc từ bỏ mục tiêu chính xác nhất có thể.",
		"skill_special": "TocBien,TocHanh",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo26",
					"info": "Công vật lý +1.5<br>Tốc đánh +0.4%",
				},
				{
					"name": "NgocTim21",
					"info": "Tốc đánh +0.4%<br>Hút máu +0.8%",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo36",
					"info": "Công vật lý +2<br>Xuyên giáp +3.6",
				},
				{
					"name": "NgocTim31",
					"info": "Công vật lý +1.6<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường trên hoặc dưới",
				"info": "ThuongXuyenPha,GiayKienCuong,PhucHopKiem,ThanhKiem,KiemMuramasa,LiemDoatMenh",
			},
			{
				"name": "Đường trên hoặc dưới",
				"info": "GiayHermes,ThuongXuyenPha,NanhFenrir,PhucHopKiem,KiemMuramasa,LiemDoatMenh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "ThuongXuyenPha,GiayHoVe,NanhFenrir,PhucHopKiem,LiemDoatMenh,KiemMuramasa",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp khi chơi cùng",
				"info": [
					{"hero_id": "skud", "id_page": "Skud"},
					{"hero_id": "raz", "id_page": "Raz"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "raz", "id_page": "Raz"},
					{"hero_id": "batman", "id_page": "Batman"},
				]
			}
		],
		"hero_story": "Nguồn gốc của <i class=\"clr-orange\">Joker</i> đến giờ vẫn là một bí ẩn. Những thông tin mà người ta biết về hắn là <i class=\"clr-orange\">Joker</i> đã trở thành tội phạm từ khi còn trẻ, một tai nạn đáng sợ đã biến hắn trở thành Hoàng Tử Hề Tội Lỗi. Niềm tin của <i class=\"clr-orange\">Joker</i> rằng cuộc sống có thể thay đổi bất cứ lúc nào theo cơn điên loạn, điều thúc đẩy hắn trở thành tên khủng bố của thành phố Gothham. Hắn tin rằng cuộc sống chỉ đơn thuần là một trò đùa của vũ trụ, bằng mọi giá <i class=\"clr-orange\">Joker</i> phô diễn độ điên của bản thân để chứng tỏ với cả thế giới rằng trong một khoảnh khắc, đời người sẽ bị đảo ngược hoàn toàn.<br><i class=\"clr-orange\">Joker</i> đã đe dọa, bắt cóc, đánh đập, tra tấn và thủ tiêu vô số nạn nhân trên khắp thế giới, nhưng địa điểm hoạt động chủ yếu của hắn là tại thành phố Gotham. Hoặc, đã từng ở Gotham. Trong thành phố này, <i class=\"clr-orange\">Joker</i> bị ám ảnh muốn hoàn thành trò đùa đỉnh cao nhất đời hắn: hủy diệt lý tưởng của Batman. Tuy nhiên, dù cố gắng hết sức, bất chấp chịu đựng đau đớn cũng như vẽ ra kế hoạch công phu, Batman không hề bị khuất phục trước trò đùa của <i class=\"clr-orange\">Joker</i>. Ngay cả khi <i class=\"clr-orange\">Joker</i> đe dọa tới những người đồng đội của Batman, lý tưởng của chàng Hiệp Sỹ Bóng Đêm cũng không thể phá vỡ. Thay vào đó, Batman lật kèo bằng việc sử dụng một phiên bản nâng cấp của loại thuốc hóa học gây ảo giác sợ hãi của Scarecrow lên người <i class=\"clr-orange\">Joker</i>.<br>Từ trước tới nay, <i class=\"clr-orange\">Joker</i> chưa bao giờ nếm trải nỗi sợ hãi. Thứ thuốc hóa học gây ảo giác sợ hãi của Batman tràn vào các tĩnh mạch, khiến lần đầu tiên trong đời <i class=\"clr-orange\">Joker</i> biết sợ. Với kinh nghiệm đã phải đối mặt với nhiều chấn thương tâm lí, <i class=\"clr-orange\">Joker</i> đã nhanh chóng lấy lại sự tỉnh táo: đây không phải là phiên xét xử tội ác, hắn đang bị dẫn độ tới nhà thương điên Arkham. Ở đây, <i class=\"clr-orange\">Joker</i> chỉ đơn thuần là một diễn viên hài không tiếng cười. Điều gì thực sự buồn cười khi hàng ngày hắn chỉ đối mặt với lũ khủng bố thực sự? <i class=\"clr-orange\">Joker</i> bắt đầu tuyệt vọng khi nghĩ rằng hắn không bao giờ có thể khiến cả thế giới cười được nữa.<br>Điều đó đã thay đổi khi một gã tù nhân mới được đưa vào Arkham. Gã này cũng điên khùng, nhưng giữa những cơn hóa rồ của mình, gã lại liên tục lẩm nhẩm những công thức toán học rõ ràng và thần chú ma mị. Khi ngủ, gã mê sảng nhắc tới: \"Athanor ... Athanor\". Cơn điên loạn của gã tù nhân mới đã thu hút sự chú ý của <i class=\"clr-orange\">Joker</i>. <i class=\"clr-orange\">Joker</i> nhanh chóng kết thân với gã tù nhân kia và truy tìm được nguồn gốc xuất thân của gã. Người bạn sống cùng trại thương điên Arkham này vốn là một nhà khoa học, nghiên cứu các sóng bức xạ và hiện tượng siêu nhiên trên khắp thế giới. Gã đã tìm thấy câu trả lời cho nghiên cứu của mình: một cánh cổng dẫn đến thế giới khác.<br>Gã say sưa kể về Athanor – một thế giới đáng tôn kính. Thế giới ấy là có thật, thay đổi hoàn toàn những trải nghiệm gã từng có. <i class=\"clr-orange\">Joker</i> không phải mẫu người tìm kiếm sự giác ngộ tâm linh hay phương thuốc chữa bệnh điên rồ của hắn. Hắn khao khát nhìn thấy vẻ đẹp và trật tự của thế giới, để hắn có thể hoàn thành tâm nguyện bấy lâu: một trò đùa lớn nhất đời hắn. Sau khi tâm trí hắn phục hồi hoàn toàn, <i class=\"clr-orange\">Joker</i> dễ dàng trốn khỏi Arkham như bao lần. Tuy nhiên lần này, thay vì tàn phá Gotham, mục tiêu mới của hắn là Athanor.<br>Sau nhiều tháng tìm kiếm, <i class=\"clr-orange\">Joker</i> cuối cùng đã tìm thấy cánh cổng dẫn đến Athanor. Và bây giờ, ngay cả những vị thần đang cai trị thế giới đó sẽ phải đấu trí với Gã Hề Khủng Bố này.",
		"hero_skin": [
			{
				"name": "Gã Hề Khủng Bố",
				"gold": "28,888",
				"voucher": "629",
				"event": "",
				"wall": "Joker01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Trò Đùa Tử Vong",
				"gold": "",
				"voucher": "249",
				"event": "",
				"wall": "Joker02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Vua Hề (Bậc S)",
				"gold": "",
				"voucher": "379",
				"event": "",
				"wall": "Joker03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "",
			},
		]
	},
	"ryoma": {
		"hero_id": "Ryoma",
		"hero_name": "Ryoma",
		"main_info": {
			"price_gold": "",
			"price_voucher": "599",
			"price_text": "",
			"position": "Đấu sĩ / Sát thủ",
			"special": "Cấu rỉa / Trung phong",
			"lane": "Đường Caesar / Đi rừng",
		},
		"main_skill": [
			{
				"name": "Kiếm quyết",
				"info": "Nội tại: Sau mỗi 5s, đòn đánh kế tiếp của Ryoma sẽ phóng ra kiếm khí gây 198 STVL, đồng thời giảm 50% tốc chạy của các mục tiêu trúng chiêu trong 2s, nạn nhân trung rìa chiêu sẽ phải chịu thêm 50% STVL.",
			},
			{
				"name": "Thần hành bách biến",
				"info": "ST Gốc: 250/300/350/400/450/500<br>Ryoma nhảy lùi lại để tung một đường kiếm cực mạnh, gây 250 (+206) STVL lên kẻ địch lân cận, nếu chiêu thức sát thương tướng địch sẽ khiến thời gian chiêu của Thành hành bách biến được giảm 3s, hiệu ứng này không cộng dồn."
			},
			{
				"name": "Nhất kích tất sát",
				"info": "H.Chiêu: 10/9.5/9/8.5/8/7.5<br>Ryoma rút kiếm chớp nhoáng gây 350/395/440/485/530/575 (+2.1 Công vật lý) sát thương vật lý lên kẻ địch đầu tiên trúng phải, và 50% lượng sát thương đó lên các mục tiêu sau. Các nạn nhân trúng rìa chiêu sẽ bị choáng 0.75 giây.",
			},
			{
				"name": "Loạn trảm",
				"info": "ST Gốc: 130/180/230<br>H.Chiêu: 12/11/10<br>Hồi máu: 70/100/130<br>Ryoma đâm kiếm liên tục 4 lần, mỗi đợt gây 140 (+115) STVL, mỗi cú đấm trúng tướng địch giúp Ryoma hồi 70 (+57) máu.",
			}
		],
		"skill_up": {
			"line1": "2,6,10,13,14,15",
			"line2": "1,3,5,7,9,11",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,4,2,0",
			},
			{
				"name": "*Hoặc combo khô máu với",
				"info": "4,2,3,0",
			}
		],
		"skill_note": "*Combo 2 một mất một còn, đánh cho tới chết thì thôi.",
		"skill_special": "TocBien,TrungTri",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim28",
					"info": "Máu tối đa +13.5<br>Tốc chạy +0.7%",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo34",
					"info": "Công vật lý +3.2",
				},
				{
					"name": "NgocTim31",
					"info": "Công vật lý +1.6<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường Caesar",
				"info": "ThuongLonginus,GiayHoVe,ThuongXuyenPha,AoChoangBangGia,NanhFenrir,GiapHoMenh",
			},
			{
				"name": "Đi rừng",
				"info": "KiemTruyHon,GiayKienCuong,ThuongXuyenPha,AoChoangBangGia,KiemMuramasa,HuanChuongTroy",
			},
			{
				"name": "Game thủ hay lên",
				"info": "ThuongXuyenPha,GiayKienCuong,AoChoangBangGia,KiemMuramasa,HuanChuongTroy,NanhFenrir",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp khi chơi cùng",
				"info": [
					{"hero_id": "raz", "id_page": "Raz"},
					{"hero_id": "murad", "id_page": "Murad"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "thane", "id_page": "Thane"},
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "zuka", "id_page": "Zuka"},
				]
			}
		],
		"hero_story": "\"Đừng nhìn lại quá khứ. Thay vào đó, hãy tập trung vào tương lai.\"<br>Những lời cuối cùng của cha <i class=\"clr-orange\">Ryoma</i> đã trở thành phương châm sống của anh. Kế thừa truyền thống của một samurai, <i class=\"clr-orange\">Ryoma</i> không chỉ chăm chỉ tập luyện mà còn ra sức nghiên cứu chiến lược quân sự. Trong một trại huấn luyện - nơi sức mạnh được đánh giá cao hơn mọi thứ khác, anh nổi bật hơn tất cả. Những đứa trẻ khác trong trại cũng có xuất thân như <i class=\"clr-orange\">Ryoma</i>, cha của họ bị giết trên chiến trường, họ tiếp tục khoác áo choàng và mang vinh quang về cho gia đìn.<br>Khi còn trẻ, <i class=\"clr-orange\">Ryoma</i> là cậu bé nhút nhát. Với việc đặc biệt yêu thích nghiền ngẫm chiến thuật quân sự, anh dễ dàng trở thành mục tiêu của những kẻ bắt nạt. Nhưng Kondo luôn đứng ra bảo vệ anh. Kondo từng là học trò của cha <i class=\"clr-orange\">Ryoma</i> và việc đó như một hành động trả ơn. Với sự hướng dẫn từ Kondo, <i class=\"clr-orange\">Ryoma</i> luyện tập trở thành samurai như cha mình.<br>Tuy nhiên tình bạn của họ không kéo dài mãi mãi, mệnh lệnh trong quân ngũ đã chia cách hai người. Kondo can đảm được lựa chọn để trở thành người bảo vệ cho thái tử nối ngôi của vương quốc, trong khi đó hoàng tử trẻ hơn lại chọn <i class=\"clr-orange\">Ryoma</i> thông minh. Hai người bạn thân thiết giờ sẽ phải đối đầu nhau, trung thành phục vụ chủ. <i class=\"clr-orange\">Ryoma</i> không ngờ được sẽ có ngày cả hai coi nhau như kẻ thù.<br>Sau một thời gian, vị vua già đi qua đời đúng thời điểm vương quốc phải đối phó với kẻ thù ngoại xâm. Triều đình chia thành hai phe, tranh giành quyền lực. <i class=\"clr-orange\">Ryoma</i>, nay là quân sự của hoàng tử trẻ, nhanh chóng dẫn lực lượng giành được nhiều chiến thắng quyết định. Vị hoàng tử già hơn cảm thấy lo lắng, vẽ ra một kế hoạch nguy hiểm, thành lập biệt đội thích khách ám sát hoàng tử trẻ tuổi do Kondo dẫn đầu.<br>Kế hoạch này dường như thành công vì biệt đội thích khách đã đến đích đến mà không gặp bất kỳ sự phản kháng nào. <i class=\"clr-orange\">Ryoma</i> lường trước được động thái này, nhưng để lộ sơ hở để biệt đội thích khách tận dụng và lướt qua lớp phòng thủ dễ dàng.<br>Tiếng thét của hoàng đạo trẻ giúp <i class=\"clr-orange\">Ryoma</i> lấy lại sự tập trung. Anh nghe thấy những lời của cha mình vang vọng trong đầu: “Không phải lúc để tình cảm quá khứ xen vào”. <i class=\"clr-orange\">Ryoma</i> quyết định vứt bỏ hết tình nghĩa với Kondo.<br>Kiếm trong tay, <i class=\"clr-orange\">Ryoma</i> hạ gục bất cứ tên thích khách nào dám đến gần hoàng tử. Cuộc tấn công của Kondo trở nên điên cuồng và khát máu hơn. Nó chỉ kết thúc khi <i class=\"clr-orange\">Ryoma</i> vung kiếm đâm chí mạng vào ngực Kondo. Còn lưỡi gươm của Kondo bất ngờ dừng lại ngay trước cổ họng của <i class=\"clr-orange\">Ryoma</i>.<br>\"Tại sao?\" <i class=\"clr-orange\">Ryoma</i> bối rối. \"Tôi đã luôn luôn là một đứa trẻ mồ côi\", Kondo nói, \"Tôi chưa bao giờ có ai khác ngoài anh và sư phụ. Ông ấy tự hào về a...\" Trước khi Kondo có thể kết thúc lời trăn trối, <i class=\"clr-orange\">Ryoma</i> bật khóc.<br><i class=\"clr-orange\">Ryoma</i> bẻ gãy một nửa thanh kiếm của mình và chôn nó cùng Kondo. Anh ta thề sẽ không bao giờ dùng bàn tay phải của mình, bàn tay đã thẳng tay đâm Kondo. Anh ta nhặt thanh kiếm của Kondo và bỏ đi.<br>Danh vọng và vinh quang? Quy tắc của 1 samurai? Đó chẳng liên quan đến ta nữa. Từ giờ, <i class=\"clr-orange\">Ryoma</i> và Kondo là một, chúng ta sẽ bắt đầu một cuộc sống mới.",
		"hero_skin": [
			{
				"name": "Kiếm Khách Tài Ba",
				"gold": "",
				"voucher": "599",
				"event": "",
				"wall": "Ryoma01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Thợ Săn Tiền Thưởng (Bậc A)",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Ryoma02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Đại Tướng Nguyệt Tộc (Bậc S)",
				"gold": "",
				"voucher": "499",
				"event": "",
				"wall": "Ryoma03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "Ryoma03",
			},
			{
				"name": "Thanh Long Bang Chủ (Bậc S)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Ryoma04",
				"disable": "",
				"img": "thumb4.jpg",
				"video": "",
			},
		]
	},
	"astrid": {
		"hero_id": "Astrid",
		"hero_name": "Astrid",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Đấu sĩ / Đỡ đòn",
			"special": "Tiền đạo",
			"lane": "Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Kiếm tâm",
				"info": "Nội tại: Khi máu còn thấp hơn 80%, Astrid sẽ tự tạo lá chắn hấp thụ 500 (+75 mỗi cấp) ST trong 4s (thời gian hồi 24s), mỗi đòn đánh thường hoặc chiêu thức trúng địch giúp giảm 3s hồi lá chắn (quái và lính giảm 1.5s).",
			},
			{
				"name": "Bạt kiếm",
				"info": "ST Gốc: 150/200/250/300/350/400<br>Tốc đánh: 20%/24%/28%/32%/36%/40%<br>Astrid vung thanh kiếm cực đại gây 200/240/280/320/360/400 (1.2 Công vật lý) sát thương vật lý lên những kẻ địch lân cận. Kẻ địch trúng chiêu giúp Astrid tăng 30/36/42/48/54/60% tốc đánh, và thêm 5% theo mỗi nạn nhân là tướng địch lên đến tối đa 25%; hiệu ứng kéo dài 3 giây."
			},
			{
				"name": "Quả cảm",
				"info": "ST Gốc: 60/90/120/150/180/210<br>H.Chiêu: 10/9.6/9.2/8.8/8.4/8<br>Astrid lướt theo hướng chỉ định, khiến đòn đánh kế gây 60/90/120/150/180/210 (+1.5 Công vật lý) sát thương vật lý, và làm chậm 50% tốc chạy của kẻ địch trúng chiêu trong 1.5 giây, đồng thời giảm 30% giáp của nạn nhân trong 4 giây. Đòn đánh thường kế tiếp sẽ tăng tốc đánh và khi trúng tướng giúp giảm 1 giây hồi chiêu Quả cảm (trúng nhiều tướng không cộng dồn).",
			},
			{
				"name": "Cự kiếm",
				"info": "H.Chiêu: 50/45/40<br>Astrid tập trung sức mạnh trong 2 giây giúp miễn nhiễm mọi sát thương và khống chế. Sau 1.5 giây cô vung kiếm gây 400/600/800 (+2.0 Công vật lý) sát thương vật lý. Nếu Astrid thấp hơn 60% máu sẽ khiến nạn nhân bị choáng trong 1.5 giây, còn nếu Tướng địch thấp hơn 60% máu thì chịu thêm sát thương chuẩn bằng 16% máu đã mất. (Tối đa 2000 lên quái).",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,0,2,4,0",
			},
		],
		"skill_note": "*Cô nàng này đánh khá cầu cưa, solo với cô ta chẳng khác nào kiếm chổ chết.<br>*Cự Kiếm miễn nhiễm mọi sát thương, bật lên và quẩy tới nóc thôi!!",
		"skill_special": "BocPha,TocBien",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo21",
					"info": "Tốc đánh +1.2%",
				},
				{
					"name": "NgocTim28",
					"info": "Máu tối đa +13.5<br>Tốc chạy +0.7%",
				},
				{
					"name": "NgocXanh22",
					"info": "Máu tối đa +15.7<br>Hồi máu/5s +3.1<br>Giảm hồi chiêu +0.3%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo34",
					"info": "Công vật lý +3.2",
				},
				{
					"name": "NgocTim33",
					"info": "Máu tối đa +45<br>Hồi máu/5s +5.2<br>Tốc chạy +0.4%",
				},
				{
					"name": "NgocXanh35",
					"info": "Giáp +2.7<br>Giáp phép +2.7<br>Giảm hồi chiêu +0.6%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường trên hoặc dưới",
				"info": "ThuongXuyenPha,AoChoangThanRa,GiayKienCuong,PhucHopKiem,HuanChuongTroy,ThuongLonginus",
			},
			{
				"name": "Đi rừng",
				"info": "AoChoangThanRa,GiayHoVe,AoChoangBangGia,KiemMuramasa,HuanChuongTroy,GiapThongKho",
			},
			{
				"name": "Game thủ hay lên",
				"info": "AoChoangThanRa,GiayKienCuong,AoChoangBangGia,ThuongXuyenPha,HuanChuongTroy,HerculeThinhNo",
			},
		],
		"hero_battle": [
			{
				"name": "chơi trên cơ",
				"desc": "dễ dàng chiến thắng khi gặp",
				"info": [
					{"hero_id": "arthur", "id_page": "Arthur"},
					{"hero_id": "arduin", "id_page": "Arduin"},
					{"hero_id": "thane", "id_page": "Thane"},
					{"hero_id": "wonder_woman", "id_page": "WonderWoman"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "butterfly", "id_page": "Butterfly"},
					{"hero_id": "lu_bo", "id_page": "LuBo"},
					{"hero_id": "zephys", "id_page": "Zephys"},
					{"hero_id": "skud", "id_page": "Skud"},
				]
			}
		],
		"hero_story": "“Thần nguyện trở thành thanh gươm chém tất thảy mọi trở ngại ngáng đường ngài.”<br>Khi <i class=\"clr-orange\">Astrid</i> khụy gối tuyên thệ trước Thane, cô vẫn chưa đến 18 tuổi. Nhưng với tư cách là người kế thừa của danh kiếm “Tro tàn” thuộc dòng dõi chính thống Bá tước Hoa hồng, <i class=\"clr-orange\">Astrid</i> đã gánh vác tất cả trọng trách này. Cô đứng cạnh Thane, giương cao ngọn cờ gia tộc Hỏa Hồng như minh chứng của hiệp ước giữa cựu gia tộc và tân vương.<br>Với sự chi viện từ <i class=\"clr-orange\">Astrid</i>, những ngờ vực về cái chết của Arduin dần phai mờ theo thời gian, và mọi người bắt đầu nghĩ đến trách nhiệm của Arctica. Dẫu cả cha và anh của <i class=\"clr-orange\">Astrid</i> đều tử trận nơi sa trường, cô bỏ ngoài tai mọi lời đồn đại và lời mời gọi từ Cung điện. Có thể ví những điều <i class=\"clr-orange\">Astrid</i> làm lúc bấy giờ với Thane tương tự như một sự cứu cánh cực kỳ quan trọng trong thời khắc tối then chốt.<br>Để đáp trả thịnh tình này, Thane đã tưởng thưởng những vinh dự vô tiền khoáng hậu cho cả dòng tộc của cô, và hiển nhiên chẳng ai có ý kiến gì khi <i class=\"clr-orange\">Astrid</i> trở thành Nữ Bá tước đầu tiên của cả vương quốc. Niềm vui ngắn chẳng tày gang, vương quốc nhận hung tin Taara tiên phong một quân đoàn hắc ám cùng Arduin và Mina sắp ập đến!<br><i class=\"clr-orange\">Astrid</i> không tài nào quên được chính Taara là kẻ thủ ác đã hạ gục cả cha và anh trai mình, nhưng trước khi cô xông lên tiền tuyến hòng đối đầu nhằm bắt kẻ địch trả giá, Thane đã cản cô lại và trìu mến nói “Tất cả hãy để ta lo.”<br>“Thưa bệ hạ, xin hãy hiểu cho thần,” <i class=\"clr-orange\">Astrid</i> ngẩng cao đầu với đôi mắt cương nghị hiếm ai đồng trang lứa có thể sánh bằng, thốt lên. “Thần tuyên thệ trở thành một hiệp sĩ. Các bá tước có thể chờ tin thắng trận tại lâu đài, nhưng nơi của hiệp sĩ không thể là đâu khác ngoài chiến trường!\" Dứt lời cô khoác lên chiếc áo đượm hồng sắc, tay nắm chặt thanh \"Tro tàn\" thẳng tiến về phía trước.<br>“Với thanh kiếm này, ta sẽ chém phăng mọi yêu ma ác quỷ!”",
		"hero_skin": [
			{
				"name": "Nữ Kiếm Sư",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Astrid01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "Astrid01",
			},
			{
				"name": "Bạch Kiếm Tiểu Thư (Bậc A)",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Astrid02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Siêu Sao Bóng Chày (Bậc S)",
				"gold": "",
				"voucher": "429",
				"event": "",
				"wall": "Astrid03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "Astrid03",
			},
		]
	},
	"tel_annas": {
		"hero_id": "TelAnnas",
		"hero_name": "Tel'Annas",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Xạ thủ",
			"special": "Cấu rỉa",
			"lane": "Đường rồng",
		},
		"main_skill": [
			{
				"name": "Sao trời",
				"info": "Nội tại: tăng 8% công vật lý khi có tướng đồng minh xung quanh.<br>Tốc đánh cơ bản theo cấp：3%<br>Công vật lý cơ bản：163",
			},
			{
				"name": "Ưng nhãn",
				"info": "Tăng mạnh tầm đánh, và 30/32/34/36/38/40% tốc đánh. Các đòn đánh thường được cường hóa bởi sức mạnh bóng tối, gây 50/58/66/74/82/90 (+0.55 công vật lý) sát thương phép và sát thương vật lý tương đương (đều có thể Chí mạng). Đồng thời đòn đánh thường sẽ gây 2 cộng dồn làm chậm."
			},
			{
				"name": "Ám tiễn",
				"info": "H.Chiêu: 9/8.5/8/7.5/7/6.5<br>Tel’Annas bắn một lúc 3 mũi tên gây 275/335/395/455/515/575 (+0.6 Công vật lý) sát thương vật lý lên tất cả kẻ địch trúng chiêu, đồng thời giảm 40% tốc chạy của chúng trong 2 giây. Mỗi khi tấn công trúng 1 Tướng địch sẽ tăng 20% tốc chạy của bản thân trong 1 giây.",
			},
			{
				"name": "Hỗn mang tiễn",
				"info": "H.Chiêu: 45/40/35<br>Sau thoáng chốc niệm chú, Tel’Annas bắn ra một mũi tên hỗn mang, gây 200/300/400 (+0.6 Công vật lý) sát thương vật lý và làm choáng chúng trong 0.75 giây. Kẻ địch cách càng xa càng chịu nhiều sát thương, lên đến 400/600/800 (+1.0 Công vật lý) sát thương vật lý. và 1.75 giây choáng.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,4,0",
			},
		],
		"skill_note": "*Đánh cùng đồng đội là lợi thế của cô nàng này.<br>*Bật Chiêu 1 tha hồ mà rỉa trụ tầm xa.<br>*Hỗn Mang Tiễn được bật thì ở đâu em cũng tới!!",
		"skill_special": "TocBien,GamThet",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo27",
					"info": "Tỷ lệ chí mạng +1%",
				},
				{
					"name": "NgocTim27",
					"info": "Tốc đánh +0.4%<br>Tỷ lệ chí mạng +0.3%<br>Tốc chạy +0.5%",
				},
				{
					"name": "NgocXanh21",
					"info": "Tốc đánh +0.4%<br>Giảm hồi chiêu +0.5%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo310",
					"info": "Tỷ lệ chí mạng +1.6%",
				},
				{
					"name": "NgocTim35",
					"info": "Hút máu +1.6%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường trên hoặc dưới",
				"info": "KiemFafnir,GiayDuMuc,ThanhKiem,ThuongXuyenPha,SongDaoBaoTap,NanhFenrir",
			},
			{
				"name": "Đường trên hoặc dưới",
				"info": "GiayDuMuc,KiemFafnir,ThanhKiem,KiemMuramasa,AoChoangBangGia,NanhFenrir",
			},
			{
				"name": "Game thủ hay lên",
				"info": "GuomSamSet,GiayDuMuc,ThanhKiem,ThuongXuyenPha,SongDaoBaoTap,NanhFenrir",
			},
		],
		"hero_battle": [
			{
				"name": "chơi trên cơ",
				"desc": "dễ dàng chiến thắng khi gặp",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "tulen", "id_page": "Tulen"},
					{"hero_id": "gildur", "id_page": "Gildur"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "butterfly", "id_page": "Butterfly"},
					{"hero_id": "zephys", "id_page": "Zephys"},
					{"hero_id": "batman", "id_page": "Batman"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "kriknak", "id_page": "Kriknak"},
					{"hero_id": "ngo_khong", "id_page": "NgoKhong"},
				]
			}
		],
		"hero_story": "Sau khi chia tay quê nhà, nơi <i class=\"clr-orange\">Tel’Annas</i> chìm trong giấc ngủ kéo dài một thiên niên kỷ, Nữ hoàng đã thức giấc, tỏa ra ánh nắng rực rỡ, vụt sáng như ngôi sao.<br>Là một trong những chiến binh dũng cảm chống lại cuộc xâm lăng lần đầu của phe Bóng Tối, Tel'Annas với kỹ năng bắn cung tuyệt vời của nàng đã trở thành huyền thoại, là chủ đề ngợi ca của bài hát và áng thơ qua nhiều thế kỷ. Chiến công xuất sắc và vang dội nhất của <i class=\"clr-orange\">Tel’Annas</i> chính là trận chiến cuối cùng chống lại đội quân xâm lăng, mũi tên kết liễu Chúa Tể Bóng Tối. Chính mũi tên này đã cứu tất cả sinh vật không được thần linh bảo hộ sống sót qua thời khắc đen tối nhất lịch sử.<br>Tuy nhiên, Tel'Annas đã phải trả giá đắt là cơ thể và trí óc của nàng bị ăn mòn bởi sức mạnh hắc ám của Chúa Tể Bóng Tối trong giây phút hấp hối. Nàng buộc phải phong ấn bản thân và tiến vào giấc ngủ sâu, kéo dài hàng ngàn năm cho đến khi toàn bộ sức mạnh hắc ám trong người được vô hiệu hóa hoàn toàn. Trong thời gian nàng ngủ, Maloch, kẻ kế vị của Chúa Tể Bóng Tối, đã cố gắng phá vỡ phong ấn nhằm chiếm đoạt sức mạnh tối tăm bên trong Tel'Annas. Tuy nhiên phong ấn trên người nàng mạnh hơn hắn tưởng tượng.<br>Nhìn thấy cơ hội của mình trong cuộc xâm lược lần thứ hai của phe Bóng Tối, Maloch phát động một cuộc tấn công nhằm thảm sát Khu Rừng Chạng Vạng, buộc Tel'Annas phá vỡ phong ấn và trở lại chiến trường. Những vết tích trên gương mặt nàng cho thấy <i class=\"clr-orange\">Tel’Annas</i> đã phải cố gắng chịu đựng suốt ngàn năm qua và giờ, nàng hoàn toàn làm chủ nguồn sức mạnh bóng tối trong cơ thể. Đối mặt với binh đoàn quỷ dữ, Tel'Annas một lần nữa cầm cung để bảo vệ cuộc sống của tất cả các sinh vật.<br>\"Ánh rực rỡ của ngôi sao sáng sẽ mãi mãi bảo vệ mảnh đất này.\"",
		"hero_skin": [
			{
				"name": "Nữ Vương Tinh Linh",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "TelAnnas01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "TelAnnas01",
			},
			{
				"name": "Cảnh Vệ Rừng",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "TelAnnas02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Chung Tình Tiễn (Valentine)",
				"gold": "",
				"voucher": "496",
				"event": "",
				"wall": "TelAnnas03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "",
			},
			{
        "name": "Giám Thị Thân Thiện (Bậc A)",
        "gold": "",
        "voucher": "279",
        "event": "",
        "wall": "TelAnnas04",
        "disable": "yes",
        "img": "thumb4.jpg",
        "video": "",
      },
      {
        "name": "Thánh Nữ Mật Hội",
        "gold": "",
        "voucher": "",
        "event": "Từ Sổ Sứ Mệnh I",
        "wall": "TelAnnas05",
        "disable": "yes",
        "img": "thumb5.jpg",
        "video": "",
      },
		]
	},
	"superman": {
		"hero_id": "Superman",
		"hero_name": "Superman",
		"main_info": {
			"price_gold": "28,888",
			"price_voucher": "629",
			"price_text": "",
			"position": "Đấu sĩ / Đỡ đòn",
			"special": "Tiền đạo / Tiền vệ",
			"lane": "Đường giữa / Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Siêu phàm",
				"info": "Nội tại: Superman có 2 cơ chế di chuyển: Phi hành và Bộ hành, anh tích tụ siêu năng và được tăng 2% tốc chạy theo mỗi 100 đơn vị khoảng cách bước đi, rồi chuyển sang Phi hành khi tích tđủ siêu năng, Superman được tăng 20% tốc chạy khi bay về phía kẻ địch, ngoài ra đòn đánh thường đầu tiên trong trạng thái này sẽ gây thêm 10% máu tối đa của nạn nhân thành STVL, trạng thái Phi hành sẽ biến mất khi Superman trúng phải hiệu ứng khống chế hoặc giảm tốc khiến tốc chạy của anh còn 375 trở xuống.",
			},
			{
				"name": "Siêu năng lực",
				"info": "ST Gốc: 215/430/645/860/1075/1290<br>H.Chiêu: 8/7.2/6.4/5.6/4.8/4<br>ST tai laze: 250/500/750/1000/1250/1500<br>Superman thổi hơi cực lạnh gây 215 (+1.27 Công vật lý) STVL lên những kẻ địch trúng nhiều và làm chậm 30% tốc chạy của chúng trong 1s, nếu tung chiêu trong trạng thái Phi hành, anh lướt đến gây 170 (+398) (10% máu tối đa) STVL, đồng thời bắn tia laze gây 250 (+255) STVL."
			},
			{
				"name": "Người đàn ông thép",
				"info": "ST Gốc: 335/470/605/740/875/1010<br>Tăng tốc chạy: 30%/34%/38%/42%/46%/50%<br>Lập tức loại bỏ mọi trạng thái khống chế, đồng thời giúp tăng mạnh tốc chạy, nếu tung chiêu trong trạng thái Phi hành, Superman lướt đến nện tay xuống đất gây 335 (+191) STVL, đồng thời hóa giải mọi trạng thái khống chế và giúp tăng tốc chạy.",
			},
			{
				"name": "Superman",
				"info": "H.Chiêu: 70/60/50<br>Superman hấp thu năng lượng mặt trời, giúp tăng 100% tốc độ nạp siêu năng trong 10s, nếu tung chiêu trong trạng thái Phi hành, anh bay đến đẩy lùi nạn nhân, gây 170 (+398) (10% máu tối đa) STVL và tăng 100% tốc độ nạp siêu năng trong 10s.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,4,3,2,0",
			},
		],
		"skill_note": "*Là một Đấu sĩ cứng cáp, vì thế hãy tận dụng mọi khả năng để làm những điều không thể.",
		"skill_special": "BocPha,CamTru",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo26",
					"info": "Công vật lý +1.5<br>Tốc đánh +0.4%",
				},
				{
					"name": "NgocTim28",
					"info": "Máu tối đa +13.5<br>Tốc chạy +0.7%",
				},
				{
					"name": "NgocXanh22",
					"info": "Máu tối đa +15.7<br>Hồi máu/5s +3.1<br>Giảm hồi chiêu +0.3%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo37",
					"info": "Tốc đánh +1%<br>Máu tối đa +33.7<br>Giáp +2.3",
				},
				{
					"name": "NgocTim31",
					"info": "Công vật lý +1.6<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh34",
					"info": "Máu tối đa +37.5<br>Giảm hồi chiêu +0.6%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường trên hoặc dưới",
				"info": "GiayKienCuong,ThuongXuyenPha,GiapGaia,KhienThatTruyen,KiemMuramasa,GiapHoMenh",
			},
			{
				"name": "Đường trên hoặc dưới",
				"info": "GiayKienCuong,GiapCuongNo,KiemMuramasa,GiapThongKho,GiapGaia,NanhFenrir",
			},
			{
				"name": "Game thủ hay lên",
				"info": "GiayHermes,ThuongXuyenPha,AoChoangBangGia,GiapGaia,KhienThatTruyen,GiapHoMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp khi chơi cùng",
				"info": [
					{"hero_id": "batman", "id_page": "Batman"},
					{"hero_id": "joker", "id_page": "Joker"},
					{"hero_id": "lauriel", "id_page": "Lauriel"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "moren", "id_page": "Moren"},
					{"hero_id": "chaugnar", "id_page": "Chaugnar"},
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "mganga", "id_page": "Mganga"},
					{"hero_id": "tel_annas", "id_page": "TelAnnas"},
				]
			}
		],
		"hero_story": "Trên hành tinh Krypton sắp chết, một đứa trẻ tên là Kal-El được đặt bên trong một tên lửa và được lập trình gửi tới Trái Đất. Là người Krypton cuối cùng sống sót, Kal-El đã được nuôi dưỡng bởi hai nông dân: bà Martha và ông Jonathan Kent. Hai người đặt cho Kal-El một cái tên mới là Clark và nuôi nấng cậu bé ấy bằng tình yêu và đức hạnh. Từ những giá trị đó, cậu bé đã khôn lớn và trở thành người tướng Siêu Nhân.<br>Bức xạ màu vàng từ mặt trời của Trái Đất cho phép Siêu Nhân có khả năng phi thường, bao gồm: siêu sức mạnh, tốc độ và cơ thể bất hoại. Siêu nhân sở hữu khả năng bay lượn với tốc độ cao, mắt chuyển hóa năng lượng thành chùm tia X phóng ra nhiệt lượng, nhìn thấy hạt ánh sáng hay trường năng lượng sinh học trên cơ thể sống. Siêu Nhân sử dụng năng lực của bản thân để giúp đỡ người dân của Trái Đất tránh khỏi tai hoạ và phát triển giác quan đạt tới giới hạn tiềm năng.<br>Mặc dù coi Trái đất là nhà nhưng Siêu Nhân vẫn không hoàn toàn thuộc thế giới này. Kiến thức ít ỏi của về hành tinh Krypton - ngôi nhà thực sự, về ánh sao xa mờ hay mảnh mặt trời đã khiến Siêu Nhân không dám liều lĩnh rời xa Trái Đất.<br>Định mệnh đã thay đổi trong một ngày mùa thu, Siêu Nhân đối mặt một trong những kẻ thù đáng gờm nhất của mình. Kẻ phản diện Brainiac với sức mạnh không rõ nguồn gốc, đã tìm đến Trái Đất cùng một đội quân robot tiên tiến. Phải sử dụng tới chút năng lực cuối cùng, Siêu Nhân mới tiêu diệt Brainiac. Sức bền của Người đàn ông thép đã chiến thắng và trước khi dùng tia X để quan sát Brainiac, Siêu Nhân nhận ra một luồng sáng chói lóa. Những viên ngọc lấp lánh từ bộ giáp của Brainiac truyền năng lượng đột biến vào bàn tay và cột sống của Siêu Nhân. Cảm thấy không tin tưởng vào nguồn sức mạnh đáng kinh ngạc này, <i class=\"clr-orange\">Superman</i> mang chúng về Pháo Đài Cô Đơn ở Bắc Cực để phân tích.<br>Máy tính của Pháo Đài Cô Đơn không thể tìm thấy bất cứ vật liệu nào tương tự trong dải thiên hà. Tuy nhiên, một lời gợi ý về hiện vật đó vô tình xuất hiện trong nhật ký cha của Siêu Nhân, nhà khoa học Kryptonian: Jor-El. <i class=\"clr-orange\">Superman</i> phát hiện ra rằng cha mình đã từng nghiên cứu một mẫu vật tương tự, được gọi là mảnh vỡ Andura. Mẫu vật này, thứ là chìa khóa sức mạnh giúp Brainiac chiếm Trái Đất, mới chỉ là một mảnh nhỏ. Nguồn gốc của những mảnh Andura đến từ một vương quốc có tên Athanor, một nơi nằm ngoài Vùng Vô Định. Các nhà khoa học Krypton đã chế giễu nghiên cứu của Jor-El về sự tồn tại của chiều không gian song song và ma thuật phát sinh từ Athanor có liên quan đến vũ trụ vật chất – khiến công trình và sự nghiệp của ông tiêu tan.<br>Nhưng Jor-El đã đúng. Khi xem xét kho lưu trữ của Pháo Đài Cô Đơn, Siêu Nhân đã biết được rằng những người Krypton cổ đại đã tìm kiếm những mảnh vỡ Andura để khám phá dải Thiên Hà và thậm chí có thể họ đã viếng thăm Trái Đất từ rất lâu trong một nhiệm vụ. Tuy nhiên tại đây Siêu Nhân phát hiện ra rằng rằng Brainiac đã tăng gấp đôi việc tìm kiếm mảnh vỡ Andura và nếu công bố nguồn sức mạnh tối thượng này, tất cả Trái Đất sẽ gặp nguy hiểm.<br><i class=\"clr-orange\">Superman</i> đã mất đi một quê hương, anh ta không thể đánh mất thêm quê hương thứ hai. Vì vậy, người đàn ông thép tự đi tìm kiếm Athanor và mảnh vỡ Andura trong dải Thiên Hà. Đây là cách hoàn thành nốt di sản của cha mình, cũng đồng thời biến Siêu Nhân trở thành người bảo vệ mới của thế giới trong cơn tuyệt vọng giữa sự thật và công lý.",
		"hero_skin": [
			{
				"name": "Siêu Nhân",
				"gold": "28,888",
				"voucher": "629",
				"event": "",
				"wall": "Superman01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Superman01",
			},
			{
				"name": "Chúa Tể Công Lý (Bậc A)",
				"gold": "",
				"voucher": "249",
				"event": "",
				"wall": "Superman02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "Superman02",
			},
			{
				"name": "Bất Công Lý (Bậc S)",
				"gold": "",
				"voucher": "309",
				"event": "",
				"wall": "Superman03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "Superman03",
			},
		]
	},
	"wonder_woman": {
		"hero_id": "WonderWoman",
		"hero_name": "Wonder Woman",
		"main_info": {
			"price_gold": "28,888",
			"price_voucher": "629",
			"price_text": "",
			"position": "Đấu sĩ",
			"special": "Khống chế",
			"lane": "Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Khiên thần lực",
				"info": "Nội tại: sau mỗi 2 đòn đánh thường liên tiếp, Wonder Woman sẽ phóng khiên tấn công những kẻ địch phía trước trong đòn thứ ba, gây thêm 84 STC, và giảm 50% tốc chạy của kẻ địch trúng chiêu trong .5s, đồng thời Wonder Woman được hồi 10 (+16) máu (gấp 3 hiệu lực nếu trúng tướng địch).",
			},
			{
				"name": "Khiên kiếm liên kích",
				"info": "H.Chiêu: 9/8.4/7.8/7.2/6.6/6<br>Wonder Woman lướt đi tấn công kẻ địch bằng khiên gây 40/80/120/160/200/240 (+0.6 Công vật lý) (+5% máu tối đa của mục tiêu) sát thương vật lý, và làm chậm 20% tốc chạy các nạn nhân trúng đòn trong 3 giây, trúng tướng địch giúp tăng bản thân 15/16/17/18/19/20% miễn thương trong 3 giây. Wonder Woman có thể tiếp tục vung gươm tấn công kẻ địch phía trước, gây sát thương vật lý tương đương đòn tấn công bằng khiên. Nạn nhân trúng mũi kiếm chịu gấp đôi sát thương (Giới hạn sát thương với Quái Rừng: 1000)."
			},
			{
				"name": "Dây thừng chân thật",
				"info": "ST Gốc: 250/300/350/400/450/500<br>H.Chiêu: 12/11.6/11.2/10.8/10.4/10<br>Wonder Woman phóng dây thừng về phía trước, nếu trúng kẻ địch với máu cao hơn 50% sẽ kéo bản thân về phía mục tiêu, gây 250 (+168) STVL, nếu trúng mục tiêu máu thấp hơn 50% sẽ kéo mục tiêu về bản thân, gây 250 (+168) STVL, giảm 3s hồi chiêu khi trúng đích.",
			},
			{
				"name": "Giáp tay thần kỳ",
				"info": "ST Gốc: 400/550/700<br>H.Chiêu: 50/45/40<br>Lá chắn: 600/800/1000<br>Wonder Woman chắp tay phóng sóng năng lượng gây 400 (+168) STVL, và làm choáng những kẻ địch trước mặt 0.75s, đồng thời khiến bản thân và đồng minh phía sau nhận lá chắn chặn 600 (+12% máu tối đa của Wonder Woman) sát thương, tất cả mục tiêu trong vùng hiệu lực được tăng 80% tốc chạy trong 1s, suốt thời gian tung chiêu Wonder Woman được tăng mạnh miễn thương 50%.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,2,4,2,0",
			},
		],
		"skill_note": "*Đánh thường liên tiếp cô nàng này sẽ phóng khiên ở đòn thứ 3.<br>*Chiếu 1 dùng 2 lần, nhớ lướt trúng mục tiêu để gây sát thương.<br>*Chiêu 2 phóng dây thừng khá thú vị, trúng kẻ địch trên 50% máu cô sẽ nhào tới đó, ngược lại dưới 50% máu thì kéo địch về.<br>*Bật Giáp Tay Thần Kỳ sao cho hiệu quả nhất, trước mặt cô thì gây ST cho địch, sau lưng cô thì tạo lá chắn cho đồng đội.",
		"skill_special": "BocPha,CapCuu",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim23",
					"info": "Công vật lý +0.6<br>Máu tối đa +36",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo34",
					"info": "Công vật lý +3.2",
				},
				{
					"name": "NgocTim34",
					"info": "Tỷ lệ chí mạng +0.5%<br>Máu tối đa +60",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường trên hoặc dưới",
				"info": "AoChoangThanRa,GiayKienCuong,AoChoangBangGia,KiemMuramasa,HuanChuongTroy,GiapThongKho",
			},
			{
				"name": "Đường trên hoặc dưới",
				"info": "AoChoangThanRa,GiayKienCuong,AoChoangBangGia,ThuongLonginus,HuanChuongTroy,GiapThongKho",
			},
			{
				"name": "Game thủ hay lên",
				"info": "AoChoangThanRa,GiayKienCuong,AoChoangBangGia,ThuongXuyenPha,HuanChuongTroy,PhuChuTruongSinh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp khi chơi cùng",
				"info": [
					{"hero_id": "ormarr", "id_page": "Ormarr"},
					{"hero_id": "lauriel", "id_page": "Lauriel"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "lauriel", "id_page": "Lauriel"},
					{"hero_id": "airi", "id_page": "Airi"},
				]
			}
		],
		"hero_story": "<i class=\"clr-orange\">Wonder Woman</i>, tức công chúa <i class=\"clr-orange\">Diana</i> thuộc dòng dõi các nữ chiến binh Amazon trứ danh trong thần thoại Hy Lạp. Khi chàng phi công trẻ Steve Trevor rơi máy bay xuống chốn địa đàng ẩn dật này, <i class=\"clr-orange\">Diana</i> đã nhất quyết muốn hộ tống anh trở về chốn quê nhà và khiến cả thế giới biết đến bộ tộc của cô.<br>Ngỡ ngàng khi lần đầu gia nhập xã hội nhân loại đầy loạn lạc, <i class=\"clr-orange\">Diana</i> cảm thấy nhân dân nơi đây cần một người hùng. Suốt những năm tháng dài <i class=\"clr-orange\">Diana</i> ngày càng trở nên trăn trở hơn trước những vấn đề nhân loại phải đối mặt - chiến tranh, hận thù, vô cảm trước sự tàn phá Trái Đất - may thay cô vẫn còn đó sức mạnh siêu phàm, đôi giáp tay thần kỳ cùng Dây thừng Sự thật trong suốt hành trình truy cầu trật tự cho thế giới hỗn loạn này.<br>Là một chiến binh thiên bẩm, lại được đào tạo bài bản, <i class=\"clr-orange\">Wonder Woman</i> vừa chiến đấu chống lại ác quỷ vừa nỗ lực giúp nhân loại đánh thức thứ tiềm năng mà cả chính cô cũng chưa thể thấu hiểu- đó là sứ mệnh đã dẫn dắt cô đến với Liên minh Công lý. Dẫu vậy thực tê luôn phũ phàng hơn lý tưởng, khi vẫn còn đấy đầy rẫy những âm mưu toan tính từ các thế lực quyền quý, hay thậm chí có đôi khi đến từ chính những bất đồng trong dòng tộc của cô - các vị thần của Hy Lạp. Bắt nguồn từ một lời nhắn của mẹ cô, Hippolyta, mà hành trình đến với Anathor của <i class=\"clr-orange\">Diana</i> đã bắt đầu.<br>Suốt cuộc đời Hippolyta đã che giấu một bí mật trọng đại với <i class=\"clr-orange\">Diana</i>- thứ bí mật hiện đang đa dọa hủy diệt Đỉnh Mount Olympus. Hippolyta thú nhận rằng bà đã từng lén lút \"qua lại\" với Zeus; và kết quả của mối tình vụng trộm này không gì khác hơn chính là <i class=\"clr-orange\">Diana</i>. Cô thậm chí chưa kịp biết mình phải làm gì trước tin động trời này thì đã bị Hera, bà vợ đầy ghen tuông của Zeus, đánh ghen ngay tại trận. Cuộc chiến hệ quả đã kéo theo sự góp mặt của vô số vị thần, nhưng <i class=\"clr-orange\">Wonder Woman</i> đã kết thúc được mọi thứ kịp thời bằng cách trói Hera lại với Dây thừng Sự thật.<br>Từ đấy <i class=\"clr-orange\">Wonder Woman</i> biết được rằng Zeus đã biến mất khỏi Olympus cũng đã lâu- và hậu quả của việc này chính là các thần xâu xé nhau tranh giành quyền thống trị Olympus. Zeus đã rời đi để tìm kiếm cội nguồn sức mạnh của các thần: một tinh truyền thuyết nằm ở trung tâm của toàn bộ vũ trụ.<br>Biết rõ rằng chừng nào đỉnh Olympus còn chiến tranh, chừng đấy Trái Đất và nhân loại sẽ còn bị đe dọa, <i class=\"clr-orange\">Wonder Woman</i> tự gánh vác trọng trách tìm lại Thần Zeus. Hippolyta đã cảnh báo nàng công chúa của mình rằng những gì cô phải đối diện ở Athanor sẽ siêu việt tất thảy các thử thách cô đã từng trải qua suốt cuộc đời mình. Các vị thần chốn này, với đầy quyền năng ma thuật kỳ dị. hoàn toàn vượt xa tầm hiểu biết của <i class=\"clr-orange\">Diana</i>.<br>Nói đi cũng nói lại, Anathor cũng chưa bao giờ có một người hùng như <i class=\"clr-orange\">Wonder Woman</i>. Và khi cô tìm đến được Zeus tại đây, những điều ông nói với <i class=\"clr-orange\">Diana</i> sẽ mang lại những kết quả khôn cùng, không chỉ với Olympus... mà cả Trái Đất.",
		"hero_skin": [
			{
				"name": "Chiến Thần Amazon",
				"gold": "28,888",
				"voucher": "629",
				"event": "",
				"wall": "WonderWoman01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "WonderWoman01",
			},
			{
				"name": "Thế Chiến",
				"gold": "",
				"voucher": "249",
				"event": "",
				"wall": "WonderWoman02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "",
			},
		]
	},
	"xeniel": {
		"hero_id": "Xeniel",
		"hero_name": "Xeniel",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Đỡ đòn / Trợ thủ",
			"special": "Khống chế / Hồi phục",
			"lane": "Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Sách thánh tích",
				"info": "Nội tại: mỗi đòn đánh thứ 3 gây thêm 4-8% máu tối đa (tăng 1% theo mỗi mốc cấp 4/7/10/13) STP.",
			},
			{
				"name": "Thần hộ thể",
				"info": "Lá chắn: 400/520/640/760/880/1000<br>ST đánh thường thêm: 4%/5%/6%/7%/8%/9%<br>Tăng lá chắn: 4%/5%/6%/7%/8%/9%<br>Xeniel tự phủ một lớp bảo hộ lên bản thân, giúp chặn 400 (+0) (+134) (4% máu tối đa của bản thân) sát thương, sau 2.5s Xeniel có thể tự hủy khiên, gây 400 (+0) (+134) (+4% máu tối đa của bản thân) STP lên những kẻ địch lân cận và làm chậm nạn nhan trúng chiêu trong 1s, nếu lớp bảo hộ bị phá sẽ không thể gây sát thương."
			},
			{
				"name": "Chùy thần lực",
				"info": "ST Gốc: 280/340/400/460/520/580<br>H.Chiêu: 10/9.4/8.8/8.2/7.6/7<br>Xeniel nhảy đến một vùng chỉ định gây 280 (+0) STP, và làm choáng những kẻ địch trúng chiếu trong 1.25s.",
			},
			{
				"name": "Sứ mệnh cứu thế",
				"info": "ST Gốc: 300/450/600<br>H.Chiêu: 70/65/60<br>Xeniel chọn 1 tướng đồng minh rồi phóng lên trời bay đến mục tiêu, sau 2.2s Xeniel giáng trần, gây 300 (+0) STP, đồng thời giúp đồng minh được chọn hồi 15% máu tối đa, và bản thân tăng 40% tốc chạy trong 3s, đặc biệt cả hai được tăng 40% miễn thương trong 2.2s.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "4,2,3,2,0",
			},
		],
		"skill_note": "*Là một vị tướng thuộc hàng \"Trâu\" vì thế hãy tận dụng và cản trở đối thủ.",
		"skill_special": "TrungTri,CapCuu",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo21",
					"info": "Tốc đánh +1.2%",
				},
				{
					"name": "NgocTim28",
					"info": "Máu tối đa +13.5<br>Tốc chạy +0.7%",
				},
				{
					"name": "NgocXanh22",
					"info": "Máu tối đa +15.7<br>Hồi máu/5s +3.1<br>Giảm hồi chiêu +0.3%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo37",
					"info": "Tốc đánh +1%<br>Máu tối đa +33.7<br>Giáp +2.3",
				},
				{
					"name": "NgocTim33",
					"info": "Máu tối đa +45<br>Hồi máu/5s +5.2<br>Tốc chạy +0.4%",
				},
				{
					"name": "NgocXanh34",
					"info": "Máu tối đa +37.5<br>Giảm hồi chiêu +0.6%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường Caesar",
				"info": "RiuLeviathan,GiayKienCuong,AoChoangBangGia,HuanChuongTroy,KhienThatTruyen,GiapHoMenh",
			},
			{
				"name": "Đường Caesar",
				"info": "RiuLeviathan,GiayHoVe,AoChoangBangGia,GiapGaia,GiapThongKho,KhienThatTruyen",
			},
			{
				"name": "Chơi hỗ trợ",
				"info": "LenhBaiPhongThan,GiayKienCuong,GiapThongKho,HuanChuongTroy,AoChoangBangGia,GiapHoMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp khi chơi cùng",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "maloch", "id_page": "Maloch"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "alice", "id_page": "Alice"},
				]
			}
		],
		"hero_story": "\"Vinh quang này dành cho Trời”<br><i class=\"clr-orange\">Xeniel</i> sở hữu một cơ thể mạnh mẽ và tâm trí vững vàng. Là tín đồ mộ đạo, <i class=\"clr-orange\">Xeniel</i> hoàn toàn trung thành với Cung điện ánh sáng. Sự cống hiến không ngừng nghỉ của ông đã thu hút sự chú ý của Nữ thần Ilumia, người đã giúp ông trở thành chỉ huy giáo phái.<br>\"Mọi thứ đều là ý nguyện của Trời, và tôi vinh dự được nhận lệnh từ Ngài.\" Mặc dù nắm nhiều quyền lực trong tay, <i class=\"clr-orange\">Xeniel</i> vẫn luôn khiêm tốn và coi lệnh của Nữ thần là tuyệt đối. Với Chùy Trừng phạt trong tay, <i class=\"clr-orange\">Xeniel</i> gửi lời cảnh cáo cho tất cả những kẻ dám phạm thượng. Đồng thời ông vận dụng năng lực, truyền đạt lời Sấm truyền Khai sáng của Trời tới người dân. Bên trong điện ánh sáng, <i class=\"clr-orange\">Xeniel</i> nhận được sự tôn trọng và sùng kính hoàn toàn. Vì vậy, Ilumia đã trao cho ông bộ cánh thiên thần, biểu tượng cho ánh sáng và sức mạnh.<br>Những thành tích của <i class=\"clr-orange\">Xeniel</i> vượt qua sự mong đợi của Ilumia. Trong cuộc xâm lược của phe bóng tối, Maloch và đội quân quỷ dữ đã tấn công Cung điện ánh sáng trên đỉnh núi. Ilumia xuất hiện giữa trận chiến để tăng tinh thần cho các chiến binh của phe Cung điện Ánh sáng. Tuy nhiên, Zephys và Nakroth đã nắm lấy cơ hội này để tấn công bất ngờ và phục kích Ilumia, hy vọng ám sát Nữ thần.<br><i class=\"clr-orange\">Xeniel</i> dang rộng 6 chiếc cánh thiên thần, vừa kịp bay tới giải cứu Ilumia. Ông dùng chính cơ thể vạm vỡ của mình để chống lại các chiêu thức của Zephys và Nakroth. Mặc dù bị thương bởi rất nhiều lưỡi kiếm, ông vẫn bất khuất dang đôi cánh đẫm trong máu che chở Nữ Thần. Quân đội quỷ dữ không thể làm gì trước khả năng phục hồi thần thành của cơ thể <i class=\"clr-orange\">Xeniel</i>. Lợi dụng sự mất cảnh giác của đội quân ác quỷ khi đấu với <i class=\"clr-orange\">Xeniel</i>, Airi đã vận dụng năng lực tiếp cận Maloch và cắt đứt đôi cánh của gã. Cuộc tấn công thất bại, bọn chúng buộc phải rút quân.<br>Sau trận chiến, sự dũng cảm của <i class=\"clr-orange\">Xeniel</i> lan rộng khắp nơi và ông trở thành Tư lệnh của Cung điện ánh sáng, ngang hàng với Mũi tên mặt trời Yorn.<br>\"Bóng tối đã kết thúc, hãy để Ánh dương chiếu sang mảnh đất này.\"",
		"hero_skin": [
			{
				"name": "Sứ Giả Thần Thánh",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Xeniel01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "Xeniel01",
			},
			{
				"name": "Thiên Sứ Hủy Diệt (Bậc A)",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Xeniel02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "Xeniel02",
			},
			{
				"name": "Trung Vệ Thép (Football Fever)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Xeniel03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "Xeniel03",
			},
			{
				"name": "Kim Sí Điểu",
				"gold": "",
				"voucher": "",
				"event": "Mở VIP có",
				"wall": "Xeniel04",
				"disable": "",
				"img": "thumb4.jpg",
				"video": "Xeniel04",
			},
		]
	},
	"kil_groth": {
		"hero_id": "KilGroth",
		"hero_name": "Kil'Groth",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Đấu sĩ",
			"special": "Tiền đạo",
			"lane": "Đường Caesar / Đi rừng",
		},
		"main_skill": [
			{
				"name": "Áp suất biển sâu",
				"info": "Nội tại: mỗi đòn đánh thường giúp tăng 6-10% tốc đánh (tăng theo cấp tướng), tối đa cộng dồn 5 lần, đặc biệt các đòn thứ ba có phạm vi công kích rộng hơn.",
			},
			{
				"name": "Sóng tử vong",
				"info": "ST Gốc: 100/125/150/175/200/225<br>H.Chiêu: 13.5/13/12.5/12/11.5/11<br>Giảm tốc chạy: 25%/30%/35%/40%/45%/50%<br>N.Lượng: 50<br>Kil'Groth lướt tới trước đâm mâu vào kẻ địch, gây 100 (+109) STVL, kèm hiệu ứng làm giảm 25% tốc chạy trong 1.5s, đâm trúng tướng giúp giảm 4s hồi chiêu."
			},
			{
				"name": "Mâu thần lực",
				"info": "ST Gốc: 60/100/140/180/220/260<br>Máu hồi: 45/56/67/78/89/100<br>ST thêm: 50/80/110/140/170/200<br>Nội tại: mỗi đòn đánh thứ ba gây thêm 60 (+0.3 công vật lý) STP.<br>Kích hoạt: Kil'Groth cường hóa vũ khí trong 4s, khiến các đòn đánh thường gây thêm 50（+0.25 công vật lý) STP theo nội tại của chiêu, mỗi đòn đánh trúng một mục tiêu giúp hồi 45 (+0.2 công vật lý) máu, khi đánh trúng tướng địch, giá trị hồi máu được tăng 150%.",
			},
			{
				"name": "Ác mộng biển khơi",
				"info": "H.Chiêu: 35/30/25<br>Kil’Groth kích phát bản năng chiến đấu khiến hắn lập tức nhận 5 điểm cộng dồn nội tại Áp suất biển sâu, loại bỏ mọi trạng thái khống chế, đồng thời được tăng 80% tốc chạy giảm dần, chưa hết trong 4s kế tiếp, hắn được miễn nhiễm hoàn toàn khỏi mọi trạng thái khống chế, mỗi lần Kil’Groth tấn công tướng địch bằng đòn đánh thường hiệu ứng này sẽ kéo dài 0.3s, tối đa là 3s.",
			}
		],
		"skill_up": {
			"line1": "1,3,6,9,11,14",
			"line2": "2,5,7,10,13,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,2,4,0",
			},
		],
		"skill_note": "*Là một cổ máy phá trụ, có thể sánh ngang sức phá trụ của 2 xạ thủ bắn cùng lúc, vì thế hãy tận dụng lợi thế này.",
		"skill_special": "TrungTri,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo21",
					"info": "Tốc đánh +1.2%",
				},
				{
					"name": "NgocTim27",
					"info": "Tốc đánh +0.4%<br>Tỷ lệ chí mạng +0.3%<br>Tốc chạy +0.5%",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo38",
					"info": "Tốc đánh +1.6%<br>Tỷ lệ chí mạng +0.5%",
				},
				{
					"name": "NgocTim31",
					"info": "Công vật lý +1.6<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đi rừng hoặc đường trên dưới",
				"info": "CungBaoTo,GiayHoVe,KiemFafnir,AoChoangBangGia,KiemMuramasa,HuanChuongTroy",
			},
			{
				"name": "Đi rừng hoặc đường trên dưới",
				"info": "CungBaoTo,GiayHoVe,ThuongLonginus,AoChoangBangGia,HerculeThinhNo,RiuHyoga",
			},
			{
				"name": "Game thủ hay lên",
				"info": "KiemTruyHon,GiayHoVe,KiemFafnir,KhienThatTruyen,RiuHyoga,GiapHoMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp khi chơi cùng",
				"info": [
					{"hero_id": "ryoma", "id_page": "Ryoma"},
					{"hero_id": "aleister", "id_page": "Aleister"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "raz", "id_page": "Raz"},
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "dieu_thuyen", "id_page": "DieuThuyen"},
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "joker", "id_page": "Joker"},
				]
			}
		],
		"hero_story": "<i class=\"clr-orange\">Kil'Groth</i> là kẻ thống trị của biển khơi, nơi có một và chỉ một luật lệ duy nhất: mạnh được yếu thua. Nhưng <i class=\"clr-orange\">Kil'Groth</i> không muốn tất cả chỉ dừng lại ở đó, hắn mặc kệ sự cân bằng của thứ tự chuỗi thức ăn. Tất cả những gì hắn quan tâm là cách tiêm nhiễm sự điên loạn, cuồng bạo muốn hủy diệt tất cả mọi thứ vào mọi sinh vật biển khơi. Còn chúng muốn hủy diệt thứ gì thì hắn chẳng quan tâm.<br>Dưới ách thống trị của hắn, vô số cuộc chiến nổ ra một cách đầy hỗn loại tại mọi ngóc ngách của biển khơi. Màu xanh của biển ngày càng nhuộm sắc đỏ thẫm của máu từ vô vàn sinh vật biển. Thậm chí ngay cả những loài ẩn núp tận đáy biển sâu cũng không thể kìm chế nỗi sự khát máu đang trỗi dậy ngày một mạnh mẽ hơn trong chúng. Và tất cả sự hỗn loạn đầy cuồng bạo này đã khiến thế lực ma quỷ trên đất liền bắt đầu lưu tâm đến.<br>Taara, một trong các chỉ huy của lực lượng Sa đọa, xuất hiện cùng chiếc búa khổng lồ trứ danh của cô. Bằng ma pháp băng giá với sức mạnh khôn cùng, Taara đã khiến cả mặt biển phải đóng băng, làm giảm mạnh sức chiến đấu của <i class=\"clr-orange\">Kil'Groth</i> cùng vô số sinh vật biển khác. Dẫu tình thế bất lợi, lòng tự trọng của <i class=\"clr-orange\">Kil'Groth</i> không cho phép hắn tháo chạy. Bằng dòng máu sôi sục trong huyết quản, <i class=\"clr-orange\">Kil'Groth</i> loại bỏ ma pháp băng giá đang khống chế bản thân, hắn cầm lấy vũ khí của mình quyết lao lên trước chiến đấu đến hơi thở cuối cùng.<br>Sự phản kháng của <i class=\"clr-orange\">Kil'Groth</i> không hề vô ích, nhưng trước vô vàn ác quỷ không ngừng lao đến tấn công hắn dưới lệnh của Taara, cũng phải đến lúc <i class=\"clr-orange\">Kil'Groth</i> kiệt sức tới mức chẳng thể vung nổi vũ khí của mình lên lần nữa. May thay Cresht cùng viện quân đã đến kịp thời để cứu lấy <i class=\"clr-orange\">Kil'Groth</i> đang hấp hối, giúp hắn thoát khỏi số phận mất xác chốn chiến trường.<br>Sau khi phục hồi, <i class=\"clr-orange\">Kil'Groth</i> đã trở thành đồng minh của Rừng chạng vạng để thể hiện sự tri ân, và cũng nhằm chờ đến ngày báo thù bè lũ Sa đọa.<br>Có hai điều về <i class=\"clr-orange\">Kil'Groth</i> ai cũng cần biết: hắn không nghe chỉ huy của bất kỳ ai, và bất kỳ kẻ Sa đọa nào xuất hiện trước mặt hắn đều phải chịu chung một số phận.",
		"hero_skin": [
			{
				"name": "Đồ Tể Đại Dương",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "KilGroth01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Cảnh Vệ Biển",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "KilGroth02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
			{
				"name": "Quang Vinh (S8)",
				"gold": "",
				"voucher": "",
				"event": "Thưởng hạng",
				"wall": "KilGroth03",
				"disable": "",
				"img": "thumb3.jpg",
				"video": "",
			},
		]
	},
	"moren": {
		"hero_id": "Moren",
		"hero_name": "Moren",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Xạ thủ",
			"special": "Cấu rỉa",
			"lane": "Đường rồng / Đi rừng",
		},
		"main_skill": [
			{
				"name": "Tinh chuẩn",
				"info": "Nội tại: Các đòn đánh và chiêu thức trúng đích giúp cộng dồn dấu ấn Tinh Chuẩn trên Moren. Khi đạt đủ năm dấu ấn, thời gian hồi của Súng thần công lập tức hoàn tất, đồng thời giúp Moren nhận 12- 26% hút máu (tăng 1% mỗi cấp tướng).",
			},
			{
				"name": "Súng Thần Công",
				"info": "Tăng công vật lý: 85%/91%/97%/103%/109%/115%<br>Tăng 2 loại giáp: 25/34/43/52/61/70<br>Moren tự tăng 40% tốc chạy trong 1.5s và khiến bản thân được tăng 25 giáp và giáp phép trong 5s, đặc biệt các đòn đánh thường trúng đích sẽ lập tức làm mới thời gian duy trì hiệu ứng, cộng dồn tối đa 7 lần, đòn đánh thường đầu tiên trong 5s sau khi tung chiêu sẽ bắn 2 viên đạn, mỗi viên gây 25 (+143) STVL."
			},
			{
				"name": "Pháo Phản Lực",
				"info": "ST Gốc: 150/200/250/300/350/400<br>Moren tự tăng 40% tốc chạy trong 1.5s, 5s sau đó các đòn đánh thường sau khi tung chiêu sẽ bắn ra 2 viên đạn, mỗi viên gây 25（+0.85 công vật lý） STVL, đồng thời sẽ khiến bản thân được tăng 25 giáp và giáp phép, duy trì 5s, cộng dồn tối đa 8 lần, các đòn đánh thường trúng đích sẽ lập tức làm mới thời gian duy trì hiệu ứng, gia tăng tầm bắn.",
			},
			{
				"name": "Trường Điện Từ",
				"info": "ST Gốc: 180/240/300<br>H.Chiêu: 35/30/25<br>Moren ném một viên nam châm vào một vùng chỉ định, thứ sẽ kích hoạt trường điện từ trong 2.5s, gây 6 đợt 180 (+50) STVL liên tục lên các nạn nhân trong vùng ảnh hưởng, đồng thời giảm 50% tốc chạy của chúng. Kẻ địch bị Moren đẩy lùi vào trường điện từ sẽ bị choáng 1s.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,4,3,2,0",
			},
		],
		"skill_note": "*Là một tướng dame to nên không cần ngần ngại gì cả tank hả bắn luôn, bắn nát cả thế giới.",
		"skill_special": "TrungTri,TocBien",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo21",
					"info": "Tốc đánh +1.2%",
				},
				{
					"name": "NgocTim21",
					"info": "Tốc đánh +0.4%<br>Hút máu +0.8%",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo38",
					"info": "Tốc đánh +1.6%<br>Tỷ lệ chí mạng +0.5%",
				},
				{
					"name": "NgocTim35",
					"info": "Hút máu +1.6%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đi rừng",
				"info": "KiemTruyHon,GiayKienCuong,ThanhKiem,KiemFafnir,PhucHopKiem,KiemMuramasa",
			},
			{
				"name": "Đường trên dưới hoặc đi rừng",
				"info": "ThanhKiem,GiayDuMuc,SongDaoBaoTap,ThuongXuyenPha,PhucHopKiem,DaoTruyHon",
			},
			{
				"name": "Game thủ hay lên đi rừng",
				"info": "KiemTruyHon,GiayHoVe,ThanhKiem,SongDaoBaoTap,ThuongXuyenPha,LiemDoatMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp khi chơi cùng",
				"info": [
					{"hero_id": "ormarr", "id_page": "Ormarr"},
					{"hero_id": "chaugnar", "id_page": "Chaugnar"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "butterfly", "id_page": "Butterfly"},
					{"hero_id": "grakk", "id_page": "Grakk"},
					{"hero_id": "wonder_woman", "id_page": "WonderWoman"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
				]
			}
		],
		"hero_story": "“Hãy nói xin chào với người bạn tý hon của ta”<br>Nếu không vì tính cách ưa bạo lực và bướng bỉnh, có lẽ <i class=\"clr-orange\">Moren</i> đã trở thành một học giả chăm chỉ và thông thái. Tuy nhiên, với nguồn gốc là người lùn, <i class=\"clr-orange\">Moren</i> chỉ thích uống rượu và gây gổ, giải quyết những bất đồng trong học thuật bằng nắm đấm và đạn dược thay vì nói chuyện. Vì vậy, không học giả nào muốn chấp nhận gã đi theo học việc. Điều này đã buộc <i class=\"clr-orange\">Moren</i> phải sử dụng tay nghề của gã để tìm kiếm hướng đi mới: Khoa học và Cơ khí.<br>Theo số liệu thống kê chưa đầy đủ, gần 50% số vũ khí được đánh giá cao nhất tại Miền đất hứa do chính tay <i class=\"clr-orange\">Moren</i> thiết kế hoặc chỉnh sửa. Vì vậy, từ những vị thần tối cao nhất đến bè lũ quỷ dữ khát máu đều rất để tâm tới gã. Điều này giúp <i class=\"clr-orange\">Moren</i> duy trì một vị trí trung lập giữa hai phe thiện ác trong thời gian dài.<br>Slimz, gã thỏ tài phiệt đến từ tập đoàn thương nhân nhanh chóng đánh hơi thấy cơ hội kinh doanh từ khả năng chế tạo vũ khí của <i class=\"clr-orange\">Moren</i>. Sau khi đạt được những thỏa thuận về giá cả, cả hai đi đến ký hợp đồng trọn đời. Kể từ đó, Slimz và tập đoàn có quyền sở hữu hoàn toàn các vũ khí do <i class=\"clr-orange\">Moren</i> tạo ra. Đổi lại, <i class=\"clr-orange\">Moren</i> nhận được mẫu thiết kế vũ khí quý hiếm, nguồn cung cấp vật liệu vô tận và toàn quyền kiểm soát Cơ giới thành. Mối quan hệ làm ăn này đã khiến cả hai bên trở nên cực kỳ giàu có, nhưng đó cũng là lúc Lực lượng sa đọa nhắm tới.<br>Sau một cuộc tấn công của Preyta và Skud, Cơ giới thành gánh chịu tổn thất nặng nề. Slimz hy vọng giữ được chút ít tầm ảnh hưởng, nhưng hắn không còn gì để mặc cả, càng không thể thuyết phục được <i class=\"clr-orange\">Moren</i> cứng đầu. Không có lựa chọn nào khác, hắn chấm dứt hợp đồng và bỏ mặc <i class=\"clr-orange\">Moren</i>. Điều này khiến <i class=\"clr-orange\">Moren</i> quyết định triển khai tất cả những vũ khí còn sót của mình tại Cơ giới thành và phát động một trận chiến sống còn với kẻ thù.<br>Hành động của <i class=\"clr-orange\">Moren</i> đã làm Skud thêm phần hiếu chiến, trong một cơn cuồng nộ, hắn đã tàn phá và tiêu diệt hoàn toàn tuyến phòng thủ của tòa thành. Thậm chí hắn còn đánh bại cả Omega, bộ giáp chiến tranh được cử tới tiếp viện cho Cơ giới thành. <i class=\"clr-orange\">Moren</i> bị thương nặng và cố gắng phát nổ một quả bom cháy nhằm liều chết với Skud, nhưng Omega kéo gã đi trước khi có thể chạm vào nút. Tuy rất biết ơn cứu mạng, nhưng <i class=\"clr-orange\">Moren</i> vẫn vô cùng giận dữ. Cuối cùng, gã nghe theo lời khuyên của Omega và chấp nhận một đề xuất hợp tác của Thane, chỉ huy tối cao Lâu đài khởi nguyên.<br>Đổi lại, Omega chia sẻ với <i class=\"clr-orange\">Moren</i> bí mật nguyên lý cơ học tiên tiến, cho phép gã tạo ra một thế hệ vũ khí công nghệ cao mới.",
		"hero_skin": [
			{
				"name": "Đại Sư Cơ Khí",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Moren01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Chú Thợ Điện (Bậc A)",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Moren02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "",
			},
		]
	},
	"teemee": {
		"hero_id": "TeeMee",
		"hero_name": "TeeMee",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Trợ thủ / Đỡ đòn",
			"special": "Tiền về / Yểm hộ",
			"lane": "Đường rồng",
		},
		"main_skill": [
			{
				"name": "Vàng vung vãi",
				"info": "Nội tại: các đơn vị kẻ địch lân cận (không phải tướng) khi bị hạ gục khiến TeeMee và đồng đội xung quanh nhận thêm 25% vàng.<br>Máu cơ bản：3201",
			},
			{
				"name": "Rắm thần lực",
				"info": "TeeMee bỗng nhiên đau bụng dữ dội, liên tục toát mồ hôi trong 5 giây. Suốt thời gian này, TeeMee có thể tự chủ động hoặc chờ hết thời gian chịu đựng dẫn đến đánh rắm khiến kẻ địch lân cận chịu tối đa 700/900/1100/1300/1500/1700 (+1.65 công phép) sát thương phép và bị choáng 1.5 giây. Thời gian nín càng lâu, sát thương và choáng càng cao. Đặc biệt nếu TeeMee đánh rắm trúng tướng địch sẽ giúp giảm đến 40% hồi chiêu."
			},
			{
				"name": "Giáo móc TeeMee",
				"info": "ST Gốc: 450/510/570/630/690/750<br>H.Chiêu: 10/9.2/8.4/7.6/6.8/6<br>TeeMee phóng giáo móc theo hướng chỉ định và kéo bản thân lại gần mục tiêu, nếu đấy là kẻ địch, nạn nhân sẽ phải chịu 450 (+0) STP và bị choáng 1s.",
			},
			{
				"name": "Pháp trận thần kỳ",
				"info": "ST Gốc: 600/750/900<br>H.Chiêu: 70/65/60<br>Máu hồi sinh: 2000/2750/3500<br>TeeMee tạo ra một vùng ma trận phục sinh bao phủ bản thân và đồng minh thấp máu nhất (vẫn có thể tung chiêu khi bị khống chế) trong 3s, suốt thời gian hiệu lực, khi bản thân hoặc tướng mục tiêu đồng minh bị hạ gục sẽ được hồi sinh sau 2s với 2000 (+0) máu, đơn vị khi sống lại gây 600 (+0) STP và làm chậm 50% tốc chạy trong 2s lên các kẻ địch lân cận.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,4,0",
			},
		],
		"skill_note": "*Nội tại cộng vàng vì thế cố gắng di chuyển nhiều qua các đường để kiếm thêm tiền.<br>*Cố gắng sử dụng chiêu đánh Rắm thật tốt vì đây là nguồn dame chính.<br>*Cố gắng sử dụng Giáo Móc vào creep trong các tình huống bỏ chạy :P.<br>*Chiêu cuối canh me xem team mình có ai sắp chết thì bật, chỉ chờ đợi cái chết trong 3s thôi.",
		"skill_special": "CapCuu,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim28",
					"info": "Máu tối đa +13.5<br>Tốc chạy +0.7%",
				},
				{
					"name": "NgocXanh22",
					"info": "Máu tối đa +15.7<br>Hồi máu/5s +3.1<br>Giảm hồi chiêu +0.3%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim32",
					"info": "Tốc đánh +1%<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh33",
					"info": "Công phép +2.4<br>Giảm hồi chiêu +0.7%",
				}
			]
		},
		"item_build": [
			{
				"name": "Chơi hỗ trợ",
				"info": "LenhBaiPhongThan,GiayHermes,KhienHuyenThoai,GiapGaia,KhienThatTruyen,GiapHoMenh",
			},
			{
				"name": "Chơi hỗ trợ",
				"info": "NgocDaiPhapSu,GiayHermes,VuongMiengHecate,KhienHuyenThoai,HuanChuongTroy,SachThanh",
			},
			{
				"name": "Chơi hỗ trợ",
				"info": "GiayKienCuong,PhuongHoangLe,LenhBaiPhongThan,KhienHuyenThoai,HuanChuongTroy,KhienThatTruyen",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp khi chơi cùng",
				"info": [
					{"hero_id": "yorn", "id_page": "Yorn"},
					{"hero_id": "tel_annas", "id_page": "TelAnnas"},
					{"hero_id": "valhein", "id_page": "Valhein"},
					{"hero_id": "ngo_khong", "id_page": "NgoKhong"},
					{"hero_id": "zephys", "id_page": "Zephys"},
					{"hero_id": "superman", "id_page": "Superman"},
					{"hero_id": "lauriel", "id_page": "Lauriel"},
					{"hero_id": "violet", "id_page": "Violet"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "batman", "id_page": "Batman"},
					{"hero_id": "butterfly", "id_page": "Butterfly"},
					{"hero_id": "kriknak", "id_page": "Kriknak"},
				]
			}
		],
		"hero_story": "<i class=\"clr-orange\">Tee</i> và <i class=\"clr-orange\">Mee</i> đã có một cuộc sống thảnh thơi trước khi trở thành những chiến binh. Mặc dù chiến tranh đã đến vùng đất của Afata, nhà thông thái <i class=\"clr-orange\">Mee</i> vẫn nói rằng: \"Bầu trời sẽ không bao giờ sụp đổ\". Trong lúc ấy, tất cả mọi thứ <i class=\"clr-orange\">Tee</i> quan tâm chỉ là làm cách nào để ăn no bụng mỗi ngày.<br>Đáng tiếc rằng, những ngày tháng tươi đẹp đã đến hồi kết thúc. Việc tìm kiếm thức ăn trở nên khó khăn hơn khi mà tất cả nguồn tài nguyên trong rừng đều được dồn hết cho cuộc chiến. Cả hai phải làm công việc dọn dẹp chiến trường để đổi lấy thức ăn và những thứ cần thiết hàng ngày. Ngay cả như vậy, <i class=\"clr-orange\">Mee</i> không bao giờ để tuột mất cơ hội. \"Tìm được thì ta sẽ giữ được\".<br>Khi mà tộc người và tộc Veda tham gia cuộc chiến, <i class=\"clr-orange\">TeeMee</i> bắt đầu tìm được những trang bị mới lạ, và món đồ giá trị nhất chúng tìm được là một bộ giáp chiến binh. Chúng đủ cho cả hai anh em và được khắc biểu tượng “hồi sinh”. Kiệt tác này được tạo nên bởi Max Thiên tài. Việc dọn dẹp chiến trường có lẽ không thể so sánh với việc trở thành chiến binh, dù cho nó đầy rẫy sự nguy hiểm. Cả hai không ngừng mơ mộng về việc bộ giáp đó có thể cứu vãn cuộc đời nhàm chán của họ.<br>Bỗng dưng một ngày, binh đòan quỷ dữ Lokheim bất ngờ rút quân khỏi cuộc chiến. Sau khi kẻ địch đã rút sạch khỏi chiến trường, một đám người dọn dẹp được cử đến, và <i class=\"clr-orange\">TeeMee</i> nằm trong số họ. Ngay lúc đó, đạo quân Lokheim bất ngờ quay trở lại khiến cả hai phải lao vào cuộc chiến. <i class=\"clr-orange\">Mee</i> đã sử dụng tất cả mưu kế của mình để chỉ dẫn cho <i class=\"clr-orange\">Tee</i> và đồng đội, lãnh đạo họ để đánh trả lại kẻ địch từ vùng đất cao hơn.<br>Khi phải đối mặt với hiểm họa chết người, <i class=\"clr-orange\">Tee</i> dần trưởng thành và quyết đoán hơn. Anh ta nghe theo mọi mệnh lệnh của <i class=\"clr-orange\">Mee</i> và thậm chí còn đặt mình vào giữa đồng minh và nguy hiểm. Với khả năng chống chịu đáng kinh ngạc của bộ giáp và sức mạnh từ biểu tượng được khắc trên mình, <i class=\"clr-orange\">TeeMee</i> đã đẩy lùi đội quân Lokheim ngay khi chúng vừa quay trở lại và tiếp tục truy sát kẻ địch.<br>Sau trận chiến, hai anh em đã nhận được rất nhiều lời ca ngợi và biết ơn, và nó đã mang đến cho họ sự hãnh diện.<br>\"Cũng khá ổn đấy chứ, hừm?\" <i class=\"clr-orange\">Mee</i> cẩn trọng gợi ý.<br>\"Tôi rất thích việc này\" <i class=\"clr-orange\">Tee</i> trả lời đầy dứt khoát.<br>Từ đó, <i class=\"clr-orange\">TeeMee</i> luôn chiến đấu ở tiền tuyến. Người đời chia sẻ những câu chuyện hài hước và buồn cười của họ, nhưng kèm theo đó là sự quyết tâm và lòng dũng cảm đáng được tôn trọng.<br>“Một ngày nào đó, chúng ta sẽ cùng vươn tới những vì sao sáng” <i class=\"clr-orange\">Mee</i> nhấn mạnh!<br>“Đúng vậy, vươn tới những vì sao” <i class=\"clr-orange\">Tee</i> lặp lại.",
		"hero_skin": [
			{
				"name": "Trái Tim Biển Cả",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "TeeMee01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Xiếc Cung Đình",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "TeeMee02",
				"disable": "",
				"img": "thumb2.jpg",
				"video": "",
			},
		]
	},
	"lindis": {
		"hero_id": "Lindis",
		"hero_name": "Lindis",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Xạ thủ",
			"special": "Tiền vệ / Trung phong",
			"lane": "Đi rừng / Đường rồng",
		},
		"main_skill": [
			{
				"name": "Phục kích",
				"info": "Nội tại: Di chuyển giữa các bụi cỏ giúp Lindis tăng tốc chạy thoáng chốc, đồng thời khiến đòn đánh thường kế tiếp bắn hai lần (4s hồi), mỗi lần gây (+199) STVL, (Tầm bắn cơ bản tăng 8).",
			},
			{
				"name": "Nguyệt quang",
				"info": "ST Gốc: 100/180/260/340/420/500<br>H.Chiêu: 16/14.5/13/11.5/10/8.5<br>Kích hoạt: Lindis triệu hồi mặt trăng giúp soi sáng xung quanh và phát hiện kẻ địch trong 5s, tối đa dự trữ 2 điểm cộng<br>Nội tại: Đòn đánh thứ 3 trúng cùng mục tiêu sẽ gây thêm 140/210/280/350/420/490 (+0.20 công vật lý) sát thương vật lý."
			},
			{
				"name": "Nguyệt vực",
				"info": "ST Gốc: 360/432/504/576/648/720<br>H.Chiêu: 12/11/10/9/8/7<br>Lindis tạo ra một cái bẫy tồn tại tối đa 2 phút tại điểm đã chọn, khi tiếp xúc với kẻ địch chiếc bẫy sẽ làm mục tiêu lộ diện đồng thời bộc phát tạo ra một vùng làm chậm 30% tốc chạy và gây 360 (+220) STVL sau thoáng chốc.<br>Lindis tối đa dự trữ được 2 bẫy, những chiếc bẫy này nếu không bị kích hoạt bởi kẻ địch sẽ trở nên tàng hình sau 2s.",
			},
			{
				"name": "Nguyệt ảnh",
				"info": "ST Gốc: 220/300/380<br>Thời gian nạp đạn: 5/4.5/4<br>Lindis triệu hồi ảnh ảo tấn công kẻ địch, gây 220 (+184) STVL kèm các hiệu ứng trên đòn đánh, Lindis có thể dự trữ tối đa 5 ảnh ảo.",
			}
		],
		"skill_up": {
			"line1": "2,6,10,13,14,15",
			"line2": "1,3,5,7,9,11",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game 1: Kết hợp Nội tại cùng đánh thường",
				"info": "1,0",
			},
			{
				"name": "*Combo đầu game 2",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "4,0,4",
			},
			{
				"name": "*Hoặc như này",
				"info": "3,0,4,0",
			},
		],
		"skill_note": "*Chiêu Nguyệt Quang là chiêu soi rọi xung quanh giúp phát hiện kẻ địch trong bụi cỏ, và những kẻ tàng hình (Ngộ không và Batman hết đời).<br>*Cố gắng đặt bẫy chuẩn sát để khiến kẻ địch dậm phải, có thể đặt 2 lần cùng vị trí.<br>*Chiêu cuối hồi ngắn kích hoạt 5 lần tha hồ cấu rỉa nhé.<br>*Tăng tốc di chuyển khi đi qua bụi cỏ, hãy dùng nó để gank các đường.",
		"skill_special": "TrungTri,TocBien",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo22",
					"info": "Tốc đánh +0.6%<br>Tỷ lệ chí mạng +0.3%<br>Sát thương chí mạng +1.1%",
				},
				{
					"name": "NgocTim27",
					"info": "Tốc đánh +0.4%<br>Tỷ lệ chí mạng +0.3%<br>Tốc chạy +0.5%",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo36",
					"info": "Công vật lý +2<br>Xuyên giáp +3.6",
				},
				{
					"name": "NgocTim31",
					"info": "Công vật lý +1.6<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đi rừng",
				"info": "KiemTruyHon,GiayDuMuc,ThanhKiem,AoChoangBangGia,KiemMuramasa,KiemFafnir",
			},
			{
				"name": "Đường trên hoặc dưới",
				"info": "GiayHermes,GuomSamSet,ThuongXuyenPha,AoChoangBangGia,KiemMuramasa,NanhFenrir",
			},
			{
				"name": "Game thủ hay lên đồ rừng",
				"info": "CungBaoTo,GiayKienCuong,KiemMuramasa,AoChoangBangGia,ThanhKiem,KiemMuramasa",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp khi chơi cùng",
				"info": [
					{"hero_id": "toro", "id_page": "Toro"},
					{"hero_id": "xeniel", "id_page": "Xeniel"},
					{"hero_id": "teemee", "id_page": "TeeMee"},
					{"hero_id": "grakk", "id_page": "Grakk"},
					{"hero_id": "cresht", "id_page": "Cresht"},
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "alice", "id_page": "Alice"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "taara", "id_page": "Taara"},
					{"hero_id": "butterfly", "id_page": "Butterfly"},
					{"hero_id": "murad", "id_page": "Murad"},
					{"hero_id": "superman", "id_page": "Superman"},
				]
			}
		],
		"hero_story": "Ẩn mình giữa Afata, có một bộ lạc nhỏ tôn sùng mặt trăng. Cứ 30 năm, một người phụ nữ trẻ sẽ được chọn để trao quyền năng của mặt trăng và trở thành cận vệ của bộ lạc. Khi thời gian tuyển chọn đến gần, <i class=\"clr-orange\">Lindis</i> và Luna là hai ứng viên sáng giá nhất khi mà họ thế hiện tiềm năng to lớn của mình, phát triển và kiểm soát được hoàn toàn năng lực siêu nhiên của mặt trăng.<br>Nhưng <i class=\"clr-orange\">Lindis</i> biết cơ hội của cô là rất nhỏ. Luna, chị cô, vượt trội hơn về mọi mặt. Luna tài năng, thông minh, xinh đẹp và được các đồng nghiệp nam chú ý. Trong khi đó, <i class=\"clr-orange\">Lindis</i> chỉ đứng trong bóng tối và yên lặng.<br>Tuy nhiên, <i class=\"clr-orange\">Lindis</i> không hề ghen tị với chị gái. Cô ngưỡng mộ vẻ đẹp và tài năng của người chị, sẵn sàng hỗ trợ chị trở thành cận vệ của bộ lạc. Ngược lại, Luna dành tình cảm và quan tâm tới cô em gái  của mình. Cả hai ngày một hiểu ý nhau, dần dần theo thời gian, một sợi dây kết nối tâm linh thần bí được hình thành giữa hai người.<br>Đáng buồn thay, mong muốn chân thành này sẽ sớm bị huỷ hoại. Mganga biết chuyện, kín đáo lẻn vào bộ tộc. Hắn thu hút sự chú ý của <i class=\"clr-orange\">Lindis</i> bằng những lời dối trá ngọt ngào và chuẩn bị sẵn cái bẫy cho cô gái trẻ tuổi.<br>Ngay khi gã thi triển tà thuật, chuẩn bị hút lấy sức mạnh của <i class=\"clr-orange\">Lindis</i>, Luna đã linh cảm thấy điều bất thường, vội vã đến giải cứu. Tuy nhiên, sức mạnh của cô không đủ để đánh bại Mganga một mình. <i class=\"clr-orange\">Lindis</i> tỉnh lại, biết mình bị mắc mưu nhưng đã quá muộn, cảm thấy vô cùng tuyệt vọng và hối lỗi.<br>\"Đúng lúc lắm, ta sẽ hút hết sức mạnh của cả hai luôn!\" Mganga gào lên đầy thỏa mãn.<br>\"Ta thách ngưoi đó!\" Luna hét lên. Vận hết sức lực, Luna đã phát ra một luồng năng lượng sáng rực bảo vệ em gái, chia tách linh hồn của cô ra khỏi cơ thể.<br>\"Ngươi làm gì vậy?! Ngươi định hy sinh mạng sống của mình và sự tồn tại của mình để bảo vệ em gái?!” Mganga giận điên lên, đành dừng thi triển tà thuật. Đó là việc duy nhất gã có thể làm để ngăn chặn được sức mạnh của mặt trăng bạc tấn công gã.<br>Dưới ánh trăng bạc, Luna dần dần yếu đi. Năng lượng của cô đã đưa <i class=\"clr-orange\">Lindis</i> hồi sinh từ bờ vực của cái chết. \"<i class=\"clr-orange\">Lindis</i>, chị tự hào về em\". Đó là lời cuối của Luna trước cơ thể của cô hòa vào mây khói, báo hiệu sự kết thúc của sợi dây kết nối tâm linh giữa hai người. Tận cùng của đau khổ, <i class=\"clr-orange\">Lindis</i> bắn một mũi tên chí mạng từ nỏ trên tay về phía Mganga. Linh hồn Luna giờ đã hòa vào chiếc nỏ, gọi theo sức mạnh tinh túy nhất của mặt trăng bạc trong phát bắn. Bị thương nặng, Mganga bỏ trốn và thề sẽ không bao giờ trở lại bộ lạc này.<br>\"Luna, em hứa với chị. Em sẽ bảo vệ bộ lạc của chúng ta đến hơi thở cuối cùng.\"",
		"hero_skin": [
			{
				"name": "Ẩn Sĩ Ngân Nguyệt",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Lindis01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Lindis01",
			},
			{
				"name": "Thám Tử Tư",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Lindis02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "Lindis02",
			},
			{
				"name": "Quang Thánh Tiễn (Bậc S)",
				"gold": "",
				"voucher": "499",
				"event": "",
				"wall": "Lindis03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "",
			},
		]
	},
	"omen": {
		"hero_id": "Omen",
		"hero_name": "Omen",
		"main_info": {
			"price_gold": "",
			"price_voucher": "599",
			"price_text": "",
			"position": "Đấu sĩ",
			"special": "Tiền đạo",
			"lane": "Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Sát khí",
				"info": "Nội tại: các đòn đánh thường trúng đích giúp Omen nhận một điểm tích lũy sát khí, khi đạt đủ 5 điểm sẽ khiến đòn đánh thường kế được cường hóa, giúp tăng 60 tốc chạy và 25% tốc đánh, đồng thời gây thêm 60 STC và giảm thời gian hồi chiêu của Sát niệm và Sát kiếm đi 1s, hiệu ứng kéo dài 5s, đặc biệt Omen có tỷ lệ đánh một lúc 2 lần đòn cường hóa, với đòn thứ 2 chỉ gây 50% sát thương, lúc đầu và kết thúc cường hóa sẽ tính lại các điểm sát khí.",
			},
			{
				"name": "Sát kiếm",
				"info": "ST Gốc: 200/240/280/320/360/400<br>H.chiêu: 1.5/1.7/1.9/2.1/2.3/2.5<br>Giảm tốc chạy: 25%/30%/35%/40%/45%/50%<br>Omen tung kiếm kéo kẻ địch phía trước lại gần bản thân, gây 200 (+134 STVL) STVL và làm chậm 25% tốc chạy của nạn nhân."
			},
			{
				"name": "Sát niệm",
				"info": "Tăng tốc: 50%/54%/58%/62%/66%/70%<br>Khao khát muốn tiêu diệt tất cả bao phủ lấy Omen, giúp hắn tăng 50% miễn thương, và 30% tốc chạy trong 2s, suốt thời gian này các đòn đánh thường lên Omen sẽ bị bắn ngược về chính chủ, gây STVL và làm chậm 30% tốc chạy của nạn nhân (kèm hiệu ứng đánh thường cường hóa từ Omen), các đòn đánh từ kẻ địch chỉ bị bắn ngược 1 lần.",
			},
			{
				"name": "Sát vực",
				"info": "ST Gốc: 400/500/600<br>H.chiêu: 40/35/30<br>Khoảng cách xông lên：5m<br>Omen lao đến tướng địch đầu tiên trúng chiêu gây 400 (+201 STVL) STVL, đồng thời tạo ra một đấu trường tử vong khiến mục tiêu bị giảm thiểu sát thương gây ra, và không thể trốn thoát trong 5s.",
			}
		],
		"skill_up": {
			"line1": "2,6,9,11,14,15",
			"line2": "1,3,5,7,10,13",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,2,4,0",
			},
			{
				"name": "*Hoặc như này",
				"info": "4,3,2,0",
			},
		],
		"skill_note": "*Omen là một tay solo khá trội vì thế ưu tiên đi đường Caesar hoặc đường Rồng.<br>*Lựa chọn thời điểm tốt để bật Sát niệm không thì phí.<br>*Nội tại sẽ giúp bạn tăng sức mạnh vì thế hãy luân phiên dùng đòn đánh thường và các kỹ năng.<br>*Với chiêu cuối đóng lồng bá đạo Murad, Zill hay Joker khó mà có thể dùng kỹ năng thoát ra. :P<br>*Với các món đồ đủ mạnh phút thứ 7 hoặc 8 Omen có khả năng xơi tái con Khỉ :D!",
		"skill_special": "BocPha,TocBien",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo26",
					"info": "Công vật lý +1.5<br>Tốc đánh +0.4%",
				},
				{
					"name": "NgocTim21",
					"info": "Tốc đánh +0.4%<br>Hút máu +0.8%",
				},
				{
					"name": "NgocXanh21",
					"info": "Tốc đánh +0.4%<br>Giảm hồi chiêu +0.5%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo35",
					"info": "Công vậy lý +2.5<br>Hút máu +0.5%",
				},
				{
					"name": "NgocTim39",
					"info": "Máu tối đa +75",
				},
				{
					"name": "NgocXanh34",
					"info": "Máu tối đa +37.5<br>Giảm hồi chiêu +0.6%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường trên hoặc dưới",
				"info": "KiemTruyHon,GiayHoVe,ThuongLonginus,AoChoangBangGia,HuanChuongTroy,KhienThatTruyen",
			},
			{
				"name": "Đường trên hoặc dưới",
				"info": "AoChoangThanRa,GiayHoVe,AoChoangBangGia,HuanChuongTroy,KiemFafnir,HerculeThinhNo",
			},
			{
				"name": "Game thủ hay lên",
				"info": "KiemFafnir,GiayHoVe,PhucHopKiem,KhienThatTruyen,HuanChuongTroy,GiapThongKho",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp khi chơi cùng",
				"info": [
					{"hero_id": "mina", "id_page": "Mina"},
					{"hero_id": "joker", "id_page": "Joker"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "kil_groth", "id_page": "KilGroth"},
					{"hero_id": "ngo_khong", "id_page": "NgoKhong"},
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "skud", "id_page": "Skud"},
				]
			}
		],
		"hero_story": "\"Cái chết vĩnh viễn ngự trị!\"<br><i class=\"clr-orange\">Omen</i> – Quỷ kiếm dạ xoa là một cỗ máy giết chóc không ghê tay. Hắn được sinh ra từ vực thẳm tối tăm nhất của thung lũng quỷ, một nơi lạnh giá và vô hồn như chính <i class=\"clr-orange\">Omen</i>.<br>Ngay cả lũ quỷ dữ sinh ra từ vực thẳm đó cũng cảm thấy kinh hãi với sự khát máu của hắn.<br>Dù vậy, <i class=\"clr-orange\">Omen</i> hiếm khi lộ diện trong các cuộc chiến. Đối với <i class=\"clr-orange\">Omen</i>, giết chóc là bản năng tồn tại - không chỉ là với kẻ thù mà ngay cả đồng đội và bè lũ quỷ Lokheim sát cánh cùng hắn.<br>Tất cả từng có ý định lợi dụng hớn rồi sẽ phải khiếp sợ <i class=\"clr-orange\">Omen</i>. Điểu đó đủ để thấy, hắn là một con sư tử hoang mà không ai có thể thuần phục.<br>Lãnh đạo tối cao của Lokheim – Maloch đang ráo riết truy tìm thuộc hạ cho đội quân của gã. Maloch hiểu bản năng máu lạnh của <i class=\"clr-orange\">Omen</i> chính là thứ mà Lokheim đang cần, tuy nhiên chẳng cách nào khiến hắn bộc phát hết năng lực thực sự.<br>Cuối cùng, Maloch đành giấu <i class=\"clr-orange\">Omen</i> sâu trong vực thẳm. Tưởng chừng gã đã bị lãng quên, cho đến ngày quân đội của Arduin tấn công thung lũng quỷ.<br>Maloch đang phải điều trị vết thương từ các trận chiến khác, còn Veera bận rộn điều binh khiển tướng chống chọi lại với lực lượng của Arduin. Không có viện binh nào hỗ trợ đội quân của ả trong trận chiến này.<br>Đúng lúc tuyệt vọng nhất, <i class=\"clr-orange\">Omen</i> đã thức tỉnh, tìm lại ham muốn giết chóc của hắn trong nhiều năm qua. <i class=\"clr-orange\">Omen</i> đứng một mình đứng giữa chiến tuyến, cầm vũ khi chiến đấu đến khi thành viên cuối cùng của quân đội Arduin gục xuống.<br>Câu chuyện về trận chiến huyền thoại này đã được chia sẻ là không có ai còn sống trở về.<br>Thỏa mãn sau trận chiến, <i class=\"clr-orange\">Omen</i> một lần nữa tìm thấy được bình an. Nhưng tin tức về sự trở lại của cỗ máy giết chóc sớm lan rộng khắp nơi.<br>\"Hắn là minh chứng rõ nhất cho sự đáng sợ của vực thẳm, kẻ mang những cuộc chiến vô nghĩa và sức tàn sát kinh hoàng trở lại!\"",
		"hero_skin": [
			{
				"name": "Quỷ Kiếm Dạ Xoa (AIC 2017)",
				"gold": "",
				"voucher": "599",
				"event": "",
				"wall": "Omen01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "Omen01",
			},
			{
				"name": "Sĩ Quan Viễn Chinh (Bậc A)",
				"gold": "",
				"voucher": "249",
				"event": "",
				"wall": "Omen02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "Omen02",
			},
			{
				"name": "Ám Tử Đao (Bậc S)",
				"gold": "",
				"voucher": "549",
				"event": "",
				"wall": "Omen03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "",
			},
		]
	},
	"tulen": {
		"hero_id": "Tulen",
		"hero_name": "Tulen",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"position": "Pháp sư",
			"special": "Trung Phong / Cấu rỉa",
			"lane": "Đường giữa",
		},
		"main_skill": [
			{
				"name": "Lôi điện",
				"info": "Nội tại: Chiêu thức trúng đích giúp Tulen tích lũy dấu ấn Lôi Điện, khi đạt tới 5 điểm Tulen sẽ tạo ra 5 luồng sét quanh bản thân, thứ sẽ lần lượt tự công kích kẻ địch lân cận (ưu tiên tướng) gây ra 320 (+0.52 công phép) (+40 với mỗi cấp) STP mỗi luồng, nếu 1 mục tiêu bị nhiều luồng sét tấn công trong 1s, nạn nhân sẽ chịu giảm 20% sát thương (sét đánh không tấn công các đơn vị quái rừng không trong trạng thái chiến đấu).<br>Tốc chạy cơ bản：340",
			},
			{
				"name": "Lôi quang",
				"info": "ST Gốc: 450/510/570/630/690/750<br>H.chiêu: 8/7.4/6.8/6.2/5.6/5<br>Tulen bắn ra ba tia sét về phía trước, mỗi tia trúng đích gây 450（+0.78 Công Phép) STP, mục tiêu trúng nhiều tia sẽ chỉ phải chịu 30% ST từ các tia khác, mỗi tia chỉ có thể gây 1 điểm hiệu ứng Lôi điện."
			},
			{
				"name": "Lôi động",
				"info": "ST Gốc: 350/420/490/560/630/700<br>Thời gian nạp đạn: 10/9.6/9.2/8.8/8.4/8<br>Tulen biến ảo cực nhanh gây 350 (+0 STP) STP tại cả vùng biến đến và biến đi (nạn nhân trúng chiêu nhiều lần trong thời gian ngắn sẽ chỉ phải chịu 50% ST ở các lần sau), nếu kẻ địch trong vòng 5s liên tục chịu ảnh hưởng bởi chiêu này sẽ bị làm chậm 90% tốc chạy giảm dần trong 3s, ngoài ra mỗi mục tiêu trúng chiêu sẽ chỉ phải chịu 1 điểm hiệu ứng Lôi điện, chiêu thức tích lũy tối đa 3 lần (giảm hồi chiêu giúp nạp đạn nhanh hơn).",
			},
			{
				"name": "Lôi điểu",
				"info": "ST Gốc: 360/450/540<br>H.chiêu: 35/30/25<br>Tulen có thể vừa di chuyển, vừa tung chiêu triệu hồi một chú chim điện tấn công mục tiêu chỉ định gây 360 (+0 STP) STP, kèm theo 30% máu đã mất của nạn nhân thành sát thương thêm, đồng thời tự tăng cho bản thân 1 dấu ấn Lôi điện, nếu chim điện trực tiếp hạ gục tướng địch sẽ lập tức kích hoạt nội tại Lôi điện, đồng thời giảm 80% thời gian hồi Lôi điểu, chim điện có thể bị cản lại bởi những tướng địch khác, còn đối với các đơn vị không phải tướng sẽ phải chịu ST và bị đẩy lùi.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0,3",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,2,4,3,0,3",
			}
		],
		"skill_note": "*Tulen một vị Pháp sư với 2 lối chơi Sốc sát thương và Cấu rỉa.<br>*Cố gắng tích lũy đủ 5 điểm Nội tại để tăng lượng sát thương đáng kể.<br>*Cố gắng áp sát mục tiêu, dùng Lôi quang hiệu quả sẽ mang lại 3 điểm Nội tại.<br>*Với 3 điểm tích lũy Lôi động, Tulen được xem là người cầm 4 Tốc biến.<br>*Kết thúc tướng địch bằng Lôi điểu sẽ kích hoạt Nội tại!",
		"skill_special": "TocBien,ThanhTay,TrungTri,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim22",
					"info": "Công phép +1.4<br>Hút máu phép +0.8%<br>Giáp phép +1.6",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim36",
					"info": "Công phép +2.4<br>Hút máu phép +1%",
				},
				{
					"name": "NgocXanh33",
					"info": "Công phép +2.4<br>Giảm hồi chiêu +0.7%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường giữa",
				"info": "NgocDaiPhapSu,GiayHoVe,VuongMiengHecate,KhienHuyenThoai,QuyenTruongRhea,SachThanh",
			},
			{
				"name": "Đi rừng",
				"info": "GuomLoki,GiayHoVe,QuyenTruongRhea,VuongMiengHecate,KhienThatTruyen,HuanChuongTroy",
			},
			{
				"name": "Game thủ hay lên",
				"info": "NgocDaiPhapSu,GiayHoVe,QuyenTruongRhea,VuongMiengHecate,GiapThongKho,GiapGaia",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "thích hợp khi chơi cùng",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "cresht", "id_page": "Cresht"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "arthur", "id_page": "Arthur"},
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "grakk", "id_page": "Grakk"},
				]
			}
		],
		"hero_story": "\"Sấm chớp, sẵn sàng nghe hiệu lệnh của ta\".<br><i class=\"clr-orange\">Tulen</i> là một á thần được sinh ra để hiệu lệnh cho sấm sét. Từ khi còn nhỏ, chàng đã tỏ ra là một đứa trẻ phi thường, khiến sấm sét phải cúi đầu nghe lệnh. Sấm sét mà <i class=\"clr-orange\">Tulen</i> tạo ra mạnh thần thánh hơn pháp thuật bình thường hàng nghìn lần. Chính vì vậy, Ilumia quyết định để Aleister trở thành sư phụ, hướng dẫn <i class=\"clr-orange\">Tulen</i> điều khuyển hoàn toàn sức mạnh mà mình sở hữu.<br>Thế nhưng, Aleister lại không hề ưa <i class=\"clr-orange\">Tulen</i> chút nào. Hắn nhận ra <i class=\"clr-orange\">Tulen</i> sớm thôi sẽ thế chỗ hắn và vì thế hắn quyết định không dạy dỗ thêm gì. Không may thay, <i class=\"clr-orange\">Tulen</i> lại là cậu bé thích tự mình tìm hiểu những điều mới lạ. Khả năng kiểm soát sấm sét tự bẩm sinh đã cho phép chàng sử dụng năng lực mà không cần thần chú. Trí tưởng tượng sống động của chàng càng đẩy sức mạnh của <i class=\"clr-orange\">Tulen</i> lên những tầm cao mới.<br>Thành công của <i class=\"clr-orange\">Tulen</i> đã đưa Aleister vào vòng xoắn ốc của thất bại mà gã tự chuốc lấy. <i class=\"clr-orange\">Tulen</i> không mù quáng học theo những phương pháp giáo điều. Chàng cũng chẳng bận tâm tới việc lấy vị thế của Aleister. Thứ duy nhất chàng muốn sự tự do tuyệt đối mà Aleister sở hữu ... điều mà một học sinh như chàng sẽ gặp nhiều khó khăn để đạt được.<br>Cuối cùng, <i class=\"clr-orange\">Tulen</i> đã bất ngờ tìm tới ngôi đền bằng bằng năng lực điều khiển sấm sét kỳ diệu của mình, loại bỏ đi dấu tích của giáo viên trước những cặp mắt choáng váng của ngừoi xung quanh. Bằng cách đó, <i class=\"clr-orange\">Tulen</i> đã chứng minh rằng chàng không chỉ có sức mạnh để kế thừa ngai vàng của Aleister, mà ngôi đền cũng đã chọn cậu. Sau đó, dưới sự hướng dẫn của Ilumia, <i class=\"clr-orange\">Tulen</i> đã thành công, trở thành vị vua của sấm sét.<br>Nhiệm vụ đầu tiên của chàng là đoạt lại ngai vàng của chủ nhân cũ – đồng thời là giáo viên của mình, Aleister. Bởi vì không có Aleister, <i class=\"clr-orange\">Tulen</i> chỉ là vị vua hữu danh vô thực, không một ai công nhận. Nhiệm vụ này gần như là bất khả thi khi chàng không được phép phô trương sức mạnh bừa bãi, nhưng đó không phải điều đáng quan tâm.<br>\"Không ai hiểu tôi thực sự muốn gì!\"",
		"hero_skin": [
			{
				"name": "Hoàng Tử Lôi Quang",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Tulen01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "Tulen01",
			},
			{
				"name": "Nhà Thám Hiểm (Bậc A)",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Tulen02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "Tulen02",
			},
			{
				"name": "Tân Thần Thiên Hà (Bậc SS)",
				"gold": "",
				"voucher": "599",
				"event": "",
				"wall": "Tulen03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "Tulen03",
			},
			{
				"name": "Phù Thủy Kiến Tạo (Football Fever)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Tulen04",
				"disable": "yes",
				"img": "thumb4.jpg",
				"video": "Tulen04",
			},
			{
				"name": "Đông Êm Đềm",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Tulen05",
				"disable": "yes",
				"img": "thumb5.jpg",
				"video": "Tulen05",
			},
			{
				"name": "Tulen Phó Kỷ Luật",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Tulen06",
				"disable": "yes",
				"img": "thumb6.jpg",
				"video": "",
			},
		]
	},
	"liliana": {
		"hero_id": "Liliana",
		"hero_name": "Liliana",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"position": "Pháp sư / Sát thủ",
			"special": "Tiền đạo / Trung phong",
			"lane": "Đường giữa",
		},
		"main_skill": [
			{
				"name": "Yêu hồ",
				"info": "Nội tại:<br><i class=\"clr-orange\">Dạng người:</i> Trong trạng thái loài người Liliana sẽ đánh xa.<br><i class=\"clr-orange\">Dạng hồ ly:</i> Tăng 20 giáp và giáp phép (+5 mỗi cấp tướng), 30 tốc chạy, đồng thời khiến đòn đánh thường gây thêm 171 STP.",
			},
			{
				"name": "Hồ quang lực",
				"info": "ST dạng người: 500/560/620/680/740/800<br>ST vẫy đuôi: 300/360/420/480/540/600<br><i class=\"clr-orange\">Dạng người:</i> Liliana ngưng tụ ma lực gây <span class=\"clr-orange\">500 (+0.7 công phép) STP</span> lên những kẻ địch trong phạm vi ảnh hưởng, nếu có 2 tướng địch trúng chiêu trở lên, đòn đánh thường kế tiếp của Liliana sẽ được cường hóa gây thêm 5% máu tối đa mục tiêu thành STP (+1% mỗi 120 công phép), 4s hiệu lực.<br><i class=\"clr-orange\">Hồ Vĩ Kích:</i> Liliana vẫy đuôi tấn công kẻ địch phía trước, gây 300 (+38 công phép) STP, đồng thời khiến lần đánh thường kế trở thành chuỗi liên hoàn 3 đòn, mỗi đòn gây 167 STP, khoảng cách giữa 3 đòn liên tiếp ở trạng thái Hồ ly trong 0.6s, kèm hiệu ứng ngày vồ đến mục tiêu."
			},
			{
				"name": "Hồ quang đạn",
				"info": "ST đạn: 300/330/360/390/420/450<br>ST lướt đi: 300/330/360/390/420/450<br>ST linh đạn: 1000/1100/1200/1300/1400/1500<br>H.Chiêu: 9/8.6/8.2/7.8/7.4/7<br><i class=\"clr-orange\">Dạng người:</i> Liliana bắn ra một luồng đạn ma lực, thứ sẽ phát nổ khi trúng đích gây 300 (+46 STP) STP và 0.75s choáng lên những kẻ địch trong phạm vi hiệu lực.<br><i class=\"clr-orange\">Vũ Điệu Yêu Hồ:</i> Liliana lướt về hướng chỉ định gây 450 (+50 STP) STP lên những kẻ địch trúng chiêu. Nếu có nạn nhân là tướng địch, Liliana có thể tung chiêu lần nữa, bắn ra đạn linh lực tấn công những kẻ địch lân cận gây 1500 (+134 STP) STP.",
			},
			{
				"name": "Biến ảnh hoán hình",
				"info": "ST Gốc: 250/375/500<br>Tăng giáp & giáp phép: 120/180/240<br>Tăng công phép: 80/160/240<br><i class=\"clr-orange\">Dạng người:</i> Liliana lướt theo hướng chỉ định và hóa thành hồ ly gây 250（+0.55 Công phép) STP lên những kẻ địch trúng chiêu dọc đường, đồng thời làm chậm 30% tốc chạy của nạn nhân trong 2s. Suốt thời gian lướt đi Liliana không thể bị chọn làm mục tiêu, đồng thời tăng 120 giáp và giáp phép trong 2.5s sau khi biến hình, sau khi trở lại dạng người Liliana được tăng thêm 80 công phép trong 2.5s.<br><i class=\"clr-orange\">Hồ Hình:</i> Liliana lướt theo hướng chỉ định và hóa thành người đồng thời tạo một pháp trận tại điểm khởi đầu và kết thúc khiến các kẻ địch bên trong bị giảm 30% tốc chạy, sau 1s pháp trận nổ tung gây 250（+0.55 Công phép) STP. Suốt thời gian lướt đi Liliana không thể bị chọn làm mục tiêu đồng thời tăng 320 công phép trong 2.5s sau khi biến hình.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,4,2,0,3,2,4,3,2",
			}
		],
		"skill_note": "*Liliana pháp sư đường giữa mạnh mẽ với 2 dạng người và hồ ly.<br>*Lợi thế dạng Người đánh xa, dạng Hồ ly chạy nhanh, tăng giáp, vượt địa hình khá dày.<br>*Thế nhưng cô ta rất khó chơi đồi hỏi bạn phải tập luyện nhiều, và có óc phán xét tình huống để thay đổi dạng hợp lý nhất.",
		"skill_special": "TocBien,ThanhTay",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim22",
					"info": "Công phép +1.4<br>Hút máu phép +0.8%<br>Giáp phép +1.6",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim36",
					"info": "Công phép +2.4<br>Hút máu phép +1%",
				},
				{
					"name": "NgocXanh33",
					"info": "Công phép +2.4<br>Giảm hồi chiêu +0.7%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường giữa",
				"info": "NgocDaiPhapSu,GiayHoVe,TruongBungNo,VuongMiengHecate,QuyenTruongRhea,SachThanh",
			},
			{
				"name": "Đường giữa",
				"info": "NgocDaiPhapSu,GiayKienCuong,QuyenTruongRhea,VuongMiengHecate,TruongHonMang,GiapHoMenh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "NgocDaiPhapSu,GiayKienCuong,TruongBungNo,VuongMiengHecate,QuyenTruongRhea,TruongHonMang",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng đội",
				"desc": "tận dụng khả năng khống chế, làm chậm hoặc câm lặng từ đồng đội giúp Liliana dễ dồn sát thương hơn.",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "payna", "id_page": "Payna"},
					{"hero_id": "teemee", "id_page": "TeeMee"},
					{"hero_id": "grakk", "id_page": "Grakk"},
					{"hero_id": "gildur", "id_page": "Gildur"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "khá cơ động tuy nhiên gặp phải những đối thủ cơ động không kém sẽ khiến Liliana phải e dè.",
				"info": [
					{"hero_id": "annette", "id_page": "Annette"},
					{"hero_id": "omen", "id_page": "Omen"},
					{"hero_id": "tulen", "id_page": "Tulen"},
					{"hero_id": "ngo_khong", "id_page": "NgoKhong"},
					{"hero_id": "lauriel", "id_page": "Lauriel"},
				]
			}
		],
		"hero_story": "Trong hàng nghìn năm qua, <i class=\"clr-orange\">Liliana</i> đã đi tới mọi nơi trên thế giới.<br>Một trong những thực thể cổ xưa nhất ở Athanor còn tồn tại, <i class=\"clr-orange\">Liliana</i> đã được sinh ra khi thế giới vẫn còn hỗn loạn và tất cả các sinh vật còn sống sót đều nhờ bản năng. <i class=\"clr-orange\">Liliana</i> vô cùng tò mò, khám phá con đường của mình trong một thế giới hỗn loạn, tiếp tục tìm kiếm bản chất và nguồn năng lượng của vũ trụ. Cô muốn tìm hiểu về quá khứ và tương lai, sự khởi đầu của cuộc sống và ý nghĩa của cái chết. Để cuộc tìm kiếm câu trả lời của mình được thành công, <i class=\"clr-orange\">Liliana</i> biến thành các hình hài khác nhau và nhìn thấu sự sống qua con mắt của đủ mọi giống loài.<br>Một con cáo chín đuôi là sinh vật đầu tiên <i class=\"clr-orange\">Liliana</i> gặp. Cô đã xem ngài như vị thầy của mình, và tự nhận bản thân là một kẻ kế thừa. Nhờ sự chỉ dẫn của người thầy và những gì cô chứng kiến xuyên suốt chuyến đi của mình, <i class=\"clr-orange\">Liliana</i> nhanh chóng trở nên thông thái hơn. Tuy nhiên, cô hiểu rằng cô vẫn còn một con đường dài để tìm kiếm câu trả lời cuối cùng cho tất cả mọi thứ. Cô đã chọn một cuộc sống biệt lập, dành thời gian để từ từ thấm nhuần và suy ngẫm về tất cả những gì cô được học. Tuy vậy, cứ vài trăm năm, cô lại xuất hiện để tiếp thu sự thông thái và hiểu biết một cách sâu sắc hơn.<br>Trong những cuộc hành trình trước đây, <i class=\"clr-orange\">Liliana</i> đã tiếp xúc với Con người và đã có cơ hội quan sát họ gần hơn. Con người dường như ngu si đần độn và chỉ đạt tới mức trung bình ở tất cả mọi mặt, quyền năng, tâm linh và luật pháp, đó là lý do tại sao <i class=\"clr-orange\">Liliana</i> lại không hề quan tâm đến giống loài này. Tuy nhiên, sau khi cô biết nhiều hơn về những khát vọng của con người và cách họ truyền lại di sản của mình, cô nhanh chóng bị cuốn hút từ trong lối suy nghĩ của mình và bắt đầu những đổi mới cùng phát triển của loài người. Bất cứ khi nào con người thực hiện bước nhảy vọt, <i class=\"clr-orange\">Liliana</i> lại biến chuyển trà trộn vào loài người và học hỏi từ những học giả uyên bác.<br>Trong thời kỳ tăm tối, Con người thường bị tấn công bởi những sinh vật vô dạng. Không muốn phải nhìn thấy những đau khổ, <i class=\"clr-orange\">Liliana</i> đã sử dụng những phương pháp tinh tế nhất để tiết lộ những bí mật và đưa ra lời khuyên về cách sử dụng ma thuật để giúp con người trong giai đoạn khổ ai này. Từ những quan sát của mình, cô tiên đoán rằng nếu con người sống sót được qua quãng thời gian đen tối này, họ chắc chắc có thể tạo ra một nền văn minh vô tiền khoáng hậu, trong đó sẽ xuất hiện những nền tri thức mới và những kỹ năng mới, dần đưa cô đến gần hơn với câu trả lời cuối cùng. Và cô cân nhắc đến những trợ giúp mà cô gửi cho loài người như một dạng đầu tư - sau tất cả, nếu điều đó giúp cô có được thứ cô muốn thì tại sao lại không cơ chứ? Với một nụ cười và hi vọng dành cho tương lai, <i class=\"clr-orange\">Liliana</i> đã trở lại.<br>Vài trăm năm sau, khi <i class=\"clr-orange\">Liliana</i> trở lại nền văn minh của loài người một lần nữa, cô đã bị sốc. Những ngọn nến và lò sưởi cô đã từng được sử dụng nay đã được thay thế bằng những chiếc đèn pha lê chạm khắc bởi ma thuật, có khả năng mang ánh sáng tới hàng ngàn gia đình cùng một lúc. Những lưỡi giáo và những thanh kiếm mà cô từng biết không còn được nhiều người sử dụng nữa, những chiến binh loài người giờ đây đã sử dụng cơ khí và súng đại bác một cách mạnh mẽ và cực kỳ ấn tượng. Những cải tiến này, thứ mà con người gọi là \"công nghệ\" đã thay đổi hoàn toàn cách <i class=\"clr-orange\">Liliana</i> nhìn nhận thế giới.<br>Đó là một sự thay đổi lý tưởng cho <i class=\"clr-orange\">Liliana</i>, cô háo hức tham gia vào mọi sự phát triển mới. Nhưng ngay cả với một người vô cùng uyên bác như <i class=\"clr-orange\">Liliana</i> cũng phải cần hàng chục, thậm chí hàng trăm năm để thấu hiểu được tri thức này. Vì thế, <i class=\"clr-orange\">Liliana</i> đã quyết định biến đổi thành con người và gia nhập quân đội thức nghiệm với vai trò cán bộ truyền thông, người có quyền tự do đi lại giữa các lục địa và thu thập thông tin tình báo. Vai trò mới sẽ giúp cô thuận tiện hơn và đạt được tất cả những gì cô mong muốn. Tất nhiên điều đó cũng mang lại những kẻ địch mới, nhưng <i class=\"clr-orange\">Liliana</i> không ngại những thứ vụn vặt này và sẵn sàng đương đầu với chúng bất kỳ lúc nào.<br>\"Đó chỉ là một phần của học phí thôi!\"",
		"hero_skin": [
			{
				"name": "Cửu Vĩ Yêu Hồ",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Liliana01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Liliana01",
			},
			{
				"name": "Hồ Quý Phi (Bậc A)",
				"gold": "",
				"voucher": "249",
				"event": "",
				"wall": "Liliana02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "Liliana02",
			},
			{
				"name": "Thần Tượng Âm Nhạc (Bậc S)",
				"gold": "",
				"voucher": "429",
				"event": "",
				"wall": "Liliana03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "Liliana03",
			},
			{
				"name": "Nguyệt Mị Ly (Bậc SS)",
				"gold": "",
				"voucher": "799",
				"event": "",
				"wall": "Liliana04",
				"disable": "yes",
				"img": "thumb4.jpg",
				"video": "",
			},
		]
	},
	"max": {
		"hero_id": "Max",
		"hero_name": "Max",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"position": "Đỡ đòn / Đấu sĩ",
			"special": "Tiền đạo / Tiền vệ",
			"lane": "Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Điện tích",
				"info": "Nội tại: mọi sát thương của Max khiến các mục tiêu rơi vào trạng thái Điện tích, chịu 30 (+4 mỗi cấp tướng) (+0,18 công vật lý) STC mỗi giây trong vòng 3s, suốt thời gian này, khả năng hồi phục của nạn nhân bị giảm 25%.",
			},
			{
				"name": "Tay bán dẫn",
				"info": "ST Gốc: 300/360/420/480/540/600<br>Max vươn đôi tay máy xoay tròn tấn công kẻ địch lân cận, gây 300 (+143 STVL) STVL, mỗi nạn nhân trúng chiêu giúp Max nhận 6% tốc chạy, tối đa đạt 30% trong 4s."
			},
			{
				"name": "Động cơ cao thế",
				"info": "H.Chiêu: 12/11.6/11.2/10.8/10.4/10<br>Miến thương: 15%/16%/17%/18%/19%/20%<br>Max nhảy vọt qua mục tiêu và giật điện khiến nạn nhân bị choáng trong thoáng chốc, đồng thời Max tự tạo cho bản thân một lá chắn điện từ giúp tăng 15% miễn thương trong 3s, chiêu thức có thể tung lần nữa sau 4s.",
			},
			{
				"name": "Ra đa đạn đạo",
				"info": "H.Chiêu: 70/65/60<br>Thời gian choáng: 1s<br>Max kích hoạt Ra-đa quét kẻ địch, giúp phát hiện mọi tướng địch đồng thời ngắt quãng quá trình biến về của chúng. Kích hoạt lần 2 để chọn mục tiêu tướng địch, sau đấy Max liền cất cánh bay vút đến tấn công nạn nhân, gây 700/950/1200 (+2.0 công vật lý cộng thêm) sát thương vật lý kèm hiệu ứng đẩy lùi.<br>Sau khi đáp xuống Max nhận lá chắn điện từ giúp tăng miễn thương và 30% kháng hiệu ứng, đồng thời tạo ra một vùng điện tích khiến những kẻ địch lân cận liên tục chịu ảnh hưởng trạng thái này, suốt quá trình bay Max có thể kích hoạt lần nữa để hạ cánh.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game 1",
				"info": "3,2,0,3",
			},
			{
        "name": "*Combo đầu game 2",
        "info": "2,0,3,0,3",
      },
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "4,3,2,0,3",
			},
			{
        "name": "*Hoặc như này",
        "info": "4,2,0,3,0,3",
      },
		],
		"skill_note": "*Max là một đấu sĩ tự do, có thể đi đường đơn hoặc chơi ở vị trí trợ thủ, đấu sĩ thôi đừng quá hổ báo nhé.<br>*Mọi kỹ năng của Max đều khiến đối thủ giảm khả năng hồi máu, các đòn đánh gây sát thương chuẩn kể cả trụ, mạnh như này đừng quên gank các đường khác nhé!<br>*Chiêu 2 Santo về trước, tăng miễn thương và có thể vượt cả địa hình (có mục tiêu mới xài được).<br>*Bật Rađa Đạn Đạo, kẻ trốn chạy coi như hết đời! :D<br>*Chiêu cuối xài như này: Bật tìm kẻ địch xung quanh > Chọn kẻ địch yếu máu >  Bật lần nửa bay tới đó (Trong quá trình bay muốn đáp chổ nào thì bật lần nửa). :P",
		"skill_special": "BocPha,TocBien",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim23",
					"info": "Công vật lý +0.6<br>Máu tối đa +36",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo36",
					"info": "Công vật lý +2<br>Xuyên giáp +3.6",
				},
				{
					"name": "NgocTim33",
					"info": "Máu tối đa +45<br>Hồi máu/5s +5.2<br>Tốc chạy +0.4%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường trên dưới hoặc trợ thủ",
				"info": "AoChoangThanRa,GiayKienCuong,GiapGaia,AoChoangBangGia,GiapHoMenh,KiemMuramasa",
			},
			{
				"name": "Đường trên dưới hoặc trợ thủ",
				"info": "AoChoangThanRa,GiayHoVe,AoChoangBangGia,HuanChuongTroy,GiapThongKho,KhienThatTruyen",
			},
			{
        "name": "Đường trên dưới hoặc trợ thủ",
        "info": "GiayKienCuong,AoChoangThanRa,KhienThatTruyen,HuanChuongTroy,NanhFenrir,GiapHoMenh",
      },
			{
				"name": "Game thủ hay lên",
				"info": "AoChoangThanRa,GiayKienCuong,AoChoangBangGia,HuanChuongTroy,GiapThongKho,KhienThatTruyen",
			},
		],
		"hero_battle": [
			{
				"name": "chơi trên cơ",
				"desc": "làm giảm khả năng hồi máu của",
				"info": [
					{"hero_id": "payna", "id_page": "Payna"},
					{"hero_id": "taara", "id_page": "Taara"},
					{"hero_id": "mganga", "id_page": "Mganga"},
					{"hero_id": "thane", "id_page": "Thane"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "thấy khó chịu khi gặp",
				"info": [
					{"hero_id": "chaugnar", "id_page": "Chaugnar"},
					{"hero_id": "xeniel", "id_page": "Xeniel"},
					{"hero_id": "raz", "id_page": "Raz"},
				]
			}
		],
		"hero_story": "\"Công nghệ sẽ phát triển loài người\":<br>Câu nói nổi tiếng trong cuốn tự truyện của <i class=\"clr-orange\">Max</i>, thiên tài sáng chế và là đệ tử chân truyền của Đại sư cơ khí Moren. Moren có thế là một ông già khô khan và cục cằn, nhưng ông không tiếc gì vào việc dạy dỗ <i class=\"clr-orange\">Max</i>.<br><i class=\"clr-orange\">Max</i> có một cuộc sống khó khăn. Bố cậu đã hy sinh trong chiến tranh trước khi cậu ta được sinh ra, và một mình mẹ cậu ấy đã làm việc cật lực để nuôi nấng <i class=\"clr-orange\">Max</i>. Không một xu dính túi, <i class=\"clr-orange\">Max</i> phải lăn lộn trên các con phố để sống qua ngày. Cậu ta thường xuyên lảng vảng xung quanh nhà sản xuất phế thải lớn nhất thế giới của Moren.<br>Moren đang bị chôn vùi trong thất vọng bởi sự trỗi dậy của gã người máy Skud. Công việc đổ đốn bới Moren cảm thấy chán nản, vứt bỏ những cỗ máy mình thiết kế như đống phế liệu. Tuy nhiên chúng lại là nguồn tài nguyên quý giá với <i class=\"clr-orange\">Max</i>, giúp <i class=\"clr-orange\">Max</i> sống sót qua ngày và nuôi hi vọng trở thành một nhà sáng chế.<br>“Tài sản khổng lồ” của <i class=\"clr-orange\">Max</i> đã khiến những kẻ lang thang khác cảm thấy đố kị. Chúng tập hợp nhau lại và đánh đuổi đứa trẻ mồ côi này ra khỏi nhưng con phố. Biết rằng mình không thể địch lại số đông, <i class=\"clr-orange\">Max</i> khôn ngoan rút lui, cho tới khi cậu có thể chế tạo được một cỗ máy từ đống phế liệu kia, giúp cậu có thế địch lại chúng.<br>Bị đánh thức bới những tiếng động lạ, Moren thực sự bị ấn tượng bởi những gì ông nhìn thấy. Cỗ máy mà <i class=\"clr-orange\">Max</i> chế tạo, tuy còn thô sơ, nhưng đã cho thấy sức sáng tạo vô hạn. Ông mời <i class=\"clr-orange\">Max</i> vào và đặt câu hỏi về chúng. Khi biết rằng cậu tự chế tạo cỗ mày này, Moren lập tức nhận <i class=\"clr-orange\">Max</i> là học trò. Và đương nhiên, <i class=\"clr-orange\">Max</i> không có lí do để từ chối lời đề nghị đó.<br>Dưới sự chỉ dẫn của Moren, <i class=\"clr-orange\">Max</i> học được kĩ thuật phức tạp của việc chế tạo các cỗ máy. Cậu chế tạo những cỗ máy chiến đấu siêu sức mạnh, giúp những đứa trẻ yếu ớt trở nên mạnh mẽ hơn, đủ sức đánh trả người lớn. Với phát mình của mình, <i class=\"clr-orange\">Max</i> trở thành chiến binh trẻ tuổi nhất của Miền Đất Hứa. Kể từ đó, cậu đã cùng với những cỗ máy của mình tham gia vô vàn trận chiến, đặt dấu chân của mình trong lịch sử nhân loại.<br>“Các ngươi sẽ phải hối tiếc nếu đánh giá thấp một đứa trẻ như ta”",
		"hero_skin": [
			{
				"name": "Thần Đồng Cơ Giới",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Max01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "Max01",
			},
			{
				"name": "Hiệp Sĩ Nhí",
				"gold": "",
				"voucher": "249",
				"event": "",
				"wall": "Max02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "Max02",
			},
			{
				"name": "Găng Tay Vàng (Football Fever)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Max03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "Max03",
			}
		]
	},
	"the_flash": {
		"hero_id": "TheFlash",
		"hero_name": "The Flash",
		"main_info": {
			"price_gold": "28,888",
			"price_voucher": "629",
			"position": "Pháp sư / Sát thủ",
			"special": "Tiền đạo / Tiền vệ",
			"lane": "Đường giữa",
		},
		"main_skill": [
			{
				"name": "Thần tốc lực",
				"info": "Nội tại: The Flash nhận 1 điểm tốc lực sau mỗi 4 mét di chuyển, khi tích đủ 4 điểm sẽ khiến bản thân cường hóa đòn đánh kế giúp lướt đến mục tiêu, gây (+90) STP và làm chậm 50% tốc chạy của nạn nhân, đòn đánh trúng đích giúp The Flash nhận lá chắn hấp thu 375 (+45) ST.",
			},
			{
				"name": "Hành trình siêu tốc",
				"info": "ST Gốc: 200/220/240/260/280/300<br>ST thêm: 300/360/420/480/540/600<br>H.Chiêu: 10/9.4/8.8/8.2/7.6/7<br>The Flash lướt đi cực nhanh gây 200 (+36) STP lên những kẻ địch trúng chiêu dọc đường, khi lướt đi The Flash không bị chọn ngăn chặn, trừ khi tự dừng lại bằng cách phối hợp với chiêu thức khác, khi đến đích, The Flash có thể kích hoạt chiêu lần nữa để lướt về điểm khởi đầu, gây 200 (+36) STP lên những kẻ địch trúng chiêu dọc đường, các nạn nhân cả hai lần sẽ phải chịu thêm 300（+0.75 Công phép) STP."
			},
			{
				"name": "Cú đấm chớp nhoáng",
				"info": "ST Gốc: 135/160/185/210/235/260<br>H.Chiêu: 8/7.4/6.8/6.2/5.6/5<br>The Flash tung chuỗi liên hoàn đấm công kích kẻ địch 5 lần trong 0.8s, mỗi đợt gây 135 (+0.2 công phép) STP, đặc biệt cú đấm cuối có thể gây gấp đôi sát thương, đồng thời giúp bản thân tăng 80% tốc chạy (hiệu ứng giảm dần theo thời gian) trong 2s.",
			},
			{
				"name": "Lốc chân không",
				"info": "Hồi chiêu: 50/45/40 giây<br>The Flash chạy vòng quanh tạo nên một cơn lốc chân không giúp bản thân không bị chọn làm mục tiêu và gây 90/130/170（+0.12 Công phép) sát thương phép lên những kẻ địch trong phạm vi ảnh hưởng, bù lại tự giảm 30% tốc chạy của bản thân trong 2 giây.<br>Sau 2 giây The Flash dừng lại đột ngột khiến kẻ địch bị hút về tâm bão, gây 450/675/900 (+0.7 công phép) sát thương phép và gây thêm 1 giây 40% giảm tốc.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game 1",
				"info": "2,0,3,2",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,0,4,3,2",
			},
			{
				"name": "*Hoặc như này",
				"info": "2,0,3,4,2",
			},
		],
		"skill_note": "<strong class=\"clr-orange\">*Đầu game</strong><br>- Ngay cấp độ đầu nâng Chiêu 2 để dọn dẹp lính nhanh nhất có thể, lên cấp 2 là bá rồi.<br>- Dùng bộ combo Chiêu 1 > Đáng tay > Chiêu 2 cấu rỉa máu đối phương.<br>- Tận dụng Hành trình siêu tốc để gank các đường khác để gia tăng sức mạnh.<br>- Đầu game nên cấu rỉa máu rồi lui về không thì bốc hơi đó.<br><br><strong class=\"clr-orange\">*Cuối game</strong><br>- Sau khi có được Gươm tận thế lúc này Flash bá lắm rồi, khô máu thôi.<br>- Chú ý đòn đánh tay của Flash khá mạnh, trường hợp bị bắt dùng Chiêu 3 gơm đối phương cho đồng bọn xử.<br>- Tận dụng các bụi gặm để phân bóng, nhằm cấu rỉa hoặc có thể kết thúc mục tiêu thì càng tốt.",
		"skill_special": "BocPha,TocBien",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim22",
					"info": "Công phép +1.4<br>Hút máu phép +0.8%<br>Giáp phép +1.6",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim32",
					"info": "Tốc đánh +1%<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh33",
					"info": "Công phép +2.4<br>Giảm hồi chiêu +0.7%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường giữa full phép",
				"info": "NgocDaiPhapSu,GiayPhuThuy,VuongMiengHecate,GuomTanThe,QuyenTruongRhea,TruongHonMang",
			},
			{
				"name": "Đường giữa cấu rỉa có tí thủ",
				"info": "NgocDaiPhapSu,GiayKienCuong,VuongMiengHecate,GiapThongKho,TruongBang,SachThanh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "PhuongHoangLe,GiayPhuThuy,VuongMiengHecate,GuomTanThe,QuyenTruongRhea,MatNaBerith",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng bọn",
				"desc": "cùng với Maloch tạo ra combo Lốc chân không và Luyện ngục, địch bị giữ chân khá lâu cộng với dame của Maloch thì ôi thôi.<br>*Kế đó là cùng với Murad, Flash nhào lên cấu máu trước, Murad nhảy lên và dứt điểm, có thể ngược lại, một combo khủng khíp chăng?!",
				"info": [
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "murad", "id_page": "Murad"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "khá ái ngại khi gặp Alice với chiêu cuối căm lặng và slowmotion, cộng với Chiêu 1 giữ chân khá bá đạo, ôi thôi không còn đường lui rùi!!",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
				]
			}
		],
		"hero_story": "Barry Allen luôn luôn chạy với tốc độ hàng ngàn mét một phút – dường như không ai có thể làm anh ấy chậm lại. Điều đó đã bắt đầu từ cái ngày mẹ anh bị sát hại. Một khi đứa trẻ hiếu động này làm cho các giáo viên phát điên, toàn bộ năng lượng của Barry được tập trung vào một tâm trí duy nhất là tìm ra kẻ đã giết mẹ của mình. Lối đi của anh chọn đã đưa anh trở thành một nhà khoa học pháp y, và anh đã hoàn toàn bị cuốn hút bởi công việc này.<br>Khi một tia chớp kỳ lạ đánh vào phòng thí nghiệm, Barry đã hấp thụ toàn bộ sức mạnh từ Thần tốc lực, và trở thành <i class=\"clr-orange\">Flash</i>. Giờ đây, anh lên đỉnh những tòa nhà, xuyên qua đại dương, đi khắp thế giới để ngăn chặn những kẻ vi phạm luật pháp. Với tốc độ tiệm cận tốc độ ánh sáng, Barry đã khám phá sức mạnh tối hậu. Bằng sự quyết tâm và tập trung, <i class=\"clr-orange\">Flash</i> đã có thể học cách di chuyển qua các vật thể, tạo ra những vụ nổ siêu thanh chỉ bằng một cái đập tay - và không bao giờ thua cuộc.<br>Nhưng khả năng của <i class=\"clr-orange\">Flash</i> lại được thử nghiệm bằng một sự kiện rất bất ngờ. Khi anh cố gắng cứu một nhóm học sinh khỏi một ngôi trường đang cháy, <i class=\"clr-orange\">Flash</i> đã đẩy khả năng của mình đến giới hạn, di chuyển quá nhanh đến mức anh bước tới đường giới hạn của tốc độ ánh sáng. Trong khi anh cố gắng cứu một đứa bé, <i class=\"clr-orange\">Flash</i> đã lọt vào trung tâm của Thầ tốc lực - năng lượng siêu nhiên bí ẩn đã kích hoạt các khả năng của anh và anh dần bị cuốn vào đấy.<br>Dọc theo dòng chảy, biến dạng, các chiều không gian của Thần tốc lực, <i class=\"clr-orange\">Flash</i> đã phóng qua nhiều không gian, cho đến khi <i class=\"clr-orange\">Flash</i> dừng lại tại một vùng đất huyền diệu gọi là Athanor. Ban đầu, <i class=\"clr-orange\">Flash</i> than vãn khi mình bị bỏ lại trong thế giới đầy nguy hiểm này, nhưng ngay sau đó anh phát hiện nơi này có Thần tốc lực. Trong Athanor, <i class=\"clr-orange\">Flash</i> phát hiện ra những đầu mối tại Athanor thuộc về một những vị tướng Lokheim, nguồn cơn của việc <i class=\"clr-orange\">Flash</i> bị mắc kẹt trong Athanor.<br><i class=\"clr-orange\">Flash</i> đã tham gia cùng với các thành viên còn lại của Liên minh Công lý để khám phá những bí ẩn của Athanor và khôi phục Thần tốc lực. Khi bắt tay vào cuộc tìm kiếm, <i class=\"clr-orange\">Flash</i> dần khám phá ra bản tính thực sự của khả năng mà mình đang nắm giữ, và phát hiện này không chỉ dành cho <i class=\"clr-orange\">Flash</i>, nó dành cho tất cả mọi thành viên của Thần tốc lực.",
		"hero_skin": [
			{
				"name": "Hiệp Sĩ Thần Tốc",
				"gold": "28,888",
				"voucher": "629",
				"event": "",
				"wall": "TheFlash01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "TheFlash01",
			},
			{
				"name": "Tia Chớp Tương Lai (Bậc S)",
				"gold": "",
				"voucher": "409",
				"event": "",
				"wall": "TheFlash02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "",
			}
		]
	},
	"wisp": {
		"hero_id": "Wisp",
		"hero_name": "Wisp",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"position": "Xạ thủ",
			"special": "Cấu rỉa",
			"lane": "Đường rồng",
		},
		"main_skill": [
			{
				"name": "Tự hủy",
				"info": "Phạm vi bom: 1100<br>Thời gian bom tồn tại: 10<br>Nội tại: Sau khi bị hạ gục, Wisp tự hủy bằng số tạc đạn còn thừa lại, gây 465 STVL lên những kẻ địch lân cận, tướng địch trúng nhiều đạn tạc chỉ phải chịu 50% ST ở các lần sau.",
			},
			{
				"name": "Pháo động năng",
				"info": "ST Gốc: 45/60/75/90/105/120<br>Wisp lướt về phía trước đồng thời kích hoạt chế độ pháo kích, mỗi đòn đánh thường trong thời gian này bắn kèm pháo cối gây 45 (+194) STVL lên mục tiêu và những nạn nhân lân cận, đồng thời Wisp được tăng 10% tốc đánh, hiệu ứng kéo dài 5s."
			},
			{
				"name": "Pháo YoYo",
				"info": "ST Gốc: 200/240/280/320/360/400<br>H.Chiêu: 10/9.6/9.2/8.8/8.4/8<br>ST nổ: 300/360/420/480/540/600<br>Bán kính khi va chạm với đạn YoYo: 1300<br>Bán kính đạn YoYo nổ: 2400<br>Wisp bắn pháo YoYo theo hướng chỉ định, gây 200 (+106) STVL lên những kẻ địch trúng chiêu dọc đường lăn, đồng thời làm chậm 30% tốc chạy của nạn nhân trong vòng 1s, Pháo YoYo lăn tới điểm cuối sẽ phát nổ, gây 300 (+159) STVL lên những kẻ địch trong phạm vi ảnh hưởng, kèm hiệu ứng choáng 1s, lần phát nổ cuối có thể gây 60% sát thương lên các công trình, tướng địch trúng pháo giúp Wisp được giảm 3s hồi chiêu này.",
			},
			{
				"name": "Pháo cao xạ",
				"info": "ST Gốc: 200/275/350<br>H.Chiêu: 40/35/30<br>Wisp niệm chú tập trung giữ nguyên vị trí để oanh kích vùng chỉ định liên tục 6 đợt, mỗi đợt gây 200 (+88) STVL, ST này có thể chí mạng, gây thêm 50% sát thương, Chiêu thức này cần niệm chú giữ nguyên vị trí, tối đa kéo dài 3s, sau 0.6s nếu di chuyển hoặc tung chiêu khác sẽ ngắt quãng chiêu hiện tại.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0,3",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,4,2,0,3",
			},
		],
		"skill_note": "<strong class=\"clr-orange\">*Một số lưu ý khi chơi Wisp</strong><br>- Wisp có thể dọn rừng khá tốt vì thế vị trí rừng là chọn lựa tốt.<br>- Nếu chọn đường Rồng hãy chơi an toàn ở những cấp độ đầu, có Chiêu cuối và các trang bị đầu thì tha hồ hổ báo nhé!! Đùa thôi.<br>- Pháo Động Năng là chiêu phục vụ cho Vượt địa hình, truy đuổi và bỏ chạy trước mọi kẻ địch.<br>- Bạn cần tính toán thật tốt để Pháo YoYo có thể nổ trúng kẻ địch để giữ chân và dồn combo.<br>- Pháo Cao Xạ là chiêu xác thương diện rộng khá mạnh, nhưng bạn nên chọn vị trí tốt để thả chiêu, vì đứng im khi dùng chiêu nên bạn sẽ bị đối phương me đó!!<br>- Wisp tân tiến sức mạnh khá tốt thế nhưng nên kết hợp cùng đồng đội, đừng đi lẻ nhiều nhé, bốc hơi đó!!",
		"skill_special": "TocBien,TrungTri",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo27",
					"info": "Tỷ lệ chí mạng +1%",
				},
				{
					"name": "NgocTim27",
					"info": "Tốc đánh +0.4%<br>Tỷ lệ chí mạng +0.3%<br>Tốc chạy +0.5%",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo310",
					"info": "Tỷ lệ chí mạng +1.6%",
				},
				{
					"name": "NgocTim35",
					"info": "Hút máu +1.6%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường trên hoặc dưới full sát thương",
				"info": "ThuongXuyenPha,GiayDuMuc,ThanhKiem,SongDaoBaoTap,KiemMuramasa,NanhFenrir",
			},
			{
				"name": "Đường trên dưới hoặc rừng",
				"info": "ThuongXuyenPha,GiayDuMuc,ThanhKiem,KiemMuramasa,KiemFafnir,GiapHoMenh",
			},
			{
				"name": "Đường trên hoặc dưới tí thủ và giảm hiệu ứng",
				"info": "ThanhKiem,GiayKienCuong,VuotHungTan,QuyKiem,SongDaoBaoTap,GiapHoMenh",
			},
			{
				"name": "Game thủ hay lên",
				"info": "GiayDuMuc,ThanhKiem,ThuongXuyenPha,PhucHopKiem,SongDaoBaoTap,KiemMuramasa",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng bọn",
				"desc": "cùng với một số tướng hỗ trợ có khả năng giữ chân kẻ địch để phát huy Chiêu cuối của Wisp, ngoài ra chơi cùng TeeMee, Wisp có thể được hồi sinh lại sao loạt chiêu cuối vang trời!!",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "teemee", "id_page": "TeeMee"},
					{"hero_id": "toro", "id_page": "Toro"},
					{"hero_id": "cresht", "id_page": "Cresht"},
					{"hero_id": "lumburr", "id_page": "Lumburr"},
					{"hero_id": "mina", "id_page": "Mina"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "gặp các sát thủ có khả năng khống chế và sát thương to thì thôi rồi nên tránh xa các tướng này!!",
				"info": [
					{"hero_id": "liliana", "id_page": "Liliana"},
					{"hero_id": "murad", "id_page": "Murad"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
				]
			}
		],
		"hero_story": "<i class=\"clr-orange\">Wisp</i> không chỉ là con gái nuôi của Moren, cô cũng là em gái của Max nữa, \"Một thiên tài nhỏ tuổi\". Cô gái nhỏ bị ghen tỵ rất nhiều ở thành phố Cedar, một trung tâm của những tinh hoa tài năng từ khắp Athanor, <i class=\"clr-orange\">Wisp</i> đã phải thú nhận rằng thật khó chịu khi là em gái của một thiên tài.<br>Nhưng có một người cha nổi tiếng và anh trai thiên tài thì cô cũng có những đặc quyền của riêng mình. Dưới tầm ảnh hưởng của họ, <i class=\"clr-orange\">Wisp</i> đã trở thành một chuyên gia máy móc khi còn rất trẻ, mặc dù những thứ cô gái này chạm vào thường sẽ bị hư hỏng hay vỡ tan một cách “bí ẩn”. Cuối cùng, cô được biết đến như là \"chuyên gia phá hủy của phòng thí nghiệm\".<br>Moren luôn ân cần xoa dịu <i class=\"clr-orange\">Wisp</i> bằng những lời hay ý đẹp để khuyến khích cô bé tiếp tục khám phá. Cô tin cha mình và tiếp tục những thử nghiệm của mình, nhưng Max lại là người phải gánh chịu những rắc rối, Max luôn phải phải chịu những vụ nổ bí ẩn, những cú sốc và cả mớ hỗn độn mà <i class=\"clr-orange\">Wisp</i> để lại...<br>\"Đừng lo anh à, đó là những bất cập tự nhiên phải có thôi,\" <i class=\"clr-orange\">Wisp</i> luôn an ủi Max bằng câu nói đó.<br>Trong vòng hai năm, <i class=\"clr-orange\">Wisp</i> đã dần làm chủ được mọi loại máy móc và khả năng của chúng. Cô cũng tìm thấy tư tưởng sống của cuộc đời trong những quả bom, điều đó cũng đồng nghĩa với việc cô phải di chuyển sâu vào núi, ở những nơi ít người sinh sống để thực hiện những thí nghiệm.<br>Đương nhiên, Max rất vui vì điều đó, đồng nghĩa với việc anh sẽ thoát khỏi cơn ác mộng mang tên “em gái”. Nhưng là một người anh, Max vẫn rất lo lắng cho chuyến đi của <i class=\"clr-orange\">Wisp</i>, vì vậy anh đã chế tạo nên một cỗ máy mang tên \"Destructor\", một phương tiện giao thông cơ khí nhưng trở nên vô cùng nguy hiểm khi được nạp đạn.<br>\"Cảm ơn, anh trai!\" <i class=\"clr-orange\">Wisp</i> ngay lập tức trèo lên buồng lái. Max đột nhiên nhớ lại một lỗi chết người mà anh đã không kịp sửa, nhưng đã quá muộn. Destructor tắt ngóm sau một loạt các tiếng ồn kẽo kẹt.<br><i class=\"clr-orange\">Wisp</i> cau mày, \"Cái gì vậy? Anh chế cho em một cái máy lỗi ư? \"<br>\"Đó chỉ là một tai nạn thôi!\" Max trả lời, nhưng anh lại nghĩ, \"tốt thôi, do em chạm vào nó, vậy nên nó mới tan nát vậy”.<br>Cuối cùng thì Moren đã phải lên tiếng: \"Thực tế là, con đã trở thành một thợ cơ khí, vì vậy con nên tự khắc phục nó đi”.<br>\"Dễ như ăn bánh vậy!”, <i class=\"clr-orange\">Wisp</i> dõng dạc đáp, trượt xuống từ Destructor và túm lấy cái chìa khoá từ Max.<br>Ngay sau đó, <i class=\"clr-orange\">Wisp</i> và một Destructor mới đang hoạt động, tiếp tục chuyến phiêu lưu. Cả Moren và Max đều mỉm cười khi nhìn thấy cô bé như vậy. Cuối cùng thì cô bé đã có thể tự lập. Nhưng trước khi cả 2 quay trở về, một vụ nổ làm rung chuyển khu vực và họ có thể nghe <i class=\"clr-orange\">Wisp</i> hét lên, \"Lõi năng lượng nổ rồiiii! Giúp con sửa với!!!\".",
		"hero_skin": [
			{
				"name": "Hiểm Họa Bé Bỏng",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Wisp01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "Wisp01",
			},
			{
				"name": "Hải Tặc Nhí (Bậc A)",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Wisp02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "Wisp02",
			},
			{
				"name": "Wisp Thỏ Siêu Quậy (Năm 2)",
				"gold": "",
				"voucher": "",
				"event": "Mở Sinh nhật lần 2",
				"wall": "Wisp03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "",
			},
		]
	},
	"arum": {
		"hero_id": "Arum",
		"hero_name": "Arum",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Đỡ đòn",
			"special": "Hút máu / Tiền vệ",
			"lane": "Đường Caesar / Đường rồng",
		},
		"main_skill": [
			{
				"name": "Linh thú",
				"info": "Nội tại: Arum triệu hồi linh thú vờn quanh bản thân, gây sát thương phép lên những kẻ địch lân cận, đồng thời giúp Arum hồi máu. Nếu nạn nhân trúng đòn không phải tướng địch, Arum sẽ chỉ được hồi 1% máu tối đa bản thân. Khi Arum đang ở bụi và địch không có tầm nhìn của Arum, địch sẽ không thể nhìn thấy những Linh Thú mà Arum triệu hồi.",
			},
			{
				"name": "Thú kích",
				"info": "ST Gốc: 250/300/350/400/450/500<br>Arum phóng năng lượng lan tỏa ra xung quanh gây 250 (+0.4 công phép) STP lên những kẻ địch lân cận, đồng thời triệu hồi 1 linh thú vờn quanh bản thân, trong thời gian linh thú vờn quanh bản thân, tung chiêu trúng tướng địch giúp giảm thời gian hồi 50%, số lượng linh thú quyết định hiệu lực của Thú sổng; tối đa tồn tại 3 linh thú."
			},
			{
				"name": "Thú sổng",
				"info": "ST Gốc: 500/600/700/800/900/1000<br>Arum lệnh cho linh thú tấn công vùng chỉ định gây 500 STP, đồng thời giúp bản thân tăng tốc chạy trong thoáng chốc, sau khi tấn công linh thú sẽ biến mất khỏi Arum, số lượng linh thú quyết định số lần và hiệu quả công kích; linh thú đầu tiên làm chậm 50% tốc chạy trong 1s, linh thú thứ hai làm chậm 90% tốc chạy trong 1s, linh thú thứ ba gây choáng 1s.",
			},
			{
				"name": "Thú khốn",
				"info": "H.Chiêu: 50/45/40<br>Arum lướt đến trói buộc mục tiêu trong 2.5s, đồng thời lập tức triệu hồi 3 linh thú vờn quanh bản thân, suốt thời gian này cả Arum lẫn nạn nhân đều bất động hoàn toàn dưới tác động của mối liên kết không thể bị phá vỡ, đặc biệt mọi sát thương bất kỳ ai trong cả hai gánh chịu đều sẽ được truyền đến người còn lại.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,2,2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng: Có thể kết hợp với Tốc biến tiếp cận mục tiêu rồi dùng Chiêu 3",
				"info": "2,2,2,3,4,0",
			},
		],
		"skill_note": "<strong class=\"clr-orange\">*Đầu game</strong><br>- Arum là vị tướng khá trâu vì thế có thể chọn đi đường đơn hoặc chơi vị trí hỗ trợ<br>- Từ những cấp độ đầu cố gắng kích hoạt Thú Kích để tích lũy đủ 3 Linh Thú xung quanh người sau đó farm hoặc hù dọa đối phương<br>- Cố gắng di chuyển hợp lệ sao cho 3 Linh Thú này có thể chạm thật nhiều vào quái hoặc đối phương càng tốt vừa có sát thương kha khá vừa hồi lượng máu đủ xài<br>- Vì khoảng cách của Chiêu 3 Thú Khốn khá hẹp nên việc sử dụng rất khó, vì thế bạn có thể dùng Chiêu 2 Thú Sổng để giảm tốc độ hoặc choáng đối phương sao đó di chuyển đến gần và dùng Chiêu 3, hoặc nếu mang theo Tốc Biến thì có thể tiếp cận và dùng Chiêu 3 dễ dàng hơn<br>- Giai đoạn đầu game Arum chưa phải trâu lắm đâu vì thế hãy di chuyển ra vào giao tranh cẩn thận kẻo bốc hơi đó!!<br><br><strong class=\"clr-orange\">*Giữa và cuối game</strong><br>- Về sau cứ tích lũy 3 Linh Thú thì chơi thôi, 1 là dùng để cấu rỉa tầm xa, 2 là xông pha trận mạc, cứ bơi hết vào team đối phương thôi, nhớ là đầu game phải chơi tốt đó 3 4 món cuối là phải bơi<br>- Dùng thật tốt chuổi combo phía trên và kết hợp với Tốc biến để bắt lẻ sát thương chủ lực của địch<br>- Canh me Nakroth, Murad, Zill, The Flash,.. nhào vô là chụp lại bằng Chiêu 3 đừng cho ulti, nên nhớ thời gian của Chiêu 3 giữ chân rất lâu cộng với sự xuất hiện của 3 Linh Thú trở lại, khỏi lo vì tụt huyết áp<br>- Thú Sổng là con bài dùng để cướp Caesar hoặc khả năng hiệu ứng diện rộng vì thế hãy sử dụng nó một cách có tính toán<br>- Thành bại tại Arum khi có cô nàng trong đội hình, cố gắng lên nhé mọi người",
		"skill_special": "TocBien,TrungTri",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim28",
					"info": "Máu tối đa +13.5<br>Tốc chạy +0.7%",
				},
				{
					"name": "NgocXanh22",
					"info": "Máu tối đa +15.7<br>Hồi máu/5s +3.1<br>Giảm hồi chiêu +0.3%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim33",
					"info": "Máu tối đa +45<br>Hồi máu/5s +5.2<br>Tốc chạy +0.4%",
				},
				{
					"name": "NgocXanh34",
					"info": "Máu tối đa +37.5<br>Giảm hồi chiêu +0.6%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đồ rừng",
				"info": "RiuLeviathan,GiayHoVe,KhienThatTruyen,GiapGaia,PhuChuTruongSinh,MatNaBerith",
			},
			{
				"name": "Đường đơn hoặc hỗ trợ",
				"info": "GiayKienCuong,GiapThongKho,GiapGaia,KhienHuyenThoai,GiapHoMenh,PhuChuTruongSinh",
			},
			{
				"name": "Đường đơn hoặc hỗ trợ",
				"info": "NgocDaiPhapSu,GiayKienCuong,KhienThatTruyen,GiapGaia,HuanChuongTroy,GiapThongKho",
			},
			{
				"name": "Game thủ hay lên",
				"info": "NgocDaiPhapSu,GiayHoVe,GiapGaia,SachThanh,KhienHuyenThoai,GiapThongKho",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng bọn",
				"desc": "với thời gian giữ chân con mồi khá lâu để cho Violet bắn thì thôi rồi, với pha Thú Sổng chỉnh chu là điều kiện đê Maloch tiếp đất một chiến lượt hoàn hảo, ngoài ra Arum là tanker mà phù hợp với đại đa số các tướng có sức mạnh vượt trội đứng sau lưng và xã đạn thôi :P",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "wisp", "id_page": "Wisp"},
					{"hero_id": "lindis", "id_page": "Lindis"},
					{"hero_id": "liliana", "id_page": "Liliana"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "rất ái ngại với các vị tướng câm lặng, choáng hoặc giữ chân tầm xa, tránh xa nhé!!",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "liliana", "id_page": "Liliana"},
				]
			}
		],
		"hero_story": "\"Leo, hình như ta hơi bướng bỉnh nhỉ?\"<br>Cảm nhận sự ấm áp từ chú sư tử, <i class=\"clr-orange\">Arum</i> cuối cùng cũng bình tĩnh lại. Không hạnh phúc từ khi dính vào một cuộc hôn nhân sắp đặt, chạy trốn sẽ gây ra nhiều rắc rối và đau khổ cho cha cô. Mệt mỏi về cả tinh thần và thể xác, cuối cùng cô quyết định sẽ nghỉ ngơi trong rừng, một nơi mà cô gọi là nhà, bên cạnh Leo, chú sư tử mà cô dành tất cả sự tin tưởng.<br>Cách đây 10 năm, <i class=\"clr-orange\">Arum</i> đến Tamuq cùng người cha Varian vì ông được đảm nhận vai trò là người bảo vệ. Ông đã nhanh chóng được thăng cấp và có được một vị trí Tướng lĩnh trong Hội đồng Liên bang. Tuy nhiên, cuộc sống vẫn không hề yên bình. Mâu thuẫn giữa Liên đoàn cùng khu rừng Verno leo thang và Tamuq, một thị trấn nhỏ không may nằm ở vùng biên giới, đã trở thành địa điểm lý tưởng cho cả hai phe chiếm đóng.<br><i class=\"clr-orange\">Arum</i> là một cô gái chu đáo và thấu hiểu, và cô biết những áp lực đang đè nặng lên người cha của mình. Nhưng làm thế nào mà cô có thể vứt bỏ tình yêu của mình dành cho khu rừng Verno, nơi cô đã gặp và cứu vớt Leo, cùng bản hiệp ước của người giám hộ Hội Sư Tử, chỉ để giúp đỡ cha cô? Đã có nhiều kẻ tỏ thái độ thù địch với <i class=\"clr-orange\">Arum</i> bởi vị trí quá đặc biệt của cô, an toàn sau hàng rào chắn. Nếu không nhờ danh tiếng của người cha Varian, có lẽ <i class=\"clr-orange\">Arum</i> đã bị đưa vào tù vì thông đồng với kẻ địch.<br>Thị trấn đang dần bị đẩy tới bờ vực chiến tranh, Varian buộc <i class=\"clr-orange\">Arum</i> phải cưới Rahms. Tất cả để cho cô được an toàn, <i class=\"clr-orange\">Arum</i> biết, vì cha cô không hề mong đợi một cuộc chiến giữa hai chủng tộc, và cách duy nhất để giữ cô an toàn gả cô cho Rahms, kẻ duy nhất có dòng máu quý tộc ở Tamuq. Sau khi cưới Rahms, <i class=\"clr-orange\">Arum</i> sẽ có được tất cả các quyền miễn trừ dành cho tầng lớp quý tộc và không còn bị nhắm tới bởi những cáo buộc từ công chúng. Điều đó sẽ cho cô một tương lai tươi sáng và an toàn hơn, ngay cả khi Rahms không phải là người đàn ông tuyệt vời.<br>Tuy nhiên, <i class=\"clr-orange\">Arum</i> đã bỏ trốn, kế hoạch Varian đã trở thất bại và cả thị trấn dần đánh mất lòng tin từ ông. Họ tin rằng ông đã sắp xếp điều này để cho con gái mình có cơ hội bỏ trốn vào khu rừng Verno. \"Kẻ phản bội vô liêm sỉ,\" cả thị trấn giận dữ kêu lên. Họ quyết định bỏ tù Varian, và ông chỉ biết cố gắng biện minh cho những hành động của mình.<br><i class=\"clr-orange\">Arum</i> đau khổ - quá đau khổ. Cuối cùng, cô quay trở về nhà để thấy rằng cha cô đã không còn ở đó - chỉ có những người bảo vệ đang chờ. Sau khi biết cha cô đã bị đưa đến nhà tù, <i class=\"clr-orange\">Arum</i> đầu hàng với một điều kiện: cô phải được ở chung với cha của mình. Những người bảo vệ đồng ý và đưa cô đi.<br><i class=\"clr-orange\">Arum</i> gặp lại cha trong ngục tù. Không còn là một vị tướng vĩ đại và kiêu hãnh, Varian giờ đây trông thật sầu thảm và vô hồn. Chính lúc đó, <i class=\"clr-orange\">Arum</i> cảm thấy trái tim mình như vỡ ra từng mảnh.<br>\"Ôi con, sao con lại trở về? Họ ... họ sẽ treo cổ cả 2 mất!\"<br>\"Con xin lỗi, Cha. Hai ta sẽ không ở đây nếu con không bướng bỉnh và ích kỷ,\" <i class=\"clr-orange\">Arum</i> khóc nấc, quỳ trước mặt cha cô và nhớ lại những hành động thiếu suy nghĩ của mình.<br>\"Không, ta mới là người có lỗi. Nếu cha không buộc con kết hôn, con sẽ không…\"<br>\"Cha ơi, đừng khóc! Hãy tin con, con sẽ đưa cha ra khỏi đây!\"<br>Sự quyết tâm cao độ đã vượt qua khả năng tầm thường của <i class=\"clr-orange\">Arum</i>. Đây là lần đầu tiên cô có thể triệu hồi sức mạnh, sức mạnh vô hạn mà cô đã thừa hưởng từ những linh hồn thần thú. Mọi thứ dần thay đổi. Trong khoảng không, những con thú hoang xuất hiện dưới chân cô, tỏa ra ánh hào quang, nhìn chằm chằm vào bóng tối. Varian từ lâu đã biết mối quan hệ của con gái mình với Woods, nhưng không bao giờ nghĩ rằng cô có khả năng kiểm soát những sức mạnh bí ẩn đó.<br>Trong vài giây ngắn ngủi, tất cả sức mạnh của những linh hồn thần thú đã xuất hiện trên <i class=\"clr-orange\">Arum</i>, biến cô trở thành Người giám hộ Sư tử. <i class=\"clr-orange\">Arum</i> bây giờ đã là thành viên của Woods, và cô không còn là con người. <i class=\"clr-orange\">Arum</i> chưa từng cố gắng để sử dụng năng lực của mình, không biết làm thế nào để giải thích cho cha mình, nhưng khoảnh khắc này ép buộc cô cần có những hành động quyết liệt. Cô cần quyền năng để thoát khỏi nhà tù, để đánh bại tất cả, và để cứu người cha yêu quý của cô!<br>\"Hỡi linh hồn của những thần thú, đã đến lúc chiến đấu!”",
		"hero_skin": [
			{
				"name": "Nữ Vương Linh Thú",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Arum01",
				"disable": "",
				"img": "thumb1.jpg",
				"video": "Arum01",
			},
			{
				"name": "Thú Vệ Cổ Mộ (Bậc A)",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Arum02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "Arum02",
			},
			{
				"name": "Vũ Khúc Long Hổ (Bậc SS)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Arum03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "Arum03",
			},
		]
	},
	"rourke": {
		"hero_id": "Rourke",
		"hero_name": "Rourke",
		"main_info": {
			"price_gold": "25,888",
			"price_voucher": "599",
			"price_text": "",
			"position": "Đấu sĩ / Xạ thủ",
			"special": "Tiền đạo / Trung phong",
			"lane": "Đi rừng",
		},
		"main_skill": [
			{
				"name": "Tán xạ",
				"info": "Nội tại: Nỏ của Rourke bắn ra mũi tên đặc biệt khiến nạn nhân tướng địch trúng phải sẽ bị giảm giáp trong 6s, cộng dồn tối đa 12 lần; gây 50% tổng công vật lý + 40% x sát thương các mũi tên cộng dồn (công trình không phải chịu sát thương thêm từ các mũi tên này), chỉ các đòn đánh xen kẽ giữa các mũi tên đặc biệt có thể gây chí mạng hoặc kích hoạt hiệu ứng đi kèm đòn đánh.<br>Sát thương đòn đánh thường lên trụ：100%.",
			},
			{
				"name": "Đoạt mệnh nỏ",
				"info": "H.Chiêu: 8/7.6/7.2/6.8/6.4/6<br>Rourke tăng 40% tốc chạy trong 4 giây, đồng thời bắn ra mũi tên đặc biệt trong đòn đánh kế, gây 225 (+0.75 công vật lý) sát thương vật lý mỗi mũi. Nạn nhân trúng 4 mũi tên này sẽ bị giảm tốc chạy."
			},
			{
				"name": "Xung phong",
				"info": "ST Gốc: 180/200/220/240/260/280<br>H.Chiêu: 10/9.4/8.8/8.2/7.6/7<br>Rourke anh dũng lướt tới trước gây 180 STVL kèm hiệu ứng đẩy lùi trong một vùng nhỏ, đồng thời lập tức thắng lại, nếu có nạn nhân tướng địch trúng chiêu sẽ giúp Rourke giảm 2s hồi chiêu này.",
			},
			{
				"name": "Càng chiến càng hăng",
				"info": "Lá chắn: 1200/1800/2400<br>H.Chiêu: 60/55/50<br>ST thêm: 50/100/150<br>Tăng giáp: 120/180/240<br>Rourke loại bỏ mọi trạng thái khống chế hiện tại, đồng thời tự tạo lá chắn giúp chặn 1200 ST, chừng nào lá chắn còn tồn tại, Rourke còn được miễn nhiễm các trạng thái khống chế, và khiến mọi đòn đánh hoặc chiêu thức chuyển hóa 50% sát thương gây ra thành giá trị cộng thêm cho lá chắn (20% hiệu lực lên lính và quái); tối đa lên đến 150% giá trị lá chắn gốc, đặc biệt ngay tại thời điểm tung chiêu Rourke còn được tăng công vật lý và giáp; hiệu ứng kéo dài 6s.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game 1 (có thể kết hợp với Trừng trị)",
				"info": "0,2,3,0",
			},
			{
				"name": "*Combo đầu game 2 (có thể kết hợp với Trừng trị)",
				"info": "3,0,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng: (có thể kết hợp với Trừng trị)",
				"info": "0,2,3,4,2,0",
			},
		],
		"skill_note": "<strong class=\"clr-orange\">*Đầu game</strong><br>- Là một Xạ thủ kiêm Đấu sĩ đầu game khá mạnh, hãy mang theo phép bỗ trợ Trừng trị để đi rừng mình hoặc có thể cướp cả rừng đối phương.<br>- Cố gắng dọn quái rừng đường Rồng trước, sau đó di chuyển ăn Dơi và kiểm soát bản đồ càng sớm càng tốt.<br>- Dame tay đầu game Rourke khá mạnh, hãy tận dụng các bụi gậm để bất ngờ tấn công các đối thủ dâng cao.<br>- Cố gắng kêu gọi đồng đội ăn Rồng từ sớm vì Rourke ăn khá nhanh, thậm chí còn hơn cả Fennik.<br>- Dọn rừng nhanh chóng nhưng đừng quên đi gank các land nhé!!<br><br><strong class=\"clr-orange\">*Giữa và cuối game</strong><br>- Thời gian này Rourke mạnh hơn nhiều với một số trang bị cuối, hãy chủ động tạo lợi thế và mở các cuộc giao tranh, Rourke cứ bơi thôi!!<br>- Từ khoảng độ cấp 10 trở lên và lợi thế nghiên về đội mình, hãy kêu gọi đồng đội tổ chức ăn Caesar, Rourke có thể làm được.<br>- Chiêu 1 sẽ mang lại tốc chạy kha khá, Chiêu 2 tăng khả năng áp sát mục tiêu và 1 chút khống chế, Chiêu 3 loại bỏ mọi hiệu ứng, còn gì mà không bơi vào cuối game nửa, đừng ngần ngại!!",
		"skill_special": "TrungTri,TocBien",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim27",
					"info": "Tốc đánh +0.4%<br>Tỷ lệ chí mạng +0.3%<br>Tốc chạy +0.5%",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo36",
					"info": "Công vật lý +2<br>Xuyên giáp +3.6",
				},
				{
					"name": "NgocTim31",
					"info": "Công vật lý +1.6<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đi rừng",
				"info": "CungBaoTo,GiayKienCuong,KiemFafnir,KiemMuramasa,NanhFenrir,HuanChuongTroy",
			},
			{
				"name": "Đi rừng",
				"info": "CungBaoTo,GiayHoVe,ThuongLonginus,AoChoangBangGia,KiemFafnir,KiemMuramasa",
			},
			{
				"name": "Đi rừng",
				"info": "CungBaoTo,GiayDuMuc,ThuongXuyenPha,QuyKiem,NanhFenrir,KiemFafnir",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng bọn",
				"desc": "cùng Dòng chảy thời không của Alice thì bá đạo rồi, với Điêu Thuyền được buzz lại thời gian choáng lâu nên Rourke thêm bá, Payna thì hồi máu nhiệt tình đứng bắn thôi, Luyện ngục của Maloch làm cho đối phương phải dè chừng nên Rourke tha hồ bơi, Hồi sinh từ TeeMee còn gì phải ngại, nhiều tướng khác nhiều khả năng khống chế mang lại nhiều lợi thế cho Rourke!!",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "dieu_thuyen", "id_page": "DieuThuyen"},
					{"hero_id": "payna", "id_page": "Payna"},
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "teemee", "id_page": "TeeMee"},
					{"hero_id": "lumburr", "id_page": "Lumburr"},
					{"hero_id": "ormarr", "id_page": "Ormarr"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "nên đề phòng Arum với chiêu cuối của cô ta, một khi bị giữ chân lại thì khả năng bốc hơi rất cao, ngoài ra tránh bị một số tướng cấu máu từ xa, mất nhiều máu trước khi vào giao tranh làm giảm khả năng bơi của Rour!!",
				"info": [
					{"hero_id": "arum", "id_page": "Arum"},
				]
			}
		],
		"hero_story": "“Chớ để thế giới thay đổi nụ cười của bạn. Hãy để nụ cười ấy đổi thay cả thế giới.”<br>Người ta thường quên rằng <i class=\"clr-orange\">Rourke</i> - vị quận trưởng luôn rạng rỡ đầy sức sống - đã từng là là một chiến binh quả cảm, cho đến khi họ nhìn thấy những vết sẹo trên tay của anh. Nói không ngoa, kể về chiến tích của chàng nỏ thủ Pháo đài Casanova này thì có đến tết cũng chưa hết, thế nên tóm lại cho nhanh: anh trỗi dậy như một thế lực sau hàng trăm cuộc chiến, một trong số đó chính là trận Bashkir trứ danh. Thật, các chiến tích có dính đến tên <i class=\"clr-orange\">Rourke</i> mà được chồng lên nhau thì đảm bảo cao hơn anh là cái chắc.<br>Hào hùng là thế, nhưng đời <i class=\"clr-orange\">Rourke</i> lại khốn khổ vô cùng khi từng thành viên của gia đình anh không tử trận vì chiến tranh, thì cũng mất vì nạn đói. Thế gian chỉ biết đến chiến thắng Bashkir vang dội, nhưng nào có hay đây là nơi chiến hữu thân cận của anh - tay vẫn nắm chặt thanh gươm kết liễu vô số kẻ địch -  đã trút hơi thở cuối cùng.<br>Nào chỉ có thế, sau đó khi <i class=\"clr-orange\">Rourke</i> cố bảo vệ Nhân tộc khỏi lời nguyền của kẻ thù đã buộc hi sinh cánh tay phải của mình trước khi nó kịp tước lấy mạng sống của anh. “Mà này, chúng ta thắng phải không nào?” <i class=\"clr-orange\">Rourke</i> lên tiếng, và những người xung quanh anh thở phào nhẹ nhõm. Họ đã lo rằng chàng dũng sĩ rạng rỡ ngày nào nay sẽ suy sụp, nhưng hóa ra anh vẫn tràn đầy lạc quan như mọi khi.<br>Theo luật định bởi Astrid, Bá tước Hỏa hồng, <i class=\"clr-orange\">Rourke</i> được ban thưởng một cơ ngơi bạt ngàn sau khi hồi hương từ chiến trường. Người khác có thể an hưởng đời hưu trí đầy xa hoa nhung lụa này, nhưng với một <i class=\"clr-orange\">Rourke</i> vẫn mãi truy cầu cuộc sống cho đáng ra sống thì câu trả lời là hoàn toàn không.<br>Thế nên chẳng lấy gì làm lạ khi <i class=\"clr-orange\">Rourke</i> hiến tặng ẩn danh cả cơ ngơi này đến gia đình những chiến hữu đã hi sinh nơi chiến trường, rồi khăn gói lên đường đến Liên bang Tự do với bức thư tiến cử từ nữ Bá tước, và chọn làm Quận trưởng của một thị trấn heo hút chốn biên cương.<br>Để cảm tạ thành tâm tiếp nhận cương vị này, các nghệ nhân của Liên bang đã chế tác ra một bộ nỏ máy vừa khớp với những gì còn lại của cánh tay phải <i class=\"clr-orange\">Rourke</i>, giúp anh có thể tiếp tục chiến đấu như xưa. “Đây sẽ là quê hương của ta. Tạm biệt quá khứ, chào mừng cuộc sống mới,” <i class=\"clr-orange\">Rourke</i> thốt lên. Anh yêu nơi chốn này, và mọi người đều có thể cảm nhận được điều đó qua những nụ cười nồng hậu của anh.<br>Dân làng lập tức phải lòng chàng Quận trưởng này. Ai lại có thể cưỡng lại nỗi sự cuốn hút của một viên chức khác biệt với tất thảy, luôn bừng bừng tỏa sáng mang lại hạnh phúc mọi nơi anh đến. Tuy nhiên, khi thực thi sứ mệnh thì chớ có kẻ nào dám đùa với chàng dũng sĩ này, bởi dù gì thì gì, chỉ hoan hỉ suông thì há có thể giữ gìn được trật tự.<br>Sự khởi xướng của Cục công thương cùng mối quan hệ ngày càng tốt đẹp hơn giữa Liên bang Tự do và Rừng Verno đã mang lại “Thông thương lộ”, một con đường mới được thành lập chạy xuyên thẳng qua thị trấn nhỏ của <i class=\"clr-orange\">Rourke</i>. Sự bùng nổ thương mại mang lại của cải trù phú cùng dân cư đông đúc, nhưng đồng thời rắc rối cũng từ đấy mà ngày càng leo thang.<br>“Ngoài kia ngươi có thể chơi loạn luật, tại đây luật chỉ có một: chính là ta!” để tránh mọi thứ vượt khỏi tầm kiểm sát, <i class=\"clr-orange\">Rourke</i> quyết tiên hạ thủ vi cường tỏ rõ lập trường trước những kẻ nhập cư. Anh có một và chỉ một mục tiêu: giữ gìn an toàn và quyền lợi của cư dân thị trấn này, cũng như đảm bảo mọi hoạt động kinh doanh đều hợp pháp và đúng mực.<br>Nỗ lực của anh đã được đền đáp. Không một kẻ mới đến dám dính líu bật kỳ hoạt động mờ ám nào, trừ khi chúng muốn bị nghiền nát bởi vị <i class=\"clr-orange\">Rourke</i> trong một nốt nhạc. Trật tự được duy trì, và anh vẫn là <i class=\"clr-orange\">Rourke</i> của ngày hôm nay, một vị Quận trưởng đáng kính mến.<br>“Ngươi muốn dùng vũ lực giải quyết vấn đề? Khỏi lo, ta sẽ giải quyết NGƯƠI!”",
		"hero_skin": [
			{
				"name": "Quận Trưởng Lạc Quan",
				"gold": "25,888",
				"voucher": "599",
				"event": "",
				"wall": "Rourke01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "Rourke01",
			},
			{
				"name": "Pháo Thủ Tuộc Neo",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Rourke02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "Rourke02",
			},
			{
				"name": "Biệt Đội Siêu Hùng (Bậc S)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Rourke03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "Rourke03",
			},
		]
	},
	"marja": {
		"hero_id": "Marja",
		"hero_name": "Marja",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Pháp sư / Đỡ đòn",
			"special": "Hút máu",
			"lane": "Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Hồn chú",
				"info": "Nội tại: Với mỗi 2% máu bị mất, Marja nhận 1% hút máu và hút máu phép, ngoài ra đòn đánh và kĩ năng của Marja còn làm chậm mục tiêu, máu mất càng nhiều làm chậm càng mạnh.",
			},
			{
				"name": "Sóng thống khổ",
				"info": "ST Gốc: 350/440/530/620/710/800<br>H.Chiêu: 8/7.6/7.2/6.8/6.4/6<br>Marja vung tay phóng làn sóng ma mị về phía trước công kích kẻ địch, gây 350 (+0.52 công phép) STP và làm chậm nạn nhân trúng chiêu 40% trong 2s, bất cứ kẻ địch nào rơi vào tầm đánh của làn sóng này đều phải chịu tác động của nó."
			},
			{
				"name": "Phệ hồn trùng",
				"info": "ST Gốc: 350/420/490/560/630/700<br>H.Chiêu: 5/5/5/5/5/5<br>Marja triệu hồi một bầy yêu trùng tấn công lên những kẻ địch lân cận gây 350 (+0.55 công phép) STP, càng nhiều đối tượng xung quanh Marja, càng nhiều yêu trùng được sinh ra.",
			},
			{
				"name": "Ác hồn",
				"info": "ST Gốc: 50/120/190<br>H.Chiêu: 24/24/24<br>Marja hóa thân thành Oán hồn vực thẳm, giúp bản thân được tăng 30% tốc chạy và không thể bị chọn làm mục tiêu trong 2s, khi hóa thân và hoàn hồn, cô nàng gây 300 (+0.45 công phép) STP lên kẻ địch lân cận, đặc biệt tại khoảnh khắc hóa thân, Marja trở nên bất khả xâm phạm và phá bỏ mọi hiệu ứng khống chế tồn tại trước đó.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game 1",
				"info": "3,0,2,0",
			},
			{
				"name": "*Combo đầu game 2",
				"info": "2,0,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,0,2,0,4,3,2,0",
			},
		],
		"skill_note": "<strong class=\"clr-orange\">*Đầu game</strong><br>- Là một cô nàng hơi hướng Pháp sư và Tank vì thế đường nào cũng đi được ưu tiên Giữa nhé!!<br>- Mất càng nhiều máu thì càng mạnh mẻ thế nhưng đừng cho máu tuột xuống 0 nhé!! Kết hợp chiêu thức và đánh thường mang lại khả năng hút máu rất cao.<br>- Đẩy lính nhanh và di chuyển sang các đường khác hổ trợ.<br>- Khi có chiêu cuối Ác Hồn đó là thời khắc không sợ trời đất, hóa giải hầu hết mọi chiêu thức một trong số đó như: Bơm cười của Joker, Ảo ảnh trảm của Murad,...<br><br><strong class=\"clr-orange\">*Giữa và cuối game</strong><br>- Giai đoạn này Marja càng bá hơn nửa, khả năng trâu bò của cô ta sắp đến ngưỡng vì thế đừng ngần ngại giao tranh, bơi hết vào!!<br>- Ác Hồn là chiêu tiếp cận dame chủ lực của địch tuyến sau, hoặc khô máu xong dùng nó bỏ chạy cũng được, hãy suy nghĩ trước khi dùng nó!!<br>- Cuối game cố gắng hạ bệ một số thanh niên máu giấy nhanh nhất có thể, phá trụ và kết thúc với ống máu còn đầy nào!!",
		"skill_special": "TocBien,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim22",
					"info": "Công phép +1.4<br>Hút máu phép +0.8%<br>Giáp phép +1.6",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim37",
					"info": "Hút máu phép +1.6%",
				},
				{
					"name": "NgocXanh33",
					"info": "Công phép +2.4<br>Giảm hồi chiêu +0.7%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường giữa hoặc đường trên dưới",
				"info": "QuyenTruongRhea,GiayKienCuong,TruongBang,GiapGaia,KhienHuyenThoai,PhuChuTruongSinh",
			},
			{
				"name": "Đường giữa hoặc đường trên dưới",
				"info": "QuyenTruongRhea,GiayHoVe,TruongBang,GiapGaia,GuomHienTriet,KhienThatTruyen",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng bọn",
				"desc": "lấy lợi thế tiếp cận đối phương nhờ Chiêu Cuối của Alice, sau một tràng bung lụa hết sát thương việc còn lại giao cho các thánh vét máng như Butterfly hay Ngộ Không, Chiêu Cuối Maloch và TeeMee khá hữu ít trong việc giúp Marja tiếp cận mục tiêu!!",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "butterfly", "id_page": "Butterfly"},
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "teemee", "id_page": "TeeMee"},
					{"hero_id": "ngo_khong", "id_page": "NgoKhong"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "sợ nhất các chiêu thức cấu máu và khống chế tầm xa, hoặc có thể giữ chân cô ta quá lâu, khiến khả năng hút máu không còn hoạt động tốt nửa!!",
				"info": [
					{"hero_id": "arum", "id_page": "Arum"},
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "liliana", "id_page": "Liliana"},
					{"hero_id": "raz", "id_page": "Raz"},
				]
			}
		],
		"hero_story": "“Thứ không thể giết được ta chỉ khiến ta mạnh mẽ hơn”<br>Quý tiểu thư lừng danh chốn Veda, nghệ nhân trong giới nghệ sĩ, học đồ xuất sắc của Edras, Ma pháp sư xuất chúng của Veda… là những mỹ danh về nàng <i class=\"clr-orange\">Marja</i> mà cả thế giới đều yêu mến. Ngay cả Volkath, một tù binh của Edras, cũng bỏ qua những thành kiến và sự căm hờn Veda để quyết tâm theo đuổi mối tình với nàng thơ <i class=\"clr-orange\">Marja</i>.<br>Quả cảm và đầy mưu trí, Volkath nhanh chóng chiếm được trái tim của <i class=\"clr-orange\">Marja</i> và cả hai yêu nhau say đắm bất chấp mọi chống đối. Nhưng đời chẳng như mơ, mối tình này há lại có thể hạnh phúc bên nhau khi lý tưởng của họ, quốc gia của họ đều đối lập nhau hoàn toàn. Rồi một ngày nọ giữa Volkath và Edras xảy ra mâu thuẫn gay gắt, nàng <i class=\"clr-orange\">Marja</i> đáng thương rơi vào tình thế cực kỳ khó xử. Giữa người đã dạy dỗ đặt hết niềm tin vào mình và người mình yêu, nàng biết phải chọn ai bây giờ.<br>Lẽ dĩ nhiên tất cả tộc nhân Veda đều đồng lòng quyết ý trong công cuộc chống quân thù, thế nên việc <i class=\"clr-orange\">Marja</i> vẫn còn lưỡng lự giữa hai đàng là chuyện không thể chấp nhận được. Dẫu vẫn còn đó Edras thấu hiểu và cảm thông cho <i class=\"clr-orange\">Marja</i>, nhưng tất cả còn lại đều xem nàng như một kẻ phản bội. Trớ trêu thay <i class=\"clr-orange\">Marja</i> lại là một cô gái bướng bỉnh, thế nên khi thế giới càng tạo sức ép, thì nàng lại càng kiên định hơn trước sự lựa chọn của bản thân.<br>Cuộc chiến tiếp diễn hàng ngàn năm cho đến khi Edras qua đời còn Volkath rút lui với trọng thương. Giờ thì toàn thể Veda đều căm ghét <i class=\"clr-orange\">Marja</i>. Ngôi vị kế thừa Edras chỉ còn là dĩ vãng, thay vào đó tất cả đều buộc tội <i class=\"clr-orange\">Marja</i> thông đồng với quân thù để hãm hại quốc vương.<br>Bằng chứng về sự cấu kết này đã được tộc Veda lôi ra ánh sáng, chính tay <i class=\"clr-orange\">Marja</i> là kẻ trợ giúp Volkath nhận được thứ sức mạnh lẽ ra hắn không bao giờ được có, và chính <i class=\"clr-orange\">Marja</i> cũng thú nhận điều này. “Đúng là tôi đã trợ giúp Volkath, nhưng đấy là trước khi cuộc chiến này diễn ra,” nàng cố giải thích. “Tôi chưa bao giờ có ý muốn chống lại Veda – Tất cả những gì tôi làm là ủng hộ niềm tin của chàng, và chỉ thế mà thôi. Làm sao tôi có thể vì chàng mà hãm hại Ngài Edras cơ chứ--“<br>Đám đông thịnh nộ chẳng để cô dứt lời. Bản án được phán quyết ngay lập tức, và <i class=\"clr-orange\">Marja</i> sẽ phải chịu sự trừng phạt dưới tay của Ilumia, nhà lãnh đạo mới.<br>“Tước vị, quyền năng, tất cả sẽ bị loại khỏi tay ngươi. Ngươi sẽ phải dành hết đời trong ngục tối, nơi lũ bọ sẽ thực hiện nốt bản án và gặm nhấm tất cả những gì còn sót lại. Đó là cái giá ngươi phải trả cho mối tình của mình. Thật ngọt ngào phải không nào? Ta ghen tị đến chết mất thôi!” Ilumia cười phá lên khi cuối cùng cũng trả được mối hận sau bao thế kỷ mỏi mòn trông đợi Volkath, để rồi tất cả chỉ là tình đơn phương.<br><i class=\"clr-orange\">Marja</i> chẳng buồn bận tâm đến những lời lẽ cay nghiệt của Ilumia, vì giờ đây tranh cãi cũng nào có nghĩa lý chi. Thất vọng vì phản ứng tẻ nhạt trước mắt, Ilumia ngoay ngoắt rời đi. Lũ bọ hắc ám của Ngục huyễn tưởng bắt đầu ló mặt, sẵn sàng cho bữa tiệc thịnh soạn của đời chúng. Nàng <i class=\"clr-orange\">Marja</i> đơn độc đầy phiền muộn, mỹ vị trần gian là đây chứ là đâu! Nhưng, thành thật mà nói thì nàng ta trông cũng hơi đáng sợ đến mức kể cả lũ bọ cũng buộc phải bày tỏ quan ngại sâu sắc.<br>“Đến đây cùng xơi ta ngất ngây! Nếu các ngươi không chén sạch, thì ta biết rời chốn này thế nào đây,” <i class=\"clr-orange\">Marja</i> cất tiếng an ủi lũ bọ đang khiếp hãi.<br>Do bản án được thi hành quá vội vã, thế gian chẳng thể nào biết bằng cách nào <i class=\"clr-orange\">Marja</i> đã giúp Volkath vượt qua Ngục huyễn tưởng để đột nhập vào Vực không đáy và đạt được sức mạnh hắc ám từ Lokheim . Chính bản thân <i class=\"clr-orange\">Marja</i> cũng nhận được những quyền năng ma thuật từ Volkath, một trong những món quà hiếm hoi hắn dành tặng cho cô. Dẫu chẳng còn là nữ thần hùng mạnh, <i class=\"clr-orange\">Marja</i> vẫn sẵn sàng. Tất cả chỉ là vấn đề thời gian. Sớm thôi, cô sẽ trỗi dậy.<br>“Ngày mà ta phán xét các ngươi đã gần kề.”",
		"hero_skin": [
			{
				"name": "Oán Hồn Vực Thẳm",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Marja01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "Marja01",
			},
			{
				"name": "Linh Xà Tư Tế (Bậc A)",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Marja02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "Marja02",
			},
		]
	},
	"roxie": {
		"hero_id": "Roxie",
		"hero_name": "Roxie",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Đỡ đòn / Đấu sĩ",
			"special": "Cấu rĩa",
			"lane": "Đường Caesar",
		},
		"main_skill": [
			{
				"name": "Cuốc lửa",
				"info": "Nội tại: Mỗi 40 máu tối đa Roxie có, cô được tăng thêm 1 công phép.<br>Đòn đánh thường thứ ba lên kẻ địch sẽ giúp Roxie hồi 8% năng lượng tối đa, và đánh dấu Cuốc lửa lên nạn nhân trong 5 giây.",
			},
			{
				"name": "Patin lửa",
				"info": "H.Chiêu: 5<br>Roxie tự tiêu hao năng lượng trong 5 giây để duy trì vệt lửa dưới đôi patin khiến mọi nơi cô lướt qua đều bùng cháy trong 2.5 giây. Tàn lửa gây 20/26/32/38/44/50（+0.14 công phép) sát thương phép mỗi nửa giây lên các đơn vị trong vùng ảnh hưởng, tối đa cộng dồn ba lần. Nếu nạn nhân đang chịu dấu ấn Cuốc lửa thì Roxie sẽ được hồi 1% máu tổn thất (2% nếu là tướng). Hiệu ứng hồi phục không cộng dồn.<br>Trong 2.5 giây sau khi kích hoạt, sát thương và hiệu ứng hồi máu tăng gấp đôi."
			},
			{
				"name": "Ba lô lửa",
				"info": "Hồi chiêu: 10/9.6/9.2/8.8/8.4/8 giây<br>Roxie tăng 25% tốc chạy và tạo lá chắn lửa giúp chặn đứng 150 (6% máu tối đa bản thân) sát thương trong 3 giây. Suốt thời gian này kẻ địch va phải Roxie sẽ bị làm chậm 50% trong 2 giây.",
			},
			{
				"name": "Keo lửa",
				"info": "ST Gốc: 75/100/125<br>H.Chiêu: 35/31/27 giây<br>% máu hiện tại: 4%/5%/6%<br>Agnie bay đến lôi mục tiêu đầu tiên tóm được về phía bản thân trong 1.5 giây ~ 2.5 giây và giúp Roxie làm mới thời gian hồi Patin lửa, đồng thời khắc dấu ấn cuốc lửa lên nạn nhân và gây 75 (+4% máu hiện tại mục tiêu) STP sau khi chiêu kết thúc, suốt thời gian này Roxie đi đâu nạn nhân sẽ bị kéo theo đó, thậm chí có thể kéo vượt địa hình, bù lại nạn nhân được miễn nhiễm với các hiệu ứng khống chế.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game (kết hợp Tốc biến tiếp cận mục tiêu)",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng (kết hợp Tốc biến tiếp cận mục tiêu)",
				"info": "2,3,0,4,0",
			},
		],
		"skill_note": "<strong class=\"clr-orange\">*Đầu game</strong><br>- Là một Đấu sĩ tự do vì thế Đường Caesar khá phù hợp với cô nàng, mang theo Tốc biến hoặc Bộc phá để tiếp cận hoặc tăng khả năng đột biến của cô.<br>- Tăng Patin lửa trước hết để dọn dẹp lính hoặc solo với đối phương, nên để ý thanh mana rất nhanh hết đó!!<br>- Kết hợp Patin lửa với Đánh thường tạo dấu ấn cuốc lửa lên đối thủ tăng sát thương và hồi máu cho cô nàng.<br>- Khi có chiêu cuối Keo lửa, hãy kết hợp với rừng, hoặc đồng đội lên ganh kéo, chia cắt đội hình đối phương và tiêu diệt.<br><br><strong class=\"clr-orange\">*Giữa và cuối game</strong><br>- Giữa game Roxie hoàn thành 2 đến 3 trang bị chính, lúc này khả năng trâu bò cộng với lượng mana rất nhiều từ trang bị Roxie có thể bơi vào đội hình đối phương rồi, nên để ý thanh mana thôi, không ổn thì bơi ra nhé, giày Patin mà chạy nhanh lắm :D<br>- Keo lửa rất có ít và thú vị, kéo và chia cắt đối phương với đồng đội và tiêu diệt, trường hợp hi hữu, Roxie có thể kéo hẳn Đấu sĩ hoặc tank đối phương ra khỏi giao tranh để đồng đội mình chiến mà không có tank bên địch, hoặc cơ bản nhất là tiếp cận dame chủ lực địch kéo và tiêu diệt như Xạ thủ hoặc Pháp sư!! Cơ bản quá nhĩ :D<br>- Keo lửa troll game rất vui, có thể kéo vượt địa hình luôn, kéo tướng, kéo bùa đỏ, bùa xanh,... đừng kéo Caesar với Rồng nhé nó không ra khỏi hang được đâu @@!<br>- Nghe nói Roxie có thể cân 2 Omen và Zuka, các bạn có tin hem, kiểm chứng nha!! :D",
		"skill_special": "TocBien,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim28",
					"info": "Máu tối đa +13.5<br>Tốc chạy +0.7%",
				},
				{
					"name": "NgocXanh22",
					"info": "Máu tối đa +15.7<br>Hồi máu/5s +3.1<br>Giảm hồi chiêu +0.3%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo37",
					"info": "Tốc đánh +1%<br>Máu tối đa +33.7<br>Giáp +2.3",
				},
				{
					"name": "NgocTim33",
					"info": "Máu tối đa +45<br>Hồi máu/5s +5.2<br>Tốc chạy +0.4%",
				},
				{
					"name": "NgocXanh34",
					"info": "Máu tối đa +37.5<br>Giảm hồi chiêu +0.6%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường Caesar",
				"info": "KhienHuyenThoai,GiayKienCuong,TruongBang,GuomHienTriet,GiapGaia,GiapHoMenh",
			},
			{
				"name": "Đường Caesar",
				"info": "KhienHuyenThoai,GiayHoVe,TruongBang,GuomHienTriet,HuanChuongTroy,GiapThongKho",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng bọn",
				"desc": "với Patin lửa cộng với lượng sát thương lớn từ Slimz và Kriknak sẽ khiến đối phương bắt ngờ và đột tử, khả năng khống chế và slowmotion của Alice và Mina đủ để Roxie đốt cháy kẻ thù, đốt cho tới chết lại được hồi sinh khi cộng sự cùng TeeMee quả thật thú vị,...",
				"info": [
					{"hero_id": "slimz", "id_page": "Slimz"},
					{"hero_id": "natalya", "id_page": "Natalya"},
					{"hero_id": "kriknak", "id_page": "Kriknak"},
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "mina", "id_page": "Mina"},
					{"hero_id": "preyta", "id_page": "Preyta"},
					{"hero_id": "teemee", "id_page": "TeeMee"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "chỉ e sợ khi gặp các đối thủ chạy nhanh và bay nhảy thôi như Lindis hay Nakroth khiến cô nàng rất khó chịu, chiêu cuối Marja hoàn toàn có thể tránh được Patin lửa thật khó khi Patin lửa không có tác dụng, slowmotion của Alice sẽ bào lượng mana của cô khá tốt, Superman đẩy đẩy đẩy khó đụng vô ai,...",
				"info": [
					{"hero_id": "lindis", "id_page": "Lindis"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "marja", "id_page": "Marja"},
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "superman", "id_page": "Superman"},
				]
			}
		],
		"hero_story": "<i class=\"clr-orange\">Roxie</i> và <i class=\"clr-orange\">Aginie</i> là một cặp bài trùng thám hiểm gia vô tư lự.<br><i class=\"clr-orange\">Roxie</i> là con nhà nòi thuộc dòng dõi lâu đời các nhà thám hiểm vang danh thiên cổ; nói có sách mách có chứng, mỏ khoáng sản mang đến sự thịnh vượng và trù phú cho cả Mildar do chính tay người nhà này đào ra. Gia tộc hạnh phúc, nhưng không kém phần điên rồ này lý ra đã có thể an phận Sung túc, nhưng dòng máu khao khát khám phá luôn sục sôi trong huyết quản khiến họ thường làm điều ngược lại, mà thậm chí là còn hơn cả ngược. Chính xác cách họ làm thường là trả cho những người bạn đáng tin Cậy của họ một khoản kếch xù, dư sức lo cho một đứa bé sơ sinh đến trưởng thành, rồi giao phó Con mình và xách ba lô phóng thẳng lên đường tìm những thế giới mới.<br>Đó là cách ông của <i class=\"clr-orange\">Roxie</i> lớn khôn. Đời cha cô cũng hệt thế. Và chính <i class=\"clr-orange\">Roxie</i> cũng chẳng khác là bao. Ký ức thơ bé hiếm hoi cô có về cha mẹ mình đến từ những lá thư vài tháng được gửi đến một lần - miễn là cả hai vị đấy không bị mắc kẹt trong cổ mộ, hay mãi đắm đuối đất trời ở chốn xa xôi nào đó đến mức quên viết thư gửi đứa con duy nhất của mình.<br><i class=\"clr-orange\">Roxie</i> vô cùng khao khát phong cách sống của cha mẹ mình. Cô chẳng nhớ được gì nhiều về họ, nhưng thư của họ thì luôn tràn đầy những hạnh phúc lãng mạn, và nàng <i class=\"clr-orange\">Roxie</i> nhỏ nhắn với trí tưởng tượng phong phú cứ thế mà mê tít thò lò thôi. \"Rồi sẽ đến ngày ta tự lên đường và gặp được Hoàng lãng tử của mình.\" cô lặp đi lặp Iại. Đa phần thời gian đều được Cô dùng để mơ mộng rất chi là tỉ mỉ về các chuyến du hành trong tương lai, nơi cô sẽ được đặt chân đến những vùng đất tận cùng của thể giới để khai quặt những cổ vật và kho báu bên một chàng lãng tử đẹp lộng lẫy.<br>Đời đương nhiên không như là mơ, <i class=\"clr-orange\">Roxie</i> chẳng tìm thấy được chàng Hoàng lãng tử nào ráo. Thay vào đó cô gặp một linh hồn lửa láu lỉnh và siêu khó ưa tên Agnie.<br>Để mừng <i class=\"clr-orange\">Roxie</i> đến tuổi trường thành, cha mẹ của <i class=\"clr-orange\">Roxie</i> gửi tặng con gái mình một món quà, đó chính là Agnie năng động quá độ đến tăng động với biệt tài phá phách số dzách. Kèm theo đó là một bản đô kho báu chính tay bộ đôi đã soạn thảo với tất cả lòng yêu thương vô bờ, cụ thể trên đấy đánh dấu và phân loại tất cả những vị trí của các kho báu đã khám phá lẫn chưa khám phá.<br>Cuối cùng là tấm thiệp sinh nhật kèm lời nhắn nhủ: \"Hãy lên đường truy cầu thứ con hằng khát khao. Mong sớm ngày nào đó cả nhà mình vô tình đoàn tụ bên nhau nhé. Yêu con nhiều, Mẹ với Cha.\"<br>Đến đây thì <i class=\"clr-orange\">Roxie</i> ngứa ngáy tay chân cho chuyến đi đầu đời lắm rồi, thế là a lê hấp đồ đạc sẵn sàng từ cuốc chim đến ba lô. Chuyển Siêu phiêu lưu của <i class=\"clr-orange\">Roxie</i> là đây chứ là đâu.<br>\"Ê còn tui đâu? Phải kêu là 'Chuyến Siêu phiên luu của Agnie và <i class=\"clr-orange\">Roxie</i>' mới đúng.” linh hồn lửa ló đầu ra khỏi ba lô giãy nãy.<br>\"Nhìn mặt có giống quan tâm không? Đây chả cần nhớ.\"<br>\"Đã gà còn tỏ ra nguy hiểm, không có tui thì mơ mà đọc được bản đỏ đẩy!\"<br>Đến đây thì <i class=\"clr-orange\">Roxie</i> tắt tiếng vì Agnie chuấn không đường chỉnh, sự thật phũ phảng là bất kể <i class=\"clr-orange\">Roxie</i> có khao khát trở thành nhà thảm hiểm vĩ đại đến cỡ nào đi chăng nữa thì cô cơ bản là mù đường.<br>Phương nào là bắc hay nam cô còn chẳng phân biệt nổi nữa là. Chính vì thể mà cha mẹ cô đã gửi tặng Agnie - không thì chuyến đi duy nhất của cả đời con gái họ là một vòng tròn lạc lõi.<br>Sau khi chia tay với Moren đáng mến, Max lạc quan, và Wisp cáu bẳn dễ thương, <i class=\"clr-orange\">Roxie</i> chính thức lên đường. Agnie đúng là khó ưa thật, nhưng ít nhất nó vẫn là một người bạn đồng hành đáng tin cậy.<br>\"Chàng ơi, chàng hỡi, chàng nơi đâu, Hoàng lãng tử của đời ta?\"",
		"hero_skin": [
			{
				"name": "Nhà Thám Hiểm Mù Đường",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Roxie01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "Roxie01",
			},
			{
				"name": "Thám Tử Tập Sự",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Roxie02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "Roxie02",
			},
			{
				"name": "Roxie Kèn Ái Tình (Valentine)",
				"gold": "",
				"voucher": "499",
				"event": "",
				"wall": "Roxie03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "",
			},
		]
	},
	"baldum": {
		"hero_id": "Baldum",
		"hero_name": "Baldum",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Đỡ đòn",
			"special": "Khống chế / Tiền vệ",
			"lane": "Đường Caesar",
		},
		"main_skill": [
			{
				"name": "CƯỜNG TRÁNG",
				"info": "Nội tại: Baldum mặc định tăng thêm 18% giáp, mỗi đòn đánh thường của Baldum gây thêm 20 + (3% giáp vật lý) sát thương phép.",
			},
			{
				"name": "VẬT TỔ VỖ TẤT",
				"info": "Hồi chiêu: 10/9.6/9.2/8.8/8.4/8 giây<br>Tiêu hao: 60/65/70/75/80/85 năng lượng<br>Baldum lao theo hướng chỉ định, gây 175/225/275/325/375/425 (+0.3 Giáp bản thân) (+0.5 Công vật lý) sát thương vật lý và hất tung lên những kẻ địch trúng chiêu dọc đường; khi tông phải tướng địch sẽ dừng lại rồi múa vũ khí hất kẻ địch ra sau, gây thêm 8% máu tối đa của mục tiêu sát thương vật lý, và làm chậm 90% tốc chạy trong 1 giây."
			},
			{
				"name": "ĐỊA CHẤN",
				"info": "Hồi chiêu: 9 giây<br>Tiêu hao: 50 năng lượng<br>Baldum dậm mạnh lên mặt đất tạo sóng chấn động gây 175/225/275/325/375/425 (+0.3 Giáp bản thân) (+0.5 Công vật lý) sát thương vật lý, tổng cộng 6 lần lên những kẻ địch lân cận (gấp đôi sát thương với quái rừng), và làm chậm 30% tốc chạy từ các mục tiêu, ngoài ra hiệu ứng còn khiến các sát thương vật lý từ những nạn nhân này lên Baldum bị giảm 25/30/35/40/45/50% trong 1 giây. Mỗi tướng địch hay quái rừng trúng chiêu giảm 0.3 giây hồi chiêu thức này.",
			},
			{
				"name": "ĐỊA GIAM",
				"info": "Hồi chiêu: 70/65/60 giây<br>Tiêu hao: 100 năng lượng<br>Sau 0.5 giây, Baldum tạo ra một vùng làm giảm 90% tốc độ di chuyển trong 0.6 giây trước khi mặt đất sụp đổ và giam giữ kẻ địch trong 3 giây, suốt thời gian này nạn nhân không thể thực hiện bất cứ hành động nào và không thể bị chọn. Khi hết thời gian giam giữ, nạn nhân sẽ phải chịu 400/600/800 (+0.50 công vật lý) (+0.3 giáp vật lý) sát thương vật lý và giảm 50% tốc chạy trong 1.5 giây.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,4,2,3,0",
			},
			{
				"name": "*Hoặc combo từ xa",
				"info": "4,2,3,0",
			},
		],
		"skill_note": "<strong class=\"clr-orange\">*Đầu game</strong><br>- Là một tướng Đỡ đòn dạng cứng nên có thể mang đi đường đơn hoặc chơi vị trí hỗ trợ cũng được.<br>- Về đầu game nên tận dụng Chiêu Địa chấn để dọn lính và trợ giúp đồng đội.<br>- Về Chiêu Vật tổ hãy tận dụng chính xác có thể tấn công hoặc rút lui đều được.<br>- Tậu một số trang bị thiên hướng đốt kẻ địch cùng Địa chấn.<br><br><strong class=\"clr-orange\">*Giữa và cuối game</strong><br>- Về giữa và cuối game, ngoài việc là bức tường vững chãi, và gây khó chịu cho kẻ địch, thì Chiêu cuối là một chiêu thức đặc biệt quan tâm và chú ý khi sử dụng.<br>- Chiêu cuối có khoảng thời gian chậm trễ trước khi bung ra và giam cầm kẻ địch, phải luyện dùng kỹ năng này thành thục đoán hướng di chuyển của kẻ địch.<br>- Khi đã giam cầm kẻ địch thành công thì việc tiếp theo để đồng bọn dọn kk.",
		"skill_special": "TocBien,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim28",
					"info": "Máu tối đa +13.5<br>Tốc chạy +0.7%",
				},
				{
					"name": "NgocXanh26",
					"info": "Giáp +5.4",
				}
			],
			"rune3": [
				{
					"name": "NgocDo37",
					"info": "Tốc đánh +1%<br>Máu tối đa +33.7<br>Giáp +2.3",
				},
				{
					"name": "NgocTim33",
					"info": "Máu tối đa +45<br>Hồi máu/5s +5.2<br>Tốc chạy +0.4%",
				},
				{
					"name": "NgocXanh34",
					"info": "Máu tối đa +37.5<br>Giảm hồi chiêu +0.6%",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường đơn hoặc trợ thủ",
				"info": "GiayKienCuong,ThuongLonginus,AoChoangBangGia,GiapGaia,KhienHuyenThoai,GiapHoMenh",
			},
			{
				"name": "Đường đơn hoặc trợ thủ (thay thế)",
				"info": "GiayHoVe,KhienHuyenThoai,AoChoangThanRa,HuanChuongTroy,GiapThongKho,GiapHoMenh",
			},
			{
				"name": "Đường đơn hoặc trợ thủ (thử bộ này)",
				"info": "AoChoangThanRa,GiayKienCuong,GiapGaia,KhienThatTruyen,HuanChuongTroy,GiapThongKho",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng bọn",
				"desc": "kết hợp với máy ông này thì ôi thôi wombo combo, nát bét hết bên team địch :P",
				"info": [
					{"hero_id": "ilumia", "id_page": "Ilumia"},
					{"hero_id": "ignis", "id_page": "Ignis"},
					{"hero_id": "airi", "id_page": "Airi"},
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "wisp", "id_page": "Wisp"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "khi đối đầu vơi Y'bneth hoặc Arum thì quả là một cái gì đó khủng khíp, khả năng hồi máu của 2 ông này là siêu phàm, trong khi Baldum chỉ là cấu rỉa, tốt nhất giữ khoảng cách và chờ đội đồng đội lên gank,..",
				"info": [
					{"hero_id": "ybneth", "id_page": "Ybneth"},
					{"hero_id": "arum", "id_page": "Arum"},
				]
			}
		],
		"hero_story": "“<i class=\"clr-orange\">Baldum</i> – Nhân mã thần lực.<br>Xương cứng như thép, và cơ dày như thừng. Ông hiên ngang, lẫm liệt, và nhanh nhạy, với sức mạnh sánh ngang các vị thần.<br>Mọi nhân mã đều là các dũng sĩ trời sinh, và <i class=\"clr-orange\">Baldum</i> là người thiện chiến nhất trên tất thảy. Ông là một huyền thoại từ thời kỳ hoang sơ, người không chỉ chứng kiến sự khởi đầu và kết thúc của cuộc chiến giữa Nhân loại cùng tộc Afata chống lại hai đợt Hắc ám Xâm lược, mà còn tận tụy bảo vệ tất cả sinh vật trên Đồng bằng Ánh trăng bằng Cột tổ Khai thiên.<br>Tương truyền rằng Cột tổ Khai thiên - linh vật tồn tại từ thuở khai thiên tích địa của cả vũ trụ - chính là một Mảnh vỡ Andura với sức mạnh của thời gian. Đó chính là lý do vì sao <i class=\"clr-orange\">Baldum</i> lại trường sinh và luôn sung mãn dù đã sống hàng thế kỷ. Trớ trêu thay, Cột tổ chỉ bảo vệ duy nhất <i class=\"clr-orange\">Baldum</i>, và cứ thế ông buộc phải trơ mắt nhìn cả dòng tộc, từ thân bằng quyến thuộc đến tất cả mọi nhân mã, lìa đời từng người một theo tháng năm. Điều gì phải đến rốt cuộc cũng đến, trên khắp Athanor còn một và chỉ một nhân mã, <i class=\"clr-orange\">Baldum</i>.<br>Suốt một thời gian dài người ta vẫn cho rằng <i class=\"clr-orange\">Baldum</i> chỉ là chuyện cổ tích, thậm chí ngay cả các cư dân lâu đời của Rừng rậm Elborne cũng không chắc <i class=\"clr-orange\">Baldum</i> còn sống hay không. Chỉ khi Volkath, Chúa tể Hắc ám, trỗi dậy cùng quân đoàn Lokheim của hắn, mọi sinh linh mới được diện kiến <i class=\"clr-orange\">Baldum</i>. Chính xác hơn thì tất cả những gì họ thấy là một tấm lưng vững chãi khi ông đang bận tả xung hữu đột giữa muôn vàn quân Lokheim, nhưng chỉ thế thôi đã quá đủ để khích lệ sĩ khí đến ngút trời cho tất cả binh lính Afata, và in đậm hình bóng vị chiến binh vĩ đại này suốt đời họ.<br>“Sau khi chôn người đồng bào cuối cùng còn sót lại, ta chạy 12 vòng quanh mộ theo đúng truyền thống của bộ tộc. Tổ tiên truyền rằng khi vó của chúng ta tung bay trên đại địa, Đất Mẹ sẽ thức tỉnh và giang tay đón lũ trẻ của người trở về quê hương.<br>“Ta đã dự rất nhiều đám tang trong đời mình – quá nhiều là đằng khác, nhưng lần đấy là lần cô độc nhất. Chẳng còn ai phi vó cùng ta, chẳng còn bất cứ ai hát điếu ca cùng ta. Tiếng gió rít là bạn đồng hành duy nhất còn sót lại. Nó, và Cột tổ Khai thiên trên tay ta.<br>“Và rồi Lão Sồi mang tặng ta một món quà từ Yggdrasil – một mẩu rể gốc. Ta trồng nó trên mảnh đất chôn dân tộc mình, để vinh danh những trận chiến quả cảm của họ.”<br>“Lão Sồi cũng không thẹn với tên của mình. Mẩu rể thuở nào đã được chăm bón thành Rừng Vệ Nỗ ngày nay.”<br>Qua những mẩu chuyện với <i class=\"clr-orange\">Baldum</i> sau cuộc chiến, mọi người dần biết thêm về quá khứ bi hùng của ông. “Lão Sồi” được nhắc đến không ai khác ngoài Đại thụ Viễn cổ, vị cây-hùng đã mang đến sinh mệnh cho Rừng Vệ Nỗ. Lão không chỉ trao tặng <i class=\"clr-orange\">Baldum</i> một món quà từ Yggdrasil, mà còn kèm theo đó một sứ mệnh: thẳng tiến đến phương bắc hoang dã đầy lạnh giá của Đồng bằng Ánh trăng nhằm bảo canh gác Khe vực thẳm cạnh chân Núi Orpheus.<br>Và <i class=\"clr-orange\">Baldum</i> cứ thế tuần tra khắp chốn hoang mạc suốt hàng ngàn năm trong lẻ loi, cô độc đầy hiu quạnh. Có lúc ông suýt quên mình đã từng là một dũng sĩ. Đắm mình trong hồi ức, ông lẳng lặng ngồi đó tưởng nhớ quãng ngày tươi đẹp vô tư lự khi mình và chúng bạn thả sức cất vó hò hát tắm mình trong ánh tà dương. Nhưng ngay khi bè lũ Lokheim để lộ các dấu hiệu bất thường, và ngọn lửa chiến tranh bùng phát gần quê nhà, trong chớp mắt vị dũng sĩ trời sinh lập tức phục hồi bản năng chiến trận chảy trong huyết quản.<br>“Cánh rừng này nảy mầm từ đất đai được bồi bổ bởi chính máu và thịt của đồng bào ta. Từng nụ hoa, từng tấc đất là gia đình ta. Chừng nào sinh mệnh này chưa cạn, hơi thở này chưa kiệt, thì lũ ác quỷ các ngươi chớ hòng tiến thêm dù chỉ một bước!””",
		"hero_skin": [
			{
				"name": "Nhân Mã Thần Lực",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Baldum01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "Baldum01",
			},
			{
				"name": "Chú Thợ Ống Nước (Bậc A)",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Baldum02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "Baldum02",
			},
		]
	},
	"annette": {
		"hero_id": "Annette",
		"hero_name": "Annette",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "233",
			"price_text": "",
			"position": "Trợ thủ / Pháp sư",
			"special": "Yểm hộ",
			"lane": "Đường rồng",
		},
		"main_skill": [
			{
				"name": "GIÓ NHẸ",
				"info": "Hồi chiêu: 5 giây<br>Nội tại: Annette nhận một điểm cộng dồn Gió nhẹ mỗi khi tướng xung quanh tung chiêu, tối đa 15 điểm.<br>Khi đã đủ 15 điểm, nếu bản thân Annette hoặc một tướng đồng minh lân cận còn dưới 70% máu, tất cả điểm cộng dồn sẽ chuyển thành hiệu ứng hồi 275 + (0.3 công phép) (+ 25 mỗi cấp tướng) máu cho mọi tướng đồng minh xung quanh.",
			},
			{
				"name": "GIÓ XOÁY",
				"info": "Hồi chiêu: 10/9.5/9/8.5/8/7.5 giây<br>Annette tạo ra một cơn gió lốc gây 55/64/73/82/91/100 (+ 0.15 công phép) sát thương phép mỗi 0.25 giây tại điểm chỉ định. Mỗi đợt tăng 33% sát thương, kéo dài trong 2 giây. Những kẻ địch tại vùng tâm cơn gió sẽ phải chịu thêm 2% máu tối đa thành sát thương phép, đồng thời bị làm chậm 50% tốc chạy trong 0.25 giây (sát thương cộng thêm và hiệu ứng làm chậm này cộng dồn tối đa 4 lần)."
			},
			{
				"name": "GIÓ NỒM",
				"info": "Hồi chiêu: 11/10.4/9.8/9.2/8.6/8 giây<br>Tiêu hao: 70/75/80/85/90/95 năng lượng<br>Kích hoạt: Annette bắn một quả cầu gió theo hướng chỉ định gây 250 (+ 0.3 công phép) sát thương phép, và làm chậm 50% tốc chạy của các đơn vị trúng chiêu. Quả cầu gió bay xuyên qua nạn nhân đầu tiên, nếu trúng phải nạn nhân thứ hai sẽ gom cả hai lại, gây thêm 300 + (+ 0.5 công phép) sát thương phép, và làm choáng trúng 1 giây.<br>Nội tại: Nếu Annette bị choáng sẽ lập tức hoàn lại thời gian hồi chiêu này, đồng thời giúp tạo lá chắn 300/360/420/480/540/600 (+ 0.5 công phép) và tăng 150/192/234/276/318/360 giáp cùng giáp phép trong 2 giây; 60 giây hồi chiêu.",
			},
			{
				"name": "MẮT BÃO",
				"info": "Hồi chiêu: 70/65/60 giây<br>Tiêu hao: 100/125/150 năng lượng<br>Annette bay đến địa điểm chỉ định tạo ra một cơn bão hất văng kẻ địch lân cận và gây 400/600/800 + (0.5 công phép) sát thương phép, đồng thời tạo thành một bức tường gió ngăn kẻ địch vượt qua trong 2.5 giây. Các tướng đồng minh bên trong bức tường gió được tăng 40/60/80% tốc chạy và 30/40/50% tốc đánh. Khi tung chiêu này Annette sẽ được hoá giải mọi trạng thái khống chế hiện tại đang phải gánh chịu.<br>Sau khi tung chiêu, cô nàng có thể tự ý di chuyển ra khỏi Mắt Bão.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game (tối ưu sát thương)",
				"info": "3,2,0",
			},
			{
				"name": "*Combo đầu game (ưu tiên cấu rỉa)",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,2,4,3,2,0",
			},
		],
		"skill_note": "<strong class=\"clr-orange\">*Đầu game</strong><br>- Là một cô nàng chơi hỗ trợ hoặc kiêm luôn cả pháp sư đường giữa luôn đó, sát thương to lắm, đừng đùa.<br>- Mặc dầu thế đừng đứng cao quá, chơi xung quanh AD và cấu rỉa đối thủ bằng Gió xoáy.<br>- Khi tung Gió nồm đặc biệt chú ý, nó sẽ mắc xích và khóa 2 mục tiêu trúng phải khi có trạng thái này thì đánh thui kk.<br>- Chú ý tối đa hóa xác thương với combo Gió nồm trúng 2 mục tiêu sau đó Gió xoáy.<br><br><strong class=\"clr-orange\">*Giữa và cuối game</strong><br>- Về giữa và cuối game nên chú ý kiểm tra bụi và đi gank hỗ trợ các lane và chú ý cấu rỉa máu, đừng đứng cao quá dễ bốc hơi lắm :P<br>- Chiêu cuối Mắt bão là chiêu thức cực kì lạ và khó có thể sử dụng thành thục, vì thế các bạn nên tập luyện chiu này nhé, thành bại tại cái điện thoại mà haha!!<br>- Mắt bão rất đa dụng có thể tách đội hình đối phương ra nhiều mãng, hoặc ngăn chặn các pha dồn combo. đặc biệt xem xạ thủ, pháp sư đối phương ở đâu lùa về.",
		"skill_special": "CapCuu,TocBien",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim28",
					"info": "Máu tối đa +13.5<br>Tốc chạy +0.7%",
				},
				{
					"name": "NgocXanh22",
					"info": "Máu tối đa +15.7<br>Hồi máu/5s +3.1<br>Giảm hồi chiêu +0.3%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim32",
					"info": "Tốc đánh +1%<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh33",
					"info": "Công phép +2.4<br>Giảm hồi chiêu +0.7%",
				}
			]
		},
		"item_build": [
			{
				"name": "Chơi hỗ trợ",
				"info": "LenhBaiPhongThan,GiayKienCuong,TruongBang,KhienHuyenThoai,MatNaBerith,SachTruyHon",
			},
			{
				"name": "Chơi hỗ trợ",
				"info": "LenhBaiPhongThan,GiayKienCuong,TruongBang,KhienHuyenThoai,HuanChuongTroy,SachTruyHon",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng bọn",
				"desc": "là một hỗ trợ biểu mẫu, khả năng cách ly ngăn chặn các pha ám sát AD từ kẻ địch,..",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "lauriel", "id_page": "Lauriel"},
					{"hero_id": "yorn", "id_page": "Yorn"},
					{"hero_id": "tel_annas", "id_page": "TelAnnas"},
					{"hero_id": "valhein", "id_page": "Valhein"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "có khả năng khống chế và cách ly kẻ địch cao, thế nhưng đừng đùa với Omen nhé, nhốt lồng thì khó mà bay nhảy, còn hiệu ứng nhiều gặp thánh Chaugnar thì thôi Thánh hóa giải hiệu ứng bó tay,...",
				"info": [
					{"hero_id": "omen", "id_page": "Omen"},
					{"hero_id": "chaugnar", "id_page": "Chaugnar"},
					{"hero_id": "ybneth", "id_page": "Ybneth"},
					{"hero_id": "payna", "id_page": "Payna"},
				]
			}
		],
		"hero_story": "Ngày làm việc của <i class=\"clr-orange\">Annette</i> khởi đầu khi trời chạng vạng.<br>Đũa phép? Có. Cầu pha lê? Sẵn sàng. Tăng lực dược? Xong – sai lầm dạo trước đã dạy cô bài học cẩn tắc vô áy náy, cứ phải chuẩn bị kỹ cho chắc cú. Xong xuôi đâu đấy, <i class=\"clr-orange\">Annette</i> phóng chổi bay khỏi căn gác mái nhỏ nhắn ấm cúng của mình lên bầu trời đầy sao, nơi cô lặng lẽ vi hành khắp thị trấn nhỏ ven biển đang đắm chìm trong giấc nồng.<br>Thị trấn Hải hồn nằm lọt thỏm giữa ba bề là đại dương. Suốt những thập kỷ gần đây, bão tố và sóng thần đã trở thành chuyện thường niên do các thay đổi khí hậu bắt nguồn từ những dòng chảy và Khe vực thẳm. Cũng bằng đấy thời gian dân làng chài đã nỗ lực cầu khẩn Hội đồng Phép thuật cắt cử một pháp sư đến cứu viện. Đắng lòng thay số phận của làng chài với dân số khiêm tốn này chẳng nằm trong danh sách ưu tiên của Hội đồng, nhất là khi chính bản thân các Pháp sư đang ngày càng ít đi, lại còn phải lo chống trả những cuộc tấn công ngày một leo thang tại tiền tuyến phương nam. Thế là thị trấn này, một cách hiển nhiên, trở thành thực địa của các phù thủy tập sự.<br>“Làng chài nơi đây cần mình!”<br>Thay vì chọn thực tập tại các chốn phồn hoa đô thị, <i class=\"clr-orange\">Annette</i> một mình một chổi phi thẳng đến Thị trấn Hải hồn. Trên thông thiên văn, dưới tường địa lý, à không phép thuật hệ gió, rõ như ban ngày rằng không cô thì còn ai vào đây để giải quyết vấn đề khí hậu chốn này. Bằng vốn kiến thức của mình, bất kỳ thay đổi nào của các chòm sao, dù là nhỏ nhất, đều được cô nhanh chóng phát hiện và lập tức thông báo giúp cư dân làng chài chuẩn bị sẵn sàng cho mọi thiên tai sắp ập đến.<br>Ngặt một nỗi điều mà dân làng chài cần là một pháp sư thần kỳ, người có khả năng hô biến xua tan thiên tai, điều mà dĩ nhiên <i class=\"clr-orange\">Annette</i> còn lâu mới đủ sức - ấy là còn chưa kể đến việc cô không được phép niệm chú sử dụng phép thuật gì sất, mà cái này thì chủ yếu là do những điều luật ràng buộc cấm thực tập sinh phù thủy dùng phép thuật ngoài khuôn viên nhà trường. Thế nên đối với dân làng chài, <i class=\"clr-orange\">Annette</i> giống một cô bé ngáo ngơ làm chuyện bá vơ hơn là một pháp sư đáng kính, bất kể thành tích dự báo thời tiết suýt hoàn hảo, chỉ sai hai trong tổng số hàng chục lần chính xác trong 50 ngày vừa qua của cô.<br>Hôm đấy là một ngày chủ nhật tươi sáng - một trong các sai lầm kể trên. Tất cả dân chài rút hết thuyền bè neo đậu kỹ càng, nhà cửa chốt chặn chặt chẽ và ở lỳ suốt bên trong cả ngày theo như cảnh báo của <i class=\"clr-orange\">Annette</i>. Thế rồi sáng hôm sau mặt trời vẫn tỏa nắng lung linh…<br>Lần còn lại là khi <i class=\"clr-orange\">Annette</i> ngủ gục giữa chừng lúc nửa đêm. Trước đấy thì bầu trời vẫn cho thấy các tín hiệu của các ngày nắng sắp tới, thế rồi khi cô chợp mắt nhẹ do đã quá mệt mỏi thì các vì sao lại chuyển mình. Tối hôm sau khi những chiếc thuyền đầy ắp cá tươi đang trên đường về bờ biển thì không kịp trở tay khi bão ập đến bất ngờ. May thay cơn bão cũng không to lắm, và <i class=\"clr-orange\">Annette</i> cũng kịp xuất hiện để cứu vãn tình hình, thế nên hú hồn thì hú hồn, nhưng không có thương vong nào cả.<br>Dẫu vậy những sai lầm này vẫn dẫn đến khá nhiều than phiền về <i class=\"clr-orange\">Annette</i>. Đối với mọi sinh viên của học viện trứ danh trực thuộc Hội đồng, việc duy trì niềm tin và danh dự của tổ chức là trách nhiệm và nghĩa vụ của tất cả mọi người. Do đó các giáo sư đã quyết định đình chỉ công tác của <i class=\"clr-orange\">Annette</i> và yêu cầu cô quay về trường học lại.<br>Và tối nay chính là buổi cuối cùng của <i class=\"clr-orange\">Annette</i>.<br>Nếu được hỏi thì hiển nhiên <i class=\"clr-orange\">Annette</i> chẳng thích việc bị buộc phải quay về tí nào. Dẫu căn gác mái được dựng vội dựng vàng đầy tạm bợ bởi dân chài chẳng thể nào sánh bằng ký túc xá ở trường, nhưng cô cảm thấy như được ở nhà. Hơn thế nữa, trước khi đến đây, cô đã tự hứa với lòng rằng mình sẽ sử dụng phép thuật để hỗ trợ những người cần cứu giúp, và rõ ràng là lời hứa chưa được thực hiện trọn vẹn.<br>Công tâm mà nói thì là một thực tập sinh, <i class=\"clr-orange\">Annette</i> đã làm khá tốt. Với nội dung phức tạp như Thiên văn học thì sai số 4% đã là đáng gờm lắm rồi. Tuy nhiên chính bản thân của <i class=\"clr-orange\">Annette</i> cũng hiểu sự khác biệt giữa 4% lý thuyết và thực tế khổng lồ ra sao. Với dân làng chài, hễ sai là mất mạng chứ chẳng chơi.<br>Ngẩng đầu nhìn bầu trời điểm xuyết đầy những vì sao lớn có, nhỏ có, <i class=\"clr-orange\">Annette</i> bỗng nhớ lại một cuộc gặp gỡ định mệnh từ nhiều năm trước.<br>Đêm đấy <i class=\"clr-orange\">Annette</i> ở lại thư viện. Người duy nhất còn sót lại ngoài cô là một người phụ nữ với đôi mắt đầy trìu mến. <i class=\"clr-orange\">Annette</i> biết mình cần phải chăm chỉ hơn nữa, vì dẫu cô rất giỏi Lý thuyết Phép thuật, lúc thực hành thì cô lại tệ ơi là tệ. Tệ đến nỗi cuối học kỳ cô là người duy nhất trong cả lớp vẫn chưa thể niệm chú phép thuật nào cho ra hồn cả. Và kết quả như thế nếu vẫn còn tiếp diễn thì không bị buộc thôi học mới là lạ.<br><i class=\"clr-orange\">Annette</i> cố lật hết quyển này đến quyển khác để giải đáp một số thắc mắc, nhưng mọi nỗ lực dường như vô vọng. Thế rồi khi bắt gặp ánh mắt đầy khích lệ của người phụ nữ, cô quyết định hỏi xin một số lời tư vấn.<br>“Ta đã từng có một người bạn học Lý thuyết Phép thuật tệ khủng khiếp – và anh ấy là một trong những Pháp sư hùng mạnh nhất ta từng biết.” Người phụ nữ nói.<br><i class=\"clr-orange\">Annette</i> há hốc mồm, tai vẫn chưa thể tin nổi điều vừa nghe.<br>Quý cô mỉm cười. “Cũng kinh ngạc như em, thế nên ta quyết định theo dõi xem anh ấy thường tập luyện thế nào. Em biết ta thấy gì không? Anh ấy nhảy múa cùng các ngọn lửa, hệt như lũ tinh linh thiêu thân, và nhảy cuồng nhiệt như thể lửa là cả thế giới đối với anh ấy.”<br>“Phép thuật chân chính không chỉ gói gọn trong câu chữ. Vùi đầu trong sách cả ngày chẳng giúp ta đi đến đâu cả. Em hãy thử thân thiện hơn với phép thuật, và biết đâu đấy một ngày nào đó em sẽ được chấp nhận.<br>Nhiều năm về sau <i class=\"clr-orange\">Annette</i> mới biết được danh tính của người phụ nữ bí ẩn đó tại một buổi lễ trao thưởng. Sephera là một trong những nhà sáng lập của Hội đồng Phép thuật, và cũng đồng thời là một huyền thoại. Khi <i class=\"clr-orange\">Annette</i> tiếp nhận chiếc cúp từ tay Sephera, lời nhắn nhủ đầy thông thái năm nào lại vang vọng trong tai cô: “Hãy kết bạn với phép thuật, và cùng nhau hỗ trợ những người cần cứu giúp.”<br>Đấy chính là điều đã mang <i class=\"clr-orange\">Annette</i> đến với Thị trấn Hải hồn.<br>Bất thình lình các vì sao chuyển mình. <i class=\"clr-orange\">Annette</i> điếng hồn trân trối nhìn Tử vong tinh, vì sao hắc ám nhất chợt lóe lên chút ánh tím rồi tăt lịm đi. Chỉ trong chớp mắt, nhưng đôi mắt tinh tường của <i class=\"clr-orange\">Annette</i> đã kịp bắt trọn cả thời khắc ấy. Một cơn bão đang thai nghén – thứ được sinh ra từ Khe vực thẳm chốn xa khơi đang dần dần bành trướng trọn khắp đại dương.<br>Tàn bạo. Chết chóc<br>“Hỡi bạn tôi ơi, mình cần trợ giúp!” Trước hiểm họa khủng khiếp đang ập đến từ cuối chân trời, <i class=\"clr-orange\">Annette</i> quyết làm lơ luật lệ của Học viện. Cô nhảy lên chiếc chổi của mình và phóng thẳng đến cơn bão như một vị kỵ sĩ quả cảm.<br>Sáng hôm sau khi dân chài thức giấc, họ phát hiện ra thuyền bè của mình nay chỉ còn lại những mảnh vụn, và <i class=\"clr-orange\">Annette</i> ngất tỉnh trong kiệt quệ trên mặt đất. Dẫu chẳng ai được chứng kiến những gì <i class=\"clr-orange\">Annette</i> đã làm, họ vẫn thừa sức mường tượng ra sự khủng khiếp của thứ cô phải một mình đối đầu dựa trên cảnh tượng hoang tàn sáng nay. “Thật là một pháp sư vĩ đại!” Họ thốt lên. Suýt tí nữa thì vì sự gàn dở của mình mà họ đã tống khứ đi người đồng minh tận tụy nhất – may thay cô ấy vẫn hết lòng vì họ cho đến phút cuối cùng.<br>Mọi sự, vẫn còn có thể được cứu vãn.<br>Thực tập sinh mới thay thế <i class=\"clr-orange\">Annette</i>, trong ngỡ ngàng, được cả làng chài đề nghị rời đi. Anh ta chẳng hiểu chuyện quái gì đang diễn ra, chỉ biết Thị trưởng gửi gắm cho mình mang về Học viện một bức tâm thư cảm tạ với tất cả chữ ký của mọi dân làng. Người thị trưởng không chỉ ngợi khen những nỗ lực của <i class=\"clr-orange\">Annette</i>, mà còn xin đề xuất Học viện tấn phong cô trở thành Pháp sư chính thức.<br>Chưa hết, ông còn tiết lộ rằng toàn làng chài Hải hồn đang lên kế hoạch xây dựng một ngôi đền ma pháp tri ân <i class=\"clr-orange\">Annette</i>. Dẫu có thể thiếu thốn về cả nhân lực lẫn vật tư, nhưng dù tốn cả đời, hay thậm chí nhiều thế hệ, họ vẫn đồng lòng quyết hoàn thành sứ mệnh này, bởi họ biết rằng Annnette đã thệ ước cô sẽ dành cả đời ở chốn nay.<br>Giờ đây bất cứ khi nào Thị trưởng nhắc đến <i class=\"clr-orange\">Annette</i> trong thư, ông luôn bày tỏ sự tôn kính của mình bằng dòng chữ.<br>Ngài <i class=\"clr-orange\">Annette</i>.",
		"hero_skin": [
			{
				"name": "Nàng Phù Thủy Nhỏ",
				"gold": "13,888",
				"voucher": "233",
				"event": "",
				"wall": "Annette01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "Annette01",
			},
			{
				"name": "Nữ Quản Ga",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Annette02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "Annette02",
			},
			{
				"name": "Annette Xứ Sở Thần Tiên",
				"gold": "",
				"voucher": "",
				"event": "Sổ sứ mệnh 4",
				"wall": "Annette03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "",
			},
		]
	},
	"amily": {
		"hero_id": "Amily",
		"hero_name": "Amily",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Đấu sĩ / Sát thủ",
			"special": "Tiền đạo",
			"lane": "Đường Caesar",
		},
		"main_skill": [
			{
				"name": "ĐƠN ĐẢ ĐỘC CƯỚC",
				"info": "Nội tại: Amily sở hữu khả năng chiến đấu điêu luyện đến mức các đòn đánh thường và Liên hoàn cước chỉ trúng một mục tiêu sẽ gây thêm 50% sát thương.",
			},
			{
				"name": "TÀNG ĐAO KÍCH",
				"info": "Hồi chiêu: 10/9.4/8.8/8.2/7.6/7 giây<br>Tiêu hao: 60/65/70/75/80/85 năng lượng<br>Amily phóng tàng đao công kích mục tiêu, vũ khí này nảy lan tối đa 4 lần gây 150/180/210/240/270/300 + (0.6 công vật lý) sát thương vật lý kèm hiệu ứng làm chậm 30% tốc chạy, riêng nạn nhân đầu tiên bị làm chậm 50% tốc chạy trong 1 giây. Sau khi công kích hết các mục tiêu, lưỡi đao nảy trở về bản thân giúp Amily tăng 20% tốc chạy trong 3 giây, và hồi 125/150/175/200/225/250 (+0.5 công vật lý) máu kèm 30% giảm thời gian hồi chiêu này."
			},
			{
				"name": "LIÊN HOÀN CƯỚC",
				"info": "Hồi chiêu: 6 giây<br>Tiêu hao: 50/55/60/65/70/75 năng lượng<br>Kích hoạt: Amily lướt theo hướng chỉ định tung hai cú đá gây 80/96/112/128/144/160 (+0.30 công vật lý) sát thương vật lý, đặc biệt cú đá thứ hai sẽ gây hiệu ứng hất văng và cường hoá đòn đánh thường kế tiếp gây thêm 80/96/112/128/144/160 (+0.30 công vật lý) sát thương vật lý kèm hiệu ứng đòn đánh.<br>Nội tại: Sau khi thoát khỏi giao tranh Amily được tăng 10/12/14/16/18/20 tốc chạy và hồi 1% máu và năng lượng tối đa mỗi giây",
			},
			{
				"name": "CUỒNG BẠO CƯỚC",
				"info": "Hồi chiêu: 60/55/50 giây<br>Tiêu hao: 120/130/140 năng lượng<br>Sau 1 giây vận công, Amily gây 300/450/600 sát thương phép diện rộng và cường hoá bản thân giúp tăng 100/150/200 công vật lý, 50 tốc chạy, 50/75/100 miễn thương. Suốt thời gian cường hoá Amily gây 60/90/120 sát thương phép lên kẻ địch lân cận mỗi giây; hiệu ứng kéo dài 8 giây.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,0,4,2,0",
			},
			{
				"name": "*Hoặc combo này kết hợp tốc biến, Bật chiêu cuối tốc biến tới mục tiêu rồi dùng chiêu khác",
				"info": "4,3,0,2,0",
			},
		],
		"skill_note": "<strong class=\"clr-orange\">*Đầu game</strong><br>- Là một tay đấu sĩ kiêm luôn sát thủ, đường Caesar là một chọn lựa tuyệt vời nhất.<br>- Coi bộ các kỹ năng của cô nàng không khó gì máy nhưng làm sao cho hiệu quả nhất mới là quan trọng nhỉ, dùng Tàng đao kích đẩy lính và cấu máu địch.<br>- Liên hoàn cước chiêu này dùng trao đổi chiêu thức rất có lợi, canh rừng lên gank dùng chiêu này khống chế nhẹ.<br>- Có thể nói là mạnh nhưng không đến nổi mỏng, giai đoạn đầu tốt nhất hiên lành, đợi đồng đội lên chơi nhé!!<br><br><strong class=\"clr-orange\">*Giữa và cuối game</strong><br>- Về giữa và cuối game tầm 3 món trang bị cuối trở lên, thả sức mà tung hoành nhé, dame to lắm, vào cô cân hết.<br>- Chiêu cuối Cuồng bạo cước phải chơi nhiều và biết thời gian lúc nào là đến, bật trước khi giao tranh nổ ra 1s, kết hợp tốc biến vào nơi nào có đông tướng địch nhất mà quẩy, nhớ thấy không ổn thì tìm đường lui, không lui được thì kiếm em nào mỏng khô máu kk!!<br>- Đừng lo chiêu cuối có miễn thương đồ khá ổn đấy, phải nói tổng thể Amily mạnh khi ai biết chơi @@!",
		"skill_special": "TocBien,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim23",
					"info": "Công vật lý +0.6<br>Máu tối đa +36",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo36",
					"info": "Công vật lý +2<br>Xuyên giáp +3.6",
				},
				{
					"name": "NgocTim32",
					"info": "Tốc đánh +1%<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh310",
					"info": "Tốc đánh +0.6%<br>Xuyên giáp phép +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường Caesar",
				"info": "AoChoangThanRa,GiayKienCuong,ThuongXuyenPha,PhucHopKiem,HuanChuongTroy,KiemMuramasa",
			},
			{
				"name": "Đường Caesar (thay thế)",
				"info": "AoChoangThanRa,GiayKienCuong,ThuongXuyenPha,AoChoangBangGia,HuanChuongTroy,GiapThongKho",
			},
			{
				"name": "Đường Caesar (bộ này cho hoành tráng)",
				"info": "AoChoangThanRa,GiayKienCuong,ThuongXuyenPha,PhucHopKiem,ThanhKiem,GiapHoMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng bọn",
				"desc": "là một sát thủ đường đơn hiệu quả, thế nhưng combat phải có thế lực chống lưng, và đây là danh sách chiến hữu của ả,..",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "xeniel", "id_page": "Xeniel"},
					{"hero_id": "ybneth", "id_page": "Ybneth"},
					{"hero_id": "payna", "id_page": "Payna"},
					{"hero_id": "teemee", "id_page": "TeeMee"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "hơi e thẹn khi gặp một số tay khóa, câm lặng, hiệu ứng các kiểu,..",
				"info": [
					{"hero_id": "arum", "id_page": "Arum"},
					{"hero_id": "baldum", "id_page": "Baldum"},
					{"hero_id": "chaugnar", "id_page": "Chaugnar"},
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "annette", "id_page": "Annette"},
				]
			}
		],
		"hero_story": "<i class=\"clr-orange\">Amily</i> là một kẻ phản bội.<br>Tại chặng cuối cuộc thi, cô đã cùng 3 tuyển thủ khác hợp tác đồ sát tất cả giám sát & huấn luyện viên trong phòng. Cả bốn trốn thoát thành công sau đấy, nhưng tất thảy mới chỉ là sự khởi đầu. Để trốn tránh truy sát từ tổ chức, bốn kẻ đào tẩu nhanh chóng tách ra mỗi người một ngả.<br>Lý ra <i class=\"clr-orange\">Amily</i> không nhất thiết phải làm vậy. Cô chỉ cần ngoan ngoãn tuân theo an bài của tổ chức, chiến thắng & đạp lên thi thể của mọi kẻ cạnh tranh trong cuộc thi để trở thành nữ hoàng sát thủ của Hội ám hoàng. Cấp cao tầng của tổ chức thậm chí còn chuẩn bị sẵn cho cô đầy đủ thân phận, quyền lực, tiền tài, và vô vàn thứ hấp dẫn khác.<br>Với một đứa trẻ mồ côi như <i class=\"clr-orange\">Amily</i>, theo lẽ thường thì cuộc sống như thế có gì đáng để đòi hỏi hơn nữa.<br>Nhưng rốt cuộc <i class=\"clr-orange\">Amily</i> vẫn phản bội và bỏ trốn. Lựa chọn này không chỉ vì tự do, mà còn vì niềm tin duy nhất khiến cô vẫn nỗ lực đến tận hôm nay – rằng đâu đó ngoài kia, người em gái thất lạc vẫn còn đang khắc khoải đợi chờ. <i class=\"clr-orange\">Amily</i> không phải chưa nghĩ đến việc tận dụng thế lực của tổ chức để tìm kiếm em gái, cô thậm chí còn nỗ lực vượt trội tất cả người khác để hi vọng tăng thêm chút tiếng nói khi bày tỏ nguyện vọng. Nhưng cô nhanh chóng nhận ra sự viễn vông của ý nghĩ này.<br>Hội ám hoàng không phải là tổ chức từ thiện. Chúng thu nhặt những kẻ sống sót trong chiến tranh, nạn đói, trẻ mồ côi… chỉ để đào tạo và sàng lọc các hạt giống có đủ khả năng sống sót sau vô vàn huấn luyện sinh tử. Tất cả nhắm tới việc tạo ra những sát thủ tinh anh răm rắp tuân lệnh.<br>Trong một môi trường đấu đá đầy tàn khốc như thế, những kẻ ngây thơ hoặc rút ra bài học, hoặc mất mạng. Vết sẹo trên lưng <i class=\"clr-orange\">Amily</i> chính là cái giá phải trả trong đợt huấn luyện đầu tiên – khi cô đứng trước che chắn cho người bạn, một nhát dao đâm đến từ ngay phía sau.<br>Tình bạn còn là thứ xa xỉ, nói gì đến tình thân hão huyền?<br>Từ đấy <i class=\"clr-orange\">Amily</i> dần hiểu rõ đạo lý này. Nguyện vọng cuộc đời chỉ có thể che giấu trong thâm tâm, bên ngoài thì lặng lẽ nỗ lực đấu tranh không ngừng nghỉ. Phong cách thận trọng này hóa ra lại phù hợp định hướng của tổ chức, đặc biệt với thành tích đáng gờm của <i class=\"clr-orange\">Amily</i> khiến cô ngày càng càng được ưu ái hơn.<br>Ngoài ra thái độ căm hận lũ dị tộc của <i class=\"clr-orange\">Amily</i> cũng phần nào giúp cô làm mờ mắt những kẻ giám sát. Riêng phần này thì <i class=\"clr-orange\">Amily</i> không cần phải giả bộ, dù sao thì lũ khiến cô nhà tan cửa nát trở nên mồ côi chính là lũ ác quỷ từ Khe vực thẳm. Thậm chí bè lũ thú tộc tham gia giao chiến, cùng lũ cầm đầu Cung điện ánh sáng ẩn tại hậu trường cũng không thể trốn tránh trách nhiệm.<br>Hội ám hoàng, với chủ nghĩa chủng tộc cực đoan, muốn tiêu diệt tận gốc tất cả những thế lực có thể đe dọa đến sự tồn vong của nhân loại. Do đó lũ trẻ mồ côi tương tự <i class=\"clr-orange\">Amily</i> là những đối tượng thật dễ dàng tẩy não. Thực tế thì lý tưởng của tổ chức và <i class=\"clr-orange\">Amily</i> không hề xung đột, khác biệt duy nhất nằm ở sự quan tâm của cô đối với người em gái thất lạc, điều giúp giữ vững lý trí của bản thân mình.<br>Xin yên tâm, con sẽ tìm ra em gái bằng mọi giá. <i class=\"clr-orange\">Amily</i> đã thề trước mặt cha mẹ mình, giúp họ nhắm mắt xuôi tay kết thúc kiếp lầm than đầy gian khổ.<br>Suốt mười năm qua, bất kể cuộc sống không ánh mặt trời, tay luôn nhuộm máu, chôn dấu tâm tư, <i class=\"clr-orange\">Amily</i> vẫn không bao giờ quên lời thề năm xưa. Nỗi niềm này giống như một hạt giống mỏng manh đầy yếu ớt, thế nhưng <i class=\"clr-orange\">Amily</i> ngày ngày đều tưới vào đấy những nhớ nhung, khắc khoải quan tâm lo lắng cho người em, hi vọng vào ngày đoàn tự. Mỗi lần trở về từ cõi chết sau các cuộc thi huấn luyện, hạt giống này lại ngày càng chắc khỏe hơn, tất cả để chờ đến ngày đâm chồi nẩy lộc.<br>Điều gì phải đến cũng đã đến, ngày lý ra hân hoan khải hoàn đầy chiến thắng đã trở thành địa ngục trần gian, <i class=\"clr-orange\">Amily</i> vận dụng mọi kỹ xảo và võ thuật tích tụ suốt 10 năm để hạ gục mọi trở ngại, phá nát xiềng xích bản thân bấy lâu nay.<br>Tự do, cảm giác cũng không tệ!.",
		"hero_skin": [
			{
				"name": "Sát Thủ Lưu Vong",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Amily01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "Amily01",
			},
			{
				"name": "Đặc Cảnh NYPD",
				"gold": "",
				"voucher": "249",
				"event": "",
				"wall": "Amily02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "Amily02",
			},
			{
				"name": "Amily Thư Ký",
				"gold": "",
				"voucher": "",
				"event": "Sổ sứ mệnh 4",
				"wall": "Amily03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "",
			},
		]
	},
	"ybneth": {
		"hero_id": "Ybneth",
		"hero_name": "Y'bneth",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Đỡ đòn / Đấu sĩ",
			"special": "Khống chế",
			"lane": "Đường rồng / Đường Caesar",
		},
		"main_skill": [
			{
				"name": "ĐẤT MẸ",
				"info": "Hồi chiêu: 15 giây<br>Nội tại: Mỗi khi tiến vào bụi cỏ, Y'Bneth nhận được bùa lợi hồi 32 (+15 mỗi cấp tướng) máu và 10 (+2 mỗi cấp tướng) năng lượng mỗi giây, kéo dài trong 5 giây. Hiệu ứng kết thúc ngay khi Y'Bneth tiến vào giao tranh.",
			},
			{
				"name": "DÂY LEO",
				"info": "Hồi chiêu: 6/5.5/5/4.5/4/3.5 giây<br>Tiêu hao: 40/45/50/55/60/65 năng lượng<br>Y'Bneth duỗi tay tấn công kẻ địch phía trước gây 250/300/350/400/450/500 (+0.8 công vật lý) sát thương vật lý và làm chậm tốc chạy các nạn nhân trúng chiêu. Mọi chiêu trúng đích 5 lần (tướng tính 2) giúp chiêu được làm mới và cho phép Y'bneth tung Cây Đổ.<br>Cây Đổ: Y'Bneth nhận lá chắn tương đương (8% máu tối đa) sát thương và tông theo hướng chỉ định, gây 270/310/350/390/430/470 + (0.8 công vật lý) sát thương vật lý đồng thời hất lui các nạn nhân trúng đích."
			},
			{
				"name": "THIÊN NHIÊN VỖ VỀ",
				"info": "Hồi chiêu: 9 giây<br>Tiêu hao: 70/75/80/85/90/95 năng lượng<br>Y'Bneth vung tay tấn công các kẻ địch trong vùng hình nón phía trước gây 240/310/380/450/520/590 + (0.95 công vật lý) sát thương vật lý, đồng thời đẩy mục tiêu vào trung tâm; nếu có hai nạn nhân trở lên đồng thời trúng chiêu thì chúng sẽ phải chịu thêm 50% sát thương và bị choáng 1 giây.",
			},
			{
				"name": "HẠT GIỐNG SINH MỆNH",
				"info": "Hồi chiêu: 40 giây<br>Tiêu hao: 120/135/150 năng lượng<br>Y'bneth rơi vào giấc mộng ngàn thu, tự bao phủ bản thân trong một lớp lá chắn giúp chặn (20% máu tối đa) sát thương, đồng thời tạo ra một vùng đất thần bí khiến tất cả kẻ địch trong tầm ảnh hưởng bị giảm 60% tốc chạy. Suốt thời gian này, Y'bneth miễn nhiễm khống chế và gieo rắc tối đa 20 đợt hạt giống gây 60/110/160 (+ 1% máu tối đa) sát thương vật lý trong vùng chỉ định. Nếu có tướng địch trúng chiêu sẽ giúp bản thân hồi 2% máu. Đặc biệt nạn nhân trúng 8 đợt công kích sẽ bị choáng 1 giây.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game (thay đổi qua lại 2 chiêu)",
				"info": "2,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "2,3,4,2,3,0",
			},
		],
		"skill_note": "<strong class=\"clr-orange\">*Đầu game</strong><br>- Là một tay đấu sĩ kiêm luôn đỡ đòn ưu ái đi đường đơn hoặc chơi vị trí hỗ trợ đều được.<br>- Đầu game tận dụng chiêu thức farm lính nhanh hoặc có thể cấu rỉa kẻ địch đều ổn, nên nhớ chiêu Dây leo trúng đích 5 lần sẽ trở thành Cây đổ có thể đẩy khống chế kẻ địch hoặc dùng tẩu thoát :P<br>- Tận hưởng nội tại hồi máu và năng lượng khi đi qua các bụi cỏ, khỏi phải zìa nhà!! :D<br>- Lợi thế thì có đấy nên đi kiểm tra các mục tiêu Dơi, Rồng, ping rừng lên ăn nhỉ!!<br><br><strong class=\"clr-orange\">*Giữa và cuối game</strong><br>- Về giữa và cuối game khả năng trâu bò là có rồi đó sợ gì hết máu chơi thui!!<br>- Vùng chiêu cuối rất lời, giảm rất nhiều tốc chạy kẻ địch, nên chọn vị trí thích hợp có nhiều kẻ địch.<br>- Nên nhớ hãy tập luyện khả năng di chuyển chiêu cuối cho trúng mục tiêu để hồi máu, và có thể làm choáng luôn, thấy không ổn nên dừng chiêu cuối và lui về nơi an toàn.<br>- Hết máu khỏi lo, tò tò vô bụi :P",
		"skill_special": "CapCuu,BocPha,TocBien",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "+1.5 Công vật lý<br>+13.5 Máu",
				},
				{
					"name": "NgocTim28",
					"info": "+13.5 Máu<br>+0.7% Tốc chạy",
				},
				{
					"name": "NgocXanh21",
					"info": "+0.4% Tốc đánh<br>+0.5% Giảm hồi chiêu",
				}
			],
			"rune3": [
				{
					"name": "NgocDo37",
					"info": "+1% Tốc đánh<br>+33.7 Máu<br>+2.3 Giáp",
				},
				{
					"name": "NgocTim32",
					"info": "+1% Tốc đánh<br>+1% Tốc chạy",
				},
				{
					"name": "NgocXanh32",
					"info": "+1% Giảm hồi chiêu",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường đơn hoặc hỗ trợ",
				"info": "GiayHoVe,KhienHuyenThoai,GiapThongKho,HuanChuongTroy,GiapGaia,HerculeThinhNo",
			},
			{
				"name": "Đường đơn hoặc hỗ trợ (thay thế)",
				"info": "GiayKienCuong,AoChoangThanRa,GiapGaia,KhienHuyenThoai,KhienThatTruyen,GiapHoMenh",
			},
			{
				"name": "Đường đơn hoặc hỗ trợ (thử bộ này)",
				"info": "AoChoangThanRa,GiayHoVe,GiapGaia,KhienHuyenThoai,HuanChuongTroy,GiapThongKho",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng bọn",
				"desc": "là một đỡ đòn khá cứng cộng với khá năng tạo hiệu ứng cũng làm cho địch không ít lần phải khó chịu, đều đó tạo lợi thế cho đồng bọn lớn lên và vùng vẫy,..",
				"info": [
					{"hero_id": "violet", "id_page": "Violet"},
					{"hero_id": "yorn", "id_page": "Yorn"},
					{"hero_id": "tel_annas", "id_page": "TelAnnas"},
					{"hero_id": "wisp", "id_page": "Wisp"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "sống tốt nhờ khả năng hồi máu, thế nên dùng một số tướng có khả năng linh động, bay nhảy các kiểu, dễ dàng thoát khỏi vùng chiêu cuối của Y'bneth.",
				"info": [
					{"hero_id": "liliana", "id_page": "Liliana"},
					{"hero_id": "lauriel", "id_page": "Lauriel"},
					{"hero_id": "ngo_khong", "id_page": "NgoKhong"},
					{"hero_id": "murad", "id_page": "Murad"},
					{"hero_id": "tulen", "id_page": "Tulen"},
				]
			}
		],
		"hero_story": "“Thời gian đầy công bằng, nhưng chẳng kém phần tàn nhẫn…”<br>Các Dân-cây của Rừng rậm Elborne là những vệ quân của thiên nhiên. Cũng tương tự như cây cối thông thường, Dân-cây sinh ra từ các mầm non yếu ớt, nhưng dần trưởng thành đến kích cỡ khổng lồ qua hàng trăm năm chống chọi vô số bão tố. Sức sống mãnh liệt đó trao cho họ những cành nhánh vững chãi, hoa lá chắc khỏe, và một bản chất bình hòa. <i class=\"clr-orange\">Y’Bneth</i> lại là một ngoại lệ. Ông tò mò với tất cả mọi điều trên thế gian, và luôn khát khao tìm hiểu, học hỏi nhiều hơn nữa.<br>Bất kể là các tinh linh bay vụt qua, hay những cánh chim tung bay trên bầu trời, hoặc muông thú săn mồi, kể cả lũ cá bơi dưới nước – <i class=\"clr-orange\">Y’Bneth</i> đều muốn kết bạn với tất cả. Ông đã viếng thăm mọi cành cây, sợi rễ trên khắp Rừng rậm Elborn, nhưng thế vẫn chưa đủ. Càng biết thêm thêm từ những người bạn mới, ông càng nhận ra sự “cây mọc đáy giếng” của mình. Rồi một ngày nọ, ông quyết tâm đã đến lúc bứng rễ để vươn xa hơn đến thế giới ngoài kia.<br>Tất cả Dân-cây đều nghĩ chắc ông ngáo cỏ rồi, thậm chí những tinh linh cũng cảm thấy điều này thật dại dột. Bầy chim mang đến tin tức từ phương xa: nhân loại trong công cuộc bành trướng lãnh thổ nhằm thỏa mãn lòng tham của mình đang gây chiến với mãnh thú tại các vùng biên giới. Bè lũ sinh vật hắc ám cũng bắt đầu rục rịch chuyển mình. Tình hình rất chi là tình hình, thế giới bên ngoài rõ ràng chẳng an toàn chút nào. Điều này không khỏi khiến <i class=\"clr-orange\">Y’Bneth</i> lung lay. Liệu ông nên lắng nghe con tim, hay những lời khuyên của bạn bè? Tổ thụ Bình minh, ông quyết định, Ngài là cây duy nhất có thể giúp ông biết được câu trả lời.<br>Tổ thụ Bình minh không chỉ là tạo vật vĩ đại nhất của Đấng sáng thế, mà còn là vùng địa đàng hoàn hảo khi các vị thần trở lại Athanor. Ngài là cội nguồn của mọi sinh mệnh, là phép màu đã phong ấn Khe nứt khỏi mọi thế giới.<br>Đối với <i class=\"clr-orange\">Y’Bneth</i>, viếng thăm Tổ thụ Bình minh cũng như trở về bên mẹ mình. Ngài đã ngủ say hơn mười ngàn năm sau khi dốc hết toàn bộ năng lượng để phong ấn Khe nứt, thế nên tất cả những ai muốn kết nối với Ngài đều phải tìm đến thế giới mộng mơ. May là Dân-cây có lợi thế trong chuyện này – tất cả những gì họ cần làm là cắm rễ xuống sâu thật sâu, và rồi họ sẽ kết nối được với Tổ thụ Bình minh thông qua mạng lưới rễ nguồn thế giới.<br>Sau khi <i class=\"clr-orange\">Y’Bneth</i> giải thích ngọn nguồn gốc rễ câu chuyện, ông được mang vào giấc mơ của Tổ thụ Bình minh, nơi ông trải qua xuân xanh tươi, hạ rạng rỡ, thu heo may, và đông lạnh lẽo, bốn mùa cứ thế trôi qua và tiếp diễn trong một vòng lặp vô tận. Tổ thụ chẳng hề lên tiếng, nhưng những gì ông chứng kiến đã quá đủ để tìm ra câu trả lời hằng khắc khoải: hãy xuôi theo dòng chảy của tự nhiên, và chuyện gì phải đến rồi sẽ đến. <i class=\"clr-orange\">Y’Bneth</i>, nay chí đã quyết, bèn lập tức chuẩn bị cho hành trình cả đời mình. Thay vì cố níu kéo thuyết phục, tất cả cư dân Rừng rậm Elborne quyết định tụ họp tổ chức một buổi đại tiệc tiễn bạn lên đường. Ông còn được tặng quà từ Tổ thụ Bình minh – một nhánh từ chính thân cây thần kỳ này.<br>Xuôi dọc theo dòng sông, <i class=\"clr-orange\">Y’Bneth</i> tiến về hướng đông cho tới khi đến được Đồng bằng Ánh trăng, nơi đang phải gánh chịu sự tàn phá của bè lũ sinh vật hắc ám trỗi dậy từ vực thẳm. Chốn này đã từng là một nơi đầy ắp nhựa sống và hi vọng, nay đang chết dần chết mòn với tốc độ chóng mặt. Chính khoảnh khắc này <i class=\"clr-orange\">Y’Bneth</i> nhận ra mục đích tối hậu của chuyến hành trình. Ông rút ra nhánh cây từ Tổ thụ Bình minh, và dùng nó để nuôi dưỡng một khu rừng mới trên Đồng bằng Ánh trăng, nơi ông đặt cho cái tên Verno, nghĩa là “Vệ nỗ” - một nỗ lực bảo vệ - theo cổ ngữ tộc Elf.<br>Rừng Vệ nỗ không chỉ mang lại sự cân bằng cho thế giới, mà còn đóng vai trò lá chắn chặn tất cả mưa tên đạn lạc & pháp thuật cho vạn vật. Cùng với sự ra đời của Liên minh Afata, Rừng Vệ nỗ nhanh chóng trở thành chuyên khu chống lại các cuộc xâm lược của bè lũ hắc ám. Chuyến hành trình của <i class=\"clr-orange\">Y’Bneth</i> kết thúc tại đây, ông không cần phải tìm đến bất kỳ nơi nào khác, bởi Rừng Vệ nỗ này chính là quê hương thứ hai của ông.<br>Vị trí đầy lợi thế chiến lược của Rừng Vệ nỗ đã biến nơi đây thành điểm dừng chân lý tưởng của vô số nhà du hành, khỏi nói <i class=\"clr-orange\">Y’Bneth</i> thích điều này đến cỡ nào, hằng hà sa số các mẩu chuyện lý thú đang chờ đợi ông. Tại đây, ông cũng đã thực hiện được giấc mơ của đời mình – tìm hiểu thêm về thế giới, và cũng đồng thời hoàn thành sứ mệnh bảo vệ hòa bình trên đất đai – một trọng trách giao phó bởi Tổ thụ Bình minh.<br>“Ta bảo vệ quê nhà và tất cả sinh mệnh tại đấy!”",
		"hero_skin": [
			{
				"name": "Đại Thụ Viễn Cổ",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Ybneth01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "Ybneth01",
			},
			{
				"name": "Hạt Trưởng Kiểm Lâm",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Ybneth02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "Ybneth02",
			},
		]
	},
	"elsu": {
		"hero_id": "Elsu",
		"hero_name": "Elsu",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Xạ thủ / Sát thủ",
			"special": "Cấu rỉa",
			"lane": "Đường rồng / Đường Caesar",
		},
		"main_skill": [
			{
				"name": "BẮN TỈA",
				"info": "Hồi chiêu: 5 giây<br>Các đòn đánh thường của Elsu gây 150 + (12.5 mỗi cấp) + (1.0 công vật lý) + (0.8 công vật lý cộng thêm) sát thương vật lý, tuy nhiên sẽ không thể gây chí mạng. Thay vào đó, với mỗi 1% chí mạng Elsu sở hữu, anh sẽ được tăng 3 công vật lý.<br>Nội tại: Khi rời khỏi giao tranh 5 giây và đứng gần địa hình vách núi, Elsu sẽ nguỵ trang trong thời gian ngắn, gia tăng 16% ( +1% mỗi cấp) tốc độ di chuyển và trở nên mờ nhạt đi",
			},
			{
				"name": "ƯNG TRẠM",
				"info": "Hồi chiêu: 50 giây<br>Tiêu hao: 30 năng lượng<br>Kích hoạt: Elsu cài đặt một thiết bị Ưng trạm tại chỗ giúp cung cấp tầm nhìn trong phạm vi 600 - 1000 khoảng cách (tăng theo cấp tướng). Ưng trạm tồn tại trong 300 giây, có thể tích trữ tối đa 2 cái, và đặt tối đa 3 cái trên bản đồ. Khi đứng trong phạm vi của Ưng trạm, Elsu được tăng thêm sát thương mỗi đòn bắn lên quái rừng (tối đa 250), nhưng sẽ bị vô hiệu hoá khi tướng địch giẫm lên.<br>Nội tại: Đứng tại chỗ mỗi giây giúp Elsu tăng 7/8/9/10/11/12% xuyên giáp (tăng theo cấp tướng), tối đa cộng dồn 5 lần. Nếu Elsu di chuyển sẽ không được làm mới nội tại nữa."
			},
			{
				"name": "VIỄN TRÌNH KÍCH",
				"info": "Hồi chiêu: 16 giây<br>Tiêu hao: 60/65/70/75/80/85 năng lượng<br>Elsu nhắm bắn gây 1050/1200/1350/1500/1650/1800 + (0.4 công vật lý cộng thêm) sát thương vật lý kèm làm chậm tốc chạy lên tướng đầu tiên trúng phải. Elsu cần ngắm bắn trong 2 giây để gia tăng khoảng cách và độ chính xác.",
			},
			{
				"name": "GIẬT BẮN",
				"info": "Hồi chiêu: 25/20/15 giây<br>Tiêu hao: 100/110/120 năng lượng<br>Elsu lộn ra phía sau rồi lập tức bắn về phía trước gây 500/700/900 + (0.6 công vật lý) sát thương vật lý và làm chậm 50% tốc chạy của nạn nhân. Khi đáp đất Elsu được tăng 30% tốc chạy trong 2 giây, nhưng nếu tung chiêu hoặc đánh thường sẽ lập tức giải trừ hiệu ứng này.",
			}
		],
		"skill_up": {
			"line1": "2,6,10,13,14,15",
			"line2": "1,3,5,7,9,11",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,3,3",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng (trước đó nhớ kiếm chổ đặt Ưng trạm)",
				"info": "3,3,4,0",
			},
		],
		"skill_note": "<strong class=\"clr-orange\">*Đầu game</strong><br>- Là một xạ thủ kiêm vai trò sát thủ đều đó đã làm nên thương hiệu cho Elsu, đi săn thôi, đường rồng chơi ổn nhé!!<br>- Đầu game tận dụng Viễn trình kích để cấu máu và đẩy lính, nên nhớ không cần lộ mặt ra lane nhé, núp bắn thui.<br>- Ưng trạm không có sát thương nhưng khá hữu ít, hãy tìm vị trí đặt vừa tăng thêm tầm nhìn và tăng thêm sát thương khi đứng trong vùng của nó, kẻ địch có thể phá khi đạp phải, bụi cỏ là tốt nhất.<br>- Ưu tiên các trang bị xuyên giáp để phát huy hết sức mạnh.<br><br><strong class=\"clr-orange\">*Giữa và cuối game</strong><br>- Về giữa và cuối game, tầm 3 món cuối, lúc sát thương khá là to rồi đó, đi săn thoải mái nào!! ngắm bắn là nghề của chàng :P<br>- Giật bắn khá hay tránh các pha ám sát và đánh úp sát thương khá cao đấy giật chuẩn vào.<br>- Viễn trình kích dành các mục tiêu lớn khá tốt, canh sát thương chuẩn là một cái gì đó khiến các gamer hơn nhau!! cố lên!!",
		"skill_special": "TocBien,CapCuu",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo26",
					"info": "Công vật lý +1.5<br>Tốc đánh +0.4%",
				},
				{
					"name": "NgocTim27",
					"info": "Tốc đánh +0.4%<br>Tỷ lệ chí mạng +0.3%<br>Tốc chạy +0.5%",
				},
				{
					"name": "NgocXanh21",
					"info": "Tốc đánh +0.4%<br>Giảm hồi chiêu +0.5%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo39",
					"info": "Tỷ lệ chí mạng +1.6%",
				},
				{
					"name": "NgocTim32",
					"info": "+1% Tốc đánh<br>+1% Tốc chạy",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường Rồng",
				"info": "KiemMuramasa,GiayDuMuc,NanhFenrir,KiemFafnir,LiemDoatMenh,GiapHoMenh",
			},
			{
				"name": "Đường Rồng (thay thế)",
				"info": "KiemMuramasa,GiayHoVe,NanhFenrir,KiemFafnir,VuotHungTan,GiapHoMenh",
			},
			{
				"name": "Đường Rồng (thử bộ này)",
				"info": "ThuongXuyenPha,GiayDuMuc,NanhFenrir,PhucHopKiem,KiemFafnir,KiemMuramasa",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng bọn",
				"desc": "là một xạ thủ tầm rất xa vì thế tầm nhìn là đều quan trọng cho anh ta, đồng bọn có thể giúp anh ta làm đều đấy, ngoài ra hiệu ứng, giảm tốc chạy sẽ giúp dễ dàng bắn trúng hơn,..",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "max", "id_page": "Max"},
					{"hero_id": "ilumia", "id_page": "Ilumia"},
					{"hero_id": "lindis", "id_page": "Lindis"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "bắn xa đó là lợi thế và cũng là mục tiêu khiến kẻ địch nhắm tới,..",
				"info": [
					{"hero_id": "murad", "id_page": "Murad"},
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "ngo_khong", "id_page": "NgoKhong"},
					{"hero_id": "omen", "id_page": "Omen"},
					{"hero_id": "max", "id_page": "Max"},
				]
			}
		],
		"hero_story": "Cạn kiệt khoáng sản, tòa thành Miyada trù phú lẫy lừng năm nào giờ chỉ còn là chiếc bóng của quá khứ,<br>Công nghiệp hóa với quy mô khổng lồ đã từng mang đến Miyada vô số tài phú. Nhưng nguồn tài nguyên dù màu mỡ đến mấy cũng bị khai thác hết, dẫn đến nền công nghiệp lụi tàn, và vô vàn thương nhân cuốn gói ra đi; thứ duy nhất còn ở lại là những đống rác thải công nghiệp đồ sộ. Tránh nặng tìm nhẹ vốn dĩ bản chất của nhân loại, thế nên khi tòa thành ngày càng suy bại cả về kinh tế lẫn hoàn cảnh sống, dân chúng chúng dần dần ra đi tìm một chốn nương thân mới. Dĩ nhiên trong cuộc sống luôn có những cá nhân với những lựa chọn khác biệt, <i class=\"clr-orange\">Elsu</i> chính là một trong số đó với quyết định ngoan cố cắm rễ tại đây.<br>Chôn nhau cắt rốn tại đây khiến <i class=\"clr-orange\">Elsu</i> có tình cảm đặc biệt với chốn này. Không lâu sau khi sinh, cả cha mẹ anh lần lượt từ giã cõi đời trong một trận dịch bệnh. May mắn tòa thành thời ấy vẫn đang phát triển thịnh vượng, thế nên phúc lợi xã hội thừa sức đảm bảo một thời thơ ấu an lành cho <i class=\"clr-orange\">Elsu</i> chốn cô nhi viện. Thế nên từ nhỏ <i class=\"clr-orange\">Elsu</i> đã quyết chí lớn lên sẽ trở thành người bảo vệ nơi này để đền đáp công ơn dưỡng dục.<br>Với thành tích tốt nghiệp xuất sắc cùng thiên phú xạ thủ kinh người, <i class=\"clr-orange\">Elsu</i> nhanh chóng trở thành sĩ quan vệ quân đầy vinh quang. Tuy là lính mới lại kiệm lời, nhưng khi đồng đội cần họng súng ngắm của anh luôn kịp thời xuất hiện cân tất cả mọi kẻ địch, thế nên <i class=\"clr-orange\">Elsu</i> nhanh chóng được lòng các chiến hữu xung quanh. Chỉ trong 3 năm ngắn ngủi, tiểu đội của <i class=\"clr-orange\">Elsu</i> không chỉ xuất sắc hoàn thành tất cả nhiệm vụ, mà còn không ít lần nhận được khen thưởng từ các nghị viên Liên bang.<br>Thế nên khi thành Miyada dần trở nên suy tàn, Liên bang đã hạ lệnh sung quân tiểu đội này chuyển ra tiền tuyến, nơi vô vàn hiểm nguy đầy gian khổ đang đợi chờ. Trong bối cảnh thế lực hắc ám xâm lược lần thứ hai, khi chiến tranh dần tiến đến giai đoạn cuối, Liên bang tự do với tư cách thành viên của Liên quân các nước, sẵn sàng tung tất cả lực lượng cho trận đại chiến.<br>Đây là cuộc chiến vĩ đại nhất trong lịch sử nhân loại! Nơi tất cả lực lượng hội tụ sẵn sàng chung sức đẩy lùi bè lũ hắc ám về lại Khe vực thẳm! Khi lời hiệu triệu vang lên, vinh quang đang vẫy gọi, bầu nhiệt huyết sục sôi, tất cả mọi binh sĩ đồng tâm đáp trả.<br>Ngoại trừ <i class=\"clr-orange\">Elsu</i>.<br>\"Ngươi biết mình đang làm gì không? Nhìn vào huân chương trên ngực mình đi! Vinh quang này đáng bị hoen ố vậy sao?\" Trước những lời trách móc của chiến hữu, <i class=\"clr-orange\">Elsu</i> cố giải thích trong vô vọng: \"Ta đã thề bảo vệ tòa thành này cho đến hơi thở cuối cùng… bất kể nó đã điêu tàn ra sao. Thật có lỗi, ta không thể cùng kề vai sát cánh bên mọi người nơi chiến trường ngoài kia.\"<br>Dẫu chẳng mấy ai thấu hiểu tình cảm đặc biệt này của <i class=\"clr-orange\">Elsu</i> với tòa thành, nhưng anh nguyện gánh tất cả lời lẽ thế gian, dù có bị chê bai hèn nhát, khiếp nhược, đào binh… miễn là anh được ở lại bảo vệ nơi này. Chọn giải nghệ và ở lại, <i class=\"clr-orange\">Elsu</i> lặng người đứng trên tòa thành nhìn các chiến hữu phẫn uất cất bước ra đi.<br>\"Thật ra ngươi không cần làm vậy, tòa thành này đã vô vọng rồi.\" Moren, người sau khi hoàn tất sứ mệnh rèn luyện vũ khí đã chọn quay về cố hương Miyada, cất tiếng khuyên nhủ.<br>\"Vậy còn ông, vì sao lại trở về đây?\" <i class=\"clr-orange\">Elsu</i> hỏi lại.<br>\"Hừ, thanh niên như ngươi so gì với ta lão già này!\" Moren phất tay cất bước vào ánh hoàng hôn.<br>\"Mỗi người đều có lý do của bản thân mình.\" <i class=\"clr-orange\">Elsu</i> thầm nói trong lòng, dõi mắt theo những hình ảnh nhạt nhòa của những chiến hữu lần cuối.<br>Nhưng nếu có ngày họ gặp trắc trở, ta sẵn sàng từ bỏ tất cả để bảo vệ họ!",
		"hero_skin": [
			{
				"name": "Đôi Cánh Tự Do",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Elsu01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "Elsu01",
			},
			{
				"name": "Mafia",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Elsu02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "Elsu02",
			},
			{
				"name": "Elsu Guitar Tình Ái (Valentine)",
				"gold": "",
				"voucher": "",
				"event": "Mở sự kiện",
				"wall": "Elsu03",
				"disable": "yes",
				"img": "thumb3.jpg",
				"video": "",
			},
		]
	},
	"richter": {
		"hero_id": "Richter",
		"hero_name": "Richter",
		"main_info": {
			"price_gold": "",
			"price_voucher": "",
			"price_text": "1 viên đá quý",
			"position": "Đấu sĩ / Sát thủ",
			"special": "Tiền đạo",
			"lane": "Đường Caesar",
		},
		"main_skill": [
			{
				"name": "THANH GƯƠM BIẾN ẢO",
				"info": "Nội tại: Ở các môi trường khác nhau hơn 1.5 giây sẽ giúp cơ thể thích nghi và cường hoá bản thân. Mỗi lần chuyển trạng thái sẽ giúp Richter tăng 50% tốc trong 0.5 giây.<br>Bụi cỏ: Tăng 15% (+3% mỗi cấp) tốc đánh<br>Dưới sông: Tăng 15% tốc chạy<br>Trên đường: Tăng 10% miễn thương.",
			},
			{
				"name": "CHẶT & CHÉM",
				"info": "Hồi chiêu: 8 giây<br>Richter lướt về phía trước gây 50/70/90/110/130/150（+0.5 công vật lý) sát thương vật lý, đồng thời gây hiệu ứng tuỳ theo màu gươm hiện có.<br>Gươm xanh: tăng tầm lướt và gây làm chậm 60%<br>Gươm đỏ: Hất tung 0.75 giây và gây 5-10% máu tối đa của kẻ địch.<br>Chưa hết, Richter vung gươm chém tiếp gây 100~300 (+1.0 công vật lý) sát thương vật lý, rồi biến đòn đánh kế tiếp gây 25/50/75/100/125/150 (+1.0 công vật lý) sát thương phép<br>Nếu chiêu thức trúng kẻ địch sẽ được hồi lại ngay lập tức. Hiệu ứng này chỉ xảy ra mỗi 4 giây một lần.<br>Tầm lướt tới của Kiếm Đỏ bằng tầm lướt tới ở dạng Kiếm Vàng."
			},
			{
				"name": "CÔNG THỦ TOÀN DIỆN",
				"info": "Hồi chiêu: 16 giây<br>Tiêu hao: 0 nội năng<br>Richter huơ gươm phòng thủ giúp bản thân miễn nhiễm mọi trạng thái khống chế và sát thương trong 0.75 giây (có thể di chuyển bình thường).<br>Vừa hết thời gian, Richter lập tức tấn công gây 200/245/290/335/380/425 (+1 công vật lý) sát thương vật lý. Tích trữ tối đa 2 cộng dồn.<br>Ở trạng thái Gươm vàng sát thương gây ra sẽ là：200/255/310/365/420/475 (+1.5 công vật lý).<br>Nếu Richter đang có Gươm vàng và chặn thành công một hiệu ứng khống chế thì hắn sẽ gây choáng mục tiêu 1 giây.<br>Thời gian sử dụng chiêu thức lần nữa: 5 giây.",
			},
			{
				"name": "VÙNG DIỆT QUỶ",
				"info": "Hồi chiêu: 40/35/30 giây<br>Tiêu hao: 0 nội năng<br>Richter tung chiêu, khắc dấu ấn diệt quỷ lên kẻ địch lân cận, đồng thời tạo ra một vùng gây 36/58/80 (+0.1 công vật lý) sát thương chuẩn và làm chậm mỗi 0.5 giây trong 5 giây. Các nạn nhân trúng dấu ấn nếu chịu 5 đợt sát thương từ chiêu thức này sẽ nhận 300/500/700 (+1.0 công vật lý) sát thương chuẩn, đồng thời bị câm lặng 1 giây.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "2,0,3,2,0",
			},
			{	
				"name": "*Combo khi có đủ 3 kỹ năng (chú ý đổi vị trí, đất, nước, bụi cỏ)",
				"info": "2,0,4,2,0,3",
			},
		],
		"skill_note": "<strong class=\"clr-orange\">*Đầu game</strong><br>- Richter khá lạnh lùng và cô độc vì thế đường đơn hợp zới anh ta hơn!!<br>- Đầu game tùy lane bạn là ai nên lựa chọn vị trí dùng Chặt và chém cấu rỉa hợp lý, chiêu này hơi khó muốn như ý phải dựa vào địa hình hiện tại vì thế đồi hỏi bạn phải tập luyện nhiều để có thể ứng biến.<br>- Khô máu khỏi lo vì có Công thủ toàn diện miễn nhiễm mọi trạng thái khống chế hoành tráng chưa nào.<br>- Tuy nhiên không nên hổ báo, hãy tìm kiếm lợi thế bằng cách ăn chim, và kiểm soát các mục tiêu như Dơi, hoặc tranh thủ giúp mid dọn lính khi đi gank.<br><br><strong class=\"clr-orange\">*Giữa và cuối game</strong><br>- Về giữa và cuối game, khả năng bộc phá của Richter là một đều gì đó táo bạo, tận dụng chiêu cuối quẩy càng đông càng lợi, có sát thương chuẩn đấy nhé.<br>- Về Vùng diệt quỷ rất lợi khi đông đảo kẻ địch với các dấu ấn tích lũy sẽ mang cho Richter kha khá sát thương.<br>- Cuộc vui nào cũng tàng, canh thời gian nếu có thể thì dứt điểm hoặc rút lui về vùng an toàn.",
		"skill_special": "TocBien,TrungTri,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo26",
					"info": "Công vật lý +1.5<br>Tốc đánh +0.4%",
				},
				{
					"name": "NgocTim24",
					"info": "Máu tối đa +36<br>Giáp +1.6",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo36",
					"info": "Công vật lý +2<br>Xuyên giáp +3.6",
				},
				{
					"name": "NgocTim32",
					"info": "+1% Tốc đánh<br>+1% Tốc chạy",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường Caesar",
				"info": "AoChoangThanRa,GiayHoVe,ThuongXuyenPha,PhucHopKiem,NanhFenrir,GiapHoMenh",
			},
			{
				"name": "Đường Caesar (thay thế)",
				"info": "AoChoangThanRa,GiayKienCuong,ThuongLonginus,AoChoangBangGia,HuanChuongTroy,KiemMuramasa",
			},
			{
				"name": "Đường Caesar (thử bộ này)",
				"info": "ThuongXuyenPha,GiayKienCuong,PhucHopKiem,NanhFenrir,KiemMuramasa,LiemDoatMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng bọn",
				"desc": "sở hữu dame to, đánh nhiều mục tiêu càng lợi lộc, việc giữ địch để anh ta xã sát thương, cứ để đồng bọn lo,..",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "xeniel", "id_page": "Xeniel"},
					{"hero_id": "payna", "id_page": "Payna"},
					{"hero_id": "ybneth", "id_page": "Ybneth"},
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "cresht", "id_page": "Cresht"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "có sát thương to, tập trung đông là một lợi thế, vì điều này nên các thánh nhân bên dưới được cử đến phá, kk..",
				"info": [
					{"hero_id": "annette", "id_page": "Annette"},
					{"hero_id": "arum", "id_page": "Arum"},
					{"hero_id": "omen", "id_page": "Omen"},
					{"hero_id": "roxie", "id_page": "Roxie"},
				]
			}
		],
		"hero_story": "\"Chú ơi, Chú đã nhìn thấy ma quỷ chưa? Loại quỷ xịn, có ý thức và biết nói ý.\"<br>“Ừm...tất nhiên là ta từng thấy rồi”<br>“Oa! Thật luôn? Vậy chúng trông thế nào?”<br>\"Hừm ... ta không thấy rõ. Ta trúng một đòn của nó nên bất tỉnh. Lúc thức dậy thì cuộc chiến đã kết thúc.\"<br>“Thảo nào mọi người đều gọi chú là <i class=\"clr-orange\">Richter</i> chém gió, công nhận tài chém gió của chú khiếp thật!\"<br>\"Chém gió? Đó không phải là chém gió ......\" <i class=\"clr-orange\">Richter</i> lẩm bẩm, nhặt chiếc túi da đựng rượu lúa mạch lên làm một hớp, vị chua chát của rượu xộc lên như muốn hàn gắn trái tim có đôi chút mất mát của anh.<br><i class=\"clr-orange\">Richter</i> đang nói sự thật.<br>Mang trong mình dòng máu của các Pháp sư ma thuật đen, <i class=\"clr-orange\">Richter</i> cùng các đồng đội sở hữu sức mạnh phi thường và khả năng bất tử, đã chiến đấu với vô vàn quỷ dữ suốt 800 năm.<br>Đó là thời kỳ huy hoàng nhất của Thợ săn quỷ. Trong nhiều khu vực quỷ dữ hoành hành, danh tiếng của họ trong dân chúng còn lấn át các Lãnh chúa địa phương. Nhưng với Cuộc chiến Thanh trừng và sự sụp đổ của Pháp sư Ma thuật đen, địa vị của họ giảm dần. Mặc cho thời gian sát cánh cùng quân đội tới tiền tuyến miền Nam khốc liệt đã nhuộm đỏ áo choàng các Thợ Săn một màu máu, chứng minh họ là kẻ thù của thế lực Hắc Ám, danh dự đã hoen ố của họ vẫn không thể phục hồi.<br>Kể từ đó, không ai ca ngợi giá trị và sự vĩ đại của Thợ săn quỷ, và cũng không ai quan tâm đến sự hy sinh và cống hiến của họ nữa. Đội quân săn quỷ chiến tích lẫy lừng của quá khứ dần bị thế giới lãng quên trong đống đổ nát của cuộc chiến tranh thành Nam.<br><i class=\"clr-orange\">Richter</i> là một trong số ít thợ săn sống đến cuối cuộc chiến. Sau khi được Hội đồng Ma thuật xem xét và thẩm định , anh ta có thể trở lại xã hội loài người. Hàng trăm năm chinh chiến trong quân ngũ và tên gọi của hàng trăm đồng đội đã hy sinh thực sự là động lực đằng sau sự tồn tại của <i class=\"clr-orange\">Richter</i>: miễn là anh ta vẫn còn sống, Thế giới còn chưa thể quên hết mọi thứ họ đã làm.<br>\"Hồi ức, đó là thứ gì còn say hơn rượu!\" <i class=\"clr-orange\">Richter</i>, người đã trở về từ chỗ của các vị thần giờ lắc lắc túi rượu không còn là mấy, thứ anh trân quý vô cùng. Vẫn còn một khoảng cách ngắn đến điểm cấp rượu tiếp theo và anh ta phải tính toán mức sử dụng hàng ngày, nếu không đêm tiếp theo sẽ thật ảm đạm. Anh thực lòng mong ước rằng những thứ bẩn thỉu ẩn náu trong đêm sẽ nhanh chóng ra tay, để anh có thể hoàn thành chuyến “đi săn” này càng sớm càng tốt.<br>Thân phận hiện tại của <i class=\"clr-orange\">Richter</i> là một người áp tải hàng thuê miễn phí. Bảy ngày trước, <i class=\"clr-orange\">Richter</i> đã cải trang thành một người áp tải hàng thuê bị thất lạc đồng đội và gia nhập thành công vào Đội áp tải hàng cho các Thương nhân. Đó là đoàn vận tải hàng đang bị các Sinh vật Hắc ám để mắt tới gần đây -  Những xe hàng cần tới sức kéo của tám con gia súc mới có thể dịch chuyển được, trên đó chất đầy Đá ma thuật được các Thương nhân kia mua từ miền đất Gebi tận trời Tây, cũng là món ăn thèm muốn nhất của lũ Sinh vật Hắc ám. Nhóm lính đánh thuê ban đầu không chào đón anh chàng đi lạc này. Nhưng sau khi <i class=\"clr-orange\">Richter</i> bỏ ra một túi Bạc, họ đã sẵn sàng chấp nhận người đồng hành mới này. Trong con mắt của lính đánh thuê, tiền vàng tiền bạc là những người bạn tốt nhất. Vì vậy, khi <i class=\"clr-orange\">Richter</i> xung phong nhận canh ca đêm, người trưởng nhóm còn lịch sự từ chối  và còn dặn dò <i class=\"clr-orange\">Richter</i> nên nghỉ đêm cho tốt: \"Trong con đường vận chuyển buôn bán này, không ai dám chạm vào hàng hóa chúng ta bảo hộ đâu.\"<br>\"Nhưng đối tượng mà ta lo lắng không phải nhân loại!\" <i class=\"clr-orange\">Richter</i> dở khóc dở cười, thò tay móc ra một túi bạc nữa. Anh thì thầm nói với người nhóm trưởng “ý đồ trong sáng\" của mình: \"Dù sao, nửa đêm làm một giấc cũng chẳng ai hay biết, xong ngày hôm sau lại vẫn có thể đường hoàng ngủ bù trên nóc xe hàng, giảm được bao nhiêu vất vả của cả chuyến đi\".<br>Như vậy, <i class=\"clr-orange\">Richter</i> đã giành công việc \"quý giá\" này, nhưng trưởng nhóm còn trang bị cho anh một \"trợ thủ\" - chính là thằng nhóc Luen vừa nãy còn nhổ nước miếng vào người <i class=\"clr-orange\">Richter</i>.  Trong suy nghĩ của trưởng nhóm, <i class=\"clr-orange\">Richter</i> dù sao vẫn là ma mới, chưa rõ ý đồ và nguồn gốc nên cần một người trông chừng anh ta đề phòng bất trắc. <i class=\"clr-orange\">Richter</i> không quan tâm, vì toàn bộ sự tập trung của anh ta hướng cả vào màn đêm dần buông xuống.<br>“Xem ra, sự kiên nhẫn của các ngươi có lẽ đã hết rồi nhỉ?” <i class=\"clr-orange\">Richter</i> nhìn đống lửa và lẩm bẩm với chính mình. Có vẻ như để đáp lại lời nói của <i class=\"clr-orange\">Richter</i>, một âm thanh rên rỉ theo làn gió bay tới, và không khí gần trại đột nhiên lạnh hẳn đi. <i class=\"clr-orange\">Richter</i> biết rằng con mồi đang chờ đợi từ lâu của anh sắp chui vào bẫy.<br>Những thay đổi đột ngột này đánh thức những áp tải hàng đang say giấc. Mặc dù nhận thức về thế lực hắc ám của họ thấp hơn nhiều so với <i class=\"clr-orange\">Richter</i>, nhưng nhiều năm làm nghề áp tải hàng thuê đã rèn cho họ bản năng khi sự nguy hiểm đến gần. Khi đã vũ trang đầy đủ bước ra khỏi trại, họ khó có thể tin vào mắt mình: <i class=\"clr-orange\">Richter</i>, kẻ chém gió chuyên nghiệp, đang cầm một thanh kiếm đối đầu với một nhóm sinh vật hắc ám đầy khủng bố. Anh chàng này vẫn giữ được thái độ bình tĩnh tự tin khiến họ tưởng mình còn đang mơ.<br>“Mặc dù hàng trăm năm đã trôi qua, mặc dù đã bị thế giới quên lãng, nhưng là một Thợ săn Quỷ, ta chưa bao giờ quên vinh quang và sứ mệnh đằng sau tên gọi này.”<br><i class=\"clr-orange\">Richter</i> nhìn đám quái vật trước mặt anh, lẩm bẩm với chính mình. \"Ta tin rằng các ngươi cũng chưa bao giờ quên cái chết và nỗi sợ hãi mà cái tên gọi này mang lại. Nếu trót quên, thì ta cũng không ngại nhắc lại với các ngươi lần nữa.\"<br>Sau đó, <i class=\"clr-orange\">Richter</i> rút kiếm ra. Ánh kiếm giống như những ngón tay của Nữ thần ánh sáng, xuyên thủng bóng tối của màn đêm đang bao phủ.<br>\"Nơi nào có bóng tối, nơi đó là chiến trường của ta!\"",
		"hero_skin": [
			{
				"name": "Lưỡi Gươm Diệt Quỷ",
				"gold": "",
				"voucher": "",
				"event": "1 viên đá quý",
				"wall": "Richter01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "Richter01",
			},
			{
				"name": "Bá Tước",
				"gold": "",
				"voucher": "279",
				"event": "",
				"wall": "Richter02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "Richter02",
			},
		]
	},
	"wiro": {
		"hero_id": "Wiro",
		"hero_name": "Wiro Sableng",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Đỡ đòn / Đấu sĩ",
			"special": "Khống chế / Tiền vệ",
			"lane": "Đường Caesar",
		},
		"main_skill": [
			{
				"name": "DẤU ẤN 212",
				"info": "Hồi chiêu: 120 giây<br>Nội tại: Wiro cường hoá 60 (+ 5 mỗi cấp) cả giáp vật lý lẫn giáp phép (vô hiệu hoá khi chiêu đang hồi).<br>Khi Wiro nhận sát thương chí tử, anh không chết mà được hồi 60% máu. Đổi lại, trong 4.5 giây Wiro sẽ miễn nhiễm khống chế, nhưng không thể hành động và bị giảm 25% cả hai loại giáp.<br>Đồng thời, sẽ có 3 dấu ấn xung quanh anh, đồng đội giẫm lên sẽ giúp Wiro và tướng đó hồi 10% máu. Nếu 3 dấu ấn đều được kích hoạt, hoặc qua 4.5 giây, Wiro sẽ gầm lên gây 150 + (1.0 công vật lý) sát thương phép, và làm chậm tốc chạy của kẻ địch. Bản thân Wiro nhận 50% tốc đánh và 30% tốc chạy trong 5 giây kế.",
			},
			{
				"name": "RÌU CHIẾN LỰC",
				"info": "Hồi chiêu: 9/8.4/7.8/7.2/6.6/6 giây<br>Tiêu hao: 60/65/70/75/80/85 năng lượng<br>Wiro làm mới lại đòn đánh, cường hoá ba đòn đánh kế tiếp. Mỗi đòn sẽ gây thêm 100/130/160/190/220/250 (+0.2 công vật lý) sát thương vật lý. Riêng đòn thứ ba sẽ hất tung kẻ địch trong 0.75 giây.<br>Thời gian tồn tại cường hoá của đòn đánh đầu tiên：3 giây<br>Thời gian tồn tại cường hoá của đòn đánh thứ hai và thứ ba： 1.5 giây."
			},
			{
				"name": "GĂNG CHIẾN LỰC",
				"info": "Hồi chiêu: 10/9.6/9.2/8.8/8.4/8 giây<br>Tiêu hao: 80/85/90/95/100/105 năng lượng<br>Wiro ủi kẻ địch về phía chỉ định, gây 100/130/160/190/220/250 (+0.4 công vật lý) sát thương vật lý. Nếu kẻ địch bị đẩy vào tường sẽ nhận thêm 50% sát thương từ chiêu thức. Chiêu thức này sẽ gây 250/325/400/475/550/625 (+1.0 công vật lý) sát thương vật lý lên trụ kẻ địch.",
			},
			{
				"name": "THẦN LỰC 212",
				"info": "Hồi chiêu: 45/40/35 giây<br>Tiêu hao: 120/135/150 năng lượng<br>Wiro vận sức tung rìu gây 300/375/450 (+1.5 công vật lý) sát thương vật lý kèm 1 giây hất tung lên kẻ địch xung quanh. Tụ lực càng lâu, phạm vi ảnh hưởng và sát thương càng lớn, tối đa 1000/1250/1500 (+1.5 công vật lý) sát thương vật lý. Mỗi nạn nhân rơi xuống sẽ gây 50% sát thương chiêu thức lên kẻ địch lân cận (nạn nhân rơi không chịu thêm sát thương này). Wiro có thể di chuyển khi tung chiêu, và hồi chiêu sẽ giảm đi 80% nếu huỷ chiêu.<br>Nội tại: Khi Wiro tung chiêu hoặc cường hoá đánh thường sẽ tạo lốc xoáy xung quanh bản thân trong 3 giây, gây 38/42/46 (+0.25 công vật lý) sát thương phép mỗi giây lên mọi kẻ địch, kể cả công trình.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,2,0,0,0,4,2,3",
			},
		],
		"skill_note": "<strong class=\"clr-orange\">*Đầu game</strong><br>- Wiro là một đấu sĩ tự do vì thế anh ta rất hợp đi đường Caesar.<br>- Đầu game tận dụng bộ combo Găng chiến lực + Rìu chiến lực gây áp đảo đối thủ, đồng thời đẩy lính tạo lợi thế.<br>- Tranh thủ ăn chim, dơi, hoặc cướp bùa đỏ nếu có thể kk :P, không ép à!!<br>- Cứ khô máu đi Nội tại Dấu ấn 212 có khả năng hồi sinh, ngại gì vết bẩn, quẩy tung nốc!!<br>- Nói thế thôi hãy tập luyện bộ kỹ năng và di chuyển hợp lý vào, sức mạnh thật sự của Wiro còn ở phía sau cơ!!.<br><br><strong class=\"clr-orange\">*Giữa và cuối game</strong><br>- Về giữa và cuối game, độ chừng 3 4 món cuối, lại quẩy không chừa ai cả, combo hai chiêu đầu đã mệt mỗi rồi đừng nói đến chiêu cuối nha!!<br>- Khi kẻ địch sợ hải bỏ chạy là lúc Thần lực 212 được gọi ra, vùng chiêu cuối khá rộng khi nổ kèm hất tung, mạnh quá ai chơi!! :P<br>- Vì Nội tại có đến 90 giây hồi, nên để dành cho các pha combat tổng chủ chốt, cứ khô máu rồi lại hồi sinh, kèm theo em TeeMee, cộng giáp Hồi sinh ôi thôi, hồi sinh mãi, đánh chán kk!!",
		"skill_special": "TocBien,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "+1.5 Công vật lý<br>+13.5 Máu",
				},
				{
					"name": "NgocTim28",
					"info": "+13.5 Máu<br>+0.7% Tốc chạy",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo36",
					"info": "Công vật lý +2<br>Xuyên giáp +3.6",
				},
				{
					"name": "NgocTim32",
					"info": "+1% Tốc đánh<br>+1% Tốc chạy",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			]
		},
		"item_build": [
			{
				"name": "Đường Caesar",
				"info": "AoChoangThanRa,GiayHoVe,ThuongLonginus,PhucHopKiem,NanhFenrir,GiapHoMenh",
			},
			{
				"name": "Đường Caesar (thay thế)",
				"info": "AoChoangThanRa,GiayKienCuong,ThuongLonginus,AoChoangBangGia,KiemMuramasa,GiapHoMenh",
			},
			{
				"name": "Đường Caesar (thử bộ này)",
				"info": "AoChoangThanRa,GiayHoVe,GiapGaia,KhienHuyenThoai,KiemMuramasa,GiapHoMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng bọn",
				"desc": "sở hữu chiêu cuối bá mà không chấp vá, việc làm chậm tốc chạy hoặc giữ chân kẻ địch quả là một điều gì đó có lợi cho Wiro,..",
				"info": [
					{"hero_id": "payna", "id_page": "Payna"},
					{"hero_id": "cresht", "id_page": "Cresht"},
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "ybneth", "id_page": "Ybneth"},
					{"hero_id": "baldum", "id_page": "Baldum"},
					{"hero_id": "teemee", "id_page": "TeeMee"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "là một quái vật trong giao tranh tổng, vì thế hãy cách ly anh ta ngay và luôn,..",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "arum", "id_page": "Arum"},
					{"hero_id": "annette", "id_page": "Annette"},
					{"hero_id": "roxie", "id_page": "Roxie"},
					{"hero_id": "omen", "id_page": "Omen"},
					{"hero_id": "cresht", "id_page": "Cresht"},
				]
			}
		],
		"hero_story": "Người trong giang hồ, ngại gì va chạm?<br><i class=\"clr-orange\">Wiro</i> là một chàng điên hiệp nổi tiếng. Có người thích hắn vì cá tính thẳng thắng và phóng khoáng, có người lại chán ghét sự điên điên khùng khùng của hắn. Nhưng <i class=\"clr-orange\">Wiro</i> chẳng bận tâm, người ngoài đánh giá thì liên quan gì - Hắn cứ là chính mình, hưởng thụ cuộc sống và mạo hiểm khám phá thế thôi. Vùng đất mới mẻ này có quá nhiều thứ đang chờ đợi, từ những kẻ địch hắc ám đến vô số nơi để phiêu lưu tìm hiểu.<br>Chẳng có mấy kẻ thật sự không đội trời chung với <i class=\"clr-orange\">Wiro</i>, kể cả những tay tài phiệt thâu tóm quân sự. Dù với cá tính của <i class=\"clr-orange\">Wiro</i>, không trực thì cũng gián tiếp, một ngày nào đó họ sẽ phải đối đầu với nhau. Nhưng chẳng sao, bởi giữa họ và dạng người ưa thích tiếu ngạo giang hồ không chút đam mê quyền lực hay tiền tài như <i class=\"clr-orange\">Wiro</i> vốn không tồn tại mâu thuẫn về lợi ích.<br><i class=\"clr-orange\">Wiro</i> tự do tự tại trải qua vô số cuộc phiêu lưu mạo hiểm, và cũng từng đấy sự tích hào hùng về hắn được lưu truyền. Quả thật đối với chàng <i class=\"clr-orange\">Wiro</i> hài hước và hữu dũng vô số mưu, thiên hạ không thể không gật đầu tấm tắc khen, nhưng cũng đồi thời lắc đầu tự hỏi cớ gì hắn lại cứ lao đầu vào những chốn hiểm nguy?<br>Có người giải thích ấy là do <i class=\"clr-orange\">Wiro</i> vốn không sợ trời không sợ đất, nhưng dĩ nhiên sự thật thì khác xa. Hóa ra bên trong <i class=\"clr-orange\">Wiro</i> ẩn chứa những hai linh hồn. Khi hiểm họa thời không tan vỡ càng ngày càng cận kề, <i class=\"clr-orange\">Wiro</i> của thế giới khác đã cảm nhận được <i class=\"clr-orange\">Wiro</i> của thế giới này đang gặp nguy hiểm, thế là hắn cất công tìm đến tận chốn này để tìm được chính mình.<br>Vốn cùng tu luyện dòng năng lượng 212, ngay khoảnh khắc cả hai chạm mặt, linh hồn của họ đã cộng hưởng. <i class=\"clr-orange\">Wiro</i> của thế giới này cố gắng giải quyết hiểm họa thời không, <i class=\"clr-orange\">Wiro</i> của thế giới bên ngoài cố bảo vệ quê hương khỏi tai ương khủng khiếp. Cả hai cần một sức mạnh phi thường hơn để ngăn chặn tất thảy.<br>Thế là với sức mạnh của năng lượng 212, cả hai <i class=\"clr-orange\">Wiro</i> đã dung hợp thể xác lại làm một. Tuy nhiên do cơ thể chẳng cách nào chứa nổi hai linh hồn cùng lúc, thế là họ chuyển dời linh hồn còn lại vào chiếc rìu 212 thần kỳ, thứ duy nhất đủ hùng mạnh để chứa đựng thứ linh hồn phi thường này. Và đến khi <i class=\"clr-orange\">Wiro</i> gặp nguy hiểm, phần hồn trong chiếc rìu sẽ thức tỉnh để hỗ trợ nhau. Dĩ nhiên với cả thế gian thì <i class=\"clr-orange\">Wiro</i> vẫn là <i class=\"clr-orange\">Wiro</i> mà thôi.<br>Ấy thế cho nên câu cửa miệng của <i class=\"clr-orange\">Wiro</i> thật ra rất thâm thúy.<br>Tiêu diệt được ta thì ta vẫn còn sống!",
		"hero_skin": [
			{
				"name": "Cuồng Chiến Rìu",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Wiro01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "Wiro01",
			},
		]
	},
	"quillen": {
		"hero_id": "Quillen",
		"hero_name": "Quillen",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Sát thủ",
			"special": "Tiền đạo / Trung phong",
			"lane": "Đi rừng",
		},
		"main_skill": [
			{
				"name": "ĐÁNH LÉN",
				"info": "Nội tại: Những đòn đánh và chiêu thức tấn công từ phía sau kẻ địch chắc chắn gây chí mạng (tối đa 1500 lên kẻ địch không phải tướng).<br>Tuy nhiên sát thương chí mạng khởi điểm của hắn chỉ là 125% (tăng 0.5% theo mỗi 0.5% tỷ lệ chí mạng Quillen có).<br>Tấn công trước mặt chắc chắn không chí mạng.",
			},
			{
				"name": "CHÉM ĐÔI",
				"info": "Hồi chiêu: 4/3.8/3.6/3.4/3.2/3 giây<br>Tiêu hao: 0 nội năng<br>Quillen chém chớp nhoáng hai lần theo hướng chỉ định, gây 175/200/225/250/275/300 + (0.55 công vật lý cộng thêm) sát thương vật lý mỗi lần."
			},
			{
				"name": "ĐOẢN MỆNH",
				"info": "Hồi chiêu: 9/8.6/8.2/7.8/7.4/7 giây<br>Tiêu hao: 0 nội năng<br>Quillen lướt đi, khi đến đích lập tức tấn công kẻ địch gây 300/340/380/420/ 460/500 + (0.8 công vật lý cộng thêm) sát thương vật lý và đánh dấu nó trong 10 giây (chỉ có thể đánh dấu một kẻ địch mỗi lần).<br>Mỗi lần Quillen công kích nạn nhân bị đánh dấu sẽ làm chậm 50% tốc chạy trong 1 giây, và giảm 1 giây hồi chiêu này.<br>Kẻ địch chịu dấu ấn sẽ bị giảm 30% sát thương gây ra lên Quillen.",
			},
			{
				"name": "ẨN SÁT",
				"info": "Hồi chiêu: 20/18/16 giây<br>Tiêu hao: 0 nội năng<br>Quillen lăn một vòng, sau đó tàng hình trong 3 giây, tăng 40% tốc chạy và hồi 70/105/140 + (0.15 công vật lý cộng thêm) máu mỗi 0.5 giây. Suốt thời gian này, nếu Quillen tấn công kẻ địch sẽ hiện hình và cường hoá bản thân trong 3 giây kế tiếp.<br>Cường hoá: Quillen nhận 150/175/200 công vật lý, và 30% tốc chạy mỗi khi gây sát thương lên kẻ địch.<br>Nội tại: Phụ hoặc hạ gục tướng địch sẽ làm mới hồi chiêu của toàn bộ kỹ năng.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game (nếu tăng chiêu 2 trước)",
				"info": "3,0",
			},
			{
				"name": "*Combo đầu game",
				"info": "3,0,2",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,0,2,0,4",
			},
			{
				"name": "*Hoặc như này",
				"info": "4,3,0,2,0,4",
			},
		],
		"skill_note": "<strong class=\"clr-orange\">*Đầu game</strong><br>- Quillen một sát thủ có khả năng tàng hình và săn đuổi mục tiêu, vì thế vị trí rừng sẽ rất phù hợp với anh ta (cũng có thể nói là bản Butterfly nâng cấp)<br>- Một đều đặt biệt ở Quillen là tấn công mục tiêu từ phía sau sẽ chắc chắn chí mạng, phía trước thì chắc chắn không nhé.<br>- Tận dụng bộ combo đầu game Đoản mệnh + Đánh thường + Chém đôi sẽ tối ưu hóa sát thương, tuy nhiên chú ý là mình phải đứng sau mục tiêu đấy nhé!!<br>- Combo khá mạnh, vì thế hãy ăn các mục tiêu lớn trong rừng rồi đi gank các lane lấy lợi thế nhé!!.<br><br><strong class=\"clr-orange\">*Giữa và cuối game</strong><br>- Quillen hóa thành sát thủ ẩn mình lợi dụng lợi thế này đi săn kẻ địch đi lang thang nhé!!<br>- Chiêu cuối Ẩn sát có khoảng thời gian tàng hình khá ngắn vì thế hãy tập luyện chiêu thức này để gank hợp lý nhé!!<br>- Nội tại chiêu cuối khá giống Butterfly khi mà phụ hoặc hạ gục tướng địch sẽ làm mới hồi chiêu toàn bộ kĩ năng, vì thế trong combat cố gắng hạ mục tiêu nhanh nhất sẽ giúp có lại bộ chiêu thức nhé!!<br>- Vì là sát thủ nên đừng dại dột lao vào đội hình đối thủ khi có một mình nhé hãy sát cánh cùng đồng đội.",
		"skill_special": "TrungTri",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo28",
					"info": "Tỷ lệ chí mạng +0.5%<br>Sát thương chí mạng +2%",
				},
				{
					"name": "NgocTim28",
					"info": "Máu tối đa +13.5<br>Tốc chạy +0.7%",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo39",
					"info": "Tỷ lệ chí mạng +0.7%<br>Sát thương chí mạng +3.6%",
				},
				{
					"name": "NgocTim31",
					"info": "Công vật lý +1.6<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			],
		},
		"item_build": [
			{
				"name": "Đi rừng",
				"info": "KiemTruyHon,GiayKienCuong,ThanhKiem,ThuongXuyenPha,PhucHopKiem,NanhFenrir",
			},
			{
				"name": "Đi rừng (thay thế)",
				"info": "RiuGnoll,GiayHoVe,ThanhKiem,ThuongXuyenPha,AoChoangBangGia,KiemMuramasa",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng bọn",
				"desc": "với sát thương cao và ám sát từ phía sau, với khả năng của đồng bọn giúp cho Quillen dễ tiếp cận mục tiêu từ phía sau hơn,..",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "payna", "id_page": "Payna"},
					{"hero_id": "baldum", "id_page": "Baldum"},
					{"hero_id": "ybneth", "id_page": "Ybneth"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "với khả năng tàng hình ám sát mục tiêu, việc cô lập hoặc giữ cho Quillen không tiếp cận được nguồn sát thương chính bên mình là đều cần thiết nhất,..",
				"info": [
					{"hero_id": "lindis", "id_page": "Lindis"},
					{"hero_id": "arum", "id_page": "Arum"},
					{"hero_id": "omen", "id_page": "Omen"},
					{"hero_id": "payna", "id_page": "Payna"},
					{"hero_id": "annette", "id_page": "Annette"},
					{"hero_id": "roxie", "id_page": "Roxie"},
				]
			}
		],
		"hero_story": "\"Sinh tồn và tôn nghiêm của nhân loại chỉ có thể đạt được dựa trên nền tảng đao kiếm và súng đạn\"<br><i class=\"clr-orange\">Quillen</i> là một ngôi sao mới nổi của diễn đàn Liên bang tự do. Anh không chỉ trẻ trung, tuấn tú, thông tuệ và sáng suốt, mà còn là một chính khách vừa thành thục, vừa giảo hoạt với khả năng ăn nói kiệt xuất. Nếu không phải do lập trường của <i class=\"clr-orange\">Quillen</i> quá cấp tiến, thì hiện tại con đường thăng tiến của anh đã thuận lợi hơn rất nhiều.<br>Tuy vậy, <i class=\"clr-orange\">Quillen</i> chưa bao giờ có ý định thay đổi chính kiến của mình. Bởi so với các bậc cấp cao nay đã luống tuổng thì anh vẫn còn thừa thời gian và kiên nhẫn chờ đợi. <i class=\"clr-orange\">Quillen</i> không khỏi cảm thấy may mắn, nhưng đồng thời cũng cảm thán – tuổi thọ của nhân loại quá ngắn ngủi.<br>Tuổi thọ không phải là nhược điểm duy nhất của nhân loại. So với các chủng tộc trí tuệ khác, bất kể về huyết mạch truyền thừa hay thiên phú ma pháp, nhân loại luôn nằm ở thế yếu. Trong thời kỳ loạn lạc trước kia, nhờ có sự che chở của Tháp quang minh mà con người còn duy trì được đất đai, và lương thực để sinh sống.<br>Ngày nay nhân loại tuy đã chiếm phần lới đại lục, cũng như nắm giữ khoa học kỹ thuật cùng pháp thuật sánh ngang Thần Ma, nhưng mối uy hiếp đến từ thứ lực lượng thừa sức hủy diệt tất cả của Vực hỗn mang, Rừng nguyên sinh, hay thậm chí Tháp quang minh vẫn luôn tồn tại…. Chúng ta phải luôn tỉnh táo và cảnh giác, bởi đồng minh hôm nay rất có thể biến thành kẻ địch chỉ trong ngày mai!<br>Trích đoạn từ bài phát biểu của <i class=\"clr-orange\">Quillen</i> tại buổi tọa đàm về Hiểm họa dị tộc này thể hiện rõ ràng quan điểm nền tảng của <i class=\"clr-orange\">Quillen</i>. Từ một dân thường quật khởi đến ngày hôm nay, chủ trương của <i class=\"clr-orange\">Quillen</i> đã nhận được không ít sự ủng hộ từ các cử tri Liên bang, cũng như đạt được sự che chở của một nhóm các đồng minh có cùng quan điểm cấp tiến. Quan trọng nhất, anh nhận được lời mời gọi của Hội ám hoàng.<br>Quét sạch dị tộc, thanh tẩy thế giới. So với <i class=\"clr-orange\">Quillen</i>, tư tưởng của tổ chức bí ẩn cực đoan chủ nghĩa chủng tộc này thậm chí càng cấp tiến hơn. Họ chủ trương sử dụng bạo lực tiêu diệt tất cả các giống loài có khả năng uy hiếp đến nhân loại, qua đó xác lập nền thống trị tuyệt đối.<br>Trước sự chào mời của sứ giả tổ chức thần bí này, <i class=\"clr-orange\">Quillen</i> không lập tức trả lời. Về lý tưởng cá nhân thì sự tương đồng quan điểm giữa cả hai khiến anh thật sự hứng thú. Nhưng xét trên phương diện cấp cao hơn, anh không khỏi quan ngại sâu sắc về cái giá phải bỏ ra để đạt được mục tiêu này. Đời nào ai lại đánh cược tất cả tiền đồ của mình vào một tổ chức mờ ám, để đạt được một lý tưởng xa vời.<br>Vị sứ giả tựa như đã lường trước được chuyện này. Hắn bày ra một danh sách thể hiện lực lượng của tổ chức, và dần dà từng chứng cứ đanh thép lộ diện: từ chính trị đến kinh tế, từ khoa học kỹ thuật đến quân sự… <i class=\"clr-orange\">Quillen</i> nào hay hóa ra những vị pháp sư truyền kỳ, các kỵ sĩ lưu danh sử sách, thậm chí cả những tư tế của Tháp quang minh, vậy mà đều là thành viên của tổ chức thần bí này.<br>Nhìn vào ánh mắt của vị sứ giả, <i class=\"clr-orange\">Quillen</i> thực sự cảm nhận được tính chân thật của chuyện này, và một viễn cảnh huy hoàng dần hiện ra trước mắt anh – quyền uy và lực lượng để đạt được lý tưởng của đời người. Bản năng thúc đẩy anh đưa ra lựa chọn mang lại lợi ích lớn nhất, bất chấp những nguy hiểm đi kèm.<br>Thế là sau này dù đã trở thành nghị viên của Liên bang, chính thức bước chân vào bộ máy quyền lực trung tâm, nhưng đối với <i class=\"clr-orange\">Quillen</i> đây cũng chỉ là vỏ bọc tạm thời để ngụy trang bản thân. Anh bắt tay cùng các minh hữu không ngừng xây dựng một tổ chức mới với các sát thủ được đào tạo cực kỳ cẩn thận, nhằm thể hiện giá trị của mình đối với tổ chức. Tương tự Hội ám hoàng cũng thể hiện thiện ý rõ rệt khi không ngừng đề bạt <i class=\"clr-orange\">Quillen</i>, giúp anh nhanh chóng trở thành một trong các thành viên then chốt với thực quyền trong tổ chức.<br>Ban ngày <i class=\"clr-orange\">Quillen</i> là một thành viên quyền lực áo quần chỉn chu, lời nói cẩn trọng. Ban đêm anh cũng thực hiện chuyện tương tự, chỉ khác là thay lời nói bằng hành động thông qua lưỡi đao xóa sổ dị tộc.<br>Luật tự nhiên: chỉ kẻ nào thích nghi, sống sót!",
		"hero_skin": [
			{
				"name": "Ám Đao Thanh Trừng",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Quillen01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Trưởng Ngoại Khoa",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Quillen02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "",
			},
		]
	},
	"sephera": {
		"hero_id": "Sephera",
		"hero_name": "Sephera",
		"main_info": {
			"price_gold": "13,888",
			"price_voucher": "359",
			"price_text": "",
			"position": "Pháp sư / Trợ thủ",
			"special": "Yểm hộ / Cấu rỉa",
			"lane": "Đường giữa / Đường rồng",
		},
		"main_skill": [
			{
				"name": "SUỐI NGUỒN",
				"info": "Nội tại: Mỗi khi tung chiêu Sephera sẽ kích hoạt nội tại Suối nguồn gây 75 (+9 mỗi cấp) (0.15 công phép) sát thương phép lên tướng địch lân cận thấp máu nhất, đồng thời hồi 50 + (6 mỗi cấp) + (0.1 công phép) máu cho tướng đồng minh lân cận thấp máu nhất.",
			},
			{
				"name": "THUỶ ÂM",
				"info": "Hồi chiêu: 5 giây<br>Tiêu hao: 50/55/60/65/70/75 năng lượng<br>Sephera gảy đàn tấn công 3 kẻ địch lân cận (ưu tiên tướng), gây 250/280/310/340/370/400 (+0.3 công phép) sát thương phép, đồng thời làm chậm 50% tốc chạy của nạn nhân trong 1 giây.<br>Đặc biệt đòn đánh thường kế tiếp sau khi tung chiêu này sẽ gây thêm 175/200/225/250/275/300 (+0.25 công phép) sát thương phép, và giúp giảm 1 giây hồi tất cả chiêu."
			},
			{
				"name": "AO TÙ",
				"info": "Hồi chiêu: 15/14.4/13.8/13.2/12.6/12 giây<br>Tiêu hao: 70/75/80/85/90/95 năng lượng<br>Sephera được tăng 40% tốc chạy trong thoáng chốc, rồi 1.5 giây sau dựng lên một vòng tròn nước gây 300/360/420/480/540/600 (+0.4 công phép) sát thương phép kèm 0.75 giây choáng, áp dụng đối với những nạn nhân đứng ở rìa.",
			},
			{
				"name": "SUỐI NGUỒN",
				"info": "Hồi chiêu: 50 giây<br>Tiêu hao: 100/110/120 năng lượng<br>Sephera hòa mình vào dòng nước khiến bản thân không thể bị chọn làm mục tiêu trong 1.7 giây, đồng thời giúp hồi 500/650/800 (+0.75 công phép) máu cho các đồng minh lân cận, và gây 600/800/1000 (+0.9 công phép) sát thương phép lên những kẻ địch cạnh bên.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game",
				"info": "3,2,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng",
				"info": "3,2,0,4",
			}
		],
		"skill_note": "<strong class=\"clr-orange\">*Đầu game</strong><br>- Sephera là một Pháp sư kiêm luôn vai trò Trợ thủ, vì thế cô có thể chơi ở Đường giữa hoặc theo cùng Xạ thủ là oke.<br>- Chiêu 1 Thủy âm của cô sau khi dùng nhớ đánh thường thêm 1 cái để tối ưu hóa sát thương, hãy nhớ rằng mỗi lần cô dùng chiêu thức sẽ hồi lượng máu cho đồng minh xung quanh đó rất lợi!!<br>- Chiêu 2 Ao tù là chiêu hơi khó xíu, nhưng chơi nhiều sẽ quen, những kẻ địch đứng ngoài rìa mới bị làm choáng các bạn phải canh chuẩn nha!!<br>- Sephera cũng khá dễ chơi nhưng đừng ảo tưởng về sức mạnh nhé chờ đồng đội lên gank thì chơi, không thì đứng thấp thui không thì bốc hơi đấy dạo gần đây Sát thủ đầy ra!! :P.<br><br><strong class=\"clr-orange\">*Giữa và cuối game</strong><br>- Về giữa và cuối game cố giữ chiêu cuối và tung ra hợp lý vừa hồi máu cho đồng đội và gây sát thương cho kẻ địch, và đặt biệt chiêu này có hiệu lực ngắn ngủi, nên phải tập luyện canh thật chuẩn thời gian.<br>- Dùng chiêu 1 Thủy âm cấu rỉa rất thốn + hiệu ứng làm chậm rất khó chịu và hãy dùng nó liên tục.<br>- Chiêu 2 Ao tù mặc dù hơi khó canh chuẩn nhưng dùng nó để tăng tốc truy sát hoặc dùng cho các pha tẩu thoát.<br>- Chiêu cuối tuy ngắn ngủi nhưng khi dùng khiến bản thân né được hầu hết các chiêu thức bất lợi cho bản thân.",
		"skill_special": "TocBien,CapCuu",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim22",
					"info": "Công phép +1.4 <br>Hút máu phép +0.8%<br>Giáp phép +1.6",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim32",
					"info": "Tốc đánh +1%<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh310",
					"info": "Tốc đánh +0.6%<br>Xuyên giáp phép +6.4",
				}
			],
		},
		"item_build": [
			{
				"name": "Đường giữa",
				"info": "NgocDaiPhapSu,GiayThuatSi,GuomTanThe,MatNaBerith,VuongMiengHecate,CauPhaLe",
			},
			{
				"name": "Chơi hỗ trợ 1",
				"info": "HuanChuongHaiThan,GiayThuatSi,MatNaBerith,AoChoangBangGia,PhuChuTruongSinh,CauPhaLe",
			},
			{
				"name": "Chơi hỗ trợ 2",
				"info": "LenhBaiPhongThan,GiayThuatSi,DayChuyenLucBao,MatNaBerith,TruongBang,GuomHienTriet",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng bọn",
				"desc": "với bộ chiêu thức có sát thương diện rộng nếu kết hợp với đồng bọn sẽ tối ưu hóa sát thương của cô,..",
				"info": [
					{"hero_id": "richter", "id_page": "Richter"},
					{"hero_id": "wiro", "id_page": "Wiro"},
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "ybneth", "id_page": "Ybneth"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "cùng bộ chiêu thức cấu rỉa và khống chế tầm xa, việc lựa chọn các vị tướng cơ động hoặc có khả năng ám sát cô nhanh nhất cỏ thể,..",
				"info": [
					{"hero_id": "liliana", "id_page": "Liliana"},
					{"hero_id": "tulen", "id_page": "Tulen"},
					{"hero_id": "annette", "id_page": "Annette"},
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "quillen", "id_page": "Quillen"},
					{"hero_id": "ngo_khong", "id_page": "NgoKhong"},
				]
			}
		],
		"hero_story": "Nước, nguồn gốc của sinh mệnh.<br>Dòng sông Lothar tựa như một dải lụa xanh biếc nhẹ nhàng quấn vờn quanh tòa thành Karen. Thủy lực vô cùng tận giúp tòa thành chốn biên cương này luôn tràn đầy sức sống, và cũng đồng thời khiến bức tượng tại trung tâm dòng sông nhuốm đầy màu sắc truyền kỳ huy hoàng – khắc họa người sáng lập Hội đồng pháp thuật, kiêm nhiệm viện trưởng Học viện ma pháp, không ai khác hơn pháp sư huyền thoại <i class=\"clr-orange\">Sephera</i>. Dòng sông Lothar cũng là một kỳ tích do chính tay cô tạo ra, ấy thế nên thế gian còn trìu mến gọi cô là Thiên mệnh thủy sư.<br><i class=\"clr-orange\">Sephera</i> bắt đầu học tập ma pháp từ các pháp sư khế ước trực thuộc gia tộc của cô.<br>Tại thời đại thịnh hành ma pháp, lệ thường các quý tộc đều cung phụng một vị pháp sư khế ước. Mối quan hệ đôi bên cùng có lợi này giúp các pháp sư luôn được cung cấp tài nguyên dồi dào, bù lại họ sẽ thực hiện nghĩa vụ bảo hộ không chỉ các thành viên mà còn cả lãnh địa của cả gia tộc, đặc biệt những vấn đề liên quan đến phép thuật siêu phàm. Đối với các gia tộc, pháp sư khế ước hùng mạnh ra sao cũng là một cách thể hiện trực tiếp mặt mũi và thực lực.<br>Đồng thời các pháp sư này cũng sẽ sàng lọc những hậu duệ với thiên phú ma pháp từ gia tộc để biến thành học đồ của mình. Các trường hợp thành tài thường đều sẽ kế nhiệm vai trò của lão sư trong công cuộc bảo hộ gia tộc ở những năm về sau. Và trong lứa học đồ thời bấy giờ, <i class=\"clr-orange\">Sephera</i> đặc biệt nổi bật hơn tất thảy.<br>Vốn <i class=\"clr-orange\">Sephera</i> đã nắm giữ sức mạnh ma pháp một cách sơ bộ. Về sau khi tiếp thu những kiến thức cao cấp hơn, nàng hoàn toàn bộc lộ thiên phú thần kỳ, thậm chí siêu việt lão sư của mình. Đồng thời <i class=\"clr-orange\">Sephera</i> còn là một tín đồ của Tháp quang minh, với nhiều lần tham dự các hoạt động cầu nguyện cùng cứu trợ. Nếu không phải vì còn quan tâm đến gia tộc, nàng đã rửa tội để trở thành một tín đồ chân chính của tòa Tháp.<br>Cả hai thân phận học đồ ma pháp và tín đồ Tháp quang minh của <i class=\"clr-orange\">Sephera</i> vốn không hề mâu thuẫn. Thực ra ma pháp từ thuở Man hoang chính là một trong các tri thức được những Bán thần truyền thụ cho nhân loại. Chuyện này nói có sách, mách có chứng đều đã được công nhận bởi các ma pháp sư truyền kỳ, thậm chí còn được ghi lại trong thánh điển ma pháp. Nói chung ma pháp có thể xem như khởi nguồn từ thần thuật, hoặc nói một cách khác thì ma pháp đẳng cấp cao nhất đạt được chính là thần thuật, thứ có thể giúp kích hoạt thiên phú trong mỗi huyết mạch nhân loại.<br>Thế nên việc <i class=\"clr-orange\">Sephera</i> trở thành tín đồ là một chuyện cực kỳ đáng mừng, đặc biệt khi Tháp quang minh bị tổn hại vô cùng nghiêm trọng sau cuộc đại chiến Hắc ám xâm lược lần một khiến khiến họ không thể không mở rộng thu nạp tín chúng. Trớ trêu thay sự phục hưng của Tháp quang minh khó tránh khỏi tổn hại đến lợi ích của giới quý tộc, và liên đới trực tiếp chính là các pháp sư khế ước cũng không mong muốn tài nguyên vốn đã hữu hạn nay lại càng khan hiếm hơn. <i class=\"clr-orange\">Sephera</i> đứng giữa hai thế lực, một tay cầm quyền trượng, một tay cầm thánh điển, bối rối chẳng biết chọn sao cho đành. Trạng thái cân bằng thật mỏng manh bỗng rạn nứt bởi cuộc đại chiến Thanh trừng. Tháp quang minh đã vạch trần các pháp sư hắc ám đã nghiên cứu ma thuật hắc ám hàng trăm năm qua, việc này đã tạo nên một làn sóng bài trừ ma thuật. <i class=\"clr-orange\">Sephera</i> lúc bấy giờ cũng đã có chút danh tiếng, nàng cùng Dirac và D’Arcy đều tham dự vào cuộc chiến này, họ lãnh đạo một liên minh tiên phong trong công cuộc bài trừ ma thuật hắc ám.<br>Nhưng theo thời gian dần trôi qua, cuộc chiến ngày càng nghiêm trọng hơn, các thế lực liên đới cũng ngày càng đông đảo hơn. Các nhóm quý tộc mới thậm chí còn thừa thắng đổ dầu thêm lửa, buộc tội những quý tộc đã từng có liên hệ với pháp sư hắc ám. <i class=\"clr-orange\">Sephera</i> cảm nhận được tình hình đang leo thang vuột khỏi tầm khống chế, nàng cố gắng tìm cách giúp quần chúng bình tĩnh lại để suy nghĩ thấu đáo hơn, nhưng còn chưa kịp có hành động gì thì Dirac bên cạnh nàng đã lún sâu vào vòng xoáy này đến khôn cùng.<br>Vì cứu vãn Dirac cũng như các pháp sư vô tội khác, và cũng vì để kết thúc trận chiến đã biến chất này, <i class=\"clr-orange\">Sephera</i> cố vận dụng lực lượng của gia tộc, cũng như tìm đến sự trợ giúp của Tháp quang minh. Nhưng lúc bấy giờ khi nhóm quý tộc mới cùng tòa Tháp đã tạo nên mối liên hệ ràng buộc chặt chẽ về lợi ích, và rõ ràng họ đang chiếm thế thượng phong chèn ép hoàn toàn nhóm quý tộc cũ cùng các pháp sư, thì cớ sao họ lại phải ngừng tay.<br>Nếu như tín ngưỡng của ta là quang minh, thì vì sao hiện tại ta lại như đang đầu nhập vào bóng tối? Trước thái độ qua loa đầy lạnh lùng của Tháp quang minh, <i class=\"clr-orange\">Sephera</i> không khỏi tự chất vấn bản thân. Và rồi nàng ngộ ra, vì sao những người thân cận như Dirac và D’Arcy lại ngày càng xa cách và ngờ vực tín ngưỡng của nàng đến thế.<br>May mắn thay <i class=\"clr-orange\">Sephera</i> cũng là một ma pháp sư có danh vọng, điều giúp tiếng nói của nàng có trọng lực hơn. Và với nỗ lực của họ, một số các ma pháp sư vô tội đã được giải cứu, tuy nhiên điều này đã khiến liên minh bài trừ ma thuật và nhóm quý tộc mới dần nảy sinh mâu thuẫn ngày càng kịch liệt hơn.<br>Cuối cùng <i class=\"clr-orange\">Sephera</i> không còn cách nào khác ngoài lãnh đạo những đồng bạn bỏ trốn đến một nơi các thế lực kia không thể vươn xúc tu đến. Trên đường đi không ngừng có các ma pháp sư mới gia nhập vào đội ngũ, một số vì sự căm phẫn tình hình hiện tại, một số vì bị bức hại buộc phải ra đi. Khi đến được Karen, một tổ chức hoàn toàn mới đã vì thế được sáng lập: Hội đồng pháp thuật!<br>Lấy thành Karen làm nền tảng, dùng pháp thuật cải tạo hoàn cảnh sống làm căn cơ, Hội đồng pháp thuật mong muốn tạo ra một vùng đất an lành mới. Họ còn dựng nên một tòa tháp ma pháp ẩn sâu trong chín tầng mây để hiệu triệu thêm các ma pháp sư vẫn còn đang vương vấn chốn trần thế không nơi nương tựa. Sau mấy trăm năm trôi qua, <i class=\"clr-orange\">Sephera</i> với tư cách người sáng lập Hội đồng, cũng như người cải tạo dòng sông Lothar, đã thành công vun đáp nên một nơi thực sự ấm no hạnh phúc.<br>Sức mạnh chỉ có ý nghĩa khi được dùng để bảo vệ!",
		"hero_skin": [
			{
				"name": "Thiên Mệnh Thủy Sư",
				"gold": "13,888",
				"voucher": "359",
				"event": "",
				"wall": "Sephera01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Quý Tiểu Thư",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Sephera02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "",
			},
		]
	},
	"florentino": {
		"hero_id": "Florentino",
		"hero_name": "Florentino",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Đấu sĩ / Sát thủ",
			"special": "Trung phong / Ám sát",
			"lane": "Đường Caesar",
		},
		"main_skill": [
			{
				"name": "XUẤT CHÚNG",
				"info": "Hồi chiêu: 5 giây<br>Đột kích: Florentino khi rời giao tranh sẽ khiến đòn đánh thường kế tiếp lướt tới kẻ địch, gây thêm 80 + (8 mỗi cấp) (+ 1.25 công vật lý cộng thêm) sát thương vật lý. Đòn đánh thường tiếp theo đó sẽ được tăng 20% sát thương. Đột kích trúng tướng địch giúp Florentino hồi 85 + (7 mỗi cấp) (+ 1.0 công vật lý cộng thêm) máu.<br>Kiếm bộ: Sau khi tung Đột kích, Florentino sẽ lướt một đoạn ngắn, miễn nhiễm mọi hiệu ứng khống chế. Lướt xong Florentino được tăng 50% tốc chạy trong 0.5 giây.",
			},
			{
				"name": "HÀO HOA",
				"info": "Hồi chiêu: 10/9.6/9.2/8.8/8.4/8 giây<br>Tiêu hao: 20 nội năng<br>Florentino phóng hoa vào kẻ địch, gây 280/320/360400/440/480 (+ 1.2 công vật lý cộng thêm) sát thương vật lý, làm choáng địch trong 0.75 giây.<br>Dùng trúng địch sẽ tạo ra ba đoá hoa trong 5 giây. Nhặt hoa sẽ giúp Florentino hồi 100 nội năng, đồng thời khiến đòn đánh kế tiếp Đột kích và hoàn lại hồi chiêu của Thưởng hoa."
			},
			{
				"name": "THƯỞNG HOA",
				"info": "Hồi chiêu: 4 giây<br>Tiêu hao: 100 nội năng<br>Florentino tung ba nhát kiếm xảo diệu lên kẻ địch, mỗi lần gây thêm sát thương chuẩn bằng 4% + (0.01 công vật lý cộng thêm) máu tối đa kẻ địch. Khi kết thúc chiêu có thể tung Kiếm bộ, nếu trúng tướng địch sẽ giảm 1 giây hồi chiêu Hào hoa.<br>Thưởng hoa: gây 275/345/415/585/555/625 sát thương vật lý và làm chậm 50% tốc chạy của mục tiêu trong 1 giây<br>Hộ hoa: gây 275/345/415/585/555/625 sát thương vật lý và hất tung 0.75 giây<br>Khai hoa: tung kiếm hai lần gây 225/270/315/360/405/450 sát thương vật lý mỗi kiếm.",
			},
			{
				"name": "TÀI HOA",
				"info": "Hồi chiêu: 40/35/30 giây<br>Tiêu hao: 0 nội năng<br>Florentino lướt đến phía trước, Quyết đấu với tướng đầu tiên trúng chiêu đồng thời tạo ra ba đóa hoa quanh mục tiêu. Trong 5 giây kế tiếp, Florentino tăng 100% hiệu ứng hồi máu từ nội tại, đồng thời giảm giáp kẻ đó 15/20/25%.<br>Suốt thời gian này, Florentino miễn nhiễm mọi khống chế và miễn 50% sát thương từ những kẻ địch không bị Quyết đấu.<br>Nếu hạ gục mục tiêu, Florentino nhận 20 công vật lý vĩnh viễn, cộng dồn 10 lần.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game: kết hợp nhặt hoa",
				"info": "2,0,3,0,3,0,3,0",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng: kết hợp nhặt hoa",
				"info": "4,2,0,3,0,3,0,3,0",
			},
		],
		"skill_note": "<strong class=\"clr-orange\">*Đầu game</strong><br>- Florentino với bộ kỹ năng mới lạ và khá cơ động phù hợp vị trí Đường Caesar hoặc đi Rừng, hãy mang phép bổ trợ phù hợp nhé!!<br>- Khả năng tay đôi là khá mạnh kết hợp với sát thương cao và hồi phục từ Nội tại.<br>- Anh em mới chơi để ý combo đầu game như sau: dùng chiêu Hào hoa trúng mục tiêu sẽ tạo ra 3 bông hoa trên mặt đất > đánh thường lướt tới > chiêu 2 > nhặt hoa, đánh thường > chiêu 2 > nhặt hoa, đánh thường > chiêu 2 > nhặt hoa, đánh thường.<br>- Combo khá khó đồi hỏi các bạn phải tập luyện nhiều vào mới có thể mang vào đánh rank được!!<br>- Chiêu thức có thể vượt địa hình vì thế mọi người cố gắng tập luyện để khả năng lã lướt nó uyển chuyển hơn!!.<br><br><strong class=\"clr-orange\">*Giữa và cuối game</strong><br>- Về giữa và cuối game khả năng ám sát mục tiêu khá mạnh vì thế hãy đi gank các đường khác hoặc cố gắng đẩy cao lính ở 2 bên đường, nhanh chóng đi cùng đồng đội combat hoặc ăn mục tiêu lớn.<br>- Chiêu cuối khá bá đạo đặc biệt trong đấu tay đôi, hãy chọn mục tiêu và dùng chiêu cuối, hạ gục mục tiêu đang chọn sẽ nhận công vật lý vĩnh viễn (cộng dồn đến 10 lần), ngoài ra còn miễn nhiễm mọi khống chế nửa bá quá!!<br>- Ra vào combat thích hợp để tối ưu hóa sát thương, cố gắng giữ mạng và rút lui khi cảm thấy không ổn.",
		"skill_special": "BocPha,TrungTri",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo25",
					"info": "Công vật lý +1.5<br>Máu tối đa +13.5",
				},
				{
					"name": "NgocTim28",
					"info": "Máu tối đa +13.5<br>Tốc chạy +0.7%",
				},
				{
					"name": "NgocXanh23",
					"info": "Máu tối đa +13.5<br>Xuyên giáp +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo36",
					"info": "Công vật lý +2<br>Xuyên giáp +3.6",
				},
				{
					"name": "NgocTim31",
					"info": "Công vật lý +1.6<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			],
		},
		"item_build": [
			{
				"name": "Đường Caesar",
				"info": "ThuongLonginus,GiayThuatSi,PhucHopKiem,KiemFafnir,NanhFenrir,GiapHoMenh",
			},
			{
				"name": "Đường Caesar",
				"info": "AoChoangThanRa,GiayThuatSi,PhucHopKiem,NanhFenrir,HerculeThinhNo,GiapHoMenh",
			},
			{
				"name": "Đi rừng",
				"info": "KiemTruyHon,GiayThuatSi,AoChoangBangGia,ThanhKiem,SongDaoBaoTap,GiapHoMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng bọn",
				"desc": "sở hữu bộ kỹ năng khá cơ động, đặt biệt càng mạnh khi cô lập được mục tiêu, dưới đây là một trong số tướng có thể giúp tối ưu hóa sát thương của anh ta,..",
				"info": [
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "annette", "id_page": "Annette"},
					{"hero_id": "chaugnar", "id_page": "Chaugnar"},
					{"hero_id": "ybneth", "id_page": "Ybneth"},
					{"hero_id": "maloch", "id_page": "Maloch"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "khá trở ngại khi gặp các đối thủ cơ động khác, hoặc có thể cô lập anh ta, ngăn anh ta tiếp xúc với những đóa hoa nở rộ trên mặt đất,...hãy tránh xa những đóa hoa trên mặt đất.",
				"info": [
					{"hero_id": "quillen", "id_page": "Quillen"},
					{"hero_id": "ngo_khong", "id_page": "NgoKhong"},
					{"hero_id": "annette", "id_page": "Annette"},
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "arum", "id_page": "Arum"},
					{"hero_id": "roxie", "id_page": "Roxie"},
					{"hero_id": "tulen", "id_page": "Tulen"},
					{"hero_id": "liliana", "id_page": "Liliana"},
				]
			}
		],
		"hero_story": "Xinh tươi hơn các đóa hoa, chỉ có thể là những mỹ nữ!<br>Là truyền nhân trực hệ duy nhất của đại gia tộc “Ngát hương”, <i class=\"clr-orange\">Florentino</i> phong lưu phóng khoáng, vun tiền qua cửa sổ tổ chức các vũ hội xa hoa không chút nháy mắt.<br>Bất kể cư dân tòa thành, hoặc khách vãng lai, đều thường xuyên được chứng kiến tòa trang viên của <i class=\"clr-orange\">Florentino</i> bày đại tiệc chiêu đãi khách ghé thăm với hàng trăm hàng ngàn người hầu, công nhân làm thuê rải hoa tươi sớm mai suốt dọc một đường dài; vô số các đội xe thú thồ vận tải đầy những nguyên vật liệu. Chẳng lạ gì khi các tiểu thư quý tộc trẻ trung xinh xắn nô nức đua nhau ăn vận trang điểm, lòng háo hức chờ mong chàng bạch mã hoàng tử đến rước mình tham gia buổi vũ hội.<br>Kể cả bình dân không đủ tư cách tham gia vẫn có thể kiếm lợi từ đây. Sau khi vũ hội chính thức bắt đầu, các sạp hoa tươi trang trí ven đường sẽ được phân phát cho mọi người dân mang về thưởng thức hương thơm ngát suốt mấy tuần liền. Chưa hết, vật tư còn thừa cũng sẽ được vận chuyển đến các khu dân chúng để người người, nhà nhà đều có thể cùng chung vui với đầy thịt tươi, trái ngọt.<br>Đối với một tòa thành có truyền thống danh tướng lâu đời, chuyên chú võ lực thì hành vi xa hoa của <i class=\"clr-orange\">Florentino</i> khiến anh chẳng khác gì một tên trụy lạc trác táng. “Kể cả đánh xe ngựa của ta cũng thừa sức một tay quật ngã ngài <i class=\"clr-orange\">Florentino</i> tôn quý nha.” Trò đùa này là một trong những câu cửa miệng tại các bữa tiệc trà của giới quý tộc. Còn với giới bình dân, ngoại trừ một số được hưởng ân huệ của <i class=\"clr-orange\">Florentino</i> nên có cảm tình và lâu lâu ngẫu nhiên lại tán dương vài câu, còn lại đa số đều cảm thấy chướng mắt với vị thiếu gia ăn chơi lêu lổng này.<br>Miệng lưỡi thế gian chẳng khiến <i class=\"clr-orange\">Florentino</i> gợn tí sóng lòng nào. Từ nhỏ lớn lên anh đã biết mình khác biệt với đa số ngoài kia. Gia tộc huyết mạch, quyền lực, tài phú hay thậm chí là thiên phú cho anh vô vàn lựa chọn để sống cuộc đời của mình, vậy thì cớ gì phải chọn những con đường phung phí sức lực. Các lãnh chúa tổ tiên tài ba đã gây dựng nên cả cơ ngơi gia tộc là thế, nếu ta không cố gắng tiêu xài làm rạng rỡ tông đường thì thật đáng xấu hổ.<br>Dẫu chiến sự nơi tiền tuyến ngày càng căng thẳng hơn, <i class=\"clr-orange\">Florentino</i> tại hậu phương an bình vẫn ngày ngày dạ tiệc xướng ca hoan hỉ. Ấy thế mà nữ bá tước tòa thành cũng không bận tâm lắm về chuyện này. Dù sao thì hành vi của <i class=\"clr-orange\">Florentino</i> chẳng hề phạm pháp, mà thật ra việc hắn tiêu xài xa xỉ một mặt lại giúp gia tăng mậu dịch và sưu thuế của tòa thành, mặt khác lại giúp người dân có thêm công ăn việc làm, qua đó không ngừng thu hút nhân khẩu lân cận đổ xô về đây.<br>Và thế là binh đoàn của toàn thành luôn được đảm bảo hậu phương tiếp tế vững chắng, không chỉ vật tư, mà cả binh lực.<br>Thế nên nữ bá tước chưa bao giờ can thiệp vào các hành vi hoang đường của <i class=\"clr-orange\">Florentino</i>, chỉ đến khi hắn tung tiền xây dựng một chiếc tàu khổng lồ xa hoa cực đại mới buộc bà phải hành động.<br><i class=\"clr-orange\">Florentino</i> dự tính mời đầy những khách quý lên chiếc tàu ngược sông thẳng tiến về Rừng nguyên sinh, chủ yếu thỏa mãn trí tò mò về nhan sắc của các mỹ nữ tinh linh. Kế hoạch này của <i class=\"clr-orange\">Florentino</i> lập tức hấp dẫn vô số quý tộc, và mỗi con em của họ đều nhận được chiếc vé mời, thứ bỗng chốc trở thành biểu hiện của địa vị và quyền lực khôn cùng.<br>Ngay cả tiểu thơ Astrid của nữ bá tước cũng mang theo kỵ sĩ cùng đồng hành trên chiếc thuyền này. Tuy này không ưa vị thiếu gia trứ danh ăn chơi trác táng này, nhưng tiền tuyến cần một hậu phương vững chắc, và điều này thì lại phần nào phụ thuộc vào sự an nguy và tâm trạng của <i class=\"clr-orange\">Florentino</i> – hắn và gia tộc của hắn ảnh hưởng đến 80% nguồn tài chính nơi đây.<br>“Ngoan ngoãn nghe lời ta, đảm bảo ngươi sẽ được an toàn!” Đây là câu nói đầu tiên ngay khi Astrid gặp mặt <i class=\"clr-orange\">Florentino</i>, rồi cô lập tức quay đầu bỏ đi, thật không muốn phải nhìn thấy hắn thêm giây phút nào nữa. <i class=\"clr-orange\">Florentino</i> nhún vai, với nữ giới anh vẫn luôn tràn đầy kiên nhẫn và tha thứ, đặc biệt là các quý cô xinh đẹp.<br>Thuyền của <i class=\"clr-orange\">Florentino</i> xuất phát và trở về áng chừng mất 1 tháng. Dĩ nhiên chỉ bấy nhiêu thời gian không đủ để đoàn người du ngoạn được bao xa trong rừng rậm. Những kẻ hiếu kỳ cố gắng nghe ngóng tình hình, nhưng các quý tộc sau khi quay lại đều miệng kín như bưng, nói năng đặc biệt vô cùng thận trọng. Người duy nhất khác biệt chỉ có Astrid, những người biết rõ nàng lập tức nhận ra sự thay đổi khi nàng trở nên thành thục và chững chạc hơn. Chưa hết, chuyện còn ly kỳ hơn khi có tin Astrid sử dụng lễ tiết trang trọng nhất của vương quốc để thỉnh <i class=\"clr-orange\">Florentino</i> làm thầy. Ai ai cũng không khỏi cho rằng nàng đã bị <i class=\"clr-orange\">Florentino</i> mê hoặc, chỉ có cách giải thích như vậy mới có vẻ hợp lý nhất cho hành động điên cuồng này.<br>Đối mặt với làn sóng dư luận, cả hai người trong cuộc đều chẳng bận tâm giải thích. Phải đến mấy năm sau khi vương quốc phương bắc và phương nam ký kết minh ước, thì mới có một ít thông tin về chuyến đi kia được hé lộ: chuyện kể rằng nhóm du ngoạn của <i class=\"clr-orange\">Florentino</i> đã có một cuộc đụng độ nảy lửa với binh đoàn Vực hỗn mang. Trong trận chiến cam go này Astrid đã sơ hở bị một sát thủ của kẻ địch phục kích đâm trúng, và ngay khoảnh khắc sinh tử này Astrid đã được <i class=\"clr-orange\">Florentino</i> bất thình lình xuất hiện đẩy lui tên sát thủ, và sau đó phá vây thành công cứu Astrid thoát chết.<br>Du khách cả thuyền không khỏi ngớ người bàng hoàng. Chẳng ai ngờ rằng ẩn sau vẻ ngoài thiếu gia phóng đãng ăn chơi trác táng lại là một trái tim quả cảm đầy dũng mãnh. Tuy nhiên cân nhắc đến các yếu tố vương quyền nhạy cảm, người trong cuộc đều buộc phải tuân thủ luật im lặng. Chỉ riêng có Astrid là kiên quyết muốn bái sư, bất chấp tất cả. <i class=\"clr-orange\">Florentino</i> hiển nhiên chẳng muốn dính đến thứ phiền toái này, nhất là khi đối phương lại là một cô gái rực lửa cả về cá tính lẫn thân hình.<br>Thỉnh cầu từ một cô gái xinh đẹp, thật khó mà cưỡng lại được nhỉ!",
		"hero_skin": [
			{
				"name": "Tay Kiếm Hào Hoa",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Florentino01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Vũ Kiếm Sư",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Florentino02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "",
			},
		]
	},
	"veres": {
		"hero_id": "Veres",
		"hero_name": "Veres",
		"main_info": {
			"price_gold": "18,888",
			"price_voucher": "539",
			"price_text": "",
			"position": "Đấu sĩ / Sát thủ",
			"special": "Trung phong / Ám sát",
			"lane": "Đường Caesar",
		},
		"main_skill": [
			{
				"name": "HUYẾT XÍCH",
				"info": "Nội tại: Các đòn đánh thường trúng đích giúp Veres tích lũy 1 điểm nội tại Huyết xích trong vòng 10 giây; khi đạt đủ 4 điểm tích lũy Veres sẽ tung Bạo xích tấn công tất cả kẻ địch lân cận, gây sát thương vật lý; nếu có tướng địch trúng đòn, Veres hồi lại 12% sát thương gây ra (máu càng thấp, tỷ lệ hút máu càng cao lên đến 120%). Đặc biệt Veres còn được giảm 1 giây hồi Song xích & Xiềng xích, và 2 giây hồi Đoạt mệnh xích. Chưa hết, suốt thời gian tung Bạo xích Veres có thể thoải mái di chuyển, và còn được tăng 35% kháng hiệu ứng.",
			},
			{
				"name": "SONG XÍCH",
				"info": "Hồi chiêu: 6 giây<br>Tiêu hao: 0 năng lượng<br>Veres phóng xích tách làm hai sợi tấn công kẻ địch gây 130/180/230/280/330/380 (+0.6 công vật lý) sát thương vật lý. Nạn nhân xấu số trúng cả hai sợi xích sẽ bị choáng 1 giây.<br>Chưa hết, tung xích trúng tướng địch giúp Veres nhận một điểm tích lũy Huyết xích."
			},
			{
				"name": "XIỀNG XÍCH",
				"info": "Hồi chiêu: 12/11.4/10.8/10.2/9.6/9 giây<br>Tiêu hao: 0 năng lượng<br>Veres phóng xích tấn công kẻ địch gây 85/120/155/190/225/260 (+0.4 công vật lý) sát thương vật lý. Đặc biệt sợi xích sẽ đẩy lùi kẻ địch nếu chúng đang ở gần Veres, hoặc kéo kẻ địch về trước mặt nếu chúng đang ở xa Veres; trong cả hai trường hợp nạn nhân đều sẽ bị choáng ngay sau đó.<br>Chưa hết, tung xích trúng tướng địch giúp Veres nhận một điểm tích lũy Huyết xích.",
			},
			{
				"name": "ĐOẠT MỆNH XÍCH",
				"info": "Hồi chiêu: 24/21/18 giây<br>Tiêu hao: 0 năng lượng<br>Veres nhảy đến phía trước triệu hồi vô số xích trồi lên từ mặt đất tấn công những kẻ địch trong vùng ảnh hưởng, gây 300/450/600 + 12/16/20% (+1% mỗi 100 công vật lý) máu đã mất của mục tiêu sát thương chuẩn<br>Tung chiêu trúng tướng địch giúp Veres tiến vào trạng thái Cuồng huyết: tăng 30/45/60% tốc đánh, 150/250/350 công vật lý, 15/25/35% xuyên giáp trong 4 giây (nếu kết liễu tướng địch sẽ tăng thành 10 giây). Suốt thời gian này nếu nội tại được kích hoạt tung Huyết xích trúng một tướng địch sẽ giúp tăng thêm 2 giây trạng thái Cuồng huyết.",
			}
		],
		"skill_up": {
			"line1": "1,3,5,7,9,11",
			"line2": "2,6,10,13,14,15",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game: kết hợp nội tại khi tích 4 điểm",
				"info": "0,3,2,1",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng: kết hợp nội tại khi tích 4 điểm",
				"info": "0,3,2,1,4",
			},
			{
				"name": "*Hoặc như này",
				"info": "4,3,2,1,0",
			},
		],
		"skill_note": "<strong class=\"clr-orange\">*Đầu game</strong><br>- Veres giữ vai trò Đấu sĩ kiêm Sát thủ vì thế đường Caesar sẽ vô cùng thích hợp đối với cô.<br>- Đầu game nên chơi an toàn giữ vị trí farm nhanh lính và cố gắng ăn các mục tiêu lớn hơn như chim, dơi,..<br>- Dùng Chiêu 2 Xiềng xích linh hoạt để ăn lính và cấu máu đối phương, hãy để ý chiêu này nếu mục tiêu gần người sẽ đẩy ra, còn mục tiêu ở xa sẽ kéo về và choáng nhẹ.<br>- Để ý Chiêu 1 Song xích sẽ làm choáng mục tiêu nếu cả 2 sợi xích cùng trúng mục tiêu.<br>- Cái quan trọng nhất đối với Veres là chiêu Nội tại, khi đánh thường hoặc dùng kỹ năng sẽ tích lũy điểm nội tại.<br>- Đạt đủ 4 điểm nội tại sẽ tung ra vùng chiêu gây sát thương kẻ địch xung quanh, hãy canh sao cho rìa vùng chiêu trúng mục tiêu càng nhiều càng tốt, làm choáng và hồi máu cho cô. Vùng chiêu này rất khó canh vì thế hãy tập luyện nhiều Veres thì mới có thể chơi tốt được cô nàng gai gốc này.<br><br><strong class=\"clr-orange\">*Giữa và cuối game</strong><br>- Về giữa và cuối game, cố gắng dọn dẹp lính, và đẩy trụ nếu có thể, đảo đường giúp đỡ các lane khác, cùng đồng đội ăn các mục tiêu lớn như Rồng, Rồng bạo chúa, hoặc cao hơn là Caesar.<br>- Khả năng tay đôi là có tuy nhiên đừng vì quá hăng máu mà cân 2, 3 nhé.<br>- Chiêu cuối Đoạt mệnh xích dùng để kết thúc mục tiêu khá tốt, dùng tốt quá kẻo đồng đội gọi là KS đấy nhé. Chiêu này đặc biệt dùng để tấn công hoặc bỏ chạy khá ổn, có thể vượt cả địa hình nửa đó.<br>- Nói chung Veres khá ổn khi đi đường nên đừng ngại solo nhé. cảm thấy không ổn thì gọi rừng lên chơi kk!!",
		"skill_special": "TocBien,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo26",
					"info": "Công vật lý +1.5<br>Tốc đánh +0.4%",
				},
				{
					"name": "NgocTim23",
					"info": "Công vật lý +0.6<br>Máu tối đa +36",
				},
				{
					"name": "NgocXanh21",
					"info": "Tốc đánh +0.4%<br>Giảm hồi chiêu +0.5%",
				}
			],
			"rune3": [
				{
					"name": "NgocDo36",
					"info": "Công vật lý +2<br>Xuyên giáp +3.6",
				},
				{
					"name": "NgocTim32",
					"info": "Tốc đánh +1%<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh31",
					"info": "Công vật lý +0.9<br>Xuyên giáp +6.4",
				}
			],
		},
		"item_build": [
			{
				"name": "Đường Caesar",
				"info": "AoChoangThanRa,GiayKienCuong,KhienHuyenThoai,HuanChuongTroy,HerculeThinhNo,GiapHoMenh",
			},
			{
				"name": "Đường Caesar (thay thế 1)",
				"info": "ThuongLonginus,GiayKienCuong,KhienHuyenThoai,GiapGaia,GiapCuongNo,GiapHoMenh",
			},
			{
				"name": "Đường Caesar (thay thế 2)",
				"info": "KiemTruyHon,GiayThuatSi,RiuHyoga,KiemFafnir,NanhFenrir,GiapHoMenh",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng bọn",
				"desc": "có bộ kỹ năng ở dạng khá về sát thương lẫn khống chế, khi chơi cùng các đồng đội có khả năng giữ, làm chậm, câm lặng,.. mục tiêu sẽ khiến Veres càng trở nên mạnh hơn bao giờ hết,..",
				"info": [
					{"hero_id": "mina", "id_page": "Mina"},
					{"hero_id": "aleister", "id_page": "Aleister"},
					{"hero_id": "alice", "id_page": "Alice"},
					{"hero_id": "ybneth", "id_page": "Ybneth"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "khá phụ thuộc vào Nội tại, vì thế một số tướng cơ động, bay nhảy, thậm chí là giữ chân cô sẽ làm Veres trở nên khốn đốn và khó tích đủ Nội tại chiêu giúp cô hồi phục,..",
				"info": [
					{"hero_id": "annette", "id_page": "Annette"},
					{"hero_id": "arum", "id_page": "Arum"},
					{"hero_id": "roxie", "id_page": "Roxie"},
					{"hero_id": "tulen", "id_page": "Tulen"},
					{"hero_id": "liliana", "id_page": "Liliana"},
				]
			}
		],
		"hero_story": "“Thật thú vị, kẻ nào vừa triệu hoán ta?” Âm thanh mê hoặc vang vọng phá vỡ sự tĩnh lặng nơi đây, một tầng hầm cỡ bảy mét vuông với duy nhất cửa ra vào, không cửa sổ hoặc bất kỳ nội thất dư thừa nào khác. Nền sàn và bức tượng nặn ác ma nằm ở giữa căn phòng – tất cả đều đúc từ hắc diện thạch (đá obsidian) – được khắc đầy những chú ngữ ma pháp phức tạp.<br>Máu của <i class=\"clr-orange\">Veres</i> thẩm thấu khắp pháp trận, chúng bò dọc theo các đường vân chú ngữ lấp lánh ánh đỏ, hệt như lũ mãng xà háu đói đang tỏa ra tìm mồi. Nghi thức hiến tế cực kỳ nguy hiểm này sử dụng năng lượng chú ngữ hắc ám làm môi giới, máu làm vật dẫn để mở đường cho hình chiếu của “vị khách” đến từ chiều không gian khác.<br>Suốt quá trình này, nếu sinh lực của kẻ hiến tế không đủ cung cấp, nạn nhân sẽ bị hút cạn máu thành xác khô; nếu ý lực không đủ sẽ dễ bị hình chiếu mê hoặc rồi sa đọa thành tay sai của Vực hỗn mang. Đây quả thực là một cuộc khảo nghiệm sinh tử cả thể xác lẫn tinh thần.<br>Hiện tại vị khách đã đáp lời mời và xuất hiện cùng giọng điệu ma mị rung động tâm hồn. Nhưng <i class=\"clr-orange\">Veres</i> không quan tâm, cô dừng hiến tế rồi tập trung dùng răng và cánh tay còn lại để băng bó vết thương. Nghi thức đã hoàn thành được một nửa, cô cần đảm bảo đủ tỉnh táo để tiếp tục mà không phạm sai lầm nào.<br>“Người đừng lặng yên đến thế? Cô bé, chẳng phải ngươi gọi ta đến đây sao?” Âm thanh nhỏ như muỗi kêu, êm ái thấu tận xương tủy.<br>“Không ngờ lại là mụ già nhà ngươi xuất hiện.” <i class=\"clr-orange\">Veres</i> dùng răng cắn đứt băng vải gạc, lạnh lùng nói.<br>“Haha, cô bé vẫn đanh đá như xưa nhỉ.” Veera - kẻ chủ mưu kế hoạch sa đọa, trí giả của Vực hỗn mang – bật cười khanh khách. Tuy nhiên kể cả đã sống hàng vạn năm và từng trải khôn cùng, vẫn thật khó có thể thoát khỏi thất tình lục dục. Câu vừa rồi của <i class=\"clr-orange\">Veres</i> quả thật khó nghe.<br>“Đừng nói nhảm. Thời gian có hạn, tập trung vào giao dịch đi!” Nói xong <i class=\"clr-orange\">Veres</i> móc trong ngực ra một quyển sổ da dê rồi ném vào quầng sáng bao quanh bức tượng. “Đây là thứ ta muốn, kèm bảng giá bên trong.”<br>Như có một bàn tay vô hình trong không trung từ từ lật mở cuốn sách.<br>“Giao dịch thỏa đáng. Ngươi cung cấp thứ ta cần, thứ ngươi muốn ta có, không, chính xác hơn là chỉ ta mới có.” Veera nhanh giọng, “Chỉ là, ta thật tò mò, ai dạy cho ngươi nghi thức này? Còn quyển sổ, mùi có vẻ nghe quen quen làm sao…”<br>“Ác ma đã già khú đế, sao toàn nói nhảm hệt loài người vậy?” <i class=\"clr-orange\">Veres</i> nhếch mép, “Nếu không còn gì khác thì bắt đầu ký khế ước đi!”<br>“Haha, tốt nhất là ngươi cầu cả đời này đừng gặp phải ta, nếu không đừng hỏi ta sẽ làm gì với cái mồm của ngươi.” Nói xong không đợi <i class=\"clr-orange\">Veres</i> đáp lại, Veera liền biến mất.<br>Khế ước, đã có hiệu lực.<br><i class=\"clr-orange\">Veres</i> thở dài nhẹ nhõm. Kế hoạch hôm nay hệt như đang diễn xiếc thăng bằng trên dây, chỉ cần sai một ly dễ đi cả mạng người. Dẫu đã có hứa hẹn tất cả trong tầm kiểm soát của vị Ma đạo sĩ kia, nhưng <i class=\"clr-orange\">Veres</i> chưa bao giờ tin gã cả. Một  tên suốt ngày lén lén lút lút, tên cũng không dám để lộ ra, thì nói gì đến niềm tin?<br>Xuất thân sát thủ siêu cấp đời mới nhất, người <i class=\"clr-orange\">Veres</i> tin cậy chỉ duy nhất Quillen, sư phụ của nàng. Bằng khả năng của mình, <i class=\"clr-orange\">Veres</i> đã vực dậy Hội ám hoàng, gián tiếp giúp Quillen lấy lại vị thế của bản thân. Sau đó Quillen tạm điều <i class=\"clr-orange\">Veres</i> sang phục vụ dưới trướng Ma đạo sĩ, đây là một động thái đắc nhân tâm các đại biểu, cũng như gián tiếp chứng minh sự tận tụy với tổ chức trước mắt lãnh đạo các phe phái khác.<br>Đợt phản loạn của Amily ba năm trước gây ảnh hưởng cực kỳ nặng nề đối với Hội ám hoàng nói chung, và Quillen nói riêng. Trước sự chất vấn của tổ chức, Quillen buộc phải đứng ra chịu trách nhiệm và giao ra một bộ phận quyền lực, rồi tạm thời ẩn nhẫn chờ cơ hội mới. Suốt quãng thời gian đó, gần như mỗi ngày trôi qua với Quillen đều đầy u ám và dày vò. <i class=\"clr-orange\">Veres</i> - một đệ tử ruột được chính tay Quillen đào tạo - mắt thấy tai nghe tất cả những điều này không khỏi khiến cô ngày càng căm hận Amily hơn.<br>“Mỗi lần nhìn thấy ngươi, ta lại nhớ đến nàng. Cớ sao cả hai lại giống nhau đến thế!” Quillen luôn lặp lại điều này với <i class=\"clr-orange\">Veres</i>. Bất kể mọi chuyện đã xảy ra, bất kể mâu thuẫn nội tâm, Quillen vẫn luôn một mực rất ưu ái Amily.<br>Tuy không hiểu được ẩn ý của Quillen, nhưng <i class=\"clr-orange\">Veres</i> - thời bấy giờ còn là một thiếu nữ mới lớn – không khỏi phản cảm trước sự so sánh bản thân với kẻ phản đồ, đặc biệt khi điều này lại đến từ người mình kính yêu nhất. Trên hết, cô mơ hồ cảm thấy có vẻ trong lòng của Quillen, mình chưa bao giờ vượt qua được hình bóng của Amily.<br>Thế nên <i class=\"clr-orange\">Veres</i> mới bằng mọi giá, bất chấp tất cả nguy hiểm để thực hiện cuộc giao dịch. Điều này không chỉ nhằm giúp Quillen danh chính ngôn thuận tái xuất hiện, mà còn để bản thân siêu việt trước kia. Chính Ma đạo sĩ đã khẳng định, khi chủ thể trở thành vật dẫn giữa hai thế giới thông qua khế ước, năng lượng từ Vực hỗn mang sẽ cuồn cuộn không ngừng rót vào huyết mạch, và nhờ đó cô sẽ đạt được lực lượng mới, thậm chí thay da đổi thịt cải biến dung mạo.<br>“Ta chỉ cần xác nhận mình sẽ không trở thành tay sai của lũ sa đọa!” <i class=\"clr-orange\">Veres</i> lòng dặn lòng quyết tâm. Lời hứa hẹn của Ma đạo sĩ chưa bao giờ khiến <i class=\"clr-orange\">Veres</i> yên tâm, nhưng với sự ủng hộ của Quillen, nàng sẵn sàng liều tất cả. Và sau khi hoàn thành giao dịch này, nàng có một và chỉ một mục tiêu: truy lùng kẻ phản bội để khiến ả ta phải trả cái giá rất đắt.<br>“Ta hoàn toàn ưu tú hơn ngươi, hãy đợi đấy!”",
		"hero_skin": [
			{
				"name": "Huyết Luyện Xích",
				"gold": "18,888",
				"voucher": "539",
				"event": "",
				"wall": "Veres01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Đạo Tặc",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Veres02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "",
			},
		]
	},
	"darcy": {
		"hero_id": "Darcy",
		"hero_name": "D'Arcy",
		"main_info": {
			"price_gold": "??",
			"price_voucher": "539",
			"price_text": "",
			"position": "Pháp sư",
			"special": "Khống Chế / Cấu rỉa",
			"lane": "Đường giữa / Đường Caesar",
		},
		"main_skill": [
			{
				"name": "LỰC LƯỢNG THỨ NGUYÊN",
				"info": "Hồi chiêu: 0 giây<br>Tiêu hao: 0 năng lượng<br>Nội tại: D'Arcy tăng Lực lượng thứ nguyên trong suốt trạng thái giao tranh thông qua các đòn đánh thường và chiêu trúng đối phương. Nếu thoát khỏi giao tranh, Lực lượng thứ nguyên sẽ nhanh chóng giảm dần.<br>Khi Lực lượng thứ nguyên đạt đến tối đa, D'Arcy được cường hóa trong 8 giây, hồi 20% năng lượng đã tổn thất, đồng thời được tăng 20% tốc chạy và cường hóa kỹ năng thường kế tiếp.",
			},
			{
				"name": "DU HÀNH THỨ NGUYÊN",
				"info": "Hồi chiêu: 8/7.6/7.2/6.8/6.4/6 giây<br>Tiêu hao: 70 năng lượng<br>D'Arcy tiến vào một chiều không gian cấp cao trong 1.5 giây giúp bản thân miễn nhiễm khống chế đồng thời được tăng 20% tốc chạy và chịu giảm 40/42/44/46/48/50% sát thương. Đòn đánh thường tiếp theo trong vòng 5 giây sẽ được tăng tầm đánh và gây thêm 300/370/440/510/580/650 (+0.8 công phép) sát thương phép và làm chậm 60% tốc chạy của nạn nhân. Du hành thứ nguyên sẽ mất tác dụng ngay khi D'Arcy tung chiêu hoặc đòn đánh.<br>Lực lượng thứ nguyên đạt tối đa giúp cường hóa: Darcy tăng thêm 40% tốc chạy và hồi phục [10/11/12/13/14/15% máu đã tổn thất + 100/120/140/160/180/200 (+0.3 công phép)] máu."
			},
			{
				"name": "LẬP PHƯƠNG THỨ NGUYÊN",
				"info": "Hồi chiêu: 6.5/6/5.5/5/4.5/4 giây<br>Tiêu hao: 70 năng lượng<br>D'Arcy tạo ra một Lập phương thứ nguyên tại điểm đã chọn, thứ sẽ bùng nổ sau 1,25 giây và gây 900/990/1080/1170/1260/1350 (+1.75 công phép) sát thương phép.<br>Lực lượng thứ nguyên đạt tối đa giúp cường hóa: gia tăng phạm vi sát thương của Lập phương thứ nguyên, đồng thời giúp D'Arcy tích lũy thêm 10 Lực lượng thứ nguyên theo mỗi đơn vị trúng chiêu.",
			},
			{
				"name": "MA TRẬN THỨ NGUYÊN",
				"info": "Hồi chiêu: 45/40/35 giây<br>Tiêu hao: 125 năng lượng<br>D'Arcry tạo ra một Ma trận thứ nguyên tại điểm đã chọn, tất cả kẻ địch trúng chiêu sẽ phải chịu 100/150/200 (+0.4 công phép) sát thương phép và chịu dấu ấn thứ nguyên. Sau 2 giây tất cả nạn nhân đang phải chịu dấu ấn sẽ bị cưỡng ép truyền tống về Ma trận và trúng choáng thoáng chốc (thời gian hồi chiêu bắt đầu tính từ lúc này).<br>Đặc biệt trong vòng 6 giây sau khi tung chiêu, D'Arcy có thể kích hoạt lần nữa để tự truyền tống bản thân về tâm Ma trận và gây 200/350/500 (+1.0 công phép) sát thương phép.",
			}
		],
		"skill_up": {
			"line1": "2,6,10,13,14,15",
			"line2": "1,3,5,7,9,11",
			"line3": "4,8,12",
		},
		"skill_combo": [
			{
				"name": "*Combo đầu game: cơ bản",
				"info": "3,2,0",
			},
			{
				"name": "*Combo đầu game 2: Nội tại + Chiêu 1",
				"info": "3,2,0,1,2,0",
			},
			{
				"name": "*Combo đầu game 3: Nội tại + Chiêu 2",
				"info": "3,2,0,1,3",
			},
			{
				"name": "*Combo khi có đủ 3 kỹ năng: nếu có Nội tại có thể chọn tiếp Chiêu 1 hoặc 2",
				"info": "4,3,4,2,0",
			},
		],
		"skill_note": "<strong class=\"clr-orange\">*Đầu game</strong><br>- D'Arcy một Pháp sư với lối chơi hoàn toàn mới, bộ chiêu thức khá cứng nên D'Arcy phù hợp chơi ở Đường giữa hoặc Đường Caesar.<br>- Như bao Pháp sư khác đầu game nên chơi an toàn và cố gắng tích lũy Lực lượng thứ nguyên hay chính xác hơn là thanh màu Đỏ phía dưới thanh Năng lượng.<br>- Dùng Chiêu 2 đẩy lính và cấu máu đối phương tầm xa.<br>- Chiêu 1 rất lợi cho D'Arcy vừa miễn khống chế, tăng tốc chạy còn chịu giảm sát thương nhận từ kẻ địch. Ngoài ra sau khi dùng Chiêu 1 đòn đánh thường kế tiếp sẽ mạnh hơn đôi chút, cấu máu kẻ địch cũng ngon lành.<br>- Điều đặc biệt ở D'Arcy là Nội tại, khi tích lũy đủ thanh màu đỏ, thì chiêu thức 1 và 2 sẽ được làm mới, vì thế không phải lo hết chiêu nhé.<br>- Đầu game cũng khá nhẹ nhàng di chuyển qua các đường giúp đỡ đồng đội và ăn mục tiêu lớn như Rồng nhé, hạn chế solo khi thiếu người!!.<br><br><strong class=\"clr-orange\">*Giữa và cuối game</strong><br>- Về giữa và cuối game dùng Chiêu 2 cấu máu đối phương tầm xa, tầm trong trụ, có thể tranh cướp Rồng hoặc Caesar. Chiêu này có thời gian phát nổ vì thế hãy đoán hướng di chuyển của kẻ địch và đặt chiêu nhé.<br>- Chiêu cuối là điểm khác biệt của D'Arcy. Hãy chọn vị trí đặt chiêu sao cho trúng nhiều kẻ địch càng tốt.<br>- Những kẻ trúng chiêu sẽ được kéo lại ở giữa chổ mình vừa đặt chiêu. Và sau đó nếu D'Arcy kích hoạt lại chiêu cuối anh ta sẽ được đưa đến vị trí đó và gây thêm nhiều sát thương.<br>- Tuy nhiên không phải lúc nào cũng phải kích hoạt quay lại mà xem coi ở vị trí đó có ai, tình hình có ổn không nếu có thể hạ được ai đổi mạng luôn thì chơi nhé.<br>- Nói thì nói thế các bạn nên chơi thử vài ba lần hoặc nhiều hơn để có thêm kinh nghiệm, không thì trong team mình lại xì xào chuyện có thằng chơi tướng mới nhé!!",
		"skill_special": "TocBien,BocPha",
		"main_rune": {
			"rune2": [
				{
					"name": "NgocDo24",
					"info": "Công phép +2.5<br>Xuyên giáp phép +1.4",
				},
				{
					"name": "NgocTim27",
					"info": "Tốc đánh +0.4%<br>Tỷ lệ chí mạng +0.3%<br>Tốc chạy +0.5%",
				},
				{
					"name": "NgocXanh28",
					"info": "Công phép +0.9<br>Xuyên giáp phép +3.8",
				}
			],
			"rune3": [
				{
					"name": "NgocDo31",
					"info": "Công phép +4.2<br>Xuyên giáp phép +2.4",
				},
				{
					"name": "NgocTim32",
					"info": "Tốc đánh +1%<br>Tốc chạy +1%",
				},
				{
					"name": "NgocXanh310",
					"info": "Tốc đánh +0.6%<br>Xuyên giáp phép +6.4",
				}
			],
		},
		"item_build": [
			{
				"name": "Đường giữa 1",
				"info": "TruongBungNo,GiayPhuThuy,TruongHonMang,QuyenTruongRhea,VuongMiengHecate,GuomTanThe",
			},
			{
				"name": "Đường giữa 2",
				"info": "NgocDaiPhapSu,GiayPhuThuy,TruongBungNo,GuomTanThe,VuongMiengHecate,SachThanh",
			},
			{
				"name": "Đường Caesar",
				"info": "AoChoangBangGia,GiayThuatSi,TruongBang,MatNaBerith,SachTruyHon,GiapGaia",
			},
		],
		"hero_battle": [
			{
				"name": "và đồng bọn",
				"desc": "với bộ chiêu thức khá hay đặc biệt là Chiêu cuối, đồng đội của anh ta cùng hưởng ứng sau khi có 1 vài kẻ địch bị đưa về tâm chiêu cuối.",
				"info": [
					{"hero_id": "maloch", "id_page": "Maloch"},
					{"hero_id": "teemee", "id_page": "TeeMee"},
					{"hero_id": "annette", "id_page": "Annette"},
					{"hero_id": "ngo_khong", "id_page": "NgoKhong"},
				]
			},
			{
				"name": "và cách khắc chế",
				"desc": "có thể sẽ khá khó chịu khi gặp một số tướng bay nhảy khiến chiêu thức của anh ta khó mà chạm được vào đối thủ.",
				"info": [
					{"hero_id": "tulen", "id_page": "Tulen"},
					{"hero_id": "liliana", "id_page": "Liliana"},
					{"hero_id": "nakroth", "id_page": "Nakroth"},
					{"hero_id": "annette", "id_page": "Annette"},
				]
			}
		],
		"hero_story": "Phía Nam vương quốc Romain, sừng sững một tòa Trường thành ma pháp hùng vĩ,  tường thành trải dài uốn lượn như một con rồng khổng lồ.<br>Là một trong những kỳ tích vĩ đại nhất của lịch sử nhân loại, Trường thành ma pháp đã được xây dựng trăm năm và trải qua vô số trận chiến đẫm máu với tộc ác ma Vực hỗn mang. Và người hùng - thủ hộ giả - người sáng lập nên Trường thành ma pháp - ma pháp sư truyền kỳ <i class=\"clr-orange\">D’Arcy</i>, đã trở thành một tồn tại sánh ngang thần cứu thế.<br>Hiện tại, vị thần cứu thế này đang gặp phải một phiền phức nhỏ : Mỗi khi đến nửa đêm, cánh tay phải của <i class=\"clr-orange\">D’Arcy</i> có hiện tượng đau ê ẩm. Đó không chỉ là sự đau đớn từ thể xác, mà phảng phất như bị xé rách linh hồn.<br>Trên thực tế,  khi từ không gian thứ nguyên trở về Athanor, cánh tay phải của <i class=\"clr-orange\">D’Arcy</i> thi thoảng xuất hiện cảm giác đau nhói. Chàng vốn cho rằng hiện tượng này là hậu quả do năm xưa quyết chiến cùng sư phụ của mình - một ma pháp sư danh tiếng lẫy lừng - hắc ma pháp sư Lorient. <i class=\"clr-orange\">D’Arcy</i> nghĩ rằng đó là ám thương lưu lại sau trận chiến. Nhưng theo quy mô phát triển ngày càng mở rộng của Trường thành, tần suất tấn công của ác ma Vực hỗn mang cũng theo đó mà tăng lên. Cánh tay phải của chàng cũng phản ứng theo những trận chiến ấy, phảng phất giống như có vật gì đó muốn ngọ nguậy trồi ra.<br><i class=\"clr-orange\">D’Arcy</i> ý thức được, sự việc này không đơn giản.<br>Dựa vào nhiều năm kinh nghiệm nghiên cứu về ma thuật đen, <i class=\"clr-orange\">D’Arcy</i> ngày càng quen thuộc với lực lượng thứ nguyên, chàng có thể áp chế những rung động cuồng bạo của cánh tay phải xuống. Duy nhất chỉ có vào nửa đêm, là thời điểm quái vật Vực hỗn mang tiến đến gần Athanor nhất, cánh tay phải của chàng mới xuất hiện lại loại cảm giác đau nhói kia.<br>Tuy vậy <i class=\"clr-orange\">D’Arcy</i> vẫn luôn giữ kín bí mật của mình. Ngay cả Sephera và Dirac đều chưa biết đến hiện tượng kỳ dị của cánh tay phải này. Việc xây dựng Trường thành ma pháp đã hao tổn vô số tài nguyên nhưng uy lực thực sự của nó còn chưa hiện ra. Lúc này <i class=\"clr-orange\">D’Arcy</i> cần nhất là duy trì trạng thái đỉnh phong của mình để  quân đoàn phương Nam và toàn bộ vương quốc tin tưởng chàng- rằng chàng và Trường thành ma pháp mãi mãi sẽ là tồn tại tối cao thủ hộ cho sự bình yên của nhân loại.<br>“Rầm rập!” Tiếng giày bốt quân đội đạp trên bùn khiến <i class=\"clr-orange\">D’Arcy</i> sực tỉnh.<br>“Ai?”  Tay trái <i class=\"clr-orange\">D’Arcy</i> lập tức đặt lên trên cánh tay phải, ngân sắc ma pháp bàng bạc ẩn hiện.<br>“Hừm...” Người vừa tới liền bị sự cảnh giác của <i class=\"clr-orange\">D’Arcy</i> làm cho chấn kinh. Hắn trầm mặc một lúc sau đó mới khẽ nói: “Điện hạ, rất xin lỗi đã quấy rầy sự nghỉ ngơi của ngài, tôi là Errol - thân vệ của tướng quân Edmund. Tướng quân để cho tôi chuyển lời đến ngài rằng: Đám người phía nam kia hành tung có chút quỷ dị, đêm nay rất có thể bọn chúng sẽ phát động tập kích quân ta. Toàn quân phe ta hiện đã tiến vào trạng thái cảnh giác cấp độ hai- chuẩn bị chiến đấu. Edmund tướng quân mời điện hạ cũng chuẩn bị trạng thái tốt nhất để ra trận.”<br>“Biết rồi. Ngươi chuyển lời cho Edmund tướng quân, ta lập tức sẽ đến.”<br>“Tạ ơn Điện hạ, tôi lập tức trở về phục mệnh!” Lại là một loạt tiếng giày bốt vang lên , hình bóng Errol xa dần trong đêm tối.<br>Sau khi người lính trẻ rời đi , cánh tay phải <i class=\"clr-orange\">D’Arcy</i> vẫn có chút cảm giác nhói đau. Nhưng chàng có chút kinh ngạc, thời gian cơn đau của đêm nay so ngày trước đã nhẹ đi nhiều.<br>“Chẳng lẽ nguyên nhân này là do người trẻ tuổi kia?”<br><i class=\"clr-orange\">D’Arcy</i> đã gặp qua mấy lần thân vệ trẻ tuổi kia cạnh Edmund. Ấn tượng không tồi: Thân thể mặc dù không quá cường tráng nhưng bên trong đôi mắt ấy tiềm ẩn sát khí mãnh liệt. Sát khí bậc này chỉ có thể được hun đúc trên chiến trường sinh tử, đạp lên vạn thây. Khí thế sát phạt và sự thiết huyết này quả thật chứng tỏ có được chiến binh bậc này là việc khả ngộ bất khả cầu. Khí thế này cũng làm cho <i class=\"clr-orange\">D’Arcy</i> nhớ tới thời niên thiếu của mình. Cho dù Errol là một Thợ săn ác quỷ nhưng vì một số nguyên nhân bí mật, <i class=\"clr-orange\">D’Arcy</i> nếu có thể - sẽ tránh xa sự liên quan đến ma thuật đen.<br>Nhưng Thợ săn ác quỷ lại chính là tạo vật kết hợp tuyệt vời nhất với loại ma thuật này. Errol cùng đám chiến hữu của mình gia nhập quân đoàn phương nam, thủ hộ cho Trường thành ma pháp. Đó là sự minh chứng với thế nhân rằng: Họ đã rũ bỏ hoàn toàn sự kết nối với ma thuật đen. Điều đó cũng giống với <i class=\"clr-orange\">D’Arcy</i> năm xưa - đã chính tay đánh bại vị sư phụ hắc ám của mình.<br>Âm thanh sát phạt , tiếng vũ khí va chạm, tiếng gào thảm thiết vang lên xé tan màn đêm yên tĩnh,  <i class=\"clr-orange\">D’Arcy</i> lập tức lấy lại tinh thần, vịn mép giường đứng dậy, khoác lên chiến bào ma pháp sư mà Ma pháp nghị viện đặc chế cho chàng, miệng  ngâm chú ngữ, thân ảnh mờ dần rồi biến mất khỏi đại sảnh.<br>Trong thời gian vài hơi thở, <i class=\"clr-orange\">D’Arcy</i> đã thuấn di lơ lửng trên không trung thuộc phạm vi Trường thành. Ngân sắc ma quang lan tỏa năng lượng bàng bạc phủ lên chiến bào xanh thẫm. Ma pháp cường đại từ <i class=\"clr-orange\">D’Arcy</i> không ngừng lan rộng, trong nháy mắt đã trải rộng toàn bộ chiến trường. Song phương đang giao chiến đều cảm nhận được áp lực của cỗ hơi thở cuồng bạo này . Hai bên không hẹn mà cùng nhìn về phía bầu trời. Tuy nhiên cuộc chiến tranh rất nhanh lại khôi phục bản chất điên cuồng tàn bạo của nó. Nhất là những ma thú phảng phất nhận được lời hiệu triệu nào đó, chúng đồng loạt bỏ qua những bẫy chông, làn tên, mũi giáo mà  điên cuồng hướng về vị trí của <i class=\"clr-orange\">D’Arcy</i> triển khai công kích.<br>“Đến hay lắm!” <i class=\"clr-orange\">D’Arcy</i> thầm nói trong lòng. Chàng giang hai cánh tay, từ trong đó tỏa ra vô số ngân sắc tinh mang, từ đầu ngón tay tuôn trào ra những sợi tơ ma pháp. Những sợi tơ như có mắt liền đem tinh mang xếp thành một trận đồ ma pháp khổng lồ sáng rực.<br>“ Lực lượng thứ nguyên —— Trấn!”<br>Ma pháp cường đại vô hình bùng phát, giống như một bàn tay khổng lồ từ trên trời giáng xuống.<br>“ Uỳnh Uỳnh!”Trọng lực ma pháp thứ nguyên đè xuống áp chế tốc độ của lũ ma thú. Ngay lập tức, hành động của chúng trở thành trì độn. Những tiểu ma thú thực lực tương đối yếu thậm chí bị nghiền vụn, tan xương nát thịt.<br>“Ngay lúc này!” Tướng quân Edmund nãy giờ trên Trường thành quan chiến đột nhiên rống to ra lệnh: “Toàn bộ cung tiễn thủ bắn nhanh ba lượt, không cần bảo tồn sức lực!”<br>“Tuân lệnh!”<br>“Hạ lệnh, kỵ binh đoàn xuất kích, phân hai đội tả hữu  bắt đầu tập kích từ hai cánh.”<br>“Tuân lệnh!”<br>“Hạ lệnh, bộ binh đổi sang trận hình công kích, tấn công theo cờ lệnh của ta!”<br>“Tuân lệnh!”<br>“Errol!”<br>“A? Có thuộc hạ!” Đột nhiên nghe thấy lệnh của tướng quân Edmund, Errol đang quan chiến liền vội vàng đem ánh mắt thu hồi lại.<br>“Hạ lệnh, quân đoàn Thợ săn ác quỷ xuất kích. Trước khi bộ binh bắt đầu tấn công có thể tự do tàn sát, quan trọng là phải tiêu diệt hết những quái vật còn đang thoi thóp kia, hiểu chưa?!”<br>“Tuân lệnh!” Errol lập tức rời đi.<br>Trong khi đó, <i class=\"clr-orange\">D’Arcy</i> vẫn đang toàn lực thi triển ma pháp trận mà không biết tình huống này. Chàng chỉ biết một điều: Tất cả đều là chiến hữu kề vai sát cánh vào sinh ra tử nhiều năm. Chàng tận mắt chứng kiến sự quật khởi từng ngày của ma pháp Trường thành- những chiến binh quả cảm ấy- chưa từng khiến chàng phải thất vọng.<br>“ Sức mạnh trong tay chúng ta, vận mệnh tương lai là do chúng ta nắm giữ!”",
		"hero_skin": [
			{
				"name": "Pháp Sư Thứ Nguyên",
				"gold": "??",
				"voucher": "539",
				"event": "",
				"wall": "Darcy01",
				"disable": "yes",
				"img": "thumb1.jpg",
				"video": "",
			},
			{
				"name": "Nam Tước",
				"gold": "",
				"voucher": "219",
				"event": "",
				"wall": "Darcy02",
				"disable": "yes",
				"img": "thumb2.jpg",
				"video": "",
			},
		]
	},
};