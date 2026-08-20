import { periodForDay, type PeriodId } from "./prayers";

export type DayContent = {
  day: number;
  period: PeriodId;
  title: string;
  source: string;
  reading: string;
  examen: string;
};

export const DAYS: DayContent[] = [
  {
    day: 1,
    period: "world",
    title: "Two spirits",
    source: "Matthew 5:1–12",
    reading:
      "Blessed are the poor in spirit: for theirs is the kingdom of heaven. Blessed are the meek: for they shall possess the land. Blessed are they that mourn: for they shall be comforted. Blessed are they that hunger and thirst after justice: for they shall have their fill. Blessed are the merciful: for they shall obtain mercy. Blessed are the clean of heart: for they shall see God. Blessed are the peacemakers: for they shall be called children of God. Blessed are they that suffer persecution for justice's sake: for theirs is the kingdom of heaven.",
    examen:
      "Where does the spirit of the world still rule in me — in comfort, reputation, or the refusal to be poor in spirit?",
  },
  {
    day: 2,
    period: "world",
    title: "Hidden from display",
    source: "Matthew 6:1–6, 9–13",
    reading:
      "Take heed that you do not your justice before men, to be seen by them: otherwise you shall not have a reward of your Father who is in heaven. When thou dost an almsdeed, sound not a trumpet before thee. When thou shalt pray, enter into thy chamber, and having shut the door, pray to thy Father in secret. Thus therefore shall you pray: Our Father who art in heaven, hallowed be Thy name. Thy kingdom come. Thy will be done on earth as it is in heaven. Give us this day our supersubstantial bread. And forgive us our debts, as we also forgive our debtors. And lead us not into temptation. But deliver us from evil. Amen.",
    examen: "Do I pray, give, and fast to be seen — or to belong to the Father who sees in secret?",
  },
  {
    day: 3,
    period: "world",
    title: "The narrow gate",
    source: "Matthew 7:7–14",
    reading:
      "Ask, and it shall be given you: seek, and you shall find: knock, and it shall be opened to you. For every one that asketh, receiveth. Enter ye in at the narrow gate: for wide is the gate, and broad is the way that leadeth to destruction, and many there are who go in thereat. How narrow is the gate, and strait is the way that leadeth to life: and few there are that find it!",
    examen: "What broad path am I still walking? What would the narrow gate cost me this week?",
  },
  {
    day: 4,
    period: "world",
    title: "Contempt of the world",
    source: "Imitation of Christ I.1",
    reading:
      "Vanity of vanities, and all is vanity, besides loving God and serving Him alone. This is the highest wisdom: to despise the world and to draw nigh to the kingdom of heaven. It is vanity to seek after perishing riches and to trust in them. It is vanity to hunt after honors and to climb to high degree. It is vanity to follow the desires of the flesh. It is vanity to wish for long life and to care little for a well-spent life. It is vanity to love what passeth away so swiftly, and not to hasten thither where everlasting joy abideth.",
    examen: "Which vanity still has a claim on my time, my money, or my imagination?",
  },
  {
    day: 5,
    period: "world",
    title: "Truth, not curiosity",
    source: "Imitation of Christ I.3",
    reading:
      "Happy is he whom truth teacheth by itself, not by figures and passing words, but as it is in itself. Our own opinion and our own sense often deceive us, and they discern but little. What availeth it to cavil and dispute about hidden and obscure things, when we shall not be reproved at the day of judgment for being ignorant of them? It is a great folly to neglect things profitable and necessary, and to give our minds to that which is curious and hurtful. Having eyes, we see not.",
    examen: "Where do I prefer novelty, argument, or distraction to the one thing necessary?",
  },
  {
    day: 6,
    period: "world",
    title: "Peace through mortification",
    source: "Imitation of Christ I.11",
    reading:
      "We might have much peace if we would not busy ourselves with the sayings and doings of others, and with things which belong not to us. How can he remain long in peace who entangleth himself with other men's cares, who seeketh occasions abroad, who little or seldom recollecteth himself within? Blessed are the single-hearted, for they shall enjoy much peace. If we were perfectly dead to ourselves and unentangled within, then should we be able to relish things divine and to have some experience of heavenly contemplation.",
    examen: "What care of others, or of my own image, keeps me from interior peace?",
  },
  {
    day: 7,
    period: "world",
    title: "Remember death",
    source: "Imitation of Christ I.23",
    reading:
      "Very quickly shall there be an end of thee here; see to it, how it will be with thee in another world. Today man is, and tomorrow he is seen no more. And when he is taken away from the sight, he is quickly also out of mind. Oh, the dullness and hardness of man's heart, which thinketh only of the present and looketh not forward to the things to come! Thou oughtest in every action and thought so to order thyself as if thou wert immediately to die. If thou hadst a good conscience, thou wouldst not much fear death.",
    examen: "If I died tonight, what attachment would I most regret not having cut?",
  },
  {
    day: 8,
    period: "world",
    title: "Judgment and the next life",
    source: "Imitation of Christ I.24",
    reading:
      "In all things look to the end, and consider how thou wilt stand before that strict Judge, from whom nothing is hid, who is not appeased with gifts, nor admitteth excuses, but will judge according to right. O most wretched and foolish sinner, what wilt thou answer unto God, who knoweth all thy evil deeds — thou who art sometimes afraid of the countenance of an angry man? Why dost thou not provide for thyself against the day of judgment? When no man can be excused or defended by another, but each one will have enough to do to answer for himself.",
    examen: "Do I fear men's faces more than God's judgment? Where?",
  },
  {
    day: 9,
    period: "world",
    title: "The royal way of the Holy Cross",
    source: "Imitation of Christ II.12",
    reading:
      "To many this seemeth a hard saying: Deny thyself, take up thy cross, and follow Jesus. But it will be much harder to hear that last word: Depart from me, ye cursed, into everlasting fire. For they who now hear the word of the cross and follow it, shall not then fear the hearing of eternal damnation. The sign of the cross shall be in heaven when the Lord shall come to judgment. Then all the servants of the cross, who in their lifetime have conformed themselves to Christ crucified, shall draw nigh to Christ the Judge with great confidence.",
    examen: "Which small daily cross do I consistently refuse?",
  },
  {
    day: 10,
    period: "world",
    title: "Disordered love of creatures",
    source: "True Devotion to Mary, nos. 78–79",
    reading:
      "The world, the devil, and the flesh have enslaved us. We are full of self; we are proud, and we love ourselves with a love that is blind, earthly, and scandalous. We must empty ourselves of the spirit of the world, which is contrary to the spirit of Jesus Christ. The spirit of the world consists essentially in the denial of the supreme dominion of God — a denial manifested by sin and disobedience. It shows itself by the concupiscence of the flesh, the concupiscence of the eyes, and the pride of life.",
    examen: "Name one concrete work of the flesh, the eyes, or pride that I will mortify today.",
  },
  {
    day: 11,
    period: "world",
    title: "Salt that has lost its savor",
    source: "Matthew 5:13–16",
    reading:
      "You are the salt of the earth. But if the salt lose its savour, wherewith shall it be salted? It is good for nothing any more but to be cast out, and to be trodden on by men. You are the light of the world. A city seated on a mountain cannot be hid. Neither do men light a candle and put it under a bushel, but upon a candlestick, that it may shine to all that are in the house. So let your light shine before men, that they may see your good works, and glorify your Father who is in heaven.",
    examen: "Where have I hidden the light rather than let the Father be glorified?",
  },
  {
    day: 12,
    period: "world",
    title: "Ready for the work of grace",
    source: "True Devotion to Mary, no. 82",
    reading:
      "The more we empty ourselves of self, the more room we give to grace. If we do not empty ourselves of the spirit of the world, Jesus Christ, who is contrary to that spirit, cannot dwell in us. This first period of the preparation is to be employed in casting off the spirit of the world. Pray, examine, mortify the will, and ask for purity of heart — the indispensable condition for contemplating God.",
    examen: "Have these twelve days actually changed a habit, or only my reading list? What will I keep?",
  },
  {
    day: 13,
    period: "self",
    title: "Know thyself",
    source: "Luke 18:9–14",
    reading:
      "Two men went up into the temple to pray: the one a Pharisee, and the other a publican. The Pharisee standing, prayed thus with himself: O God, I give Thee thanks that I am not as the rest of men. And the publican, standing afar off, would not so much as lift up his eyes towards heaven; but struck his breast, saying: O God, be merciful to me a sinner. I say to you, this man went down into his house justified rather than the other: because every one that exalteth himself shall be humbled, and he that humbleth himself shall be exalted.",
    examen: "In what relationship do I still pray 'with myself,' like the Pharisee?",
  },
  {
    day: 14,
    period: "self",
    title: "Without Me you can do nothing",
    source: "John 15:4–5; Imitation of Christ III.55",
    reading:
      "Abide in Me, and I in you. As the branch cannot bear fruit of itself, unless it abide in the vine, so neither can you, unless you abide in Me. I am the vine; you the branches: he that abideth in Me, and I in him, the same beareth much fruit: for without Me you can do nothing. The Imitation adds: Nature is crafty and draweth many away, ensnareth and deceiveth them, and always proposeth self as her end. But grace walketh in simplicity, turneth aside from all evil, offereth no deceits, and doeth all things purely for God.",
    examen: "Where am I still trying to bear fruit without remaining in the Vine?",
  },
  {
    day: 15,
    period: "self",
    title: "The beam and the mote",
    source: "Matthew 7:1–5",
    reading:
      "Judge not, that you may not be judged. For with what judgment you judge, you shall be judged: and with what measure you mete, it shall be measured to you again. And why seest thou the mote that is in thy brother's eye; and seest not the beam that is in thy own eye? Thou hypocrite, cast out first the beam out of thy own eye, and then shalt thou see to cast out the mote out of thy brother's eye.",
    examen: "Whose fault do I rehearse more fluently than my own? Name the beam.",
  },
  {
    day: 16,
    period: "self",
    title: "Self-love unmasked",
    source: "True Devotion to Mary, nos. 83–86",
    reading:
      "We must know ourselves. We must know our nothingness and our corruption. We are by nature prouder than peacocks, more clinging to earth than toads, more given to pleasures than goats, more envious than serpents. Our self-love is so subtle that it hides even from us. Ask Mary to obtain for you the grace of true self-knowledge, without which you will never have true humility, and without humility you will never have true devotion.",
    examen: "What compliment, if withheld, would most wound me? That is a map of my self-love.",
  },
  {
    day: 17,
    period: "self",
    title: "Need of a mediator",
    source: "True Devotion to Mary, nos. 83–86 (cont.)",
    reading:
      "We are so poor and little that we have need of a mediator with the Mediator Himself. Such is the way that Jesus Christ has established: He came to us through Mary, and through Mary we must go to Him. It is not that Jesus is severe — He is our Redeemer — but that we, knowing our unworthiness, take the path of humility which He Himself took: dependence on Mary.",
    examen: "Do I approach Jesus as if I had no need of a mother, or as a child who does?",
  },
  {
    day: 18,
    period: "self",
    title: "Blessed are the poor",
    source: "Imitation of Christ III.8",
    reading:
      "I will speak to my Lord, I who am but dust and ashes. If I account myself greater, behold, Thou standest against me, and my iniquities bear true testimony, and I cannot contradict it. But if I abase myself and bring myself to nought, and shrink from all self-esteem, and account myself to be but dust as I am, Thy grace will be favorable unto me, and Thy light will draw nigh to my heart.",
    examen: "Can I tell the truth about my sins today without excuse or comparison?",
  },
  {
    day: 19,
    period: "self",
    title: "A clean heart",
    source: "Psalm 50 (51):3–12",
    reading:
      "Have mercy on me, O God, according to Thy great mercy. And according to the multitude of Thy tender mercies blot out my iniquity. Wash me yet more from my iniquity, and cleanse me from my sin. For I know my iniquity, and my sin is always before me. To Thee only have I sinned. Create a clean heart in me, O God: and renew a right spirit within my bowels. Cast me not away from Thy face. Restore unto me the joy of Thy salvation.",
    examen: "What one confession-worthy truth have I been postponing? Bring it into the light.",
  },
  {
    day: 20,
    period: "mary",
    title: "To Jesus through Mary",
    source: "True Devotion to Mary, nos. 12–15",
    reading:
      "It was through the Blessed Virgin Mary that Jesus Christ came into the world, and it is also through her that He must reign in the world. Mary is the safest, easiest, shortest, and most perfect way of approaching Jesus. The more we honor the Blessed Virgin, the more we honor Jesus Christ, because we honor her only that we may the more perfectly honor Him, and that we may offer her to Him as the masterpiece of His creation.",
    examen: "Do I treat devotion to Mary as a detour from Jesus, or as His own chosen road?",
  },
  {
    day: 21,
    period: "mary",
    title: "Necessary to salvation",
    source: "True Devotion to Mary, nos. 39–43",
    reading:
      "The Blessed Virgin is necessary to God, in the order of grace which He has freely willed. He willed to begin and complete His greatest works through her. As she was necessary to God in the Incarnation, she is necessary to us in the order of sanctification. He who has not Mary for his Mother has not God for his Father. A servant so faithful must not be forgotten; a Mother so tender must not be ignored.",
    examen: "In practice, is Mary my Mother, or only a feast-day figure?",
  },
  {
    day: 22,
    period: "mary",
    title: "False devotion and true",
    source: "True Devotion to Mary, nos. 92–104",
    reading:
      "There are several false devotions to Our Lady: the critical, the scrupulous, the external, the presumptuous, the inconstant, the hypocritical, the interested. True devotion is interior — it comes from the mind and the heart. It is tender — full of confidence in her like a child in its mother. It is holy — it leads us to avoid sin. It is constant — it strengthens us in good. It is disinterested — it inspires us to seek God alone in His holy Mother, not ourselves.",
    examen: "Which false devotion is my temptation: exterior only, inconstant, or interested?",
  },
  {
    day: 23,
    period: "mary",
    title: "The slavery of love",
    source: "True Devotion to Mary, nos. 68–77",
    reading:
      "We must belong to Jesus, and through Mary, as slaves of love. This is not the slavery of nature (creation), nor the slavery of constraint (sin), but a slavery of will and of love, by which we give to Jesus, through Mary, our body, our soul, our goods, and the value of our good actions — past, present, and future — that she may dispose of all according to the will of God. It is the most perfect of all devotions, because it is the most complete.",
    examen: "What am I still holding back from this gift — time, reputation, a relationship, a plan?",
  },
  {
    day: 24,
    period: "mary",
    title: "Her faith and her fiat",
    source: "Luke 1:26–38",
    reading:
      "The angel Gabriel was sent from God into a city of Galilee, called Nazareth, to a virgin espoused to a man whose name was Joseph, of the house of David; and the virgin's name was Mary. And the angel said to her: Hail, full of grace, the Lord is with thee. Behold thou shalt conceive in thy womb, and shalt bring forth a son; and thou shalt call His name Jesus. And Mary said: Behold the handmaid of the Lord; be it done to me according to thy word.",
    examen: "Where is God waiting for my fiat, and I am still bargaining?",
  },
  {
    day: 25,
    period: "mary",
    title: "Her soul magnifies the Lord",
    source: "Luke 1:39–55",
    reading:
      "And Mary rising up in those days, went into the hill country with haste. And she entered into the house of Zachary, and saluted Elizabeth. And Elizabeth was filled with the Holy Ghost: and she cried out: Blessed art thou among women, and blessed is the fruit of thy womb. And Mary said: My soul doth magnify the Lord. And my spirit hath rejoiced in God my Saviour. Because He hath regarded the humility of His handmaid.",
    examen: "Does my soul magnify the Lord, or magnify my wounds, my work, my self?",
  },
  {
    day: 26,
    period: "mary",
    title: "Do whatever He tells you",
    source: "John 2:1–11",
    reading:
      "There was a marriage in Cana of Galilee: and the mother of Jesus was there. And the wine failing, the mother of Jesus saith to Him: They have no wine. His mother saith to the waiters: Whatsoever He shall say to you, do ye. Jesus saith to them: Fill the waterpots with water. And they filled them up to the brim. This beginning of miracles did Jesus in Cana of Galilee; and manifested His glory, and His disciples believed in Him.",
    examen: "Mary's last recorded words are her whole doctrine. What is He telling me to do that I have not done?",
  },
  {
    day: 27,
    period: "jesus",
    title: "The Word was made flesh",
    source: "John 1:1–14",
    reading:
      "In the beginning was the Word, and the Word was with God, and the Word was God. In Him was life, and the life was the light of men. And the light shineth in darkness, and the darkness did not comprehend it. And the Word was made flesh, and dwelt among us, and we saw His glory, the glory as it were of the only begotten of the Father, full of grace and truth.",
    examen: "Incarnate Wisdom chose Mary's womb. Do I let Him choose her as the place where I will meet Him?",
  },
  {
    day: 28,
    period: "jesus",
    title: "Learn of Me",
    source: "Matthew 11:25–30",
    reading:
      "I confess to Thee, O Father, Lord of heaven and earth, because Thou hast hid these things from the wise and prudent, and hast revealed them to little ones. All things are delivered to Me by my Father. Come to Me, all you that labor, and are burdened, and I will refresh you. Take up My yoke upon you, and learn of Me, because I am meek, and humble of heart: and you shall find rest to your souls. For My yoke is sweet and My burden light.",
    examen: "Am I learning meekness from Jesus, or still defending my rights as the world does?",
  },
  {
    day: 29,
    period: "jesus",
    title: "If any man will come after Me",
    source: "Matthew 16:24–27",
    reading:
      "If any man will come after Me, let him deny himself, and take up his cross, and follow Me. For he that will save his life, shall lose it: and he that shall lose his life for My sake, shall find it. For what doth it profit a man, if he gain the whole world, and suffer the loss of his own soul? For the Son of man shall come in the glory of His Father with His angels: and then will He render to every man according to his works.",
    examen: "What 'life' am I still trying to save, which Jesus is asking me to lose?",
  },
  {
    day: 30,
    period: "jesus",
    title: "Abide in My love",
    source: "John 15:9–17",
    reading:
      "As the Father hath loved Me, I also have loved you. Abide in My love. If you keep My commandments, you shall abide in My love; as I also have kept my Father's commandments, and do abide in His love. This is My commandment, that you love one another, as I have loved you. Greater love than this no man hath, that a man lay down his life for his friends. You are My friends, if you do the things that I command you.",
    examen: "Whom am I refusing to love as He has loved me?",
  },
  {
    day: 31,
    period: "jesus",
    title: "This is My body",
    source: "John 6:53–58",
    reading:
      "Amen, amen I say unto you: Except you eat the flesh of the Son of man, and drink His blood, you shall not have life in you. He that eateth My flesh, and drinketh My blood, hath everlasting life: and I will raise him up in the last day. For My flesh is meat indeed: and My blood is drink indeed. He that eateth My flesh, and drinketh My blood, abideth in Me, and I in him. As the living Father hath sent Me, and I live by the Father; so he that eateth Me, the same also shall live by Me.",
    examen: "How will I receive Communion on the day of consecration — as a habit, or as a gift of myself?",
  },
  {
    day: 32,
    period: "jesus",
    title: "It is no longer I who live",
    source: "Galatians 2:19–20; True Devotion no. 214",
    reading:
      "With Christ I am nailed to the cross. And I live, now not I; but Christ liveth in me. And that I live now in the flesh: I live in the faith of the Son of God, who loved me, and delivered Himself for me. St. Louis writes: When the Holy Ghost finds Mary in a soul, He flies there. He enters there in His fullness. He gives Himself to that soul generously to the extent that it makes room for Mary.",
    examen: "What still has to die in me so that it is no longer I who live?",
  },
  {
    day: 33,
    period: "jesus",
    title: "The perfect consecration",
    source: "True Devotion to Mary, nos. 120–125",
    reading:
      "This devotion consists in giving ourselves entirely to the Blessed Virgin, in order to belong entirely to Jesus through her. We give her our body, our soul, our exterior goods, our interior goods, and the value of all our good actions. We do this for the whole of eternity, and we wish her to dispose of us and of all that belongs to us according to her good pleasure, for the greater glory of God. Tomorrow you will say this with your lips before the altar. Today, say it with your will.",
    examen: "Am I ready to sign? If not, what clause of the gift am I still editing?",
  },
];

export function getDay(day: number): DayContent | undefined {
  return DAYS.find((d) => d.day === day);
}

export function periodMeta(day: number) {
  return periodForDay(day);
}
