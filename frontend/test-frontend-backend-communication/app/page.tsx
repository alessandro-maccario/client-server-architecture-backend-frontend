import UserTable from "../components/UserTable";
import Header from "../components/Header";

type User = {
  id: number;
  name: string;
  age: number;
};

async function getUsersData(): Promise<User[]> {
  const res = await fetch("http://localhost:8000/data", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const usersData = await getUsersData();

  // if the userData is not empty, take the column name dinamically
  const columns = usersData.length > 0 ? Object.keys(usersData[0]) : [];

  return (
    <main>
      <Header />
      <UserTable data={usersData} />
    </main>
  );
}
