
export default async function postMethod(path, body) {
  const response = await fetch(path, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  
  
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}