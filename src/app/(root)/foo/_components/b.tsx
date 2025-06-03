import { fetchContinents } from "@/domain/foo/server/fetchContinents";

export const B = async () => {
  const data = await fetchContinents();

  return (
    <div>
      {data.continents.map((continent, index) => {
        return <div key={index}>{continent.name}</div>;
      })}
    </div>
  );
};
