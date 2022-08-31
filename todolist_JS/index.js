const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value
    document.getElementById("add-text").value = "";

    // div作成
    const div = document.createElement("div");
    div.className = "list-row";

    //liタグを生成
    const li = document.createElement("li");
    li.innerText = inputText;

    // ボタン（完了）タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        const addTarget = completeButton.parentNode;
        deleteFromIncompleteList(deleteButton.parentNode);
    });

    // ボタン（削除）タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        deleteFromIncompleteList(deleteButton.parentNode);
    });

    // divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    //未完了のリストに追加
    document.getElementById("incomplete-list").appendChild(div);

};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
};