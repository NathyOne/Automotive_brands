import classicDriverHero from "../assets/optimized/classic-driver-hero.webp";
import classicDriverCollectingPurpose from "../assets/optimized/classic-driver-collecting-purpose.webp";
import classicDriverExperiencePerspective from "../assets/optimized/classic-driver-experience-perspective.webp";
import classicDriverLogoCard from "../assets/optimized/classic-driver-logo.webp";
import classicDriverLogoGreen from "../assets/optimized/classic-driver-logo-green.webp";
import classicDriverMoreThanOwnership from "../assets/optimized/classic-driver-more-than-ownership.webp";
import classicDriverProductHero from "../assets/optimized/classic-driver-product-hero.webp";
import encorCurtainRaiser from "../assets/optimized/encor-curtain-raiser.webp";
import encorElevatingEssence from "../assets/optimized/encor-elevating-essence.webp";
import encorGalleryBlack from "../assets/optimized/encor-gallery-black.webp";
import encorGalleryDash from "../assets/optimized/encor-gallery-dash.webp";
import encorGalleryEleven from "../assets/optimized/encor-gallery-eleven.webp";
import encorGalleryEngine from "../assets/optimized/encor-gallery-engine.webp";
import encorGalleryGreen from "../assets/optimized/encor-gallery-green.webp";
import encorGalleryRearFull from "../assets/optimized/encor-gallery-rear-full.webp";
import encorGalleryRearLight from "../assets/optimized/encor-gallery-rear-light.webp";
import encorGallerySideflat from "../assets/optimized/encor-gallery-sideflat.webp";
import encorGallerySilver from "../assets/optimized/encor-gallery-silver.webp";
import encorHero from "../assets/optimized/encor-hero.webp";
import encorLogo from "../assets/optimized/encor-logo.webp";
import encorProductHero from "../assets/optimized/encor-product-hero.webp";
import encorSpecialPlace from "../assets/optimized/encor-special-place.webp";
import kerrHero from "../assets/optimized/kerr-hero.webp";
import kerrGuntherEngine from "../assets/optimized/kerr-gunther-engine.webp";
import kerrGuntherOne from "../assets/optimized/kerr-gunther-one.webp";
import kerrKoenigseggOne from "../assets/optimized/kerr-koenigsegg-one.webp";
import kerrKoenigseggTwo from "../assets/optimized/kerr-koenigsegg-two.webp";
import kerrLogoCard from "../assets/optimized/kerr-logo.webp";
import taagGlowLogo from "../assets/optimized/taag-glow-logo.webp";
import taagWideLogo from "../assets/optimized/taag-wide-logo.webp";
import zbEngine from "../assets/optimized/zb-engine.webp";
import zbEngineering from "../assets/optimized/zb-engineering.webp";
import zbExterior from "../assets/optimized/zb-exterior.webp";
import zbGalleryFive from "../assets/optimized/zb-gallery-five.webp";
import zbGalleryFour from "../assets/optimized/zb-gallery-four.webp";
import zbGalleryNine from "../assets/optimized/zb-gallery-nine.webp";
import zbGalleryOne from "../assets/optimized/zb-gallery-one.webp";
import zbGallerySeven from "../assets/optimized/zb-gallery-seven.webp";
import zbGalleryTen from "../assets/optimized/zb-gallery-ten.webp";
import zbGalleryThree from "../assets/optimized/zb-gallery-three.webp";
import zbGalleryTwo from "../assets/optimized/zb-gallery-two.webp";
import zbHero from "../assets/optimized/zb-hero.webp";
import zbInterior from "../assets/optimized/zb-interior.webp";
import zbLogo from "../assets/optimized/zb-logo.webp";
import zbProductHero from "../assets/optimized/zb-product-hero.webp";

export const contactSettings = {
  inbox: "conversations@theautomotivegroup.com",
  deliveryMode: "mailto",
};

export const groupOverview = {
  name: "The Automotive Group",
  statement: "Brand information and enquiries for The Automotive Group.",
  detail: "Product pages for Zeigler Bailey and Encor are now available.",
};

export const brands = [
  {
    slug: "zeigler-bailey",
    name: "Zeigler Bailey",
    category: "Top left tile",
    intro: "Zeigler Bailey Z/B 4.4.",
    hoverDescription:
      "A customer-tailored recommissioning service for 1974-'89 Porsche 911 G-series models, built around a unique Australian-engineered platform, engine, suspension, electronics and driver ergonomics.",
    paragraphs: ["Product information is available below."],
    highlights: ["Z/B 4.4", "Recommissioning", "Air-cooled flat six"],
    tile: {
      image: zbHero,
      alt: "Zeigler Bailey vehicle profile in a studio setting",
    },
    hero: {
      image: zbHero,
      alt: "Zeigler Bailey hero vehicle image",
    },
    mark: {
      type: "image",
      src: zbLogo,
      alt: "Zeigler Bailey logo",
      homeClassName:
        "w-[min(75%,18rem)] translate-y-8 sm:w-[min(68%,23rem)] sm:translate-y-0 [filter:brightness(0)_invert(1)]",
      pageClassName:
        "w-[min(82%,19rem)] sm:w-[min(72%,24rem)] [filter:brightness(0)_invert(1)]",
      compactClassName: "w-28 [filter:brightness(0)_invert(1)]",
    },
    gallery: [
      {
        type: "image",
        src: zbHero,
        alt: "Zeigler Bailey car profile",
        objectPosition: "50% 48%",
        className: "lg:row-span-2 min-h-[24rem] lg:min-h-[42rem]",
      },
      {
        type: "image",
        src: zbHero,
        alt: "Close crop of the Zeigler Bailey hero image",
        objectPosition: "72% 48%",
        className: "min-h-[16rem] lg:min-h-[20rem]",
      },
      {
        type: "quote",
        eyebrow: "Zeigler Bailey",
        title: "Z/B 4.4",
        copy: "Product information is available below.",
        className: "min-h-[16rem] lg:min-h-[20rem]",
      },
    ],
    enquiryNote:
      "Every Zeigler Bailey begins with a conversation. Contact us today and let's see how our visions align.",
    product: {
      hero: {
        image: zbProductHero,
        alt: "Zeigler Bailey Z/B 4.4 studio hero",
        objectPosition: "50% 58%",
      },
      logoClassName:
        "w-[min(78%,22rem)] [filter:brightness(0)_invert(1)] sm:w-[min(58%,30rem)]",
      headline: "FOR THE DRIVEN",
      subheadline: "Exclusive Sales Partner",
      eyebrow: "Introducing Zeigler/Bailey",
      introTitle: "The world's first 4.4-litre, air-cooled, 2-valve flat six.",
      intro: [
        "Our philosophy is expressed in the Zeigler/Bailey Z/B 4.4, a customer-tailored recommissioning service available to owners of 1974-'89 Porsche 911 G-series models.",
        "The Z/B 4.4 is not a restoration of an automotive icon. It's the complete re-engineering of one - with a unique, Australian designed and up-to-the-minute platform, engine, suspension, electronics and driver ergonomics. All clothed in classic Porsche cool.",
      ],
      sections: [
        {
          eyebrow: "Exterior",
          title: "Classic proportions, re-engineered for modern performance.",
          image: zbExterior,
          alt: "Zeigler Bailey exterior detail",
          copy: [
            "The exterior of the Zeigler/Bailey Z/B 4.4 evokes the purity of classic 1970s proportions, massaged to meet the demands of up-to-the-minute performance.",
            "The body panels in carbon-fibre clothe a more muscular stance on entirely new front and rear suspensions. The front air dam and elevated ducktail are the most obvious elements of a complex package of aerodynamic and thermal management.",
          ],
        },
        {
          eyebrow: "Interior",
          title: "A benchmark for driving position, accommodation and comfort.",
          image: zbInterior,
          alt: "Zeigler Bailey interior detail",
          copy: [
            "The Z/B 4.4 interior sets the benchmark for driving position integrity, accommodation and comfort - achieved by superseding the original floor with our own, seam-welded tub structure.",
            "Drivers up to two metres tall can take the height- and reach-adjustable wheel, enjoying richly upholstered, new-generation seats. Touch points like the machined alloy gear lever and dash-mounted infotainment screen speak of luxury and convenience underwritten by ergonomic efficiency.",
          ],
        },
        {
          eyebrow: "Engineering",
          title: "A first-principles platform designed without compromise.",
          image: zbEngineering,
          alt: "Zeigler Bailey engineering detail",
          copy: [
            "The Z/B 4.4 takes its thinking back to first principles. We don't rebirth components or systems, we reinvent them - enabled by world-class CAD design and tool-less manufacturing.",
            "The seam-welded sheet steel tub is the platform for all-new geometries and components. The same ethos drove the creation of an in-house 4.4-litre air-cooled engine and electronic architecture.",
          ],
        },
        {
          eyebrow: "Engine",
          title: "The in-house movement.",
          image: zbEngine,
          alt: "Zeigler Bailey 4.4-litre air-cooled engine",
          copy: [
            "In watchmaking parlance, it is our in-house movement: an engine designed and created for our purpose. A new air-cooled flat six, with a 4.4-litre capacity for performance with dependability.",
            "Block, cylinders and heads are CNC-machined from aluminium billet. Twin-spark, coil-per-plug ignition, a billet steel crankshaft and a superior oil feed system deliver 300kW and 500Nm with the sound and soul of the air-cooled original.",
          ],
        },
      ],
      gallery: [
        zbProductHero,
        zbGalleryOne,
        zbGalleryTwo,
        zbGalleryThree,
        zbGalleryFour,
        zbExterior,
        zbGalleryFive,
        zbGallerySeven,
        zbInterior,
        zbGalleryNine,
        zbEngineering,
        zbGalleryTen,
        zbEngine,
        zbHero,
      ],
      website: "www.zeiglerbailey.com",
      finalCta: "Begin a conversation",
    },
  },
  {
    slug: "encor",
    name: "Encor",
    category: "Top right tile",
    intro: "Encor Series 1.",
    hoverDescription:
      "A remastered interpretation of the Lotus Esprit, preserving the soul of the original while elevating performance, comfort, craftsmanship and contemporary technology.",
    paragraphs: ["Product information is available below."],
    highlights: ["Series 1", "Remastered Esprit", "Sales partner"],
    tile: {
      image: encorHero,
      alt: "Encor hero vehicle photographed in studio lighting",
    },
    hero: {
      image: encorHero,
      alt: "Encor full-width hero image",
    },
    mark: {
      type: "image",
      src: encorLogo,
      alt: "Encor logo",
      homeClassName:
        "w-[min(64%,16rem)] sm:w-[min(58%,18rem)] [filter:brightness(0)_invert(1)]",
      pageClassName:
        "w-[min(70%,17rem)] sm:w-[min(62%,21rem)] [filter:brightness(0)_invert(1)]",
      compactClassName: "w-24 [filter:brightness(0)_invert(1)]",
    },
    gallery: [
      {
        type: "image",
        src: encorHero,
        alt: "Encor rear three-quarter studio image",
        objectPosition: "50% 50%",
        className: "lg:row-span-2 min-h-[24rem] lg:min-h-[42rem]",
      },
      {
        type: "image",
        src: encorHero,
        alt: "Tighter crop of the Encor studio image",
        objectPosition: "76% 44%",
        className: "min-h-[16rem] lg:min-h-[20rem]",
      },
      {
        type: "logo",
        src: encorLogo,
        alt: "Encor logo presentation",
        imageClassName:
          "w-[min(72%,14rem)] [filter:brightness(0)_invert(1)] sm:w-[min(64%,16rem)]",
        className: "min-h-[16rem] lg:min-h-[20rem]",
      },
    ],
    enquiryNote:
      "Every Encor begins with a conversation. Contact us today and let's see how our visions align.",
    product: {
      hero: {
        image: encorProductHero,
        alt: "Encor Series 1 front view",
        objectPosition: "50% 50%",
      },
      logoClassName:
        "w-[min(68%,13rem)] [filter:brightness(0)_invert(1)] sm:w-[min(48%,17rem)]",
      headline: "MASTERPIECE, REMASTERED",
      subheadline: "Australia & New Zealand Sales Partner",
      eyebrow: "Welcome to Encor",
      introTitle:
        "Encor reinterprets one of the automotive world's most iconic legacies for a new generation.",
      intro: [
        "Rooted in Lotus' enduring ethos of lightness, purity, and an uncompromised driving experience, each car is approached with respect for its origins and redefined through meticulous craftsmanship, precision, and contemporary technology.",
        "Encor Series 1 is a complete reinterpretation of the iconic Lotus Esprit Series 1 from 1975, retained with original design philosophy and at the same time created for today's demands for performance and comfort.",
      ],
      sections: [
        {
          eyebrow: "Curtain raiser",
          title: "Remastering by Encor.",
          image: encorCurtainRaiser,
          alt: "Encor Series 1 rear studio view",
          copy: [
            "For Encor, remastering is the word because our job is to preserve the soul of the original, while elevating performance, comfort, and craftsmanship.",
            "We begin with Lotus, because its DNA is rooted in ideals that have never been more relevant than they are today. Light. Efficient. Pure. Taking on the Esprit is akin to becoming a conservator for the philosophies that Lotus established.",
          ],
        },
        {
          eyebrow: "Encor Series 1",
          title: "Elevating the essence.",
          image: encorElevatingEssence,
          alt: "Encor Series 1 exterior profile",
          copy: [
            "The Encor Series 1 combines an advanced carbon fibre monocoque with evolved chassis dynamics, striking a seamless balance between heritage and modern engineering.",
            "The result is a car that embraces contemporary technology while remaining unmistakably true to the spirit and purity of Lotus' original vision.",
          ],
        },
        {
          eyebrow: "Less is more",
          title: "Just enough design.",
          image: encorHero,
          alt: "Encor exterior in studio lighting",
          copy: [
            "Anyone can modify a car. What sets Encor apart is the way we treat the Esprit: not as a project, but as a responsibility.",
            "Every change is measured and respectful, guided by the belief that progress should preserve, not replace. This isn't modification. It's preservation through progress - ensuring the Esprit lives, not as a relic, but as a masterpiece remastered for a new era.",
          ],
        },
        {
          eyebrow: "A special place",
          title: "Creating your environment.",
          image: encorSpecialPlace,
          alt: "Encor Series 1 interior",
          copy: [
            "The cabin is a study in design, luxury and technology in perfect harmony. The original interior's T-shape form and wrap-around instrument binnacle are subtly reinterpreted, maintaining the spirit of the first Esprit while elevating it for a new era.",
            "Each Series 1 can be individually configured with bespoke choices in materials, colours and specification. The result is a remastered classic shaped by personal interpretation, an icon redefined.",
          ],
        },
      ],
      gallery: [
        encorProductHero,
        encorCurtainRaiser,
        encorElevatingEssence,
        encorGallerySilver,
        encorGalleryGreen,
        encorGalleryBlack,
        encorGallerySideflat,
        encorGalleryRearFull,
        encorGalleryRearLight,
        encorGalleryDash,
        encorGalleryEngine,
        encorGalleryEleven,
        encorSpecialPlace,
        encorHero,
      ],
      website: "www.encor.design",
      finalCta: "Configure your Series 1",
    },
  },
  {
    slug: "classic-driver",
    name: "Classic Driver",
    category: "Bottom left tile",
    intro: "Timeless cars. Legendary journeys.",
    hoverDescription:
      "A curated portal for classic and collectible cars, private sales, off-market sourcing, market insight, events and driving tours.",
    paragraphs: [
      "Classic Driver curates, sources and represents some of the finest classic and collectible cars from Australia and around the world.",
    ],
    highlights: [
      "Classifieds & private sales",
      "Off-market vehicle sourcing",
      "Classic market insight",
    ],
    tile: {
      image: classicDriverHero,
      alt: "Classic Driver interior detail image",
    },
    hero: {
      image: classicDriverHero,
      alt: "Classic Driver full-width hero image",
    },
    mark: {
      type: "image",
      src: classicDriverLogoCard,
      alt: "Classic Driver logo",
      homeClassName: "w-[min(78%,18rem)] mix-blend-screen sm:w-[min(72%,22rem)]",
      pageClassName: "w-[min(78%,19rem)] mix-blend-screen sm:w-[min(70%,23rem)]",
      compactClassName: "w-28 mix-blend-screen",
    },
    gallery: [
      {
        type: "image",
        src: classicDriverHero,
        alt: "Classic Driver detail image",
        objectPosition: "46% 46%",
        className: "lg:row-span-2 min-h-[24rem] lg:min-h-[42rem]",
      },
      {
        type: "logo",
        src: classicDriverLogoCard,
        alt: "Classic Driver logo card",
        imageClassName: "w-[min(68%,15rem)] sm:w-[min(60%,17rem)]",
        className: "min-h-[16rem] lg:min-h-[20rem]",
      },
      {
        type: "quote",
        eyebrow: "Classic Driver",
        title: "Coming soon.",
        copy: "Product information will be added here.",
        className: "min-h-[16rem] lg:min-h-[20rem]",
      },
    ],
    enquiryNote:
      "Every Classic Driver relationship begins with a conversation about the car, the collector and the journey ahead.",
    product: {
      theme: {
        paper: "#f4efe2",
        ink: "#173c2f",
        muted: "#4f665a",
        dark: "#12372b",
        darkInk: "#f4efe2",
        heroOverlay:
          "linear-gradient(180deg,rgba(18,55,43,0.64),rgba(18,55,43,0.08)_42%,rgba(18,55,43,0.9))",
      },
      hero: {
        image: classicDriverProductHero,
        alt: "Classic Driver Porsche detail",
        objectPosition: "50% 43%",
      },
      logo: classicDriverLogoGreen,
      logoClassName: "w-[min(68%,17rem)] sm:w-[min(46%,21rem)]",
      headline: "TIMELESS CARS. LEGENDARY JOURNEYS",
      eyebrow: "Welcome to Classic Driver",
      introTitle: "Your ultimate portal for classic and collectible cars.",
      intro: [
        "With decades of expertise and a passion for the collectable, Classic Driver is dedicated to curating, sourcing and advertising some of the finest classic cars from Australia and around the world.",
        "Specialist in classifieds and private sales, off-market vehicle sourcing, classic market insight, events and driving tours, Classic Driver is your go-to for classic and collectible cars and their associated lifestyle.",
      ],
      sections: [
        {
          eyebrow: "Collecting with purpose",
          title: "Exceptional cars deserve more than a transaction.",
          image: classicDriverCollectingPurpose,
          alt: "Classic Driver collectible car interior detail",
          objectPosition: "50% 50%",
          copy: [
            "At Classic Driver, the world's most exceptional cars deserve context, guidance and the right next chapter. The focus is on collectible, significant and enthusiast-led automobiles: cars with provenance, rarity and emotional relevance.",
            "From air-cooled Porsche icons and homologation specials to modern performance heroes and blue-chip collector pieces, every car is approached with the same principle: quality over volume, and long-term relationships over short-term sales.",
          ],
        },
        {
          eyebrow: "Experience shapes perspective",
          title: "Commercial discipline with genuine enthusiast understanding.",
          image: classicDriverExperiencePerspective,
          alt: "Classic Driver classic Porsche rear detail",
          objectPosition: "50% 56%",
          copy: [
            "Our perspective is shaped by decades inside the premium automotive world, with experience spanning Porsche, McLaren, Tesla, Dutton Garage and Classic Throttle Shop.",
            "Classic Driver operates with a highly curated approach across sales, sourcing, consignment and private acquisition. Trust, discretion and clarity sit at the centre of every transaction.",
          ],
        },
        {
          eyebrow: "More than ownership",
          title: "A long-term partner in the journey.",
          image: classicDriverMoreThanOwnership,
          alt: "Classic Driver lifestyle moment",
          objectPosition: "50% 50%",
          copy: [
            "Beyond the cars themselves, Classic Driver is built around community, knowledge and the belief that ownership should feel as rewarding as acquisition.",
            "From ongoing collection advice and discreet sourcing opportunities to market insight, event access and trusted introductions across the collector world, the role is to support the people who live with these cars.",
          ],
        },
      ],
      gallery: [
        classicDriverProductHero,
        classicDriverCollectingPurpose,
        classicDriverExperiencePerspective,
        classicDriverMoreThanOwnership,
        classicDriverHero,
      ],
      website: "www.classicdriver.com.au",
      finalCta: "Begin a conversation",
    },
  },
  {
    slug: "kerr-collection",
    name: "Kerr Collection",
    category: "Bottom right tile",
    intro: "Passion for everything that moves.",
    hoverDescription:
      "A premium automotive, collector vehicle and bespoke client advisory business with direct access to Koenigsegg and Gunther Werks in Australia.",
    paragraphs: [
      "Kerr Collection brings trust, insight and access to premium automotive, collector vehicles and bespoke client advisory.",
    ],
    highlights: ["Koenigsegg Australia", "Gunther Werks", "Client advisory"],
    tile: {
      image: kerrHero,
      alt: "Kerr Collection hypercar image",
    },
    hero: {
      image: kerrHero,
      alt: "Kerr Collection full-width hero image",
    },
    mark: {
      type: "image",
      src: kerrLogoCard,
      alt: "Kerr Collection logo",
      homeClassName: "w-[min(46%,11rem)] sm:w-[min(44%,13rem)]",
      pageClassName: "w-[min(48%,12rem)] sm:w-[min(44%,14rem)]",
      compactClassName: "w-20",
    },
    gallery: [
      {
        type: "image",
        src: kerrHero,
        alt: "Kerr Collection hypercar in dramatic lighting",
        objectPosition: "50% 50%",
        className: "lg:row-span-2 min-h-[24rem] lg:min-h-[42rem]",
      },
      {
        type: "image",
        src: kerrHero,
        alt: "Closer crop of the Kerr Collection hero image",
        objectPosition: "66% 38%",
        className: "min-h-[16rem] lg:min-h-[20rem]",
      },
      {
        type: "logo",
        src: kerrLogoCard,
        alt: "Kerr Collection logo card",
        imageClassName: "w-[min(52%,11rem)] sm:w-[min(46%,12rem)]",
        className: "min-h-[16rem] lg:min-h-[20rem]",
      },
    ],
    enquiryNote:
      "Every Kerr Collection enquiry is handled with discretion, precision and long-term ownership in mind.",
    product: {
      hero: {
        image: kerrHero,
        alt: "Kerr Collection Koenigsegg Jesko",
        objectPosition: "50% 50%",
      },
      logoClassName: "w-[min(48%,12rem)] sm:w-[min(32%,15rem)]",
      headline: "PASSION FOR EVERYTHING THAT MOVES",
      eyebrow: "Welcome to Kerr Collection",
      introTitle:
        "Trust, insight and access across the world's most significant cars.",
      intro: [
        "With decades of experience across premium automotive, collector vehicles and bespoke client advisory, Kerr Collection has built a reputation for trust, insight and access.",
        "The approach is deeply personal, shaped by an understanding that the world's most significant cars are never just about transport, but about design, history, emotion and rarity. Every car, every client and every introduction is approached with intention.",
      ],
      sections: [
        {
          eyebrow: "Koenigsegg",
          title: "Australia's exclusive representative.",
          image: kerrKoenigseggOne,
          alt: "Koenigsegg hypercar represented by Kerr Collection",
          objectPosition: "50% 50%",
          copy: [
            "As the authorised Australian representative for Koenigsegg, Kerr Collection holds a uniquely important position within the world of hypercars.",
            "Kerr Collection provides clients with direct access to the full Koenigsegg ownership experience, from new vehicle acquisition and bespoke commissioning through to ongoing ownership support and factory-backed servicing.",
          ],
        },
        {
          eyebrow: "At your service",
          title: "A local partner for a global marque.",
          image: kerrKoenigseggTwo,
          alt: "Koenigsegg detail represented by Kerr Collection",
          objectPosition: "50% 50%",
          copy: [
            "As the authorised dealer for both sales and service in Australia, Kerr Collection ensures every client receives the precision, discretion and factory-standard care expected from the brand globally.",
            "From personalised specification consultations to technical aftersales support and long-term ownership management, Kerr Collection bridges Australian collectors and the world of Koenigsegg.",
          ],
        },
        {
          eyebrow: "Gunther Werks",
          title: "From California to the Land Down Under.",
          image: kerrGuntherOne,
          alt: "Gunther Werks vehicle represented by Kerr Collection",
          objectPosition: "50% 50%",
          copy: [
            "As the authorised Australian representative for Gunther Werks, Kerr Collection offers clients access to one of the most respected names in modern air-cooled Porsche reimagination.",
            "Known globally for obsessive engineering, carbon-fibre craftsmanship and an uncompromising approach to the Porsche 993 platform, Gunther Werks represents the intersection of heritage, performance and contemporary precision.",
          ],
        },
        {
          eyebrow: "An experience unlike any other",
          title: "Factory-backed expertise for every stage of ownership.",
          image: kerrGuntherEngine,
          alt: "Gunther Werks engine detail represented by Kerr Collection",
          objectPosition: "50% 50%",
          copy: [
            "From initial consultation and commissioning through to aftersales care, technical servicing and long-term ownership management, Kerr Collection acts as the trusted local partner for Gunther Werks clients.",
            "The result is direct access to new commissions, bespoke specifications and the full ownership journey for Australian collectors seeking something truly exceptional.",
          ],
        },
      ],
      gallery: [
        kerrHero,
        kerrKoenigseggOne,
        kerrKoenigseggTwo,
        kerrGuntherOne,
        kerrGuntherEngine,
      ],
      website: "www.kerrcollection.com.au",
      finalCta: "Begin a conversation",
    },
  },
  {
    slug: "the-automotive-advisory-group",
    name: "The Automotive Advisory Group",
    shortName: "TAAG",
    category: "Bottom middle tile",
    intro: "Coming soon.",
    paragraphs: ["Coming soon."],
    highlights: ["Coming soon"],
    tile: {
      image: null,
      alt: "TAAG dark tile with centred logo",
    },
    hero: {
      image: null,
      alt: "TAAG hero panel",
    },
    mark: {
      type: "image",
      src: taagWideLogo,
      alt: "TAAG logo",
      homeClassName: "w-[min(84%,22rem)] sm:w-[min(78%,28rem)]",
      pageClassName: "w-[min(88%,24rem)] sm:w-[min(80%,30rem)]",
      compactClassName: "w-36",
    },
    gallery: [
      {
        type: "logo",
        src: taagGlowLogo,
        alt: "TAAG illuminated logo",
        imageClassName: "w-[min(80%,18rem)] sm:w-[min(72%,22rem)]",
        className: "lg:row-span-2 min-h-[24rem] lg:min-h-[42rem]",
      },
      {
        type: "quote",
        eyebrow: "TAAG",
        title: "Coming soon.",
        copy: "Product information will be added here.",
        className: "min-h-[16rem] lg:min-h-[20rem]",
      },
      {
        type: "logo",
        src: taagWideLogo,
        alt: "TAAG black wordmark panel",
        imageClassName: "w-[min(88%,22rem)] sm:w-[min(80%,28rem)]",
        className: "min-h-[16rem] lg:min-h-[20rem]",
      },
    ],
    enquiryNote: "Product information coming soon.",
  },
];

export function getBrandBySlug(slug) {
  return brands.find((brand) => brand.slug === slug);
}
