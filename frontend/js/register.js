// 取dom
const form = document.getElementById("RegisterForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("ConfirmPassword");
const messageElement = document.getElementById("message");
const submitBtn = document.getElementById("SubmitBtn");
//提示语函数
function showMessage(text, type = "error") {
  messageElement.textContent = text;
  //用反引号
  messageElement.className = `message ${type}`;
}
//表单提交
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  //清理文本
  showMessage("");
  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmInput.value;
  //检验输入合法性
  if (!username || !password || !confirmPassword) {
    showMessage("请输入完整信息");
    return;
  }
  if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) {
    showMessage("用户名需为3-20位字母、数字或下划线");
    return;
  }
  if (password.lenth < 6) {
    showMessage("密码长度至少6位");
    return;
  }
  if (password !== confirmPassword) {
    showMessage("两次输入的密码不一致");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "注册中...";
});
