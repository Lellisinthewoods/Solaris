//DENNA FIL ANVÄNDS INTE LÄNGRE EFTERSOM API:ET INTE LÄNGRE ÄR AKTIVT

async function getKey(BASE_URL) 
{
    const response = await fetch(`${BASE_URL}/keys`);
    const key_data = await response.json();
    console.log(key_data.key)
    return key_data.key;
}

export { getKey }