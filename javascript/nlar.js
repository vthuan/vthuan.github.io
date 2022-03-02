var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "Chào Mừng";
	$scope.updateInfo = "I always wait for you to come back, Rushia";
	$scope.verify = "Takeshi";
	$scope.des = "Anime Fan !";
	$scope.cv = "Giới Thiệu";
	$scope.job1 = "Sinh viên";
	$scope.job2 = "Supporter";
	$scope.contact = "Thông Tin";
	$scope.contact1 = "Facebook: Thuan";
	$scope.contact2 = "Page Facebook: Văn Thuần";
	$scope.contactmi = " Thông Tin Liên Hệ";
	$scope.ifyou = "Chơi Genshin Impact không bạn";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Messenger";
	$scope.modal3 = "Telegram";
	$scope.modal4 = "Tên Tài khoản";
	$scope.modal5 = "UID Genshin Impact";
	$scope.linkfb = "https://www.facebook.com/vthuan.1412/";
	$scope.linkzl = "m.me/vthuan.1412";
	$scope.linksc = "https://t.me/tkswhyred";
	$scope.linkgm = "takeshi@gmail.com";
	$scope.phonenumber = "849730274";
	$scope.email = "Miki";
	$scope.title2 = "Câu chuyện của tôi";
	$scope.contentStory1 = "";
	$scope.contentStory2 = "";
	$scope.storytitle1 = "";
	$scope.storytitle2 = "";
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
