setTimeout(function () {
    $(document).ready(function () {
        let elements = document.querySelectorAll('iframe').forEach(item =>
            console.log(item.contentWindow.document.body.querySelectorAll('a'))
        );
        console.log("VALUE:" + elements);
    });
}, 3000);