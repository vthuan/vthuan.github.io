var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "Chào Mừng";
	$scope.updateInfo = "Đang cập nhật";
	$scope.verify = "Takeshi";
	$scope.des = "Anime Fan !";
	$scope.cv = "Giới Thiệu";
	$scope.job1 = "Sinh viên";
	$scope.job2 = "Supporter";
	$scope.contact = "Thông Tin";
	$scope.contact1 = "Facebook: Thuan";
	$scope.contact2 = "Page Facebook: Văn Thuần";
	$scope.contactmi = " Thông Tin Liên Hệ";
	$scope.ifyou = "Nếu có thắc mắc về code thì liên lạc mình !";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Zalo";
	$scope.modal3 = "Messenger";
	$scope.modal4 = "Email";
	$scope.modal5 = "Số điện thoại";
	$scope.linkfb = "https://fb.com/thuan.7502";
	$scope.linkzl = "";
	$scope.linksc = "m.me/thuan.7502";
	$scope.linkgm = "takeshi@gmail.com";
	$scope.phonenumber = "Đang cập nhật";
	$scope.email = "lmint@anonyviet.com";
	$scope.title2 = "Câu chuyện của tôi";
	$scope.contentStory1 = "Lmint là biệt danh đầu tiên và cũng là duy nhất của mình. Khi còn là cậu học sinh lớp 10 ngu ngơ, mình đã gặp anh Quang. Người đã thay đổi cuộc đời mình theo chiều hướng tích cực hơn. Biến mình từ thằng mọt sách không biết sử dụng máy tính trở thành một lập trình viên như hôm nay. Được tự hào kể lại câu chuyện và tự hào vì là một thành viên chân thành tại AnonyViet. Mình thực sự rất hạnh phúc khi học tập và làm việc tại đây.";
	$scope.contentStory2 = "Trong suốt hai năm qua, tôi cảm thấy mình chưa có tiến bộ nhiều trong công việc lẫn học tập. Cảm thấy mình cần bổ sung nhiều kiến thức hơn, có trách nhiệm hơn trong công việc và lời hứa. Gần đây, website đã bước sang giai đoạn phát triển, member trông đợi khá nhiều từ tôi và các Admin khác. Cho nên tôi sẽ cố gắng nhiều hơn nữa để mọi người không thất vọng. Xin cảm ơn mọi người !";
	$scope.storytitle1 = "Đời lập trình của tôi bắt đầu bằng sự tình cờ ...";
	$scope.storytitle2 = "Lời hứa của tôi với bản thân và mọi người trong hai năm qua ...";
	$scope.nothinglikeus = "Thank for watching";
	$scope.thankall = "Cảm ơn mọi người đã ủng hộ";
	$scope.au = "Lmint";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone= !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail= !$scope.gmail;
	};
});