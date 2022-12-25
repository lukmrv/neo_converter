const createTimeString = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const setAndappendZero = (appendTo) => {
        return appendTo < 10 ? (appendTo = `0${appendTo}`) : appendTo;
    };
    month = setAndappendZero(month);
    day = setAndappendZero(day);
    hours = setAndappendZero(hours);
    minutes = setAndappendZero(minutes);
    const timeString = `${day}/${month}/${year} ${hours}:${minutes}`;
    return timeString;
};
export default createTimeString;
//# sourceMappingURL=createTimeString.js.map