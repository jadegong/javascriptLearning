/*
 * Created by jade at 6/1/2020.
 */
(function (){
    EventUtil.addHandler(window, 'load', function () {
        function createClock() {
            var drawing = document.getElementById('drawing');
            if (drawing.getContext) {
                var context = drawing.getContext('2d');
                context.beginPath(); // 开始路径

                // 绘制外圆
                context.arc(350, 200, 99, 0, 2 * Math.PI, false);

                // 绘制内圆
                context.moveTo(444, 200);
                context.arc(350, 200, 94, 0, 2 * Math.PI, false);

                // 绘制分针
                context.moveTo(350, 200);
                context.lineTo(350, 115);

                // 绘制时针
                context.moveTo(350, 200);
                context.lineTo(295, 200);

                // 描边路径
                context.stroke();

                // 表盘刻度
                context.font = 'bold 12px Arial';
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillText('12', 350, 120);
            }
        }

        function coloredImgToMonochrome(imgPath) {
            var drawing = document.getElementById('drawing');
            if (drawing.getContext) {
                var context = drawing.getContext('2d'),
                    image = document.images[0];
                // image.src = imgPath;
                // image.width = 256;
                // image.height = 144;
                // document.body.appendChild(image);
                var imageData, data, i, len, average, red, green, blue, alpha;
                context.drawImage(image, 0, 0, 256, 144);
                imageData = context.getImageData(0, 0, image.width, image.height);
                data = imageData.data;
                for (i = 0, len = data.length; i < len; i += 4) {
                    red = data[i];
                    green = data[i + 1];
                    blue = data[i + 2];
                    alpha = data[i + 3];

                    average = Math.floor((red + green + blue) / 3);
                    data[i] = average;
                    data[i + 1] = average;
                    data[i + 2] = average;
                }
                imageData.data = data;
                context.putImageData(imageData, 0, 0);
            }
        }

        coloredImgToMonochrome('/javascriptBase/assets/demo.jpg');
    });
})()