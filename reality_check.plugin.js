/**
 * @name reality_check
 * @author jakubrb
 * @description real bad plugin
 * @version 1.33.7
 */

// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⣼⡟⡀⠀⠀⠀⠀⠁⡴⠋⠉⠉⠙⡧⡄⣆⠀⠀⠀⠀⠀⣠⣯⡇⠀⢀⣴⡶⣿⢍⣄⢄⡀⠀⠀⠀⣶⡆⠀⠀⢀⣤⡖⡀⠀⠀⠀⠀
// ⠀⠈⣿⡿⠿⣿⣷⣆⠀⣟⣏⣀⡀⣀⣠⣇⣷⢻⡆⠀⠀⠀⡼⣿⠋⣀⣦⡋⠯⠉⠀⠁⠃⠷⣽⠀⠀⠀⣿⡇⡠⡿⠉⠁⠀⠀⠀⠀⠀⠀
// ⠀⠐⣿⠅⠀⠈⠻⣿⡄⣯⡟⠛⠛⠛⠛⠛⠋⠉⣷⠀⠀⡟⡽⠁⢀⢕⡷⣷⣶⣶⣶⣶⡶⠛⠂⠀⠀⠀⣿⡏⠋⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⣿⡇⠀⠀⠀⣿⡇⠉⠳⣤⣀⣀⣀⣄⡀⠀⠽⡇⣿⠏⠀⠀⠘⣿⡇⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⡿⡇⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠉⠀⠀⠀⠀⠱⠇⠀⠀⠈⠙⠛⠛⠉⠁⠀⠀⠿⠃⠀⠀⠀⠀⠙⠛⣿⣓⣶⣦⣤⣤⡄⠀⠀⠀⠀⣷⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⣤⣤⣄⠀⠀⠀⠀⣀⠤⡤⡄⡀⠀⠂⠀⣶⣆⣀⡀⠀⠀⠀⠉⠉⠛⠓⠛⠃⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⣸⠏⡏⠛⢝⣧⠀⠀⣿⠏⠉⠑⠫⣝⡇⠀⠀⡿⡟⠻⠟⣟⣧⡀⠠⣾⣿⠷⢶⣦⣄⠀⠀⢠⡾⠯⣿⣆⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⣿⢆⡃⠀⡠⡟⡄⠀⡧⠃⠀⠀⠀⠠⡇⠀⠀⣿⡇⠀⠀⠩⡏⡇⠀⣿⣿⠀⠀⠉⢻⣷⡄⢿⡇⠀⠸⣿⡀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠣⣕⢟⣛⠟⣧⡇⠀⣻⣏⣆⣢⣔⠋⠁⠀⠀⠛⠿⠀⠀⠀⠃⠃⠀⢻⡿⠀⠀⠀⠈⣿⢿⠈⠛⠿⠟⢹⣷⡀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⣀⡀⠀⠉⣁⡮⡿⠁⠀⠈⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠈⠃⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠑⠭⠭⠿⠛⠓⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠢⡄⠀⡆⢀⠀⠀⠀⠀⡄⠀⠀⢀⡠⠄⠄⠄⡀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠛⠛⢿⡆⠀⠀⠀⠯⠋⠀⠀⠩⣿⠀⠀⢀⢾⠇⠁⣀⣥⠶⠓⠻⢯⡲⡌⡱⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡁⠀⠀⠀⡸⣿⠀⠀⠀⣄⠀⠀⠀⠈⣮⠢⠀⣮⠏⠀⢨⣯⣧⣆⣒⣨⣡⣯⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠈⠙⠦⣤⡤⠟⢝⡄⠀⠀⠧⠅⠀⠀⠀⣟⡄⡟⠅⠀⠀⠀⡏⣇⠈⠙⠓⠓⠁⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢟⡅⠀⠀⠘⡇⠀⠀⠀⠈⠿⠃⠀⠀⠀⠀⠉⠻⣿⣦⣤⣤⣔⣯⡍⠁⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡶⣄⢀⠀⠀⢀⡟⡑⠁⠀⠀⠀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠋⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠋⠭⠬⠋⠋⠉⠀⠀⠀⠀⠀⠀⠀⢀⡀⡀⡀⠀⠀⠀⠀⠀⢀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠲⡦⡀⠀⠀⢀⡷⠋⣴⠃⠁⠁⡇⠻⣄⠀⠀⠀⣸⢸⠹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡦⣰⠏⠁⠀⢿⣀⢀⣴⠇⠀⠈⢯⣆⡦⣯⡋⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣽⠋⠀⠀⠀⠑⠛⠋⠁⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⢯⠁⠀⠀⠀⢠⡆⠀⠀⠀⡄⠀⠀⠀⣾⡿⠿⠧⢿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⣿⡏⠀⠀⠀⣿⡆⠀⠀⣿⣷⠁⡰⠿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠯⣿⣆⡀⣖⡟⠀⠀⠀⢹⣿⡿⠇⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠀⠀⠀⠀⠸⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢶⣾⣷⣾⣿⣿⣿⣿⣿⣿⣷⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠁⠁⠈⠁⠀⠀⠀⠀⠀⢹⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⠀⢀⣀⣀⠀⠀⠀⠀⠀⠀⢸⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⢹⣿⣿⡆⠀⠈⠥⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⢽⠗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣶⣶⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢿⡌⠀⠀⠰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⡆⠀⣿⣾⣶⣆⠀⠀⢨⡄⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⣾⣿⣿⣿⡈⠛⢿⣿⣿⡄⠀⢸⢊⣀⠈⣿⣿⣶⣶⣤⣄⣀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠈⠀⠉⠁⠀⠀⠄⠀⠀⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⠀
// ⠀⠀⠀⠀⠀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
// ⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⡄⠲⠤⢤⣤⡄⠀⠀⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧
// ⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣉⣀⣐⠒⠒⠠⠰⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠤⠤⠉⣉⣉⢸⣓⡲⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠒⠒⠒⠠⠤⢼⣭⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣉⣙⠛⠒⢸⠶⣦⣬⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿
// ⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡧⠤⠬⢍⣉⣹⣛⣓⣲⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
// ⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡒⠲⠶⠶⡿⣽⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
// ⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣭⣍⣙⣛⣏⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠏
// ⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠦⠤⣬⣭⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀
// ⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣙⣟⣿⣷⣷⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆
// ⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠙⠃
// ⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⠂⠀⠀⠀
// ⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀
// ⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⠛⠛⠁⡇⠟⢿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀

var window;
var listener;
var interval;
var saved_ms = 0;
var start_date = Date.now();
var last_state;
var interval_active = 0;

function time_format(time) {
    ms = time % 1000;
    time = (time - ms) / 1000;
    sec = time % 60;
    time = (time - sec) / 60;
    min = time % 60;
    hours = (time - min) / 60;
    string = "";
    if (hours != 0) string += hours + "h ";
    if (min != 0) string += min + "m ";
    if (sec != 0) string += sec + "s ";
    return string + ms + "ms";

}

function print_time() {
    current_time_in_ms = Date.now() - start_date + saved_ms;
    const text = document.getElementsByClassName("placeholder-1rCBhr slateTextArea-27tjG0 fontSize16Padding-XoMpjI")[0];
    if (text != undefined) {
        text.innerHTML = (time_format(current_time_in_ms));
    }
}

function create_interval() {
    if (interval_active == 0) {
        interval = setInterval(print_time, 100);
        interval_active = 1;
    }
}

function stop_interval() {
    if (interval_active == 1) {
        clearInterval(interval);
        interval_active = 0;
    }
}

module.exports = () => ({
    start() {
        window = BdApi.findModuleByProps("isFocused", "isElementFullScreen");
        create_interval()

        listener = () => {
            focused = window.isFocused();
            if (focused == last_state) return;
            last_state = focused;
            if (focused) {
                start_date = Date.now();
                create_interval();
            } else {
                saved_ms = saved_ms + Date.now() - start_date;
                stop_interval();
            }

        };
        window.addChangeListener(listener);
        stop_interval();
        listener();
    },
    stop() {
        window.removeChangeListener(listener);
        stop_interval();
    }
});
