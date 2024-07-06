async function getData() {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  if (!res.ok) {
    console.log('fetch failed');
    
  }

  return res.json();
}

export default async function Page() {
  const joke = await getData();
  return <h2>{joke.value}</h2>;
}
