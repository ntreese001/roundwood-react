const headerLinks = [
  { id: 1, itemLink: "/about/", itemText: "About" },
  { id: 2, itemLink: "/designer-collections/", itemText: "Designer Collections" },
  { id: 3, itemLink: "/gallery-series/", itemText: "Gallery Series" },
  { id: 4, itemLink: "/custom-installations/", itemText: "Custom Installations" },
  { id: 5, itemLink: "/contact/", itemText: "Contact" },
  { id: 6, itemLink: "https://roundwood.myshopify.com", itemText: "Shop", target: "_blank" },
]
const footerMenu = [
  { id: 1, link: "/", text: "HOME" },
  { id: 2, link: "/about/", text: "ABOUT" },
  { id: 3, link: "/contact/", text: "CONTACT" },
  { id: 4, link: "http://roundwood.myshopify.com/", target: "_blank", text: "SHOP" },
]
const footerMenu2 = [
  { id: 1, link: "/designer-collections/", text: "DESIGNER COLLECTIONS" },
  { id: 2, link: "/gallery-series/", text: "GALLERY SERIES" },
  { id: 3, link: "/custom-installations/", text: "CUSTOM INSTALLATIONS" },
  { id: 4, link: "/trade-sales/", text: "TRADE SALES" },
]
const about = [
  {
    id: 1,
    title: "HISTORY",
    text: "Born and raised in Homer, AK, Andy Cline spent his most influential and formative years in an environment where nature clearly served as one’s teacher, guide, and wondrously powerful provider. The wilderness was a constant adventure and inspiring force for Cline, teaching him the profound lesson that all of life’s necessities, both tangible and intangible, can be derived directly from the natural world. This lesson became the foundation of Cline’s passions and a catalyst for his creative work.",
    img: "cline_child"
  },
  {
    id: 2,
    title: "MASTERY",
    text: "With over 40,000 hours dedicated to learning and developing his craft, Cline has achieved mastery status in his work. Thru this expertise comes true passion and commitment—a relentless drive to continue pushing forward in the journey of modern furniture artistry.",
    img: "cline_mastery",
    quote: "10,000 hours of practice is required to achieve the level of mastery associated with being a world-class expert.",
    quoteSpan: "- Malcolm Gladwell"
  },
  {
    id: 3,
    title: "MISSION",
    text: "With a mission to honor the inherent vibrancy and abundance of nature, Cline works to bring the voice of the wilderness directly into the lives and “living” rooms of humanity, in an authentic renaissance of environmental reverence. He tames, tempers, and treats his medium as little as possible, while designing in the interest of comfort, visual balance, and structural integrity.",
    img: "cline_mission"
  },
]
const homeContentColumns = [
  {
    id: 1,
    title: "Designer Collections",
    text: "Crafted as a refined alternative to our custom work, these furniture collections embrace modern design elements and high-quality materials. Each piece in these collections is signed and numbered by the artist and is available for purchase in our online shop.",
    itemLink: "/designer-collections/",
    itemText: "browse collections",
    image: "/img/vibrato_coffee_black.jpg"
  },
  {
    id: 2,
    title: "Gallery Series",
    text: "For over 15 years, Roundwood’s founder, ",
    text2: ", has been creating functional art in the form of sculptural furniture. Each piece in his Gallery Series is a one-of-a-kind masterpiece, meticulously handcrafted to last for generations.",
    itemLink: "/gallery-series/",
    itemText: "some of our favorites",
    image: "/img/gallery/organic/kamleot_top_bright.jpg",
    link: "/about/",
    linkText: "Andy Cline"
  },
  {
    id: 3,
    title: "Custom Installations",
    text: "Thanks to our inspired patrons, we’ve had the privilege to work on many large scale projects that have transformed ordinary spaces into exciting artistic experiences. These works often include several sculptural furnishings that come together to create a truly inspiring space punctuated with functional art.",
    itemLink: "/custom-installations/",
    itemText: "explore our projects",
    image: "/img/installations/squaw/uncorked_sv_03.jpg"
  },
]
const designerCollectionsDescrioptions = [
  {
    id: 1,
    title: "WHY COLLECTIONS?",
    text: "Our designer collections provide a refined opportunity to bring heirloom art pieces into your modern living environment. These collections are designed and crafted with the same level of care and artistry as our custom work."
  },
  {
    id: 2,
    title: "TRADE SALES",
    text: "We would like to offer a special discount to ",
    textSpan: "Interior Designers ",
    text2: "who purchase items from our Designer Collections.",
    linkText: "trade sales sign-up",
    link: "/trade-sales/"
  },
  {
    id: 3,
    title: "BESPOKE TAILORING",
    text: "Designed with ease of customization and multiple sizing applications in mind, bespoke tailoring is available for items in our Designer Collections. Please contact us for specific details."
  },
]
const collections = [
  {
    id: 1,
    title: "Reborn",
    subtitle: "collection",
    text: "Inspired by the cyclical evolution of the natural and man-made world, this furniture collection is created with reclaimed wood from the Lake Tahoe basin and surrounding region.",
    collectionItems: [
      {
        id: 1,
        link: "http://roundwood.myshopify.com/products/timewerx-headboard",
        src: "/img/collections/reborn/timewerx_headboard.jpg",
        name: "Timewerx Headboard"
      },
      {
        id: 2,
        link: "http://roundwood.myshopify.com/products/timewerx-side-table-nightstand",
        src: "/img/collections/reborn/timewerx_nightstand.jpg",
        name: "Timewerx Nightstand"
      },
      {
        id: 3,
        link: "http://roundwood.myshopify.com/products/lakewood-dining-table",
        src: "/img/collections/reborn/lakewood_dining_table.jpg",
        name: "Lakewood Dining Table"
      },
      {
        id: 4,
        link: "http://roundwood.myshopify.com/products/lakewood-coffee-table",
        src: "/img/collections/reborn/lakewood_coffee_table.jpg",
        name: "Lakewood Coffee Table"
      },
      {
        id: 5,
        link: "http://roundwood.myshopify.com/products/reborn-lamp",
        src: "/img/collections/reborn/gustav_lamp.jpg",
        name: "Gustav Lamp"
      },
    ]
  },
  {
    id: 2,
    title: "Harmony",
    subtitle: "collection",
    text: "This minimalist collection showcases the vibrant luster of exotic hardwoods. With simple, yet elegant forms, these furniture pieces allow the natural beauty of the wood grain to sing out.",
    collectionItems: [
      {
        id: 1,
        link: "http://roundwood.myshopify.com/products/staccato-headboard",
        src: "/img/collections/harmony/staccato_headboard.jpg",
        name: "Staccato Headboard"
      },
      {
        id: 2,
        link: "http://roundwood.myshopify.com/products/staccato-side-table-nightstand",
        src: "/img/collections/harmony/staccato_nightstand.jpg",
        name: "Staccato Nightstand"
      },
      {
        id: 3,
        link: "http://roundwood.myshopify.com/products/vibrato-dining-table",
        src: "/img/collections/harmony/vibrato_dining_table.jpg",
        name: "Vibrato Dining Table"
      },
      {
        id: 4,
        link: "http://roundwood.myshopify.com/products/vibrato-coffee-table",
        src: "/img/collections/harmony/vibrato_coffee_table.jpg",
        name: "Vibrato Coffee Table"
      },
      {
        id: 5,
        link: "http://roundwood.myshopify.com/products/reborn-lamp",
        src: "/img/collections/harmony/ivan_lamp.jpg",
        name: "Ivan Lam"
      },
    ]
  },
]

//lightbox
const galleryCategories = ["Danish", "Modern", "Organic", "Asian"]
const galleries = [
  {
    id: 1,
    src: "/img/gallery/danish/chi_gong.jpg",
    alt: "Chi Gong Table",
    title: "Chocolate Chi Gong – Coffee Table, 2015",
    text: "Chocolate Chi Gong",
    category: "Danish"
  },
  {
    id: 2,
    src: "/img/gallery/danish/viking_ship_cutout.jpg",
    alt: "Viking Ship Table",
    title: "Viking Ship – Dining Table, 2016",
    text: "Viking Ship",
    category: "Danish"
  },
  {
    id: 3,
    src: "/img/gallery/modern/blonde_coffee.jpg",
    alt: "Blonde Coffee Table",
    title: "A Coffee Blonde – Coffee Table, 2014",
    text: "A Coffee Blonde",
    category: "Modern"
  },
  {
    id: 4,
    src: "/img/gallery/modern/canarywood_table.jpg",
    alt: "Canarywood Table",
    title: "Canarywood - Dining Table, 2014",
    text: "Canarywood",
    category: "Modern"
  },
  {
    id: 5,
    src: "/img/gallery/modern/meteor_katalox.jpg",
    alt: "Meteor Katalox",
    title: "Meteor Katalox Dining Table – Collaboration with Striker Forge, 2015",
    text: "Meteor Katalox",
    category: "Modern"
  },
  {
    id: 6,
    src: "/img/gallery/modern/claro_dandelion.jpg",
    alt: "Claro Dandelion",
    title: "Claro Dandelion - Dining Table, 2007",
    text: "Claro Dandelion",
    category: "Modern"
  },
  {
    id: 7,
    src: "/img/gallery/modern/steel_lily_cutout.jpg",
    alt: "Steel Lily",
    title: "Steel Lily Bistro Table - Collaboration with Striker Forge, 2015",
    text: "Steel Lily",
    category: "Modern"
  },
  {
    id: 8,
    src: "/img/gallery/organic/coco_pele.jpg",
    alt: "Coco Pele Rocking Chair",
    title: "Coco Pele - Rocking Chair, 2003",
    text: "Coco Pele",
    category: "Organic"
  },
  {
    id: 9,
    src: "/img/gallery/organic/rockers_square.jpg",
    alt: "Rockers",
    title: "Mary of Lauglin &amp; Throne of Lauglin – Rocking Chairs, 2003",
    textSpan: "Mary of Lauglin",
    textSpan2: "Throne of Lauglin",
    category: "Organic"
  },
  {
    id: 10,
    src: "/img/gallery/organic/adirondack_mirror_square.jpg",
    alt: "Adirondac Reflection Mirror",
    title: "Adirondac Reflection - Mirror, 2002",
    text: "Adirondac Mirror",
    category: "Organic"
  },
  {
    id: 11,
    src: "/img/gallery/organic/adirondack_tv_stand_square.jpg",
    alt: "Adirondac TV Stand",
    title: "Adirondac Stand - TV Stand, 2002",
    text: "Adirondac Stand",
    category: "Organic"
  },
  {
    id: 12,
    src: "/img/gallery/organic/kamelot_king_square.jpg",
    alt: "Kamelot King Bed",
    title: "Kamelot King - Bed, 2003",
    text: "Kamelot King",
    category: "Organic"
  },
  {
    id: 13,
    src: "/img/gallery/organic/3went.jpg",
    alt: "Three Went Table",
    title: "3 Went - Console Table, 2003",
    text: "3 Went",
    category: "Organic"
  },
  {
    id: 14,
    src: "/img/gallery/organic/rollswood_jarvie-copy.jpg",
    alt: "Rollswood Jarvie Desk",
    title: "Rollswood Jarvie - Desk, 2000",
    text: "Rollswood Jarvie",
    category: "Organic"
  },
  {
    id: 15,
    src: "/img/gallery/organic/rollswood_chair.jpg",
    alt: "Rollswood Chair",
    title: "Rollswood Chair, 2000",
    text: "Rollswood Chair",
    category: "Organic"
  },
  {
    id: 16,
    src: "/img/gallery/organic/basilica_square.jpg",
    alt: "Basilica Table",
    title: "Basilica - Coffee Table, 2005",
    text: "Basilica",
    category: "Organic"
  },
  {
    id: 17,
    src: "/img/gallery/organic/buttercup.jpg",
    alt: "Buttercup Table",
    title: "Buttercup - Bistro Table, 2003",
    text: "Buttercup",
    category: "Organic"
  },
  {
    id: 18,
    src: "/img/gallery/organic/mandarin_tortuga_square.jpg",
    alt: "Mandarin Tortuga Table",
    title: "Mandarin Tortuga - Coffee Table, 2008",
    text: "Mandarin Tortuga",
    category: "Organic"
  },
  {
    id: 19,
    src: "/img/gallery/organic/dreamcatcher_cutout.jpg",
    alt: "Dreamcatcher Headboard",
    title: "Dreamcatcher - Bed, 2001",
    text: "Dreamcatcher",
    category: "Organic"
  },
  {
    id: 20,
    src: "/img/gallery/organic/temple_of_traustar.jpg",
    alt: "Temple of Traustur Table",
    title: "Temple of Traustar - Console Table, 2015",
    text: "Temple of Traustar",
    category: "Organic"
  },
  {
    id: 21,
    src: "/img/gallery/organic/spun_root_blossom.jpg",
    alt: "Spun Root Blossom table",
    title: "Spun Root Blossom - Standing Desk, 2012",
    text: "Spun Root Blossom",
    category: "Organic"
  },
  {
    id: 22,
    src: "/img/gallery/asian/alpina_cutout.jpg",
    alt: "Alpina Rocker Chair",
    title: "Alpina-esque - Rocking Chair, 2007",
    text: "Alpina-esque",
    category: "Asian"
  },
  {
    id: 23,
    src: "/img/gallery/asian/mantis_cutout.jpg",
    alt: "Mantis Desk",
    title: "Mantis - Desk, 2006",
    text: "Asta Beau",
    category: "Asian"
  },
  {
    id: 24,
    src: "/img/gallery/asian/fugu_niechie_cutout.jpg",
    alt: "Fugu Niechie Table",
    title: "Fugu Niechie - Console Table, 2005",
    text: "Fugu Niechie",
    category: "Asian"
  },
  {
    id: 25,
    src: "/img/gallery/asian/eye_chi_cutout.jpg",
    alt: "Eye Ching Table",
    title: "Eye Ching - Coffee Table, 2004",
    text: "Eye Ching",
    category: "Asian"
  },
  {
    id: 26,
    src: "/img/gallery/asian/smeagols_time_capsule_cutout.jpg",
    alt: "Smeagol's Time Capsule Desk",
    title: "Smeagol's Time Capsule – Collaboration with Devon Price, 2014",
    text: "Smeagol's Time Capsule",
    category: "Asian"
  },
  {
    id: 27,
    src: "/img/gallery/asian/asta_beau_cutout.jpg",
    alt: "Asta Beau Table",
    title: "Asta Beau – Console Table, 2006",
    text: "Asta Beau",
    category: "Asian"
  },
  {
    id: 28,
    src: "/img/gallery/asian/eldorado_tempest.jpg",
    alt: "El Dorado Tempest",
    title: "El Dorado Tempest – Coffee Table, 2013",
    text: "El Dorado Tempest",
    category: "Asian"
  },
  {
    id: 29,
    src: "/img/gallery/asian/pico_de_chico_cutout.jpg",
    alt: "Pico de Chico Table",
    title: "Pico de Chico - Console Table, 2014",
    text: "Pico de Chico",
    category: "Asian"
  }
]
const installationCategories = [
  { id: 1, title: "Uncorked Tahoe City Logo", src: "/img/installations/tahoe/uncorked_tc_logo_300.jpg" },
  { id: 2, title: "Uncorked Squaw Valley Logo", src: "/img/installations/squaw/uncorked_sv_logo_300.jpg" },
  { id: 3, title: "Coffee Bar Logo", src: "/img/installations/coffeeBar/coffeebar_logo_300.jpg" },
  { id: 4, title: "Transformations Salon Logo", src: "/img/installations/transformations/transformations_logo_300.jpg" },
  { id: 5, title: "Custom Patio Bar" }
]
const installations = [
  {
    id: 1,
    src: "/img/installations/tahoe/uncorked_tc_a.jpg",
    alt: "Uncorked Tahoe City 1",
    title: "Uncorked Tahoe City",
    text: "Uncorked Tahoe City",
    category: "Uncorked Tahoe City Logo"
  },
  {
    id: 2,
    src: "/img/installations/tahoe/uncorked_tc_b.jpg",
    alt: "Uncorked Tahoe City 2",
    title: "Uncorked Tahoe City",
    text: "Uncorked Tahoe City",
    category: "Uncorked Tahoe City Logo"
  },
  {
    id: 3,
    src: "/img/installations/tahoe/uncorked_tc_c.jpg",
    alt: "Uncorked Tahoe City 3",
    title: "Uncorked Tahoe City",
    text: "Uncorked Tahoe City",
    category: "Uncorked Tahoe City Logo"
  },
  {
    id: 4,
    src: "/img/installations/tahoe/uncorked_tc_d.jpg",
    alt: "Uncorked Tahoe City 4",
    title: "Uncorked Tahoe City",
    text: "Uncorked Tahoe City",
    category: "Uncorked Tahoe City Logo"
  },
  {
    id: 5,
    src: "/img/installations/tahoe/uncorked_tc_e.jpg",
    alt: "Uncorked Tahoe City 5",
    title: "Uncorked Tahoe City",
    text: "Uncorked Tahoe City",
    category: "Uncorked Tahoe City Logo"
  },
  {
    id: 6,
    src: "/img/installations/squaw/uncorked_sv_d.jpg",
    alt: "Uncorked Squaw Valley 4",
    title: "Uncorked Squaw Valley",
    text: "Uncorked Squaw Valley",
    category: "Uncorked Squaw Valley Logo"
  },
  {
    id: 7,
    src: "/img/installations/squaw/uncorked_sv_f.jpg",
    alt: "Uncorked Squaw Valley 6",
    title: "Uncorked Squaw Valley",
    text: "Uncorked Squaw Valley",
    category: "Uncorked Squaw Valley Logo"
  },
  {
    id: 8,
    src: "/img/installations/squaw/uncorked_sv_a.jpg",
    alt: "Uncorked Squaw Valley 1",
    title: "Uncorked Squaw Valley",
    text: "Uncorked Squaw Valley",
    category: "Uncorked Squaw Valley Logo"
  },
  {
    id: 9,
    src: "/img/installations/squaw/uncorked_sv_e.jpg",
    alt: "Uncorked Squaw Valley 5",
    title: "Uncorked Squaw Valley",
    text: "Uncorked Squaw Valley",
    category: "Uncorked Squaw Valley Logo"
  },
  {
    id: 10,
    src: "/img/installations/coffeeBar/coffeebar_truckee01.jpg",
    alt: "Coffee Bar Truckee",
    title: "Coffee Bar Truckee",
    text: "Coffee Bar Truckee",
    category: "Coffee Bar Logo"
  },
  {
    id: 11,
    src: "/img/installations/coffeeBar/coffeebar_truckee02.jpg",
    alt: "Coffee Bar Truckee",
    title: "Coffee Bar Truckee",
    text: "Coffee Bar Truckee",
    category: "Coffee Bar Logo"
  },
  {
    id: 12,
    src: "/img/installations/coffeeBar/coffeebar_truckee03.jpg",
    alt: "Coffee Bar Truckee",
    title: "Coffee Bar Truckee",
    text: "Coffee Bar Truckee",
    category: "Coffee Bar Logo"
  },
  {
    id: 13,
    src: "/img/installations/coffeeBar/coffeebar_truckee04.jpg",
    alt: "Coffee Bar Truckee",
    title: "Coffee Bar Truckee",
    text: "Coffee Bar Truckee",
    category: "Coffee Bar Logo"
  },
  {
    id: 14,
    src: "/img/installations/coffeeBar/coffeebar_truckee05.jpg",
    alt: "Coffee Bar Truckee",
    title: "Coffee Bar Truckee",
    text: "Coffee Bar Truckee",
    category: "Coffee Bar Logo"
  },
  {
    id: 15,
    src: "/img/installations/transformations/transformations_1.jpg",
    alt: "Transformations Salon",
    title: "Transformations Salon",
    text: "Transformations Salon",
    category: "Transformations Salon Logo"
  },
  {
    id: 16,
    src: "/img/installations/transformations/transformations_2.jpg",
    alt: "Transformations Salon",
    title: "Transformations Salon",
    text: "Transformations Salon",
    category: "Transformations Salon Logo"
  },
  {
    id: 17,
    src: "/img/installations/transformations/transformations_3.jpg",
    alt: "Transformations Salon",
    title: "Transformations Salon",
    text: "Transformations Salon",
    category: "Transformations Salon Logo"
  },
  {
    id: 18,
    src: "/img/installations/transformations/transformations_4.jpg",
    alt: "Transformations Salon",
    title: "Transformations Salon",
    text: "Transformations Salon",
    category: "Transformations Salon Logo"
  },
  {
    id: 19,
    src: "/img/installations/transformations/transformations_5.jpg",
    alt: "Transformations Salon",
    title: "Transformations Salon",
    text: "Transformations Salon",
    category: "Transformations Salon Logo"
  },
  {
    id: 20,
    src: "/img/installations/customPatio/ferrari_sparkman_a.jpg",
    alt: "Custom Patio Bar",
    title: "Custom Patio Bar",
    text: "Custom Patio Bar",
    category: "Custom Patio Bar"
  },
  {
    id: 21,
    src: "/img/installations/customPatio/ferrari_sparkman_d.jpg",
    alt: "Custom Patio Bar",
    title: "Custom Patio Bar",
    text: "Custom Patio Bar",
    category: "Custom Patio Bar"
  },
  {
    id: 22,
    src: "/img/installations/customPatio/ferrari_sparkman_e.jpg",
    alt: "Custom Patio Bar",
    title: "Custom Patio Bar",
    text: "Custom Patio Bar",
    category: "Custom Patio Bar"
  },
  {
    id: 23,
    src: "/img/installations/customPatio/ferrari_sparkman_g.jpg",
    alt: "Custom Patio Bar",
    title: "Custom Patio Bar",
    text: "Custom Patio Bar",
    category: "Custom Patio Bar"
  },
  {
    id: 24,
    src: "/img/installations/customPatio/ferrari_sparkman_j.jpg",
    alt: "Custom Patio Bar",
    title: "Custom Patio Bar",
    text: "Custom Patio Bar",
    category: "Custom Patio Bar"
  }
]

export {
  about,
  collections,
  designerCollectionsDescrioptions,
  headerLinks,
  installations,
  installationCategories,
  galleries,
  galleryCategories,
  homeContentColumns,
  footerMenu,
  footerMenu2,
}