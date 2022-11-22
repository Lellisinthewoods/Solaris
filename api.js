

async function getKey(BASE_URL) 
{
    const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
    const key_data = await response.json();
    return key_data.key;
}

export { getKey }