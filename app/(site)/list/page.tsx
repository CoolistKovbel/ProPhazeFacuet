import ListComponent from "@/app/components/listcomponent";


const Page = () => {
3

  const phazetokenlist = [
    {
      tokenName: "",
      tokenAddress: "",
      tokenLink: "",
      tokenAmountLeft: "",
      tokenAmountStaked: "",
      tokenDistributeRate: "",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#222]">
      <header className="bg-[#222] p-4">
        <h2 className="text-2xl font-bold">Phaze Token list</h2>
        <p className="text-sm">
          This is going to be a small token list where you will be see tokens as
          well others will be able to launch tokens for a fee.
        </p>
      </header>

      <ListComponent />
    </main>
  );
};

export default Page;
