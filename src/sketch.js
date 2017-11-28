//twitter api reference

const consumerKey = 'qLRIeuNKj2Ge5e8GF8k7UtXoE';
const consumerSecret = 'Yv2JSDVA5kCexyExaJskcJjlendIeBHbhTySp1eKpHKEzaUT9j';

const accessToken = '935619079687233536-ipHwXCyjjQgFAXbU33laXdW7zmpDEIK';
const accessTokenSecret = 'dc0hvpfr3ZJTWHpzkwQW52sY15mu3vw0uXpHA0qz4UJuL';

const codeBird = new Codebird();

function setup() { 
  createCanvas(400, 400);
  
  codeBird.setConsumerKey(consumerKey, consumerSecret);
  codeBird.setToken(accessToken, accessTokenSecret);
  
  const params = {
    q: 'fear',
    result_type: 'recent',
    count: 100
  };
	codeBird.__call('search_tweets', params, (result) => {
    for (let i=0; i<result.statuses.length; i++) {
    print(result.statuses[i].text);
    }
  });
}

function draw() { 
  background(220);
}