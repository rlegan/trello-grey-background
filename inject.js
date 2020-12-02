chrome.extension.sendMessage({}, () => {
    setInterval(() => {
        const trelloRootDiv = document.getElementById("trello-root");
        if (
            document.readyState === "complete" &&
            trelloRootDiv.style.background != null
        ) {
            trelloRootDiv.style.backgroundImage = null;
            trelloRootDiv.style.backgroundColor = "#23272A";
        }
    }, 10);
});
