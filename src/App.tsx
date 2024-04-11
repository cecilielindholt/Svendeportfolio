import "./App.css";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";

import samlet from "./assets/samlet.png";
import digitalt from "./assets/digitalt.png";
import trykt from "./assets/trykt.png";
import { Badge } from "./components/ui/badge";

function App() {
  return (
    <>
      <div className="flex">
        <section className="bg-cover bg-center w-full bg-lightgreen bg-dots text-center -mb-2 sm:-mb-4">
          <div className="relative flex py-5 sm:py-10 items-center">
            <div className="flex-grow border-t-4 border-white"></div>
            <Badge
              variant={"outline"}
              className="uppercase bg-white border-none rounded-full text-darkgreen font-bold"
            >
              Cecilie Morgenstjerne Lindholt
            </Badge>
            <div className="flex-grow border-t-4 border-white"></div>
          </div>
          <div className="pt-32">
            <div className="uppercase font-medium">
              Mediegrafiker Svendeprøve
            </div>
            <div className="uppercase font-black text-7xl sm:text-9xl text-white">
              Portfolio
            </div>
          </div>
        </section>
      </div>
      <div className="flex">
        <section className="bg-cover bg-center py-20 w-full bg-white">
          <div className="container mx-auto">
            <div className="flex items-center justify-center">
              <div className="md:w-1/2 text-center">
                <div className="inline-block text-left">
                  <div className="text-5xl font-black">Mediegrafiker</div>
                  <div className="text-xl font-medium text-darkgreen uppercase">
                    Udlært på forlaget frydenlund
                  </div>
                  <div className="font-light pt-10">
                    Svendeportfolio med udgangspunkt i to produkter lavet på
                    lærepladsen.
                    <br />
                    <br />
                    En beskrivelse opdelt i fire kernefagligheder:
                    <ul className="list-disc list-inside">
                      <li>Grafisk design</li>
                      <li>Grafik og billedebehandling</li>
                      <li>Typografi</li>
                      <li>Grafisk produktionsforståelse</li>
                    </ul>
                  </div>
                </div>
                <div className="py-10">
                  <Button
                    variant={"outline"}
                    className="md:hidden uppercase text-darkgreen border-darkgreen hover:bg-darkgreen hover:text-white"
                    asChild
                  >
                    <a target="_blank" href="./Samlet_Portfolio_web.pdf">
                      Hent Samlet Portfolio
                    </a>
                  </Button>
                </div>
              </div>

              <div className="hidden md:block md:w-1/2 pl-16 text-center">
                <img
                  src={samlet}
                  className="w-full max-w-md object-cover rounded-xl"
                  alt="Layout Image"
                />
                <Button
                  variant={"outline"}
                  className="uppercase text-darkgreen border-darkgreen hover:bg-darkgreen hover:text-white"
                  asChild
                >
                  <a target="_blank" href="./Samlet_Portfolio_web.pdf">
                    Hent Samlet Portfolio
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="p-4 text-center sm:p-8 bg-lightgreen">
        <div className="container items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <div className="sm:w-1/2 flex flex-col justify-center items-center">
            <img
              src={digitalt}
              className="h-64 object-cover rounded-xl"
              alt="Layout Image"
            />
            <div className="font-black text-lg text-darkgreen pb-3">
              Digitalt Produkt
            </div>
            <div className="font-medium text-sm uppercase">E-bog</div>
            <div className="font-light text-xs">Sorøkatastrofen</div>
            <div className="font-light text-xs">Jakob Oliing</div>
            <br />
            <Button
              asChild
              variant={"outline"}
              className="uppercase text-darkgreen border-darkgreen hover:bg-darkgreen hover:text-white"
            >
              <a target="_blank" href="./Digitalt_Portfolio_web.pdf">
                Hent beskrivelse
              </a>
            </Button>
          </div>
          <div className="sm:w-1/2 flex flex-col justify-center items-center">
            <img
              src={trykt}
              className="h-64 object-cover rounded-xl"
              alt="Layout Image"
            />
            <div className="font-black text-lg text-darkgreen pb-3">
              Trykt Produkt
            </div>
            <div className="font-medium text-sm uppercase">Hardback</div>
            <div className="font-light text-xs">På togt til Konstantinopel</div>
            <div className="font-light text-xs">Stefan Torfasons og Dan H. Andersens</div>
            <br />
            <Button
              asChild
              variant={"outline"}
              className="uppercase text-darkgreen border-darkgreen hover:bg-darkgreen hover:text-white"
            >
              <a target="_blank" href="./Trykt_Portfolio_web.pdf">
                Hent beskrivelse
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col sm:flex-row text-center sm:justify-evenly p-4">
        <div className="font-medium text-xs text-darkgreen">Cecilie Morgenstjerne Lindholt</div>
        <div className="font-medium text-xs text-darkgreen">Svendeportfolio</div>
        <div className="font-medium text-xs text-darkgreen">Forår 2024</div>
      </div>
    </>
  );
}

export default App;
