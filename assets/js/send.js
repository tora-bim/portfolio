const sendMail = (email, name, message) => {
	body =
		name +
		"（" +
		email +
		"）" +
		"さんから、" +
		"「" +
		message +
		"」というメッセージが届いています。";

	Email.send({
		Host: "smtp.elasticemail.com",
		Username: "tora@tora-bim.com",
		Password: "6B872FDCA2A8D7B4A92B2F97247485BB4DE9",
		To: "tora@tora-bim.com",
		From: "tora@tora-bim.com",
		Subject: "プロフィールページからお問い合わせがありました。",
		Body: body,
	}).then((message) => alert(message));
};

const btn = document.getElementById("sendBtn");
btn.addEventListener(
	"click",
	function () {
		const email = document.getElementById("email").value;
		if (!email.match(/.+@.+\..+/)) {
			alert("oh! Is it not email? Please check your email.");
		}
		const message = document.getElementById("message").value;
		const name = document.getElementById("name").value;
		sendMail(email, name, message);
	},
	false
);
