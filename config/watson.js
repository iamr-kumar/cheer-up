const ToneAnalyzerV3 = require("ibm-watson/tone-analyzer/v3");
const { IamAuthenticator } = require("ibm-watson/auth");

const toneAnalyzer = new ToneAnalyzerV3({
  version: "2017-09-21",
  authenticator: new IamAuthenticator({
    apikey: process.env.WATSON_API_KEY,
  }),
  serviceUrl: process.env.SERVICE_URL,
});

const analyzeTone = async (text) => {
  const toneParams = {
    toneInput: { text },
    contentType: "application/json",
  };

  try {
    const toneAnalysis = await toneAnalyzer.tone(toneParams);
    return toneAnalysis.result;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = analyzeTone;
