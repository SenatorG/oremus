export type PrayerStep = {
  text: string;
  response?: string;
};

export type Prayer = {
  id: string;
  title: string;
  latin?: string;
  kind: "hymn" | "canticle" | "doxology" | "litany" | "prayer" | "practice";
  steps: PrayerStep[];
};

export const PRAYERS: Record<string, Prayer> = {
  veniCreator: {
    id: "veniCreator",
    title: "Veni Creator",
    latin: "Veni Creator Spiritus",
    kind: "hymn",
    steps: [
      {
        text: "Come, Holy Spirit, Creator blest, and in our souls take up Thy rest; come with Thy grace and heavenly aid to fill the hearts which Thou hast made.",
      },
      {
        text: "O Comforter, to Thee we cry, O heavenly gift of God Most High, O fount of life and fire of love, and sweet anointing from above.",
      },
      {
        text: "Thou in Thy sevenfold gifts art known; Thou, finger of God's hand we own; Thou, promise of the Father, Thou Who dost the tongue with power imbue.",
      },
      {
        text: "Kindle our sense from above, and make our hearts o'erflow with love; with patience firm and virtue high the weakness of our flesh supply.",
      },
      {
        text: "Far from us drive the foe we dread, and grant us Thy peace instead; so shall we not, with Thee for guide, turn from the path of life aside.",
      },
      {
        text: "Oh, may Thy grace on us bestow the Father and the Son to know; and Thee, through endless times confessed, of both the eternal Spirit blest.",
      },
      {
        text: "Now to the Father and the Son, Who rose from death, be glory given, with Thee, O Holy Comforter, henceforth by all in earth and heaven. Amen.",
      },
    ],
  },
  aveMarisStella: {
    id: "aveMarisStella",
    title: "Ave Maris Stella",
    latin: "Ave Maris Stella",
    kind: "hymn",
    steps: [
      { text: "Hail, O Star of the ocean, God's own Mother blest, ever sinless Virgin, gate of heavenly rest." },
      { text: "Taking that sweet Ave which from Gabriel came, peace confirm within us, changing Eve's name." },
      { text: "Break the sinners' fetters, make our blindness day; chase all evils from us, for all blessings pray." },
      { text: "Show thyself a Mother; may the Word divine, born for us thine Infant, hear our prayers through thine." },
      { text: "Virgin all excelling, mildest of the mild, free from guilt preserve us, meek and undefiled." },
      { text: "Keep our life all spotless, make our way secure, till we find in Jesus joy for evermore." },
      { text: "Praise to God the Father, honor to the Son, in the Holy Spirit be the glory one. Amen." },
    ],
  },
  magnificat: {
    id: "magnificat",
    title: "The Magnificat",
    latin: "Magnificat",
    kind: "canticle",
    steps: [
      { text: "My soul doth magnify the Lord. And my spirit hath rejoiced in God my Saviour." },
      { text: "Because He hath regarded the humility of His handmaid; for behold, from henceforth all generations shall call me blessed." },
      { text: "Because He that is mighty hath done great things to me; and holy is His name." },
      { text: "And His mercy is from generation unto generations, to them that fear Him." },
      { text: "He hath showed might in His arm; He hath scattered the proud in the conceit of their heart." },
      { text: "He hath put down the mighty from their seat, and hath exalted the humble." },
      { text: "He hath filled the hungry with good things; and the rich He hath sent empty away." },
      { text: "He hath received Israel His servant, being mindful of His mercy. As He spoke to our fathers, to Abraham and to his seed for ever. Glory be to the Father…" },
    ],
  },
  gloryBe: {
    id: "gloryBe",
    title: "Glory Be",
    kind: "doxology",
    steps: [
      {
        text: "Glory be to the Father, and to the Son, and to the Holy Ghost. As it was in the beginning, is now, and ever shall be, world without end. Amen.",
      },
    ],
  },
  litanyHolyGhost: {
    id: "litanyHolyGhost",
    title: "Litany of the Holy Ghost",
    kind: "litany",
    steps: [
      { text: "Lord, have mercy on us.", response: "Christ, have mercy on us." },
      { text: "Lord, have mercy on us. Father all powerful,", response: "have mercy on us." },
      { text: "Jesus, Eternal Son of the Father, Redeemer of the world,", response: "save us." },
      { text: "Spirit of the Father and the Son, boundless life of both,", response: "sanctify us." },
      { text: "Holy Trinity,", response: "hear us." },
      { text: "Holy Ghost, Who proceedest from the Father and the Son,", response: "enter our hearts." },
      { text: "Holy Ghost, Who art equal to the Father and the Son,", response: "enter our hearts." },
      { text: "Promise of God the Father,", response: "have mercy on us." },
      { text: "Ray of heavenly light,", response: "have mercy on us." },
      { text: "Author of all good,", response: "have mercy on us." },
      { text: "Source of heavenly water,", response: "have mercy on us." },
      { text: "Consuming fire,", response: "have mercy on us." },
      { text: "Ardent charity,", response: "have mercy on us." },
      { text: "Spiritual unction,", response: "have mercy on us." },
      { text: "Spirit of love and truth,", response: "have mercy on us." },
      { text: "Spirit of wisdom and understanding,", response: "have mercy on us." },
      { text: "Spirit of counsel and fortitude,", response: "have mercy on us." },
      { text: "Spirit of knowledge and piety,", response: "have mercy on us." },
      { text: "Spirit of the fear of the Lord,", response: "have mercy on us." },
      { text: "Spirit of grace and prayer,", response: "have mercy on us." },
      { text: "Spirit of peace and meekness,", response: "have mercy on us." },
      { text: "Spirit of modesty and innocence,", response: "have mercy on us." },
      { text: "Holy Ghost, the Comforter,", response: "have mercy on us." },
      { text: "Holy Ghost, the Sanctifier,", response: "have mercy on us." },
      { text: "Holy Ghost, Who governest the Church,", response: "have mercy on us." },
      { text: "Gift of God, the Most High,", response: "have mercy on us." },
      { text: "Spirit Who fillest the universe,", response: "have mercy on us." },
      { text: "Spirit of the adoption of the children of God,", response: "have mercy on us." },
      { text: "Holy Ghost, inspire us with horror of sin." },
      { text: "Holy Ghost, come and renew the face of the earth." },
      { text: "Holy Ghost, shed Thy light in our souls." },
      { text: "Holy Ghost, engrave Thy law in our hearts." },
      { text: "Holy Ghost, inflame us with the flame of Thy love." },
      { text: "Holy Ghost, open to us the treasures of Thy graces." },
      { text: "Holy Ghost, teach us to pray well." },
      { text: "Holy Ghost, lead us in the way of salvation." },
      { text: "Holy Ghost, grant us the only necessary knowledge." },
      { text: "Holy Ghost, make us persevere in justice." },
      { text: "Holy Ghost, be Thou our everlasting reward." },
      { text: "Lamb of God, Who takest away the sins of the world,", response: "send us Thy Holy Ghost." },
      { text: "Lamb of God, Who takest away the sins of the world,", response: "pour down into our souls the gifts of the Holy Ghost." },
      { text: "Lamb of God, Who takest away the sins of the world,", response: "grant us the Spirit of wisdom and piety." },
      { text: "Come, Holy Ghost! Fill the hearts of Thy faithful,", response: "and enkindle in them the fire of Thy love." },
      {
        text: "Let us pray. Grant, O merciful Father, that Thy Divine Spirit may enlighten, inflame and purify us, that He may penetrate us with His heavenly dew and make us fruitful in good works, through Our Lord Jesus Christ, Thy Son, Who with Thee, in the unity of the same Spirit, liveth and reigneth forever and ever. Amen.",
      },
    ],
  },
  litanyLoreto: {
    id: "litanyLoreto",
    title: "Litany of Loreto",
    latin: "Litany of the Blessed Virgin Mary",
    kind: "litany",
    steps: [
      { text: "Lord, have mercy on us.", response: "Christ, have mercy on us." },
      { text: "Lord, have mercy on us. Christ, hear us.", response: "Christ, graciously hear us." },
      { text: "God the Father of Heaven,", response: "have mercy on us." },
      { text: "God the Son, Redeemer of the world,", response: "have mercy on us." },
      { text: "God the Holy Ghost,", response: "have mercy on us." },
      { text: "Holy Trinity, one God,", response: "have mercy on us." },
      { text: "Holy Mary,", response: "pray for us." },
      { text: "Holy Mother of God,", response: "pray for us." },
      { text: "Holy Virgin of virgins,", response: "pray for us." },
      { text: "Mother of Christ,", response: "pray for us." },
      { text: "Mother of the Church,", response: "pray for us." },
      { text: "Mother of divine grace,", response: "pray for us." },
      { text: "Mother most pure,", response: "pray for us." },
      { text: "Mother most chaste,", response: "pray for us." },
      { text: "Mother inviolate,", response: "pray for us." },
      { text: "Mother undefiled,", response: "pray for us." },
      { text: "Mother most amiable,", response: "pray for us." },
      { text: "Mother most admirable,", response: "pray for us." },
      { text: "Mother of good counsel,", response: "pray for us." },
      { text: "Mother of our Creator,", response: "pray for us." },
      { text: "Mother of our Saviour,", response: "pray for us." },
      { text: "Virgin most prudent,", response: "pray for us." },
      { text: "Virgin most venerable,", response: "pray for us." },
      { text: "Virgin most renowned,", response: "pray for us." },
      { text: "Virgin most powerful,", response: "pray for us." },
      { text: "Virgin most merciful,", response: "pray for us." },
      { text: "Virgin most faithful,", response: "pray for us." },
      { text: "Mirror of justice,", response: "pray for us." },
      { text: "Seat of wisdom,", response: "pray for us." },
      { text: "Cause of our joy,", response: "pray for us." },
      { text: "Spiritual vessel,", response: "pray for us." },
      { text: "Vessel of honor,", response: "pray for us." },
      { text: "Singular vessel of devotion,", response: "pray for us." },
      { text: "Mystical rose,", response: "pray for us." },
      { text: "Tower of David,", response: "pray for us." },
      { text: "Tower of ivory,", response: "pray for us." },
      { text: "House of gold,", response: "pray for us." },
      { text: "Ark of the covenant,", response: "pray for us." },
      { text: "Gate of Heaven,", response: "pray for us." },
      { text: "Morning star,", response: "pray for us." },
      { text: "Health of the sick,", response: "pray for us." },
      { text: "Refuge of sinners,", response: "pray for us." },
      { text: "Comforter of the afflicted,", response: "pray for us." },
      { text: "Help of Christians,", response: "pray for us." },
      { text: "Queen of Angels,", response: "pray for us." },
      { text: "Queen of Patriarchs,", response: "pray for us." },
      { text: "Queen of Prophets,", response: "pray for us." },
      { text: "Queen of Apostles,", response: "pray for us." },
      { text: "Queen of Martyrs,", response: "pray for us." },
      { text: "Queen of Confessors,", response: "pray for us." },
      { text: "Queen of Virgins,", response: "pray for us." },
      { text: "Queen of all Saints,", response: "pray for us." },
      { text: "Queen conceived without original sin,", response: "pray for us." },
      { text: "Queen assumed into Heaven,", response: "pray for us." },
      { text: "Queen of the most holy Rosary,", response: "pray for us." },
      { text: "Queen of families,", response: "pray for us." },
      { text: "Queen of peace,", response: "pray for us." },
      { text: "Lamb of God, Who takest away the sins of the world,", response: "spare us, O Lord." },
      { text: "Lamb of God, Who takest away the sins of the world,", response: "graciously hear us, O Lord." },
      { text: "Lamb of God, Who takest away the sins of the world,", response: "have mercy on us." },
      { text: "Pray for us, O holy Mother of God,", response: "that we may be made worthy of the promises of Christ." },
      {
        text: "Let us pray. Grant, we beseech Thee, O Lord God, that we Thy servants may enjoy perpetual health of mind and body, and by the glorious intercession of the Blessed Mary, ever Virgin, be delivered from present sorrow and enjoy eternal happiness. Through Christ our Lord. Amen.",
      },
    ],
  },
  litanyHolyName: {
    id: "litanyHolyName",
    title: "Litany of the Holy Name of Jesus",
    kind: "litany",
    steps: [
      { text: "Lord, have mercy on us.", response: "Christ, have mercy on us." },
      { text: "Lord, have mercy on us. Jesus, hear us.", response: "Jesus, graciously hear us." },
      { text: "God the Father of Heaven,", response: "have mercy on us." },
      { text: "God the Son, Redeemer of the world,", response: "have mercy on us." },
      { text: "God the Holy Ghost,", response: "have mercy on us." },
      { text: "Holy Trinity, one God,", response: "have mercy on us." },
      { text: "Jesus, Son of the living God,", response: "have mercy on us." },
      { text: "Jesus, splendor of the Father,", response: "have mercy on us." },
      { text: "Jesus, brightness of eternal light,", response: "have mercy on us." },
      { text: "Jesus, King of glory,", response: "have mercy on us." },
      { text: "Jesus, sun of justice,", response: "have mercy on us." },
      { text: "Jesus, Son of the Virgin Mary,", response: "have mercy on us." },
      { text: "Jesus, most amiable,", response: "have mercy on us." },
      { text: "Jesus, most admirable,", response: "have mercy on us." },
      { text: "Jesus, mighty God,", response: "have mercy on us." },
      { text: "Jesus, Father of the world to come,", response: "have mercy on us." },
      { text: "Jesus, angel of great counsel,", response: "have mercy on us." },
      { text: "Jesus, most powerful,", response: "have mercy on us." },
      { text: "Jesus, most patient,", response: "have mercy on us." },
      { text: "Jesus, most obedient,", response: "have mercy on us." },
      { text: "Jesus, meek and humble of heart,", response: "have mercy on us." },
      { text: "Jesus, lover of chastity,", response: "have mercy on us." },
      { text: "Jesus, lover of us,", response: "have mercy on us." },
      { text: "Jesus, God of peace,", response: "have mercy on us." },
      { text: "Jesus, author of life,", response: "have mercy on us." },
      { text: "Jesus, example of virtues,", response: "have mercy on us." },
      { text: "Jesus, zealous lover of souls,", response: "have mercy on us." },
      { text: "Jesus, our God,", response: "have mercy on us." },
      { text: "Jesus, our refuge,", response: "have mercy on us." },
      { text: "Jesus, father of the poor,", response: "have mercy on us." },
      { text: "Jesus, treasure of the faithful,", response: "have mercy on us." },
      { text: "Jesus, good Shepherd,", response: "have mercy on us." },
      { text: "Jesus, true light,", response: "have mercy on us." },
      { text: "Jesus, eternal wisdom,", response: "have mercy on us." },
      { text: "Jesus, infinite goodness,", response: "have mercy on us." },
      { text: "Jesus, our way and our life,", response: "have mercy on us." },
      { text: "Jesus, joy of Angels,", response: "have mercy on us." },
      { text: "Jesus, King of Patriarchs,", response: "have mercy on us." },
      { text: "Jesus, Master of the Apostles,", response: "have mercy on us." },
      { text: "Jesus, Teacher of the Evangelists,", response: "have mercy on us." },
      { text: "Jesus, strength of Martyrs,", response: "have mercy on us." },
      { text: "Jesus, light of Confessors,", response: "have mercy on us." },
      { text: "Jesus, purity of Virgins,", response: "have mercy on us." },
      { text: "Jesus, crown of all Saints,", response: "have mercy on us." },
      { text: "Be merciful,", response: "spare us, O Jesus." },
      { text: "Be merciful,", response: "graciously hear us, O Jesus." },
      { text: "From all evil,", response: "deliver us, O Jesus." },
      { text: "From all sin,", response: "deliver us, O Jesus." },
      { text: "From Thy wrath,", response: "deliver us, O Jesus." },
      { text: "From the snares of the devil,", response: "deliver us, O Jesus." },
      { text: "From the spirit of fornication,", response: "deliver us, O Jesus." },
      { text: "From everlasting death,", response: "deliver us, O Jesus." },
      { text: "From the neglect of Thine inspirations,", response: "deliver us, O Jesus." },
      { text: "By the mystery of Thy holy Incarnation,", response: "deliver us, O Jesus." },
      { text: "By Thy Nativity,", response: "deliver us, O Jesus." },
      { text: "By Thine Infancy,", response: "deliver us, O Jesus." },
      { text: "By Thy most divine Life,", response: "deliver us, O Jesus." },
      { text: "By Thy labors,", response: "deliver us, O Jesus." },
      { text: "By Thine agony and Passion,", response: "deliver us, O Jesus." },
      { text: "By Thy Cross and dereliction,", response: "deliver us, O Jesus." },
      { text: "By Thy sufferings,", response: "deliver us, O Jesus." },
      { text: "By Thy death and burial,", response: "deliver us, O Jesus." },
      { text: "By Thy Resurrection,", response: "deliver us, O Jesus." },
      { text: "By Thine Ascension,", response: "deliver us, O Jesus." },
      { text: "By Thine institution of the most Holy Eucharist,", response: "deliver us, O Jesus." },
      { text: "By Thy joys,", response: "deliver us, O Jesus." },
      { text: "By Thy glory,", response: "deliver us, O Jesus." },
      { text: "Lamb of God, Who takest away the sins of the world,", response: "spare us, O Jesus." },
      { text: "Lamb of God, Who takest away the sins of the world,", response: "graciously hear us, O Jesus." },
      { text: "Lamb of God, Who takest away the sins of the world,", response: "have mercy on us, O Jesus." },
      { text: "Jesus, hear us.", response: "Jesus, graciously hear us." },
      {
        text: "Let us pray. O Lord Jesus Christ, Who hast said: Ask and ye shall receive, seek and ye shall find, knock and it shall be opened unto you; mercifully attend to our supplications, and grant us the gift of Thy divine charity, that we may ever love Thee with our whole heart and never desist from Thy praise. Give us, O Lord, a perpetual fear and love of Thy holy Name, for Thou never ceasest to govern those whom Thou didst solidly establish in Thy love. Who livest and reignest world without end. Amen.",
      },
    ],
  },
  prayerToMary: {
    id: "prayerToMary",
    title: "St. Louis de Montfort's Prayer to Mary",
    kind: "prayer",
    steps: [
      {
        text: "Hail Mary, beloved Daughter of the Eternal Father! Hail Mary, admirable Mother of the Son! Hail Mary, faithful Spouse of the Holy Ghost! Hail Mary, my dear Mother, my loving Mistress, my powerful sovereign! Hail my joy, my glory, my heart and my soul! Thou art all mine by mercy, and I am all thine by justice. But I am not yet sufficiently thine. I now give myself wholly to thee without keeping anything back for myself or others.",
      },
      {
        text: "If thou still seest in me anything which does not belong to thee, I beseech thee to take it and to make thyself the absolute Mistress of all that is mine. Destroy in me all that may be displeasing to God, root it up and bring it to nought; place and cultivate in me everything that is pleasing to thee.",
      },
      {
        text: "May the light of thy faith dispel the darkness of my mind; may thy profound humility take the place of my pride; may thy sublime contemplation replace the distractions of my wandering imagination; may thy continuous sight of God fill my memory with His presence; may the burning love of thy heart inflame the lukewarmness of mine; may thy virtues take the place of my sins; may thy merits be my only adornment in the sight of God and make up for all that is wanting in me.",
      },
      {
        text: "Finally, dearly beloved Mother, grant, if it be possible, that I may have no other spirit but thine to know Jesus and His divine will; that I may have no other soul but thine to praise and glorify the Lord; that I may have no other heart but thine to love God with a love as pure and ardent as thine.",
      },
      {
        text: "I do not ask thee for visions, revelations, sensible devotion or spiritual pleasures. It is thy privilege to see God clearly; it is thy privilege to enjoy heavenly bliss; it is thy privilege to triumph gloriously in Heaven at the right hand of thy Son and to hold absolute sway over angels, men and demons. Such is, O heavenly Mary, the best part, which the Lord has given thee and which shall never be taken away from thee — and this thought fills my heart with joy.",
      },
      {
        text: "As for my part here below, I wish for no other than that which was thine: to believe sincerely without spiritual pleasures; to suffer joyfully without human consolation; to die continually to myself without respite; and to work zealously and unselfishly for thee until death as the humblest of thy servants. The only grace I beg thee to obtain for me is that every day and every moment of my life I may say: Amen, so be it — to all that thou didst do while on earth; Amen, so be it — to all that thou art now doing in Heaven; Amen, so be it — to all that thou art doing in my soul, so that thou alone mayest fully glorify Jesus in me for time and eternity. Amen.",
      },
    ],
  },
  prayerToJesus: {
    id: "prayerToJesus",
    title: "St. Louis de Montfort's Prayer to Jesus",
    kind: "prayer",
    steps: [
      {
        text: "O most loving Jesus, allow me to pour forth my gratitude for the grace Thou hast bestowed upon me in giving me to Thy holy Mother through the devotion of holy slavery, that she may be my advocate before Thy majesty and my support in my extreme misery.",
      },
      {
        text: "Alas, O Lord, I am so wretched that without this dear Mother I should certainly perish. But I am all Thine, and all that I have is Thine. I take Thee for my Father; I give myself entirely to Thee, begging Thee to take possession of my will and to rule it according to Thy good pleasure.",
      },
      {
        text: "For the glory of Thy holy Name, accept the offering I make of myself, that I may be Thy faithful slave. I wish to have no other path than the one Thou didst take, no other wisdom than Thine, no other life than Thine. Live in me, O Jesus, that I may live in Thee. Amen.",
      },
    ],
  },
  oJesusLiving: {
    id: "oJesusLiving",
    title: "O Jesus, Living in Mary",
    kind: "prayer",
    steps: [
      {
        text: "O Jesus, living in Mary, come and live in Thy servants, in the spirit of Thy holiness, in the fullness of Thy might, in the truth of Thy virtues, in the perfection of Thy ways, in the communion of Thy mysteries. Subdue every hostile power in Thy Spirit, for the glory of the Father. Amen.",
      },
    ],
  },
  rosary: {
    id: "rosary",
    title: "Five decades of the Rosary",
    kind: "practice",
    steps: [
      {
        text: "Pray five decades of the Holy Rosary today. Offer them for the grace of knowing Mary, that she may form Jesus in you. Use the mysteries of the day, or the Joyful Mysteries in honor of the Incarnation.",
      },
    ],
  },
};

export const ACT_OF_CONSECRATION = [
  "O Eternal and incarnate Wisdom! O sweetest and most adorable Jesus! True God and true man, only Son of the Eternal Father, and of Mary, always virgin! I adore Thee profoundly in the bosom and splendors of Thy Father during eternity; and I adore Thee also in the virginal bosom of Mary, Thy most worthy Mother, in the time of Thine incarnation.",
  "I give Thee thanks for that Thou hast annihilated Thyself, taking the form of a slave in order to rescue me from the cruel slavery of the devil. I praise and glorify Thee for that Thou hast been pleased to submit Thyself to Mary, Thy holy Mother, in all things, in order to make me Thy faithful slave through her. But, alas! Ungrateful and faithless as I have been, I have not kept the promises which I made so solemnly to Thee in my Baptism; I have not fulfilled my obligations; I do not deserve to be called Thy child, nor yet Thy slave; and as there is nothing in me which does not merit Thine anger and Thy repulse, I dare not come by myself before Thy most holy and august Majesty. It is on this account that I have recourse to the intercession of Thy most holy Mother, whom Thou hast given me for a mediatrix with Thee. It is through her that I hope to obtain of Thee contrition, the pardon of my sins, and the acquisition and preservation of wisdom.",
  "Hail, then, O immaculate Mary, living tabernacle of the Divinity, where the Eternal Wisdom willed to be hidden and to be adored by angels and by men! Hail, O Queen of Heaven and earth, to whose empire everything is subject which is under God. Hail, O sure refuge of sinners, whose mercy fails no one. Hear the desires which I have of the Divine Wisdom; and for that end receive the vows and offerings which in my lowliness I present to thee.",
  "I, {name}, a faithless sinner, renew and ratify today in thy hands the vows of my Baptism; I renounce forever Satan, his pomps and works; and I give myself entirely to Jesus Christ, the Incarnate Wisdom, to carry my cross after Him all the days of my life, and to be more faithful to Him than I have ever been before. In the presence of all the heavenly court I choose thee this day for my Mother and Mistress. I deliver and consecrate to thee, as thy slave, my body and soul, my goods, both interior and exterior, and even the value of all my good actions, past, present and future; leaving to thee the entire and full right of disposing of me, and all that belongs to me, without exception, according to thy good pleasure, for the greater glory of God in time and in eternity.",
  "Receive, O benignant Virgin, this little offering of my slavery, in honor of, and in union with, that subjection which the Eternal Wisdom deigned to have to thy maternity; in homage to the power which both of you have over this poor sinner, and in thanksgiving for the privileges with which the Holy Trinity has favored thee. I declare that I wish henceforth, as thy true slave, to seek thy honor and to obey thee in all things.",
  "O admirable Mother, present me to thy dear Son as His eternal slave, so that as He has redeemed me by thee, by thee He may receive me! O Mother of mercy, grant me the grace to obtain the true Wisdom of God; and for that end receive me among those whom thou lovest and teachest, whom thou leadest, nourishest and protectest as thy children and thy slaves.",
  "O faithful Virgin, make me in all things so perfect a disciple, imitator and slave of the Incarnate Wisdom, Jesus Christ thy Son, that I may attain, by thine intercession and by thine example, to the fullness of His age on earth and of His glory in Heaven. Amen.",
];

export type PeriodId = "world" | "self" | "mary" | "jesus" | "consecration";

export const PERIODS: Record<
  PeriodId,
  { id: PeriodId; label: string; days: string; intention: string; prayerIds: string[] }
> = {
  world: {
    id: "world",
    label: "Emptying of the spirit of the world",
    days: "Days 1–12",
    intention:
      "Cast off the spirit of the world — the denial of God's dominion, shown in sin, pride, and the three concupiscences — which is contrary to the spirit of Jesus and of Mary.",
    prayerIds: ["veniCreator", "aveMarisStella", "magnificat", "gloryBe"],
  },
  self: {
    id: "self",
    label: "Knowledge of self",
    days: "Days 13–19",
    intention:
      "Ask for humility. See your sins, your weakness, and your need of a mediator. True self-knowledge makes room for grace.",
    prayerIds: ["litanyHolyGhost", "litanyLoreto", "aveMarisStella"],
  },
  mary: {
    id: "mary",
    label: "Knowledge of Mary",
    days: "Days 20–26",
    intention:
      "Ask the Holy Ghost to reveal the Blessed Virgin: her place in the Incarnation, the marks of true devotion, and the slavery of love.",
    prayerIds: ["litanyHolyGhost", "litanyLoreto", "aveMarisStella", "prayerToMary", "rosary"],
  },
  jesus: {
    id: "jesus",
    label: "Knowledge of Jesus Christ",
    days: "Days 27–33",
    intention:
      "Contemplate the Incarnate Wisdom. Seek to know Jesus, to love Him, and to live His interior life through Mary.",
    prayerIds: ["litanyHolyGhost", "aveMarisStella", "litanyHolyName", "prayerToJesus", "oJesusLiving"],
  },
  consecration: {
    id: "consecration",
    label: "Day of Consecration",
    days: "Day 34",
    intention:
      "Go to Confession (or within the eight days prior), hear Mass, receive Communion, and pray the Act of Consecration. Fast, give alms, or offer a candle if you can. Sign the Act and keep it.",
    prayerIds: [],
  },
};

export function periodForDay(day: number): (typeof PERIODS)[PeriodId] {
  if (day <= 12) return PERIODS.world;
  if (day <= 19) return PERIODS.self;
  if (day <= 26) return PERIODS.mary;
  if (day <= 33) return PERIODS.jesus;
  return PERIODS.consecration;
}
