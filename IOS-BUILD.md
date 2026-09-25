# MASTER GROUP v369 — iOS / Capacitor подготовка

Это подготовленная копия текущего веб-проекта Master Group v369 для дальнейшей
сборки как нативного iOS-приложения через Capacitor.

ВАЖНО:
- Текущий HTML/CSS/JS код не переписывается.
- GitHub Pages/PWA остаётся отдельной веб-версией.
- Папка `ios/` намеренно не включена: её генерирует Capacitor на macOS/Xcode.
- Для финальной установки на iPhone нужен Apple ID и Xcode на macOS
  (физический Mac или облачный Mac).

## На Mac

1. Установить Node.js LTS.
2. В терминале открыть эту папку.
3. Выполнить:

   npm install
   npx cap add ios
   npx cap sync ios
   npx cap open ios

4. В Xcode:
   - открыть TARGETS → Master Group → Signing & Capabilities;
   - выбрать свою Team / Apple ID;
   - убедиться, что Bundle Identifier:
     `com.mastergroup.estimates`
   - подключить iPhone;
   - выбрать iPhone как Run Destination;
   - нажать Run.

## Обновление веб-кода

После изменения файлов Master Group:

   npx cap sync ios

Затем снова собрать приложение в Xcode.

## Важный момент

Эта оболочка использует локальную копию веб-файлов. Поэтому изменения,
опубликованные только на GitHub Pages, сами по себе не изменят уже установленное
нативное приложение. После изменения приложения нужно выполнить `npx cap sync ios`
и заново собрать/установить новую версию.

## Что проверить после первой сборки

- запуск и навигацию;
- создание/редактирование/удаление смет;
- Firebase;
- локальное хранилище;
- PDF/печать;
- загрузку файлов, если используется;
- уведомления, если они появятся в будущем;
- safe-area/Dynamic Island;
- поведение при отсутствии интернета.



## GitHub Actions

В проект уже добавлен workflow:

`.github/workflows/main.yml`

Запуск:

1. Загрузить проект в GitHub.
2. Открыть вкладку **Actions**.
3. Выбрать **Build Master Group iOS**.
4. Нажать **Run workflow**.
5. После завершения открыть результат workflow и скачать artifact:
   `master-group-ios-v369`.

ВАЖНО:
Текущий workflow специально собирает **unsigned iOS Simulator .app**.
Это проверяет, что проект корректно собирается на macOS, но такой artifact
нельзя просто установить на обычный iPhone.

Для установки на физический iPhone следующим этапом нужна подпись Apple
(Apple Developer / подходящий способ sideloading). Не помещайте сертификаты
или приватные ключи Apple в репозиторий.
