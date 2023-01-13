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

let window;
let listener;
let interval;
let saved_ms = 0;
let start_date = Date.now();
let last_state;
let interval_active = 0;

function number_to_fixed(number, digits) {
    if (number < 0) {
        return '-' + number_to_fixed(-number, digits);
    }
    // pad with zeros
    let s = number.toString();
    while (s.length < digits) {
        s = '0' + s;
    }
    return s;
}


function time_format(time) {
    let date = new Date(time);
    const ms = date.getMilliseconds();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hours = Math.floor(time / (1000 * 60 * 60));

    let string = "";
    if (hours !== 0) string += hours + "h ";
    if (min !== 0) string += (hours !== 0 ? number_to_fixed(min, 2) : min) + "m ";
    if (sec !== 0) string += (min !== 0 ? number_to_fixed(sec, 2) : sec) + "s ";
    return string + number_to_fixed(ms, 3) + "ms";
}

function print_time() {
    let current_time_in_ms = Date.now() - start_date + saved_ms;
    const text = document.getElementsByClassName("placeholder-1rCBhr slateTextArea-27tjG0 fontSize16Padding-XoMpjI")[0];
    if (text !== undefined) {
        text.innerHTML = (time_format(current_time_in_ms));
    }
}

function create_interval() {
    if (interval_active === 0) {
        interval = setInterval(print_time, 101);
        interval_active = 1;
    }
}

function stop_interval() {
    if (interval_active === 1) {
        clearInterval(interval);
        interval_active = 0;
    }
}

module.exports = () => ({
    start() {
        window = BdApi.findModuleByProps("isFocused", "isElementFullScreen");
        create_interval()

        listener = () => {
            let focused = window.isFocused();
            if (focused === last_state) return;
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
