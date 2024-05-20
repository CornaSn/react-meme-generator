const memesArray = [
  {
    id: 'aag',
    name: 'Ancient Aliens Guy',
    lines: 2,
    overlays: 0,
    styles: [],
    blank: 'https://api.memegen.link/images/aag.png',
    example: {
      text: ['', 'aliens'],
      url: 'https://api.memegen.link/images/aag/_/aliens.png',
    },
    source: 'http://knowyourmeme.com/memes/ancient-aliens',
    keywords: ['History Channel'],
    _self: 'https://api.memegen.link/templates/aag',
  },
  {
    id: 'ackbar',
    name: "It's A Trap!",
    lines: 2,
    overlays: 0,
    styles: [],
    blank: 'https://api.memegen.link/images/ackbar.png',
    example: {
      text: ['', "it's a trap!"],
      url: "https://api.memegen.link/images/ackbar/_/it's_a_trap!.png",
    },
    source: 'http://knowyourmeme.com/memes/its-a-trap',
    keywords: ['Star Wards', 'Admiral Ackbar'],
    _self: 'https://api.memegen.link/templates/ackbar',
  },
  {
    id: 'afraid',
    name: 'Afraid to Ask Andy',
    lines: 2,
    overlays: 0,
    styles: [],
    blank: 'https://api.memegen.link/images/afraid.png',
    example: {
      text: [
        "i don't know what this meme is for",
        "and at this point i'm too afraid to ask",
      ],
      url: "https://api.memegen.link/images/afraid/i_don't_know_what_this_meme_is_for/and_at_this_point_i'm_too_afraid_to_ask.png",
    },
    source: 'http://knowyourmeme.com/memes/afraid-to-ask-andy',
    keywords: ['Parks and Recreation'],
    _self: 'https://api.memegen.link/templates/afraid',
  },
  {
    id: 'agnes',
    name: 'Agnes Harkness Winking',
    lines: 2,
    overlays: 0,
    styles: [],
    blank: 'https://api.memegen.link/images/agnes.png',
    example: {
      text: ['', 'i have read and agree to the terms and conditions'],
      url: 'https://api.memegen.link/images/agnes/_/i_have_read_and_agree_to_the_terms_and_conditions.png',
    },
    source: 'https://knowyourmeme.com/memes/agnes-harkness-winking',
    keywords: ['WandaVision'],
    _self: 'https://api.memegen.link/templates/agnes',
  },
];

function findMatchingMeme(memesData, name) {
  if (memesData.name.includes(name)) {
    return true;
  } else {
    return false;
  }
}

// console.log(findMatchingMeme(memesArray[2], 'Afraid'));

const searchMemeIndex = memesArray.findIndex((element) => {
  return findMatchingMeme(element, 'Trap');
});
console.log(searchMemeIndex);
