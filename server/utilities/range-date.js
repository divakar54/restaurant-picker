

export const range_date = () => {
    let e = new Date();
    let e1 = new Date();
    e.setUTCHours(e.getUTCHours()-1); 
    return [e1.toISOString(), e.toISOString()]; // begin and end times
}