document.addEventListener("DOMContentLoaded", () => {
  // 注意：id 必须和 HTML 完全一致（大小写一致）
  const form = document.getElementById("RegisterForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const confirmInput = document.getElementById("ConfirmPassword");
  const messageElement = document.getElementById("message");
  const submitBtn = document.getElementById("SubmitBtn");

  // 提示语函数
  function showMessage(text, type = "error") {
    messageElement.textContent = text;
    messageElement.className = `message ${type}`;
  }

  // 表单提交
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // 清理文本
    showMessage("");

    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmInput.value;

    // 检验输入合法性
    if (!username || !password || !confirmPassword) {
      showMessage("请输入完整信息");
      return;
    }

    if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) {
      showMessage("用户名需为3-20位字母、数字或下划线");
      return;
    }

    // 注意：是 length，不是 lenth
    if (password.length < 6) {
      showMessage("密码长度至少6位");
      return;
    }

    if (password !== confirmPassword) {
      showMessage("两次输入的密码不一致");
      return;
    }

    // 防止重复提交
    submitBtn.disabled = true;
    submitBtn.textContent = "注册中...";

    // 提交数据至后端（还没写）
    // 建议：在这里用 try...catch 包裹请求，并在 finally 里恢复按钮状态
    try{
      //提交数据
      const res =await fetch('/api/register',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        credentials: "same-origin",
        body: JSON.stringify({ username,password})
      });
      //解析字符串
      const data = await res.json();
      if (res.ok && data.code == 0) {
        showMessage('注册成功，即将跳转登录页...',success);
        setTimeout (()=>{
          window.location.href = 'index.html';
        },1000);
      } else {
        showMessage(data.msg || '注册失败，请重试');
      }
    } catch (err) {
      showMessage('网络错误，请检查后端服务是否启动');
    }finally {
      //恢复
      submitBtn.disabled = false;
      submitBtn.textContent = '注册';
    }
  });
});
