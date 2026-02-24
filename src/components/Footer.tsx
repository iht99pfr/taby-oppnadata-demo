export default function Footer() {
  return (
    <footer className="bg-[#006590] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">{"Täby kommun"}</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Esplanaden 3<br />
              {"183 80 Täby"}<br />
              Tel: 08-55 55 90 00
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">{"Öppettider"}</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {"Måndag\u2013fredag: 08:00\u201317:00"}<br />
              {"Telefontid: 08:00\u201316:30"}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">{"Länkar"}</h3>
            <ul className="text-white/80 text-sm space-y-1">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Om webbplatsen
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {"Tillgänglighet"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Personuppgifter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60 text-xs">
          {"DEMO \u2014 Detta är inte Täby kommuns officiella webbplats"}
        </div>
      </div>
    </footer>
  );
}
