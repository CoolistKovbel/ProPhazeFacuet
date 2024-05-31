import React from "react";

const Page = () => {
  return (
    <main className="w-full  min-h-screen bg-[#222] flex flex-col">
      <header className="w-full p-4 bg-[#111]">
        <h1 className="text-4xl font-bold">About Page</h1>
      </header>

      <section className="p-4 flex flex-col gap-4">
        <div className="bg-[#111] p-4 rounded-lg drop-shadow-lg">
          <h2 className="mb-4 text-xl font-bold">
            Welcome to the
            <span className="bg-[#111] p-2 text-green-500 rounded-lg">
              ProPhazeFaucet
            </span>
          </h2>
          <p>
            The small decentalized appliacation that allows you to be able to
            withdrawl tokens, after a certain timer. There will be a 4 hour time
            limit as well you will be able to withdrawl after the timer as well
            as be able to use your tokens to provide liquidity pairs for future
            application.
          </p>
        </div>

        <div className="bg-[#111] p-4 rounded-lg drop-shadow-lg">
          <p>
            Within the application users will be able to create their own
            session where they will be able to also deposit a token in which
            they would like others to withdrawl.
          </p>

          <p>
            The purpose of this application is to allow more people to earn
            tokens and provide liquidity. Stay update on our socials and stay
            tune for future updates.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Page;
