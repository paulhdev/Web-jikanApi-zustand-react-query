import { TopMangaApi } from '@/services/requests/useFetchTopMangas/types';

// 20230417224140
// https://api.jikan.moe/v4/top/manga

export const topMangas: TopMangaApi = {
  pagination: {
    last_visible_page: 1737,
    has_next_page: true,
    current_page: 1,
    items: {
      count: 25,
      total: 43414,
      per_page: 25,
    },
  },
  data: [
    {
      mal_id: 2,
      url: 'https://myanimelist.net/manga/2/Berserk',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/1/157897.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/1/157897t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/1/157897l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/1/157897.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/1/157897t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/1/157897l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Berserk',
        },
        {
          type: 'Synonym',
          title: 'Berserk: The Prototype',
        },
        {
          type: 'Synonym',
          title: 'Berserk: The Prototype',
        },
        {
          type: 'Japanese',
          title: 'ベルセルク',
        },
        {
          type: 'English',
          title: 'Berserk',
        },
      ],
      title: 'Berserk',
      title_english: 'Berserk',
      title_japanese: 'ベルセルク',
      title_synonyms: ['Berserk: The Prototype'],
      type: 'Manga',
      chapters: null,
      volumes: null,
      status: 'Publishing',
      publishing: true,
      published: {
        from: '1989-08-25T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 25,
            month: 8,
            year: 1989,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Aug 25, 1989 to ?',
      },
      score: 9.47,
      scored: 9.47,
      scored_by: 306077,
      rank: 1,
      popularity: 2,
      members: 619327,
      favorites: 115463,
      synopsis:
        'Guts, a former mercenary now known as the "Black Swordsman," is out for revenge. After a tumultuous childhood, he finally finds someone he respects and believes he can trust, only to have everything fall apart when this person takes away everything important to Guts for the purpose of fulfilling his own desires. Now marked for death, Guts becomes condemned to a fate in which he is relentlessly pursued by demonic beings. Setting out on a dreadful quest riddled with misfortune, Guts, armed with a massive sword and monstrous strength, will let nothing stop him, not even death itself, until he is finally able to take the head of the one who stripped him—and his loved one—of their humanity. [Written by MAL Rewrite] Included one-shot: Volume 14: Berserk: The Prototype',
      background:
        "Berserk won the Award for Excellence at the sixth installment of Tezuka Osamu Cultural Prize in 2002. The series has over 50 million copies in print worldwide and has been published in English by Dark Horse since November 4, 2003. It is also published in Italy, Germany, Spain, France, Brazil, South Korea, Hong Kong, Taiwan, Thailand, Poland, México and Turkey. In May 2021, the author Kentaro Miura suddenly died at the age of 54. Chapter 364 of Berserk was published posthumously on September 10, 2021. Miura would often share details about the series' story with his childhood friend and fellow mangaka Kouji Mori. Berserk resumed on June 24, 2022, with Studio Gaga handling the art and Kouji Mori's supervision.",
      authors: [
        {
          mal_id: 1868,
          type: 'people',
          name: 'Miura, Kentarou',
          url: 'https://myanimelist.net/people/1868/Kentarou_Miura',
        },
        {
          mal_id: 49592,
          type: 'people',
          name: 'Studio Gaga',
          url: 'https://myanimelist.net/people/49592/Studio_Gaga',
        },
      ],
      serializations: [
        {
          mal_id: 2,
          type: 'manga',
          name: 'Young Animal',
          url: 'https://myanimelist.net/manga/magazine/2/Young_Animal',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'manga',
          name: 'Action',
          url: 'https://myanimelist.net/manga/genre/1/Action',
        },
        {
          mal_id: 2,
          type: 'manga',
          name: 'Adventure',
          url: 'https://myanimelist.net/manga/genre/2/Adventure',
        },
        {
          mal_id: 46,
          type: 'manga',
          name: 'Award Winning',
          url: 'https://myanimelist.net/manga/genre/46/Award_Winning',
        },
        {
          mal_id: 8,
          type: 'manga',
          name: 'Drama',
          url: 'https://myanimelist.net/manga/genre/8/Drama',
        },
        {
          mal_id: 10,
          type: 'manga',
          name: 'Fantasy',
          url: 'https://myanimelist.net/manga/genre/10/Fantasy',
        },
        {
          mal_id: 14,
          type: 'manga',
          name: 'Horror',
          url: 'https://myanimelist.net/manga/genre/14/Horror',
        },
        {
          mal_id: 37,
          type: 'manga',
          name: 'Supernatural',
          url: 'https://myanimelist.net/manga/genre/37/Supernatural',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 58,
          type: 'manga',
          name: 'Gore',
          url: 'https://myanimelist.net/manga/genre/58/Gore',
        },
        {
          mal_id: 38,
          type: 'manga',
          name: 'Military',
          url: 'https://myanimelist.net/manga/genre/38/Military',
        },
        {
          mal_id: 6,
          type: 'manga',
          name: 'Mythology',
          url: 'https://myanimelist.net/manga/genre/6/Mythology',
        },
        {
          mal_id: 40,
          type: 'manga',
          name: 'Psychological',
          url: 'https://myanimelist.net/manga/genre/40/Psychological',
        },
      ],
      demographics: [
        {
          mal_id: 41,
          type: 'manga',
          name: 'Seinen',
          url: 'https://myanimelist.net/manga/genre/41/Seinen',
        },
      ],
    },
    {
      mal_id: 1706,
      url: 'https://myanimelist.net/manga/1706/JoJo_no_Kimyou_na_Bouken_Part_7__Steel_Ball_Run',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/3/179882.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/3/179882t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/3/179882l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/3/179882.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/3/179882t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/3/179882l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'JoJo no Kimyou na Bouken Part 7: Steel Ball Run',
        },
        {
          type: 'Synonym',
          title: "JoJo's Bizarre Adventure Part 7: Steel Ball Run",
        },
        {
          type: 'Synonym',
          title: 'SBR',
        },
        {
          type: 'Synonym',
          title: "JoJo's Bizarre Adventure Part 7: Steel Ball Run",
        },
        {
          type: 'Synonym',
          title: 'SBR',
        },
        {
          type: 'Japanese',
          title: 'ジョジョの奇妙な冒険 Part7 STEEL BALL RUN',
        },
        {
          type: 'French',
          title: 'Steel Ball Run',
        },
      ],
      title: 'JoJo no Kimyou na Bouken Part 7: Steel Ball Run',
      title_english: null,
      title_japanese: 'ジョジョの奇妙な冒険 Part7 STEEL BALL RUN',
      title_synonyms: [
        "JoJo's Bizarre Adventure Part 7: Steel Ball Run",
        'SBR',
      ],
      type: 'Manga',
      chapters: 96,
      volumes: 24,
      status: 'Finished',
      publishing: false,
      published: {
        from: '2004-01-19T00:00:00+00:00',
        to: '2011-04-19T00:00:00+00:00',
        prop: {
          from: {
            day: 19,
            month: 1,
            year: 2004,
          },
          to: {
            day: 19,
            month: 4,
            year: 2011,
          },
        },
        string: 'Jan 19, 2004 to Apr 19, 2011',
      },
      score: 9.29,
      scored: 9.29,
      scored_by: 145079,
      rank: 2,
      popularity: 27,
      members: 239120,
      favorites: 40229,
      synopsis:
        "In the American Old West, the world's greatest race is about to begin. Thousands line up in San Diego to travel over six thousand kilometers for a chance to win the grand prize of fifty million dollars. With the era of the horse reaching its end, contestants are allowed to use any kind of vehicle they wish. Competitors will have to endure grueling conditions, traveling up to a hundred kilometers a day through uncharted wastelands. The Steel Ball Run is truly a one-of-a-kind event. The youthful Johnny Joestar, a crippled former horse racer, has come to San Diego to watch the start of the race. There he encounters Gyro Zeppeli, a racer with two steel balls at his waist instead of a gun. Johnny witnesses Gyro using one of his steel balls to unleash a fantastical power, compelling a man to fire his gun at himself during a duel. In the midst of the action, Johnny happens to touch the steel ball and feels a power surging through his legs, allowing him to stand up for the first time in two years. Vowing to find the secret of the steel balls, Johnny decides to compete in the race, and so begins his bizarre adventure across America on the Steel Ball Run. [Written by MAL Rewrite]",
      background:
        'JoJo no Kimyou na Bouken Part 7: Steel Ball Run was originally presented as an unrelated story to the JoJo series and was serialized in Weekly Shounen Jump magazine as Steel Ball Run from issues #8~47 2004. Serialization then transferred to Ultra Jump magazine from issue May 2005 and the series was officially declared as Part 7 of the JoJo no Kimyou na Bouken series.',
      authors: [
        {
          mal_id: 2619,
          type: 'people',
          name: 'Araki, Hirohiko',
          url: 'https://myanimelist.net/people/2619/Hirohiko_Araki',
        },
      ],
      serializations: [
        {
          mal_id: 25,
          type: 'manga',
          name: 'Ultra Jump',
          url: 'https://myanimelist.net/manga/magazine/25/Ultra_Jump',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'manga',
          name: 'Action',
          url: 'https://myanimelist.net/manga/genre/1/Action',
        },
        {
          mal_id: 2,
          type: 'manga',
          name: 'Adventure',
          url: 'https://myanimelist.net/manga/genre/2/Adventure',
        },
        {
          mal_id: 7,
          type: 'manga',
          name: 'Mystery',
          url: 'https://myanimelist.net/manga/genre/7/Mystery',
        },
        {
          mal_id: 37,
          type: 'manga',
          name: 'Supernatural',
          url: 'https://myanimelist.net/manga/genre/37/Supernatural',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 13,
          type: 'manga',
          name: 'Historical',
          url: 'https://myanimelist.net/manga/genre/13/Historical',
        },
      ],
      demographics: [
        {
          mal_id: 41,
          type: 'manga',
          name: 'Seinen',
          url: 'https://myanimelist.net/manga/genre/41/Seinen',
        },
        {
          mal_id: 27,
          type: 'manga',
          name: 'Shounen',
          url: 'https://myanimelist.net/manga/genre/27/Shounen',
        },
      ],
    },
    {
      mal_id: 656,
      url: 'https://myanimelist.net/manga/656/Vagabond',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/1/259070.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/1/259070t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/1/259070l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/1/259070.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/1/259070t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/1/259070l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Vagabond',
        },
        {
          type: 'Japanese',
          title: 'バガボンド',
        },
        {
          type: 'English',
          title: 'Vagabond',
        },
      ],
      title: 'Vagabond',
      title_english: 'Vagabond',
      title_japanese: 'バガボンド',
      title_synonyms: [],
      type: 'Manga',
      chapters: 327,
      volumes: 37,
      status: 'On Hiatus',
      publishing: false,
      published: {
        from: '1998-09-03T00:00:00+00:00',
        to: '2015-05-21T00:00:00+00:00',
        prop: {
          from: {
            day: 3,
            month: 9,
            year: 1998,
          },
          to: {
            day: 21,
            month: 5,
            year: 2015,
          },
        },
        string: 'Sep 3, 1998 to May 21, 2015',
      },
      score: 9.22,
      scored: 9.22,
      scored_by: 121171,
      rank: 3,
      popularity: 15,
      members: 330799,
      favorites: 35651,
      synopsis:
        'In 16th-century Japan, Shinmen Takezou is a wild, rough young man, in both his appearance and his actions. His aggressive nature has won him the collective reproach and fear of his village, leading him and his best friend, Matahachi Honiden, to run away in search of something grander than provincial life. The pair enlist in the Toyotomi army, yearning for glory—but when the Toyotomi suffer a crushing defeat at the hands of the Tokugawa Clan at the Battle of Sekigahara, the friends barely make it out alive. After the two are separated, Shinmen returns home on a self-appointed mission to notify the Hon\'iden family of Matahachi\'s survival. He instead finds himself a wanted criminal, framed for his friend\'s supposed murder based on his history of violence. Upon being captured, he is strung up on a tree and left to die. An itinerant monk, the distinguished Takuan Soho, takes pity on the "devil child," secretly freeing Shinmen and christening him with a new name to avoid pursuit by the authorities: Musashi Miyamoto. Vagabond is the fictitious retelling of the life of one of Japan\'s most renowned swordsmen, the "Sword Saint" Musashi Miyamoto—his rise from a swordsman with no desire other than to become "Invincible Under the Heavens" to an enlightened warrior who slowly learns of the importance of close friends, self-reflection, and life itself. [Written by MAL Rewrite]',
      background:
        'In 2000, Vagabond won the Japan Media Arts Festival Manga Grand Prize and the 24th Kodansha Manga Award in the general category. The series won the Tezuka Osamu Cultural Prize in 2002 and has had over 82 million copies sold worldwide. Vagabond has been published in English by VIZ Media under the VIZ Signature imprint since April 5, 2002, and in large 3-in-1 omnibuses under the VIZBIG imprint since September 16, 2008. The English release got Takehiko Inoue a nomination for the Eisner Award in the Best Writer/Artist category in 2003. It also has been published in Brazilian Portuguese by Panini Comics/Planet Manga since February 2016.',
      authors: [
        {
          mal_id: 1911,
          type: 'people',
          name: 'Inoue, Takehiko',
          url: 'https://myanimelist.net/people/1911/Takehiko_Inoue',
        },
        {
          mal_id: 5760,
          type: 'people',
          name: 'Yoshikawa, Eiji',
          url: 'https://myanimelist.net/people/5760/Eiji_Yoshikawa',
        },
      ],
      serializations: [
        {
          mal_id: 72,
          type: 'manga',
          name: 'Morning',
          url: 'https://myanimelist.net/manga/magazine/72/Morning',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'manga',
          name: 'Action',
          url: 'https://myanimelist.net/manga/genre/1/Action',
        },
        {
          mal_id: 2,
          type: 'manga',
          name: 'Adventure',
          url: 'https://myanimelist.net/manga/genre/2/Adventure',
        },
        {
          mal_id: 46,
          type: 'manga',
          name: 'Award Winning',
          url: 'https://myanimelist.net/manga/genre/46/Award_Winning',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 13,
          type: 'manga',
          name: 'Historical',
          url: 'https://myanimelist.net/manga/genre/13/Historical',
        },
        {
          mal_id: 21,
          type: 'manga',
          name: 'Samurai',
          url: 'https://myanimelist.net/manga/genre/21/Samurai',
        },
      ],
      demographics: [
        {
          mal_id: 41,
          type: 'manga',
          name: 'Seinen',
          url: 'https://myanimelist.net/manga/genre/41/Seinen',
        },
      ],
    },
    {
      mal_id: 13,
      url: 'https://myanimelist.net/manga/13/One_Piece',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/253146.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/253146t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/253146l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/253146.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/253146t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/253146l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'One Piece',
        },
        {
          type: 'Japanese',
          title: 'ONE PIECE',
        },
        {
          type: 'English',
          title: 'One Piece',
        },
      ],
      title: 'One Piece',
      title_english: 'One Piece',
      title_japanese: 'ONE PIECE',
      title_synonyms: [],
      type: 'Manga',
      chapters: null,
      volumes: null,
      status: 'Publishing',
      publishing: true,
      published: {
        from: '1997-07-22T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 22,
            month: 7,
            year: 1997,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Jul 22, 1997 to ?',
      },
      score: 9.21,
      scored: 9.21,
      scored_by: 342390,
      rank: 4,
      popularity: 3,
      members: 558706,
      favorites: 108414,
      synopsis:
        'Gol D. Roger, a man referred to as the "Pirate King," is set to be executed by the World Government. But just before his demise, he confirms the existence of a great treasure, One Piece, located somewhere within the vast ocean known as the Grand Line. Announcing that One Piece can be claimed by anyone worthy enough to reach it, the Pirate King is executed and the Great Age of Pirates begins. Twenty-two years later, a young man by the name of Monkey D. Luffy is ready to embark on his own adventure, searching for One Piece and striving to become the new Pirate King. Armed with just a straw hat, a small boat, and an elastic body, he sets out on a fantastic journey to gather his own crew and a worthy ship that will take them across the Grand Line to claim the greatest status on the high seas. [Written by MAL Rewrite]',
      background:
        "One Piece is the highest selling manga series of all time, with over 500 million copies in circulation as of 2022. Volume 67 of the series currently holds the record for highest first print run of any manga (including books) of all time in Japan, with 4.05 million in 2012. The series was a finalist for the Tezuka Osamu Cultural Prize three times in a row from 2000 to 2002. In 2012, it won the 41st Japan Cartoonists Association Award Grand Prize, alongside Kimuchi Yokoyama's Neko Darake. VIZ Media has published One Piece in English under the Shonen Jump imprint since January 2, 2003 and in 3-in-1 omnibus editions since December 1, 2009. VIZ Media released three boxed sets for the manga; the first including the first 23 volumes released on November 5, 2013, the second including volumes 24-46 released on November 4, 2014, and the third including volumes 47-70 released on October 4, 2016. The series has also been published in numerous amounts of languages worldwide including; Korean, Malay, Indonesian, Chinese, Thai, Vietnamese, German, French, Italian, Spanish, Portuguese, Swedish, Danish, Norwegian, Finnish, Polish, Turkish, and Russian.",
      authors: [
        {
          mal_id: 1881,
          type: 'people',
          name: 'Oda, Eiichiro',
          url: 'https://myanimelist.net/people/1881/Eiichiro_Oda',
        },
      ],
      serializations: [
        {
          mal_id: 83,
          type: 'manga',
          name: 'Shounen Jump (Weekly)',
          url: 'https://myanimelist.net/manga/magazine/83/Shounen_Jump_Weekly',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'manga',
          name: 'Action',
          url: 'https://myanimelist.net/manga/genre/1/Action',
        },
        {
          mal_id: 2,
          type: 'manga',
          name: 'Adventure',
          url: 'https://myanimelist.net/manga/genre/2/Adventure',
        },
        {
          mal_id: 10,
          type: 'manga',
          name: 'Fantasy',
          url: 'https://myanimelist.net/manga/genre/10/Fantasy',
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 27,
          type: 'manga',
          name: 'Shounen',
          url: 'https://myanimelist.net/manga/genre/27/Shounen',
        },
      ],
    },
    {
      mal_id: 1,
      url: 'https://myanimelist.net/manga/1/Monster',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/3/258224.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/3/258224t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/3/258224l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/3/258224.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/3/258224t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/3/258224l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Monster',
        },
        {
          type: 'Japanese',
          title: 'MONSTER',
        },
        {
          type: 'English',
          title: 'Monster',
        },
      ],
      title: 'Monster',
      title_english: 'Monster',
      title_japanese: 'MONSTER',
      title_synonyms: [],
      type: 'Manga',
      chapters: 162,
      volumes: 18,
      status: 'Finished',
      publishing: false,
      published: {
        from: '1994-12-05T00:00:00+00:00',
        to: '2001-12-20T00:00:00+00:00',
        prop: {
          from: {
            day: 5,
            month: 12,
            year: 1994,
          },
          to: {
            day: 20,
            month: 12,
            year: 2001,
          },
        },
        string: 'Dec 5, 1994 to Dec 20, 2001',
      },
      score: 9.15,
      scored: 9.15,
      scored_by: 85903,
      rank: 5,
      popularity: 29,
      members: 219043,
      favorites: 19130,
      synopsis:
        "Kenzou Tenma, a renowned Japanese neurosurgeon working in post-war Germany, faces a difficult choice: to operate on Johan Liebert, an orphan boy on the verge of death, or on the mayor of Düsseldorf. In the end, Tenma decides to gamble his reputation by saving Johan, effectively leaving the mayor for dead. As a consequence of his actions, hospital director Heinemann strips Tenma of his position, and Heinemann's daughter Eva breaks off their engagement. Disgraced and shunned by his colleagues, Tenma loses all hope of a successful career—that is, until the mysterious killing of Heinemann gives him another chance. Nine years later, Tenma is the head of the surgical department and close to becoming the director himself. Although all seems well for him at first, he soon becomes entangled in a chain of gruesome murders that have taken place throughout Germany. The culprit is a monster—the same one that Tenma saved on that fateful day nine years ago. [Written by MAL Rewrite]",
      background:
        'Monster won the Grand Prize at the 3rd annual Tezuka Osamu Cultural Prize in 1999, as well as the 46th Shogakukan Manga Award in the General category in 2000. The series was published in English by VIZ Media under the VIZ Signature imprint from February 21, 2006 to December 16, 2008, and again in 2-in-1 omnibuses (subtitled The Perfect Edition) from July 15, 2014 to July 19, 2016. The manga was also published in Brazilian Portuguese by Panini Comics/Planet Manga from June 2012 to April 2015, in Polish by Hanami from March 2014 to February 2017, in Spain by Planeta Cómic from June 16, 2009 to September 21, 2010, and in Argentina by LARP Editores.',
      authors: [
        {
          mal_id: 1867,
          type: 'people',
          name: 'Urasawa, Naoki',
          url: 'https://myanimelist.net/people/1867/Naoki_Urasawa',
        },
      ],
      serializations: [
        {
          mal_id: 1,
          type: 'manga',
          name: 'Big Comic Original',
          url: 'https://myanimelist.net/manga/magazine/1/Big_Comic_Original',
        },
      ],
      genres: [
        {
          mal_id: 46,
          type: 'manga',
          name: 'Award Winning',
          url: 'https://myanimelist.net/manga/genre/46/Award_Winning',
        },
        {
          mal_id: 8,
          type: 'manga',
          name: 'Drama',
          url: 'https://myanimelist.net/manga/genre/8/Drama',
        },
        {
          mal_id: 7,
          type: 'manga',
          name: 'Mystery',
          url: 'https://myanimelist.net/manga/genre/7/Mystery',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 50,
          type: 'manga',
          name: 'Adult Cast',
          url: 'https://myanimelist.net/manga/genre/50/Adult_Cast',
        },
        {
          mal_id: 40,
          type: 'manga',
          name: 'Psychological',
          url: 'https://myanimelist.net/manga/genre/40/Psychological',
        },
      ],
      demographics: [
        {
          mal_id: 41,
          type: 'manga',
          name: 'Seinen',
          url: 'https://myanimelist.net/manga/genre/41/Seinen',
        },
      ],
    },
    {
      mal_id: 51,
      url: 'https://myanimelist.net/manga/51/Slam_Dunk',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/258749.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/258749t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/258749l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/258749.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/258749t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/258749l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Slam Dunk',
        },
        {
          type: 'Japanese',
          title: 'SLAM DUNK',
        },
        {
          type: 'English',
          title: 'Slam Dunk',
        },
      ],
      title: 'Slam Dunk',
      title_english: 'Slam Dunk',
      title_japanese: 'SLAM DUNK',
      title_synonyms: [],
      type: 'Manga',
      chapters: 276,
      volumes: 31,
      status: 'Finished',
      publishing: false,
      published: {
        from: '1990-09-18T00:00:00+00:00',
        to: '1996-06-04T00:00:00+00:00',
        prop: {
          from: {
            day: 18,
            month: 9,
            year: 1990,
          },
          to: {
            day: 4,
            month: 6,
            year: 1996,
          },
        },
        string: 'Sep 18, 1990 to Jun 4, 1996',
      },
      score: 9.07,
      scored: 9.07,
      scored_by: 67883,
      rank: 6,
      popularity: 59,
      members: 151320,
      favorites: 14329,
      synopsis:
        'Hanamichi Sakuragi, a tall, boisterous teenager with flame-red hair and physical strength beyond his years, is eager to put an end to his rejection streak of 50 and finally score a girlfriend as he begins his first year of Shohoku High. However, his reputation for delinquency and destructiveness precedes him, and most of his fellow students subsequently avoid him like the plague. As his first day of school ends, he is left with two strong thoughts: "I hate basketball" and "I need a girlfriend." Haruko Akagi, ignorant of Hanamichi\'s history of misbehavior, notices his immense height and unwittingly approaches him, asking whether or not he likes basketball. Overcome by the fact that a girl is speaking to him, the red-haired giant blurts out a yes despite his true feelings. At the gym, Haruko asks if he can do a slam dunk. Though a complete novice, Hanamachi palms the ball and makes the leap...but overshoots, slamming his head into the backboard. Amazed by his near-inhuman physical abilities, Haruko quickly notifies the school\'s basketball captain of his feat. With this, Hanamichi is unexpectedly thrust into a world of competition for a girl he barely knows, but he soon discovers that there is perhaps more to basketball than he once thought. [Written by MAL Rewrite]',
      background:
        "Slam Dunk was awarded the 40th Shogakukan Manga Award for best shounen manga in 1994. In a 2006 poll for the 10th Japan Media Arts Festival, the series was voted by Japanese fans as the #1 manga series of all time. With over 120 million copies sold as of 2012, it is one of the most successful manga series to date. Its wide success led to a large increase in the popularity of basketball in Japanese youth. In 2010, Takehiko Inoue received special commendations from the Japan Basketball Association for popularizing basketball in Japan. The series was published in English by Gutsoon! Entertainment under the Raijin Comics Imprint for five volumes from July 2, 2003 to May 5, 2004. After Gutsoon's shutdown, publishing rights to Slam Dunk were purchased by VIZ Media who then republished the series under the Shonen Jump imprint from September 2, 2008 to December 3, 2013. It was published in Spanish by Ivrea España from February 2003 to September 2005 and republished in Kanzenban from January 2010 to May 2016.",
      authors: [
        {
          mal_id: 1911,
          type: 'people',
          name: 'Inoue, Takehiko',
          url: 'https://myanimelist.net/people/1911/Takehiko_Inoue',
        },
      ],
      serializations: [
        {
          mal_id: 83,
          type: 'manga',
          name: 'Shounen Jump (Weekly)',
          url: 'https://myanimelist.net/manga/magazine/83/Shounen_Jump_Weekly',
        },
      ],
      genres: [
        {
          mal_id: 46,
          type: 'manga',
          name: 'Award Winning',
          url: 'https://myanimelist.net/manga/genre/46/Award_Winning',
        },
        {
          mal_id: 30,
          type: 'manga',
          name: 'Sports',
          url: 'https://myanimelist.net/manga/genre/30/Sports',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 23,
          type: 'manga',
          name: 'School',
          url: 'https://myanimelist.net/manga/genre/23/School',
        },
        {
          mal_id: 78,
          type: 'manga',
          name: 'Team Sports',
          url: 'https://myanimelist.net/manga/genre/78/Team_Sports',
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: 'manga',
          name: 'Shounen',
          url: 'https://myanimelist.net/manga/genre/27/Shounen',
        },
      ],
    },
    {
      mal_id: 25,
      url: 'https://myanimelist.net/manga/25/Fullmetal_Alchemist',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/3/243675.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/3/243675t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/3/243675l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/3/243675.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/3/243675t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/3/243675l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Fullmetal Alchemist',
        },
        {
          type: 'Synonym',
          title: 'Full Metal Alchemist',
        },
        {
          type: 'Synonym',
          title: 'Hagane no Renkinjutsushi',
        },
        {
          type: 'Synonym',
          title: 'FMA',
        },
        {
          type: 'Synonym',
          title: 'HagaRen',
        },
        {
          type: 'Synonym',
          title: 'Fullmetal Alchemist Gaiden',
        },
        {
          type: 'Synonym',
          title: 'Full Metal Alchemist',
        },
        {
          type: 'Synonym',
          title: 'Hagane no Renkinjutsushi',
        },
        {
          type: 'Synonym',
          title: 'FMA',
        },
        {
          type: 'Synonym',
          title: 'HagaRen',
        },
        {
          type: 'Synonym',
          title: 'Fullmetal Alchemist Gaiden',
        },
        {
          type: 'Japanese',
          title: '鋼の錬金術師',
        },
        {
          type: 'English',
          title: 'Fullmetal Alchemist',
        },
      ],
      title: 'Fullmetal Alchemist',
      title_english: 'Fullmetal Alchemist',
      title_japanese: '鋼の錬金術師',
      title_synonyms: [
        'Full Metal Alchemist',
        'Hagane no Renkinjutsushi',
        'FMA',
        'HagaRen',
        'Fullmetal Alchemist Gaiden',
      ],
      type: 'Manga',
      chapters: 116,
      volumes: 27,
      status: 'Finished',
      publishing: false,
      published: {
        from: '2001-07-12T00:00:00+00:00',
        to: '2010-09-11T00:00:00+00:00',
        prop: {
          from: {
            day: 12,
            month: 7,
            year: 2001,
          },
          to: {
            day: 11,
            month: 9,
            year: 2010,
          },
        },
        string: 'Jul 12, 2001 to Sep 11, 2010',
      },
      score: 9.04,
      scored: 9.04,
      scored_by: 150681,
      rank: 7,
      popularity: 18,
      members: 278967,
      favorites: 29352,
      synopsis:
        "Alchemists are knowledgeable and naturally talented individuals who can manipulate and modify matter due to their art. Yet despite the wide range of possibilities, alchemy is not as all-powerful as most would believe. Human transmutation is strictly forbidden, and whoever attempts it risks severe consequences. Even so, siblings Edward and Alphonse Elric decide to ignore this great taboo and bring their mother back to life. Unfortunately, not only do they fail in resurrecting her, they also pay an extremely high price for their arrogance: Edward loses his left leg and Alphonse his entire body. Furthermore, Edward also gives up his right arm in order to seal his brother's soul into a suit of armor. Years later, the young alchemists travel across the country looking for the Philosopher's Stone, in the hopes of recovering their old bodies with its power. However, their quest for the fated stone also leads them to unravel far darker secrets than they could ever imagine. [Written by MAL Rewrite]",
      background:
        "Hagane no Renkinjutsushi won the 49th Shogakukan Manga Award for the shounen demographic in 2004. Hiromu Arakawa also won the 15th Tezuka Osamu Cultural Prize in the New Artist Prize category for the series in 2011. As of 2015, over 64 million copies of the series have been sold worldwide, making it one of Square Enix's most successful publications, according to Nielsen Bookscan. A live-action film is in development by Warner Bros. Japan and is scheduled for release in Winter 2017. The series was published in English as Fullmetal Alchemist by VIZ Media from May 3, 2005 to December 20, 2011, and in eBook format by Yen Press on April 15, 2014. A 3-in-1 omnibus edition was released by VIZ from June 7, 2011 to November 11, 2014 as well as a complete box set in November 1, 2011 (which included the novel Fullmetal Alchemist: The Ties That Bind). The manga was also published in Italian by Panini Comics under the Planet Manga imprint from July 13, 2006 to September 3, 2011, in Polish by J.P. Fantastica from January 2006 to to April 2012, in Brazilian Portuguese by Jbc from February 2007 to April 2011 and in Spanish by Ivrea Argentina starting December 12, 2016.",
      authors: [
        {
          mal_id: 1874,
          type: 'people',
          name: 'Arakawa, Hiromu',
          url: 'https://myanimelist.net/people/1874/Hiromu_Arakawa',
        },
      ],
      serializations: [
        {
          mal_id: 13,
          type: 'manga',
          name: 'Shounen Gangan',
          url: 'https://myanimelist.net/manga/magazine/13/Shounen_Gangan',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'manga',
          name: 'Action',
          url: 'https://myanimelist.net/manga/genre/1/Action',
        },
        {
          mal_id: 2,
          type: 'manga',
          name: 'Adventure',
          url: 'https://myanimelist.net/manga/genre/2/Adventure',
        },
        {
          mal_id: 46,
          type: 'manga',
          name: 'Award Winning',
          url: 'https://myanimelist.net/manga/genre/46/Award_Winning',
        },
        {
          mal_id: 8,
          type: 'manga',
          name: 'Drama',
          url: 'https://myanimelist.net/manga/genre/8/Drama',
        },
        {
          mal_id: 10,
          type: 'manga',
          name: 'Fantasy',
          url: 'https://myanimelist.net/manga/genre/10/Fantasy',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 38,
          type: 'manga',
          name: 'Military',
          url: 'https://myanimelist.net/manga/genre/38/Military',
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: 'manga',
          name: 'Shounen',
          url: 'https://myanimelist.net/manga/genre/27/Shounen',
        },
      ],
    },
    {
      mal_id: 642,
      url: 'https://myanimelist.net/manga/642/Vinland_Saga',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/188925.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/188925t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/188925l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/188925.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/188925t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/188925l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Vinland Saga',
        },
        {
          type: 'Japanese',
          title: 'ヴィンランド・サガ',
        },
        {
          type: 'English',
          title: 'Vinland Saga',
        },
      ],
      title: 'Vinland Saga',
      title_english: 'Vinland Saga',
      title_japanese: 'ヴィンランド・サガ',
      title_synonyms: [],
      type: 'Manga',
      chapters: null,
      volumes: null,
      status: 'Publishing',
      publishing: true,
      published: {
        from: '2005-04-13T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 13,
            month: 4,
            year: 2005,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Apr 13, 2005 to ?',
      },
      score: 9.03,
      scored: 9.03,
      scored_by: 111568,
      rank: 8,
      popularity: 20,
      members: 266949,
      favorites: 28960,
      synopsis:
        "Thorfinn, son of one of the Vikings' greatest warriors, is among the finest fighters in the merry band of mercenaries run by the cunning Askeladd, an impressive feat for a person his age. However, Thorfinn is not part of the group for the plunder it entails—instead, for having caused his family great tragedy, the boy has vowed to kill Askeladd in a fair duel. Not yet skilled enough to defeat him, but unable to abandon his vengeance, Thorfinn spends his boyhood with the mercenary crew, honing his skills on the battlefield among the war-loving Danes, where killing is just another pleasure of life. One day, when Askeladd receives word that Danish prince Canute has been taken hostage, he hatches an ambitious plot—one that will decide the next King of England and drastically alter the lives of Thorfinn, Canute, and himself. Set in 11th-century Europe, Vinland Saga tells a bloody epic in an era where violence, madness, and injustice are inescapable, providing a paradise for the battle-crazed and utter hell for the rest who live in it. [Written by MAL Rewrite]",
      background:
        "Vinland Saga won the 13th Japan Media Arts Award Grand Prize in the Manga division and the 36th Kodansha Manga Award for Best General Manga (which mangaka Makoto Yukimura accepted in full viking gear). An animated crossover between Vinland Saga and Ponkotsu Quest titled Ponkotsuland Saga was released on October 24, 2015. The series has been published in English by Kodansha Comics USA in 2-in-1 hardcover omnibuses since October 14, 2013. The release includes Makoto Yukimura's Sayonara ga Chikai no de (For Our Farewell Is Near) spread across the first five volumes. It is also published in Brazilian Portuguese by Panini Comics since February 2014; in Spanish by Planeta Cómic since October 21, 2014; and in Polish by Hanami since January 2017.",
      authors: [
        {
          mal_id: 2034,
          type: 'people',
          name: 'Yukimura, Makoto',
          url: 'https://myanimelist.net/people/2034/Makoto_Yukimura',
        },
      ],
      serializations: [
        {
          mal_id: 4,
          type: 'manga',
          name: 'Afternoon',
          url: 'https://myanimelist.net/manga/magazine/4/Afternoon',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'manga',
          name: 'Action',
          url: 'https://myanimelist.net/manga/genre/1/Action',
        },
        {
          mal_id: 2,
          type: 'manga',
          name: 'Adventure',
          url: 'https://myanimelist.net/manga/genre/2/Adventure',
        },
        {
          mal_id: 46,
          type: 'manga',
          name: 'Award Winning',
          url: 'https://myanimelist.net/manga/genre/46/Award_Winning',
        },
        {
          mal_id: 8,
          type: 'manga',
          name: 'Drama',
          url: 'https://myanimelist.net/manga/genre/8/Drama',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 13,
          type: 'manga',
          name: 'Historical',
          url: 'https://myanimelist.net/manga/genre/13/Historical',
        },
      ],
      demographics: [
        {
          mal_id: 41,
          type: 'manga',
          name: 'Seinen',
          url: 'https://myanimelist.net/manga/genre/41/Seinen',
        },
      ],
    },
    {
      mal_id: 70345,
      url: 'https://myanimelist.net/manga/70345/Grand_Blue',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/166124.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/166124t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/166124l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/166124.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/166124t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/166124l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Grand Blue',
        },
        {
          type: 'Japanese',
          title: 'ぐらんぶる',
        },
        {
          type: 'English',
          title: 'Grand Blue Dreaming',
        },
      ],
      title: 'Grand Blue',
      title_english: 'Grand Blue Dreaming',
      title_japanese: 'ぐらんぶる',
      title_synonyms: [],
      type: 'Manga',
      chapters: null,
      volumes: null,
      status: 'Publishing',
      publishing: true,
      published: {
        from: '2014-04-07T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 7,
            month: 4,
            year: 2014,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Apr 7, 2014 to ?',
      },
      score: 9.03,
      scored: 9.03,
      scored_by: 61439,
      rank: 9,
      popularity: 49,
      members: 162842,
      favorites: 16406,
      synopsis:
        "Among the seaside town of Izu's ocean waves and rays of shining sun, Iori Kitahara is just beginning his freshman year at Izu University. As he moves into his uncle's scuba diving shop, Grand Blue, he eagerly anticipates his dream college life, filled with beautiful girls and good friends. But things don't exactly go according to plan. Upon entering the shop, he encounters a group of rowdy, naked upperclassmen, who immediately coerce him into participating in their alcoholic activities. Though unwilling at first, Iori quickly gives in and becomes the heart and soul of the party. Unfortunately, this earns him the scorn of his cousin, Chisa Kotegawa, who walks in at precisely the wrong time. Undeterred, Iori still vows to realize his ideal college life, but will things go according to plan this time, or will his situation take yet another dive? [Written by MAL Rewrite]",
      background:
        'Grand Blue has been published digitally in English as Grand Blue Dreaming by Kodansha Comics USA since September 12, 2017. It has also been published in French by Meian since February 24, 2021.',
      authors: [
        {
          mal_id: 7108,
          type: 'people',
          name: 'Inoue, Kenji',
          url: 'https://myanimelist.net/people/7108/Kenji_Inoue',
        },
        {
          mal_id: 16441,
          type: 'people',
          name: 'Yoshioka, Kimitake',
          url: 'https://myanimelist.net/people/16441/Kimitake_Yoshioka',
        },
      ],
      serializations: [
        {
          mal_id: 316,
          type: 'manga',
          name: 'good! Afternoon',
          url: 'https://myanimelist.net/manga/magazine/316/good_Afternoon',
        },
      ],
      genres: [
        {
          mal_id: 4,
          type: 'manga',
          name: 'Comedy',
          url: 'https://myanimelist.net/manga/genre/4/Comedy',
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 41,
          type: 'manga',
          name: 'Seinen',
          url: 'https://myanimelist.net/manga/genre/41/Seinen',
        },
      ],
    },
    {
      mal_id: 4632,
      url: 'https://myanimelist.net/manga/4632/Oyasumi_Punpun',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/3/266834.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/3/266834t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/3/266834l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/3/266834.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/3/266834t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/3/266834l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Oyasumi Punpun',
        },
        {
          type: 'Japanese',
          title: 'おやすみプンプン',
        },
        {
          type: 'English',
          title: 'Goodnight Punpun',
        },
        {
          type: 'German',
          title: 'Gute Nacht, Punpun',
        },
        {
          type: 'Spanish',
          title: 'Buenas noches, Punpun',
        },
        {
          type: 'French',
          title: 'Bonne nuit Punpun',
        },
      ],
      title: 'Oyasumi Punpun',
      title_english: 'Goodnight Punpun',
      title_japanese: 'おやすみプンプン',
      title_synonyms: [],
      type: 'Manga',
      chapters: 147,
      volumes: 13,
      status: 'Finished',
      publishing: false,
      published: {
        from: '2007-03-15T00:00:00+00:00',
        to: '2013-11-02T00:00:00+00:00',
        prop: {
          from: {
            day: 15,
            month: 3,
            year: 2007,
          },
          to: {
            day: 2,
            month: 11,
            year: 2013,
          },
        },
        string: 'Mar 15, 2007 to Nov 2, 2013',
      },
      score: 9.02,
      scored: 9.02,
      scored_by: 161101,
      rank: 10,
      popularity: 9,
      members: 398375,
      favorites: 47740,
      synopsis:
        "Punpun Onodera is a normal 11-year-old boy living in Japan. Hopelessly idealistic and romantic, Punpun begins to see his life take a subtle—though nonetheless startling—turn to the adult when he meets the new girl in his class, Aiko Tanaka. It is then that the quiet boy learns just how fickle maintaining a relationship can be, and the surmounting difficulties of transitioning from a naïve boyhood to a convoluted adulthood. When his father assaults his mother one night, Punpun realizes another thing: those whom he looked up to were not as impressive as he once thought. As his problems increase, Punpun's once shy demeanor turns into voluntary reclusiveness. Rather than curing him of his problems and conflicting emotions, this merely intensifies them, sending him down the dark path of maturity in this grim coming-of-age saga. [Written by MAL Rewrite]",
      background:
        'Oyasumi Punpun was originally serialized in Young Sunday, but moved to Big Comic Spirits on October 20, 2008 (47th issue). It received a Jury Recommendation at the 13th Japan Media Arts Festival Awards in 2009. The series was published in English as Goodnight Punpun by VIZ Media under the VIZ Signature imprint in 7 omnibus volumes from March 15, 2016 to September 19, 2017. It was also published in Spanish as Buenas noches, Punpun by Norma Editorial from October 29, 2015 to October 29, 2016; in Italian as Buonanotte, Punpun by Panini Comics from April 14, 2011 to July 31, 2014; and has been published by Editorial Ivrea in Argentina since July 21, 2017.',
      authors: [
        {
          mal_id: 2836,
          type: 'people',
          name: 'Asano, Inio',
          url: 'https://myanimelist.net/people/2836/Inio_Asano',
        },
      ],
      serializations: [
        {
          mal_id: 3,
          type: 'manga',
          name: 'Big Comic Spirits',
          url: 'https://myanimelist.net/manga/magazine/3/Big_Comic_Spirits',
        },
      ],
      genres: [
        {
          mal_id: 8,
          type: 'manga',
          name: 'Drama',
          url: 'https://myanimelist.net/manga/genre/8/Drama',
        },
        {
          mal_id: 36,
          type: 'manga',
          name: 'Slice of Life',
          url: 'https://myanimelist.net/manga/genre/36/Slice_of_Life',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 40,
          type: 'manga',
          name: 'Psychological',
          url: 'https://myanimelist.net/manga/genre/40/Psychological',
        },
      ],
      demographics: [
        {
          mal_id: 41,
          type: 'manga',
          name: 'Seinen',
          url: 'https://myanimelist.net/manga/genre/41/Seinen',
        },
      ],
    },
    {
      mal_id: 16765,
      url: 'https://myanimelist.net/manga/16765/Kingdom',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/171872.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/171872t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/171872l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/171872.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/171872t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/171872l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Kingdom',
        },
        {
          type: 'Japanese',
          title: 'キングダム',
        },
      ],
      title: 'Kingdom',
      title_english: null,
      title_japanese: 'キングダム',
      title_synonyms: [],
      type: 'Manga',
      chapters: null,
      volumes: null,
      status: 'Publishing',
      publishing: true,
      published: {
        from: '2006-01-26T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 26,
            month: 1,
            year: 2006,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Jan 26, 2006 to ?',
      },
      score: 8.99,
      scored: 8.99,
      scored_by: 56260,
      rank: 11,
      popularity: 55,
      members: 155435,
      favorites: 13867,
      synopsis:
        "During the Warring States period in China, Xin and Piao are two brother-like youngsters who dream of becoming Great Generals, despite their low status as orphaned slaves. One day, they encounter a man of nobility, who gives Piao an opportunity to undertake an important duty within the state of Qin's royal palace. Parting ways, Xin and Piao promise each other to one day become the greatest generals in the world. However, after a fierce coup d'état occurs in the palace, Xin meets with a dying Piao, whose last words spur him into action and lead him to encounter the young and soon-to-be king of Qin, Zheng Ying. Although initially on bad terms, Xin and Zheng become comrades and start on a path filled with trials and bloodshed. Zheng's objective is to bring all the warring states under Qin, and Xin seeks to climb to the very top of the army ranks. Against a backdrop of constant tactical battle between states and great political unrest, both outside and within the palace, the two endeavor towards their monumental ambitions that will change history forever. [Written by MAL Rewrite]",
      background:
        'In 2013, Kingdom was awarded the 17th Annual Tezuka Osamu Cultural Grand Prize. As of April 2017, the series has sold 30 million copies. On December 12, 2012 the series won a Guinness World Record for manga written by the most people. The record was made possible due to its "Social Kingdom" Campaign where artists, fans, and voice actors redrew the entire 26th volume. Each of them picked 1 frame and redrew it and the top 100 would be given a special edition of the manga. (One Piece), (Naruto), (JoJo no Kimyou na Bouken) and many others were among the participants.',
      authors: [
        {
          mal_id: 14715,
          type: 'people',
          name: 'Hara, Yasuhisa',
          url: 'https://myanimelist.net/people/14715/Yasuhisa_Hara',
        },
      ],
      serializations: [
        {
          mal_id: 87,
          type: 'manga',
          name: 'Young Jump',
          url: 'https://myanimelist.net/manga/magazine/87/Young_Jump',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'manga',
          name: 'Action',
          url: 'https://myanimelist.net/manga/genre/1/Action',
        },
        {
          mal_id: 46,
          type: 'manga',
          name: 'Award Winning',
          url: 'https://myanimelist.net/manga/genre/46/Award_Winning',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 13,
          type: 'manga',
          name: 'Historical',
          url: 'https://myanimelist.net/manga/genre/13/Historical',
        },
        {
          mal_id: 38,
          type: 'manga',
          name: 'Military',
          url: 'https://myanimelist.net/manga/genre/38/Military',
        },
      ],
      demographics: [
        {
          mal_id: 41,
          type: 'manga',
          name: 'Seinen',
          url: 'https://myanimelist.net/manga/genre/41/Seinen',
        },
      ],
    },
    {
      mal_id: 44489,
      url: 'https://myanimelist.net/manga/44489/Houseki_no_Kuni',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/1/115443.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/1/115443t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/1/115443l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/1/115443.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/1/115443t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/1/115443l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Houseki no Kuni',
        },
        {
          type: 'Japanese',
          title: '宝石の国',
        },
        {
          type: 'English',
          title: 'Land of the Lustrous',
        },
        {
          type: 'German',
          title: 'Das Land der Juwelen',
        },
        {
          type: 'Spanish',
          title: 'La tierra de las gemas',
        },
        {
          type: 'French',
          title: "L'Ère des Cristaux",
        },
      ],
      title: 'Houseki no Kuni',
      title_english: 'Land of the Lustrous',
      title_japanese: '宝石の国',
      title_synonyms: [],
      type: 'Manga',
      chapters: null,
      volumes: null,
      status: 'Publishing',
      publishing: true,
      published: {
        from: '2012-10-25T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 25,
            month: 10,
            year: 2012,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Oct 25, 2012 to ?',
      },
      score: 8.96,
      scored: 8.96,
      scored_by: 34940,
      rank: 12,
      popularity: 100,
      members: 111593,
      favorites: 12533,
      synopsis:
        'Long ago, Earth was struck by six meteorites, creating six moons and leaving a lone island in their wake. Those who could not make it to the island sank to the bottom of the ocean, where, over time, they slowly turned to crystal. As countless millennia passed, 28 of these crystallized lifeforms, known as the Lustrous, rose from the depths and resided on the island. Led by the wise Kongou-sensei, they must defend themselves against the seemingly infinite number of Lunarians, inhabitants of the moons who seek to harvest their valuable bodies for crafting weapons and jewelry. Houseki no Kuni centers around Phosphophyllite, a young gem about to turn three hundred years old. Clumsy, extremely fragile, and having no visible talent, they are one of the weakest gems around, unable to help in the fight against the Lunarians in any meaningful way. But as the battle with the otherworldly invaders rages on, they soon learn that power comes at a cost that no one should have to pay. [Written by MAL Rewrite]',
      background:
        'In 2015, Houseki no Kuni ranked at tenth on the Kono Manga ga Sugoi! rankings in the male readers category. The series has been published in English as Land of the Lustrous by Kodansha Comics USA since June 27, 2017.',
      authors: [
        {
          mal_id: 16515,
          type: 'people',
          name: 'Ichikawa, Haruko',
          url: 'https://myanimelist.net/people/16515/Haruko_Ichikawa',
        },
      ],
      serializations: [
        {
          mal_id: 4,
          type: 'manga',
          name: 'Afternoon',
          url: 'https://myanimelist.net/manga/magazine/4/Afternoon',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'manga',
          name: 'Action',
          url: 'https://myanimelist.net/manga/genre/1/Action',
        },
        {
          mal_id: 8,
          type: 'manga',
          name: 'Drama',
          url: 'https://myanimelist.net/manga/genre/8/Drama',
        },
        {
          mal_id: 10,
          type: 'manga',
          name: 'Fantasy',
          url: 'https://myanimelist.net/manga/genre/10/Fantasy',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 51,
          type: 'manga',
          name: 'Anthropomorphic',
          url: 'https://myanimelist.net/manga/genre/51/Anthropomorphic',
        },
      ],
      demographics: [
        {
          mal_id: 41,
          type: 'manga',
          name: 'Seinen',
          url: 'https://myanimelist.net/manga/genre/41/Seinen',
        },
      ],
    },
    {
      mal_id: 3,
      url: 'https://myanimelist.net/manga/3/20th_Century_Boys',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/5/260006.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/5/260006t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/5/260006l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/5/260006.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/5/260006t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/5/260006l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: '20th Century Boys',
        },
        {
          type: 'Synonym',
          title: '20 Seiki Shounen',
        },
        {
          type: 'Synonym',
          title: 'Nijuu Seiki Shounen',
        },
        {
          type: 'Synonym',
          title: 'Nijuusseiki Shounen',
        },
        {
          type: 'Synonym',
          title: '20thCB',
        },
        {
          type: 'Synonym',
          title: '20 Seiki Shounen',
        },
        {
          type: 'Synonym',
          title: 'Nijuu Seiki Shounen',
        },
        {
          type: 'Synonym',
          title: 'Nijuusseiki Shounen',
        },
        {
          type: 'Synonym',
          title: '20thCB',
        },
        {
          type: 'Japanese',
          title: '20世紀少年',
        },
        {
          type: 'English',
          title: '20th Century Boys',
        },
      ],
      title: '20th Century Boys',
      title_english: '20th Century Boys',
      title_japanese: '20世紀少年',
      title_synonyms: [
        '20 Seiki Shounen',
        'Nijuu Seiki Shounen',
        'Nijuusseiki Shounen',
        '20thCB',
      ],
      type: 'Manga',
      chapters: 249,
      volumes: 22,
      status: 'Finished',
      publishing: false,
      published: {
        from: '1999-09-27T00:00:00+00:00',
        to: '2006-04-24T00:00:00+00:00',
        prop: {
          from: {
            day: 27,
            month: 9,
            year: 1999,
          },
          to: {
            day: 24,
            month: 4,
            year: 2006,
          },
        },
        string: 'Sep 27, 1999 to Apr 24, 2006',
      },
      score: 8.95,
      scored: 8.95,
      scored_by: 77462,
      rank: 13,
      popularity: 28,
      members: 224948,
      favorites: 17746,
      synopsis:
        'As the 20th century approaches its end, people all over the world are anxious that the world is changing. And probably not for the better. Kenji Endo is a normal convenience store manager who\'s just trying to get by. But when he learns that one of his old friends going by the name "Donkey" has suddenly committed suicide, and that a new cult led by a figure known as "Friend" is becoming more notorious, Kenji starts to feel that something isn\'t right. With a few key clues left behind by his deceased friend, Kenji realizes that this cult is much more than he ever thought it would be—not only is this mysterious organization directly targeting him and his childhood friends, but the whole world also faces a grave danger that only the friends have the key to stop. Kenji\'s simple life of barely making ends meet is flipped upside down when he reunites with his childhood friends, and together they must figure out the truth of how their past is connected to the cult, as the turn of the century could mean the possible end of the world. [Written by MAL Rewrite]',
      background:
        "20th Century Boys won the Kodansha Manga Award in the general category in 2001, an Excellence Prize at the Japan Media Arts Festival in 2002, and the Shogakukan Manga Award in the general category in 2003. The series' combined storyline won the Grand Prize at the 37th Japan Cartoonist Awards on May 9, 2008. VIZ Media published the series in English under the VIZ Signature imprint from February 17, 2009 to September 18, 2012. VIZ Media licensed the series in 2005; however, at Urasawa's request, it was rescheduled for release after Monster finished its English publication due to a change in art style over time. The series has also been published in Brazilian Portuguese by Panini Comics/Planet Manga since September 2012. The series was adapted into a trilogy of live-action films which released in Japan between August 30, 2008 and August 29, 2009.",
      authors: [
        {
          mal_id: 1867,
          type: 'people',
          name: 'Urasawa, Naoki',
          url: 'https://myanimelist.net/people/1867/Naoki_Urasawa',
        },
      ],
      serializations: [
        {
          mal_id: 3,
          type: 'manga',
          name: 'Big Comic Spirits',
          url: 'https://myanimelist.net/manga/magazine/3/Big_Comic_Spirits',
        },
      ],
      genres: [
        {
          mal_id: 46,
          type: 'manga',
          name: 'Award Winning',
          url: 'https://myanimelist.net/manga/genre/46/Award_Winning',
        },
        {
          mal_id: 8,
          type: 'manga',
          name: 'Drama',
          url: 'https://myanimelist.net/manga/genre/8/Drama',
        },
        {
          mal_id: 7,
          type: 'manga',
          name: 'Mystery',
          url: 'https://myanimelist.net/manga/genre/7/Mystery',
        },
        {
          mal_id: 24,
          type: 'manga',
          name: 'Sci-Fi',
          url: 'https://myanimelist.net/manga/genre/24/Sci-Fi',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 13,
          type: 'manga',
          name: 'Historical',
          url: 'https://myanimelist.net/manga/genre/13/Historical',
        },
        {
          mal_id: 40,
          type: 'manga',
          name: 'Psychological',
          url: 'https://myanimelist.net/manga/genre/40/Psychological',
        },
      ],
      demographics: [
        {
          mal_id: 41,
          type: 'manga',
          name: 'Seinen',
          url: 'https://myanimelist.net/manga/genre/41/Seinen',
        },
      ],
    },
    {
      mal_id: 1303,
      url: 'https://myanimelist.net/manga/1303/Ashita_no_Joe',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/1/268827.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/1/268827t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/1/268827l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/1/268827.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/1/268827t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/1/268827l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Ashita no Joe',
        },
        {
          type: 'Synonym',
          title: 'Rocky Joe',
        },
        {
          type: 'Synonym',
          title: "Tomorrow's Joe",
        },
        {
          type: 'Synonym',
          title: 'Rocky Joe',
        },
        {
          type: 'Synonym',
          title: "Tomorrow's Joe",
        },
        {
          type: 'Japanese',
          title: 'あしたのジョー',
        },
      ],
      title: 'Ashita no Joe',
      title_english: null,
      title_japanese: 'あしたのジョー',
      title_synonyms: ['Rocky Joe', "Tomorrow's Joe"],
      type: 'Manga',
      chapters: 171,
      volumes: 20,
      status: 'Finished',
      publishing: false,
      published: {
        from: '1968-01-01T00:00:00+00:00',
        to: '1973-05-13T00:00:00+00:00',
        prop: {
          from: {
            day: 1,
            month: 1,
            year: 1968,
          },
          to: {
            day: 13,
            month: 5,
            year: 1973,
          },
        },
        string: 'Jan 1, 1968 to May 13, 1973',
      },
      score: 8.94,
      scored: 8.94,
      scored_by: 15030,
      rank: 14,
      popularity: 320,
      members: 46890,
      favorites: 3888,
      synopsis:
        "Joe Yabuki has learned how to toughen up and stop trusting others after a troubling youth spent bouncing between orphanages and fending off bullies. After finally escaping the cycle of violent temporary homes, Joe adopts a delinquent lifestyle in the streets of San'ya, a slum in Tokyo. He makes his way through the world with his fists, picking fights with anyone he pleases. Danpei Tange, a washed-up and alcoholic former boxing coach, notices Joe's animalistic combat ability and attempts to mentor the wild teenager. Despite developing an explosive relationship, the two form a close bond and rely on each other to look after the other homeless children in San'ya. Unable to abandon his destructive habits, Joe is arrested for petty crimes. In jail, he meets and fights with lifelong friends and rivals, including the boxing prodigy Tooru Rikiishi. Continuously challenging Rikiishi to fights, Joe is knocked out time after time due to his savage brawling style failing in the face of Rikiishi's controlled boxing technique. But eventually, Joe stuns his rival with a knockout blow, earning Rikiishi's respect and the promise that they will one day meet again inside the professional ring. Finding a reason to live within boxing, Joe takes life head-on with a new purpose. As he rises through Japan's amateur and professional boxing scenes, he contends with painful loss and increasing injury. Joe's passion for fighting is all-consuming, and he grapples with the idea that a life without boxing may not be one worth living. [Written by MAL Rewrite]",
      background:
        'Ashita no Joe has sold over 20 million copies, was adapted to two anime series and films, as well as two live-action films in 1970 and 2011. both the titular character and series have become an incredibly influential part of Japanese pop-culture. The series was published in French by Glénat Editions and in Italian by Star Comics.',
      authors: [
        {
          mal_id: 4017,
          type: 'people',
          name: 'Kajiwara, Ikki',
          url: 'https://myanimelist.net/people/4017/Ikki_Kajiwara',
        },
        {
          mal_id: 6217,
          type: 'people',
          name: 'Chiba, Tetsuya',
          url: 'https://myanimelist.net/people/6217/Tetsuya_Chiba',
        },
      ],
      serializations: [
        {
          mal_id: 8,
          type: 'manga',
          name: 'Shounen Magazine (Weekly)',
          url: 'https://myanimelist.net/manga/magazine/8/Shounen_Magazine_Weekly',
        },
      ],
      genres: [
        {
          mal_id: 8,
          type: 'manga',
          name: 'Drama',
          url: 'https://myanimelist.net/manga/genre/8/Drama',
        },
        {
          mal_id: 36,
          type: 'manga',
          name: 'Slice of Life',
          url: 'https://myanimelist.net/manga/genre/36/Slice_of_Life',
        },
        {
          mal_id: 30,
          type: 'manga',
          name: 'Sports',
          url: 'https://myanimelist.net/manga/genre/30/Sports',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 54,
          type: 'manga',
          name: 'Combat Sports',
          url: 'https://myanimelist.net/manga/genre/54/Combat_Sports',
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: 'manga',
          name: 'Shounen',
          url: 'https://myanimelist.net/manga/genre/27/Shounen',
        },
      ],
    },
    {
      mal_id: 14893,
      url: 'https://myanimelist.net/manga/14893/Monogatari_Series__First_Season',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/279887.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/279887t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/279887l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/279887.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/279887t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/279887l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Monogatari Series: First Season',
        },
        {
          type: 'Synonym',
          title: 'Bakemonogatari',
        },
        {
          type: 'Synonym',
          title: 'Monster Tale',
        },
        {
          type: 'Synonym',
          title: 'Kizumonogatari',
        },
        {
          type: 'Synonym',
          title: 'Wound Tale',
        },
        {
          type: 'Synonym',
          title: 'Nisemonogatari',
        },
        {
          type: 'Synonym',
          title: 'Fake Tale',
        },
        {
          type: 'Synonym',
          title: 'Nekomonogatari: Kuro',
        },
        {
          type: 'Synonym',
          title: 'Nekomonogatari: Black',
        },
        {
          type: 'Synonym',
          title: 'Bakemonogatari',
        },
        {
          type: 'Synonym',
          title: 'Monster Tale',
        },
        {
          type: 'Synonym',
          title: 'Kizumonogatari',
        },
        {
          type: 'Synonym',
          title: 'Wound Tale',
        },
        {
          type: 'Synonym',
          title: 'Nisemonogatari',
        },
        {
          type: 'Synonym',
          title: 'Fake Tale',
        },
        {
          type: 'Synonym',
          title: 'Nekomonogatari: Kuro',
        },
        {
          type: 'Synonym',
          title: 'Nekomonogatari: Black',
        },
        {
          type: 'Japanese',
          title: '〈物語〉シリーズ ファーストシーズン',
        },
      ],
      title: 'Monogatari Series: First Season',
      title_english: null,
      title_japanese: '〈物語〉シリーズ ファーストシーズン',
      title_synonyms: [
        'Bakemonogatari',
        'Monster Tale',
        'Kizumonogatari',
        'Wound Tale',
        'Nisemonogatari',
        'Fake Tale',
        'Nekomonogatari: Kuro',
        'Nekomonogatari: Black',
      ],
      type: 'Light Novel',
      chapters: 107,
      volumes: 6,
      status: 'Finished',
      publishing: false,
      published: {
        from: '2006-11-01T00:00:00+00:00',
        to: '2010-07-28T00:00:00+00:00',
        prop: {
          from: {
            day: 1,
            month: 11,
            year: 2006,
          },
          to: {
            day: 28,
            month: 7,
            year: 2010,
          },
        },
        string: 'Nov 1, 2006 to Jul 28, 2010',
      },
      score: 8.93,
      scored: 8.93,
      scored_by: 15008,
      rank: 15,
      popularity: 268,
      members: 55488,
      favorites: 2969,
      synopsis:
        'This is a story, a "ghostory" of sorts, about scars that bond, monsters that haunt, and fakes that deceive. The story of Koyomi Araragi begins through a fateful encounter with the all-powerful, blonde-haired, "hot-blooded, iron-blooded, and cold-blooded" vampire, later introduced as Shinobu Oshino. Their tragic rendezvous results in the end of Araragi\'s life as a human and his subsequent rebirth as a vampire—a monster. However, this encounter is only the start of his meddlings with the supernatural. Koyomi\'s noble personality ultimately sees him getting further involved in the lives of others with supernatural afflictions. This is his desperate attempt at returning to a normal human life, in a paranormal world filled with nothing but tragedy, suffering, and inhumanity. [Written by MAL Rewrite] This entry includes the first season of the Monogatari Series.',
      background:
        'Monogatari Series: First Season was published in English by Vertical Inc: first with Kizumonogatari as Kizumonogatari: Wound Tale on December 15, 2015, Bakemonogatari as Bakemonogatari: Monster Tale in 3 volumes from December 20, 2016 to April 25, 2017, Nisemonogatari as Nisemonogatari: Fake Tale in 2 volumes from June 27 to August 29, and Nekomonogatari: Kuro as Nekomonogatari (Black): Cat Tale on November 28, 2017.',
      authors: [
        {
          mal_id: 5254,
          type: 'people',
          name: 'NISIO, ISIN',
          url: 'https://myanimelist.net/people/5254/ISIN_NISIO',
        },
        {
          mal_id: 8594,
          type: 'people',
          name: 'VOFAN',
          url: 'https://myanimelist.net/people/8594/VOFAN',
        },
      ],
      serializations: [
        {
          mal_id: 498,
          type: 'manga',
          name: 'Mephisto',
          url: 'https://myanimelist.net/manga/magazine/498/Mephisto',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'manga',
          name: 'Action',
          url: 'https://myanimelist.net/manga/genre/1/Action',
        },
        {
          mal_id: 4,
          type: 'manga',
          name: 'Comedy',
          url: 'https://myanimelist.net/manga/genre/4/Comedy',
        },
        {
          mal_id: 7,
          type: 'manga',
          name: 'Mystery',
          url: 'https://myanimelist.net/manga/genre/7/Mystery',
        },
        {
          mal_id: 22,
          type: 'manga',
          name: 'Romance',
          url: 'https://myanimelist.net/manga/genre/22/Romance',
        },
        {
          mal_id: 37,
          type: 'manga',
          name: 'Supernatural',
          url: 'https://myanimelist.net/manga/genre/37/Supernatural',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 32,
          type: 'manga',
          name: 'Vampire',
          url: 'https://myanimelist.net/manga/genre/32/Vampire',
        },
      ],
      demographics: [],
    },
    {
      mal_id: 90125,
      url: 'https://myanimelist.net/manga/90125/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/3/188896.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/3/188896t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/3/188896l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/3/188896.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/3/188896t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/3/188896l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
        },
        {
          type: 'Synonym',
          title:
            "Kaguya Wants to be Confessed To: The Geniuses' War of Love and Brains",
        },
        {
          type: 'Synonym',
          title:
            "Kaguya Wants to be Confessed To: The Geniuses' War of Love and Brains",
        },
        {
          type: 'Japanese',
          title: 'かぐや様は告らせたい～天才たちの恋愛頭脳戦～',
        },
        {
          type: 'English',
          title: 'Kaguya-sama: Love is War',
        },
        {
          type: 'German',
          title: 'Kaguya-sama: Love is War',
        },
        {
          type: 'Spanish',
          title: 'Kaguya-sama: Love is War',
        },
        {
          type: 'French',
          title: 'Kaguya-sama: Love is War',
        },
      ],
      title: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
      title_english: 'Kaguya-sama: Love is War',
      title_japanese: 'かぐや様は告らせたい～天才たちの恋愛頭脳戦～',
      title_synonyms: [
        "Kaguya Wants to be Confessed To: The Geniuses' War of Love and Brains",
      ],
      type: 'Manga',
      chapters: 281,
      volumes: 28,
      status: 'Finished',
      publishing: false,
      published: {
        from: '2015-05-19T00:00:00+00:00',
        to: '2022-11-02T00:00:00+00:00',
        prop: {
          from: {
            day: 19,
            month: 5,
            year: 2015,
          },
          to: {
            day: 2,
            month: 11,
            year: 2022,
          },
        },
        string: 'May 19, 2015 to Nov 2, 2022',
      },
      score: 8.92,
      scored: 8.92,
      scored_by: 117991,
      rank: 16,
      popularity: 25,
      members: 248477,
      favorites: 27526,
      synopsis:
        "Considered a genius due to having the highest grades in the country, Miyuki Shirogane leads the prestigious Shuchiin Academy's student council as its president, working alongside the beautiful and wealthy vice president Kaguya Shinomiya. The two are often regarded as the perfect couple by students despite them not being in any sort of romantic relationship. However, the truth is that after spending so much time together, the two have developed feelings for one another; unfortunately, neither is willing to confess, as doing so would be a sign of weakness. With their pride as elite students on the line, Miyuki and Kaguya embark on a quest to do whatever is necessary to get a confession out of the other. Through their daily antics, the battle of love begins! [Written by MAL Rewrite]",
      background:
        'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen has been published in English as Kaguya-sama: Love is War by VIZ Media under the Shonen Jump imprint since March 6, 2018.',
      authors: [
        {
          mal_id: 2139,
          type: 'people',
          name: 'Akasaka, Aka',
          url: 'https://myanimelist.net/people/2139/Aka_Akasaka',
        },
      ],
      serializations: [
        {
          mal_id: 87,
          type: 'manga',
          name: 'Young Jump',
          url: 'https://myanimelist.net/manga/magazine/87/Young_Jump',
        },
      ],
      genres: [
        {
          mal_id: 46,
          type: 'manga',
          name: 'Award Winning',
          url: 'https://myanimelist.net/manga/genre/46/Award_Winning',
        },
        {
          mal_id: 4,
          type: 'manga',
          name: 'Comedy',
          url: 'https://myanimelist.net/manga/genre/4/Comedy',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 75,
          type: 'manga',
          name: 'Romantic Subtext',
          url: 'https://myanimelist.net/manga/genre/75/Romantic_Subtext',
        },
        {
          mal_id: 23,
          type: 'manga',
          name: 'School',
          url: 'https://myanimelist.net/manga/genre/23/School',
        },
      ],
      demographics: [
        {
          mal_id: 41,
          type: 'manga',
          name: 'Seinen',
          url: 'https://myanimelist.net/manga/genre/41/Seinen',
        },
      ],
    },
    {
      mal_id: 126479,
      url: 'https://myanimelist.net/manga/126479/Mikkakan_no_Koufuku',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/3/248674.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/3/248674t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/3/248674l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/3/248674.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/3/248674t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/3/248674l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Mikkakan no Koufuku',
        },
        {
          type: 'Synonym',
          title: 'Jumyou wo Kaitotte Moratta. Ichinen ni Tsuki',
        },
        {
          type: 'Synonym',
          title: 'Ichimanen de.',
        },
        {
          type: 'Synonym',
          title: 'Jumyou wo Kaitotte Moratta. Ichinen ni Tsuki',
        },
        {
          type: 'Synonym',
          title: 'Ichimanen de.',
        },
        {
          type: 'Japanese',
          title: '三日間の幸福',
        },
        {
          type: 'English',
          title: 'Three Days of Happiness',
        },
      ],
      title: 'Mikkakan no Koufuku',
      title_english: 'Three Days of Happiness',
      title_japanese: '三日間の幸福',
      title_synonyms: [
        'Jumyou wo Kaitotte Moratta. Ichinen ni Tsuki',
        'Ichimanen de.',
      ],
      type: 'Novel',
      chapters: 15,
      volumes: 1,
      status: 'Finished',
      publishing: false,
      published: {
        from: '2013-12-25T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 25,
            month: 12,
            year: 2013,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Dec 25, 2013',
      },
      score: 8.92,
      scored: 8.92,
      scored_by: 6599,
      rank: 17,
      popularity: 760,
      members: 21394,
      favorites: 943,
      synopsis:
        "Kusunoki used to believe he was destined for great things. Ostracized as a child, he held on to a belief that a good life was waiting for him in the years ahead. Now approaching the age of twenty, he's a completely mediocre college student with no motivation, no dreams, and no money. After learning he can sell his remaining years—and just how little they're worth—he chooses to divest himself of all but his last three months. Has Kusunoki truly destroyed his last chance to find happiness...or has he somehow found it? (Source: Yen Press)",
      background:
        'Mikkakan no Koufuku began as a web novel posted on the message board 2channel under the title Jumyou wo Kaitotte Moratta. Ichinen ni Tsuki, Ichimanen de. (寿命を買い取ってもらった。一年につき、一万円で。). An expanded and modified version of the series was published in print by ASCII Media Works on December 25, 2013 under its Media Works Bunko label. The series was published in English as Three Days of Happiness by Yen Press under the Yen On imprint on October 20, 2020, in French by Editions Akata under the Young Novel imprint on March 28, 2019, in German by Egmont Manga under the Roman imprint on October 7, 2020, and in Spanish by Norma Editorial on May 14, 2021.',
      authors: [
        {
          mal_id: 41857,
          type: 'people',
          name: 'Miaki, Sugaru',
          url: 'https://myanimelist.net/people/41857/Sugaru_Miaki',
        },
      ],
      serializations: [],
      genres: [
        {
          mal_id: 8,
          type: 'manga',
          name: 'Drama',
          url: 'https://myanimelist.net/manga/genre/8/Drama',
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [],
    },
    {
      mal_id: 23751,
      url: 'https://myanimelist.net/manga/23751/Monogatari_Series__Second_Season',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/181553.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/181553t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/181553l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/181553.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/181553t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/181553l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Monogatari Series: Second Season',
        },
        {
          type: 'Synonym',
          title: 'Nekomonogatari: Shiro',
        },
        {
          type: 'Synonym',
          title: 'Kabukimonogatari',
        },
        {
          type: 'Synonym',
          title: 'Hanamonogatari',
        },
        {
          type: 'Synonym',
          title: 'Otorimonogatari',
        },
        {
          type: 'Synonym',
          title: 'Onimonogatari',
        },
        {
          type: 'Synonym',
          title: 'Koimonogatari',
        },
        {
          type: 'Synonym',
          title: 'Nekomonogatari: Shiro',
        },
        {
          type: 'Synonym',
          title: 'Kabukimonogatari',
        },
        {
          type: 'Synonym',
          title: 'Hanamonogatari',
        },
        {
          type: 'Synonym',
          title: 'Otorimonogatari',
        },
        {
          type: 'Synonym',
          title: 'Onimonogatari',
        },
        {
          type: 'Synonym',
          title: 'Koimonogatari',
        },
        {
          type: 'Japanese',
          title: '〈物語〉シリーズ セカンドシーズン',
        },
      ],
      title: 'Monogatari Series: Second Season',
      title_english: null,
      title_japanese: '〈物語〉シリーズ セカンドシーズン',
      title_synonyms: [
        'Nekomonogatari: Shiro',
        'Kabukimonogatari',
        'Hanamonogatari',
        'Otorimonogatari',
        'Onimonogatari',
        'Koimonogatari',
      ],
      type: 'Light Novel',
      chapters: 199,
      volumes: 6,
      status: 'Finished',
      publishing: false,
      published: {
        from: '2010-10-27T00:00:00+00:00',
        to: '2011-12-20T00:00:00+00:00',
        prop: {
          from: {
            day: 27,
            month: 10,
            year: 2010,
          },
          to: {
            day: 20,
            month: 12,
            year: 2011,
          },
        },
        string: 'Oct 27, 2010 to Dec 20, 2011',
      },
      score: 8.91,
      scored: 8.91,
      scored_by: 6269,
      rank: 18,
      popularity: 761,
      members: 21352,
      favorites: 685,
      synopsis:
        "This is a story. A story about choices and consequences, confessions resulting in love and rejection, and decisions leading to sacrifice and tragedy. Koyomi Araragi's decision to save a blonde vampire and meddle with the supernatural resulted in his death as a human and rebirth as a monster. But this was only one of the countless tragedies and choices that Koyomi would be faced with, and he is confronted with the fact that his seemingly unshakeable and hard-earned relationships do not last. As strange oddities continue to manifest in the world around him, he is faced with impossible choices—to sever his ties with those he loves, or eternally remain a part of the world of monsters and apparitions and watch the world crumble as a result. To accept or reject a confession, and sacrifice his all for the sake of others. However, both of these paths could lead to tragedy and farewells. This is a story. A story about Koyomi Araragi coming to realize the consequences of his choices. [Written by MAL Rewrite] This entry includes the second season of the Monogatari Series.",
      background:
        'The series was published in English by Vertical Inc: first with Nekomonogatari: Shiro as Nekomonogatari (White): Cat Tale on February 27, and Kabukimonogatari as Kabukimonogatari: Dandy Tale on May 29, 2018. Hanamonogatari, Otorimonogari, Onimonogatari, and Koimonogatari have also been licensed.',
      authors: [
        {
          mal_id: 5254,
          type: 'people',
          name: 'NISIO, ISIN',
          url: 'https://myanimelist.net/people/5254/ISIN_NISIO',
        },
        {
          mal_id: 8594,
          type: 'people',
          name: 'VOFAN',
          url: 'https://myanimelist.net/people/8594/VOFAN',
        },
      ],
      serializations: [],
      genres: [
        {
          mal_id: 4,
          type: 'manga',
          name: 'Comedy',
          url: 'https://myanimelist.net/manga/genre/4/Comedy',
        },
        {
          mal_id: 8,
          type: 'manga',
          name: 'Drama',
          url: 'https://myanimelist.net/manga/genre/8/Drama',
        },
        {
          mal_id: 7,
          type: 'manga',
          name: 'Mystery',
          url: 'https://myanimelist.net/manga/genre/7/Mystery',
        },
        {
          mal_id: 37,
          type: 'manga',
          name: 'Supernatural',
          url: 'https://myanimelist.net/manga/genre/37/Supernatural',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 32,
          type: 'manga',
          name: 'Vampire',
          url: 'https://myanimelist.net/manga/genre/32/Vampire',
        },
      ],
      demographics: [],
    },
    {
      mal_id: 657,
      url: 'https://myanimelist.net/manga/657/Real',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/115969.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/115969t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/115969l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/115969.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/115969t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/115969l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Real',
        },
        {
          type: 'Japanese',
          title: 'リアル',
        },
        {
          type: 'English',
          title: 'Real',
        },
      ],
      title: 'Real',
      title_english: 'Real',
      title_japanese: 'リアル',
      title_synonyms: [],
      type: 'Manga',
      chapters: null,
      volumes: null,
      status: 'Publishing',
      publishing: true,
      published: {
        from: '1999-10-28T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 28,
            month: 10,
            year: 1999,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Oct 28, 1999 to ?',
      },
      score: 8.91,
      scored: 8.91,
      scored_by: 17101,
      rank: 19,
      popularity: 179,
      members: 76282,
      favorites: 3303,
      synopsis:
        "Tomomi Nomiya, former captain of his high school's basketball team turned delinquent, decides to drop out of school after he is crushed by the guilt of ruining a young girl's life in a traffic accident. As he dedicates his free time to helping her, he stumbles upon Kiyoharu Togawa, a former sprinter who has lost the use of his right leg and now plays wheelchair basketball as an alternate outlet. After challenging Kiyoharu to a one-on-one game, Tomomi is completely defeated. Inspired by this encounter, he realizes that he can't let his love for basketball die so easily and decides that he will do what he can to help others while striving to become a professional player. Meanwhile, Hisanobu Takahashi, Tomomi's replacement as the high school's team captain, gets into an accident and finds himself permanently paralyzed below the waist. Real tells the touching tale of these three young men as they struggle to overcome their disabilities and inner conflicts in order to achieve their dreams while igniting a passion that will bring them together. [Written by MAL Rewrite]",
      background:
        'Real won an Excellence Prize for manga at the 5th Japan Media Arts Festival in 2001. The series has been published in English by VIZ Media under the VIZ Signature imprint since July 15, 2008.',
      authors: [
        {
          mal_id: 1911,
          type: 'people',
          name: 'Inoue, Takehiko',
          url: 'https://myanimelist.net/people/1911/Takehiko_Inoue',
        },
      ],
      serializations: [
        {
          mal_id: 87,
          type: 'manga',
          name: 'Young Jump',
          url: 'https://myanimelist.net/manga/magazine/87/Young_Jump',
        },
      ],
      genres: [
        {
          mal_id: 8,
          type: 'manga',
          name: 'Drama',
          url: 'https://myanimelist.net/manga/genre/8/Drama',
        },
        {
          mal_id: 30,
          type: 'manga',
          name: 'Sports',
          url: 'https://myanimelist.net/manga/genre/30/Sports',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 40,
          type: 'manga',
          name: 'Psychological',
          url: 'https://myanimelist.net/manga/genre/40/Psychological',
        },
        {
          mal_id: 78,
          type: 'manga',
          name: 'Team Sports',
          url: 'https://myanimelist.net/manga/genre/78/Team_Sports',
        },
      ],
      demographics: [
        {
          mal_id: 41,
          type: 'manga',
          name: 'Seinen',
          url: 'https://myanimelist.net/manga/genre/41/Seinen',
        },
      ],
    },
    {
      mal_id: 336,
      url: 'https://myanimelist.net/manga/336/GTO',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/172982.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/172982t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/172982l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/172982.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/172982t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/172982l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'GTO',
        },
        {
          type: 'Synonym',
          title: "GTO: Tomoko's Big Adventures",
        },
        {
          type: 'Synonym',
          title: "GTO: Tomoko's Big Adventures",
        },
        {
          type: 'Japanese',
          title: 'GTO',
        },
        {
          type: 'English',
          title: 'GTO: Great Teacher Onizuka',
        },
        {
          type: 'German',
          title: 'GTO. Great Teacher Onizuka',
        },
      ],
      title: 'GTO',
      title_english: 'GTO: Great Teacher Onizuka',
      title_japanese: 'GTO',
      title_synonyms: ["GTO: Tomoko's Big Adventures"],
      type: 'Manga',
      chapters: 208,
      volumes: 25,
      status: 'Finished',
      publishing: false,
      published: {
        from: '1996-12-11T00:00:00+00:00',
        to: '2002-01-30T00:00:00+00:00',
        prop: {
          from: {
            day: 11,
            month: 12,
            year: 1996,
          },
          to: {
            day: 30,
            month: 1,
            year: 2002,
          },
        },
        string: 'Dec 11, 1996 to Jan 30, 2002',
      },
      score: 8.89,
      scored: 8.89,
      scored_by: 61635,
      rank: 20,
      popularity: 53,
      members: 156200,
      favorites: 10734,
      synopsis:
        '22-year-old Eikichi Onizuka: pervert, former gang member... and teacher? Great Teacher Onizuka follows the incredible, though often ridiculous, antics of the titular teacher as he attempts to outwit and win over the cunning Class 3-4 that is determined to have him removed from the school. However, other obstacles present themselves throughout—including the frustrated, balding vice principal, Hiroshi Uchiyamada; old enemies from his biker days; and his own idiotic teaching methods. But Eikichi fights it all whilst trying to help his students, romance fellow teacher Azusa Fuyutsuki, and earn his self-proclaimed title. [Written by MAL Rewrite] Also contains the gaiden "GTO: Great Toroko Oppai♡" (Tomoko\'s Big Adventures).',
      background:
        'GTO was awarded the 22nd Kodansha Manga Award for Best Shounen Manga in 1998. The series was published physically in English as GTO: Great Teacher Onizuka by the now defunct Tokyopop from April 23, 2002 to August 9, 2005. Kodansha USA published the digital version of all 25 volume on February 1, 2022. Several live action adaptations of GTO were made. A 12-episode television drama directed by Masayuki Suzuki was broadcast from July 7 to September 22, 1998; it was followed by a film adaptation by the same director released on December 18, 1999. The theatrical version went on to become the 10th highest grossing Japanese film of 2000. A second drama adaptation directed by Imai Kazuhisa was broadcast from July 3 to September 11, 2012. A joint project between Japanese and Taiwanese productions created the dual language project, GTO in Taiwan, also directed by Imai Kazuhisa. The four-episode series was aired first in Taiwan from March 22 to April 12, 2014. These episodes aired in Japan at a later date. Another GTO drama was aired in 2014 directed by Ken Iizuka, eleven episodes were broadcast from July 8, to September 16.',
      authors: [
        {
          mal_id: 2318,
          type: 'people',
          name: 'Fujisawa, Tooru',
          url: 'https://myanimelist.net/people/2318/Tooru_Fujisawa',
        },
      ],
      serializations: [
        {
          mal_id: 8,
          type: 'manga',
          name: 'Shounen Magazine (Weekly)',
          url: 'https://myanimelist.net/manga/magazine/8/Shounen_Magazine_Weekly',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'manga',
          name: 'Action',
          url: 'https://myanimelist.net/manga/genre/1/Action',
        },
        {
          mal_id: 46,
          type: 'manga',
          name: 'Award Winning',
          url: 'https://myanimelist.net/manga/genre/46/Award_Winning',
        },
        {
          mal_id: 4,
          type: 'manga',
          name: 'Comedy',
          url: 'https://myanimelist.net/manga/genre/4/Comedy',
        },
        {
          mal_id: 8,
          type: 'manga',
          name: 'Drama',
          url: 'https://myanimelist.net/manga/genre/8/Drama',
        },
        {
          mal_id: 9,
          type: 'manga',
          name: 'Ecchi',
          url: 'https://myanimelist.net/manga/genre/9/Ecchi',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 55,
          type: 'manga',
          name: 'Delinquents',
          url: 'https://myanimelist.net/manga/genre/55/Delinquents',
        },
        {
          mal_id: 23,
          type: 'manga',
          name: 'School',
          url: 'https://myanimelist.net/manga/genre/23/School',
        },
        {
          mal_id: 48,
          type: 'manga',
          name: 'Workplace',
          url: 'https://myanimelist.net/manga/genre/48/Workplace',
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: 'manga',
          name: 'Shounen',
          url: 'https://myanimelist.net/manga/genre/27/Shounen',
        },
      ],
    },
    {
      mal_id: 1224,
      url: 'https://myanimelist.net/manga/1224/3-gatsu_no_Lion',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/52283.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/52283t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/52283l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/52283.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/52283t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/52283l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: '3-gatsu no Lion',
        },
        {
          type: 'Synonym',
          title: 'Sangatsu no Lion',
        },
        {
          type: 'Synonym',
          title: 'Lion of March',
        },
        {
          type: 'Synonym',
          title: 'Sangatsu no Lion',
        },
        {
          type: 'Synonym',
          title: 'Lion of March',
        },
        {
          type: 'Japanese',
          title: '3月のライオン',
        },
        {
          type: 'English',
          title: 'March Comes in Like a Lion',
        },
        {
          type: 'Spanish',
          title: 'El león de marzo',
        },
        {
          type: 'French',
          title: 'March comes in like a lion',
        },
      ],
      title: '3-gatsu no Lion',
      title_english: 'March Comes in Like a Lion',
      title_japanese: '3月のライオン',
      title_synonyms: ['Sangatsu no Lion', 'Lion of March'],
      type: 'Manga',
      chapters: null,
      volumes: null,
      status: 'Publishing',
      publishing: true,
      published: {
        from: '2007-07-13T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 13,
            month: 7,
            year: 2007,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Jul 13, 2007 to ?',
      },
      score: 8.89,
      scored: 8.89,
      scored_by: 17228,
      rank: 22,
      popularity: 236,
      members: 61749,
      favorites: 3866,
      synopsis:
        'Rei Kiriyama is an extraordinary shogi player. Among the few elites to have gone professional as a middle school student, he is considered a genius. But what lies behind his prodigious facade is a teenage boy who suffers immense pressure from both his family, and from the high expectations from the shogi community. Rei moves out to live a more independent life away from his family, but his unorganized lifestyle and unsociable personality show no signs of improvement. However, in a twist of fate that will prove to be a turning point in his life, Rei then encounters the Kawamoto sisters—the motherly Akari, the passionate Hinata, and the energetic Momo—who take great care of him. 3-gatsu no Lion tells the story of Rei as he reshapes his melancholic life and picks up the courage to begin facing the problems he evaded during his past. [Written by MAL Rewrite]',
      background:
        '3-gatsu no Lion was nominated for the 2nd Manga Taisho Award in 2009 and in 2011, won the 4th Manga Taisho Award and the 35th Kodansha Manga Award in the general category (shared with ). In 2014, the series won the Grand Award of the 18th Tezuka Osamu Cultural Prize. The series has been published in Spanish by ECC Cómics since October 31, 2017, in Italian by Planet Manga since Febraury 13, 2011, and in Polish as Marcowy Lew by Dango since April 26, 2019.',
      authors: [
        {
          mal_id: 2891,
          type: 'people',
          name: 'Umino, Chika',
          url: 'https://myanimelist.net/people/2891/Chika_Umino',
        },
      ],
      serializations: [
        {
          mal_id: 2,
          type: 'manga',
          name: 'Young Animal',
          url: 'https://myanimelist.net/manga/magazine/2/Young_Animal',
        },
      ],
      genres: [
        {
          mal_id: 46,
          type: 'manga',
          name: 'Award Winning',
          url: 'https://myanimelist.net/manga/genre/46/Award_Winning',
        },
        {
          mal_id: 8,
          type: 'manga',
          name: 'Drama',
          url: 'https://myanimelist.net/manga/genre/8/Drama',
        },
        {
          mal_id: 36,
          type: 'manga',
          name: 'Slice of Life',
          url: 'https://myanimelist.net/manga/genre/36/Slice_of_Life',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 53,
          type: 'manga',
          name: 'Childcare',
          url: 'https://myanimelist.net/manga/genre/53/Childcare',
        },
        {
          mal_id: 63,
          type: 'manga',
          name: 'Iyashikei',
          url: 'https://myanimelist.net/manga/genre/63/Iyashikei',
        },
        {
          mal_id: 11,
          type: 'manga',
          name: 'Strategy Game',
          url: 'https://myanimelist.net/manga/genre/11/Strategy_Game',
        },
      ],
      demographics: [
        {
          mal_id: 41,
          type: 'manga',
          name: 'Seinen',
          url: 'https://myanimelist.net/manga/genre/41/Seinen',
        },
      ],
    },
    {
      mal_id: 89357,
      url: 'https://myanimelist.net/manga/89357/Youkoso_Jitsuryoku_Shijou_Shugi_no_Kyoushitsu_e',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/177958.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/177958t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/177958l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/2/177958.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/2/177958t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/2/177958l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e',
        },
        {
          type: 'Japanese',
          title: 'ようこそ実力至上主義の教室へ',
        },
        {
          type: 'English',
          title: 'Classroom of the Elite',
        },
      ],
      title: 'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e',
      title_english: 'Classroom of the Elite',
      title_japanese: 'ようこそ実力至上主義の教室へ',
      title_synonyms: [],
      type: 'Light Novel',
      chapters: 110,
      volumes: 14,
      status: 'Finished',
      publishing: false,
      published: {
        from: '2015-05-25T00:00:00+00:00',
        to: '2019-09-25T00:00:00+00:00',
        prop: {
          from: {
            day: 25,
            month: 5,
            year: 2015,
          },
          to: {
            day: 25,
            month: 9,
            year: 2019,
          },
        },
        string: 'May 25, 2015 to Sep 25, 2019',
      },
      score: 8.89,
      scored: 8.89,
      scored_by: 28286,
      rank: 23,
      popularity: 173,
      members: 77313,
      favorites: 7651,
      synopsis:
        "Receiving funding from the government to nurture the next generation's hopefuls, Tokyo Metropolitan Advanced Nurturing High School brings together the brightest youth of Japan onto a single campus. At this seemingly perfect institution, the reserved Kiyotaka Ayanokouji arrives as an incoming member of class 1-D, where he befriends one of his classmates, the antisocial Suzune Horikita. At first, his peers revel in the academy's leisurely lifestyle, taking advantage of all of its state-of-the-art facilities. Soon enough, however, the facade of Tokyo Metropolitan Advanced Nurturing High School gives way to its true nature—only the top scoring classes can fully utilize the school's offerings, and Class D is the furthest from such a status. Standing at the bottom of the hierarchy, Class D houses all of the school's \"worst\" students. Following this rude awakening, Ayanokouji, Horikita, and the rest of Class D must overcome their differences and clash against other classes in order to climb to the coveted position of Class A by any means necessary. [Written by MAL Rewrite]",
      background:
        'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e has been published digitally in English as Classroom of the Elite by Seven Seas Entertainment since February 7, 2019, and in print since May 7, 2019.',
      authors: [
        {
          mal_id: 12006,
          type: 'people',
          name: 'Tomose, Shunsaku',
          url: 'https://myanimelist.net/people/12006/Shunsaku_Tomose',
        },
        {
          mal_id: 18215,
          type: 'people',
          name: 'Kinugasa, Shougo',
          url: 'https://myanimelist.net/people/18215/Shougo_Kinugasa',
        },
      ],
      serializations: [],
      genres: [
        {
          mal_id: 8,
          type: 'manga',
          name: 'Drama',
          url: 'https://myanimelist.net/manga/genre/8/Drama',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 40,
          type: 'manga',
          name: 'Psychological',
          url: 'https://myanimelist.net/manga/genre/40/Psychological',
        },
        {
          mal_id: 23,
          type: 'manga',
          name: 'School',
          url: 'https://myanimelist.net/manga/genre/23/School',
        },
      ],
      demographics: [],
    },
    {
      mal_id: 123992,
      url: 'https://myanimelist.net/manga/123992/Youkoso_Jitsuryoku_Shijou_Shugi_no_Kyoushitsu_e__2-nensei-hen',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/3/235363.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/3/235363t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/3/235363l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/3/235363.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/3/235363t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/3/235363l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title:
            'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e: 2-nensei-hen',
        },
        {
          type: 'Synonym',
          title: 'Welcome to the Classroom of the Second-year',
        },
        {
          type: 'Synonym',
          title: 'Welcome to the Classroom of the Second-year',
        },
        {
          type: 'Japanese',
          title: 'ようこそ実力至上主義の教室へ 2年生編',
        },
        {
          type: 'English',
          title: 'Classroom of the Elite: Year 2',
        },
      ],
      title: 'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e: 2-nensei-hen',
      title_english: 'Classroom of the Elite: Year 2',
      title_japanese: 'ようこそ実力至上主義の教室へ 2年生編',
      title_synonyms: ['Welcome to the Classroom of the Second-year'],
      type: 'Light Novel',
      chapters: null,
      volumes: null,
      status: 'Publishing',
      publishing: true,
      published: {
        from: '2020-01-24T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 24,
            month: 1,
            year: 2020,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Jan 24, 2020 to ?',
      },
      score: 8.89,
      scored: 8.89,
      scored_by: 11876,
      rank: 23,
      popularity: 502,
      members: 31088,
      favorites: 2017,
      synopsis:
        'As Kiyotaka Ayanokouji and his classmates begin their second-year life, changes are seen everywhere throughout Tokyo Metropolitan Advanced Nurturing High School. With the third-years having graduated and incoming first-years entering the school, alliances are well underway. Additionally, now that Miyabi Nagumo is the student council president, the promise of turning the school into a meritocracy may become a reality. Meanwhile, conflicts between classes continue to build as the class point totals draw close. With another special exam looming ahead, will Ayanokouji remain in the shadows, or will he finally enter the spotlight and help his class rise to the illustrious Class A? [Written by MAL Rewrite]',
      background:
        'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e: 2-nensei-hen has been published in English as Classroom of the Elite: Year 2 by Seven Seas Entertainment under the Airship imprint since July 19, 2022.',
      authors: [
        {
          mal_id: 12006,
          type: 'people',
          name: 'Tomose, Shunsaku',
          url: 'https://myanimelist.net/people/12006/Shunsaku_Tomose',
        },
        {
          mal_id: 18215,
          type: 'people',
          name: 'Kinugasa, Shougo',
          url: 'https://myanimelist.net/people/18215/Shougo_Kinugasa',
        },
      ],
      serializations: [],
      genres: [
        {
          mal_id: 8,
          type: 'manga',
          name: 'Drama',
          url: 'https://myanimelist.net/manga/genre/8/Drama',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 40,
          type: 'manga',
          name: 'Psychological',
          url: 'https://myanimelist.net/manga/genre/40/Psychological',
        },
        {
          mal_id: 23,
          type: 'manga',
          name: 'School',
          url: 'https://myanimelist.net/manga/genre/23/School',
        },
      ],
      demographics: [],
    },
    {
      mal_id: 104,
      url: 'https://myanimelist.net/manga/104/Yotsuba_to',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/5/259524.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/5/259524t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/5/259524l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/5/259524.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/5/259524t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/5/259524l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Yotsuba to!',
        },
        {
          type: 'Synonym',
          title: 'Yotsuba and!',
        },
        {
          type: 'Synonym',
          title: 'Yotsuba and!',
        },
        {
          type: 'Japanese',
          title: 'よつばと!',
        },
        {
          type: 'English',
          title: 'Yotsuba&!',
        },
        {
          type: 'German',
          title: 'Yotsuba&!',
        },
        {
          type: 'Spanish',
          title: '¡Yotsuba!',
        },
        {
          type: 'French',
          title: 'Yotsuba & !',
        },
      ],
      title: 'Yotsuba to!',
      title_english: 'Yotsuba&!',
      title_japanese: 'よつばと!',
      title_synonyms: ['Yotsuba and!'],
      type: 'Manga',
      chapters: null,
      volumes: null,
      status: 'Publishing',
      publishing: true,
      published: {
        from: '2003-03-21T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 21,
            month: 3,
            year: 2003,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Mar 21, 2003 to ?',
      },
      score: 8.88,
      scored: 8.88,
      scored_by: 51155,
      rank: 24,
      popularity: 68,
      members: 143136,
      favorites: 15268,
      synopsis:
        "While most people find the world mundane, five-year-old Yotsuba Koiwai sees it as a treasure trove of amazing bustle and wonderful places to explore. When she and her adoptive father, Yousuke, move to a new city, the energetic young girl naturally sets out to investigate the neighborhood on her own. After a few incidents at the local park, the Koiwais become acquainted with their neighbors, the Ayase family. Their three daughters—mischievous college student Asagi, responsible high school student Fuuka, and kindhearted grade school student Ena—eventually all take a liking to Yotsuba and join in on her antics, despite their sheer ridicule. From learning how to use a swing to figuring out how to stop global warming with air conditioners, Yotsuba's ability to infallibly find fun in everything, both amazes and annoys the people around her. Along with Yousuke, the Ayases, and friends she makes along the way, Yotsuba embarks on daily adventures, each one a step in her quest to enjoy the simple things in life. [Written by MAL Rewrite]",
      background:
        'In 2006, Yotsuba to! received an Excellence Award in manga category at Japan Media Arts Festival where the jury citation praised the vivid characters and gentle atmosphere the manga has. In 2008, the series was nominated for the 12th Osamu Tezuka Culture Award and the Eisner Award "Best Publication for Kids" category, but did not win either one. It was also a runner-up for the first annual Manga Taishou award. In 2016, the series, along with Hanagami Sharaku, was awarded the 20th Tezuka Osamu Cultural Prize Grand Prize. The series was first published in English by ADV Manga as Yotsuba&!. Six volumes were released from June 6, 2005 to October 31, 2007 before publication was discontinued. Yen Press has published the series since September 15, 2009. It has also been published in Spanish by Norma Editorial since November 2005. It has been licensed in Polish by Wydawnictwo Kotori.',
      authors: [
        {
          mal_id: 1939,
          type: 'people',
          name: 'Azuma, Kiyohiko',
          url: 'https://myanimelist.net/people/1939/Kiyohiko_Azuma',
        },
      ],
      serializations: [
        {
          mal_id: 23,
          type: 'manga',
          name: 'Dengeki Daioh',
          url: 'https://myanimelist.net/manga/magazine/23/Dengeki_Daioh',
        },
      ],
      genres: [
        {
          mal_id: 46,
          type: 'manga',
          name: 'Award Winning',
          url: 'https://myanimelist.net/manga/genre/46/Award_Winning',
        },
        {
          mal_id: 4,
          type: 'manga',
          name: 'Comedy',
          url: 'https://myanimelist.net/manga/genre/4/Comedy',
        },
        {
          mal_id: 36,
          type: 'manga',
          name: 'Slice of Life',
          url: 'https://myanimelist.net/manga/genre/36/Slice_of_Life',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 53,
          type: 'manga',
          name: 'Childcare',
          url: 'https://myanimelist.net/manga/genre/53/Childcare',
        },
        {
          mal_id: 63,
          type: 'manga',
          name: 'Iyashikei',
          url: 'https://myanimelist.net/manga/genre/63/Iyashikei',
        },
      ],
      demographics: [],
    },
    {
      mal_id: 44227,
      url: 'https://myanimelist.net/manga/44227/Monogatari_Series__Final_Season',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/manga/1/181554.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/1/181554t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/1/181554l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/manga/1/181554.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/manga/1/181554t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/manga/1/181554l.webp',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Monogatari Series: Final Season',
        },
        {
          type: 'Synonym',
          title: 'Tsukimonogatari',
        },
        {
          type: 'Synonym',
          title: 'Koyomimonogatari',
        },
        {
          type: 'Synonym',
          title: 'Zoku Owarimonogatari',
        },
        {
          type: 'Synonym',
          title: 'Tsukimonogatari',
        },
        {
          type: 'Synonym',
          title: 'Koyomimonogatari',
        },
        {
          type: 'Synonym',
          title: 'Zoku Owarimonogatari',
        },
        {
          type: 'Japanese',
          title: '〈物語〉シリーズ ファイナルシーズン',
        },
      ],
      title: 'Monogatari Series: Final Season',
      title_english: null,
      title_japanese: '〈物語〉シリーズ ファイナルシーズン',
      title_synonyms: [
        'Tsukimonogatari',
        'Koyomimonogatari',
        'Zoku Owarimonogatari',
      ],
      type: 'Light Novel',
      chapters: 231,
      volumes: 6,
      status: 'Finished',
      publishing: false,
      published: {
        from: '2012-09-28T00:00:00+00:00',
        to: '2014-09-18T00:00:00+00:00',
        prop: {
          from: {
            day: 28,
            month: 9,
            year: 2012,
          },
          to: {
            day: 18,
            month: 9,
            year: 2014,
          },
        },
        string: 'Sep 28, 2012 to Sep 18, 2014',
      },
      score: 8.86,
      scored: 8.86,
      scored_by: 4282,
      rank: 25,
      popularity: 952,
      members: 17261,
      favorites: 441,
      synopsis:
        'This is a story. The end to the saga of Koyomi Araragi. This half-human, half-vampire has stood on the line between reality and the supernatural for far too long. The end to his indecision has finally come. Piece by piece, his humanity was falling away, starting with his reflection. He was becoming one of them—a vampire. Now, Araragi must choose which world to live in and which to give up. To remain human, he must abandon the friends he made through encounters with the supernatural. On the other hand, he would have to sacrifice his humanity to stay with those he holds dear. Koyomi Araragi must decide, and his decision will haunt him until the very end. Either way, tragedy seems inevitable, a culmination of every choice made since the very beginning. [Written by MAL Rewrite] This entry includes the final season of the Monogatari Series.',
      background: null,
      authors: [
        {
          mal_id: 5254,
          type: 'people',
          name: 'NISIO, ISIN',
          url: 'https://myanimelist.net/people/5254/ISIN_NISIO',
        },
        {
          mal_id: 8594,
          type: 'people',
          name: 'VOFAN',
          url: 'https://myanimelist.net/people/8594/VOFAN',
        },
      ],
      serializations: [],
      genres: [
        {
          mal_id: 4,
          type: 'manga',
          name: 'Comedy',
          url: 'https://myanimelist.net/manga/genre/4/Comedy',
        },
        {
          mal_id: 7,
          type: 'manga',
          name: 'Mystery',
          url: 'https://myanimelist.net/manga/genre/7/Mystery',
        },
        {
          mal_id: 37,
          type: 'manga',
          name: 'Supernatural',
          url: 'https://myanimelist.net/manga/genre/37/Supernatural',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 32,
          type: 'manga',
          name: 'Vampire',
          url: 'https://myanimelist.net/manga/genre/32/Vampire',
        },
      ],
      demographics: [],
    },
  ],
};
