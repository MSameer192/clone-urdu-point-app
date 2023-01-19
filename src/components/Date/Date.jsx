import React from 'react';
const moment = require('moment-hijri');

function Date() {

    const hijriWeekDays = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];
    const hijriMonths = ["محرم", "صفر", "ربيع الأول", "ربيع الثاني", "جمادى الأول", "جمادى الثانی", "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"];

    const currentDate = moment();
    const hijriDay = hijriWeekDays[currentDate.format("e")];
    

    const islamicDate = (hijriDay + ", " + currentDate.format("iDD") + hijriMonths[currentDate.format('e')] + + currentDate.format("iYYYY") + "ھ");



    return (
        <div className='text-end fw-semibold fs-6 text-danger'>
            {islamicDate}
        </div>
    );
}

export default Date;
