var all_item_file = [
    {"id": "AoChoangBangGia", "name": "Áo choàng băng giá", "info": "Giá: 1970<br>+10% Giảm hồi chiêu<br>+200 Giáp<br>+800 Máu<br>Sức mạnh nguyên tố: Sau khi tung chiêu sẽ khiến đòn đánh kế gây thêm 150 sát thương vật lý (mỗi cấp tăng thêm 20) kèm 30% làm chậm , 3s hồi."},
    {"id": "AoChoangThanRa", "name": "Áo choàng thần ra", "info": "Giá: 1950<br>+80 Công vật lý<br>+330 Giáp<br>Thiêu cháy: Gây 100 (+4 mỗi cấp tướng) sát thương phép mỗi giây lên những kẻ địch cạnh bên (tăng 100% sát thương đối với Lính và Quái rừng)."},
    {"id": "DaiKhangPhep", "name": "Đai kháng phép", "info": "Giá: 1000<br>+700 Máu +110 Giáp phép<br>Hồi phục: Nếu chịu sát thương, tướng sẽ hồi phục 4% lượng máu trong 2s; 15s hồi chiêu."},
    {"id": "DayChuyenLucBao", "name": "Dây chuyền lục bảo", "info": "Giá: 1980<br>+140 Công phép<br>+20% Giảm hồi chiêu<br>+300 Năng lượng tối đa<br>+30 Hồi năng lượng/5s<br>Suối nguồn năng lượng: Sau khi có một điểm Hạ hoặc Phụ, hồi phục 20% năng lượng."},
    {"id": "GiapCuongNo", "name": "Giáp cuồng nộ", "info": "Giá: 1900<br>+ 200 Giáp<br>+ 1200 Máu tối đa<br>Điên cuồng: Sau khi chịu sát thương, gia tăng tốc chạy và tốc đánh thêm 2%, hiệu ứng có thể cộng dồn 5 lần."},
    {"id": "GiapGaia", "name": "Giáp Gaia", "info": "Giá: 1960<br>+5% tốc chạy<br>+240 Giáp phép<br>+1200 máu<br>Khôi phục: Khi chịu sát thương sẽ được hồi lại 8% máu trong 2 giây, 10 giây hồi chiêu."},
    {"id": "GiapHoMenh", "name": "Giáp hộ mệnh", "info": "Giá: 2240<br>+ 1000 Máu tối đa<br>Phục sinh: Tướng sẽ sống lại sau thoáng chốc tại nơi bị hạ gục với 40% lượng máu tối đa, 3 phút thời gian hồi."},
    {"id": "GiapThongKho", "name": "Giáp thống khố", "info": "Giá: 1940<br>+300 Giáp<br>+1200 máu<br>Phản pháo: Phản lại 15% sát thương vật lý đã gánh chịu thành sát thương phép lên mục tiêu (sát thương đã trả qua các cơ chế giảm trừ theo giáp)."},
    {"id": "GiayDuMuc", "name": "Giày du mục", "info": "Giá: 660<br>+25% Tốc đánh<br>+60 Tốc chạy"},
    {"id": "GiayHermes", "name": "Giày Hermes", "info": "Giá: 580<br>Nhanh nhẹn: Tăng 45 Tốc chạy khi không chịu sát thương<br>+60 Tốc chạy"},
    {"id": "GiayHoVe", "name": "Giày hộ vệ", "info": "Giá: 700<br>+110 Giáp<br>+60 Tốc chạy<br>Giảm 15% sát thương vật lý gánh chị"},
    {"id": "GiayKienCuong", "name": "Giày kiên cường", "info": "Giá: 690<br>+110 Giáp phép<br>+60 Tốc độ chạy<br>35% kháng hiệu ứng"},
    {"id": "GiayPhuThuy", "name": "Giày phù thủy", "info": "Giá: 710<br>+40 Công phép<br>+60 Tốc chạy<br>+ 75 Xuyên giáp phép"},
    {"id": "GiayThuatSi", "name": "Giày thuật sĩ", "info": "Giá: 690<br>+10% Giảm hồi chiêu<br>+60 Tốc chạy"},
    {"id": "GuomHienTriet", "name": "Gươm hiền triết", "info": "Giá: 2100<br>+140 Công phép<br>+1050 Máu<br>Kết giới: Giảm (75 + Cấp tướng * 5) Giáp phép của kẻ địch trong phạm vi 800."},
    {"id": "GuomLoki", "name": "Gươm Loki", "info": "Giá: 1750<br>+150 Công phép<br>+400 máu tối đa<br>Nguyền rủa: Sau khi tung chiêu, đòn đánh thường tiếp theo gây thêm 35% Công vật lý (+45% Công phép cộng thêm) sát thương phép; 2 giây hồi chiêu.<br>Săn bắt: Gây thêm 30% sát thương lên quái rừng. Nhận thêm 30% kinh nghiệm khi tiêu diệt quái rừng.<br>Lùng diệt: Tiêu diệt một con quái rừng tăng 6 Công phép và 30 năng lượng, hiệu ứng cộng dồn 30 lần."},
    {"id": "GuomSamSet", "name": "Gươm sấm sét", "info": "Giá: 2020<br>+60 Công vật lý<br>+30% Tốc đánh<br>+5% Tốc chạy<br>+10% Hút máu<br>Chớp giật: Mỗi 8 giây sẽ kích hoạt hiệu ứng Chớp giật trong đòn đánh thường kế tiếp gây 150 (+20% Công vật lý) sát thương vật lý (sát thương này cũng áp dụng với hút máu), mỗi đòn đánh thường giảm 1 giây hồi chiêu."},
    {"id": "GuomTanThe", "name": "Gươm tận thế", "info": "Giá: 2190<br>+200 Công phép<br>+10% Giảm hồi chiêu<br>Sức mạnh nguyên tố: Sau khi tung chiêu, đòn đánh kế tiếp gây thêm 30% Công vật lý (+80% Công phép cộng thêm) sát thương phép, 2 giây hồi chiêu."},
    {"id": "HerculeThinhNo", "name": "Hercule thịnh nộ", "info": "Giá: 2000<br>+180 Giáp<br>+150 Giáp phép<br>+50 Công vật lý<br>Cuồng Nộ: Khi máu của tướng xuống dưới 40%, tăng 40 công vật lý và tạo ra một lớp lá chắn trong 8 giây; 90 giây hồi chiêu."},
    {"id": "HuanChuongTroy", "name": "Huân chương Troy", "info": "Giá: 2320<br>+360 Giáp phép<br>+1000 máu<br>+10% giảm hồi chiêu<br>Hộ thân: Mỗi 18 giây nhận được một lớp bảo hộ giúp hấp thụ (300 + Cấp tướng * 60) sát thương phép."},
    {"id": "KhienHuyenThoai", "name": "Khiên huyền thoại", "info": "Giá: 2180<br>+360 Giáp<br>+400 năng lượng<br>+20% giảm hồi chiêu<br>Lính gác: Nếu tướng chịu sát thương, giảm 30% Tốc đánh và 15% Tốc chạycủa những đối thủ đã ra đòn đánh."},
    {"id": "KhienThatTruyen", "name": "Khiên thất truyền", "info": "Giá: 2100<br>+360 Giáp<br>+1200 máu<br>Trói Buộc Tinh Thần: Giảm tốc đánh của kẻ địch lân cận đi 30%."},
    {"id": "KiemFafnir", "name": "Kiếm Fafnir", "info": "Giá: 2040<br>+60 Công vật lý<br>+30% tốc đánh<br>+10% Hút máu<br>Hơi thở rồng: Đòn đánh thường gây thêm sát thương vật lý tương đương 8% lượng máu hiện tại của mục tiêu, 0.3 giây hồi chiêu - Nội tại duy nhất."},
    {"id": "KiemMuramasa", "name": "Kiếm Muramasa", "info": "Giá: 2070<br>+80 Công vật lý<br>+10% Giảm hồi chiêu<br>[+45 Xuyên giáp]."},
    {"id": "KiemTruyHon", "name": "Kiếm truy hồn", "info": "Giá: 1750<br>+ 60 Công vật lý<br>+ 6% hút máu<br>Nhận Tê Cóng<br>+15% Giảm thời gian hồi chiêu - Nội tại duy nhất<br>Săn bắt: Gây thêm 30% sát thương lên quái rừng. Nhận thêm 35% kinh nghiệm khi tiêu diệt quái rừng - Nội tại duy nhất.<br>Lùng diệt: Tiêu diệt một con quái rừng tăng 2 Công vật lý cho tướng, hiệu ứng cộng dồn 30 lần - Nội tại duy nhất<br>Săn linh hồn: Gây thêm (300 + cấp*20) điểm sát thương phép lên chiêu thức hoặc đòn thường của Tướng vào lần kế tiếp, đồng thời trong 3 giây tiếp theo được tăng 7% công vật lý ( chỉ có tác dụng khi cận chiến)（30 giây Thời gian hồi chiêu）- Nội tại duy nhất."},
    {"id": "LiemDoatMenh", "name": "Liêm đoạt mệnh", "info": "Giá: 2000<br>+60 Công vật lý<br>+5% Giảm hồi chiêu<br>Từ chối Tử thần: Tiến vào trạng thái bất tử, miễn nhiễm sát thương và tăng Tốc chạy thêm 20% trong 1 giây cho các tướng đánh gần và 0.5 giây cho các tướng đánh xa; 90 giây hồi chiêu."},
    {"id": "MatNaBerith", "name": "Mặt nạ Berith", "info": "Giá: 2160<br>+140 Công phép<br>+270 Giáp<br>+10% Giảm hồi chiêu<br>Thống khổ: gây thêm sát thương phép tương đương với 4% Máu hiện tại của mục tiêu, 1.2 giây thời gian hồi (sát thương lên Quái Rừng tối đa: 80)."},
    {"id": "NanhFenrir", "name": "Nanh Fenrir", "info": "Giá: 2950<br>+200 Công vật lý<br>Chinh phạt: Khi máu của mục tiêu xuống dưới 50% sẽ chịu thêm 30% sát thương."},
    {"id": "NgocDaiPhapSu", "name": "Ngọc đại pháp sư", "info": "Giá: 2010<br>+140 Công phép<br>+10% Giảm hồi chiêu<br>Tưởng thưởng anh hùng: Khi tướng lên cấp, hồi phục 20% Máu và Năng lượng trong 3 giây.<br>Thời gian: Mỗi 30 giây nhận thêm 12 Công phép, và 80 Máu. Hiệu ứng cộng dồn tối đa 10 lần."},
    {"id": "PhucHopKiem", "name": "Phức hợp kiếm", "info": "Giá: 2400<br>+70 Công vật lý<br>+15% Tốc đánh<br>+10% Hút máu<br>+10% Giảm hồi chiêu<br>+500 Máu tối đa<br>Sức mạnh nguyên tố: Trong vòng 5 giây sau khi tung chiêu, đòn đánh thường tiếp theo của tướng gây thêm sát thương vật lý, 2 giây hồi chiêu."},
    {"id": "PhuChuTruongSinh", "name": "Phù chú trường sinh", "info": "Giá: 1980<br>+1800 Máu<br>+50 điểm Hồi máu/5 giây<br>Nội tại duy nhất：Sau khi rời giao tranh mỗi giây hồi 2% máu tối đa và 1% năng lượng tối đa."},
    {"id": "QuyenTruongRhea", "name": "Quyền trượng Rhea", "info": "Giá: 2220<br>+140 Công phép<br>+10% Giảm hồi chiêu<br>Khiên sinh mệnh: Khi lượng máu thấp hơn 40%, nhận được một lá chắn trong 4 giây giúp hấp thụ (450 + cấp tướng * 50) (+40% Công phép cộng thêm) sát thương; 75 giây hồi chiêu."},
    {"id": "QuyKiem", "name": "Quỷ kiếm", "info": "Giá: 1740<br>+100 Công vật lý<br>+ 25% Hút máu hỗn hợp (dung hợp của hút máu và hút máu phép)"},
    {"id": "RiuGnoll", "name": "Rìu Gnoll", "info": "Giá: 750<br>Nhận Tê Cóng<br>Săn bắt: Gây thêm 30% sát thương lên quái rừng. Nhận thêm 30% kinh nghiệm khi tiêu diệt quái rừng.<br>Lùng diệt: Tiêu diệt một con quái rừng tăng 50 máu, hiệu ứng cộng dồn 20 lần."},
    {"id": "RiuHyoga", "name": "Rìu Hyoga", "info": "Giá: 1920<br>+ 100 Giáp<br>+ 100 Giáp phép<br>+ 1200 Máu tối đa<br>Lạnh Sống Lưng: Đòn đánh tay làm chậm 25% tốc chạy của đối thủ đồng thời tăng 10% tốc chạy của người ra đòn, 2 giây hiệu lực."},
    {"id": "RiuLeviathan", "name": "Rìu Leviathan", "info": "Giá: 1500<br>+750 Máu tối đa<br>+100 giáp<br>Nhận Tê Cóng<br>Thiêu cháy: Gây 90 sát thương phép mỗi giây lên những đối thủ bên cạnh. Mỗi cấp tăng thêm 5 sát thương thiêu cháy (tăng 100% sát thương đối với Lính và Quái rừng).<br>Săn bắt: Gây thêm 30% sát thương lên quái rừng. Nhận thêm 30% kinh nghiệm khi tiêu diệt quái rừng.<br>Lùng diệt: Tiêu diệt một con quái rừng tăng 50 máu cho tướng, hiệu ứng cộng dồn 30 lần."},
    {"id": "SachThanh", "name": "Sách thánh", "info": "Giá: 2990<br>+ 400 Công phép<br>Khai sáng: Nhận 1400 máu."},
    {"id": "SachTruyHon", "name": "Sách truy hồn", "info": "Giá: 2050<br>+240 Công phép<br>+500 Máu<br>Tróc nã: Sát thương trúng đích khiến mục tiêu bị giảm 50% khả năng hồi máu trong 1.5 giây (nếu sát thương từ đòn đánh thường sẽ khiến hiệu lực kéo dài 3 giây)."},
    {"id": "SongDaoBaoTap", "name": "Song đao bão táp", "info": "Giá: 2050<br>+30% Tốc đánh<br>+20% Tỷ lệ chí mạng<br>+5% Tốc chạy<br>Cuồng phong: Tăng 50% sát thương chí mạng."},
    {"id": "ThanhKiem", "name": "Thánh kiếm", "info": "Giá: 2250<br>+90 Công vật lý<br>+25% Tỷ lệ chí mạng<br>+ 50% Sát thương chí mạng<br>Bứt phá: Sau khi chí mạng giúp tăng (cấp tướng * 3) tốc chạy trong 1.5 giây (chỉ có hiệu quả khi dùng với tướng đánh xa)."},
    {"id": "ThapTuKiem", "name": "Thập tự kiếm", "info": "Giá: 1970<br>+180 công phép<br>+400 năng lượng<br>+8% tốc chạy<br>Đòn đánh thường kế tiếp tăng 50% tốc đánh cộng thêm, kéo dài 4 giây. Hồi chiêu sau 10 giây.<br>Ánh sáng: Đòn đánh thường gây thêm sát thương phép tương đương 20% Công phép."},
    {"id": "ThuongLonginus", "name": "Thương Longinus", "info": "Giá: 2080<br>+80 Công vật lý<br>+15% Giảm hồi chiêu<br>+400 Máu<br>Phá giáp: Gây sát thương sẽ trừ 50 Giáp của nạn nhân, cộng dồn lên đến 5 lần, kéo dài 5 giây."},
    {"id": "ThuongXuyenPha", "name": "Thương xuyên phá", "info": "Giá: 2020<br>+120 Công vật lý<br>Nghiền ép: Tăng (100 + cấp tướng * 10) xuyên giáp.<br>Khinh công: Rời khỏi trạng thái giao tranh giúp tăng 10% Tốc chạy."},
    {"id": "TruongBang", "name": "Trượng băng", "info": "Giá: 2020<br>+140 Công phép<br>+850 Máu<br>+5% Tốc chạy<br>Giá băng: Chiêu thức gây sát thương đồng thời làm chậm 20% Tốc chạy của đối thủ trong 2 giây."},
    {"id": "TruongBungNo", "name": "Trượng bùng nổ", "info": "Giá: 2000<br>+240 Công phép<br>Vang vọng: Tạo nên một vùng nổ nhỏ gây 50 (+50% công phép cộng thêm) sát thương phép xung quanh mục tiêu bị trúng chiêu, 5 giây hồi chiêu."},
    {"id": "TruongHonMang", "name": "Trượng hỗn mang", "info": "Giá: 2050<br>+180 Công phép<br>+10% Giảm hồi chiêu<br>+45% Xuyên giáp phép."},
    {"id": "VongDucHanh", "name": "Vòng đức hạnh", "info": "Giá: 1020<br>+60 Công phép<br>+10% Giảm hồi chiêu<br>+20 Hồi năng lượng/5s<br>Suối Nguồn năng lượng: Sau khi có 1 điểm Hạ hoặc Phụ, hồi phục 20% năng lượng."},
    {"id": "VuongMiengHecate", "name": "Vương miệng Hecate", "info": "Giá: 2300<br>+200 Công phép<br>Thuật sư: (+35%) công phép."},
    {"id": "VuotHungTan", "name": "Vuốt hung tàn", "info": "Giá: 2070<br>+30% Tốc đánh<br>+20% Tỷ lệ chí mạng<br>+5% Tốc chạy<br>Hung bạo: Các đòn đánh thường trúng đích giúp tăng tốc đánh thêm 10%, kéo dài 2 giây, cộng dồn tối đa 5 lần."},
    {"id": "CungBaoTo", "name": "Cung bão tố", "info": "Giá: 1750<br>+15 công vật lý<br>+20% tốc độ đánh<br>+10% hút máu<br>Lốc xoáy: liên tục đánh thường cùng mục tiêu sẽ gây thêm (18 + cấp tướng * 0.5) STP (tướng đánh xa chỉ gây ra 75% lượng sát thương này), tối đa cộng dồn 6 lần.<br>Săn bắt: gây thêm 30% ST lên quái rừng, nhận thêm 30% kinh nghiệm khi tiêu diệt quái rừng.<br>Lùng diệt: tiêu diệt 1 cong quái rừng tăng 1.5% tốc đánh, hiệu ứng cộng dồn 30 lần."},
    {"id": "CauPhaLe", "name": "Cầu pha lê", "info": "Giá: 2000<br>+200 Công phép<br>Phong ấn: trở thành bất khả xâm phạm và bất động trong 1.5s, 90s hồi chiêu cho 1 lần kích hoạt."},
    {"id": "ThuanNhamThach", "name": "Thuẫn nham thạch", "info": "Giá: 1980<br>+150 giáp<br>+150 giáp phép<br>+1000 máu tối đa<br>Tích tụ: Sau khi kích hoạt khiến bản thân giảm 70% ST gây ra, bù lại tất cả sát thương gánh chịu trong 3s kế chuyển thành lá chắn có giá trị tương đương (30% ST gánh chịu + 12% máu tối đa); lá chắn tồn tại 3s; 75s hồi chiêu cho 1 lần kích hoạt."},
    {"id": "CungTaMa", "name": "Cung tà ma", "info": "Giá: 2330<br>+90 công vật lý<br>+20% tỷ lệ chí mạng<br>+10% hút máu<br>Hấp huyết: tăng 90% hút máu trong 3s, 60s hồi chiêu cho 1 lần kích hoạt (chỉ hữu hiệu với tướng Đánh Xa)."},
    {"id": "PhuongHoangLe", "name": "Phượng hoàng lệ", "info": "Giá: 600<br>+60 công phép<br>Nội tại: khi tướng lên cấp hồi phục 20% máu và năng lượng trong 3s."},
    {"id": "DaoTruyHon", "name": "Đao truy hồn", "info": "Giá: 1800<br>+100 công vật lý<br>+10% hút máu<br>Tróc nã: Sát thương trúng đích khiến mục tiêu bị giảm 50% khả năng hồi máu trong 1.5s (nếu ST từ đòn đánh thường sẽ khiến hiệu lực kéo dài 3s)."},
    {"id": "NhanPhongThan", "name": "Nhẫn phong thần", "info": "Giá: 1850<br>+200 Giáp<br>+600 Máu<br>+20 Hồi năng lượng/5s<br>+15% Giảm hồi chiêu<br>+5% Tốc chạy<br>[Quân lương] Chủ thể được nhận 5 vàng hoặc kinh nghiệm mỗi 3 giây khi sở hữu mức vàng hoặc kinh nghiệm thấp nhất đội - Nội tại duy nhất<br>[Công huân] Hạ hoặc phụ hạ gục giúp nhận thêm 30% vàng và kinh nghiệm - Nội tại duy nhất<br>[Phong nhãn] Gia tăng 50% tốc chạy của đồng đội xung quanh trong 2 giây, và làm lộ diện tướng địch gần nhất trong 4 giây; 30 giây hồi chiêu - Kích hoạt duy nhất"},
    {"id": "LenhBaiPhongThan", "name": "Lệnh bài phong thần", "info": "Giá: 1850<br>+250 Giáp<br>+600 Máu<br>+5% Tốc chạy<br>+40 Hồi máu<br>+15 Hồi năng lượng<br>[Quân lương] - Chủ thể được nhận 5 vàng hoặc kinh nghiệm mỗi 3 giây khi sở hữu mức vàng hoặc kinh nghiệm thấp nhất đội - Nội tại duy nhất<br>[Công huân]: Hạ hoặc phụ hạ gục giúp nhận thêm 30% vàng và kinh nghiệm - Nội tại duy nhất<br>[Phong thuẫn] Tạo lá chắn cho bản thân hoặc tướng đồng minh lân cận thấp máu nhất giúp chặn (800 + cấp tướng *80) sát thương, đồng thời giúp tăng 30% tốc chạy cho mục tiêu trong 3 giây; 45 giây hồi chiêu - Kích hoạt duy nhất"},
    {"id": "HuanChuongHaiThan", "name": "Huân chương hải thần", "info": "Giá: 1850<br>+250 Giáp<br>+40 Hồi máu/5s<br>+5% Tốc chạy<br>+15 Hồi năng lượng/5s<br>+600 Máu<br>[Đồng chí] Mỗi 30 giây tích lũy một điểm cộng dồn Đồng chí lên đến tối đa 2. Trong vòng 8 mét xung quanh có lính bị tiêu diệt sẽ tự hao tổn một điểm Đồng chí giúp một tướng đồng minh lân cận nhận 15 vàng và 40 điểm kinh nghiệm - Nội tại duy nhất<br>[Quang minh] Giúp bản thân và đồng đội xung quanh (phạm vi 600) hưởng hào quang tăng 20 Hồi máu (+1 mỗi cấp tướng) - Nội tại Duy nhất<br>[Hải thần] Tăng 5% sát thương gây ra và 10% miễn thương của đồng đội xung quanh - Nội tại duy nhất"},
    {"id": "GiapHiepSi", "name": "Giáp hiệp sĩ", "info": "Giá: 730<br>+ 210 Giáp<br>Lính gác: Nếu tướng chịu sát thương, giảm 30% tốc đánh của những đối thủ đã ra đòn đánh - Nội tại duy nhất"},
];