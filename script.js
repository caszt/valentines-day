const RELATIONSHIP_START_DATE = "2025-09-17T00:00:00";
const LETTER_PASSWORD = "Peanut";
const themeCycleKey = "romantic_theme_cycle_index";
const lastSectionKey = "last_open_section";
const sliderStateKey = "reasons_slider_state";

const themePalettes = [
  {
    "--bg-1": "#0e0a14",
    "--bg-2": "#1a1023",
    "--bg-3": "#281327",
    "--rose": "#ff6da7",
    "--deep-rose": "#ff9ec8",
    "--soft-text": "#f6d9e9",
    "--card": "rgba(22, 13, 30, 0.84)",
    "--line": "rgba(255, 136, 183, 0.28)",
    "--shadow": "0 14px 34px rgba(0, 0, 0, 0.45)",
    "--surface-1": "#1a1023",
    "--surface-2": "#24152d",
    "--surface-3": "#2f1a34",
    "--text-muted": "#d4a6c2",
    "--orb-1-a": "#ca4a84",
    "--orb-1-b": "#7a2f57",
    "--orb-2-a": "#a64d7a",
    "--orb-2-b": "#593151",
    "--orb-3-a": "#ad5f8f",
    "--orb-3-b": "#61355e"
  },
  {
    "--bg-1": "#10090b",
    "--bg-2": "#1f0d12",
    "--bg-3": "#311018",
    "--rose": "#ff5f87",
    "--deep-rose": "#ffb3c8",
    "--soft-text": "#ffe1ea",
    "--card": "rgba(31, 13, 18, 0.86)",
    "--line": "rgba(255, 120, 150, 0.3)",
    "--shadow": "0 14px 34px rgba(0, 0, 0, 0.5)",
    "--surface-1": "#1b0d11",
    "--surface-2": "#251016",
    "--surface-3": "#32131d",
    "--text-muted": "#d9a5b8",
    "--orb-1-a": "#be456e",
    "--orb-1-b": "#6e2742",
    "--orb-2-a": "#9a3f64",
    "--orb-2-b": "#4c2438",
    "--orb-3-a": "#a45174",
    "--orb-3-b": "#5b2a3f"
  },
  {
    "--bg-1": "#090d16",
    "--bg-2": "#101827",
    "--bg-3": "#1b2435",
    "--rose": "#ff7cb2",
    "--deep-rose": "#ffd0e5",
    "--soft-text": "#e9edff",
    "--card": "rgba(16, 24, 39, 0.84)",
    "--line": "rgba(255, 150, 200, 0.26)",
    "--shadow": "0 14px 34px rgba(0, 0, 0, 0.5)",
    "--surface-1": "#111a2a",
    "--surface-2": "#162136",
    "--surface-3": "#1c2942",
    "--text-muted": "#bac2e6",
    "--orb-1-a": "#7f4d8c",
    "--orb-1-b": "#3d2b63",
    "--orb-2-a": "#6b5a9d",
    "--orb-2-b": "#2f3f72",
    "--orb-3-a": "#925e9f",
    "--orb-3-b": "#37487a"
  },
  {
    "--bg-1": "#0b1112",
    "--bg-2": "#0f1e1c",
    "--bg-3": "#152b27",
    "--rose": "#ff88b8",
    "--deep-rose": "#ffd4e7",
    "--soft-text": "#e2f4ee",
    "--card": "rgba(15, 30, 28, 0.86)",
    "--line": "rgba(255, 156, 196, 0.28)",
    "--shadow": "0 14px 34px rgba(0, 0, 0, 0.5)",
    "--surface-1": "#0f1d1c",
    "--surface-2": "#152724",
    "--surface-3": "#1d332f",
    "--text-muted": "#aed7ca",
    "--orb-1-a": "#b05f95",
    "--orb-1-b": "#4a365f",
    "--orb-2-a": "#4f947b",
    "--orb-2-b": "#2b5e51",
    "--orb-3-a": "#be7ca2",
    "--orb-3-b": "#4b4e72"
  },
  {
    "--bg-1": "#14090f",
    "--bg-2": "#230e18",
    "--bg-3": "#311325",
    "--rose": "#ff739f",
    "--deep-rose": "#ffc3d8",
    "--soft-text": "#ffe3ef",
    "--card": "rgba(35, 14, 24, 0.86)",
    "--line": "rgba(255, 130, 176, 0.3)",
    "--shadow": "0 14px 34px rgba(0, 0, 0, 0.52)",
    "--surface-1": "#1c0d14",
    "--surface-2": "#28101d",
    "--surface-3": "#361528",
    "--text-muted": "#e1a8c2",
    "--orb-1-a": "#d24f81",
    "--orb-1-b": "#7a2f5e",
    "--orb-2-a": "#964b8f",
    "--orb-2-b": "#4d2c64",
    "--orb-3-a": "#ca6c9f",
    "--orb-3-b": "#5c2a48"
  },
  {
    "--bg-1": "#0c0a13",
    "--bg-2": "#171126",
    "--bg-3": "#24143a",
    "--rose": "#f48cff",
    "--deep-rose": "#f7d4ff",
    "--soft-text": "#ede5ff",
    "--card": "rgba(23, 17, 38, 0.86)",
    "--line": "rgba(213, 141, 255, 0.3)",
    "--shadow": "0 14px 34px rgba(0, 0, 0, 0.52)",
    "--surface-1": "#151025",
    "--surface-2": "#1d1430",
    "--surface-3": "#291c40",
    "--text-muted": "#c8bbe9",
    "--orb-1-a": "#8f56b8",
    "--orb-1-b": "#4a3578",
    "--orb-2-a": "#a96cc9",
    "--orb-2-b": "#4a3b7c",
    "--orb-3-a": "#cb7cb9",
    "--orb-3-b": "#5a3f79"
  },
  {
    "--bg-1": "#0a0f19",
    "--bg-2": "#111a2b",
    "--bg-3": "#1a2540",
    "--rose": "#ff83ae",
    "--deep-rose": "#ffd6e9",
    "--soft-text": "#e7efff",
    "--card": "rgba(17, 26, 43, 0.86)",
    "--line": "rgba(255, 146, 195, 0.28)",
    "--shadow": "0 14px 34px rgba(0, 0, 0, 0.52)",
    "--surface-1": "#101a2d",
    "--surface-2": "#17233a",
    "--surface-3": "#1f2d49",
    "--text-muted": "#b9c6e8",
    "--orb-1-a": "#7b5db0",
    "--orb-1-b": "#3a417b",
    "--orb-2-a": "#5c78b4",
    "--orb-2-b": "#2f4c7c",
    "--orb-3-a": "#ab6ea4",
    "--orb-3-b": "#4f4a8a"
  }
];

const loveReasons = [
  {
    text: "I love the way your smile makes my hardest days feel easy.",
    image: "https://i.pinimg.com/736x/50/96/4d/50964dd2dde0828247aaf26f697f93aa.jpg"
  },
  {
    text: "I love how safe and calm everything feels when I am with you.",
    image: "https://i.pinimg.com/736x/ff/74/de/ff74deabcc8ed5340fa107e5b477751f.jpg"
  },
  {
    text: "I love your kindness, even in the smallest moments people don't notice.",
    image: "https://i.pinimg.com/736x/de/4f/ea/de4feac6db5a1f1f76171f6a623d1909.jpg"
  },
  {
    text: "I love that loving you still feels like my favorite adventure.",
    image: "https://i.pinimg.com/736x/7b/1c/8e/7b1c8ead6d0ccfb5e334293945ab5352.jpg"
  },
  {
    text: "I love that even when the world is against you, you still choose to be kind and loving.",
    image: "https://i.pinimg.com/736x/af/b2/b4/afb2b4abaa7268de5adea4df7d2b7670.jpg"
  },
  {
    text: "I love that you make me want to be a better person, not through pressure or expectations, but simply because being with you inspires me to grow and improve in the most natural way.",
    image: "https://i.pinimg.com/1200x/20/c2/8b/20c28bdc78e2768f2237b39e45a5aa81.jpg"
  },
  {
    text: "I love that everything I do is always appreciated and celebrated by you, making me feel truly seen and valued for who I am.",
    image: "https://i.pinimg.com/736x/c9/20/da/c920da086f3812d3d5261fb37eed68e3.jpg"
  },
  {
    text: "I love that you never once made me feel like I had to hide any part of myself, and instead embraced all of my quirks and imperfections with open arms and a loving heart.",
    image: "https://i.pinimg.com/736x/a3/6b/e5/a36be5247f2eaad8e894e35067b83de6.jpg"
  },
  {
    text: "I love that you gave me precious memories that I will cherish forever, and that we have so many more to create together in the future.",
    image: "https://i.pinimg.com/736x/da/a2/28/daa228d1033eb2981b4be347ea3c9db6.jpg"
  },
  {
    text: "I love that I have found in you not just a partner, but also a best friend, a confidant, and a soulmate who understands and accepts me in ways I never thought possible.",
    image: "https://i.pinimg.com/736x/da/a2/28/daa228d1033eb2981b4be347ea3c9db6.jpg"
  },
  {
    text: "I love that my heart feels at home with you, and that being with you is the most natural and wonderful thing in the world.",
    image: "https://i.pinimg.com/736x/0c/97/39/0c973904312fb996fe43ddb713eb597b.jpg"
  },
  {
    text: "I love that you never gave up on me, even when I didn't show any interest in you at first, and that you patiently waited for me.",
    image: "https://i.pinimg.com/736x/58/8a/7c/588a7c2d3cec67e5a49b379c3e33ea4a.jpg"
  },
  {
    text: "I love that you are the most beautiful thing that ever happened to me, and that I get to call you mine.",
    image: "https://i.pinimg.com/736x/19/09/26/190926b7b3d68df06530888bf49252c1.jpg"
  },
  {
    text: "I love that all of the love songs suddenly make sense after I met you, and that every romantic movie feels like it was made just for us.",
    image: "https://i.pinimg.com/736x/10/3f/bc/103fbc8cb98d348089c23bcb62de4a69.jpg"
  },
  {
    text: "I love that once I found you, I never wanted to find anyone else, and that you are the one I want to spend all of my tomorrows with.",
    image: "https://i.pinimg.com/736x/f2/4e/04/f24e047e15fc79c8774438fb20167733.jpg"
  },
  {
    text: "I love that it's not just the big moments, but also the quiet, everyday moments with you that make me feel so deeply in love and grateful to have you in my life.",
    image: "https://i.pinimg.com/736x/26/9a/89/269a891c4f9c80a4963e62c09e204e44.jpg"
  },
  {
    text: "I love that quesstions you ask, even the random and silly ones, always make me think and see things in a new light, and that you have this incredible ability to make me feel so deeply understood and connected to you.",
    image: "https://i.pinimg.com/1200x/6a/c4/70/6ac4704255bf60d44ad3f6c790972e68.jpg"
  },
  {
    text: "I love that crying with you doesn't feel sad, but instead feels like the most comforting and healing thing in the world, and that you have this amazing ability to make me feel safe and loved even in my most vulnerable moments.",
    image: "https://i.pinimg.com/736x/84/51/fc/8451fcc3943de9caca76d4aecb5e1e3e.jpg"
  },
  {
    text: "I love that confessing my love for you still feels like the most exciting and wonderful thing in the world, and that every time I say it, I feel like I'm falling in love with you all over again.",
    image: "https://i.pinimg.com/736x/31/78/38/3178383379d6a21c36d67e0aa9faf4ff.jpg"
  },
  {
    text: "I love that sometimes I just look at you and feel this overwhelming rush of love and gratitude for having you in my life, and that you are the most precious and cherished part of my world.",
    image: "https://i.pinimg.com/736x/05/88/00/0588000d7a3231c209e419b81c8a634d.jpg"
  },
  
];

const happyReasons = [
  "I am happy because we laugh over the smallest and silliest things.",
  "I am happy because we can be completely ourselves around each other.",
  "I am happy because your support makes me brave enough to keep growing.",
  "I am happy because life with you feels warm, peaceful, and exciting at the same time.",
  "I am happy because every day with you is my new favorite day.",
  "I am happy because you make me want to be the best version of myself.",
  "I am happy because your love is the most beautiful thing I have ever known.",
  "I am happy because you are not just my partner, but also my best friend.",
  "I am happy because loving you is the most natural and wonderful thing in the world.",
  "I am happy because you make ordinary moments feel magical.",
  "I am happy because with you, I have found my home and my adventure all at once.",
  "I am happy because you are the reason behind so many of my smiles and dreams.",
  "I am happy because you are the most precious and cherished part of my life.",
  "I am happy because your love fills my heart with endless joy and gratitude.",
  "I am happy because you are the most beautiful chapter in the story of my life.",
  "I am happy because you are the most wonderful thing that ever happened to me.",
  "I am happy because you are the love I always hoped for and more.", 
  "I am happy because you are the most amazing person I have ever known, and I get to call you mine.",
  "I am happy because you are the most incredible partner, and I am so grateful for every moment we share together.",
  "I am happy because you are the most beautiful soul, and loving you is the greatest joy of my life.",
  "I am happy because you are the most wonderful person, and being with you makes every day brighter and more meaningful.",
  "I am happy because you are the most amazing thing that ever happened to me, and I will cherish and love you forever.",
  "I am happy because you are the most incredible partner, and I am so grateful for every moment we share together.",
  "I am happy because you are the most beautiful soul, and loving you is the greatest joy of my life.",
];

const remindReasons = [
  {
    text: "Sunsets remind me of you, when I look at them, I feel this beautiful mix of warmth, awe, and a little bit of bittersweet longing, just like how I feel when I think about our love.",
    image: "https://i.pinimg.com/736x/73/27/0e/73270ee16b76bbf8345a20c4ae56dfc0.jpg"
  },
  {
    text: "Songs with gentle melodies remind me of your voice. Those voices that have always treated me with soft loving and gentleness.",
    image: "https://i.pinimg.com/736x/27/d2/d4/27d2d49af9130d88b9ae29d315ef5f02.jpg"
  },
  {
    text: "Rainy nights remind me of how peaceful it feels to talk to you for hours.",
    image: "https://i.pinimg.com/736x/51/fa/15/51fa15d291f3e645acd3e399f0c90626.jpg"
  },
  {
    text: "Flowers remind me of you whenever I smell their fragrance that feels like a sweet reminder of your tender and caring nature.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80"
  },
  {
    text: "Food reminds me of you, because every time I eat something delicious, I wish you were there to share it with me, and it makes me think of all the wonderful meals we've had together and all the ones we will have in the future.",
    image: "https://i.pinimg.com/1200x/d7/cc/db/d7ccdbbdf48ad2ec836615b52d8231e6.jpg"
  },
  {
    text: "A kitten reminds me of you, because just like how a kitten brings so much joy, warmth, and comfort with its presence, you have brought those same feelings into my life in the most beautiful way.",
    image: "https://i.pinimg.com/736x/87/d5/23/87d523801a9555a1f902dbaaa0963754.jpg"
  },
  {
    text: "The gentle breeze reminds me of the way your love has always been a comforting and soothing presence in my life, like a soft whisper that calms my soul and fills me with warmth.",
    image: "https://i.pinimg.com/736x/21/78/92/2178925794df3dab7691cd5649d75e9a.jpg"
  },
  {
    text: "The soft glow of candlelight reminds me of the warmth and intimacy of our love, and how being with you feels like being wrapped in a cozy embrace that makes everything else fade away.",
    image: "https://i.pinimg.com/736x/80/a4/f3/80a4f316ba467b5cbdcb166f77e8e761.jpg"
  },
  {
    text: "The stars that align in the night sky remind me of how perfectly we fit together, and how our love feels like a beautiful cosmic connection that was meant to be.",
    image: "https://i.pinimg.com/736x/d4/94/e5/d494e5f42d7d45c695c91f88cd00375f.jpg"
  },
  {
    text: "Seeing the constant flow of the ocean waves reminds me of how our love is always there, steady and unwavering, even in the midst of life's ups and downs, and how it has become a powerful force that carries me through everything.",
    image: "https://i.pinimg.com/736x/ee/d2/b4/eed2b48b7de8684f8b3afc3e567bbd0a.jpg"
  },
  {
    text: "Listening to the echoes of laughter reminds me of how your laughter is like music to my ears, and how it has the incredible power to lift my spirits and fill my heart with joy, even on the darkest days.",
    image: "https://i.pinimg.com/1200x/83/3a/6a/833a6a0b429cdf4efd09c395b0dae850.jpg"
  },
  {
    text: "Feeling the coldness has always reminded me of how your love has been a constant source of warmth and comfort in my life, like a cozy blanket that wraps around me and keeps me safe from the chill of the world.",
    image: "https://i.pinimg.com/736x/b0/86/88/b08688c27a6c847efea7654003fca7b3.jpg"
  },
  {
    text: "When I see the time tick by, it reminds me of how every moment with you is precious and fleeting, and how I want to cherish every second we have together, because time with you feels like the most beautiful and valuable thing in the world.",
    image: "https://i.pinimg.com/1200x/57/3e/e2/573ee2afbd6b77263c015819f8881f29.jpg"
  },
  {
    text: "The moonlight reminds me of how your love has always been a guiding light in my life, illuminating the darkest nights and showing me the way to happiness and fulfillment, and how being with you feels like basking in the gentle glow of a beautiful and comforting light that never fades.",
    image: "https://i.pinimg.com/736x/77/b1/34/77b13467dc8cebb426c25c01a7230b1e.jpg"
  },
  {
    text: "Peculiar and random things remind me of you, because just like how those things can catch me off guard and make me smile, you have this incredible ability to surprise me with your love and kindness in the most unexpected and wonderful ways.",
    image: "https://i.pinimg.com/1200x/bb/00/fb/bb00fbabd0a58d0bc918cb8bd5664837.jpg"
  },
  {
    text: "Loud whispers remind me of you, because just like how a loud whisper can be both intimate and powerful, your love has this incredible ability to make me feel deeply connected and cherished, even in the quietest moments we share together.",
    image: "https://i.pinimg.com/736x/10/63/5d/10635d359dcea0527233e3485ed0df26.jpg"
  },
  {
    text: "The sky's changing colors during sunrise reminds me of how your love has brought so much beauty and wonder into my life, and how every day with you feels like a new beginning filled with endless possibilities and joy.",
    image: "https://i.pinimg.com/736x/9b/a2/1a/9ba21a376bbed737b29249a8aed19213.jpg"
  },
  {
    text: "The dance of the leaves in the wind reminds me of how your love has this incredible ability to make me feel alive and free, like I'm dancing in the breeze with you, and how being with you feels like the most beautiful and exhilarating dance of my life.",
    image: "https://i.pinimg.com/736x/84/7b/47/847b47caa904e63f422dade790e21326.jpg"
  },
  {
    text: "My very own heartbeat reminds me of you, because just like how a heartbeat is a constant and vital rhythm that keeps me alive, your love has become an essential and life-giving force in my existence, and how being with you feels like the most beautiful and harmonious melody that my heart has ever known.",
    image: "https://i.pinimg.com/1200x/80/3d/63/803d63244124615904b74c0d15c580ba.jpg"
  },
  {
    text: "Everything reminds me of you, because your love has become the lens through which I see the world, and how every sight, sound, and sensation is infused with the beauty and wonder of our love, making even the most ordinary things feel extraordinary and magical.",
    image: "https://i.pinimg.com/736x/9a/11/68/9a1168f599ad01da645b35185ad669c0.jpg"
  },

];

const myFavoriteSongs = [
  {
    title: "Easily",
    artist: "Bruno Major",
    cover: "https://i.pinimg.com/736x/cc/a8/91/cca8911adcdab172db6a337b081d9625.jpg",
    embed: "https://open.spotify.com/embed/track/0RnxpSzxzwZgFQ0NahQr9K?si=407a574fbda84d2f"
  },
  {
    title: "Just The Two Of Us",
    artist: "Grover Washington Jr. & Bill Withers",
    cover: "https://i.scdn.co/image/ab67616d0000b2730246ee3f03226d40d6f8e9b5",
    embed: "https://open.spotify.com/embed/track/5fdNHVZHbWB1AaXk4RBGVD?si=7a8b9411422e4094"
  },
  {
    title: "Secret Door",
    artist: "Arctic Monkeys",
    cover: "https://i.scdn.co/image/ab67616d0000b273dbc4df4dc4814da2db4f89fd",
    embed: "https://open.spotify.com/embed/track/4dtP86vkhzwNXCFpCtizce?si=48cf671257ed4dbe"
  },
  {
    title: "Line Without A Hook",
    artist: "Ricky Montgomery",
    cover: "https://i.scdn.co/image/ab67616d0000b2730246ee3f03226d40d6f8e9b5",
    embed: "https://open.spotify.com/embed/track/5NvOZCjZaGGGL597exlQWv?si=2a99ab4894714e0f"
  },
  {
    title: "Love",
    artist: "Wave to Earth",
    cover: "https://i.scdn.co/image/ab67616d0000b2730246ee3f03226d40d6f8e9b5",
    embed: "https://open.spotify.com/embed/track/5mtTAScDytxMMqZj14NmlN?si=9246066e1f4743bc"
  },
  {
    title: "Nothing",
    artist: "Bruno Major",
    cover: "https://i.scdn.co/image/ab67616d0000b2730246ee3f03226d40d6f8e9b5",
    embed: "https://open.spotify.com/embed/track/1lORkxEMmsCZqhoxcmk3A3?si=534db2b0a8d24522"
  },
];

const myFavoriteFoods = [
  "Shawarma",
  "Carbonara",
  "Fries",
  "Chicken Wings",
  "Pizza",
  "Ramen",
  "Calamansi Juice",
  "Watermelon",
  "Water",
  "Mountain Dew",
];

const randomMessages = [
  "You are my favorite chapter, and I never want this story to end.",
  "If I had to choose all over again, I would still choose you. Every time.",
  "You are my comfort place and my happiest thought.",
  "I don't just love you, I thank life for you every day.",
  "Your existence makes ordinary days feel special.", 
  "With you, I've found a love that feels like home and an adventure all at once.",
  "You are the most beautiful thing that ever happened to me, and I get to call you mine.",
  "Loving you is the most natural and wonderful thing in the world.",
  "You are the most precious and cherished part of my life.",
  "Every moment with you is a treasure I hold dear.",
  "You are the reason behind so many of my smiles and dreams.",
  "Your love fills my heart with endless joy and gratitude.",
  "You are the most beautiful chapter in the story of my life.",
  "You are the most wonderful thing that ever happened to me.",
  "You are the love I always hoped for and more.", 
  "You are the most amazing person I have ever known, and I get to call you mine.",
  "You are the most incredible partner, and I am so grateful for every moment we share together.",
  "You are the most beautiful soul, and loving you is the greatest joy of my life.",
  "You are the most wonderful person, and being with you makes every day brighter and more meaningful.",
  "You are the most amazing thing that ever happened to me, and I will cherish and love you forever.",
  "You are the most incredible partner, and I am so grateful for every moment we share together.",
  "You are the most beautiful soul, and loving you is the greatest joy of my life.",
  "Sometimes I just look at you and feel this overwhelming rush of love and gratitude for having you in my life, and that you are the most precious and cherished part of my world.",
  "My love for you is like a quiet river that flows endlessly, deep and steady, nourishing my soul and filling my heart with a peaceful joy that I never knew was possible until I met you.",
  "No matter where life takes us, my heart will always find its way back to you, because you are not just my love, but also my home, my sanctuary, and the most beautiful part of my existence.",
  "Knowing you has been the most wonderful and transformative experience of my life, and I am endlessly grateful for every moment we share together, because you are the most amazing person I have ever known, and I get to call you mine.",
  "Hunting for the perfect words to express how much I love you is like trying to capture the beauty of a sunset in a single photograph - it's impossible to fully capture the depth and richness of my feelings for you in just words, but I hope that every smile, every touch, and every moment we share together can convey even a fraction of the love and gratitude I feel for having you in my life.",

];

const quizQuestions = [
  {
    question: "What is the most meaningful way to show love?",
    choices: ["Consistent small efforts", "Big gifts only", "Never talking about feelings"],
    answer: 0
  },
  {
    question: "What matters most during misunderstandings?",
    choices: ["Who wins the argument", "Clear and kind communication", "Ignoring each other"],
    answer: 1
  },
  {
    question: "What is the best love language foundation?",
    choices: ["Attention and effort", "Only social media posts", "Comparing with others"],
    answer: 0
  },
  {
    question: "What keeps long-term love healthy?",
    choices: ["Trust and teamwork", "Keeping scores", "Avoiding hard talks forever"],
    answer: 0
  },
  {
    question: "Best relationship motto?",
    choices: ["Me vs you", "You vs me", "Us vs the problem"],
    answer: 2
  }
];

const memorySymbols = ["❤", "🌙", "✨", "🌹"];
const scrambleWords = ["forever", "cherish", "starlight", "devotion", "darling"];

const letterContent = ` To: my Seah 

My love,

If you are reading this, then you found the quiet corner I made just for you. Thank you for being my peace, my joy, and my safe place. I hope this little website reminds you how deeply I adore you. No matter where we are, no matter how busy life gets, my heart still runs back to you. Thank you for always being there for me, even when I myself don't want to be there for me. You proved me time and time that I have someone I am able to run back to whenever the world becomes a place I could never walk through alone. I am so grateful that I met someone as beautiful, strong, brave, confident, loving, and most of all, tender woman like you.

No one will ever get me when I say that I am the luckiest person in the universe to have you. In everything that I do, you always make sure to make me feel appreciated and feel the best at what I do. I have never loved just as strongly as I have loved you before, and now I want to love you even harder until my heart beat stops. Only then will I feel accomplished and complete. To say that I love is an understatement, because you are not just the love of my life, but also the most beautiful thing that ever happened to me, and I get to call you mine. I am so grateful for every moment we share together, and I will cherish and love you forever.

Let me be the one to treat you the best, because I know I will treat you better than anyone else ever will. I want to be the one who makes you feel the most loved, the most appreciated, and the most cherished, because you deserve nothing less than the absolute best. I want to be the one who stands by your side through every joy and every challenge, because being with you is the most wonderful thing that ever happened to me, and I will do everything in my power to make sure you always feel that way too.

Happy Valentine's Day, my love. I hope more days like this come and we get to celebrate, but everyday is always like this so everyday I'm already celebrating. I love you and I always will.

Forever yours,
Sian`;

const partnerSongsKey = "partner_favorite_songs";
const partnerFoodsKey = "partner_favorite_foods";
const letterUnlockedKey = "secret_letter_unlocked";

const sliderState = {
  love: 0,
  happy: 0,
  remind: 0
};

const gameState = {
  heartWon: false,
  guessWon: false,
  quizWon: false,
  memoryWon: false,
  catchWon: false,
  reflexWon: false,
  scrambleWon: false,
  rpsWon: false,
  heartRunning: false,
  heartClicks: 0,
  heartTimer: null,
  heartEndTs: null,
  catchRunning: false,
  catchClicks: 0,
  catchTimer: null,
  catchEndTs: null,
  reflexRunning: false,
  reflexReady: false,
  reflexTimeout: null,
  reflexStartTs: 0,
  guessNumber: Math.floor(Math.random() * 20) + 1,
  guessTries: 5
};

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadJSON(key, fallback) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key));
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function persistSliderState() {
  try {
    localStorage.setItem(sliderStateKey, JSON.stringify(sliderState));
  } catch {
    // Ignore storage errors and continue UI behavior.
  }
}

function restoreSliderState() {
  const saved = loadJSON(sliderStateKey, null);
  if (!saved || typeof saved !== "object") {
    return;
  }

  sliderState.love = Number.isInteger(saved.love) ? mod(saved.love, loveReasons.length) : 0;
  sliderState.happy = Number.isInteger(saved.happy) ? mod(saved.happy, happyReasons.length) : 0;
  sliderState.remind = Number.isInteger(saved.remind) ? mod(saved.remind, remindReasons.length) : 0;
}

function applyRotatingTheme() {
  const root = document.documentElement;
  let nextIndex = 0;

  try {
    const rawLastIndex = Number.parseInt(localStorage.getItem(themeCycleKey) ?? "", 10);
    nextIndex = Number.isInteger(rawLastIndex)
      ? (rawLastIndex + 1) % themePalettes.length
      : 0;
    localStorage.setItem(themeCycleKey, String(nextIndex));
  } catch {
    nextIndex = 0;
  }

  const palette = themePalettes[nextIndex];
  Object.entries(palette).forEach(([token, value]) => {
    root.style.setProperty(token, value);
  });
}

function showSection(targetId) {
  if (!targetId || !document.getElementById(targetId)) {
    return;
  }

  const views = document.querySelectorAll(".view");
  views.forEach((view) => {
    view.classList.toggle("active", view.id === targetId);
  });

  const navButtons = document.querySelectorAll(".nav > .nav-btn[data-target]");
  navButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.target === targetId);
  });

  try {
    localStorage.setItem(lastSectionKey, targetId);
  } catch {
    // Ignore storage errors and continue UI navigation.
  }
}

function restoreLastSection() {
  try {
    const savedSection = localStorage.getItem(lastSectionKey);
    if (savedSection && document.getElementById(savedSection)) {
      showSection(savedSection);
      return;
    }
  } catch {
    // Ignore storage errors and use default home section.
  }
  showSection("home");
}

function bindNavigation() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-target]");
    if (!target) {
      return;
    }

    const targetId = target.dataset.target;
    if (!targetId) {
      return;
    }

    showSection(targetId);
  });
}

function bindMobileMenu() {
  const topbar = document.querySelector(".topbar");
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  if (!topbar || !menuToggle || !nav) {
    return;
  }

  const isMobileViewport = () => window.matchMedia("(max-width: 720px)").matches;

  function setMobileMenuOpen(isOpen) {
    topbar.classList.toggle("menu-open", isOpen);
    document.body.classList.toggle("menu-lock", isOpen && isMobileViewport());
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    if (!isOpen) {
      closeAllDropdowns();
    }
  }

  menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = topbar.classList.contains("menu-open");
    setMobileMenuOpen(!isOpen);
  });

  nav.querySelectorAll("[data-target]").forEach((item) => {
    item.addEventListener("click", () => {
      if (isMobileViewport()) {
        setMobileMenuOpen(false);
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!isMobileViewport()) {
      return;
    }
    if (topbar.classList.contains("menu-open") && !event.target.closest(".topbar")) {
      setMobileMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && topbar.classList.contains("menu-open")) {
      setMobileMenuOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (!isMobileViewport() && topbar.classList.contains("menu-open")) {
      setMobileMenuOpen(false);
    }
  });
}

function closeAllDropdowns() {
  document.querySelectorAll(".nav-dropdown, .home-dropdown").forEach((dropdown) => {
    dropdown.classList.remove("open", "just-closed");
  });
}

function bindDropdownMenus() {
  const navToggles = document.querySelectorAll(".nav-dropdown .dropdown-toggle");
  navToggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const parent = toggle.closest(".nav-dropdown");
      const isOpen = parent.classList.contains("open");
      closeAllDropdowns();
      if (!isOpen) {
        parent.classList.add("open");
      }
    });
  });

  const homeToggles = document.querySelectorAll(".home-dropdown .home-toggle");
  homeToggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const parent = toggle.closest(".home-dropdown");
      const isOpen = parent.classList.contains("open");
      closeAllDropdowns();
      if (!isOpen) {
        parent.classList.add("open");
      }
    });
  });

  document.querySelectorAll(".dropdown-item, .home-menu-item").forEach((item) => {
    item.addEventListener("click", () => {
      closeAllDropdowns();
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-dropdown") && !event.target.closest(".home-dropdown")) {
      closeAllDropdowns();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllDropdowns();
    }
  });
}

function updateTimeTogether() {
  const start = new Date(RELATIONSHIP_START_DATE);
  const now = new Date();
  if (Number.isNaN(start.getTime()) || now < start) {
    return;
  }

  const result = getCalendarDiff(start, now);
  setText("years", result.years);
  setText("months", result.months);
  setText("days", result.days);
  setText("hours", result.hours);
  setText("minutes", result.minutes);
  setText("seconds", result.seconds);

  const startDateText = start.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  setText("start-date-text", `Counting from ${startDateText}`);
}

function getCalendarDiff(start, end) {
  const cursor = new Date(start);

  let years = end.getFullYear() - cursor.getFullYear();
  cursor.setFullYear(cursor.getFullYear() + years);
  if (cursor > end) {
    years -= 1;
    cursor.setFullYear(cursor.getFullYear() - 1);
  }

  let months = 0;
  while (months < 12) {
    const nextMonth = new Date(cursor);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    if (nextMonth <= end) {
      months += 1;
      cursor.setTime(nextMonth.getTime());
    } else {
      break;
    }
  }

  const msLeft = end - cursor;
  const days = Math.floor(msLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((msLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((msLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((msLeft / 1000) % 60);

  return { years, months, days, hours, minutes, seconds };
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = String(value);
  }
}

function bindReasonSliders() {
  restoreSliderState();
  renderLoveSlide();
  renderHappySlide();
  renderRemindSlide();

  document.getElementById("love-prev").addEventListener("click", () => {
    sliderState.love = mod(sliderState.love - 1, loveReasons.length);
    persistSliderState();
    renderLoveSlide();
  });
  document.getElementById("love-next").addEventListener("click", () => {
    sliderState.love = mod(sliderState.love + 1, loveReasons.length);
    persistSliderState();
    renderLoveSlide();
  });

  document.getElementById("happy-prev").addEventListener("click", () => {
    sliderState.happy = mod(sliderState.happy - 1, happyReasons.length);
    persistSliderState();
    renderHappySlide();
  });
  document.getElementById("happy-next").addEventListener("click", () => {
    sliderState.happy = mod(sliderState.happy + 1, happyReasons.length);
    persistSliderState();
    renderHappySlide();
  });

  document.getElementById("remind-prev").addEventListener("click", () => {
    sliderState.remind = mod(sliderState.remind - 1, remindReasons.length);
    persistSliderState();
    renderRemindSlide();
  });
  document.getElementById("remind-next").addEventListener("click", () => {
    sliderState.remind = mod(sliderState.remind + 1, remindReasons.length);
    persistSliderState();
    renderRemindSlide();
  });
}

function renderLoveSlide() {
  const item = loveReasons[sliderState.love];
  setText("love-text", item.text);
  const img = document.getElementById("love-image");
  img.src = item.image;
}

function renderHappySlide() {
  setText("happy-text", happyReasons[sliderState.happy]);
}

function renderRemindSlide() {
  const item = remindReasons[sliderState.remind];
  setText("remind-text", item.text);
  const img = document.getElementById("remind-image");
  img.src = item.image;
}

function mod(num, base) {
  return ((num % base) + base) % base;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function renderMySongs() {
  const root = document.getElementById("my-songs-list");
  root.innerHTML = "";
  myFavoriteSongs.forEach((song) => root.append(createSongCard(song, false)));
}

function renderPartnerSongs() {
  const root = document.getElementById("partner-songs-list");
  root.innerHTML = "";
  const songs = loadJSON(partnerSongsKey, []);

  if (!songs.length) {
    root.textContent = "No songs added yet. Add one above.";
    return;
  }

  songs.forEach((song, index) => {
    root.append(createSongCard(song, true, index));
  });
}

function createSongCard(song, includeDelete, index = -1) {
  const card = document.createElement("article");
  card.className = "song-card";

  const body = document.createElement("div");
  body.className = "song-body";

  const title = document.createElement("h4");
  title.textContent = song.title;
  body.appendChild(title);

  const artist = document.createElement("p");
  artist.textContent = song.artist;
  body.appendChild(artist);

  const embed = document.createElement("iframe");
  embed.loading = "lazy";
  embed.src = song.embed;
  embed.allow =
    "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
  body.appendChild(embed);

  if (includeDelete) {
    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      const songs = loadJSON(partnerSongsKey, []);
      songs.splice(index, 1);
      saveJSON(partnerSongsKey, songs);
      renderPartnerSongs();
    });
    body.appendChild(removeBtn);
  }

  card.appendChild(body);
  return card;
}

function bindPartnerSongForm() {
  const form = document.getElementById("partner-song-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const song = {
      title: document.getElementById("song-title").value.trim(),
      artist: document.getElementById("song-artist").value.trim(),
      embed: document.getElementById("song-embed").value.trim()
    };

    if (!song.title || !song.artist || !song.embed) {
      return;
    }

    const songs = loadJSON(partnerSongsKey, []);
    songs.push(song);
    saveJSON(partnerSongsKey, songs);
    form.reset();
    renderPartnerSongs();
  });
}

function renderMyFoods() {
  const root = document.getElementById("my-foods-list");
  root.innerHTML = "";
  myFavoriteFoods.forEach((food) => root.append(createFoodChip(food)));
}

function renderPartnerFoods() {
  const root = document.getElementById("partner-foods-list");
  root.innerHTML = "";
  const foods = loadJSON(partnerFoodsKey, []);
  if (!foods.length) {
    root.textContent = "No foods added yet. Add one above.";
    return;
  }
  foods.forEach((food, index) => {
    const chip = createFoodChip(food);
    const remove = document.createElement("button");
    remove.className = "mini-remove";
    remove.textContent = "x";
    remove.addEventListener("click", () => {
      const latestFoods = loadJSON(partnerFoodsKey, []);
      latestFoods.splice(index, 1);
      saveJSON(partnerFoodsKey, latestFoods);
      renderPartnerFoods();
    });
    chip.appendChild(remove);
    root.append(chip);
  });
}

function createFoodChip(foodName) {
  const chip = document.createElement("div");
  chip.className = "food-chip";
  const text = document.createElement("span");
  text.textContent = foodName;
  chip.appendChild(text);
  return chip;
}

function bindPartnerFoodForm() {
  const form = document.getElementById("partner-food-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("partner-food-input");
    const value = input.value.trim();
    if (!value) {
      return;
    }
    const foods = loadJSON(partnerFoodsKey, []);
    foods.push(value);
    saveJSON(partnerFoodsKey, foods);
    form.reset();
    renderPartnerFoods();
  });
}

function bindRandomMessages() {
  const button = document.getElementById("new-random-message");
  button.addEventListener("click", () => {
    const message = randomMessages[Math.floor(Math.random() * randomMessages.length)];
    setText("random-message-text", message);
  });
}

function bindMiniGames() {
  const startHeartGameBtn = document.getElementById("start-heart-game");
  const heartBtn = document.getElementById("heart-button");
  const heartStatus = document.getElementById("heart-game-status");

  if (startHeartGameBtn && heartBtn && heartStatus) {
    startHeartGameBtn.addEventListener("click", () => {
      clearInterval(gameState.heartTimer);
      gameState.heartRunning = true;
      gameState.heartClicks = 0;
      gameState.heartEndTs = Date.now() + 10000;
      heartBtn.disabled = false;
      heartStatus.textContent = "Go! 10 seconds started.";

      gameState.heartTimer = setInterval(() => {
        const msLeft = gameState.heartEndTs - Date.now();
        if (msLeft <= 0) {
          finishHeartGame();
          return;
        }
        const secLeft = (msLeft / 1000).toFixed(1);
        heartStatus.textContent = `Clicks: ${gameState.heartClicks}/20 | Time left: ${secLeft}s`;
      }, 100);
    });

    heartBtn.addEventListener("click", () => {
      if (!gameState.heartRunning) {
        return;
      }
      gameState.heartClicks += 1;
      if (gameState.heartClicks >= 20) {
        finishHeartGame(true);
      }
    });
  }

  const submitGuessBtn = document.getElementById("submit-guess");
  if (submitGuessBtn) {
    submitGuessBtn.addEventListener("click", () => {
      const input = document.getElementById("guess-input");
      const status = document.getElementById("guess-status");
      if (!input || !status) {
        return;
      }

      const value = Number(input.value);
      if (!value || value < 1 || value > 20) {
        status.textContent = "Please enter a number from 1 to 20.";
        return;
      }
      if (value === gameState.guessNumber) {
        status.textContent = "You got it! You unlocked this game.";
        gameState.guessWon = true;
        checkSecretUnlock();
        return;
      }

      gameState.guessTries -= 1;
      if (gameState.guessTries <= 0) {
        status.textContent = `Out of tries. The number was ${gameState.guessNumber}. New number generated.`;
        resetGuessGame();
        return;
      }

      status.textContent = `${value < gameState.guessNumber ? "Too low." : "Too high."} ${gameState.guessTries} tries left.`;
      input.value = "";
    });
  }

  bindLoveQuizGame();
  bindMemoryMatchGame();
  bindCatchHeartGame();
  bindReflexGame();
}

function bindLoveQuizGame() {
  const startBtn = document.getElementById("start-quiz-game");
  const progress = document.getElementById("quiz-progress");
  const question = document.getElementById("quiz-question");
  const choicesWrap = document.getElementById("quiz-choices");
  const status = document.getElementById("quiz-status");

  if (!startBtn || !progress || !question || !choicesWrap || !status) {
    return;
  }

  let index = -1;
  let score = 0;

  const passScore = 4;

  function renderQuestion() {
    const current = quizQuestions[index];
    progress.textContent = `Question ${index + 1}/${quizQuestions.length}`;
    question.textContent = current.question;
    choicesWrap.innerHTML = "";

    current.choices.forEach((choice, choiceIndex) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-choice";
      btn.textContent = choice;
      btn.addEventListener("click", () => {
        if (choiceIndex === current.answer) {
          score += 1;
          status.textContent = "Correct answer.";
        } else {
          status.textContent = "Not quite. Keep going.";
        }

        index += 1;
        if (index >= quizQuestions.length) {
          finishQuiz();
          return;
        }
        renderQuestion();
      });
      choicesWrap.appendChild(btn);
    });
  }

  function finishQuiz() {
    progress.textContent = `Final score: ${score}/${quizQuestions.length}`;
    question.textContent = "";
    choicesWrap.innerHTML = "";

    if (score >= passScore) {
      gameState.quizWon = true;
      status.textContent = "You won the Love Quiz.";
      checkSecretUnlock();
    } else {
      status.textContent = "Close. Try again and beat 4/5.";
    }
  }

  startBtn.addEventListener("click", () => {
    index = 0;
    score = 0;
    startBtn.textContent = "Restart Quiz";
    status.textContent = "";
    renderQuestion();
  });
}

function bindMemoryMatchGame() {
  const startBtn = document.getElementById("start-memory-game");
  const grid = document.getElementById("memory-grid");
  const status = document.getElementById("memory-status");

  if (!startBtn || !grid || !status) {
    return;
  }

  let cards = [];
  let firstIndex = -1;
  let secondIndex = -1;
  let locked = false;
  let matchedPairs = 0;

  function renderGrid() {
    grid.innerHTML = "";
    cards.forEach((card, cardIndex) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "memory-card";
      if (card.revealed) {
        btn.classList.add("revealed");
      }
      if (card.matched) {
        btn.classList.add("matched");
      }
      btn.textContent = card.revealed || card.matched ? card.symbol : "?";
      btn.disabled = card.matched || locked;
      btn.addEventListener("click", () => onCardClick(cardIndex));
      grid.appendChild(btn);
    });
  }

  function onCardClick(cardIndex) {
    if (locked || cards[cardIndex].matched || cards[cardIndex].revealed) {
      return;
    }

    cards[cardIndex].revealed = true;

    if (firstIndex === -1) {
      firstIndex = cardIndex;
      status.textContent = "Pick another card.";
      renderGrid();
      return;
    }

    secondIndex = cardIndex;
    locked = true;
    renderGrid();

    const firstCard = cards[firstIndex];
    const secondCard = cards[secondIndex];

    if (firstCard.symbol === secondCard.symbol) {
      setTimeout(() => {
        firstCard.matched = true;
        secondCard.matched = true;
        firstCard.revealed = false;
        secondCard.revealed = false;
        matchedPairs += 1;

        firstIndex = -1;
        secondIndex = -1;
        locked = false;

        if (matchedPairs === memorySymbols.length) {
          gameState.memoryWon = true;
          status.textContent = "Perfect! You matched all pairs.";
          checkSecretUnlock();
        } else {
          status.textContent = `Great match. ${matchedPairs}/${memorySymbols.length} pairs complete.`;
        }
        renderGrid();
      }, 280);
      return;
    }

    setTimeout(() => {
      cards[firstIndex].revealed = false;
      cards[secondIndex].revealed = false;
      firstIndex = -1;
      secondIndex = -1;
      locked = false;
      status.textContent = "Not a match. Try again.";
      renderGrid();
    }, 620);
  }

  startBtn.addEventListener("click", () => {
    const deck = [...memorySymbols, ...memorySymbols];
    shuffleArray(deck);

    cards = deck.map((symbol) => ({
      symbol,
      matched: false,
      revealed: false
    }));
    firstIndex = -1;
    secondIndex = -1;
    locked = false;
    matchedPairs = 0;
    startBtn.textContent = "Restart Memory";
    status.textContent = "Game started. Find all pairs.";
    renderGrid();
  });
}

function bindCatchHeartGame() {
  const startBtn = document.getElementById("start-catch-game");
  const catchArea = document.getElementById("catch-area");
  const heart = document.getElementById("catch-heart");
  const status = document.getElementById("catch-status");

  if (!startBtn || !catchArea || !heart || !status) {
    return;
  }

  const goalClicks = 12;
  const durationMs = 15000;

  function moveHeart() {
    const areaRect = catchArea.getBoundingClientRect();
    const heartRect = heart.getBoundingClientRect();
    const maxX = Math.max(0, areaRect.width - heartRect.width - 4);
    const maxY = Math.max(0, areaRect.height - heartRect.height - 4);
    const nextX = Math.floor(Math.random() * (maxX + 1));
    const nextY = Math.floor(Math.random() * (maxY + 1));
    heart.style.left = `${nextX}px`;
    heart.style.top = `${nextY}px`;
  }

  function finishCatchGame(forceWin = false) {
    clearInterval(gameState.catchTimer);
    gameState.catchRunning = false;
    heart.disabled = true;
    const won = forceWin || gameState.catchClicks >= goalClicks;

    if (won) {
      status.textContent = "Great reflexes. Catch game complete.";
      gameState.catchWon = true;
      checkSecretUnlock();
    } else {
      status.textContent = `Time up. You caught ${gameState.catchClicks}/${goalClicks}.`;
    }
  }

  startBtn.addEventListener("click", () => {
    clearInterval(gameState.catchTimer);
    gameState.catchRunning = true;
    gameState.catchClicks = 0;
    gameState.catchEndTs = Date.now() + durationMs;
    heart.disabled = false;
    status.textContent = `Go! Catch ${goalClicks} hearts in 15 seconds.`;
    moveHeart();

    gameState.catchTimer = setInterval(() => {
      const msLeft = gameState.catchEndTs - Date.now();
      if (msLeft <= 0) {
        finishCatchGame();
        return;
      }
      const secLeft = (msLeft / 1000).toFixed(1);
      status.textContent = `Caught: ${gameState.catchClicks}/${goalClicks} | Time: ${secLeft}s`;
    }, 100);
  });

  heart.addEventListener("click", () => {
    if (!gameState.catchRunning) {
      return;
    }
    gameState.catchClicks += 1;
    if (gameState.catchClicks >= goalClicks) {
      finishCatchGame(true);
      return;
    }
    moveHeart();
  });
}

function bindReflexGame() {
  const startBtn = document.getElementById("start-reflex-game");
  const target = document.getElementById("reflex-target");
  const status = document.getElementById("reflex-status");

  if (!startBtn || !target || !status) {
    return;
  }

  function resetReflexButton() {
    target.classList.remove("ready");
    target.textContent = "Wait...";
  }

  function endReflexRun() {
    gameState.reflexRunning = false;
    gameState.reflexReady = false;
    clearTimeout(gameState.reflexTimeout);
    target.disabled = true;
    resetReflexButton();
  }

  startBtn.addEventListener("click", () => {
    endReflexRun();
    gameState.reflexRunning = true;
    target.disabled = false;
    status.textContent = "Wait for the signal...";

    const delay = 1200 + Math.floor(Math.random() * 2600);
    gameState.reflexTimeout = setTimeout(() => {
      gameState.reflexReady = true;
      gameState.reflexStartTs = performance.now();
      target.classList.add("ready");
      target.textContent = "Tap now!";
      status.textContent = "NOW!";
    }, delay);
  });

  target.addEventListener("click", () => {
    if (!gameState.reflexRunning) {
      return;
    }

    if (!gameState.reflexReady) {
      status.textContent = "Too early. Start again.";
      endReflexRun();
      return;
    }

    const reactionMs = Math.round(performance.now() - gameState.reflexStartTs);
    if (reactionMs <= 1000) {
      status.textContent = `Amazing! ${reactionMs}ms reaction time.`;
      gameState.reflexWon = true;
      checkSecretUnlock();
    } else {
      status.textContent = `${reactionMs}ms. Try to get it under 1 second.`;
    }

    endReflexRun();
  });
}

function finishHeartGame(forceWin = false) {
  const heartStatus = document.getElementById("heart-game-status");
  const heartBtn = document.getElementById("heart-button");
  clearInterval(gameState.heartTimer);
  gameState.heartRunning = false;
  heartBtn.disabled = true;

  const won = forceWin || gameState.heartClicks >= 20;
  if (won) {
    heartStatus.textContent = "You did it! Heart challenge complete.";
    gameState.heartWon = true;
    checkSecretUnlock();
  } else {
    heartStatus.textContent = `Almost! You tapped ${gameState.heartClicks}. Try again.`;
  }
}

function resetGuessGame() {
  gameState.guessNumber = Math.floor(Math.random() * 20) + 1;
  gameState.guessTries = 5;
}

function checkSecretUnlock() {
  const secret = document.getElementById("game-secret");
  if (!secret) {
    return;
  }

  const wins = [
    gameState.heartWon,
    gameState.guessWon,
    gameState.quizWon,
    gameState.memoryWon,
    gameState.catchWon,
    gameState.reflexWon
  ].filter(Boolean).length;

  if (wins >= 4) {
    secret.textContent = "Secret unlocked: No matter what game we play, I always choose you.";
    secret.classList.remove("hidden");
    return;
  }

  secret.classList.add("hidden");
}

function renderLetter() {
  setText("letter-content", letterContent);
}

function updateLetterVisibility(unlocked) {
  const lockPanel = document.getElementById("letter-lock-panel");
  const letter = document.getElementById("letter-content");
  if (!lockPanel || !letter) {
    return;
  }
  lockPanel.classList.toggle("hidden", unlocked);
  letter.classList.toggle("hidden", !unlocked);
}

function bindLetterLock() {
  const input = document.getElementById("letter-password-input");
  const unlockBtn = document.getElementById("unlock-letter-btn");
  const status = document.getElementById("letter-lock-status");
  if (!input || !unlockBtn || !status) {
    return;
  }

  renderLetter();

  const storedUnlocked = 
  updateLetterVisibility(false);

  if (storedUnlocked) {
    return;
  }

  const tryUnlock = () => {
    if (input.value.trim().toLowerCase() === LETTER_PASSWORD.toLowerCase()) {
      localStorage.setItem(letterUnlockedKey, "true");
      status.textContent = "Unlocked.";
      status.classList.remove("status-error");
      status.classList.add("status-success");
      updateLetterVisibility(true);
      return;
    }

    status.textContent = "Wrong password. Try again.";
    status.classList.remove("status-success");
    status.classList.add("status-error");
  };

  unlockBtn.addEventListener("click", tryUnlock);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      tryUnlock();
    }
  });
}

function init() {
  const runSafe = (fn) => {
    try {
      fn();
    } catch (error) {
      console.error("Init step failed:", error);
    }
  };

  runSafe(applyRotatingTheme);
  runSafe(bindMobileMenu);
  runSafe(bindDropdownMenus);
  runSafe(bindNavigation);
  runSafe(restoreLastSection);
  runSafe(bindReasonSliders);

  runSafe(renderMySongs);
  runSafe(renderPartnerSongs);
  runSafe(bindPartnerSongForm);

  runSafe(renderMyFoods);
  runSafe(renderPartnerFoods);
  runSafe(bindPartnerFoodForm);

  runSafe(bindRandomMessages);
  runSafe(bindMiniGames);
  runSafe(bindLetterLock);

  runSafe(updateTimeTogether);
  setInterval(() => runSafe(updateTimeTogether), 1000);
}

document.addEventListener("DOMContentLoaded", init);
