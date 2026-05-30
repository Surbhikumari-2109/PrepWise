import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); //Connecting to Gemini using  API key

export const analyzeWrongAnswers = async (subject, wrongQuestions) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `
You are an educational mentor.

Subject: ${subject}

Wrong Questions:
${JSON.stringify(wrongQuestions, null, 2)}

Analyze:
1. Weak topics
2. Concepts to revise
3. Learning recommendations

Keep response short and beginner friendly.
`;

    const result = await model.generateContent(prompt);

    return result.response.text();
  } 
  catch (error) {
    console.log(error);

    return "Unable to generate AI feedback right now.";
  }
};
