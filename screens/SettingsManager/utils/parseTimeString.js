export default function parseTimeString(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);

    console.log(timeString,hours,minutes)
    return [hours, minutes];
}