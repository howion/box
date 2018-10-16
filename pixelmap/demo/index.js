document.addEventListener('DOMContentLoaded', function() {
    // WAIT FOR FILE UPLOAD
    document.getElementById('file').onchange = function(e) {
        var target = e.target || window.event.srcElement;
        var file = target.files[0];

        // IS FILE READER SUPPORTED
        if (FileReader) {
            // IS THERE ANY FILE IF SO
            if (file) {
                // READ FILE
                var reader = new FileReader();

                // ON READING DONE
                reader.onload = function() {
                    // CREATE NEW IMG ELEMENT
                    var img = document.createElement('img');

                    // UPDATE _IMG AND UPDATE RESULT
                    img.onload = function() {
                        window._img = img;
                        update();
                    }

                    // LOAD IMAGE FROM FILE READER
                    img.src = reader.result;
                }

                // READ FILE AS DATA URL
                reader.readAsDataURL(file);
            }
        }
        else { alert('FileReader doesn\'t supported on this browser'); }
    };

    // COMBOBOX
    var eComboBox = document.getElementById('effect');

    // FIRE UPDATE ON COMBOBOX CHANGE
    eComboBox.onchange = update;

    function update() {
        // UPDATE RESULT
        document.getElementById('result').src = pixelmap.map(window._img, pixelmapFunctions[
            eComboBox.options[eComboBox.selectedIndex].value
        ]).src;
    }
});
