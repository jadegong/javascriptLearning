/*
 * Created by jade at 2020/7/31.
 */
(function() {
    function logError(e) {console.log(e);}
    var filesystem;
    webkitRequestFileSystem(PERSISTENT, 10 * 1024 * 1024, function (fs) {
        console.log(fs);
        filesystem = fs;
        listFiles('/', function (arr) {
            console.log(arr);
            document.body.appendChild(document.createTextNode(arr.join(',')));
        });
    });

    function listFiles(path, callback) {
        if (!path) callback([]);
        else filesystem.root.getDirectory(path, {}, getFiles);

        function getFiles(dir) {
            var reader = dir.createReader();
            var list = [];
            reader.readEntries(handleEntries);
            function handleEntries(entries) {
                if (entries.length === 0) callback(list);
                else {
                    for (var len = entries.length,i = 0; i < len; i++) {
                        var name = entries[i].name;
                        if (entries[i].isDirectory) name += '/';
                        list.push(name);
                    }
                    reader.readEntries(handleEntries);
                }
            }
        }
    }
})();