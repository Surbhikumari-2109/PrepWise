import { GoogleGenAI } from "@google/genai";

export const analyzeWrongAnswers = async (
  subject,
  wrongQuestions
) => {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const prompt = `
You are an educational mentor.

Subject: ${subject}

Wrong Questions:
${JSON.stringify(wrongQuestions, null, 2)}

Analyze the student's performance and provide:

1. Weak Topics
2. Concepts to Revise
3.  Learning Suggestions
4. Focus Area for Improvement

Rules:
- Keep response between 150-250 words
- Use simple beginner-friendly language
- Use headings and bullet points
- Explain concepts briefly
- Do not explain every question separately
- Be encouraging and motivating
`;

  const response =
    await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

  return response.text;
};  