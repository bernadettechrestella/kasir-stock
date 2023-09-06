import { useEffect, useState } from "react";

function Jam(props) {
    const {stop} = props;
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let interval = null;

        if (!stop) {
            interval = setInterval(() => { //interval untuk mengupdate jam setiap 1 detik
                setTime(new Date()); //mengupdate jam
            }, 1000); //1000 = 1 detik
        }

        return () => {
            clearInterval(interval)
        }
    }, [stop]); //mengupdate jika stop

    const timeFormat = (date) => {
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        hour = String(hour).padStart(2, '0'); //membuat jam menjadi 2 digit
        minute = String(minute).padStart(2, '0'); //0 untuk menambahkan angka 0 di depan ketika nilai kurang dari 10
        second = String(second).padStart(2, '0');

        return `${hour}:${minute}:${second}`
    }

    return (
        <div>{timeFormat(time)}</div>
    )
}

export default Jam;