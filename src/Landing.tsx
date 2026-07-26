import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* MASTHEAD */}
      <header className="border-b rule sticky top-0 z-50 bg-cream/95 backdrop-blur">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-3 items-center py-3.5">
            <div className="hidden md:flex items-center gap-4">
              <span className="label text-ink/60">Une maison algérienne · MMXXVI</span>
            </div>
            <div className="text-center">
              <div className="display text-[26px] md:text-[32px] leading-none text-ink">
                Nutsa<span className="text-red">.</span>
              </div>
            </div>
            <div className="flex items-center justify-end gap-6">
              <span className="label text-ink/60 hidden md:inline">Livraison Alger · 24h</span>
              <a href="#commander" className="hidden md:inline-flex items-center gap-2 border border-ink px-4 py-2 text-[11px] tracking-[0.24em] uppercase font-semibold hover:bg-ink hover:text-cream transition">
                Commander
              </a>
            </div>
          </div>
          <div className="hair-gold"></div>
          <nav className="py-3 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] tracking-[0.22em] uppercase text-ink/75">
            <a href="#maison" className="hover:text-red transition">La Maison</a>
            <span className="text-gold/60">·</span>
            <a href="#gamme" className="hover:text-red transition">La Gamme</a>
            <span className="text-gold/60">·</span>
            <a href="#craft" className="hover:text-red transition">Notre Recette</a>
            <span className="text-gold/60">·</span>
            <a href="#temoignages" className="hover:text-red transition">Amateurs</a>
            <span className="text-gold/60">·</span>
            <a href="#commander" className="hover:text-red transition">Commander</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative paper border-b rule overflow-hidden">
        <div className="grain-light absolute inset-0"></div>
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-20 md:pb-32">
          <div className="rise d1 flex items-center justify-between mb-14 md:mb-20">
            <div className="flex items-center gap-6">
              <span className="label-lg text-red">Édition Fondatrice</span>
              <span className="w-2 h-2 bg-gold rotate-45"></span>
              <span className="label-lg text-ink/55 hidden md:inline">Fabrication Artisanale</span>
            </div>
            <span className="label-lg text-ink/55 hidden md:inline num">Alger · MMXXVI</span>
          </div>

          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="col-span-12 md:col-span-7 relative">
              <h1 className="rise d2 display text-ink text-[72px] sm:text-[100px] md:text-[144px] lg:text-[172px] leading-[0.84]">
                Ce n'est pas<br/>
                une <span className="display-i text-red">pâte à tartiner.</span><br/>
                <span className="text-ink/85">C'est un rituel.</span>
              </h1>

              <div className="rise d3 mt-10 max-w-[560px] flex gap-6">
                <div className="hair-gold w-16 mt-4 shrink-0"></div>
                <p className="body-serif text-[19px] md:text-[21px] leading-[1.55] text-ink/85">
                  <span className="body-serif-i text-red">Nutsa —</span> une maison algérienne, trois recettes, aucune concession. Noisettes torréfiées à la maison, chocolat à cinquante-cinq pour cent, zéro huile de palme.
                </p>
              </div>

              <div className="rise d4 mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a href="#commander" className="group inline-flex items-center gap-4 bg-red text-cream pl-7 pr-5 py-4 hover:bg-red-2 transition">
                  <span className="label-lg">Commander mon pot</span>
                  <span className="w-8 h-8 border border-cream/40 flex items-center justify-center group-hover:translate-x-1 transition">→</span>
                </a>
                <a href="#gamme" className="serif-i text-[18px] text-ink/75 hover:text-red transition underline underline-offset-4 decoration-black/20">
                  Découvrir les trois recettes
                </a>
              </div>

              <div className="rise d5 mt-16 grid grid-cols-3 gap-8 max-w-lg">
                <div>
                  <div className="display-med text-ink text-4xl md:text-5xl">III</div>
                  <div className="label text-ink/55 mt-2">Recettes</div>
                </div>
                <div>
                  <div className="display-med text-ink text-4xl md:text-5xl num-lining">0%</div>
                  <div className="label text-ink/55 mt-2">Huile de palme</div>
                </div>
                <div>
                  <div className="display-med text-red text-4xl md:text-5xl num-lining">24h</div>
                  <div className="label text-red/80 mt-2">Livraison Alger</div>
                </div>
              </div>
            </div>

            {/* JAR MOCKUP */}
            <div className="col-span-12 md:col-span-5 flex justify-center md:justify-end">
              <div className="relative rise d3">
                <div className="absolute -inset-x-8 -bottom-8 h-16 bg-black/25 blur-2xl rounded-[50%]"></div>
                <div className="relative float">
                  <div className="jar-lid mx-auto w-[220px] md:w-[260px] h-8 md:h-10 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-white/20 to-transparent"></div>
                    <div className="text-center text-cream serif text-[10px] tracking-[0.3em] leading-none pt-2.5">NUTSA · N°01</div>
                  </div>
                  <div className="mx-auto w-[240px] md:w-[290px] h-2 bg-gradient-to-b from-cream-3 to-cream-2 rounded-sm"></div>
                  <div className="jar-body relative mx-auto w-[240px] md:w-[290px] h-[320px] md:h-[380px] rounded-b-lg overflow-hidden grain">
                    <div className="absolute inset-x-6 inset-y-10 bg-cream border-2 border-red/80 flex flex-col items-center justify-between py-6 grain-light">
                      <div className="text-center">
                        <div className="label text-red">Édition Fondatrice</div>
                        <div className="hair-gold w-12 mx-auto mt-3"></div>
                      </div>
                      <div className="text-center">
                        <div className="display text-ink text-4xl leading-none">Nutsa<span className="text-red">.</span></div>
                        <div className="serif-i text-red text-sm mt-2">chocolat · noisettes</div>
                      </div>
                      <div className="text-center">
                        <div className="hair-gold w-12 mx-auto mb-3"></div>
                        <div className="label text-ink/60 num-lining">350 g · net</div>
                      </div>
                    </div>
                    <div className="jar-highlight absolute inset-0 pointer-events-none"></div>
                  </div>
                </div>
                <div className="mt-8 text-center serif-i text-ink/55 text-sm">
                  Pot en verre 350g — chocolat &amp; noisettes · fig. 1
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-t rule">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-ink/55">
            <span>Alger · Oran · Constantine · Annaba</span>
            <span className="hidden md:inline">Fabrication algérienne — livrée en 24 h</span>
            <span>© MMXXVI</span>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="border-b rule bg-cocoa text-cream overflow-hidden py-4">
        <div className="ticker flex whitespace-nowrap">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center gap-14 pr-14 serif-i text-lg text-cream/85">
              <span>« Meilleure que celle qu'on ramène d'Italie. »</span>
              <span className="text-gold text-xs">◆</span>
              <span>« Le pot n'a pas duré trois jours. »</span>
              <span className="text-gold text-xs">◆</span>
              <span>« Enfin une pâte à tartiner sans huile de palme. »</span>
              <span className="text-gold text-xs">◆</span>
              <span>« La pistache — un péché. »</span>
              <span className="text-gold text-xs">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* MAISON */}
      <section id="maison" className="border-b rule relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-40">
          <div className="text-center mb-16 md:mb-24">
            <div className="ornament-diamond text-ink/60 label"><span>§ 01 — La Maison</span></div>
          </div>

          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 md:col-span-10 md:col-start-2 max-w-4xl mx-auto">
              <p className="display text-ink text-[36px] md:text-[56px] lg:text-[68px] leading-[1.05] tracking-[-0.02em] mb-16 text-center">
                Nous avons cessé d'importer<br className="hidden md:block"/>
                ce que nous pouvions <span className="display-i text-red">faire mieux, ici.</span>
              </p>

              <div className="hair-gold mx-auto w-24 mb-14"></div>

              <div className="two-col body-serif text-[18px] md:text-[19px] leading-[1.75] text-ink/85">
                <p className="dropcap mb-6">
                  Nutsa est née d'une frustration : ouvrir un placard, y trouver un pot importé, en lire les ingrédients, et refermer le pot. L'Algérie possède les noisettes, le lait, le sucre, les mains, le savoir-faire. Il ne manquait qu'une chose : quelqu'un décidé à faire ça sérieusement.
                </p>
                <p className="mb-6">
                  Nous torréfions les noisettes nous-mêmes, à la ferme, la veille du broyage. Le chocolat est d'origine unique, à cinquante-cinq pour cent de cacao. Aucune huile de palme, aucun arôme artificiel, aucun émulsifiant industriel — seulement du beurre de cacao et une pincée de sel de mer.
                </p>
                <p className="mb-6">
                  Chaque pot est fermé à la main. Nous ne produisons pas plus de neuf cents pots par semaine — c'est la capacité de notre atelier, et nous ne voulons pas la dépasser. La qualité s'arrête à l'échelle qu'on peut contrôler.
                </p>
                <p>
                  Trois recettes, aucune de plus. Le chocolat-noisettes originel, la pistache d'Iran torréfiée à Alger, et le rocher — un mariage d'éclats de noisette dans une pâte plus dense. C'est tout. Et c'est déjà beaucoup.
                </p>
              </div>

              <div className="mt-16 border-t border-b border-red py-10 md:py-12 text-center">
                <p className="display-i text-ink text-[26px] md:text-[36px] leading-[1.25] max-w-3xl mx-auto">
                  « Une pâte à tartiner ne devrait contenir<br className="hidden md:block"/>
                  que ce que vous seriez fiers<br className="hidden md:block"/>
                  <span className="text-red">de servir à vos enfants.</span> »
                </p>
                <div className="label text-ink/55 mt-6">— Notre principe fondateur</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GAMME */}
      <section id="gamme" className="border-b rule bg-cream-2/60 relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-40">
          <div className="text-center mb-14 md:mb-20">
            <div className="ornament-diamond text-ink/60 label mb-8"><span>§ 02 — La Gamme</span></div>
            <h2 className="display text-ink text-[52px] md:text-[80px] lg:text-[104px] leading-[0.92]">
              Trois recettes.<br/>
              <span className="display-i text-ink/60">Aucun compromis.</span>
            </h2>
            <div className="hair-gold mx-auto w-24 mt-10"></div>
            <p className="serif-i text-ink/70 text-lg mt-8 max-w-xl mx-auto leading-relaxed">
              Chaque pot est numéroté, daté, signé de l'atelier d'Alger. 350 grammes, verre recyclable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
            {/* I */}
            <article className="bg-cream border border-ink/10 relative grain-light group hover:border-red transition">
              <div className="p-8">
                <div className="flex items-baseline justify-between mb-6">
                  <div className="roman text-red text-3xl">I</div>
                  <div className="label text-ink/50">La Fondatrice</div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-cocoa via-ink to-black rounded-sm relative overflow-hidden grain mb-8 flex items-center justify-center">
                  <div className="absolute inset-6 border border-gold/30"></div>
                  <div className="text-center">
                    <div className="label text-gold mb-2">Nutsa</div>
                    <div className="display foil text-3xl leading-none">Chocolat<br/><span className="display-i">Noisettes</span></div>
                    <div className="label text-gold/80 mt-3 num-lining">N°01</div>
                  </div>
                </div>
                <h3 className="serif text-ink text-2xl leading-tight">Chocolat &amp; Noisettes</h3>
                <p className="body-serif text-ink/70 text-[15px] leading-relaxed mt-3">
                  La recette d'origine. Noisettes de Kabylie torréfiées à cœur, chocolat 55%, une pincée de sel. La référence.
                </p>
                <div className="hair mt-6 mb-4"></div>
                <div className="flex items-baseline justify-between">
                  <div className="display text-ink text-3xl num-lining">1 200<span className="serif-i text-red text-lg ml-1">DA</span></div>
                  <div className="label text-ink/50">Pot 350g</div>
                </div>
              </div>
            </article>

            {/* II */}
            <article className="bg-cream border border-ink/10 relative grain-light group hover:border-red transition md:transform md:-translate-y-4">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red text-cream label px-4 py-1.5">
                Édition rare
              </div>
              <div className="p-8">
                <div className="flex items-baseline justify-between mb-6">
                  <div className="roman text-red text-3xl">II</div>
                  <div className="label text-ink/50">La Précieuse</div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-[#5A6B3A] via-[#3F4D28] to-[#2A3418] rounded-sm relative overflow-hidden grain mb-8 flex items-center justify-center">
                  <div className="absolute inset-6 border border-gold/30"></div>
                  <div className="text-center">
                    <div className="label text-gold mb-2">Nutsa</div>
                    <div className="display foil text-3xl leading-none">Pistache<br/><span className="display-i">d'Iran</span></div>
                    <div className="label text-gold/80 mt-3 num-lining">N°02</div>
                  </div>
                </div>
                <h3 className="serif text-ink text-2xl leading-tight">Pistache</h3>
                <p className="body-serif text-ink/70 text-[15px] leading-relaxed mt-3">
                  Pistaches d'Iran torréfiées à Alger, chocolat blanc de couverture, arôme naturel de vanille de Madagascar.
                </p>
                <div className="hair mt-6 mb-4"></div>
                <div className="flex items-baseline justify-between">
                  <div className="display text-ink text-3xl num-lining">1 800<span className="serif-i text-red text-lg ml-1">DA</span></div>
                  <div className="label text-ink/50">Pot 350g</div>
                </div>
              </div>
            </article>

            {/* III */}
            <article className="bg-cream border border-ink/10 relative grain-light group hover:border-red transition">
              <div className="p-8">
                <div className="flex items-baseline justify-between mb-6">
                  <div className="roman text-red text-3xl">III</div>
                  <div className="label text-ink/50">L'Intense</div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-[#4A2A15] via-cocoa to-ink rounded-sm relative overflow-hidden grain mb-8 flex items-center justify-center">
                  <div className="absolute inset-6 border border-gold/30"></div>
                  <div className="text-center">
                    <div className="label text-gold mb-2">Nutsa</div>
                    <div className="display foil text-3xl leading-none">Rocher<br/><span className="display-i">croquant</span></div>
                    <div className="label text-gold/80 mt-3 num-lining">N°03</div>
                  </div>
                </div>
                <h3 className="serif text-ink text-2xl leading-tight">Rocher</h3>
                <p className="body-serif text-ink/70 text-[15px] leading-relaxed mt-3">
                  Pâte dense au chocolat noir 65%, éclats de noisette entière, feuilletine croustillante. Pour les puristes.
                </p>
                <div className="hair mt-6 mb-4"></div>
                <div className="flex items-baseline justify-between">
                  <div className="display text-ink text-3xl num-lining">1 400<span className="serif-i text-red text-lg ml-1">DA</span></div>
                  <div className="label text-ink/50">Pot 350g</div>
                </div>
              </div>
            </article>
          </div>

          <div className="text-center mt-14">
            <div className="serif-i text-ink/60 text-lg mb-4">Le coffret dégustation — les trois pots.</div>
            <a href="#commander" className="group inline-flex items-center gap-3 border-2 border-ink px-8 py-4 hover:bg-ink hover:text-cream transition">
              <span className="label-lg">Découvrir le coffret · 3 900 DA</span>
              <span className="w-7 h-7 border border-current flex items-center justify-center group-hover:translate-x-1 transition">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CRAFT */}
      <section id="craft" className="border-b rule bg-ink text-cream relative overflow-hidden">
        <div className="grain absolute inset-0 opacity-40"></div>
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-40">
          <div className="text-center mb-14 md:mb-20">
            <div className="ornament-diamond text-cream/60 label mb-6"><span>§ 03 — La Recette</span></div>
            <div className="serif-i text-cream/70 text-lg">Ce qui entre — et ce qui n'entre jamais — dans nos pots.</div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="border-t border-b border-cream/20 py-10 md:py-14 mb-16 text-center">
              <div className="display text-cream text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.02em]">
                « Sept ingrédients.<br/>
                <span className="display-i text-gold">Pas un de plus.</span> »
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
              <div>
                <div className="label text-gold mb-6">Ce que contient un pot</div>
                <ul className="col-rules border-t border-b border-cream/20">
                  <li className="py-4 flex items-baseline justify-between gap-4"><span className="serif text-cream text-lg">Noisettes torréfiées</span><span className="body-serif-i text-cream/60 num">42%</span></li>
                  <li className="py-4 flex items-baseline justify-between gap-4"><span className="serif text-cream text-lg">Sucre roux non raffiné</span><span className="body-serif-i text-cream/60 num">22%</span></li>
                  <li className="py-4 flex items-baseline justify-between gap-4"><span className="serif text-cream text-lg">Chocolat 55%</span><span className="body-serif-i text-cream/60 num">18%</span></li>
                  <li className="py-4 flex items-baseline justify-between gap-4"><span className="serif text-cream text-lg">Lait entier en poudre</span><span className="body-serif-i text-cream/60 num">10%</span></li>
                  <li className="py-4 flex items-baseline justify-between gap-4"><span className="serif text-cream text-lg">Beurre de cacao</span><span className="body-serif-i text-cream/60 num">7%</span></li>
                  <li className="py-4 flex items-baseline justify-between gap-4"><span className="serif text-cream text-lg">Vanille naturelle</span><span className="body-serif-i text-cream/60"><em>trace</em></span></li>
                  <li className="py-4 flex items-baseline justify-between gap-4"><span className="serif text-cream text-lg">Sel de mer</span><span className="body-serif-i text-cream/60"><em>pincée</em></span></li>
                </ul>
              </div>
              <div>
                <div className="label text-red mb-6">Ce qu'il ne contient jamais</div>
                <ul className="col-rules border-t border-b border-cream/20">
                  {[
                    "Huile de palme",
                    "Émulsifiants (lécithine E322)",
                    "Arômes artificiels",
                    "Conservateurs",
                    "Sirop de glucose",
                    "Sucre raffiné blanc",
                    "Lait en poudre écrémé",
                  ].map((item) => (
                    <li key={item} className="py-4 flex items-baseline gap-4 text-cream/60 line-through decoration-red decoration-2">
                      <span className="serif text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-14 pt-8 border-t border-cream/20">
              <p className="body-serif-i text-cream/75 text-[17px] leading-relaxed max-w-2xl mx-auto text-center">
                Nous ne prétendons pas être un aliment diététique. Nous prétendons être la version la plus honnête d'un plaisir qui existe depuis toujours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEMOIGNAGES */}
      <section id="temoignages" className="border-b rule bg-cream-2/60 relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-40">
          <div className="text-center mb-14 md:mb-20">
            <div className="ornament-diamond text-ink/60 label mb-8"><span>§ 04 — Amateurs</span></div>
            <h2 className="display text-ink text-[44px] md:text-[72px] lg:text-[92px] leading-[0.95] tracking-[-0.02em]">
              Ce qu'en disent<br/>
              <span className="display-i text-ink/60">les premiers gourmands.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 max-w-6xl mx-auto">
            {[
              { i: "L", n: "Lynda Kaced",     m: "Alger · commande N°042",       q: <>Depuis Nutsa, je ne peux plus retourner à l'autre marque. Trop sucrée, trop grasse. Ici c'est la <span className="serif-i text-red">noisette</span> qu'on sent — pas l'usine.</> },
              { i: "M", n: "Mounir Zerhouni", m: "Oran · commande N°118",        q: <>Le pot de pistache est <span className="serif-i text-red">arrivé un jeudi.</span> Il était fini le dimanche. Toute la famille en veut maintenant. Vous devriez augmenter la production.</> },
              { i: "S", n: "Sofia Benali",    m: "Constantine · commande N°203", q: <>Enfin un produit algérien haut de gamme qu'on peut offrir sans rougir. La présentation, le goût, l'histoire — <span className="serif-i text-red">tout est là.</span></> },
            ].map((t) => (
              <figure key={t.n} className="text-center md:text-left">
                <div className="text-red display text-7xl leading-none mb-4">“</div>
                <blockquote className="serif text-ink text-[22px] md:text-[24px] leading-[1.35]">
                  {t.q}
                </blockquote>
                <figcaption className="mt-8 pt-4 border-t border-ink flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-red text-cream serif flex items-center justify-center text-lg">{t.i}</div>
                  <div>
                    <div className="serif text-ink text-[15px]">{t.n}</div>
                    <div className="label text-ink/55 mt-1">{t.m}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* COMMANDER */}
      <section id="commander" className="border-b rule relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-40">
          <div className="text-center mb-14 md:mb-20">
            <div className="ornament-diamond text-ink/60 label mb-8"><span>§ 05 — Commander</span></div>
            <h2 className="display text-ink text-[48px] md:text-[80px] lg:text-[104px] leading-[0.92]">
              Livraison à Alger<br/>
              <span className="display-i text-ink/60">sous vingt-quatre heures.</span>
            </h2>
            <p className="body-serif text-ink/70 text-lg leading-relaxed max-w-xl mx-auto mt-6">
              Paiement à la livraison partout en Algérie. Coffret dégustation ou pot unique — vous choisissez.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative border border-ink bg-cream grain-light overflow-hidden">
              <div className="absolute -right-16 top-8 bg-red text-cream label px-20 py-1.5 rotate-45 origin-center shadow">
                Coffret dégustation
              </div>

              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-5 p-10 md:p-14 border-b md:border-b-0 md:border-r rule">
                  <div className="label text-ink/55">Trois pots · 3 × 350g</div>
                  <div className="serif text-ink/40 text-2xl line-through mt-1 num-lining">4 400 DA</div>

                  <div className="mt-6">
                    <div className="display text-ink text-[88px] md:text-[124px] leading-[0.82] tracking-[-0.03em]">
                      3 900<span className="display-i text-red text-4xl md:text-6xl ml-2">DA</span>
                    </div>
                    <div className="label text-ink/60 mt-4 num">Livraison offerte à Alger</div>
                  </div>

                  <div className="hair-gold w-16 mt-10 mb-6"></div>
                  <p className="serif-i text-ink/70 text-lg leading-relaxed max-w-xs">
                    La collection complète : Chocolat-Noisettes, Pistache, Rocher — dans un coffret carton signé.
                  </p>
                  <div className="mt-6 label text-red num-lining">Édition limitée à 300 coffrets</div>
                </div>

                <div className="col-span-12 md:col-span-7 p-10 md:p-14">
                  <div className="label text-red mb-6">Ce que contient le coffret</div>
                  <ul className="space-y-4">
                    {[
                      "Un pot Chocolat & Noisettes — 350g",
                      "Un pot Pistache d'Iran — 350g",
                      "Un pot Rocher croquant — 350g",
                      "Coffret carton signé et numéroté",
                      "Petite cuillère en olivier (offerte)",
                      "Livraison offerte à Alger, sous 24h",
                    ].map((line) => (
                      <li key={line} className="flex items-baseline gap-3 body-serif text-ink text-[17px]">
                        <span className="text-gold">◆</span> {line}
                      </li>
                    ))}
                  </ul>

                  <a href="#" className="mt-12 group inline-flex items-center gap-4 bg-red text-cream pl-8 pr-6 py-5 hover:bg-red-2 transition">
                    <span className="label-lg">Commander mon coffret</span>
                    <span className="w-9 h-9 border border-cream/40 flex items-center justify-center group-hover:translate-x-1 transition">→</span>
                  </a>
                  <div className="label text-ink/50 mt-5 num">Paiement à la livraison · CB · Édahabia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b rule bg-cream-2/60 relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-40">
          <div className="text-center mb-14 md:mb-20">
            <div className="ornament-diamond text-ink/60 label mb-8"><span>§ 06 — Questions</span></div>
            <h2 className="display text-ink text-[44px] md:text-[68px] leading-[0.95]">
              Les questions<br/>
              <span className="display-i text-ink/60">que vous nous posez.</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              { q: "Combien de temps se conserve un pot ouvert ?",
                a: "Six semaines au réfrigérateur, dans son pot d'origine, refermé. Sans conservateur, nous ne pouvons pas garantir davantage." },
              { q: "Livrez-vous en dehors d'Alger ?",
                a: "Oui, dans toute l'Algérie sous 48 à 72 h. Frais de livraison variables selon la wilaya. Paiement à la livraison partout." },
              { q: "Vos produits sont-ils halal ?",
                a: "Oui, intégralement. Aucun ingrédient d'origine porcine, aucun alcool. Nos matières premières sont certifiées." },
              { q: "Convient-il aux enfants ?",
                a: "Sans huile de palme ni additifs, oui. Attention néanmoins aux allergies : Nutsa contient des noisettes, du lait, et selon la recette, de la pistache." },
              { q: "Puis-je offrir un pot en cadeau ?",
                a: "Oui. Ajoutez « cadeau » en note de commande — nous emballons le pot dans un papier signé, avec un mot manuscrit si vous le souhaitez." },
            ].map((item, i, arr) => (
              <details key={item.q} className={`border-t ${i === arr.length - 1 ? "border-b" : ""} rule py-7 group`}>
                <summary className="flex items-baseline justify-between gap-8">
                  <span className="serif text-ink text-[22px] md:text-[26px] leading-snug">{item.q}</span>
                  <span className="faq-plus display text-red text-3xl leading-none">+</span>
                </summary>
                <p className="body-serif text-ink/80 text-[17px] leading-[1.7] mt-4 max-w-2xl">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-b rule bg-cocoa text-cream relative overflow-hidden">
        <div className="grain absolute inset-0 opacity-40"></div>
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 py-28 md:py-48 text-center">
          <div className="ornament-diamond text-cream/60 label mb-10"><span>Épilogue</span></div>
          <h2 className="display text-cream text-[56px] sm:text-[88px] md:text-[124px] lg:text-[152px] leading-[0.88] tracking-[-0.03em] max-w-6xl mx-auto">
            Le petit déjeuner<br/>
            <span className="display-i text-cream/65">n'a plus rien</span><br/>
            d'<span className="text-red">ordinaire</span>.
          </h2>

          <div className="hair-gold w-24 mx-auto mt-14"></div>

          <a href="#commander" className="mt-14 group inline-flex items-center gap-4 border border-cream pl-10 pr-6 py-5 hover:bg-cream hover:text-cocoa transition">
            <span className="label-lg">Commander mon premier pot</span>
            <span className="w-9 h-9 border border-current flex items-center justify-center group-hover:translate-x-1 transition">→</span>
          </a>
          <div className="serif-i text-cream/45 mt-8">— Nutsa, Alger, printemps 2026.</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
          <div className="text-center mb-10">
            <div className="display text-ink text-4xl md:text-5xl">
              Nutsa<span className="text-red">.</span>
            </div>
            <div className="ornament-diamond text-ink/50 label mt-4"><span>Maison indépendante · Alger</span></div>
          </div>
          <div className="hair mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-center">
            <div className="label text-ink/60">© MMXXVI — Tous droits réservés</div>
            <div className="label text-ink/60 text-center">Alger · Oran · Constantine · Annaba</div>
            <div className="flex justify-center md:justify-end gap-8 label text-ink/70">
              <a href="#" className="hover:text-red transition">Mentions</a>
              <a href="#" className="hover:text-red transition">CGV</a>
              <a href="#" className="hover:text-red transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
