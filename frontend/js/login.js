document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("LoginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const messageElement = document.getElementById("message");
  const submitBtn = document.getElementById("SubmitBtn");

  function showMessage(text, type = "error") {
    messageElement.textContent = text;
    messageElement.className = `message ${type}`;
  }
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    showMessage("");

    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    //校验
    if (!username || !password) {
      showMessage("请输入用户名和密码");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "登录中...";
    //提交验证（还没写
  });
});
