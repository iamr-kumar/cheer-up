const calcMoodPercent = (moodHistory, journalHistory) => {
  const moodCount = {
    Happy: 0,
    Sadness: 0,
    Anger: 0,
    Joy: 0,
    Fear: 0,
    Tentative: 0,
  };

  let total = 0;

  moodHistory.forEach((mood) => {
    mood.moods.forEach((moodName) => {
      moodCount[moodName] += 1;
    });
    total += mood.moods.length;
  });

  journalHistory.forEach((journal) => {
    journal.moods.forEach((moodName) => {
      moodCount[moodName] += 1;
    });
    total += journal.moods.length;
  });

  Object.keys(moodCount).forEach((moodName) => {
    moodCount[moodName] = (moodCount[moodName] / total) * 100;
  });

  return moodCount;
};

module.exports = { calcMoodPercent };
