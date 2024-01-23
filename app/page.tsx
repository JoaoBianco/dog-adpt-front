export default async function Home() {
  const data: any = await fetch("http://localhost:3000/owners")
    .then((response) => response.json())
    .then((data) => data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      {data?.map((owner: any) => (
        <p key={owner.id}>{owner.name}</p>
      ))}
    </main>
  );
}
