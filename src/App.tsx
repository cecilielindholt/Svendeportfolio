import "./App.css";
import {
  TypographyH1,
  TypographyMuted,
  TypographyP,
} from "./components/typography";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";

import digital from "./assets/digital.png";
import tryk from "./assets/tryk.png";

function App() {
  return (
    <>
      <div className="bg-gray-50 flex">
        <section className="bg-cover bg-center py-32 w-full bg-black/15">
          <div className="container mx-auto text-left text-white">
            <div className="flex items-center">
              <div className="md:w-1/2 text-center">
                <TypographyMuted>
                  Cecilie Morgenstjerne Lindholt
                </TypographyMuted>
                <TypographyH1>Svendeportfolio</TypographyH1>
                <p className="text-xl mb-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  viverra euismod odio, gravida pellentesque urna varius vitae.
                </p>
                <Button asChild><a target="_blank" href="./Svendeportfolio_samlet.pdf">Hent PDF</a></Button>
                {/* <a
                  href="#"
                  className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
                >
                  Demo
                </a> */}
              </div>
              <div className="hidden md:block md:w-1/2 pl-16">
                <img
                  src="https://source.unsplash.com/random?ux"
                  className="h-64 w-full object-cover rounded-xl"
                  alt="Layout Image"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container p-4 text-center sm:p-8">
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <div className="sm:w-1/2 flex flex-col justify-center items-center">
            <img
              src={digital}
              className="h-64 object-cover rounded-xl"
              alt="Layout Image"
            />
            <TypographyP>Digital Portfolio</TypographyP>
            <Button asChild><a target="_blank" href="./SvendeportfolioDigital.pdf">Hent PDF</a></Button>
          </div>
          <div className="sm:w-1/2 flex flex-col justify-center items-center">
            <img
              src={tryk}
              className="h-64 object-cover rounded-xl"
              alt="Layout Image"
            />
            <TypographyP>Tryk Portfolio</TypographyP>
            <Button asChild><a target="_blank" href="./SvendeportfolioTryk.pdf">Hent PDF</a></Button>
          </div>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col sm:flex-row text-center sm:justify-evenly p-4">
        <TypographyMuted>Cecilie Morgenstjerne Lindholt</TypographyMuted>
        <TypographyMuted>Svendeportfolio</TypographyMuted>
        <TypographyMuted>Forår 2024</TypographyMuted>
      </div>
    </>
  );
}

export default App;
