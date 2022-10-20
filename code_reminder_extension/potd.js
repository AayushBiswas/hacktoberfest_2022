let today = new Date();
let date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();








module.exports = {
  CodingNinjas_API_ENDPOINT: `https://api.codingninjas.com/api/v3/public_section/potd/problem_list?date=${date}`,
  GFG_API_ENDPOINT:
    "https://practiceapi.geeksforgeeks.org/api/v1/problems-of-day/problem/today/",
  LEETCODE_API_ENDPOINT: "https://leetcode.com/graphql",
  DAILY_CODING_CHALLENGE_QUERY: `
query questionOfToday {
	activeDailyCodingChallengeQuestion {
		date
		userStatus
		link
		question {
			acRate
			difficulty
			freqBar
			frontendQuestionId: questionFrontendId
			isFavor
			paidOnly: isPaidOnly
			status
			title
			titleSlug
			hasVideoSolution
			hasSolution
			topicTags {
				name
				id
				slug
			}
		}
	}
}`
};
