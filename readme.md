#Yandex Music Fisher (1.0.1)

Расширение для загрузки музыки с сервиса [Яндекс.Музыка](http://music.yandex.ru/).

![Yandex Music Fisher](/publish/screen.png)

Можно скачивать как отдельные треки, так и целые плейлисты, альбомы и даже дискографию исполнителя.
Расширение поддерживает ID3 теги (включая обложку). При прерывании загрузки есть возможность возобновить её.

[Список изменений](/changes.md)

### Требование

Необходим браузер на базе Chromium:
[Chrome](https://www.google.com/chrome) (31+),
[Яндекс.Браузер](https://browser.yandex.ru),
[Opera](http://www.opera.com/) или подобный

### Установка

[Скачайте архив](https://github.com/egoroof/yandex-music-fisher/releases/download/v1.0.1/yandex-music-fisher_1.0.1.zip),
распакуйте, откройте страницу расширений в браузере и перенесите туда мышкой папку __yandex-music-fisher__,
после чего там появится новое расширение:

В Chrome:
![Chrome](/publish/chrome.jpg)

В Opera:
![Opera](/publish/opera.jpg)

В Яндекс.Браузер:
![Yandex](/publish/yandex.png)

Обновляется расширение таким же способом.

### Как пользоваться

Откройте страницу на [Яндекс.Музыка](http://music.yandex.ru/) с нужным ![blue](/publish/blue.png) треком,
![yellow](/publish/yellow.png) альбомом или ![green](/publish/green.png) плейлистом - иконка изменит цвет в зависимости
от открытой страницы. Нажав на неё откроется всплывающее окно с информацией о загрузке и кнопкой для начала скачивания.

![Первый шаг](/publish/1.jpg)

![Второй шаг](/publish/2.jpg)

После нажатия на кнопку скачивания, загрузка появится на вкладке "Загрузки":

![Загрузки](/publish/loader.png)

Далее пойдёт автоматический процесс скачивания. Можно покинуть сайт Яндекс Музыки.
Кроме того, со страницы исполнителя можно скачать дискографию:

![Дискография](/publish/discography.png)

### Пути сохранения

- Все загрузки сохраняются в папку, которая указана в настройке браузера "__Расположение загружаемых файлов__".
- Для __дискографии__ создаётся отдельная папка с именем исполнителя, в которую сохраняются альбомы.
- Для __альбома__ / __плейлиста__ создаётся отдельная папка с именем исполнителя и названием альбома / плейлиста.
- Если __альбом__ состоит из нескольких дисков, то создаются соответствующие папки.

### Поддержка

По всем вопросам можете писать на kukukov.kuku@gmail.com.
Если треки не получается скачать, обязательно добавьте в письмо ссылку на страницу, с которой
пытаетесь скачать, версию расширения, а так же название и версию браузера.

Но лучше всего описывать проблему в
[трекере GitHub](https://github.com/egoroof/yandex-music-fisher/issues/new)
(требуется регистрация).
