import { Column, DataTable } from "@/common/component";

export default function Home() {
  const dummyData = [
    {
      id: "191010",
      name: "일민수",
    },
    {
      id: "191010",
      name: "이민수",
    },
  ];

  return (
    <>
      <div className="w-50">
        <DataTable value={dummyData}>
          <Column header="id" field="id" />
          <Column header="name" field="name" />
        </DataTable>
      </div>
    </>
  );
}
