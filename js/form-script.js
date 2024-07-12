document.getElementById('customForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 通常のフォーム送信を防ぎます

    // バリデーション
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var gender = document.getElementById('gender').value;
    var content = document.getElementById('content').value;

    if (!name || !email || !gender || !content) {
        alert('必須項目をすべて入力してください。');
        return;
    }

    alert('フォームが正しく送信されました！');
});
