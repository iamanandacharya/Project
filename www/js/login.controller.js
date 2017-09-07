vm.facebookLogin = function () {
$cordovaOauth.facebook("663710060489002", ["email", "public_profile"], { redirect_uri: "http://localhost/callback" }).then(function (result) {
alert(result.access_token);
}, function (error) {
alert("Error: " + error);
});
}